const { PrismaClient } = require('@prisma/client');
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

const connectionString = "postgres://602cb7e81762651bd4e8c480311b89d27b3ae6fa71a4ad460da2c4059e80b38e:sk_qvRTBXAtZAyUfvy4rC19O@db.prisma.io:5432/postgres?sslmode=require";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function checkUsers() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, role: true, name: true }
    });
    console.log("Current Users:");
    console.table(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkUsers();
