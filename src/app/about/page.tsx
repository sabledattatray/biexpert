"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  Server, 
  Zap, 
  CheckCircle2,
  Lock,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="mesh-gradient relative overflow-hidden min-h-screen pt-28 pb-20 font-sans text-slate-300">
      
      {/* Background Overlay Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" aria-hidden="true" />
      
      {/* Glow Layer */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-secondary-cyan/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. HERO HEADER ─────────────────────────────────────────────────── */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-secondary-cyan mb-6 shadow-2xl backdrop-blur-md"
          >
            The BI Expert Philosophy
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Architecting <span className="gradient-text">Decision Clarity.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-text text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light"
          >
            We are not just designing charts. We are engineering the ultimate analytical foundations to eradicate data friction and transform chaotic enterprise reporting into highly automated revenue engines.
          </motion.p>
        </div>

        {/* ── 2. FOUNDER SHOWCASE BLOCK ─────────────────────────────────────────── */}
        <div className="mb-28">
          <div className="bg-dark-bg/40 backdrop-blur-xl border border-white/[0.04] p-8 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-blue/5 blur-[120px] pointer-events-none" />
            
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center relative z-10">
              
              {/* Founder Image Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative aspect-[4/5] w-full rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
                  <Image 
                    alt="Datta Sable, BI Architect & Founder" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-720px) 100vw, 400px" 
                    src="/author.png"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-xl font-bold text-white tracking-tight">Datta Sable</h3>
                    <p className="text-secondary-cyan font-semibold text-xs tracking-wider uppercase mt-1">Founder &amp; Lead Architect</p>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  &quot;Most businesses are drowning in their own disconnected data.&quot;
                </h2>
                
                <div className="space-y-4 text-neutral-text text-sm sm:text-base leading-relaxed">
                  <p>
                    As a Business Intelligence Expert and Data Strategy Consultant, I spent years building enterprise-grade reporting solutions for major financial institutions (like HDFC Bank) and scaling startups. Through that experience, I watched countless organizations hit an artificial growth ceiling simply because their core reporting infrastructure was fundamentally broken.
                  </p>
                  <p>
                    Teams were spending 40% of their day manually updating Excel sheets. Executive boards were constantly context-switching between conflicting reports. <strong>Revenue was leaking from the pipeline because critical strategic decisions were based on yesterday's outdated assumptions.</strong>
                  </p>
                  <p>
                    <strong className="text-white font-semibold">I founded BI Expert to eradicate that friction.</strong>
                  </p>
                  <p>
                    Our mission is to provide mid-sized enterprises with the same rigorous, high-fidelity data architecture that multi-billion dollar companies use. By centralizing every database stream into a single visual control room and utilizing automated pipelines to deliver real-time metrics, we allow your leaders to stop doing admin work and start making decisions with absolute clarity.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/[0.05] flex flex-wrap gap-4 items-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/10 transition-colors"
                  >
                    Read Technical Case Studies <Zap size={14} className="text-secondary-cyan" />
                  </Link>
                  
                  {/* Location Info */}
                  <div className="flex gap-6 pl-2">
                    <div>
                      <p className="text-sm font-bold text-white leading-none">Badlapur, IN</p>
                      <p className="text-[8px] text-neutral-text font-bold uppercase tracking-wider mt-1">Base of Operations</p>
                    </div>
                    <div className="w-px h-6 bg-white/10" />
                    <div>
                      <p className="text-sm font-bold text-white leading-none">Global</p>
                      <p className="text-[8px] text-neutral-text font-bold uppercase tracking-wider mt-1">Service Coverage</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── 2B. TIMELINE & CERTIFICATIONS ─────────────────────────────────────── */}
        <div className="mb-28 grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Certifications Block */}
          <div className="bg-dark-bg/40 backdrop-blur-xl border border-white/[0.04] p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-green/5 blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">Credentials &amp; Expertise</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-secondary-cyan/30 transition-all">
                <div className="p-3 bg-secondary-cyan/10 border border-secondary-cyan/20 text-secondary-cyan rounded-lg shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Microsoft Certified: Power BI Data Analyst</h4>
                  <p className="text-xs text-neutral-text mt-1 leading-relaxed">
                    <strong>Certification PL-300</strong> — Verified expert in designing, building, and deploying enterprise-grade semantic models and dashboards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-primary-blue/30 transition-all">
                <div className="p-3 bg-primary-blue/10 border border-primary-blue/20 text-primary-blue rounded-lg shrink-0">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Advanced SQL Server Professional</h4>
                  <p className="text-xs text-neutral-text mt-1 leading-relaxed">
                    Specialize in VertiPaq engine tuning, complex query optimization, index seeks, and highly secure Row-Level Security (RLS) policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-accent-green/30 transition-all">
                <div className="p-3 bg-accent-green/10 border border-accent-green/20 text-accent-green rounded-lg shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Tableau Desktop Specialist</h4>
                  <p className="text-xs text-neutral-text mt-1 leading-relaxed">
                    Proficient in level-of-detail (LOD) expressions, parameter actions, and custom business dashboards with sub-second load times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Block */}
          <div className="bg-dark-bg/40 backdrop-blur-xl border border-white/[0.04] p-8 lg:p-10 rounded-3xl shadow-2xl relative overflow-hidden h-full">
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-blue/5 blur-[80px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">Professional Journey</h3>
            <div className="relative border-l border-white/[0.08] ml-4 pl-6 space-y-8 py-2">
              {[
                { year: "2021 – Present", title: "Founder & Lead Architect", org: "BI Expert", desc: "Consulting for major BFSI, Fintech, and Retail brands in Mumbai & Pune to automate report structures." },
                { year: "2018 – 2021", title: "Senior Business Intelligence Engineer", org: "Leading Fintech Firm", desc: "Designed secure data pipelines, warehouse schemas, and real-time operations monitors." },
                { year: "2016 – 2018", title: "Data Analyst & SQL Developer", org: "Major NBFC Group", desc: "Managed end-to-end MIS report automation, reducing manual compilation hours by 40%." },
                { year: "2015 – 2016", title: "BI Developer", org: "HDFC Bank Project", desc: "Fleshed out executive dashboards and row-level isolated data structures." }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {/* Timeline point */}
                  <span className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-secondary-cyan group-hover:bg-secondary-cyan transition-colors" />
                  <span className="text-[10px] font-bold text-secondary-cyan uppercase tracking-wider">{item.year}</span>
                  <h4 className="text-sm font-bold text-white mt-1">{item.title}</h4>
                  <p className="text-[11px] text-neutral-text font-medium">{item.org}</p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. CORE PRINCIPLES (GRID OF FLOATING CARDS) ─────────────────────────── */}
        <div className="mb-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Our Core Architecture</h2>
            <p className="text-neutral-text text-sm mt-3">The fundamental principles that govern our data engineering.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Database size={22} className="text-secondary-cyan" />,
                title: "Eradicating Fragmentation",
                desc: "We believe that context-switching between disjointed databases, manual Excel sheets, and static PDF reports is the silent killer of growth. We unify every data stream into a single visual control room.",
                hoverClass: "hover:shadow-[0_0_20px_rgba(0,194,255,0.08)] hover:border-secondary-cyan/20"
              },
              {
                icon: <Cpu size={22} className="text-primary-blue" />,
                title: "Algorithmic Precision",
                desc: "Data is not a guessing game; it is a mathematical blueprint. Our optimized database structures, star schemas, and predictive models eliminate human audit error and highlight instant wins.",
                hoverClass: "hover:shadow-[0_0_20px_rgba(0,87,217,0.08)] hover:border-primary-blue/20"
              },
              {
                icon: <ShieldCheck size={22} className="text-accent-green" />,
                title: "Enterprise Architecture",
                desc: "Built on enterprise foundations with strict Row-Level Security (RLS), automated SQL pipelines, and robust data warehouse security standards, ensuring absolute row-level data isolation.",
                hoverClass: "hover:shadow-[0_0_20px_rgba(0,229,160,0.08)] hover:border-accent-green/20"
              }
            ].map((principle, idx) => (
              <div 
                key={idx}
                className={`bg-dark-bg/40 backdrop-blur-xl p-8 rounded-2xl border border-white/[0.04] hover:border-white/[0.1] hover:scale-[1.03] transition-all duration-300 shadow-xl flex flex-col justify-between ${principle.hoverClass}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/[0.05] bg-white/[0.02]">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{principle.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-text leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. ENTERPRISE RELIABILITY BANNER (FLOATING COHESIVE PILL) ────────────────── */}
        <div className="mb-28">
          <div className="bg-dark-bg/40 backdrop-blur-xl border border-white/[0.04] p-8 lg:p-12 text-center rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-secondary-cyan/5 to-transparent pointer-events-none" />
            <Server className="w-10 h-10 text-secondary-cyan mx-auto mb-5 opacity-80" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">Enterprise-Grade Security &amp; Reliability</h3>
            <p className="text-neutral-text text-xs sm:text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
              Your data is your business. We engineer every pipeline and dashboard on top of highly secure cloud networks with deep database isolation, ensuring your operations are never compromised.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "SOC2 Type II Ready Structure", color: "bg-primary-blue" },
                { label: "99.99% Automated Pipeline SLA", color: "bg-secondary-cyan" },
                { label: "256-Bit RLS Data Isolation", color: "bg-accent-green" },
                { label: "Automated Redundant Backups", color: "bg-purple-500" }
              ].map((badge, i) => (
                <div key={i} className="px-4 py-2 rounded-full bg-dark-bg/60 border border-white/[0.06] text-xs font-semibold text-slate-200 flex items-center gap-2 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 5. CTA BLOCK ───────────────────────────────────────────────────── */}
        <div className="text-center py-12 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Ready to Rule <span className="gradient-text">Your Data?</span>
          </h2>
          <p className="text-neutral-text text-sm sm:text-base max-w-lg mx-auto mb-8">
            Book a free 45-minute BI audit and we'll identify your 3 biggest automation wins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="btn-primary h-12 px-8 w-full sm:w-auto shadow-lg shadow-primary-blue/20 hover:scale-[1.02]">
                Schedule Your Free Audit
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" className="btn-secondary h-12 px-8 w-full sm:w-auto hover:scale-[1.02]">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
