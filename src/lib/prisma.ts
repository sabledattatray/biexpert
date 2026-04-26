import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prismaV4: PrismaClient | undefined;
}

const getPrismaClient = () => {
  const url = process.env.DATABASE_URL;
  
  if (!url || url.includes("127.0.0.1")) {
    console.warn("Build/Local Mode: Using standard Prisma client.");
    return new PrismaClient();
  }

  // Simplest initialization - Prisma automatically uses DATABASE_URL from environment
  return new PrismaClient();
};

export const prisma = globalThis.prismaV4 || getPrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaV4 = prisma;

export default prisma;
