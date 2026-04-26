import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-violet-600/10 border border-violet-600/20 text-violet-400">
            <FileText size={24} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-foreground">
            Terms of Service
          </h1>
        </div>

        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
          Last Updated: April 26, 2026
        </p>

        <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
          <section className="mb-12">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the BI Expert website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
          </section>

          <section className="mb-12">
            <h2>2. Intellectual Property</h2>
            <p>All content on this site, including text, graphics, logos, and dashboard mockups, is the property of BI Expert and is protected by international copyright laws. Any unauthorized use of this content is strictly prohibited.</p>
          </section>

          <section className="mb-12">
            <h2>3. Professional Advice</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute professional advice. While we strive for accuracy, we cannot guarantee that all information is up-to-date at all times.</p>
          </section>

          <section className="mb-12">
            <h2>4. Limitation of Liability</h2>
            <p>BI Expert will not be liable for any damages of any kind arising from the use of our services or from any information, content, or materials included on this site.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
