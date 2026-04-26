import React from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  FileText,
  Clock,
  User,
  Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { DeleteButton } from "./delete-button";

const fallbackPosts = [
  {
    id: "f1",
    slug: "mastering-dax-patterns-2026",
    title: "Mastering Advanced DAX: High-Performance Patterns for 2026",
    createdAt: new Date(),
    published: true,
    author: { name: "Datta Sable", email: "admin@biexpert.com" }
  },
  {
    id: "f2",
    slug: "power-bi-fabric-integration-2026",
    title: "Microsoft Fabric & Power BI: The Unified Data Architecture",
    createdAt: new Date(),
    published: true,
    author: { name: "Datta Sable", email: "admin@biexpert.com" }
  },
  {
    id: "f3",
    slug: "real-time-streaming-analytics-power-bi",
    title: "Real-Time Streaming Analytics: Sub-Second Dashboards",
    createdAt: new Date(),
    published: true,
    author: { name: "Datta Sable", email: "admin@biexpert.com" }
  }
];

export default async function ContentManagement() {
  let posts: any[] = [];
  let isFallback = false;
  
  try {
    posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true }
    });
  } catch (error) {
    // Database is currently unreachable, using demo data
    posts = fallbackPosts;
    isFallback = true;
  }

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-foreground leading-none">Content Management</h1>
          <p className="text-muted-foreground text-sm mt-2">Manage your blog posts, case studies, and site pages.</p>
        </div>
        <Link 
          href="/admin/content/new"
          className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-12 px-8 flex items-center justify-center shadow-lg shadow-blue-500/20 transition-colors"
        >
          <Plus size={16} className="mr-2" /> New Resource
        </Link>
      </div>

      {isFallback && (
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 flex items-center gap-4">
          <div className="h-10 w-10 bg-amber-500/20 flex items-center justify-center shrink-0">
             <Clock size={20} className="text-amber-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-500 uppercase tracking-tight">Database Connectivity Alert</p>
            <p className="text-xs text-muted-foreground">The local database proxy is currently unresponsive. Displaying <b>Demo Resources</b> for preview purposes. Your actual posts are safe and will appear once the connection is restored.</p>
          </div>
        </div>
      )}

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-4 bg-card border border-border p-4">
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search by title, author, or tag..." 
            className="w-full bg-muted/50 border border-border pl-10 pr-4 h-10 text-xs focus:outline-none focus:border-blue-500 rounded-none transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <Button variant="outline" className="flex-1 lg:flex-none h-10 px-4 rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest cursor-pointer">
            <Filter size={14} className="mr-2 text-muted-foreground" /> Filter By
          </Button>
          <div className="h-6 w-px bg-border hidden lg:block" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hidden lg:block">Displaying {posts.length} Resources</p>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-card border border-border overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Title</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Author</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Date</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-muted/30 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-muted border border-border flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">{post.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Slug: /{post.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <User size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.author.name || post.author.email}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{dateFormatter.format(post.createdAt)}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-none ${
                    post.published ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                  }`}>
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link 
                      href={`/admin/content/${post.id}`}
                      className="p-2 hover:bg-muted text-muted-foreground hover:text-blue-500 transition-all border border-transparent hover:border-border"
                    >
                      <Edit size={14} />
                    </Link>
                    <DeleteButton id={post.id} />
                    <Link 
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-transparent hover:border-border"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
