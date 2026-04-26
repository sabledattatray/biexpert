import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-blue-600/10 border border-blue-600/20 text-blue-400">
            <Shield size={24} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-foreground">
            Privacy Policy
          </h1>
        </div>

        <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
          Last Updated: April 26, 2026
        </p>

        <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter">
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
            <p>If you have any questions about this Privacy Policy, please contact us at hello@biexpert.in.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
