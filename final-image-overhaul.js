const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const finalImages = {
  "measuring-bi-roi-financial-framework": "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1600",
  "sql-json-data-warehousing": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600",
  "real-time-streaming-analytics-power-bi": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
  "sql-deadlock-prevention-strategies": "https://images.unsplash.com/photo-1510511459019-5dee99c48f8d?auto=format&fit=crop&q=80&w=1600",
  "power-automate-financial-reporting-workflow": "https://images.unsplash.com/photo-1454165833767-027eeef15167?auto=format&fit=crop&q=80&w=1600",
  "data-mesh-adoption-trends-2026": "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1600",
  "gartner-magic-quadrant-2026-bi": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
  "sql-server-window-functions-advanced": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600",
  "cdo-playbook-2026-strategy": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
  "power-bi-fabric-integration-2026": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
  "self-healing-etl-pipelines": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
  "mastering-dax-patterns-2026": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
  "ai-driven-data-quality-2026": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
  "global-data-privacy-regulations-2026": "https://images.unsplash.com/photo-1563986768601-322d13a0c70d?auto=format&fit=crop&q=80&w=1600",
  "scaling-data-culture-enterprise": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
};

async function updateOne(slug, imageUrl) {
    const pool = new Pool({
        connectionString: 'postgresql://postgres:postgres@127.0.0.1:51214/template1?sslmode=disable'
    });
    const adapter = new PrismaPg(pool);
    const prisma = new PrismaClient({ adapter });
    
    try {
        await prisma.post.update({
            where: { slug },
            data: { image: imageUrl }
        });
        console.log(`Successfully updated ${slug}`);
    } catch (e) {
        console.error(`Failed ${slug}: ${e.message}`);
    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}

async function finalImageOverhaul() {
    console.log("Starting final image overhaul with fresh connections...");
    for (const [slug, imageUrl] of Object.entries(finalImages)) {
        await updateOne(slug, imageUrl);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("Overhaul complete! 🚀");
}

finalImageOverhaul();
