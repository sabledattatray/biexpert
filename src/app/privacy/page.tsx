import { Shield, ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
              At BI Expert, we collect information to provide better services to all our users. This includes information you provide to us directly (like your name and email when you subscribe to our newsletter or book an audit) and information we collect automatically (like your usage patterns on our site).
            </p>
          </div>
        </div>
      </section>
<div className="container mx-auto px-6 lg:px-12 max-w-4xl mt-20 prose-headings:tracking-tighter">
          <section className="mb-12">
            <h2>1. Information We Collect</h2>
            <p>At BI Expert, we collect information to provide better services to all our users. This includes information you provide to us directly (like your name and email when you subscribe to our newsletter or book an audit) and information we collect automatically (like your usage patterns on our site).</p>
          </section>

          <section className="mb-12">
            <h2>2. How We Use Information</h2>
            <p>We use the information we collect to provide, maintain, protect, and improve our services, and to develop new ones. We also use this information to offer you tailored content – like giving you more relevant search results and insights into data intelligence.</p>
          </section>

          <section className="mb-12">
            <h2>3. Information Security</h2>
            <p>We work hard to protect BI Expert and our users from unauthorized access to or unauthorized alteration, disclosure, or destruction of information we hold. Specifically, we use enterprise-grade encryption (SSL/TLS) for all data in transit.</p>
          </section>

          <section className="mb-12">
            <h2>4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@biexpert.online.</p>
          </section>
        </div>
    </main>
  );
}
