"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Activity,
  Users,
  Download,
  Filter,
  LayoutDashboard,
  ArrowRight,
  Settings,
  ChevronDown,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

const MainDashboardUI = dynamic(() => import('./dashboard-demo'), { 
  ssr: false,
  loading: () => <div className="w-full aspect-[4/3] bg-muted/20 animate-pulse border border-border" />
});

// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative bg-background w-full overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/8 blur-[120px] rounded-full aspect-square" style={{ contentVisibility: 'auto' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/6 blur-[120px] rounded-full aspect-square" style={{ contentVisibility: 'auto' }} />
      </div>

      {/* ── Inner container: stacks vertically on mobile, side-by-side on desktop */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-12">

          {/* ── LEFT: Copy ── */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-6">
              <LayoutDashboard className="w-3 h-3 animate-pulse" />
              Data Architecture Elite
            </div>

            <h1 className="text-4xl sm:text-[46px] lg:text-[46px] xl:text-[46px] font-bold tracking-tighter leading-[1.05] text-foreground mb-5">
              Turn Data Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-500">
                Revenue, Not Reports
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              I help businesses automate their MIS and build high-impact Power BI &amp; Tableau dashboards that save time and drive ROI. 10+ years of expertise in BFSI and Fintech.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-48 h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-xl shadow-blue-600/20 group"
                  aria-label="Book a free BI consultation"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'engagement',
                        event_label: 'book_consultation'
                      });
                    }
                  }}
                >
                  Book Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-48 h-12 text-sm font-bold border-border bg-muted/50 hover:bg-muted text-foreground"
                  aria-label="View our data solutions and services"
                >
                  View Solutions
                </Button>
              </Link>
            </motion.div>


          </div>

          {/* ── RIGHT: Dashboard ── */}
          <div className="w-full lg:w-7/12">
            <MainDashboardUI />
          </div>

        </div>
      </div>
    </section>
  );
}
