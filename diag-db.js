const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = 'postgresql://postgres:postgres@127.0.0.1:51214/template1?sslmode=disable';

async function testConnection() {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  try {
    const post = await prisma.post.findFirst();
    console.log("Post Title:", post.title);
    console.log("Post Content Sample (first 200 chars):");
    console.log(post.content.substring(0, 200));
    console.log("\nDoes it contain <p> tags?", post.content.includes('<p>'));
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

testConnection();
