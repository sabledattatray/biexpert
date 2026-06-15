import React from "react";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { posts as postsToSync } from "@/lib/blog-data";

export const dynamic = 'force-dynamic';

export default async function SeedPage() {
  try {
    // 1. Find or create admin user
    let admin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (!admin) {
      admin = await prisma.user.create({
        data: {
          name: "Datta Sable",
          email: "admin@biexpert.com",
          role: 'ADMIN'
        }
      });
    }

    const adminId = admin.id;

    // 2. Sync posts with full content and images
    for (const p of postsToSync) {
      await prisma.post.upsert({
        where: { slug: p.slug },
        update: {
          title: p.title,
          content: p.content,
          image: p.image,
          published: true,
          authorId: adminId
        },
        create: {
          slug: p.slug,
          title: p.title,
          content: p.content,
          image: p.image,
          published: true,
          authorId: adminId
        }
      });
    }

    console.log("Seed Complete!");
    redirect("/admin/content");
    return null;
  } catch (error: any) {
    if (error?.message === 'NEXT_REDIRECT') throw error;
    console.error("SEED ERROR:", error);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background p-10">
        <div className="max-w-2xl w-full bg-rose-500/10 border border-rose-500/20 p-8">
           <h1 className="text-2xl font-bold uppercase tracking-tighter text-rose-500 mb-4">Activation Error</h1>
           <pre className="text-xs text-muted-foreground whitespace-pre-wrap bg-background p-4 border border-border">
             {error.message}
           </pre>
           <a 
             href="/admin/seed"
             className="mt-6 inline-block px-6 py-2 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest text-center"
           >
             Retry Activation
           </a>
        </div>
      </div>
    );
  }
}
