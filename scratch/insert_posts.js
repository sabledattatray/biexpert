const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const fs = require('fs');

const authorId = "cmoggpq0p0000pohyb70lhqhg";

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Please provide a JSON file path");
    process.exit(1);
  }
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: { ...post, authorId },
      create: { ...post, authorId, published: true },
    });
    console.log(`Upserted post: ${post.title}`);
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
