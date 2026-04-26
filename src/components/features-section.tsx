import React from 'react';
import { 
  BarChart3, 
  Database, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  ChevronRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, href }: FeatureCardProps) => (
  <div className="group relative p-6 sm:p-8 bg-card border border-border hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    {/* Subtle gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 flex items-center justify-center bg-blue-500/10 text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <Link 
        href={href} 
        className="inline-flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-widest group-hover:gap-3 transition-all"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <span className="sr-only">about {title}</span> <ChevronRight size={14} />
      </Link>
    </div>
  </div>
);

const serviceFeatures = [
  {
    icon: <BarChart3 size={24} />,
    title: "Power BI & Tableau",
    description: "Enterprise-grade dashboards with complex DAX, optimized STAR schemas, and Row-Level Security for BFSI needs.",
    href: "/services/dashboard-design"
  },
  {
    icon: <Database size={24} />,
    title: "Data Engineering",
    description: "Robust data warehousing solutions, query optimization, and automated ETL pipelines using SQL and Azure Data Factory.",
    href: "/services/sql-architecture"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Predictive Analytics",
    description: "Advanced forecasting and trend analysis to identify market shifts before they happen using statistical modeling.",
    href: "/services/predictive-analytics"
  }
];

const solutionFeatures = [
  {
    icon: <Zap size={24} />,
    title: "MIS Automation",
    description: "End-to-end automation of manual reporting processes. Replace static Excel sheets with real-time automated insight engines.",
    href: "/solutions/mis-automation"
  },
  {
    icon: <Globe size={24} />,
    title: "Enterprise BI",
    description: "Scalable analytics frameworks for large-scale deployments across multiple departments and geographies.",
    href: "/solutions/enterprise-bi"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Compliance Reporting",
    description: "Audit-ready reporting frameworks that meet RBI and global financial regulations with full data lineage.",
    href: "/solutions/compliance"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Core Competencies
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground leading-tight mb-6">
            Precision-Engineered <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">BI Solutions.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We bridge the gap between raw data and executive strategy. Our solutions are built for speed, accuracy, and enterprise scalability.
          </p>
        </div>

        <div className="space-y-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-blue-500" />
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">Expert Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {serviceFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-violet-500" />
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">Strategic Solutions</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutionFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 bg-card border border-border">
          <div className="mb-6 sm:mb-0">
            <h4 className="text-xl font-bold text-foreground mb-1">Need a custom architecture?</h4>
            <p className="text-muted-foreground text-sm">We specialize in solving unique data challenges for complex organizations.</p>
          </div>
          <Link href="/contact">
            <Button 
              size="lg" 
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none border-0"
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
