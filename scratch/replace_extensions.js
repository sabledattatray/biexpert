const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(tsx|ts|jsx|js)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace only strings that look like local paths or images
      // Pattern: "/path/to/image.png"
      const newContent = content.replace(/"(\/[^"]+)\.(png|jpg|jpeg)"/g, '"$1.webp"');
      
      if (content !== newContent) {
        console.log(`Updating extensions in ${file}...`);
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

walkDir(srcDir);
console.log('Finished updating image extensions in code.');
