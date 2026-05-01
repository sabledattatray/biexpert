import { Shield, Zap } from "lucide-react";

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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transparency is at the core of our data intelligence mission. Learn how we protect and manage your information.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl mt-20 prose prose-invert prose-blue max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">1. Information Collection</h2>
          <p className="text-muted-foreground leading-relaxed">
            At BI Expert, we collect information to provide better services to our users. This includes:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
            <li><strong>Personal Information:</strong> Name, email, and contact details provided via forms.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, and technical device information.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to enhance performance.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">2. Google Analytics & Advertising</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use <strong>Google Analytics</strong> to track site performance. This tool uses cookies to collect standard internet log information and visitor behavior information in an anonymous form.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>AdSense Disclosure:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">3. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement enterprise-grade security measures (including SSL/TLS encryption) to protect your data from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">4. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or delete your personal information. You can also opt-out of cookie tracking by adjusting your browser settings or using the Google Analytics Opt-out Browser Add-on.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-4">5. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For any privacy-related inquiries, contact us at <strong>hello@biexpert.online</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}
