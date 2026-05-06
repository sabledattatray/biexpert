const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const posts = await prisma.post.findMany();
  for (const post of posts) {
    if (post.image && /\.(png|jpg|jpeg)$/i.test(post.image)) {
      const newImage = post.image.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      await prisma.post.update({
        where: { id: post.id },
        data: { image: newImage }
      });
      console.log(`Updated post image: ${post.slug}`);
    }
  }

  const projects = await prisma.project.findMany();
  for (const project of projects) {
    if (project.image && /\.(png|jpg|jpeg)$/i.test(project.image)) {
      const newImage = project.image.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      await prisma.project.update({
        where: { id: project.id },
        data: { image: newImage }
      });
      console.log(`Updated project image: ${project.slug}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
