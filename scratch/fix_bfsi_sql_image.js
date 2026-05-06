const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.post.update({
    where: { slug: "optimizing-sql-large-bfsi-datasets" },
    data: { image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1600&auto=format&fit=crop" }
  });
  console.log("Updated image for: optimizing-sql-large-bfsi-datasets");
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
