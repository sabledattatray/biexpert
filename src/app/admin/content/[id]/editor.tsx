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
              <h1 className="text-xl font-black tracking-tighter uppercase text-foreground leading-none">
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
              className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest h-11 px-8 border-0 shadow-lg shadow-blue-500/20"
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
            <div className="bg-card border border-border p-8">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-4 block">Primary Heading</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full bg-transparent text-4xl sm:text-5xl font-black tracking-tighter uppercase focus:outline-none placeholder:text-muted-foreground/30"
                placeholder="Enter Impactful Title..."
              />
              <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
                <span>Slug: /blog/</span>
                <input 
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="bg-transparent border-b border-border focus:border-blue-500 focus:outline-none px-1"
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
            <div className="bg-card border border-border p-8 space-y-8">
              <div className="flex items-center gap-2">
                <Settings size={16} className="text-blue-500" />
                <h3 className="text-sm font-black uppercase tracking-widest">Visibility Hub</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 flex items-center justify-center ${formData.published ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                      {formData.published ? <Globe size={20} /> : <Lock size={20} />}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-foreground uppercase tracking-widest">Global Status</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{formData.published ? 'Live & Indexed' : 'Private Draft'}</p>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, published: !formData.published})}
                    className={`h-7 w-14 rounded-full relative transition-all shadow-inner ${formData.published ? 'bg-emerald-500' : 'bg-muted-foreground/30'}`}
                  >
                    <div className={`absolute top-1 h-5 w-5 bg-white rounded-full transition-all shadow-md ${formData.published ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
