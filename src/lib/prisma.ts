import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prismaV4: PrismaClient | undefined;
}

const getPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    console.warn("WARNING: DATABASE_URL is not defined!");
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
};

export const prisma = globalThis.prismaV4 || getPrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaV4 = prisma;

export default prisma;
