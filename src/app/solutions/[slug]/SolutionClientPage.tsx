"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Building2, BarChart3, Database, Workflow, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

// Premium Mock Data Generator based on Slug
const getSolutionData = (slug: string) => {
  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${formattedTitle} Intelligence`,
    subtitle: "Custom-tailored data architectures mapped directly to your industry workflows.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    overview: "Every industry operates on unique logic. We design bespoke business intelligence ecosystems that understand your specific domain requirements—ensuring your data isn't just accurate, but immediately actionable for your specific market dynamics.",
    benefits: [
      { title: "Domain-Specific KPIs", desc: "Pre-built DAX and SQL logic designed around your industry's most critical metrics.", icon: <BarChart3 className="w-6 h-6 text-blue-500" /> },
      { title: "Legacy Integration", desc: "Seamless ETL pipelines connecting your antiquated CRMs or ERPs to modern BI.", icon: <Database className="w-6 h-6 text-emerald-500" /> },
      { title: "Automated Workflows", desc: "Replace manual, error-prone data entry with secure, zero-touch reporting flows.", icon: <Workflow className="w-6 h-6 text-violet-500" /> },
      { title: "Executive Visibility", desc: "C-Suite dashboards providing a bird's-eye view of operations in real-time.", icon: <Building2 className="w-6 h-6 text-rose-500" /> }
    ],
    techStack: ["Power BI", "Tableau", "SQL Server", "Snowflake", "Azure Synapse"]
  };
};

export default function SolutionClientPage({ slug }: { slug: string }) {
  const data = getSolutionData(slug);

  return (
    <main className="min-h-screen bg-background selection:bg-blue-500/30">
      
      {/* 1. Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] flex items-end pb-12 md:pb-20 pt-32 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.heroImage} 
            alt={data.title} 
            fill
            className="object-cover object-center opacity-20 mix-blend-luminosity grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
        </div>

        <div className="container px-4 sm:px-6 lg:px-8 relative z-10 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <Link href="/solutions" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={14} className="mr-2" /> Back to Solutions
            </Link>
            
            <h1 className="text-4xl sm:text-[46px] md:text-[46px] font-bold tracking-tighter uppercase leading-[1] md:leading-[0.9] text-foreground mb-6 break-words">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-blue-500 font-bold uppercase tracking-widest max-w-2xl mx-auto break-words">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 border-b border-border">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <Workflow size={16} /> Solution Architecture
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-12">
              {data.overview}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {data.techStack.map((tech, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-muted border border-border text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Benefits Grid */}
      <section className="py-24 bg-card border-b border-border">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tighter uppercase mb-4 text-foreground break-words">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Benefits</span>
            </h2>
            <p className="text-muted-foreground">What this tailored solution unlocks for your specific operational workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {data.benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-border p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/0 group-hover:bg-blue-500/50 transition-colors" />
                <div className="w-12 h-12 bg-muted flex items-center justify-center mb-6 rounded-none">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 relative overflow-hidden bg-blue-600/5">
        <div className="container px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <CheckCircle2 size={48} className="text-blue-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-bold tracking-tighter uppercase mb-6 text-foreground break-words">
            Deploy {data.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how we can integrate this bespoke analytics architecture directly into your existing ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-none shadow-2xl shadow-blue-500/20">
                Book a Strategy Call <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
