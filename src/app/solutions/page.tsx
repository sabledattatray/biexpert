import Image from "next/image";
import Link from "next/link";
import { Landmark, ShoppingBag, HeartPulse, ShieldCheck, ArrowRight, Zap, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Solutions | BI Expert — Sector Specific Data Intelligence",
  description: "Specialised BI solutions for BFSI, Retail, Healthcare, and Manufacturing. Data architectures built for your industry's unique challenges.",
};

const solutions = [
  {
    title: "BFSI & Fintech",
    slug: "bfsi",
    icon: <Landmark className="w-8 h-8" />,
    desc: "Risk modeling, NPA tracking, and real-time transaction analytics for modern financial institutions.",
    features: ["Loan book analytics", "Credit risk scoring", "Compliance reporting", "Fraud detection"]
  },
  {
    title: "MIS Automation",
    slug: "mis-automation",
    icon: <Zap className="w-8 h-8" />,
    desc: "End-to-end reporting automation. Replace manual Excel heavy MIS with automated, real-time dashboards.",
    features: ["ETL pipelines", "Automated email delivery", "Error reduction", "Teams integration"]
  },
  {
    title: "Retail & E-commerce",
    slug: "retail",
    icon: <ShoppingBag className="w-8 h-8" />,
    desc: "Inventory optimization, customer lifetime value (CLV), and multi-channel sales performance.",
    features: ["Basket analysis", "Inventory aging", "Markdown optimization", "Customer churn"]
  },
  {
    title: "Healthcare BI",
    slug: "healthcare",
    icon: <HeartPulse className="w-8 h-8" />,
    desc: "Patient flow analytics, revenue cycle management (RCM), and clinical outcome tracking.",
    features: ["Bed occupancy tracking", "Claims denial analysis", "Patient satisfaction", "Resource allocation"]
  },
  {
    title: "Enterprise SQL",
    slug: "sql-architecture",
    icon: <Database className="w-8 h-8" />,
    desc: "Scalable data warehousing and query optimization for high-volume enterprise data environments.",
    features: ["Query tuning", "STAR schemas", "Data governance", "Cloud migration"]
  },
  {
    title: "Executive Dashboards",
    slug: "dashboard-design",
    icon: <BarChart3 className="w-8 h-8" />,
    desc: "C-suite ready visual intelligence tools designed for rapid decision making and clarity.",
    features: ["KPI scorecards", "Mobile-first design", "Drill-down capability", "Export functionality"]
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <Image src="/solutions-hero.png" alt="Solutions" fill className="object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> Expertise Applied
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Vertical Solutions For 
            Complex Industries
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Generic dashboards don't solve specific industry problems. We build tailored data architectures that address the unique challenges of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div key={s.slug} className="bg-card border border-border p-10 group hover:border-indigo-500/30 transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-600/10 text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-foreground">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">{s.desc}</p>
                <div className="space-y-3 mb-10">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      <div className="w-1 h-1 bg-indigo-500" /> {f}
                    </div>
                  ))}
                </div>
                <Link href={s.slug.startsWith('http') ? s.slug : `/solutions/${s.slug}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-colors">
                  View Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 text-foreground uppercase">Don't See Your Industry?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">We've worked with hundreds of businesses across various sectors. Contact us for a custom solution tailored to your specific needs.</p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-12 bg-indigo-600 hover:bg-indigo-700 text-white border-0 font-bold text-base rounded-none">
              Request Custom Build
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
