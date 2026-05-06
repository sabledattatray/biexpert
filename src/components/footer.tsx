"use client";

import NextLink from "next/link";
import { useState } from "react";
import {
  Database,
  Share2,
  GitBranch,
  Send,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Logo } from "./logo";
import { LinkedInIcon, GithubIcon, TelegramIcon } from "./social-icons";
import { SocialLink } from "./social-link";

const NAV = {
  services: [
    { label: "Power BI Dashboards", href: "/services/dashboard-design" },
    { label: "Tableau Analytics", href: "/services/tableau-analytics" },
    { label: "MIS Automation", href: "/solutions/mis-automation" },
    { label: "SQL Architecture", href: "/services/sql-architecture" },
    { label: "Predictive Analytics", href: "/services/predictive-analytics" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Downloads", href: "/downloads" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Datta Sable →", href: "https://dattasable.com", external: true },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/terms" },
  ],
};

const SOCIAL = [
  { platform: "linkedin" as const, href: "https://linkedin.com/in/dattasable" },
  { platform: "github" as const, href: "https://github.com/dattasable" },
  { platform: "telegram" as const, href: "https://t.me/sabledatta" },
];

const CONTACT = [
  { icon: <Mail size={14} />, text: "hello@biexpert.online" },
  { icon: <Phone size={14} />, text: "+91 8010803756" },
  { icon: <MapPin size={14} />, text: "Mumbai, Maharashtra, India 421503" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // In a real app we'd import { subscribeToNewsletter } from "@/app/actions/newsletter";
    // For now we'll simulate the call or use a direct import if possible.
    try {
      const { subscribeToNewsletter } = await import("@/app/actions/newsletter");
      const result = await subscribeToNewsletter(new FormData(e.target as HTMLFormElement));
      if (result.success) {
        setSubscribed(true);
        setEmail("");
      } else {
        alert(result.message);
      }
    } catch (err) {
      // Fallback for demo if actions aren't fully set up in this environment
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-background border-t border-border">

      {/* ── TOP BAND: Newsletter ────────────────────────────────── */}
      <div className="border-b border-border bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left copy */}
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">Newsletter</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tighter text-foreground mb-1">
                Stay Ahead with Data Insights
              </h3>
              <p className="text-sm text-muted-foreground">
                Power BI &amp; Tableau tips, dashboard strategies and analytics playbooks — weekly.
              </p>
            </div>

            {/* Right form */}
            <div className="w-full lg:w-auto lg:min-w-[400px]">
              {subscribed ? (
                <div className="flex items-center gap-3 px-5 py-4 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-sm font-bold">
                  <CheckCircle2 size={18} /> You&apos;re subscribed! Welcome aboard.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-0">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 min-w-0 bg-background border border-border border-r-0 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-colors border border-blue-600 shrink-0 flex items-center gap-2"
                  >
                    Subscribe <ArrowRight size={14} />
                  </button>
                </form>
              )}
              <p className="text-[10px] text-muted-foreground mt-2">No spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ───────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand — 4 cols */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6">
            <Logo href="/" size="md" />

            <p className="text-sm text-muted-foreground leading-relaxed">
              A premier data intelligence consultancy specialising in Power BI, Tableau, and enterprise SQL architecture — helping BFSI, Fintech, and Retail organisations make better decisions, faster.
            </p>

            {/* Contact info */}
            <ul className="space-y-2.5">
              {CONTACT.map((c, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="text-blue-400 shrink-0">{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex gap-4">
              {SOCIAL.map((item) => (
                <SocialLink 
                  key={item.platform} 
                  platform={item.platform} 
                  href={item.href} 
                  size={16} 
                  className="p-2"
                />
              ))}
            </div>
          </div>

          {/* Spacer on lg */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Services — 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-blue-500 inline-block" /> Services
            </h4>
            <ul className="space-y-3.5">
              {NAV.services.map((link) => (
                <li key={link.label}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-violet-500 inline-block" /> Company
            </h4>
            <ul className="space-y-3.5">
              {NAV.company.map((link) => (
                <li key={link.label}>
                  <NextLink
                    href={link.href}
                    target={(link as any).external ? "_blank" : undefined}
                    rel={(link as any).external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal — 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-emerald-500 inline-block" /> Legal
            </h4>
            <ul className="space-y-3.5">
              {NAV.legal.map((link) => (
                <li key={link.label}>
                  <NextLink
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>

            {/* Admin shortcut */}
            <div className="mt-8 pt-6 border-t border-border">
              <NextLink
                href="/admin"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-blue-400 transition-colors"
              >
                <Database size={11} /> Admin Console
              </NextLink>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────────────── */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-muted-foreground order-2 sm:order-1">
              © {new Date().getFullYear()} BI Expert. All rights reserved. Built by{" "}
              <a href="https://dattasable.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">Datta Sable</a>
            </p>
            <div className="flex items-center gap-5 order-1 sm:order-2">
              {NAV.legal.map((link) => (
                <NextLink key={link.label} href={link.href} className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </NextLink>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
