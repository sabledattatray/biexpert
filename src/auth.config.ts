import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";

const isReal = (v?: string) => !!v && !v.startsWith("YOUR_");

export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    isReal(process.env.GOOGLE_CLIENT_ID) && isReal(process.env.GOOGLE_CLIENT_SECRET)
      ? GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! })
      : null,
    isReal(process.env.LINKEDIN_CLIENT_ID) && isReal(process.env.LINKEDIN_CLIENT_SECRET)
      ? LinkedInProvider({ clientId: process.env.LINKEDIN_CLIENT_ID!, clientSecret: process.env.LINKEDIN_CLIENT_SECRET! })
      : null,
    // We omit Credentials authorize logic here because it uses bcrypt/Prisma
    CredentialsProvider({
      credentials: { email: {}, password: {} },
    }),
  ].filter(Boolean),
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = (auth?.user as any)?.role === "ADMIN";
      const isAdminPath = nextUrl.pathname.startsWith("/admin");
      const isUploadApi = nextUrl.pathname.startsWith("/api/upload");

      if (isAdminPath || isUploadApi) {
        if (isLoggedIn && isAdmin) return true;
        return false; // Redirect to login
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    session({ session, token }) {
      if (token.role) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
