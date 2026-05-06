import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, BarChart3, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Case Studies | BI Expert",
  description: "Explore how we've helped businesses transform their data into strategic assets through Power BI and custom analytics solutions.",
};

const caseStudies = [
  {
    title: "HDFC — MIS Overhaul",
    category: "Banking",
    image: "/case-studies-hero.webp",
    metric: "Saved 40 hrs/month",
    desc: "Automated a complex manual reporting process for one of the largest banks, replacing 15+ Excel trackers with a single Power BI source of truth.",
    impact: ["Zero manual data entry", "Real-time NPA tracking", "Executive-level visibility"],
    slug: "hdfc"
  },
  {
    title: "Retail Chain Dashboard",
    category: "Retail",
    image: "/solutions-hero.webp",
    metric: "24% Increase in Sales Efficiency",
    desc: "Implemented a real-time POS analytics suite for a 50+ store retail chain, enabling store managers to optimize inventory on the fly.",
    impact: ["Stock-out reduction", "Basket analysis insights", "Performance benchmarking"],
    slug: "retail"
  },
  {
    title: "Hospital KPI Suite",
    category: "Healthcare",
    image: "/services-hero.webp",
    metric: "99.9% Data Accuracy",
    desc: "Built a comprehensive operational dashboard for a diagnostic chain to monitor bed utilization, patient footfall, and doctor performance.",
    impact: ["Operational bottleneck identification", "Revenue cycle optimization", "Staffing efficiency"],
    slug: "hospital"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Case Studies" 
            fill 
            className="object-cover opacity-[0.07]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> Success Stories
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Data-Driven  
            Impact Stories
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Real problems solved with real data. Explore how our custom BI architectures drive measurable ROI across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="group relative bg-card border border-border overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={cs.image} 
                    alt={cs.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase tracking-widest text-white">
                    {cs.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-emerald-500 text-sm font-bold mb-2 flex items-center gap-2">
                    <TrendingUp size={14} /> {cs.metric}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors text-foreground">{cs.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cs.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {cs.impact.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[12px] text-muted-foreground font-medium">
                        <CheckCircle2 size={12} className="text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-foreground group-hover:gap-3 transition-all">
                    View full case study <ArrowRight size={14} className="text-blue-500" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border bg-secondary/30 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 text-foreground">Start Your Own Success Story</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We've helped over 150 companies turn their data into market dominance. You're next.</p>
          <Link href="/contact">
            <Button className="h-14 px-12 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold text-base rounded-none">
              Book Your Free BI Audit <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
