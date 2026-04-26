const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@127.0.0.1:51214/template1?sslmode=disable'
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const idToImage = {
  "cmog3v010000fuchy2e89170b": "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=1600", // ROI
  "cmog3v00c000cuchykt68wfkv": "https://images.unsplash.com/photo-1454165833767-027eeef15167?auto=format&fit=crop&q=80&w=1600", // Close
  "cmog3v021000iuchyn2556dvo": "https://images.unsplash.com/photo-1563986768601-322d13a0c70d?auto=format&fit=crop&q=80&w=1600", // Privacy
  "cmog3v01d000guchypkqo9s5f": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600", // Culture
  "cmog3v00r000euchy0jzvwcrn": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600", // CDO
  "cmog3uzz90007uchyaagtn03c": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600", // Streaming
  "cmog3uzzv000auchyk4nlugdq": "https://images.unsplash.com/photo-1510511459019-5dee99c48f8d?auto=format&fit=crop&q=80&w=1600"  // Deadlock
};

async function fixProblematicIds() {
  console.log("Starting ID-based surgical fix for 7 posts...");
  for (const [id, imageUrl] of Object.entries(idToImage)) {
    try {
        console.log(`Updating ${id}...`);
        await prisma.post.update({
          where: { id },
          data: { image: imageUrl }
        });
        console.log(`✅ Success`);
    } catch (e) {
        console.error(`❌ Failed: ${id} - ${e.message}`);
    }
  }
  console.log("Fix complete! 🚀");
  process.exit(0);
}

fixProblematicIds();
