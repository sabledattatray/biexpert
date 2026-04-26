"use client";

import React from "react";
import { UploadCloud, Search, Filter, Trash2, Link as LinkIcon, Download, ImageIcon, FileVideo, File } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockMedia = [
  { id: 1, name: "hero-dashboard-preview.png", type: "image", size: "1.2 MB", date: "Apr 25, 2026", url: "/media/hero-dashboard.png", previewUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
  { id: 2, name: "report-automation-demo.mp4", type: "video", size: "14.5 MB", date: "Apr 22, 2026", url: "/media/demo.mp4" },
  { id: 3, name: "case-study-fintech-bg.jpg", type: "image", size: "3.4 MB", date: "Apr 18, 2026", url: "/media/fintech.jpg", previewUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80" },
  { id: 4, name: "data-architecture-diagram.pdf", type: "document", size: "850 KB", date: "Apr 10, 2026", url: "/media/diagram.pdf" },
  { id: 5, name: "client-logo-pack.zip", type: "archive", size: "4.2 MB", date: "Apr 05, 2026", url: "/media/logos.zip" },
  { id: 6, name: "author-datta-sable.jpg", type: "image", size: "1.8 MB", date: "Mar 30, 2026", url: "/media/profile.jpg", previewUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { id: 7, name: "power-bi-dashboard-1.png", type: "image", size: "2.1 MB", date: "Mar 28, 2026", url: "/media/dashboard1.png", previewUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
  { id: 8, name: "power-bi-dashboard-2.png", type: "image", size: "1.9 MB", date: "Mar 28, 2026", url: "/media/dashboard2.png", previewUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80" },
];

export default function MediaLibrary() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-foreground">Media Library</h1>
          <p className="text-muted-foreground text-sm mt-1">Centralized repository for all site assets and files.</p>
        </div>
        <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20">
          <UploadCloud size={16} className="mr-2" /> Upload Assets
        </Button>
      </div>

      {/* Upload Zone */}
      <div className="border-2 border-dashed border-border bg-card/50 hover:bg-muted/50 transition-colors p-12 text-center flex flex-col items-center justify-center gap-4 cursor-pointer">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
          <UploadCloud size={24} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-foreground">Drag and drop files here</h3>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">or click to browse from your computer (Max 50MB)</p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row items-center gap-4 bg-card border border-border p-4">
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search files by name or extension..." 
            className="w-full bg-muted/50 border border-border pl-10 pr-4 h-10 text-xs focus:outline-none focus:border-blue-500 rounded-none transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto no-scrollbar">
          <Button variant="outline" className="h-10 px-4 rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            All Files
          </Button>
          <Button variant="ghost" className="h-10 px-4 rounded-none text-muted-foreground text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            Images
          </Button>
          <Button variant="ghost" className="h-10 px-4 rounded-none text-muted-foreground text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            Videos
          </Button>
          <Button variant="ghost" className="h-10 px-4 rounded-none text-muted-foreground text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
            Documents
          </Button>
          <div className="h-6 w-px bg-border hidden lg:block" />
          <Button variant="outline" className="h-10 px-4 rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest">
            <Filter size={14} className="mr-2 text-muted-foreground" /> Sort
          </Button>
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {mockMedia.map((file) => (
          <div key={file.id} className="bg-card border border-border group relative overflow-hidden flex flex-col">
            <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
              {file.type === "image" && file.previewUrl ? (
                <img src={file.previewUrl} alt={file.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : file.type === "image" ? (
                <div className="p-4"><ImageIcon size={32} className="text-muted-foreground/30" /></div>
              ) : file.type === "video" ? (
                <div className="p-4"><FileVideo size={32} className="text-muted-foreground/30" /></div>
              ) : (
                <div className="p-4"><File size={32} className="text-muted-foreground/30" /></div>
              )}
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="secondary" className="h-6 w-6 rounded-none bg-blue-500 hover:bg-blue-600 text-white border-0">
                  <LinkIcon size={12} />
                </Button>
                <Button size="icon" variant="secondary" className="h-6 w-6 rounded-none bg-card hover:bg-muted text-foreground border-border">
                  <Download size={12} />
                </Button>
                <Button size="icon" variant="secondary" className="h-6 w-6 rounded-none bg-rose-500/10 hover:bg-rose-500 text-rose-500 border-0">
                  <Trash2 size={12} />
                </Button>
              </div>
            </div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h4 className="text-[10px] font-bold text-foreground truncate mb-1" title={file.name}>{file.name}</h4>
              <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-muted-foreground">
                <span>{file.size}</span>
                <span>{file.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Showing 8 of 142 files</p>
        <Button variant="outline" className="h-10 px-6 rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest text-blue-500">
          Load More Files
        </Button>
      </div>
    </div>
  );
}
