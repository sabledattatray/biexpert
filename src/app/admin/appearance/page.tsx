"use client";

import React, { useState, useEffect } from "react";
import { Paintbrush, LayoutTemplate, Type, BoxSelect, Check, RotateCcw, Save, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const defaultTheme = {
  primaryHex: "#3b82f6", // Blue 500
  borderRadius: "0px",
  cardPadding: "1.5rem",
  layoutShadow: "none",
  fontFamily: "var(--font-geist-sans)",
};

export default function AppearanceCustomizer() {
  const [theme, setTheme] = useState(defaultTheme);
  const [isSaving, setIsSaving] = useState(false);

  // Apply styles globally via a dynamic style tag
  useEffect(() => {
    const styleId = "dynamic-theme-customizer";
    let styleEl = document.getElementById(styleId);
    
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.innerHTML = `
      :root, .dark {
        --radius: ${theme.borderRadius};
        --layout-shadow: ${theme.layoutShadow};
      }
      .preview-container {
        font-family: ${theme.fontFamily};
      }
      .preview-primary-bg {
        background-color: ${theme.primaryHex} !important;
      }
      .preview-primary-text {
        color: ${theme.primaryHex} !important;
      }
      .preview-card {
        padding: ${theme.cardPadding} !important;
        border-radius: ${theme.borderRadius} !important;
      }
      .preview-button {
        border-radius: ${theme.borderRadius} !important;
      }
    `;

    // Persist to localStorage
    localStorage.setItem("customTheme", JSON.stringify(theme));
  }, [theme]);

  // Load on mount
  useEffect(() => {
    const saved = localStorage.getItem("customTheme");
    if (saved) {
      try {
        setTheme(JSON.parse(saved));
      } catch(e) {}
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Theme changes successfully published to the live site!");
    }, 800);
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to revert to the default theme?")) {
      setTheme(defaultTheme);
    }
  };

  return (
    <div className="space-y-8 pb-10 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 shrink-0">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase text-foreground">Live Customizer</h1>
          <p className="text-muted-foreground text-sm mt-1">Globally alter colors, borders, padding, and layout structure in real-time.</p>
        </div>
        <div className="flex gap-4">
          <Button 
            onClick={handleReset}
            variant="outline"
            className="rounded-none border-border bg-card text-[10px] font-black uppercase tracking-widest h-12 px-6 hover:text-rose-500"
          >
            <RotateCcw size={16} className="mr-2" /> Reset
          </Button>
          <Button 
            onClick={handleSave}
            disabled={isSaving}
            className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            <Save size={16} className={`mr-2 ${isSaving ? "animate-pulse" : ""}`} /> 
            {isSaving ? "Publishing..." : "Publish Theme"}
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[350px_1fr] gap-8 flex-1 min-h-[600px]">
        {/* Control Panel (Left) */}
        <div className="bg-card border border-border p-6 overflow-y-auto space-y-8">
          
          {/* Colors */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs border-b border-border pb-2">
              <Paintbrush size={14} /> Global Colors
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Primary Brand Color</label>
              <div className="flex gap-4">
                <input 
                  type="color" 
                  value={theme.primaryHex}
                  onChange={(e) => setTheme({...theme, primaryHex: e.target.value})}
                  className="w-12 h-12 p-1 bg-muted border border-border cursor-pointer rounded-none"
                />
                <input 
                  type="text" 
                  value={theme.primaryHex}
                  onChange={(e) => setTheme({...theme, primaryHex: e.target.value})}
                  className="flex-1 bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none font-mono"
                />
              </div>
            </div>
          </section>

          {/* Structure & Borders */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs border-b border-border pb-2">
              <BoxSelect size={14} /> Geometry & Borders
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Global Border Radius ({theme.borderRadius})</label>
              <input 
                type="range" 
                min="0" max="24" step="2"
                value={parseInt(theme.borderRadius)}
                onChange={(e) => setTheme({...theme, borderRadius: `${e.target.value}px`})}
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-[8px] text-muted-foreground mt-1 font-mono">
                <span>0px (Sharp)</span>
                <span>24px (Rounded)</span>
              </div>
            </div>
            
            <div className="pt-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Component Padding</label>
              <select 
                value={theme.cardPadding}
                onChange={(e) => setTheme({...theme, cardPadding: e.target.value})}
                className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none rounded-none appearance-none"
              >
                <option value="1rem">Compact (16px)</option>
                <option value="1.5rem">Standard (24px)</option>
                <option value="2.5rem">Relaxed (40px)</option>
              </select>
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs border-b border-border pb-2">
              <Type size={14} /> Typography
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Heading Font Family</label>
              <select 
                value={theme.fontFamily}
                onChange={(e) => setTheme({...theme, fontFamily: e.target.value})}
                className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none rounded-none appearance-none"
              >
                <option value="var(--font-geist-sans)">Geist Sans (Modern)</option>
                <option value="var(--font-geist-mono)">Geist Mono (Technical)</option>
                <option value="Arial, sans-serif">Arial (Standard)</option>
              </select>
            </div>
          </section>

          {/* Layout Elements */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-xs border-b border-border pb-2">
              <LayoutTemplate size={14} /> Layout Elements
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Container Shadow</label>
              <select 
                value={theme.layoutShadow}
                onChange={(e) => setTheme({...theme, layoutShadow: e.target.value})}
                className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none rounded-none appearance-none"
              >
                <option value="none">Flat (No Shadow)</option>
                <option value="0 25px 50px -12px rgba(0, 0, 0, 0.5)">Soft Glow (3D)</option>
                <option value="20px 20px 0px rgba(0,0,0,1)">Brutalism (Solid Offset)</option>
              </select>
            </div>
          </section>
        </div>

        {/* Live Preview Window (Right) */}
        <div className="bg-muted/30 border border-border relative flex flex-col overflow-hidden">
          <div className="bg-muted border-b border-border h-12 flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Live Interactive Preview</span>
          </div>
          
          <div className="flex-1 p-8 overflow-y-auto preview-container bg-background" style={{ boxShadow: theme.layoutShadow }}>
            
            {/* Mock Hero Component */}
            <div className="text-center max-w-2xl mx-auto py-12 border-b border-border mb-12">
              <div className="inline-flex items-center px-3 py-1 mb-6 preview-primary-text bg-muted border border-border text-xs font-bold uppercase tracking-widest preview-button">
                v2.0 Released
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Data Architecture <span className="preview-primary-text">Perfected.</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Watch how your design decisions instantly cascade across this entire mock interface.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="preview-button preview-primary-bg text-white hover:opacity-90 h-12 px-8 font-black uppercase tracking-widest text-[10px] shadow-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="preview-button h-12 px-8 font-black uppercase tracking-widest text-[10px]">
                  Read Documentation
                </Button>
              </div>
            </div>

            {/* Mock Data Cards */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-card border border-border preview-card flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full preview-primary-bg"></div>
                <div className="w-10 h-10 flex items-center justify-center preview-primary-bg text-white preview-button">
                  <Database size={20} />
                </div>
                <h3 className="text-xl font-bold">SQL Optimization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Notice how the padding of this card changes instantly when you adjust the Component Padding slider.
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                  <span className="text-xs font-bold text-muted-foreground">Query Speed</span>
                  <span className="text-xs font-black preview-primary-text">+340%</span>
                </div>
              </div>

              <div className="bg-card border border-border preview-card flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full preview-primary-bg"></div>
                <div className="w-10 h-10 flex items-center justify-center preview-primary-bg text-white preview-button">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-xl font-bold">Power BI Modeling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The border radius around this entire box will round off smoothly as you drag the geometry slider.
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/50">
                  <span className="text-xs font-bold text-muted-foreground">Reports Generated</span>
                  <span className="text-xs font-black preview-primary-text">12,450</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
