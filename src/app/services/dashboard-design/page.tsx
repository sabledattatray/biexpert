import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Layout, Smartphone, MousePointer2, PieChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Power BI & Tableau Dashboard Design | BI Expert",
  description: "Bespoke Power BI & Tableau architectures designed for C-suite decision making. High-impact visuals meeting enterprise-grade precision.",
};

const features = [
  { icon: <Layout />, title: "Executive UI/UX", desc: "Designed for rapid information consumption. No clutter, only critical insights." },
  { icon: <Smartphone />, title: "Mobile-First", desc: "Access your business metrics on the move with fully responsive layouts." },
  { icon: <ShieldCheck />, title: "Row-Level Security", desc: "Ensure every user only sees the data they are authorized to view." },
  { icon: <MousePointer2 />, title: "Interactive Drills", desc: "Navigate from high-level summaries down to transaction-level details." }
];

export default function DashboardDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
            alt="Dashboard Design" 
            fill 
            className="object-cover opacity-[0.12]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          
          {/* Premium Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <BarChart3 size={12} /> Executive Intelligence
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground">
              Power BI & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500">
                Dashboards
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              We don't build generic reports. We build executive intelligence tools that allow you to see the pulse of your business in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none border-0 shadow-lg shadow-blue-500/20 transition-all">
                  Book A Design Strategy <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-8 bg-card border border-border group hover:border-blue-500/30 transition-all">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-foreground uppercase tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tighter mb-8 text-foreground">Visual Excellence. <br /> Technical Precision.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our dashboards are built on a solid foundation of STAR schema data modeling and optimized DAX calculations. This means your reports don't just look good — they are lightning fast and 100% accurate.
              </p>
              <div className="space-y-4">
                {["Deneb & Charticulator Support", "Custom Branding", "Automated Email Subscriptions", "Integration with MS Teams"].map(t => (
                  <div key={t} className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-500" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video border border-border bg-card overflow-hidden group">
               <Image 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                 alt="Showcase" 
                 fill 
                 className="object-cover opacity-60 group-hover:scale-105 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Portfolio Spotlight</p>
                    <p className="text-lg font-bold text-foreground">Financial Performance Suite</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase text-foreground">See a Live Demo</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Want to see our dashboards in action? We'll show you how we transform complex BFSI datasets into intuitive visual stories.</p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none border-0">
              Request Live Walkthrough
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
