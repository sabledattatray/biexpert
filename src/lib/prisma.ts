import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as { 
  prisma: PrismaClient | undefined,
  pool: Pool | undefined 
};

const getPrismaClient = () => {
  if (!globalForPrisma.pool) {
    const connectionString = process.env.DATABASE_URL;
    globalForPrisma.pool = new Pool({ 
      connectionString,
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    
    globalForPrisma.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
  }

  const adapter = new PrismaPg(globalForPrisma.pool);
  return new PrismaClient({ adapter });
};

export const prisma = globalForPrisma.prisma || getPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
