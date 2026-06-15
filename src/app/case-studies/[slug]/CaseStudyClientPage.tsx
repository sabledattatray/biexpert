"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Clock, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

// Premium Mock Data Generator based on Slug
const getCaseStudyData = (slug: string) => {
  if (slug === "hdfc") {
    return {
      title: "HDFC Bank — Corporate Collections MIS Overhaul",
      client: "HDFC Bank (MIS System)",
      industry: "Banking / BFSI",
      date: "April 2026",
      heroImage: "https://images.unsplash.com/photo-1541354346785-3c880f38253a?q=80&w=2070",
      challenge: "The corporate collections and retail asset departments relied heavily on legacy Excel sheets. Over 15 disjointed trackers required 40+ hours of manual consolidation weekly. Executive leadership lacked real-time visibility into NPA (Non-Performing Asset) changes, collections efficiency ratios, and daily recovery runs.",
      solution: "Engineered a centralized data hub with automated ETL pipelines utilizing SQL Server staging and Azure Data Factory. Built a suite of high-performance Power BI dashboards equipped with RBI-compliant Row-Level Security (RLS) to restrict regional manager access, establishing a single source of truth.",
      impact: [
        { label: "Hours Saved Monthly", value: "40 Hrs", icon: <Clock className="w-5 h-5 text-emerald-500" /> },
        { label: "Reporting Errors", value: "0%", icon: <TrendingUp className="w-5 h-5 text-blue-500" /> },
        { label: "Manual Consolidation", value: "None", icon: <BarChart3 className="w-5 h-5 text-violet-500" /> }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070"
      ],
      techStack: ["Power BI", "SQL Server", "Azure Data Factory", "DAX", "Row-Level Security (RLS)", "Power Automate"]
    };
  }

  if (slug === "retail" || slug === "retail-chain") {
    return {
      title: "Retail Chain — Real-Time POS Analytics Suite",
      client: "Retail Brand",
      industry: "Retail & E-Commerce",
      date: "May 2026",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      challenge: "A retail diagnostic operation with 50+ store outlets suffered from delayed inventory visibility. Out-of-stock items and slow sales analysis led to high stock-outs, inaccurate benchmarking, and decreased store efficiency.",
      solution: "Engineered a sub-second load-time Tableau dashboard connected directly to the POS transaction database. Implemented advanced Level-of-Detail (LOD) parameter actions for real-time inventory monitoring, sales efficiency, and outlet benchmarking.",
      impact: [
        { label: "Sales Efficiency Boost", value: "+24%", icon: <TrendingUp className="w-5 h-5 text-emerald-500" /> },
        { label: "Stock-Out Reduction", value: "90%", icon: <Clock className="w-5 h-5 text-blue-500" /> },
        { label: "Benchmarking Latency", value: "<1s", icon: <BarChart3 className="w-5 h-5 text-violet-500" /> }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070",
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2070"
      ],
      techStack: ["Tableau Desktop", "PostgreSQL", "LOD Calculations", "Parameter Actions", "Data Blending"]
    };
  }

  // Fallback to hospital
  return {
    title: "Hospital Chain — Diagnostic Operations KPI Suite",
    client: "Diagnostic Hospital Group",
    industry: "Healthcare Operations",
    date: "June 2026",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070",
    challenge: "A Diagnostic hospital group lacked centralized tracking for doctor schedules, patient bed occupancy, and revenue cycles. Overloaded staff spent hours compiling status reports daily, leading to operational bottlenecks and lost margins.",
    solution: "Built a fully automated diagnostic operations control center dashboard. Consolidated clinic databases and scheduling engines into a single visual suite showing live bed occupancy, staffing efficiency ratios, and revenue leakage indicators.",
    impact: [
      { label: "Reporting Accuracy", value: "99.9%", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
      { label: "Daily Compilation", value: "0 Mins", icon: <Clock className="w-5 h-5 text-blue-500" /> },
      { label: "Footfall Efficiency", value: "+30%", icon: <TrendingUp className="w-5 h-5 text-violet-500" /> }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
    ],
    techStack: ["Power BI", "SQL Server Data Warehouse", "MIS Automation", "ETL Pipelines", "Operational Dashboards"]
  };
};

export default function CaseStudyClientPage({ slug }: { slug: string }) {
  const data = getCaseStudyData(slug);

  return (
    <main className="min-h-screen bg-background selection:bg-blue-500/30">
      
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[450px] md:min-h-[600px] flex items-end pb-12 md:pb-20 pt-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Link href="/case-studies" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={14} className="mr-2" /> Back to Case Studies
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-bold uppercase tracking-widest">
                {data.industry}
              </span>
              <span className="px-3 py-1 bg-muted border border-border text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                {data.date}
              </span>
            </div>

            <h1 className="text-4xl sm:text-[46px] md:text-[46px] font-bold tracking-tighter uppercase leading-[1] md:leading-[0.9] text-foreground mb-6 break-words">
              {data.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Grid */}
      <section className="py-24 border-b border-border">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-rose-500 mb-6 flex items-center gap-2">
                <Database size={16} /> The Challenge
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {data.challenge}
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-6 flex items-center gap-2">
                <CheckCircle2 size={16} /> The Solution
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {data.solution}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-card border border-border text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. High-Impact Visuals */}
      <section className="py-24 bg-muted/20 border-b border-border overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {data.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative aspect-video bg-muted border border-border overflow-hidden group"
              >
                <Image 
                  src={img} 
                  alt="Dashboard Preview" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white">Interactive Dashboard Preview</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Impact (KPIs) */}
      <section className="py-24 border-b border-border bg-card">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tighter uppercase mb-4 text-foreground break-words">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">Impact</span>
            </h2>
            <p className="text-muted-foreground">Quantifiable results achieved within 30 days of deployment.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.impact.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border p-8 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500/50 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/0 group-hover:bg-blue-500/50 transition-colors" />
                <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6 rounded-none">
                  {metric.icon}
                </div>
                <h4 className="text-[46px] font-bold text-foreground tracking-tighter mb-2">{metric.value}</h4>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tighter uppercase mb-6 text-foreground break-words">
            Ready for a similar <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Transformation?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can automate your reporting pipelines and build executive dashboards tailored to your KPIs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-none shadow-2xl shadow-blue-500/20">
                Book a Free Audit <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="h-14 px-8 border-border text-foreground hover:bg-muted font-bold uppercase tracking-widest text-[10px] rounded-none">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
