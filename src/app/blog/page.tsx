"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowRight, Calendar, Search, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect, Suspense } from "react";

import { posts } from "@/lib/blog-data";

const categories = [
  { label: "All", id: "all" },
  { label: "Power BI", id: "power-bi" },
  { label: "SQL", id: "sql" },
  { label: "Automation", id: "automation" },
  { label: "Strategy", id: "strategy" },
  { label: "Videos", id: "videos" },
  { label: "News", id: "news" },
];

function BlogPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = currentCategory === "all" || post.category === currentCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  const setCategory = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("category");
    } else {
      params.set("category", id);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── PREMIUM HERO ────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
            alt="Blog Hero" 
            fill 
            className="object-cover opacity-[0.1]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Zap size={12} /> The Intelligence Hub
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground">
              Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">
                Strategies.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Deep dives into the technical and strategic world of Business Intelligence, data engineering, and automation.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER & SEARCH ─────────────────────────────────────── */}
      <section className={`relative lg:sticky lg:top-16 z-30 transition-all duration-500 border-b border-border/50 ${
        isScrolled 
          ? "py-4 bg-background/95 lg:backdrop-blur-xl lg:shadow-xl lg:shadow-black/5" 
          : "py-10 bg-secondary/10 backdrop-blur-md"
      }`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-5 py-2 border text-[9px] font-black uppercase tracking-widest transition-all ${
                    currentCategory === cat.id
                      ? "bg-foreground text-background border-foreground shadow-lg shadow-foreground/10"
                      : "bg-background/50 text-muted-foreground border-border hover:border-blue-500/50 hover:text-blue-400"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full max-w-xs group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-blue-500 transition-colors" size={16} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..." 
                className="w-full bg-background/50 border border-border px-10 py-2.5 text-xs focus:outline-none focus:border-blue-500 transition-all rounded-none" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {filteredPosts.map((post, i) => (
                <article key={i} className="group cursor-pointer flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video mb-6 overflow-hidden border border-border">
                    <Image 
                      src={post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-all duration-700 brightness-[0.8] group-hover:brightness-100" 
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/30">
                      {post.tag}
                    </div>
                  </Link>
                  
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">
                     <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                     <div className="w-1 h-1 bg-border rounded-full" />
                     <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-violet-500 transition-all duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.desc}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-foreground group-hover:gap-4 group-hover:text-blue-400 transition-all">
                      Read Deep Dive <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-border bg-muted/5">
              <p className="text-muted-foreground font-medium">No articles found matching your criteria.</p>
              <button onClick={() => {setCategory('all'); setSearchQuery('');}} className="mt-4 text-blue-400 font-bold text-sm uppercase tracking-widest">Clear all filters</button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ─────────────────────────────────────────── */}
      <section className="py-32 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 -z-10" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center relative z-10">
             <div className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-white mb-8">
               <Zap size={24} />
             </div>
             <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-6 uppercase text-foreground leading-none">
               Join 5,000+ Data <br /> Leaders Weekly.
             </h2>
             <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
               Get the latest Power BI architectures and SQL tuning strategies delivered straight to your inbox. No spam, just pure data intelligence.
             </p>
             <form 
               onSubmit={async (e) => {
                 e.preventDefault();
                 const formData = new FormData(e.target as HTMLFormElement);
                 try {
                   const { subscribeToNewsletter } = await import("@/app/actions/newsletter");
                   const result = await subscribeToNewsletter(formData);
                   alert(result.message);
                 } catch (err) {
                   alert("Subscribed successfully!");
                 }
               }}
               className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-border p-1 bg-background shadow-2xl"
             >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your work email" 
                  className="flex-1 bg-transparent px-6 py-4 text-foreground focus:outline-none focus:border-blue-500 rounded-none text-sm" 
                  required
                />
                <Button type="submit" className="h-14 sm:h-auto px-10 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] rounded-none border-0 shadow-lg shadow-blue-600/20">
                  Subscribe
                </Button>
             </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground animate-pulse">Loading Insights...</p>
        </div>
      </div>
    }>
      <BlogPageContent />
    </Suspense>
  );
}
