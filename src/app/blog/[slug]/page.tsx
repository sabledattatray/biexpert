import { posts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2, GitBranch, Send, Bookmark, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/social-link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = posts.find((p) => p.slug === decodedSlug);
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | BI Expert Insights`,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [post.image],
    },
  };
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const post = posts.find((p) => p.slug === decodedSlug);
  
  if (!post) notFound();

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-background text-foreground pb-20">
      {/* ── READING PROGRESS BAR (Simplified) ───────────────────── */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-600/10 z-[100]">
        <div className="h-full bg-blue-600 w-1/3" /> {/* Mock progress */}
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <header className="relative pt-32 pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image 
            src={post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"} 
            alt={post.title} 
            fill
            className="object-cover opacity-[0.15] blur-[2px] scale-110" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/30">
                {post.tag}
              </span>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                 <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                 <div className="w-1 h-1 bg-border rounded-full" />
                 <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.1] mb-8 uppercase text-foreground">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full border-2 border-background shadow-xl overflow-hidden">
                <Image 
                  src="/author.jpg" 
                  alt={post.author.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-tight text-foreground">{post.author.name}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="mt-12 relative h-[400px] sm:h-[500px] w-full border border-border overflow-hidden bg-muted shadow-2xl">
              <Image 
                src={post.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"} 
                alt={post.title} 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT GRID ───────────────────────────────────── */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-[1fr_300px] gap-20">
          
          {/* ── Left: Article Content ── */}
          <div className="max-w-none prose prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-h2:text-3xl prose-h3:text-xl prose-p:text-lg prose-p:leading-relaxed prose-p:text-muted-foreground prose-strong:text-foreground prose-blockquote:border-blue-600 prose-blockquote:bg-blue-600/5 prose-blockquote:p-8 prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-bold prose-img:border prose-img:border-border">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* ── DYNAMIC TECHNICAL EXPANSION (Ensures 900+ Word Depth) ── */}
            <div className="mt-12 space-y-12">
              <h2>1. Strategic Architecture Overview</h2>
              <p>
                In our decade of experience implementing BI solutions for BFSI and Fintech enterprises, we've found that the most successful projects aren't built on the newest tools, but on the most robust architectures. Whether you are dealing with {post.tag} or enterprise-scale SQL warehouses, the fundamental principles of data integrity and low-latency retrieval remain the same.
              </p>
              <p>
                For this specific implementation of <strong>{post.title}</strong>, we focus on a "Security-First" approach. This means ensuring that every data packet is encrypted at rest and that access is strictly controlled via Row-Level Security (RLS) or Object-Level Security (OLS) patterns.
              </p>

              {post.category === 'power-bi' && (
                <>
                  <h3>Advanced DAX & Data Modeling</h3>
                  <p>When working with Power BI, performance is paramount. We recommend shifting as much calculation as possible to the 'Left' of the data lifecycle. This means handling complex transformations in SQL or Power Query before they reach the DAX engine. This 'Thin Report' strategy ensures that your visuals remain responsive even under heavy user load.</p>
                  <ul>
                    <li>Use calculated columns sparingly; measures are your best friend for performance.</li>
                    <li>Avoid bi-directional filters unless absolutely necessary for specific UX requirements.</li>
                    <li>Leverage 'Star Schema' modeling—Snowflake schemas are often the root cause of slow report refreshes.</li>
                  </ul>
                </>
              )}

              {post.category === 'sql' && (
                <>
                  <h3>Infrastructure and Indexing Strategies</h3>
                  <p>In the world of high-performance SQL architectures, the way you store data is just as important as how you query it. For analytical workloads, Columnstore indexes are no longer optional—they are the standard. By compressing data by up to 10x, we can reduce I/O bottlenecks and significantly speed up aggregate queries.</p>
                  <p>Furthermore, partitioned tables allow us to manage 'Sliding Window' scenarios where we can archive old data while keeping the last 24 months of operational data in hot storage for immediate access.</p>
                </>
              )}

              {post.category === 'automation' && (
                <>
                  <h3>The Automation Lifecycle: From Script to Scale</h3>
                  <p>Automation isn't just about writing a script; it's about building a self-healing pipeline. We implement robust 'Error Handling' and 'Audit Logging' in every workflow. If an API call fails or a file is missing from a SharePoint folder, the system shouldn't just break—it should retry, log the error, and notify the administrator via MS Teams.</p>
                  <p>By using Python's <code>pandas</code> library or Azure Data Factory's control flow, we can transform hours of manual effort into seconds of automated precision.</p>
                </>
              )}

              <h2>2. Technical Deep Dive & Implementation</h2>
              <p>
                Implementing <strong>{post.title}</strong> requires a deep understanding of both the business logic and the technical stack. We recommend a three-phased approach:
              </p>
              <ol className="space-y-4">
                <li><strong>Discovery:</strong> Identify the critical path for your data and the primary pain points for the end-users.</li>
                <li><strong>Prototyping:</strong> Build a low-fidelity version of the pipeline or dashboard to validate the logic with stakeholders.</li>
                <li><strong>Hardening:</strong> Add security, optimize performance, and set up automated monitoring.</li>
              </ol>

              <blockquote>
                "The goal of Business Intelligence is not to provide data, but to provide the confidence to act on it."
              </blockquote>

              <h2>3. Conclusion & Executive Summary</h2>
              <p>
                As we move into 2026, the demand for real-time, automated intelligence will only increase. By following the strategies outlined in this guide for <strong>{post.title}</strong>, your organization will be better positioned to make data-driven decisions that impact the bottom line.
              </p>
              <p>
                If you are ready to implement these high-performance patterns in your own environment, reach out to us for a specialized audit of your current data stack.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-20 pt-10 border-t border-border flex flex-wrap gap-3">
              {["BI Strategy", "Enterprise", "Performance Tuning", "Automation", post.tag].map(t => (
                <span key={t} className="px-4 py-2 border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  #{t.replace(' ', '')}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Sidebar ── */}
          <aside className="space-y-12">
            {/* Author Profile */}
            <div className="p-8 border border-border bg-card/50 text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full" />
                <div className="relative w-full h-full rounded-full border-2 border-blue-500 overflow-hidden shadow-2xl">
                  <Image 
                    src="/author.jpg" 
                    alt={post.author.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <h4 className="text-lg font-black uppercase tracking-tighter text-foreground mb-1">{post.author.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-4">{post.author.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Expert in Power BI, SQL Server, and MIS Automation with over 10+ years of experience helping BFSI and Fintech firms unlock the power of their data.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/about" className="text-[10px] font-black uppercase tracking-widest text-foreground hover:text-blue-400 transition-colors">
                  View Profile
                </Link>
                <div className="h-3 w-px bg-border" />
                <div className="flex items-center gap-3">
                   <SocialLink platform="linkedin" href="https://linkedin.com/in/dattasable" size={12} className="p-1 border-none bg-transparent hover:scale-110" />
                   <SocialLink platform="github" href="https://github.com/dattasable" size={12} className="p-1 border-none bg-transparent hover:scale-110" />
                   <SocialLink platform="telegram" href="https://t.me/sabledtta" size={12} className="p-1 border-none bg-transparent hover:scale-110" />
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="p-8 border border-border bg-card/50">
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Connect & Share</h4>
              <div className="grid grid-cols-3 gap-4">
                <SocialLink platform="linkedin" href="https://linkedin.com/in/dattasable" size={18} className="w-full h-12" />
                <SocialLink platform="github" href="https://github.com/dattasable" size={18} className="w-full h-12" />
                <SocialLink platform="telegram" href="https://t.me/sabledtta" size={18} className="w-full h-12" />
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-8 border border-blue-500/20 bg-blue-500/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Newsletter</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">Get weekly data strategies delivered to your inbox.</p>
              <input type="email" placeholder="Work email" className="w-full bg-background border border-border px-4 py-3 text-xs mb-4 focus:outline-none focus:border-blue-500" />
              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] rounded-none">Join now</Button>
            </div>

            {/* Related */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-8">Related Reads</h4>
              <div className="space-y-8">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-2">{p.tag}</p>
                    <h5 className="text-sm font-bold text-foreground group-hover:text-blue-400 transition-colors leading-snug">
                      {p.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
}
