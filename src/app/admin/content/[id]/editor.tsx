"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  Save, 
  ArrowLeft, 
  Eye, 
  Settings, 
  Globe, 
  Lock,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { updatePost, createPost } from "../actions";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("../rich-editor"), { ssr: false });

interface Post {
  id?: string;
  title: string;
  slug: string;
  content: string;
  image?: string | null;
  metaTitle?: string | null;
  metaDesc?: string | null;
  excerpt?: string | null;
  published: boolean;
}

export default function PostEditor({ post, isNew = false }: { post: Post, isNew?: boolean }) {
  const router = useRouter();
  const [formData, setFormData] = useState(post);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    
    let result;
    if (isNew) {
      result = await createPost({
        ...formData,
        authorId: "cmog30o500000uchypy136wuo" // Placeholder
      });
    } else {
      result = await updatePost(post.id!, formData);
    }
    
    if (result.success) {
      setMessage({ type: 'success', text: isNew ? "Post created! Redirecting..." : "Changes saved successfully! 🚀" });
      if (isNew && 'id' in result) {
        const newId = result.id as string;
        setTimeout(() => router.push(`/admin/content/${newId}`), 1500);
      } else {
        setTimeout(() => setMessage(null), 3000);
      }
    } else {
      setMessage({ type: 'error', text: result.error || "Execution failed." });
    }
    
    setIsSaving(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Top Header Control Bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border mb-8">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push('/admin/content')}
              className="h-10 w-10 flex items-center justify-center border border-border hover:bg-muted transition-colors rounded-none"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="text-xl font-bold tracking-tighter uppercase text-foreground leading-none">
                {isNew ? "New Intelligence" : "Edit Resource"}
              </h1>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1">
                {isNew ? "Staging Phase" : `Resource ID: ${post.id}`}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleSubmit}
              disabled={isSaving}
              className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-11 px-8 border-0 shadow-lg shadow-blue-500/20"
            >
              {isSaving ? "Syncing..." : (
                <><Save size={16} className="mr-2" /> {isNew ? "Publish Now" : "Save Changes"}</>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Alerts Area */}
        {message && (
          <div className={`mb-8 p-4 border flex items-center gap-3 animate-in fade-in slide-in-from-top-4 ${
            message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-rose-500/10 border-rose-500/20 text-rose-500'
          }`}>
            {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            <span className="text-sm font-bold uppercase tracking-tight">{message.text}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card border border-border overflow-hidden rounded-sm shadow-sm">
              <div className="p-8 border-b border-border bg-muted/10">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Main Heading</label>
                <input 
                  type="text" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-transparent text-3xl font-bold tracking-tight focus:outline-none placeholder:text-muted-foreground/30 leading-tight"
                  placeholder="Enter Resource Title..."
                />
                <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest bg-muted/30 w-fit px-3 py-1.5 rounded-full border border-border">
                  <span className="opacity-50">URL Handle:</span>
                  <span className="text-foreground/70">/blog/</span>
                  <input 
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    className="bg-transparent border-b border-muted-foreground/20 focus:border-blue-500 focus:outline-none px-1 font-bold lowercase"
                  />
                </div>
              </div>

              <div className="p-8">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">Executive Summary</label>
                <textarea 
                  value={formData.excerpt || ""}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full bg-muted/20 border border-border p-4 text-base font-medium leading-relaxed focus:outline-none focus:border-blue-500/50 placeholder:text-muted-foreground/30 min-h-[120px] resize-none transition-all"
                  placeholder="Summarise this resource for the intelligence grid..."
                />
              </div>
            </div>

            <div className="bg-card border border-border p-1">
               <RichTextEditor 
                  content={formData.content}
                  onChange={(content) => setFormData({...formData, content})}
               />
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            {/* Visibility & Status */}
            <div className="bg-card border border-border overflow-hidden rounded-sm shadow-sm">
              <div className="p-6 border-b border-border bg-muted/20 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Settings size={14} className="text-blue-500" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">Publication Hub</h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 border border-border rounded-sm">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 flex items-center justify-center ${formData.published ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                      {formData.published ? <Globe size={20} /> : <Lock size={20} />}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-foreground uppercase tracking-widest">Visibility</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{formData.published ? 'Live & Public' : 'Private Draft'}</p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, published: !formData.published})}
                    className={`h-6 w-12 rounded-full relative transition-all ${formData.published ? 'bg-emerald-500' : 'bg-muted-foreground/30'}`}
                  >
                    <div className={`absolute top-0.5 h-5 w-5 bg-white rounded-full transition-all shadow-sm ${formData.published ? 'right-0.5' : 'left-0.5'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-card border border-border overflow-hidden rounded-sm shadow-sm">
              <div className="p-6 border-b border-border bg-muted/20 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <ImageIcon size={14} className="text-blue-500" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">Featured Media</h3>
              </div>

              <div className="space-y-4">
                {formData.image && (
                  <div className="relative aspect-video border border-border overflow-hidden bg-muted">
                    <img 
                      src={formData.image} 
                      alt="Featured Preview" 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => setFormData({...formData, image: null})}
                      className="absolute top-2 right-2 h-6 w-6 bg-rose-500 text-white flex items-center justify-center text-[10px] font-bold"
                    >
                      X
                    </button>
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Featured Image</label>
                  
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value={formData.image || ""}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      placeholder="Paste Image URL..."
                      className="flex-1 bg-background border border-border p-3 text-[10px] focus:border-blue-500 focus:outline-none"
                    />
                    <div className="relative group">
                      <input 
                        type="file" 
                        id="featured-image-upload"
                        className="hidden" 
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          
                          const formDataUpload = new FormData();
                          formDataUpload.append("file", file);
                          
                          try {
                            const res = await fetch("/api/upload", {
                              method: "POST",
                              body: formDataUpload,
                            });
                            const data = await res.json();
                            if (data.url) {
                              setFormData(prev => ({...prev, image: data.url}));
                            }
                          } catch (err) {
                            console.error("Upload failed", err);
                          }
                        }}
                      />
                      <label 
                        htmlFor="featured-image-upload"
                        className="h-full px-4 border border-border bg-muted/50 hover:bg-muted transition-colors flex items-center justify-center cursor-pointer group-hover:border-blue-500"
                      >
                        <Upload size={14} className="text-muted-foreground group-hover:text-blue-500" />
                      </label>
                    </div>
                  </div>
                  
                  <p className="text-[9px] text-muted-foreground uppercase leading-tight italic">
                    Paste a URL or upload a file directly from your system.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Meta */}
            <div className="bg-card border border-border overflow-hidden rounded-sm shadow-sm">
              <div className="p-6 border-b border-border bg-muted/20 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Globe size={14} className="text-blue-500" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest">SEO Engine</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Meta Title</label>
                  <input 
                    type="text" 
                    value={formData.metaTitle || ""}
                    onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                    placeholder="Search engine title..."
                    className="w-full bg-background border border-border p-3 text-[10px] focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Meta Description</label>
                  <textarea 
                    value={formData.metaDesc || ""}
                    onChange={(e) => setFormData({...formData, metaDesc: e.target.value})}
                    placeholder="Brief description for search results..."
                    className="w-full bg-background border border-border p-3 text-[10px] focus:border-blue-500 focus:outline-none min-h-[80px] resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
