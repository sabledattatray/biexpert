"use client";

import React from "react";
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

const mockPosts = [
  { id: 1, title: "Top 10 Power BI DAX tips for 2025", author: "Datta Sable", category: "Power BI", date: "Apr 24, 2026", status: "Published" },
  { id: 2, title: "SQL Architecture for Fintech Scale", author: "Datta Sable", category: "SQL", date: "Apr 20, 2026", status: "Published" },
  { id: 3, title: "Automating MIS Reporting with Python", author: "Admin", category: "Automation", date: "Apr 15, 2026", status: "Draft" },
  { id: 4, title: "Data Governance in BFSI Sector", author: "Datta Sable", category: "Consulting", date: "Apr 10, 2026", status: "Published" },
  { id: 5, title: "Predictive Analytics with Azure ML", author: "Admin", category: "Advanced BI", date: "Apr 05, 2026", status: "Archived" },
];

export default function ContentManagement() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase text-foreground">Content Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your blog posts, case studies, and site pages.</p>
        </div>
        <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20">
          <Plus size={16} className="mr-2" /> New Resource
        </Button>
      </div>

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
          <Button variant="outline" className="flex-1 lg:flex-none h-10 px-4 rounded-none border-border bg-card text-[10px] font-black uppercase tracking-widest">
            <Filter size={14} className="mr-2 text-muted-foreground" /> Filter By
          </Button>
          <div className="h-6 w-px bg-border hidden lg:block" />
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hidden lg:block">Displaying 24 Resources</p>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-card border border-border overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Title</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Author</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Category</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Date</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockPosts.map((post) => (
              <tr key={post.id} className="hover:bg-muted/30 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-muted border border-border flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-blue-500 transition-colors">{post.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Slug: /{post.title.toLowerCase().replace(/ /g, '-')}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <User size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-muted border border-border text-[9px] font-black uppercase tracking-widest text-muted-foreground">
                    <Tag size={10} className="text-blue-500" /> {post.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-none ${
                    post.status === "Published" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                    post.status === "Draft" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                    "bg-muted text-muted-foreground border border-border"
                  }`}>
                    {post.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-muted text-muted-foreground hover:text-blue-500 transition-all border border-transparent hover:border-border">
                      <Edit size={14} />
                    </button>
                    <button className="p-2 hover:bg-muted text-muted-foreground hover:text-rose-500 transition-all border border-transparent hover:border-border">
                      <Trash2 size={14} />
                    </button>
                    <button className="p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-all border border-transparent hover:border-border">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4">
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Showing 1 to 5 of 24 resources</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-10 px-4 rounded-none border-border bg-card text-[10px] font-black uppercase tracking-widest" disabled>
            Previous
          </Button>
          <Button variant="outline" className="h-10 px-4 rounded-none border-border bg-card text-[10px] font-black uppercase tracking-widest">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
