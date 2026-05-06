const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const verifiedImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop";
  
  const slugs = [
    "optimizing-sql-large-bfsi-datasets",
    "data-mesh-adoption-trends-2026"
  ];

  for (const slug of slugs) {
    await prisma.post.update({
      where: { slug },
      data: { image: verifiedImage }
    });
    console.log(`Updated ${slug} with verified image.`);
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
