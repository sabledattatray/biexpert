import { FileText, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pb-20">

      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-blue-600/5 -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> Legal
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Page Title
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              By accessing or using the BI Expert website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
            </p>
          </div>
        </div>
      </section>
<div className="container mx-auto px-6 lg:px-12 max-w-4xl mt-20 prose-headings:tracking-tighter">
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
    </main>
  );
}
