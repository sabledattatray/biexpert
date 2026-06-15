import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DashboardPlayground } from "@/components/dashboard-playground";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mesh-gradient relative overflow-hidden min-h-screen">
      {/* NexDial Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" aria-hidden="true" />

      <HeroSection />

      {/* ── Social Proof Strip (Borderless, Floating Glass Cards) ─────────────────────────── */}
      <section className="relative z-20 -mt-10 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Stats Cards Grid - Floating */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: "150+", label: "Data-Driven Clients", sub: "Across BFSI, Fintech & Retail", href: "/case-studies", color: "text-secondary-cyan", shadowGlow: "hover:shadow-[0_0_20px_rgba(0,194,255,0.08)]" },
              { stat: "10+", label: "Years of Expertise", sub: "Power BI · Tableau · SQL", href: "/about", color: "text-accent-green", shadowGlow: "hover:shadow-[0_0_20px_rgba(0,229,160,0.08)]" },
              { stat: "40%", label: "Avg. Time Saved", sub: "On manual MIS reporting", href: "/services/report-automation", color: "text-secondary-cyan", shadowGlow: "hover:shadow-[0_0_20px_rgba(0,194,255,0.08)]" },
              { stat: "99.9%", label: "Dashboard Uptime", sub: "Enterprise reliability", href: "/services/dashboard-design", color: "text-success", shadowGlow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.08)]" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`group flex flex-col items-center justify-between text-center p-6 bg-dark-bg/40 backdrop-blur-xl border border-white/[0.04] rounded-2xl hover:border-white/[0.1] hover:scale-[1.03] transition-all duration-300 shadow-xl cursor-pointer ${item.shadowGlow}`}
              >
                <div className="flex flex-col items-center">
                  <span className={`text-3.5xl sm:text-4xl font-bold tracking-tight metric-number ${item.color} group-hover:scale-105 transition-transform duration-300 inline-block`}>
                    {item.stat}
                  </span>
                  <span className="mt-3 text-xs sm:text-sm font-semibold text-white tracking-tight">{item.label}</span>
                  <span className="mt-1 text-[11px] text-neutral-text max-w-[170px] leading-normal">{item.sub}</span>
                </div>
                <span className="mt-4 text-[9px] font-bold uppercase tracking-widest text-secondary-cyan/60 group-hover:text-secondary-cyan transition-colors flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Clients Strip - Floating Pill */}
          <div className="mt-6 p-4 sm:p-5 bg-dark-bg/20 backdrop-blur-lg border border-white/[0.03] rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-neutral-text/60 whitespace-nowrap shrink-0">
                Trusted by teams at
              </span>
              <div className="w-full flex flex-wrap justify-center md:justify-end gap-2">
                {[
                  { name: "HDFC Bank (MIS Overhaul)", href: "/case-studies/hdfc" },
                  { name: "ICICI Lombard (Analytics)", href: "/case-studies/retail-chain" },
                  { name: "Leading NBFC Lender", href: "/case-studies/hospital" },
                  { name: "Fast-Growing Fintech", href: "/case-studies" },
                  { name: "Wealth Management Firm", href: "/case-studies" },
                  { name: "Digital Micro-Lender", href: "/case-studies" },
                ].map((client, i) => (
                  <Link
                    key={i}
                    href={client.href}
                    className="px-3.5 py-1.5 text-[9.5px] font-extrabold text-neutral-text/85 border border-white/[0.04] hover:border-secondary-cyan/30 hover:text-white hover:bg-white/[0.02] transition-all duration-200 uppercase tracking-wider rounded-lg"
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

      <DashboardPlayground />

      {/* Outcome Section */}
      <section className="py-28 border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-blue/5 blur-[120px] rounded-full -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-success mb-6">
                Measurable Impact
              </div>
              <h2 className="text-4xl sm:text-[46px] font-bold tracking-tight text-foreground leading-tight mb-6">
                We replace 20-hour Excel MIS cycles with <span className="gradient-text">1-click dashboards.</span>
              </h2>
              <p className="text-neutral-text text-base sm:text-lg leading-relaxed mb-8">
                For banks, NBFCs, and fintech companies in Mumbai, Maharashtra, and across India, we build RLS-ready, audit-compliant reporting architectures. Get your first automated intelligence layer live by Friday.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: <TrendingUp className="text-success" size={18} />, text: "Average 40% reduction in manual reporting time" },
                  { icon: <Zap className="text-secondary-cyan" size={18} />, text: "Real-time data refreshes for critical operations" },
                  { icon: <ShieldCheck className="text-primary-blue" size={18} />, text: "Enterprise-grade row-level security (RLS)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/[0.02] border border-white/[0.05] rounded-xl text-primary-blue">{item.icon}</div>
                    <p className="text-sm font-semibold text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              <Link href="/services">
                <Button className="btn-primary h-12 px-8 shadow-lg shadow-primary-blue/20 hover:scale-[1.02]">
                  See Our Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-video glass-card overflow-hidden group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="MIS Automation" 
                fill 
                className="object-cover opacity-50 group-hover:scale-102 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="text-[9px] font-bold uppercase tracking-widest text-secondary-cyan mb-1">Featured Solution</p>
                <h3 className="text-lg font-bold text-foreground tracking-tight">MIS Automation Framework</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Download Section */}
      <section className="py-24 border-t border-white/[0.05] bg-white/[0.01] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="glass-card p-8 md:p-12 border border-white/[0.06] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent-green/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="text-center md:text-left space-y-4 max-w-xl">
              <span className="px-3 py-1 bg-accent-green/10 border border-accent-green/20 text-accent-green text-[9px] font-bold uppercase tracking-widest rounded">
                Free Resource
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                5 MIS Reports Every CFO Wants Automated (Power BI Template)
              </h3>
              <p className="text-neutral-text text-sm leading-relaxed">
                Download my checklist and design template showing how to eliminate 90% of manual reporting friction for banking, NBFC, and financial operations in India.
              </p>
            </div>
            
            <div className="w-full md:w-auto shrink-0 z-10">
              <Link href="/contact?ref=cfo-template">
                <Button className="btn-secondary h-12 px-8 w-full md:w-auto hover:border-accent-green/30 hover:shadow-[0_0_20px_rgba(0,229,160,0.1)]">
                  Download Free Template
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 border-t border-white/[0.05] bg-gradient-to-b from-background to-dark-surface/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-blue/8 blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-[46px] font-bold tracking-tight text-foreground leading-none mb-4">
            Ready to Rule <span className="gradient-text">Your Data?</span>
          </h2>
          <p className="text-neutral-text text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Book a free 45-minute BI audit and we'll identify your 3 biggest automation wins. Serving Mumbai, Pune, and global clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="btn-primary h-12 px-8 w-full sm:w-auto shadow-lg shadow-primary-blue/20 hover:scale-[1.02]">
                Schedule Your Free Audit
              </Button>
            </Link>
            <Link href="/case-studies" className="w-full sm:w-auto">
              <Button size="lg" className="btn-secondary h-12 px-8 w-full sm:w-auto hover:scale-[1.02]">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
