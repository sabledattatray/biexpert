import { Mail, Phone, MapPin, Globe, ArrowRight, CheckCircle2, Zap, Share2, GitBranch, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SocialLink } from "@/components/social-link";

export const metadata = {
  title: "Contact | BI Expert — Book Your Data Strategy Audit",
  description: "Get in touch with Datta Sable, freelance BI Expert. Book a 45-minute audit of your Power BI, Tableau, SQL, or data architecture stack.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      
      {/* Hero */}
      <section className="relative min-h-[250px] py-10 flex items-center justify-center overflow-hidden border-b border-border text-center">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
            alt="Blog" 
            fill 
            className="object-cover opacity-[0.07]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/95 to-background" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <Zap size={10} /> Get in touch
            </div>
            <h1 className="text-[40px] sm:text-[46px] lg:text-[46px] font-bold tracking-tighter leading-[1] mb-4 uppercase text-foreground">
              Let's Solve Your  
              
                Data Warfare.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to automate your MIS or build enterprise-grade Power BI & Tableau dashboards? Book a call or send a message to start your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_500px] gap-20">
            {/* Form */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input type="text" className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
                  <input type="email" className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Interest</label>
                <select className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none appearance-none">
                  <option>Power BI & Tableau Dashboard Design</option>
                  <option>MIS Automation</option>
                  <option>SQL Architecture & ETL</option>
                  <option>Full BI Stack Audit</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">How can we help?</label>
                <textarea rows={6} className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none" placeholder="Tell us about your data challenge..." />
              </div>
              <Button className="h-16 px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg uppercase tracking-tighter rounded-none border-0 w-full sm:w-auto">
                Send Inquiry <Zap size={18} className="ml-3" />
              </Button>
            </div>

            {/* Sidebar info */}
            <div className="space-y-10">
              <div className="p-10 bg-card border border-border space-y-8">
                <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground">Direct Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-500 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                      <p className="text-lg font-bold text-foreground">hello@biexpert.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-500 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-bold text-foreground">Mumbai, Maharashtra, India 421503</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-500 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                      <p className="text-lg font-bold text-foreground">+91 8010803756</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="text-blue-500 mt-1" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Timezone</p>
                      <p className="text-lg font-bold text-foreground">IST (GMT+5:30)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect Socially</p>
                  <div className="flex gap-4">
                    <SocialLink platform="linkedin" href="https://linkedin.com/in/dattasable" size={18} />
                    <SocialLink platform="github" href="https://github.com/dattasable" size={18} />
                    <SocialLink platform="telegram" href="https://t.me/sabledatta" size={18} />
                  </div>
                </div>
              </div>

              <div className="p-10 bg-blue-600/5 border border-blue-500/10 space-y-6">
                <h4 className="text-lg font-bold text-foreground">What happens next?</h4>
                <div className="space-y-4">
                  {[
                    "We'll review your inquiry within 24 hours.",
                    "We'll schedule a 45-minute discovery audit.",
                    "You'll receive a high-level roadmap and quote."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" /> {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
