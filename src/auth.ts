import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

const isReal = (v?: string) => !!v && !v.startsWith("YOUR_");

const getOptions = () => {
  const isBuild = process.env.NEXT_PHASE === "phase-production-build";
  
  return {
    adapter: isBuild ? undefined : PrismaAdapter(prisma),
    session: { strategy: "jwt" as const },
    providers: [
      isReal(process.env.GOOGLE_CLIENT_ID) && isReal(process.env.GOOGLE_CLIENT_SECRET)
        ? GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! })
        : null,
      isReal(process.env.LINKEDIN_CLIENT_ID) && isReal(process.env.LINKEDIN_CLIENT_SECRET)
        ? LinkedInProvider({ clientId: process.env.LINKEDIN_CLIENT_ID!, clientSecret: process.env.LINKEDIN_CLIENT_SECRET! })
        : null,
      CredentialsProvider({
        name: "Credentials",
        credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) return null;
          const user = await (prisma as any).user.findUnique({ where: { email: credentials.email as string } });
          if (!user || !user.password) return null;
          const isValid = await bcrypt.compare(credentials.password as string, user.password);
          return isValid ? user : null;
        },
      }),
    ].filter(Boolean),
    callbacks: {
      async session({ session, token }: any) {
        if (token?.sub) session.user.id = token.sub;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET || "build_fallback_secret",
  };
};

export const { handlers, signIn, signOut, auth } = NextAuth(getOptions() as any);
