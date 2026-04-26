"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex-1 flex flex-col">{children}</main>;
  }

  return (
    <div className="relative flex min-h-screen flex-col mx-0 sm:mx-8 lg:mx-32 xl:mx-[200px] border-x border-border" style={{ boxShadow: 'var(--layout-shadow)' }}>
      <Navbar />
      <main className="flex-1 flex flex-col pt-16">{children}</main>
      <Footer />
    </div>
  );
}
