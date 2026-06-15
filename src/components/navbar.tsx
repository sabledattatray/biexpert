"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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
import { motion, AnimatePresence } from "framer-motion";

// --- Mega menu data ---

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
          { icon: <ShoppingCart size={16} />, label: "Retail & E-Commerce", desc: "Sales & inventory insights", href: "/solutions/retail" },
          { icon: <HeartPulse size={16} />, label: "Healthcare", desc: "Patient & ops analytics", href: "/solutions/healthcare" },
          { icon: <Building2 size={16} />, label: "Fintech", desc: "Real-time financial intelligence", href: "/solutions/fintech" },
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
    },
  },
  "Case Studies": {
    sections: [
      {
        heading: "Industries",
        items: [
          { icon: <Landmark size={16} />, label: "HDFC — MIS Overhaul", desc: "Saved 40 hrs/month in reporting", href: "/case-studies/hdfc" },
          { icon: <ShoppingCart size={16} />, label: "Retail Chain Dashboard", desc: "Real-time POS analytics", href: "/case-studies/retail-chain" },
          { icon: <HeartPulse size={16} />, label: "Hospital KPI Suite", desc: "Bed & staff utilisation", href: "/case-studies/hospital" },
        ],
      },
      {
        heading: "Impact Areas",
        items: [
          { icon: <TrendingUp size={16} />, label: "ROI Stories", desc: "Measurable business outcomes", href: "/case-studies/roi" },
          { icon: <Zap size={16} />, label: "Automation Wins", desc: "Hours saved, errors eliminated", href: "/case-studies/automation" },
          { icon: <BarChart3 size={16} />, label: "Executive Dashboards", desc: "C-suite decision support", href: "/case-studies/executive" },
        ],
      },
    ],
    featured: { 
      label: "All Case Studies", 
      desc: "See how data transformed these businesses.", 
      href: "/case-studies",
      tag: "Success Stories",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
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
      desc: "Learn how to build financial models with high-performance DAX patterns.", 
      href: "/blog/mastering-dax-patterns-2026",
      tag: "Latest Article",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
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

// --- Mega Menu Panel ---

function MegaPanel({ 
  menu, 
  onClose, 
  onMouseEnter 
}: { 
  menu: { 
    sections: { heading: string; items: { icon: React.ReactNode; label: string; desc: string; href: string }[] }[]; 
    featured?: { label: string; desc: string; href: string; image?: string; tag?: string } 
  }; 
  onClose: () => void; 
  onMouseEnter?: () => void 
}) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[720px] max-w-[95vw] z-[150]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onClose}
    >
      <div className="h-2" />
      <div className="glass-card bg-dark-bg/95 backdrop-blur-2xl overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl">
        <div className="grid grid-cols-[1fr_1fr] divide-x divide-white/[0.04]">
          {menu.sections.map((section) => (
            <div key={section.heading} className="p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-4">{section.heading}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 group/item hover:bg-white/[0.02] rounded-xl transition-all"
                    >
                      <span className="mt-0.5 text-primary/80 group-hover/item:text-primary transition-colors shrink-0">{item.icon}</span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors leading-tight">{item.label}</span>
                        <span className="block text-[11px] text-muted-foreground mt-0.5 leading-normal">{item.desc}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {menu.featured && (
          <div className="border-t border-white/[0.04] bg-white/[0.01] p-4">
            <Link 
              href={menu.featured.href} 
              className="flex items-stretch group/feat w-full border border-white/[0.06] bg-card hover:bg-white/[0.02] hover:border-primary/30 transition-all rounded-xl overflow-hidden"
            >
              {menu.featured.image && (
                <div className="w-1/3 relative overflow-hidden h-32 border-r border-white/[0.06] shrink-0">
                  <Image 
                    src={menu.featured.image} 
                    alt={menu.featured.label}
                    fill
                    className="object-cover group-hover/feat:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover/feat:opacity-0 transition-opacity" />
                </div>
              )}
              <div className="flex-1 p-5 flex flex-col justify-center overflow-hidden">
                <div className="flex items-center justify-between gap-6">
                  <div className="min-w-0">
                    {menu.featured.tag && (
                      <span className="text-[8px] font-bold uppercase tracking-widest text-primary mb-1 block">{menu.featured.tag}</span>
                    )}
                    <h4 className="text-sm font-bold text-foreground group-hover/feat:text-primary transition-colors uppercase tracking-tight truncate">{menu.featured.label}</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{menu.featured.desc}</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center border border-white/[0.08] rounded-full group-hover/feat:border-primary/50 group-hover/feat:bg-primary/5 transition-all shrink-0">
                    <ArrowRight size={12} className="text-muted-foreground group-hover/feat:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Navbar ---

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopActiveMenu, setDesktopActiveMenu] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopActiveMenu(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setDesktopActiveMenu(null), 150);
  };

  return (
    <header
      className={`sticky top-0 z-[180] w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-white/[0.06] shadow-2xl shadow-black/20"
          : "bg-background/20 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo href="/" size="sm" aria-label="BI Expert - Home" />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full">
            {navItems.map(({ label, href }) => {
              const megaMenu = megaMenus[label];
              const hasMega = !!megaMenu;
              const isActive = desktopActiveMenu === label;
              
              return (
                <div 
                  key={label}
                  className="h-full"
                  onMouseEnter={() => hasMega && openMenu(label)}
                  onMouseLeave={() => hasMega && scheduleClose()}
                >
                  <Link
                    href={href}
                    onClick={() => setDesktopActiveMenu(null)}
                    className={`flex items-center gap-1 px-4 h-full text-[13px] font-semibold transition-all duration-300 border-b-2 outline-none relative hover:text-foreground ${
                      isActive
                        ? "text-primary border-primary bg-primary/[0.02]"
                        : "text-muted-foreground border-transparent hover:bg-white/[0.01]"
                    }`}
                  >
                    {label}
                    {hasMega && (
                      <ChevronDown
                        size={10}
                        className={`transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0 ml-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-transparent">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/95 hover:to-indigo-500/95 text-background font-bold rounded-full px-5 h-9 transition-all border-0 shadow-lg shadow-primary/20 hover:scale-[1.02] duration-200">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-primary hover:text-primary/80 transition-colors z-[110]"
              aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menus Panel */}
      <AnimatePresence>
        {desktopActiveMenu && megaMenus[desktopActiveMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="hidden md:block"
          >
            <MegaPanel 
              menu={megaMenus[desktopActiveMenu]} 
              onClose={scheduleClose}
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[90vw] min-w-[320px] max-w-[420px] z-[200] bg-background/95 backdrop-blur-xl border-l border-white/[0.06] shadow-2xl overflow-y-auto md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/[0.06]">
                  <Logo size="sm" />
                  <button onClick={() => setMobileOpen(false)} className="p-2 text-muted-foreground hover:text-foreground"><X size={20} /></button>
                </div>
                <div className="flex-1 px-2 py-4 space-y-1">
                  {navItems.map(({ label, href }) => {
                    const hasMega = !!megaMenus[label];
                    const menu = megaMenus[label];
                    const isExpanded = mobileActiveMenu === label;
                    return (
                      <div key={label} className="overflow-hidden">
                        <div className="border-b border-white/[0.04]">
                          <div className="flex items-center justify-between">
                            {hasMega ? (
                              <button
                                onClick={() => setMobileActiveMenu(isExpanded ? null : label)}
                                className={`flex-1 flex items-center justify-between px-5 py-5 text-base font-bold transition-colors ${
                                  isExpanded ? "text-primary" : "text-muted-foreground"
                                }`}
                              >
                                {label}
                                <ChevronDown
                                  size={18}
                                  className={`transition-transform duration-300 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            ) : (
                              <Link
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 px-5 py-5 text-base font-bold text-muted-foreground hover:text-primary transition-colors"
                              >
                                {label}
                              </Link>
                            )}
                          </div>
                        </div>
                        <AnimatePresence>
                          {hasMega && isExpanded && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }} 
                              animate={{ height: "auto", opacity: 1 }} 
                              exit={{ height: 0, opacity: 0 }} 
                              className="bg-white/[0.01] border-l-2 border-primary/20 ml-1 overflow-hidden"
                            >
                              {menu?.sections.map((section) => (
                                <div key={section.heading} className="py-2.5">
                                  <p className="px-4 text-[9px] font-bold uppercase tracking-widest text-primary/80 mb-2">{section.heading}</p>
                                  <div className="space-y-1">
                                    {section.items.map((subItem) => (
                                      <Link 
                                        key={subItem.label} 
                                        href={subItem.href} 
                                        onClick={() => setMobileOpen(false)} 
                                        className="flex items-center gap-4 px-5 py-4 text-[14px] text-muted-foreground hover:text-primary hover:bg-white/[0.02] transition-all active:bg-white/[0.04]"
                                      >
                                        <div className="text-primary shrink-0 bg-primary/5 p-2 border border-primary/10 rounded-lg">
                                          {subItem.icon}
                                        </div>
                                        <div className="flex-1 min-w-0 flex items-center justify-between gap-2 overflow-hidden">
                                          <div 
                                            className="font-medium leading-normal text-foreground"
                                            style={{ 
                                              whiteSpace: 'normal', 
                                              wordBreak: 'break-word',
                                              display: 'block',
                                              width: '100%'
                                            }}
                                          >
                                            {subItem.label}
                                          </div>
                                          <ArrowRight size={12} className="text-muted-foreground/30 shrink-0" />
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 border-t border-white/[0.06] bg-white/[0.01] space-y-3">
                  <Link href="/login" onClick={() => setMobileOpen(false)} className="block">
                    <Button className="w-full h-11 bg-transparent border border-white/[0.08] hover:bg-white/[0.02] text-foreground rounded-full font-bold uppercase tracking-widest text-[10px]" size="sm">Login</Button>
                  </Link>
                  <Link href="/signup" onClick={() => setMobileOpen(false)} className="block">
                    <Button className="w-full h-11 bg-gradient-to-r from-primary to-indigo-500 text-background rounded-full font-bold uppercase tracking-widest text-[10px]" size="sm">Sign Up</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
