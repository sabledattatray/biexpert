import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
import { normalizeAndValidateEmail } from "@/lib/email-normalizer";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    ...authConfig.providers.filter((p: any) => p.id !== "credentials"),
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) return null;
        const validation = normalizeAndValidateEmail(credentials.email);
        if (!validation.isValid || !validation.normalizedEmail) return null;

        const user = await (prisma as any).user.findUnique({
          where: { email: validation.normalizedEmail }
        });
        if (!user || !user.password) return null;
        const isValid = await bcrypt.compare(credentials.password as string, user.password);
        return isValid ? (user as any) : null;
      },
    }
  ],
});
