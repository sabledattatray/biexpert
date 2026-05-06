const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const updates = [
    {
      slug: "power-automate-financial-reporting-workflow",
      image: "/blog/power-automate-workflow.png"
    },
    {
      slug: "real-time-streaming-analytics-power-bi",
      image: "/blog/real-time-streaming.png"
    }
  ];

  for (const update of updates) {
    await prisma.post.update({
      where: { slug: update.slug },
      data: { image: update.image }
    });
    console.log(`Updated image for: ${update.slug}`);
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
