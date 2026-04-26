"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, ShieldCheck, Award, Briefcase, Globe, Cpu, Share2, GitBranch, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLink } from "@/components/social-link";

const stats = [
  { val: "10y", label: "Market Mastery" },
  { val: "150+", label: "Architectures Built" },
  { val: "40h", label: "Weekly Time Saved" },
  { val: "∞", label: "Scalability" },
];

const pillars = [
  {
    title: "Engineering First",
    desc: "We don't just 'make charts.' We build robust data warehouses and high-performance SQL foundations that ensure your insights are never built on sand.",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "BFSI Domain Expertise",
    desc: "A decade in Fintech means we understand NPA tracking, yield analysis, and compliance reporting as deeply as the tools we use to visualize them.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-violet-600 to-purple-600"
  },
  {
    title: "Executive Clarity",
    desc: "Our design philosophy centers on C-suite needs. We eliminate the noise, leaving only the strategic signals required for high-stakes decision making.",
    icon: <Target className="w-6 h-6" />,
    color: "from-emerald-600 to-teal-600"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30">
      {/* 1. LAYERED HERO SECTION */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Datta Sable Professional" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
              />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> Established 2014
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              The Art of  
                
                  Data Warfare.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We empower industry leaders to weaponize their data. From MIS automation to enterprise-grade Power BI and Tableau architectures, we build the intelligence layers that drive global finance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID (PREMIUM LOOK) */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="text-[46px] font-bold text-foreground/5 absolute -top-8 -left-4 group-hover:text-blue-500/10 transition-colors select-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="text-[46px] font-bold mb-2 tracking-tighter text-foreground">{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY (BENTO STYLE) */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full -z-10" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-[46px] font-bold tracking-tighter mb-6 uppercase text-foreground">Built on Three   Unshakable Pillars.</h2>
              <p className="text-muted-foreground text-lg">We don't follow trends. We set the standards for how financial data should be governed, processed, and visualized.</p>
            </div>
            <Link href="/services" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
              Explore Our Methods <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-card border border-border relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />
                <div className="w-14 h-14 bg-muted border border-border flex items-center justify-center text-foreground mb-8 group-hover:bg-foreground group-hover:text-background transition-all">
                  {p.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter text-foreground">Strategic BFSI Expertise</h2>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE MASTERMIND (EXPERT PROFILE) */}
      <section className="py-32 border-t border-border bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_500px] gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-violet-500/20 bg-violet-500/5 text-violet-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Founder & Lead Architect
              </div>
              <h2 className="text-4xl xs:text-[46px] font-bold tracking-tighter mb-8 text-foreground">Meet Datta Sable.</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With over 10 years of experience in the BFSI sector, I've spent my career bridging the gap between complex raw data and strategic board-room decisions.
                </p>
                <p>
                  My journey began in the trenches of SQL optimization and Excel MIS, evolving into a holistic mastery of the Microsoft Data Stack. Today, I lead a team of specialists dedicated to one thing: **Absolute Data Clarity.**
                </p>
                <p>
                  We don't just work for you; we partner with your vision to ensure your data becomes your most unfair competitive advantage.
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4">
                <SocialLink platform="linkedin" href="https://linkedin.com/in/dattasable" size={20} />
                <SocialLink platform="github" href="https://github.com/dattasable" size={20} />
                <SocialLink platform="telegram" href="https://t.me/sabledatta" size={20} />
              </div>

              <div className="mt-12 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-foreground">Pune, IN</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Base of Operations</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="text-2xl font-bold text-foreground">Global</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Coverage</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-card border border-border group overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                alt="Services" 
                fill 
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-2">Expertise Verified</p>
                  <h4 className="text-3xl font-bold text-foreground">Datta Sable</h4>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-40 text-center relative">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-[46px] sm:text-[46px] font-bold tracking-tighter mb-10 leading-none text-foreground">
            READY TO RULE  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 underline underline-offset-[10px] decoration-border">YOUR MARKET?</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-16 max-w-2xl mx-auto">Join the ranks of elite financial firms who trust us with their intelligence layer.</p>
          <Link href="/contact">
            <Button size="lg" className="h-20 px-20 bg-primary text-primary-foreground font-bold text-xl rounded-none transition-all hover:tracking-widest border-0">
              LET'S TALK DATA
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
