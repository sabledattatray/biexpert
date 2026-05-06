const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const slug = "optimizing-sql-large-bfsi-datasets";
  const post = await prisma.post.findUnique({ where: { slug } });
  
  if (post) {
    console.log(`Found post. Current image: ${post.image}`);
    await prisma.post.update({
      where: { slug },
      data: { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" }
    });
    console.log("Updated image successfully.");
  } else {
    console.log("Post not found by slug!");
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
