const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const connectionString = "postgres://602cb7e81762651bd4e8c480311b89d27b3ae6fa71a4ad460da2c4059e80b38e:sk_qvRTBXAtZAyUfvy4rC19O@db.prisma.io:5432/postgres?sslmode=require";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function scanPosts() {
  try {
    const posts = await prisma.post.findMany();
    console.log(`Found ${posts.length} posts.`);
    
    const suspiciousPatterns = [
      '<script',
      'javascript:',
      '<iframe',
      'eval(',
      'unescape(',
      'document.cookie',
      'window.location',
    ];

    posts.forEach(post => {
      let found = false;
      suspiciousPatterns.forEach(pattern => {
        if (post.content.toLowerCase().includes(pattern.toLowerCase())) {
          console.log(`[SUSPICIOUS] Post ID: ${post.id}, Title: "${post.title}" contains pattern: "${pattern}"`);
          found = true;
        }
      });
      
      // Also check for external links that aren't trusted
      const links = post.content.match(/href="([^"]+)"/g);
      if (links) {
        links.forEach(link => {
          const url = link.match(/"([^"]+)"/)[1];
          if (!url.startsWith('/') && !url.includes('biexpert.online') && !url.includes('unsplash.com') && !url.includes('googletagmanager.com')) {
             console.log(`[LINK] Post ID: ${post.id}, External link found: ${url}`);
          }
        });
      }
    });

    console.log("Scan complete.");
  } catch (error) {
    console.error("Error during scan:", error);
  } finally {
    await prisma.$disconnect();
  }
}

scanPosts();
