import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, FileSpreadsheet, Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "MIS Automation | BI Expert",
  description: "End-to-end automation of manual reporting processes. Replace Excel-heavy MIS with automated, real-time Power BI dashboards.",
};

const benefits = [
  { title: "Zero Manual Effort", desc: "No more manual data downloads, cleaning, or VLOOKUPs. Data flows directly from source to dashboard." },
  { title: "Real-time Updates", desc: "Get morning reports delivered before you even open your laptop, with data refreshed at your preferred interval." },
  { title: "Error Elimination", desc: "Human errors in calculation and copy-pasting are eliminated with robust, audited data pipelines." }
];

export default function MISAutomationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="MIS Automation" 
            fill 
            className="object-cover opacity-[0.12]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
          
          {/* Premium Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <FileSpreadsheet size={12} /> The Efficiency Engine
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase text-foreground">
              MIS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-indigo-500">
                Automation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Stop wasting hundreds of hours on manual reporting. We build the infrastructure to automate your entire MIS cycle, from data ingestion to executive delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none border-0 shadow-lg shadow-blue-500/20 transition-all">
                  Start Automating Now <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="p-8 border border-rose-500/20 bg-rose-500/5">
              <h3 className="text-xl font-bold text-rose-400 mb-6 uppercase tracking-widest">Manual MIS (Before)</h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="flex gap-3">❌ 15+ hours spent on Excel cleaning every week</li>
                <li className="flex gap-3">❌ Prone to human error & broken formulas</li>
                <li className="flex gap-3">❌ Data is already 3 days old by delivery</li>
                <li className="flex gap-3">❌ Decision makers wait for static PDFs</li>
              </ul>
            </div>
            <div className="p-8 border border-emerald-500/20 bg-emerald-500/5">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 uppercase tracking-widest">BI Expert Automation (After)</h3>
              <ul className="space-y-4 text-foreground text-sm">
                <li className="flex gap-3">✅ Zero-touch, fully automated data pipeline</li>
                <li className="flex gap-3">✅ Audited calculation logic in DAX</li>
                <li className="flex gap-3">✅ Real-time or hourly data refreshes</li>
                <li className="flex gap-3">✅ Interactive mobile-first dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 bg-card border border-border group hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600/10 text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground uppercase tracking-tight">{b.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-black tracking-tighter mb-4 text-foreground">Calculate Your ROI</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">Tell us your team size and reporting frequency, and we'll show you exactly how many hours we can save you.</p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-none border-0">
              Free MIS Audit Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
