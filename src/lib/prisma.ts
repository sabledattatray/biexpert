import { PrismaClient } from "@prisma/client";

// This function only runs when the database is actually NEEDED
const getPrismaClient = () => {
  return new PrismaClient();
};

declare global {
  var prismaV4: PrismaClient | undefined;
}

// We use a Proxy to ensure new PrismaClient() is NEVER called during the Build phase
export const prisma = new Proxy({} as PrismaClient, {
  get: (target, prop) => {
    // If we are building, return a dummy object to stop the crash
    if (process.env.NEXT_PHASE === "phase-production-build") {
      if (prop === "findMany" || prop === "findUnique" || prop === "findFirst") {
        return () => Promise.resolve([]);
      }
      return () => ({});
    }
    
    if (!globalThis.prismaV4) {
      globalThis.prismaV4 = getPrismaClient();
    }
    
    const value = (globalThis.prismaV4 as any)[prop];
    if (typeof value === 'function') {
      return value.bind(globalThis.prismaV4);
    }
    return value;
  }
});

export default prisma;
