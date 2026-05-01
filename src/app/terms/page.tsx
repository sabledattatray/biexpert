import { FileText, Zap } from "lucide-react";

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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The legal framework governing our partnership and your use of the BI Expert platform.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl mt-20 prose prose-invert prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the BI Expert website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platform.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">2. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this site, including but not limited to technical articles, dashboard mockups, SQL optimization guides, and logos, is the property of BI Expert. Unauthorized reproduction, distribution, or commercial use is strictly prohibited without explicit written consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">3. Professional Disclaimer</h2>
          <p className="text-muted-foreground leading-relaxed">
            The informational content provided on this site (including datasets and tutorials) is for educational purposes and does not constitute formal professional or financial advice. While we aim for 100% accuracy, BI Expert is not responsible for any data loss or architectural failures resulting from the use of shared techniques.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">4. User Accounts</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you create an account to access our datasets, you are responsible for maintaining the confidentiality of your login credentials. We reserve the right to suspend accounts that engage in unauthorized scraping or malicious activities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">5. Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these terms at any time. Significant changes will be announced via our newsletter or a prominent notice on our homepage.
          </p>
        </section>
      </div>
    </main>
  );
}
