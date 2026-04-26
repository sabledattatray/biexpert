const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
require('dotenv').config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  console.log('--- BLOG IMAGE REPAIR START ---');
  
  const posts = [
    {
      slug: 'real-time-streaming-analytics-power-bi',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      slug: 'power-automate-financial-reporting-workflow',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop'
    }
  ];

  for (const post of posts) {
    try {
      const record = await prisma.post.findUnique({ where: { slug: post.slug } });
      
      if (record) {
        await prisma.post.update({
          where: { slug: post.slug },
          data: { image: post.image }
        });
        console.log(`[SUCCESS] Updated image for: ${record.title}`);
      } else {
        console.log(`[WARNING] Post with slug "${post.slug}" not found in database.`);
      }
    } catch (e) {
      console.log(`[ERROR] Failed to update ${post.slug}: ${e.message}`);
    }
  }
  
  console.log('--- BLOG IMAGE REPAIR COMPLETE ---');
  await prisma.$disconnect();
}

main().catch((e) => console.error(e));
