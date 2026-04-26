const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:postgres@localhost:51214/postgres'
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const slugToImage = {
  "global-data-privacy-regulations-2026": "https://images.unsplash.com/photo-1563986768601-322d13a0c70d?q=80&w=2000&auto=format&fit=crop",
  "data-mesh-adoption-trends-2026": "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
  "measuring-bi-roi-financial-framework": "https://images.unsplash.com/photo-1554224155-16974a4ea275?q=80&w=2000&auto=format&fit=crop",
  "cdo-playbook-2026-strategy": "https://images.unsplash.com/photo-1522071823991-b99c223a709d?q=80&w=2000&auto=format&fit=crop"
};

async function fixSpecificImages() {
  console.log("Starting surgical image fix for specific slugs...");
  
  for (const [slug, imageUrl] of Object.entries(slugToImage)) {
    console.log(`Searching for post with slug: ${slug}`);
    const post = await prisma.post.findUnique({
      where: { slug }
    });
    
    if (post) {
      console.log(`Found post: "${post.title}". Updating image...`);
      await prisma.post.update({
        where: { id: post.id },
        data: { image: imageUrl }
      });
      console.log(`- Updated successfully.`);
    } else {
      console.log(`- Post NOT found for slug: ${slug}. Trying partial match...`);
      const partialMatches = await prisma.post.findMany({
        where: {
          slug: { contains: slug.split('-')[0] }
        }
      });
      if (partialMatches.length > 0) {
        console.log(`  Found ${partialMatches.length} partial matches. Updating first one...`);
        await prisma.post.update({
          where: { id: partialMatches[0].id },
          data: { image: imageUrl }
        });
        console.log(`  - Updated ${partialMatches[0].title}`);
      }
    }
  }
  
  // Also check for ANY post with broccoli image
  const broccoliPosts = await prisma.post.findMany({
    where: {
      image: { contains: "1508061461508" }
    }
  });
  
  if (broccoliPosts.length > 0) {
    console.log(`Found ${broccoliPosts.length} posts still using the broccoli image. Fixing...`);
    for (const bp of broccoliPosts) {
        await prisma.post.update({
            where: { id: bp.id },
            data: { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop" }
        });
        console.log(`  - Fixed: ${bp.title}`);
    }
  }

  console.log("Image fix completed! 📸✨");
  process.exit(0);
}

fixSpecificImages();
