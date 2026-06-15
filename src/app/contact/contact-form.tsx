"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Power BI & Tableau Dashboard Design");
  const [painPoint, setPainPoint] = useState("");
  const [sent, setSent] = useState(false);

  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");
  
  useEffect(() => {
    if (refParam === "cfo-template") {
      setService("CFO MIS Automation Template Download");
      setPainPoint("I would like to receive the '5 MIS Reports Every CFO Wants Automated' template and schedule a discussion regarding Excel MIS automation.");
    }
  }, [refParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'lead',
        event_label: 'contact_form'
      });
    }

    const subject = encodeURIComponent(`[BI Expert Lead] ${name} from ${company} — Audit Request`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService Interest: ${service}\n\nBiggest Reporting Pain Point:\n${painPoint}`
    );

    window.location.href = `mailto:hello@biexpert.online?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-20 border border-emerald-500/20 bg-emerald-500/5 text-center space-y-4">
        <CheckCircle2 size={40} className="text-emerald-400" />
        <h3 className="text-xl font-bold uppercase tracking-tighter text-foreground">Your email client is opening!</h3>
        <p className="text-muted-foreground text-sm max-w-sm">
          Your message has been pre-filled. Just hit Send in your email app and we'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-[10px] font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name *</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Work Email *</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Company Name *</label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
            placeholder="Fintech Bank Ltd"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Interest</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none appearance-none"
          >
            <option>Power BI & Tableau Dashboard Design</option>
            <option>MIS Automation</option>
            <option>SQL Architecture & ETL</option>
            <option>Full BI Stack Audit</option>
            <option>CFO MIS Automation Template Download</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Biggest Reporting Pain Point *</label>
        <textarea
          rows={5}
          required
          value={painPoint}
          onChange={(e) => setPainPoint(e.target.value)}
          className="w-full bg-muted/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
          placeholder="E.g., Spending 20 hours/week manually updating Excel MIS sheets..."
        />
      </div>

      <Button
        type="submit"
        className="h-16 px-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg uppercase tracking-tighter rounded-none border-0 w-full sm:w-auto"
      >
        Send Inquiry <Zap size={18} className="ml-3" />
      </Button>
    </form>
  );
}
