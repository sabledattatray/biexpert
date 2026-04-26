import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";

const isReal = (v?: string) => !!v && !v.startsWith("YOUR_");

const socialProviders = [
  isReal(process.env.GOOGLE_CLIENT_ID) && isReal(process.env.GOOGLE_CLIENT_SECRET)
    ? GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      })
    : null,
  isReal(process.env.LINKEDIN_CLIENT_ID) && isReal(process.env.LINKEDIN_CLIENT_SECRET)
    ? LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID!,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      })
    : null,
  isReal(process.env.FACEBOOK_CLIENT_ID) && isReal(process.env.FACEBOOK_CLIENT_SECRET)
    ? FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      })
    : null,
].filter(Boolean);

const isBuild = process.env.NODE_ENV === "production" && process.env.NEXT_PHASE === "phase-production-build";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: isBuild ? undefined : (PrismaAdapter(prisma as any) as any),
  session: { strategy: "jwt" },
  providers: [
    ...(socialProviders as any[]),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await (prisma as any).user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.password) return null;

        const isValid = await bcrypt.compare(credentials.password as string, user.password);
        if (!isValid) return null;
        
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "build_time_fallback_secret_do_not_use_in_prod",
});

