const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@localhost:51214/postgres'
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const updates = [
  {
    title: "Data Mesh in 2026: From Hype to Enterprise Reality",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Global Data Privacy in 2026: Navigating the New Landscape",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "The Financial Framework for Measuring BI ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "The 2026 CDO Playbook: Leading with a Data-First Mindset",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Automating the Financial Close: Power Automate Workflows",
    image: "https://images.unsplash.com/photo-1554224155-672d241f4701?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "SQL Deadlock Prevention: Maintaining High Availability",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Real-Time Streaming Analytics: Sub-Second Dashboards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
  }
];

async function fixBrokenImages() {
  console.log("Fixing 7 problematic blog post images...");
  
  for (const item of updates) {
    console.log(`Updating post: "${item.title}"`);
    const result = await prisma.post.updateMany({
      where: {
        title: { contains: item.title.substring(0, 20) } // Flexible matching
      },
      data: {
        image: item.image
      }
    });
    console.log(`- Updated ${result.count} posts.`);
  }

  console.log("Image fix complete! 📸");
  process.exit(0);
}

fixBrokenImages();
