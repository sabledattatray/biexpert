import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Search, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { posts as staticPosts } from "@/lib/blog-data";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const categories = [
  { label: "All", id: "all" },
  { label: "Power BI", id: "power-bi" },
  { label: "SQL", id: "sql" },
  { label: "Automation", id: "automation" },
  { label: "Strategy", id: "strategy" },
  { label: "Videos", id: "videos" },
  { label: "News", id: "news" },
];

export default async function BlogPage({ 
  searchParams 
  }: { 
  searchParams: Promise<{ category?: string, search?: string }> 
  }) {
  const { category = "all", search = "" } = await searchParams;
  
  let posts: any[] = [];
  let counts: Record<string, number> = {};
  
  let dbPosts: any[] = [];
  try {
    dbPosts = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    // Database is currently unreachable
  }

  // Create a map of slugs from DB posts for fast lookup
  const dbSlugs = new Set(dbPosts.map(p => p.slug));

  // Build a list of all posts, prioritizing DB posts and falling back to static posts
  const allPostsCombined = [
    ...dbPosts.map(dbp => {
      const staticMeta = staticPosts.find(sp => sp.slug === dbp.slug);
      return {
        id: dbp.id,
        slug: dbp.slug,
        title: dbp.title,
        excerpt: dbp.excerpt || staticMeta?.desc || "",
        content: dbp.content,
        image: dbp.image || staticMeta?.image || null,
        createdAt: dbp.createdAt,
        author: { name: dbp.author?.name || staticMeta?.author.name || "Datta Sable" },
        category: staticMeta?.category || "all",
        tag: staticMeta?.tag || "",
        readTime: staticMeta?.readTime || "10 min read"
      };
    }),
    ...staticPosts
      .filter(sp => !dbSlugs.has(sp.slug))
      .map((sp, index) => ({
        id: `fallback-${sp.slug}-${index}`,
        slug: sp.slug,
        title: sp.title,
        excerpt: sp.desc,
        content: sp.content,
        image: sp.image,
        createdAt: new Date(sp.date || Date.now()),
        author: { name: sp.author.name },
        category: sp.category,
        tag: sp.tag,
        readTime: sp.readTime
      }))
  ];

  // Compute category counts based on combined posts
  counts = categories.reduce((acc, cat) => {
    const count = allPostsCombined.filter(p => 
      cat.id === "all" || 
      p.category.toLowerCase() === cat.id.toLowerCase() ||
      p.tag.toLowerCase().includes(cat.id.toLowerCase())
    ).length;
    return { ...acc, [cat.id]: count };
  }, {} as Record<string, number>);

  // Filter posts based on search query and category Selection
  posts = allPostsCombined.filter(p => {
    const matchCat = category === "all" || 
      p.category.toLowerCase() === category.toLowerCase() ||
      p.tag.toLowerCase().includes(category.toLowerCase());
      
    const matchSearch = !search || 
      p.title.toLowerCase().includes(search.toLowerCase()) || 
      p.content.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
      
    return matchCat && matchSearch;
  });

  // Sort combined results by date descending
  posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
            alt="Blog Hero" 
            fill 
            className="object-cover opacity-[0.07]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> The Intelligence Hub
            </div>
            
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Insights &  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">
                Strategies.
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Technical and strategic deep dives into BI, Data Engineering, and Automation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 py-6 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.id === "all" ? "/blog" : `/blog?category=${cat.id}`}
                  className={`px-5 py-2 border text-[9px] font-bold uppercase tracking-widest transition-all ${
                    category === cat.id
                      ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/10"
                      : "bg-background/50 text-muted-foreground border-border hover:border-blue-500/50 hover:text-blue-400"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {cat.label}
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                      category === cat.id 
                        ? "bg-background/20 text-background" 
                        : "bg-blue-600/10 text-blue-500"
                    }`}>
                      {counts[cat.id] || 0}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <form action="/blog" className="relative w-full max-w-xs group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                name="search"
                type="text" 
                defaultValue={search}
                placeholder="Search articles..." 
                className="w-full bg-background/50 border border-border px-10 py-2.5 text-xs focus:outline-none focus:border-blue-500 transition-all rounded-none" 
              />
            </form>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {posts.map((post) => (
                <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video mb-6 overflow-hidden border border-border">
                    <Image 
                      src={post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-all duration-700 brightness-[0.8] group-hover:brightness-100" 
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-600/30">
                       RESOURCE
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-4">
                     <span className="flex items-center gap-1.5"><Calendar size={12} /> {dateFormatter.format(post.createdAt)}</span>
                     <div className="w-1 h-1 bg-border rounded-full" />
                     <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter leading-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-500 transition-all duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <div className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3" dangerouslySetInnerHTML={{ __html: (post.content || "").substring(0, 150) + "..." }} />

                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground group-hover:gap-4 group-hover:text-blue-400 transition-all">
                      Read Deep Dive <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-border bg-muted/5">
              <p className="text-muted-foreground font-medium">No articles found matching your criteria.</p>
              <Link href="/blog" className="mt-4 inline-block text-blue-400 font-bold text-sm uppercase tracking-widest">Clear all filters</Link>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
