const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@localhost:51214/postgres'
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const imageUpdates = {
  "cmog3v021000iuchyn2556dvo": "https://images.unsplash.com/photo-1563986768601-322d13a0c70d?q=80&w=2000&auto=format&fit=crop", // Privacy - Lock/Blue
  "cmog3v01d000guchypkqo9s5f": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop", // Culture - Team
  "cmog3v00m000duchyjboncsth": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop", // ETL - Circuit
  "cmog3uzy30005uchyvj3lt058": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", // DAX - Charts
  "cmog3v002000buchyipl2qeg6": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop", // AI - Neural
  "cmog3uzze0008uchyw7w19dio": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop", // SQL - Code
  "cmog3uzz90007uchyaagtn03c": "https://images.unsplash.com/photo-1558489580-f169229d727b?q=80&w=2000&auto=format&fit=crop", // Streaming - Dynamic lines
  "cmog3uzyw0006uchyu414i0uo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", // Fabric - Network
  "cmog3v02c000juchy9zokfrlb": "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop", // Mesh - Servers
  "cmog3v01q000huchyrnxxbuoj": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop", // Magic Quadrant - Office
  "cmog3v00r000euchy0jzvwcrn": "https://images.unsplash.com/photo-1522071823991-b99c223a709d?q=80&w=2000&auto=format&fit=crop", // CDO - Leader
  "cmog3v010000fuchy2e89170b": "https://images.unsplash.com/photo-1554224155-16974a4ea275?q=80&w=2000&auto=format&fit=crop", // ROI - Finance
  "cmog3v00c000cuchykt68wfkv": "https://images.unsplash.com/photo-1454165833767-027eeef15167?q=80&w=2000&auto=format&fit=crop", // Finance Automation - Typing
  "cmog3uzzv000auchyk4nlugdq": "https://images.unsplash.com/photo-1510511459019-5dee99c48f8d?q=80&w=2000&auto=format&fit=crop", // Deadlock - Lock
  "cmog3uzzp0009uchy6eh5ly0i": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop", // JSON - Tech desk
};

async function updateImages() {
  for (const [id, url] of Object.entries(imageUpdates)) {
    console.log(`Updating image for post ${id}...`);
    await prisma.post.update({
      where: { id },
      data: { image: url }
    });
  }
  console.log("All images updated successfully! 📸");
  process.exit(0);
}

updateImages();
