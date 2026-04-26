import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, ShieldCheck, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />

      {/* ── Social Proof Strip ─────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-transparent to-violet-600/3 pointer-events-none" />

        {/* Stats row */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { stat: "150+", label: "Data-Driven Clients", sub: "Across BFSI, Fintech & Retail", href: "/case-studies", color: "text-blue-400" },
              { stat: "10+", label: "Years of Expertise", sub: "Power BI · Tableau · SQL", href: "/about", color: "text-violet-400" },
              { stat: "40%", label: "Avg. Time Saved", sub: "On manual MIS reporting", href: "/services/mis-automation", color: "text-emerald-400" },
              { stat: "99.9%", label: "Dashboard Uptime", sub: "Enterprise-grade reliability", href: "/services/dashboard-design", color: "text-amber-400" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group flex flex-col items-center text-center px-6 py-4 hover:bg-muted/40 transition-colors duration-300 cursor-pointer"
              >
                <span className={`text-2xl sm:text-3xl font-black tracking-tighter ${item.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  {item.stat}
                </span>
                <span className="mt-2 text-sm font-bold text-foreground">{item.label}</span>
                <span className="mt-1 text-[11px] text-muted-foreground">{item.sub}</span>
                <span className="mt-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Clients row */}
        <div className="border-t border-border bg-background/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 whitespace-nowrap shrink-0">
                Clients include
              </span>
              <div className="w-px h-6 bg-border hidden sm:block shrink-0" />
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {[
                  { name: "Arctis Capital", href: "/case-studies/arctis-capital" },
                  { name: "NovaBanc", href: "/case-studies/novabanc" },
                  { name: "Meridian Finserv", href: "/case-studies/meridian-finserv" },
                  { name: "Zephyr Analytics", href: "/case-studies/zephyr-analytics" },
                  { name: "VaultEdge", href: "/case-studies/vaultedge" },
                  { name: "Pinnacle Data Co.", href: "/case-studies/pinnacle-data" },
                ].map((client, i) => (
                  <Link
                    key={i}
                    href={client.href}
                    className="px-3 py-1.5 text-[11px] font-bold text-muted-foreground border border-border hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200 uppercase tracking-widest"
                  >
                    {client.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* Outcome Section */}
      <section className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                Measurable Impact
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-foreground leading-tight mb-6">
                We Build Dashboards <br /> That <span className="text-emerald-400">Actually Work.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Stop looking at static reports. We build interactive intelligence layers that help you spot trends before they become problems and opportunities before they disappear.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: <TrendingUp className="text-emerald-400" size={20} />, text: "Average 40% reduction in manual reporting time" },
                  { icon: <Zap className="text-blue-400" size={20} />, text: "Real-time data refreshes for critical operations" },
                  { icon: <ShieldCheck className="text-violet-400" size={20} />, text: "Enterprise-grade row-level security (RLS)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-2 bg-muted border border-border">{item.icon}</div>
                    <p className="text-sm font-bold text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              <Link href="/services">
                <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold rounded-none">
                  See Our Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-video bg-card border border-border overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="MIS Automation" 
                fill 
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Featured Solution</p>
                <h3 className="text-xl font-black text-foreground">MIS Automation Framework</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 border-t border-border bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-foreground leading-none mb-4">
            Ready to Rule <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-500">Your Data?</span>
          </h2>
          <p className="text-muted-foreground text-base mb-7">
            Book a free 45-minute BI audit and we'll identify your 3 biggest automation wins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="h-11 px-8 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold text-sm rounded-none w-full sm:w-auto">
                Schedule Your Free Audit
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="h-11 px-8 border-border bg-muted/50 hover:bg-muted text-foreground font-bold text-sm rounded-none w-full sm:w-auto">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
