"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

const MainDashboardUI = dynamic(() => import('./dashboard-demo'), { 
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] rounded-2xl bg-white/[0.01] border border-white/[0.05] flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-primary-blue/20 border-t-primary-blue animate-spin" />
    </div>
  )
});

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center">
      {/* Background ambient light */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="glow-ring w-[600px] h-[600px] bg-primary-blue/8 top-[-10%] left-[10%]" />
        <div className="glow-ring w-[500px] h-[500px] bg-secondary-cyan/6 bottom-[10%] right-[10%]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-12">

          {/* ── LEFT: Visual Copy ── */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-secondary-cyan mb-6 shadow-2xl backdrop-blur-md"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-secondary-cyan animate-pulse" />
              ✨ Elite Business Intelligence
            </motion.div>

            <h1 
              className="text-4xl sm:text-[50px] lg:text-[46px] xl:text-[54px] font-bold tracking-tight leading-[1.05] text-foreground mb-6"
            >
              Turn Data Into{" "}
              <span className="gradient-text-hero block">
                Revenue, Not Reports
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-base sm:text-lg text-neutral-text leading-relaxed mb-8 max-w-md"
            >
              We replace 20-hour Excel MIS cycles with 1-click Power BI &amp; Tableau dashboards for banks, NBFCs, and fintechs in India. RLS-ready, audit-compliant, live by Friday.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="btn-primary w-full sm:w-48 h-12 text-sm"
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
                  Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="btn-secondary w-full sm:w-48 h-12 text-sm"
                  aria-label="View our data solutions and services"
                >
                  View Solutions
                </Button>
              </Link>
            </motion.div>

            {/* Trust and Rating indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-3 text-left pl-1"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100&auto=format&fit=crop"
                ].map((src, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border border-[#081120] overflow-hidden relative shadow-md">
                    <img src={src} alt="Client avatar" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-white leading-normal">Trusted by Fintech &amp; BFSI Leaders in Mumbai &amp; India</p>
                <p className="text-[9px] text-neutral-text font-bold uppercase tracking-wider mt-0.5">⭐ 4.9/5 Rating (150+ Audits Completed)</p>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Interactive Dashboard Mock ── */}
          <div className="w-full lg:w-7/12">
            <MainDashboardUI />
          </div>

        </div>
      </div>
    </section>
  );
}
