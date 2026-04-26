import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, Server, Zap, ShieldCheck, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "SQL Architecture & Data Engineering | BI Expert",
  description: "Robust SQL infrastructure and automated ETL pipelines built for reliability, speed, and infinite scalability.",
};

const techStack = [
  { icon: <Database />, name: "SQL Server / Azure SQL" },
  { icon: <Server />, name: "Data Warehousing" },
  { icon: <Layers />, name: "ETL / ADF / SSIS" },
  { icon: <Cpu />, name: "Optimization / Tuning" }
];

export default function SQLArchitecturePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1558494949-ef8b56821806?q=80&w=2070&auto=format&fit=crop" 
            alt="SQL Architecture" 
            fill 
            className="object-cover opacity-[0.12]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          
          {/* Premium Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-violet-500/20 bg-violet-500/5 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Database size={12} /> The Foundation
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground">
              SQL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-500">
                Architecture
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              A dashboard is only as good as the data beneath it. We build robust, high-performance database architectures that ensure your data is clean, secure, and always available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-none border-0 shadow-lg shadow-violet-500/20 transition-all">
                  Request Database Audit <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((t, i) => (
              <div key={i} className="p-10 border border-border bg-card text-center hover:bg-violet-600/5 hover:border-violet-500/30 transition-all group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-600/10 text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  {t.icon}
                </div>
                <h3 className="font-bold text-foreground uppercase tracking-widest text-xs">{t.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_400px] gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-foreground">ETL Pipeline Automation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We build automated workflows using Azure Data Factory and SSIS to pull data from disparate sources (CRMs, ERPs, Flat Files) into a centralized, single version of truth.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-foreground">Query Optimization</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Is your dashboard slow? We specialize in T-SQL tuning, indexing strategies, and execution plan analysis to reduce report load times from minutes to seconds.
                </p>
              </div>
            </div>
            <div className="bg-violet-600/5 border border-violet-500/10 p-8 space-y-8">
               <div className="flex items-center gap-3 text-violet-400">
                  <ShieldCheck size={24} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Security</span>
               </div>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 "Our architectures are built specifically for BFSI compliance, ensuring every line of data is encrypted and accessible only to authorized users."
               </p>
               <Link href="/contact">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-none border-0">
                    Get a Database Audit
                  </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
