import Image from "next/image";
import Link from "next/link";
import { BarChart3, Database, TrendingUp, FileSpreadsheet, Layers, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Services | BI Expert — Power BI, Tableau, SQL & Data Analytics",
  description: "Premium Power BI & Tableau dashboards, SQL architecture, ETL pipelines, and real-time analytics services for BFSI and Fintech enterprises.",
};

const services = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Dashboard Design",
    slug: "dashboard-design",
    desc: "Pixel-perfect, interactive Power BI & Tableau dashboards tailored to your KPIs. From executive scorecards to operational drill-downs — we build dashboards your team will actually use.",
    bullets: ["Custom DAX measures & KPIs", "Mobile-responsive layouts", "Role-based access & RLS", "Embedded analytics"],
    accent: "from-blue-500 to-blue-700",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Predictive Analytics",
    slug: "predictive-analytics",
    desc: "Harness ML-powered forecasting models to anticipate revenue trends, churn risk, and demand cycles — integrated directly into your Power BI or Tableau environment.",
    bullets: ["Revenue forecasting models", "Churn & risk prediction", "Anomaly detection", "What-if scenario analysis"],
    accent: "from-violet-500 to-violet-700",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Report Automation",
    slug: "report-automation",
    desc: "Replace manual Excel MIS with scheduled, zero-touch automated reports delivered to your inbox or Teams channel — saving 30–50 hours per month.",
    bullets: ["Scheduled Power Automate flows", "Excel to Power BI/Tableau migration", "Email & Teams delivery", "Audit trails & versioning"],
    accent: "from-cyan-500 to-cyan-700",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "SQL Architecture",
    slug: "sql-architecture",
    desc: "Design and optimise enterprise-grade SQL data warehouses on Azure Synapse, SQL Server, or PostgreSQL — built for performance at scale.",
    bullets: ["Star & snowflake schema design", "Query optimisation & indexing", "Azure Synapse / SQL Server", "Data governance policies"],
    accent: "from-emerald-500 to-emerald-700",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "ETL Pipelines",
    slug: "etl-pipelines",
    desc: "Reliable, monitored ETL pipelines that ingest data from ERP, CRM, APIs, and flat files into a clean, analytics-ready warehouse layer.",
    bullets: ["Azure Data Factory / SSIS", "API & flat-file ingestion", "Data quality validation", "Error alerting & retry logic"],
    accent: "from-orange-500 to-orange-700",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Streaming",
    slug: "real-time",
    desc: "Live data dashboards powered by Azure Event Hub, Power BI Streaming datasets, Tableau Live Connections, and DirectQuery — for operations that can't wait for batch refreshes.",
    bullets: ["Sub-second data latency", "Azure Event Hub integration", "Live KPI alerts & thresholds", "IoT & transaction feeds"],
    accent: "from-rose-500 to-rose-700",
  },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We audit your current data stack, pain points, and business goals in a 45-minute strategy session." },
  { step: "02", title: "Solution Design", desc: "Our architects map out the optimal data model, report structure, and tech stack for your use case." },
  { step: "03", title: "Agile Build", desc: "Two-week sprints with weekly demos — you see progress early and often." },
  { step: "04", title: "Deploy & Train", desc: "Go-live with a hands-on training session and full documentation for your team." },
  { step: "05", title: "Ongoing Support", desc: "Optional retainer for dashboard maintenance, new metrics, and quarterly optimisation reviews." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <Image src="/services-hero.png" alt="Services" fill className="object-cover opacity-[0.07]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> What We Build
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Data Services That 
            Drive Real ROI
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From raw data to boardroom-ready insights — we design, build, and automate every layer of your business intelligence stack.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.slug} className="bg-background p-8 group hover:bg-muted transition-colors">
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br ${s.accent} bg-opacity-10 mb-6 text-foreground`}>
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{s.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-blue-500 transition-colors">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-4">How We Work</p>
            <h2 className="text-4xl font-bold tracking-tighter text-foreground">Our Delivery Process</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-px bg-border">
            {process.map((p) => (
              <div key={p.step} className="bg-background p-6 hover:bg-muted transition-colors">
                <div className="text-4xl font-bold text-foreground/10 mb-4">{p.step}</div>
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { val: "150+", label: "Dashboards Delivered" },
              { val: "40hrs", label: "Avg. Time Saved / Month" },
              { val: "10+", label: "Years of Expertise" },
              { val: "99%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="bg-background p-8 xs:p-10 text-center hover:bg-muted transition-colors">
                <div className="text-4xl xs:text-[46px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-violet-500 mb-2">{s.val}</div>
                <div className="text-xs xs:text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 text-foreground">Ready to Transform Your Data?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book a free 45-minute BI audit and we'll identify your biggest reporting wins.</p>
          <Link href="/contact">
            <Button className="h-14 px-12 bg-blue-600 hover:bg-blue-700 text-white border-0 font-bold text-base rounded-none">
              Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
