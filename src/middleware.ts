import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const role = (req.auth?.user as any)?.role;

  const isAdminPath = nextUrl.pathname.startsWith("/admin");
  const isUploadApi = nextUrl.pathname.startsWith("/api/upload");

  // Protect admin paths and upload API
  if (isAdminPath || isUploadApi) {
    if (!isLoggedIn || role !== "ADMIN") {
       // If it's an API route, return 401
       if (nextUrl.pathname.startsWith("/api/")) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
       }
       // Otherwise redirect to login
       return NextResponse.redirect(new URL("/api/auth/signin", nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/api/upload/:path*"],
};
