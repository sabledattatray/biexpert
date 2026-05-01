import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";

const isReal = (v?: string) => !!v && !v.startsWith("YOUR_");

// Build providers array dynamically to avoid 'null' type issues
const providers = [];

if (isReal(process.env.GOOGLE_CLIENT_ID) && isReal(process.env.GOOGLE_CLIENT_SECRET)) {
  providers.push(GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! }));
}

if (isReal(process.env.LINKEDIN_CLIENT_ID) && isReal(process.env.LINKEDIN_CLIENT_SECRET)) {
  providers.push(LinkedInProvider({ clientId: process.env.LINKEDIN_CLIENT_ID!, clientSecret: process.env.LINKEDIN_CLIENT_SECRET! }));
}

// Placeholder for middleware compatibility
providers.push(CredentialsProvider({
  credentials: { email: {}, password: {} },
}));

export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: providers,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAdmin = (auth?.user as any)?.role === "ADMIN";
      const isAdminPath = nextUrl.pathname.startsWith("/admin");
      const isUploadApi = nextUrl.pathname.startsWith("/api/upload");

      if (isAdminPath || isUploadApi) {
        if (isLoggedIn && isAdmin) return true;
        return false;
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
        (session.user as any).role = token.role as string;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
