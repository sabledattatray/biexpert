"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
  Menu, X, ChevronDown,
  BarChart3, Database, TrendingUp, FileSpreadsheet,
  Layers, Zap, Globe, ShieldCheck,
  BookOpen, Video, FileText, Rss,
  Building2, Landmark, ShoppingCart, HeartPulse,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./logo";
import Image from "next/image";

// ── Mega menu data ───────────────────────────────────────────────────────────

const megaMenus: Record<string, {
  sections: { heading: string; items: { icon: React.ReactNode; label: string; desc: string; href: string }[] }[];
  featured?: { label: string; desc: string; href: string; image?: string; tag?: string };
}> = {
  Services: {
    sections: [
      {
        heading: "Power BI & Tableau",
        items: [
          { icon: <BarChart3 size={16} />, label: "Dashboard Design", desc: "Interactive KPI dashboards", href: "/services/dashboard-design" },
          { icon: <TrendingUp size={16} />, label: "Predictive Analytics", desc: "Forecast & trend models", href: "/services/predictive-analytics" },
          { icon: <FileSpreadsheet size={16} />, label: "Report Automation", desc: "Scheduled, zero-touch reports", href: "/services/report-automation" },
        ],
      },
      {
        heading: "Data Engineering",
        items: [
          { icon: <Database size={16} />, label: "SQL Architecture", desc: "Optimised data warehousing", href: "/services/sql-architecture" },
          { icon: <Layers size={16} />, label: "ETL Pipelines", desc: "Reliable data integration", href: "/services/etl-pipelines" },
          { icon: <Zap size={16} />, label: "Real-time Streaming", desc: "Live data feeds & alerts", href: "/services/real-time-streaming" },
        ],
      },
    ],
    featured: { 
      label: "Free BI Audit", 
      desc: "Get a complimentary review of your data stack.", 
      href: "/contact",
      tag: "Limited Offer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
  },
  Solutions: {
    sections: [
      {
        heading: "By Industry",
        items: [
          { icon: <Landmark size={16} />, label: "BFSI", desc: "Banking & financial services", href: "/solutions/bfsi" },
          { icon: <ShoppingCart size={16} />, label: "Retail & E-Commerce", desc: "Sales & inventory insights", href: "/solutions/bfsi" },
          { icon: <HeartPulse size={16} />, label: "Healthcare", desc: "Patient & ops analytics", href: "/solutions/bfsi" },
          { icon: <Building2 size={16} />, label: "Fintech", desc: "Real-time financial intelligence", href: "/solutions/bfsi" },
        ],
      },
      {
        heading: "By Need",
        items: [
          { icon: <FileSpreadsheet size={16} />, label: "MIS Automation", desc: "Replace manual Excel MIS", href: "/solutions/mis-automation" },
          { icon: <Globe size={16} />, label: "Enterprise BI", desc: "Scale across departments", href: "/solutions/enterprise-bi" },
          { icon: <ShieldCheck size={16} />, label: "Compliance Reporting", desc: "Audit-ready reports", href: "/solutions/compliance" },
        ],
      },
    ],
    featured: { 
      label: "View All Solutions", 
      desc: "Explore the full catalogue of BI solutions.", 
      href: "/solutions",
      tag: "Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
    },
  },
  "Case Studies": {
    sections: [
      {
        heading: "Industries",
        items: [
          { icon: <Landmark size={16} />, label: "HDFC — MIS Overhaul", desc: "Saved 40 hrs/month in reporting", href: "/case-studies/hdfc" },
          { icon: <ShoppingCart size={16} />, label: "Retail Chain Dashboard", desc: "Real-time POS analytics", href: "/case-studies/retail" },
          { icon: <HeartPulse size={16} />, label: "Hospital KPI Suite", desc: "Bed & staff utilisation", href: "/case-studies/hospital" },
        ],
      },
      {
        heading: "Impact Areas",
        items: [
          { icon: <TrendingUp size={16} />, label: "ROI Stories", desc: "Measurable business outcomes", href: "/case-studies/hdfc" },
          { icon: <Zap size={16} />, label: "Automation Wins", desc: "Hours saved, errors eliminated", href: "/case-studies/retail" },
          { icon: <BarChart3 size={16} />, label: "Executive Dashboards", desc: "C-suite decision support", href: "/case-studies/hospital" },
        ],
      },
    ],
    featured: { 
      label: "All Case Studies", 
      desc: "See how data transformed these businesses.", 
      href: "/case-studies",
      tag: "Success Stories",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
  },
  Blog: {
    sections: [
      {
        heading: "Expert Insights",
        items: [
          { icon: <BookOpen size={16} />, label: "Power BI & Tableau", desc: "Advanced DAX & LOD tutorials", href: "/blog?category=power-bi" },
          { icon: <Database size={16} />, label: "SQL Deep Dives", desc: "Database optimization guides", href: "/blog?category=sql" },
          { icon: <FileText size={16} />, label: "BI Strategy", desc: "Data governance & roadmap planning", href: "/blog?category=strategy" },
        ],
      },
      {
        heading: "Resources",
        items: [
          { icon: <Video size={16} />, label: "Video Vault", desc: "Dashboard building walkthroughs", href: "/blog?category=videos" },
          { icon: <Rss size={16} />, label: "Data Digest", desc: "Weekly analytics industry news", href: "/blog?category=news" },
          { icon: <Zap size={16} />, label: "Automation Lab", desc: "Python & SQL automation scripts", href: "/blog?category=automation" },
        ],
      },
    ],
    featured: { 
      label: "Mastering DAX: The 2026 Guide", 
      desc: "Learn how to build bulletproof financial models with high-performance DAX patterns.", 
      href: "/blog/mastering-dax-patterns-2026",
      tag: "Latest Article",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

// ── Mega Menu Panel ──────────────────────────────────────────────────────────

function MegaPanel({ item, onClose }: { item: string; onClose: () => void }) {
  const menu = megaMenus[item];
  if (!menu) return null;
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[720px] max-w-[95vw] z-50"
      onMouseLeave={onClose}
    >
      {/* bridge gap so hover doesn't break */}
      <div className="h-2" />
      <div className="bg-card border border-border shadow-2xl shadow-black/20 overflow-hidden"
           style={{ borderRadius: 0 }}>
        <div className="grid grid-cols-[1fr_1fr] divide-x divide-border">
          {menu.sections.map((section) => (
            <div key={section.heading} className="p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">{section.heading}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-start gap-3 p-2.5 group hover:bg-muted transition-colors"
                    >
                      <span className="mt-0.5 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0">{item.icon}</span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground group-hover:text-blue-500 transition-colors leading-tight">{item.label}</span>
                        <span className="block text-[11px] text-muted-foreground mt-0.5">{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {menu.featured && (
          <div className="border-t border-border bg-muted/30 p-4">
            <Link 
              href={menu.featured.href} 
              onClick={onClose}
              className="flex items-stretch group/feat w-full border border-border bg-card/50 hover:border-blue-500/30 transition-all"
            >
              {menu.featured.image && (
                <div className="w-1/3 relative overflow-hidden h-32 border-r border-border shrink-0">
                  <Image 
                    src={menu.featured.image} 
                    alt={menu.featured.label}
                    fill
                    className="object-cover group-hover/feat:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover/feat:opacity-0 transition-opacity" />
                </div>
              )}
              <div className="flex-1 p-6 flex flex-col justify-center overflow-hidden">
                <div className="flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    {menu.featured.tag && (
                      <span className="text-[9px] font-black uppercase tracking-widest text-blue-500 mb-1.5 block">{menu.featured.tag}</span>
                    )}
                    <h4 className="text-sm font-black text-foreground group-hover/feat:text-blue-500 transition-colors uppercase tracking-tight truncate">{menu.featured.label}</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2">{menu.featured.desc}</p>
                  </div>
                  <a
                    href={menu.featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center p-3 border border-border bg-card/50 text-muted-foreground hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10`}
                    aria-label={`Learn more about ${menu.featured.label}`}
                  >
                    <ArrowRight size={14} className="text-muted-foreground group-hover/feat:text-blue-500" />
                  </a>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-background/50 backdrop-blur-md border-b border-border/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo href="/" size="sm" aria-label="BI Expert - Home" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0 relative">
            {navItems.map(({ label, href }) => {
              const hasMega = !!megaMenus[label];
              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => hasMega && openMenu(label)}
                  onMouseLeave={() => hasMega && scheduleClose()}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      activeMenu === label ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {label}
                    {hasMega && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          activeMenu === label ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {hasMega && activeMenu === label && (
                    <MegaPanel item={label} onClose={() => setActiveMenu(null)} />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-4">
            <Link href="/login" passHref>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 border-0 rounded-none px-6 font-bold uppercase tracking-widest text-[10px]"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup" passHref>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-200 border-0 rounded-none px-6 font-bold uppercase tracking-widest text-[10px]"
              >
                Sign Up
              </Button>
            </Link>
            <div className="h-4 w-px bg-border mx-1" />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map(({ label, href }) => {
              const hasMega = !!megaMenus[label];
              const menu = megaMenus[label];
              return (
                <div key={label} className="border-b border-border last:border-0">
                  <div className="flex items-center justify-between">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 px-4 py-3 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {label}
                    </Link>
                    {hasMega && (
                      <button
                        onClick={() => setActiveMenu(activeMenu === label ? null : label)}
                        className="px-4 py-3 text-gray-500 hover:text-blue-400 transition-colors"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeMenu === label ? "rotate-180 text-blue-400" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {hasMega && activeMenu === label && menu && (
                    <div className="bg-muted/30 pb-4">
                      {menu.sections.map((section) => (
                        <div key={section.heading} className="mt-4 first:mt-2">
                          <p className="px-6 text-[9px] font-black uppercase tracking-widest text-blue-500/60 mb-2">
                            {section.heading}
                          </p>
                          <div className="space-y-1">
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-8 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              >
                                <span className="text-blue-400 shrink-0">{subItem.icon}</span>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-6 flex flex-col gap-3 border-t border-border mt-6">
              <Link href="/login" onClick={() => setMobileOpen(false)}>
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-violet-600 text-white border-0 rounded-none font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-500/20" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileOpen(false)}>
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-violet-600 text-white border-0 rounded-none font-bold uppercase tracking-widest text-xs shadow-lg shadow-blue-500/20" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
