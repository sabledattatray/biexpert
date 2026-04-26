import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Send,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { LinkedInIcon, GithubIcon } from "@/components/social-icons";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const post = await prisma.post.findUnique({
    where: { slug },
    include: { author: true }
  });

  if (!post) {
    notFound();
  }

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Fetch some related posts from DB
  const relatedPosts = await prisma.post.findMany({
    where: { 
      published: true,
      id: { not: post.id }
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <Image 
            src={post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"} 
            alt={post.title}
            fill 
            className="object-cover opacity-[0.15] grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Hub
            </Link>

            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">
              <span className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 font-black">ARTICLE</span>
              <span>{dateFormatter.format(post.createdAt)}</span>
              <span>•</span>
              <span>10 MIN READ</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-foreground mb-10">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/20">
                  {post.author.name?.[0] || "A"}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-foreground">{post.author.name || "Admin"}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Principal Architect</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon-sm" className="rounded-none border-border hover:text-blue-400"><GithubIcon size={14} /></Button>
                <Button variant="outline" size="icon-sm" className="rounded-none border-border hover:text-blue-500"><LinkedInIcon size={14} /></Button>
                <Button variant="outline" size="icon-sm" className="rounded-none border-border hover:text-foreground"><Share2 size={14} /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">Insights</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted border border-border text-[9px] font-black uppercase tracking-widest text-muted-foreground">STRATEGY</span>
                    <span className="px-3 py-1 bg-muted border border-border text-[9px] font-black uppercase tracking-widest text-muted-foreground">ARCHITECTURE</span>
                  </div>
                </div>

                <div className="p-6 bg-blue-600/5 border border-blue-600/10">
                  <Zap size={20} className="text-blue-500 mb-4" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-foreground mb-2">Need Custom BI?</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed mb-4 uppercase tracking-tight">
                    We help enterprise teams architect scalable data systems.
                  </p>
                  <Link href="/contact" className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500 hover:underline">Book a consult</Link>
                </div>

                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 pb-2 border-b border-border">Recent Reads</h3>
                   <div className="space-y-6">
                      {relatedPosts.map(rp => (
                        <Link key={rp.id} href={`/blog/${rp.slug}`} className="block group">
                           <h5 className="text-[11px] font-bold text-foreground group-hover:text-blue-500 transition-colors uppercase leading-tight mb-1">{rp.title}</h5>
                           <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{dateFormatter.format(rp.createdAt)}</p>
                        </Link>
                      ))}
                   </div>
                </div>
              </div>
            </aside>

            {/* Main Body */}
            <div className="lg:col-span-7">
              <div 
                className="prose prose-invert prose-blue max-w-none 
                prose-h2:text-2xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-muted-foreground prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                prose-strong:text-foreground prose-strong:font-bold
                prose-ul:list-none prose-ul:pl-0
                prose-li:border-l-2 prose-li:border-blue-500 prose-li:pl-6 prose-li:py-2 prose-li:mb-4 prose-li:bg-blue-500/5
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Newsletter Callout */}
              <div className="mt-20 p-10 bg-card border border-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Send size={80} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Stay Ahead of the Data Curve</h3>
                <p className="text-muted-foreground mb-8 text-sm max-w-md relative z-10">
                  Join 5,000+ data leaders receiving our weekly technical deep-dives and architectural patterns.
                </p>
                <form className="flex flex-col sm:flex-row gap-0 max-w-md relative z-10 border border-border p-1 bg-background shadow-xl">
                  <input type="email" placeholder="work email" className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none" required />
                  <Button type="submit" className="rounded-none bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[9px] h-12 px-6">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
