"use client";

import React from 'react';
import { 
  BarChart3, 
  Database, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  ChevronRight,
  Server,
  ArrowRightLeft,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  glowClass: string;
  // Custom component/SVG for micro-visualization
  visual: React.ReactNode;
}

const FeatureCard = ({ icon, title, description, href, glowClass, visual }: FeatureCardProps) => (
  <div className={`group relative p-6 sm:p-8 glass-card hover-3d-lift border border-white/[0.05] transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px] ${glowClass}`}>
    {/* Radial glow background on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    
    <div>
      <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] text-secondary-cyan border border-white/[0.06] rounded-xl mb-6 group-hover:bg-secondary-cyan group-hover:text-background group-hover:scale-105 transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-neutral-text text-xs sm:text-sm leading-relaxed mb-6">
        {description}
      </p>
    </div>

    {/* Micro-Visualization Container */}
    <div className="my-4 w-full h-[70px] bg-white/[0.01] border border-white/[0.03] rounded-lg overflow-hidden flex items-center justify-center relative p-3 group-hover:border-white/[0.08] transition-colors duration-300 select-none">
      {visual}
    </div>
    
    <div className="mt-4 pt-4 border-t border-white/[0.03]">
      <Link 
        href={href} 
        className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary-cyan uppercase tracking-widest group-hover:gap-2.5 transition-all"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <span className="sr-only">about {title}</span> <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  </div>
);

