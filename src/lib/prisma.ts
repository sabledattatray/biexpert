import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prismaV4: PrismaClient | undefined;
}

const getPrismaClient = () => {
  const url = process.env.DATABASE_URL;
  
  if (!url || url.includes("127.0.0.1")) {
    console.warn("WARNING: DATABASE_URL is missing or local. Using standard client for build stability.");
    return new PrismaClient();
  }

  try {
    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaPg(pool);
    return new PrismaClient({ adapter });
  } catch (error) {
    console.warn("Prisma Adapter initialization failed. Falling back to default client.");
    return new PrismaClient();
  }
};

export const prisma = globalThis.prismaV4 || getPrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaV4 = prisma;

export default prisma;
