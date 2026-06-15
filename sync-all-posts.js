require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

async function main() {
  console.log("Parsing blog-data.ts...");
  const tsContent = fs.readFileSync(path.join(__dirname, 'src/lib/blog-data.ts'), 'utf8');
  
  // Transform TS to CJS
  let jsContent = tsContent
    .replace(/export interface BlogPost[\s\S]*?}\r?\n/g, '') // remove interface
    .replace(/:\s*BlogPost\[\]/g, '') // remove type annotation
    .replace(/as const/g, '') // remove as const
    .replace(/export const posts/g, 'const posts') // change export to local variable
    .trim();
  
  jsContent += '\nmodule.exports = { posts };\n';
  
  fs.writeFileSync(path.join(__dirname, 'temp-blog-data.js'), jsContent);
  
  let posts;
  try {
    const data = require('./temp-blog-data.js');
    posts = data.posts;
  } catch (err) {
    console.error("Failed to require temp-blog-data.js:", err);
    throw err;
  }
  
  console.log(`Successfully parsed ${posts.length} posts.`);
  
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient({ adapter });
  
  try {
    // 1. Find or create admin user
    let admin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (!admin) {
      admin = await prisma.user.create({
        data: {
          name: "Datta Sable",
          email: "admin@biexpert.com",
          role: 'ADMIN'
        }
      });
      console.log("Created Admin User.");
    }
    
    // 2. Delete posts that are no longer active
    const activeSlugs = posts.map(p => p.slug);
    const deleteResult = await prisma.post.deleteMany({
      where: {
        slug: { notIn: activeSlugs }
      }
    });
    if (deleteResult.count > 0) {
      console.log(`Deleted ${deleteResult.count} obsolete posts from the database.`);
    }
    
    // 3. Sync all active posts
    for (const p of posts) {
      await prisma.post.upsert({
        where: { slug: p.slug },
        update: {
          title: p.title,
          content: p.content,
          image: p.image,
          excerpt: p.desc,
          published: true,
          authorId: admin.id
        },
        create: {
          slug: p.slug,
          title: p.title,
          content: p.content,
          image: p.image,
          excerpt: p.desc,
          published: true,
          authorId: admin.id
        }
      });
      console.log(`Synced: ${p.title}`);
    }
    console.log("Sync complete!");
  } finally {
    await prisma.$disconnect();
    if (fs.existsSync(path.join(__dirname, 'temp-blog-data.js'))) {
      fs.unlinkSync(path.join(__dirname, 'temp-blog-data.js'));
    }
  }
}

main().catch(console.error);
