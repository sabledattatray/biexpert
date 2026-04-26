const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const imageMap = {
  "mastering-dax-patterns-2026": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  "power-bi-fabric-integration-2026": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  "real-time-streaming-analytics-power-bi": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  "sql-server-window-functions-advanced": "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021",
  "sql-json-data-warehousing": "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000",
  "sql-deadlock-prevention-strategies": "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470",
  "ai-driven-data-quality-2026": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632",
  "power-automate-financial-reporting-workflow": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026",
  "self-healing-etl-pipelines": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
  "cdo-playbook-2026-strategy": "https://images.unsplash.com/photo-1454165833767-0274b24f6d17?q=80&w=2070",
  "measuring-bi-roi-financial-framework": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022",
  "scaling-data-culture-enterprise": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
  "gartner-magic-quadrant-2026-bi": "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070",
  "global-data-privacy-regulations-2026": "https://images.unsplash.com/photo-1508061263366-f7df158b614d?q=80&w=1470",
  "data-mesh-adoption-trends-2026": "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000"
};

async function main() {
  console.log("Updating post images with PG adapter...");
  for (const [slug, image] of Object.entries(imageMap)) {
    try {
      await prisma.post.updateMany({
        where: { slug },
        data: { image }
      });
      console.log(`Updated: ${slug}`);
    } catch (e) {
      console.error(`Error updating ${slug}: ${e.message}`);
    }
  }
  console.log("Done!");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
