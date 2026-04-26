import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Landmark, TrendingDown, Users, Briefcase, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "BFSI & Fintech Intelligence | BI Expert",
  description: "Bespoke analytics solutions for Banking, Financial Services, and Insurance. High-precision dashboards for NPA tracking, risk modeling, and loan book analytics.",
};

const domains = [
  { title: "Retail Banking", icon: <Landmark />, desc: "Customer 360, churn analysis, and branch performance dashboards." },
  { title: "Risk Management", icon: <ShieldCheck />, desc: "Real-time NPA tracking, early warning systems, and credit risk modeling." },
  { icon: <Briefcase />, title: "Wealth Management", desc: "Portfolio performance, AUM trends, and revenue attribution." },
  { icon: <Globe />, title: "Fintech Ops", desc: "Transaction success rates, payment gateway latency, and fraud detection." }
];

export default function BFSIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="BFSI Intelligence" 
            fill 
            className="object-cover opacity-[0.12]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          
          {/* Premium Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Landmark size={12} /> Industry Vertical
            </div>
            
            <h1 className="text-[46px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[0.85] mb-8 uppercase text-foreground">
              BFSI  
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-500">
                Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Precision analytics for the financial sector. We build the intelligence layer for banks and insurance providers who demand 100% accuracy and zero downtime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-none border-0 shadow-lg shadow-indigo-500/20 transition-all">
                  Discuss BFSI Strategy <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Grid */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {domains.map((d, i) => (
              <div key={i} className="p-10 bg-card border border-border group hover:border-indigo-500/30 transition-all flex gap-8 items-start">
                <div className="w-14 h-14 shrink-0 bg-indigo-600/10 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {d.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-foreground">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-8 uppercase text-foreground">Built for Compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Coming from a decade of experience in financial services, we understand that data security is non-negotiable. Our BFSI solutions come with built-in audit trails, Row-Level Security, and full compliance with banking data regulations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["RBI Compliant", "ISO 27001 Patterns", "Zero Data Stored", "Full Audit Logs"].map(tag => (
                <div key={tag} className="px-4 py-2 border border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 uppercase text-foreground">Discuss Your Vertical Challenge</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">From NPA reporting to real-time treasury dashboards, we've built it before. Let's build yours.</p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-none border-0">
              Schedule BFSI Strategy Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