export function FeaturesSection() {
  
  // Custom micro-visual widgets
  const visualBI = (
    <div className="flex items-end justify-center gap-2 h-full w-full max-w-[160px] pt-4">
      {[
        { h: 30, target: 45, label: "$3M" },
        { h: 55, target: 50, label: "$6M" },
        { h: 42, target: 55, label: "$4M" },
        { h: 80, target: 65, label: "$8M" },
      ].map((bar, i) => (
        <div key={i} className="flex-1 flex flex-col items-center justify-end h-full relative group/bar">
          <div className="absolute w-[60%] rounded-t-xs bg-white/[0.03] border border-dashed border-white/10" style={{ height: `${bar.target}%` }} />
          <div className="w-[60%] bg-gradient-to-t from-primary-blue to-secondary-cyan rounded-t-xs transition-all duration-300 group-hover:scale-x-110" style={{ height: `${bar.h}%` }} />
        </div>
      ))}
    </div>
  );

  const visualDataEng = (
    <div className="flex items-center justify-center gap-4 w-full h-full text-neutral-text/60">
      <div className="flex flex-col items-center gap-1">
        <Database size={18} className="text-secondary-cyan" />
        <span className="text-[7px] font-bold uppercase tracking-wider">OLTP DB</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-1 max-w-[60px]">
        <div className="w-full flex items-center justify-between gap-1 text-[7px] font-bold text-accent-green mb-0.5">
          <span className="animate-pulse">● Live</span>
          <span className="metric-number">12ms</span>
        </div>
        <div className="w-full h-1 bg-white/[0.03] border border-white/[0.06] rounded-full overflow-hidden relative">
          <div className="absolute h-full w-3/4 bg-accent-green rounded-full animate-pulse" style={{ left: '10%' }} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Server size={18} className="text-primary-blue" />
        <span className="text-[7px] font-bold uppercase tracking-wider">Warehouse</span>
      </div>
    </div>
  );

  const visualForecast = (
    <div className="relative w-full h-full flex items-end px-4">
      <div className="absolute top-2 right-2 text-[8px] font-extrabold text-accent-green bg-accent-green/10 border border-accent-green/20 px-1.5 py-0.5 rounded metric-number tracking-tighter">
        +24.8% Fct
      </div>
      <svg className="w-full h-[50px] overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
        {/* Past line */}
        <polyline
          fill="none"
          stroke="#00C2FF"
          strokeWidth="1.5"
          points="0,25 20,20 40,22 60,14"
          strokeLinecap="round"
        />
        {/* Forecast dotted line */}
        <polyline
          fill="none"
          stroke="#00E5A0"
          strokeWidth="1.5"
          strokeDasharray="2,2"
          points="60,14 80,8 100,5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  const visualMIS = (
    <div className="flex items-center justify-center gap-4 w-full h-full">
      {/* Manual Excel Sheets */}
      <div className="flex flex-col items-center gap-1 opacity-45">
        <FileSpreadsheet size={16} className="text-neutral-text" />
        <span className="text-[7px] font-bold uppercase tracking-wider">Excel MIS</span>
      </div>
      {/* Transformation arrow */}
      <ArrowRightLeft size={12} className="text-secondary-cyan animate-pulse" />
      {/* Live dashboard widget */}
      <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded flex items-center gap-2 shadow-inner">
        <BarChart3 size={14} className="text-accent-green" />
        <div>
          <p className="text-[7px] font-bold text-white uppercase leading-none">Automated</p>
          <p className="text-[6px] text-accent-green metric-number mt-0.5">0 manual hrs</p>
        </div>
      </div>
    </div>
  );

  const visualEnterprise = (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Nodes Map */}
      <svg className="w-24 h-16 overflow-visible" viewBox="0 0 100 60">
        {/* Central Hub */}
        <circle cx="50" cy="30" r="6" fill="#00C2FF" className="animate-pulse" />
        <circle cx="50" cy="30" r="10" fill="none" stroke="#00C2FF" strokeWidth="0.5" opacity="0.3" className="animate-ping" />
        
        {/* Connections */}
        <line x1="50" y1="30" x2="20" y2="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="50" y1="30" x2="20" y2="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="50" y1="30" x2="80" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Outer nodes */}
        <circle cx="20" cy="15" r="4" fill="#0057D9" />
        <circle cx="20" cy="45" r="4" fill="#00E5A0" />
        <circle cx="80" cy="30" r="4" fill="#a855f7" />
      </svg>
      <div className="absolute bottom-1 right-2 text-[6px] text-neutral-text uppercase font-bold tracking-widest">中央 Hub Model</div>
    </div>
  );

  const visualCompliance = (
    <div className="flex items-center justify-around w-full h-full px-2">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5 text-[8px] font-bold text-white">
          <CheckCircle size={10} className="text-accent-green" />
          <span>RBI Audit Audit</span>
        </div>
        <div className="flex items-center gap-1.5 text-[8px] font-bold text-white">
          <CheckCircle size={10} className="text-accent-green" />
          <span>ISO Lineage</span>
        </div>
      </div>
      <div className="h-8 w-px bg-white/10" />
      <div className="text-right">
        <span className="text-[7px] font-bold text-neutral-text uppercase block">Status</span>
        <span className="text-[9px] font-extrabold text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded uppercase metric-number">
          Compliant
        </span>
      </div>
    </div>
  );

  const serviceFeatures = [
    {
      icon: <BarChart3 size={20} />,
      title: "Power BI & Tableau",
      description: "Enterprise-grade dashboards with complex DAX, optimized STAR schemas, and Row-Level Security for BFSI needs.",
      href: "/services/dashboard-design",
      glowClass: "hover:border-primary-blue/30 hover:shadow-[0_0_30px_rgba(0,87,217,0.15)]",
      visual: visualBI
    },
    {
      icon: <Database size={20} />,
      title: "Data Engineering",
      description: "Robust data warehousing solutions, query optimization, and automated ETL pipelines using SQL and Azure Data Factory.",
      href: "/services/sql-architecture",
      glowClass: "hover:border-secondary-cyan/30 hover:shadow-[0_0_30px_rgba(0,194,255,0.15)]",
      visual: visualDataEng
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis to identify market shifts before they happen using statistical modeling.",
      href: "/services/predictive-analytics",
      glowClass: "hover:border-accent-green/30 hover:shadow-[0_0_30px_rgba(0,229,160,0.15)]",
      visual: visualForecast
    }
  ];

  const solutionFeatures = [
    {
      icon: <Zap size={20} />,
      title: "MIS Automation",
      description: "End-to-end automation of manual reporting processes. Replace static Excel sheets with real-time automated insight engines.",
      href: "/solutions/mis-automation",
      glowClass: "hover:border-accent-green/30 hover:shadow-[0_0_30px_rgba(0,229,160,0.15)]",
      visual: visualMIS
    },
    {
      icon: <Globe size={20} />,
      title: "Enterprise BI",
      description: "Scalable analytics frameworks for large-scale deployments across multiple departments and geographies.",
      href: "/solutions/enterprise-bi",
      glowClass: "hover:border-secondary-cyan/30 hover:shadow-[0_0_30px_rgba(0,194,255,0.15)]",
      visual: visualEnterprise
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Compliance Reporting",
      description: "Audit-ready reporting frameworks that meet RBI and global financial regulations with full data lineage.",
      href: "/solutions/compliance",
      glowClass: "hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      visual: visualCompliance
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-[-10%] glow-ring w-[400px] h-[400px] bg-primary-blue/5 blur-[100px]" />
      <div className="absolute bottom-1/3 right-[-10%] glow-ring w-[400px] h-[400px] bg-secondary-cyan/5 blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-secondary-cyan mb-6 shadow-2xl backdrop-blur-md">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-[46px] font-bold tracking-tight text-foreground leading-tight mb-6">
            Precision-Engineered <span className="gradient-text">BI Solutions.</span>
          </h2>
          <p className="text-neutral-text text-sm sm:text-base max-w-2xl leading-relaxed">
            We bridge the gap between raw data and executive strategy. Our solutions are built for speed, accuracy, and enterprise scalability.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="space-y-20">
          <div>
            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <div className="h-px w-8 bg-primary-blue" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-text">Expert Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <div className="h-px w-8 bg-secondary-cyan" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-text">Strategic Solutions</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutionFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Custom architecture card banner */}
        <div className="mt-24 relative overflow-hidden glass-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 blur-[80px] rounded-full pointer-events-none" />
          <div className="text-center md:text-left z-10">
            <h4 className="text-xl font-bold text-foreground mb-1 tracking-tight">Need a custom architecture?</h4>
            <p className="text-neutral-text text-xs sm:text-sm leading-relaxed max-w-xl">We specialize in solving unique, high-scale data challenges for complex organizations.</p>
          </div>
          <Link href="/contact" className="z-10 w-full md:w-auto">
            <Button 
              size="lg" 
              className="btn-primary w-full md:w-auto h-12 px-8"
              aria-label="Request a custom BI strategy call"
            >
              Request Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
