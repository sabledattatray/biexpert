const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Install sharp if not present
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp...');
  execSync('npm install sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');

const publicDir = path.join(process.cwd(), 'public');

async function convertDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await convertDir(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      console.log(`Converting ${file} to WebP...`);
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
      // Optional: Delete original
      // fs.unlinkSync(fullPath);
    }
  }
}

convertDir(publicDir)
  .then(() => console.log('All images converted to WebP!'))
  .catch(err => console.error(err));
