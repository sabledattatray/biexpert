import { auth, signIn } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { Download, Lock, FileSpreadsheet, Database, BarChart3, ArrowRight, ShieldCheck, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const datasets = [
  {
    id: "ds-001",
    title: "Loan Collection Data",
    desc: "A comprehensive dataset for BFSI analytics, featuring historical loan performance and collection trends.",
    type: "CSV / Excel",
    size: "8.4 MB",
    icon: <FileSpreadsheet className="text-emerald-500" />,
    tag: "High Volume",
    category: "Banking & Finance",
    driveUrl: "https://drive.google.com/file/d/1iEfPQkpWbC0C3P0LoWUHDwnM5XrDJj92/view?usp=sharing"
  },
  {
    id: "ds-002",
    title: "Restaurant Big Data",
    desc: "A massive dataset covering sales, customer feedback, and inventory for a multi-location restaurant chain.",
    type: "CSV / SQL",
    size: "112.5 MB",
    icon: <Database className="text-blue-500" />,
    tag: "Enterprise Scale",
    category: "Retail & Hospitality",
    driveUrl: "https://drive.google.com/file/d/1u4k7fiMt1F5Eu1kmZRqx_XiI2sFK-igI/view?usp=sharing"
  },
  {
    id: "ds-003",
    title: "Global Sales Master Data",
    desc: "A massive sales dataset with over 1.6 Million (16 Lakhs+) rows, perfect for stress-testing Power BI models and SQL queries.",
    type: "CSV / Excel",
    size: "245.0 MB",
    icon: <BarChart3 className="text-orange-500" />,
    tag: "1.6M+ Rows",
    category: "Retail Analytics",
    driveUrl: "https://drive.google.com/file/d/1IoS6Kx_bncXc9X6s2Rzncq69VTMWTnAB/view?usp=sharing"
  },
  {
    id: "ds-004",
    title: "Education & Enrollment Data",
    desc: "A detailed dataset covering student enrollment, academic performance, and institutional metrics.",
    type: "CSV / Excel",
    size: "12.8 MB",
    icon: <BookOpen className="text-yellow-500" />,
    tag: "Academic",
    category: "Education & Research",
    driveUrl: "https://drive.google.com/file/d/1IoS6Kx_bncXc9X6s2Rzncq69VTMWTnAB/view?usp=sharing"
  }
];

export default async function DownloadsPage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-blue-600/5 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> The Data Vault
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Member  
              
                Resources.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Access exclusive, high-performance datasets and templates curated for BI professionals and data architects.
            </p>
          </div>
        </div>
      </section>

      {/* ── ACCESS BAR / AUTH PROMPT ────────────────────────────── */}
      <section className="sticky top-16 z-30 py-4 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
               <div className={`h-2 w-2 rounded-full ${session ? 'bg-emerald-500' : 'bg-muted-foreground/30'} animate-pulse`} />
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                 Status: {session ? `Logged in as ${session.user?.name}` : 'Authentication Required'}
               </p>
             </div>
             {!session && (
               <form action={async () => { "use server"; await signIn("google", { redirectTo: "/downloads" }); }}>
                 <Button type="submit" className="h-10 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-none">
                   Sign In for Full Access
                 </Button>
               </form>
             )}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD GRID ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {datasets.map((ds) => (
              <div key={ds.id} className="group relative bg-card border border-border p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                {!session && (
                  <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-background/60 transition-colors">
                    <div className="text-center p-6">
                       <Lock size={32} className="mx-auto text-blue-500 mb-4 opacity-50" />
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Locked Resource</p>
                    </div>
                  </div>
                )}

                <div className="relative z-0">
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-12 w-12 bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
                      {ds.icon}
                    </div>
                    <span className="px-3 py-1 bg-muted border border-border text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                      {ds.type}
                    </span>
                  </div>

                  <div className="mb-8">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">{ds.category}</span>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                      {ds.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ds.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-border">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                       <span>{ds.size}</span>
                       <div className="w-1 h-1 bg-border rounded-full" />
                       <span className="text-blue-500">{ds.tag}</span>
                    </div>
                    {session ? (
                      <a 
                        href={ds.driveUrl || `/datasets/${ds.id}.${ds.type.split(' ')[0].toLowerCase()}`} 
                        target={ds.driveUrl ? "_blank" : undefined}
                        rel={ds.driveUrl ? "noopener noreferrer" : undefined}
                        download={!ds.driveUrl}
                        className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <Download size={14} /> Download
                      </a>
                    ) : (
                      <div className="h-10 px-6 border border-border text-muted-foreground/30 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 italic">
                         <Lock size={14} /> Secured
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER PROMPT ───────────────────────────────────────── */}
      {!session && (
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-xl mx-auto p-12 border border-blue-500/20 bg-blue-500/5">
               <ShieldCheck className="mx-auto text-blue-500 mb-6" size={40} />
               <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-4">Member Data Access</h3>
               <p className="text-sm text-muted-foreground mb-8">
                 Access to proprietary datasets is restricted to registered members to ensure data governance and prevent unauthorized distribution.
               </p>
               <form action={async () => { "use server"; await signIn("google", { redirectTo: "/downloads" }); }}>
                 <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-none shadow-xl shadow-blue-600/20">
                   Sign in to your account
                 </Button>
               </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
