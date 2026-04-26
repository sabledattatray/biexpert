const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log('--- FETCHING ALL POST SLUGS ---');
  const posts = await prisma.post.findMany({
    select: { slug: true, title: true }
  });
  console.log(JSON.stringify(posts, null, 2));
  await prisma.$disconnect();
}

main().catch((e) => console.error(e));
