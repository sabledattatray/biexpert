import React, { Suspense } from "react";
import { Mail, Phone, MapPin, Globe, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";
import { SocialLink } from "@/components/social-link";
import { ContactForm } from "./contact-form";
import { Button } from "@/components/ui/button";

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
            <div>
              <Suspense fallback={<div className="text-sm text-muted-foreground">Loading inquiry form...</div>}>
                <ContactForm />
              </Suspense>
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
                      <p className="text-lg font-bold text-foreground">hello@biexpert.online</p>
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
                    <Zap className="text-emerald-500 mt-1 animate-pulse" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">WhatsApp Chat</p>
                      <a href="https://wa.me/918010803756?text=Hi%20Datta,%20I%20would%20like%20to%20book%20a%20free%2045-minute%20BI%20audit." target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-foreground hover:text-emerald-400 transition-colors">
                        +91 8010803756 →
                      </a>
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

              <div className="p-10 bg-white/[0.01] border border-white/[0.05] space-y-6 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 blur-[40px] rounded-full pointer-events-none" />
                <h4 className="text-lg font-bold text-foreground">Prefer Instant Booking?</h4>
                <p className="text-xs text-neutral-text leading-relaxed">
                  Skip the form and book a 45-minute audit directly via WhatsApp or Email.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://wa.me/918010803756?text=Hi%20Datta,%2520I%2520would%2520like%2520to%2520book%2520a%2520free%252045-minute%2520BI%2520audit." target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="btn-primary w-full h-12">
                      WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:hello@biexpert.online?subject=Book%20a%20Free%252045-Minute%2520BI%2520Audit" className="block">
                    <Button className="btn-secondary w-full h-12">
                      Email
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
