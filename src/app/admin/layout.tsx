"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Bell, 
  Search,
  ChevronRight,
  Database,
  Globe,
  Zap,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: <LayoutDashboard size={18} /> },
  { label: "Content Management", href: "/admin/content", icon: <FileText size={18} /> },
  { label: "Media Library", href: "/admin/media", icon: <ImageIcon size={18} /> },
  { label: "Newsletter Subscribers", href: "/admin/subscribers", icon: <Mail size={18} /> },
  { label: "Appearance & Theme", href: "/admin/appearance", icon: <Globe size={18} /> },
  { label: "User Management", href: "/admin/users", icon: <Users size={18} /> },
  { label: "Analytics", href: "/admin/analytics", icon: <BarChart3 size={18} /> },
  { label: "Site Settings", href: "/admin/settings", icon: <Settings size={18} /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const actualPassword = localStorage.getItem("adminPassword") || "Jobless@1511";
    
    if (username === "admin" && password === actualPassword) {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid credentials.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  if (isChecking) {
    return <div className="min-h-screen bg-background flex items-center justify-center text-foreground font-bold">Verifying Access...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-card border border-border p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-600" />
          <div className="flex flex-col items-center mb-8">
            <div className="h-12 w-12 rounded-none bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
              <span className="text-white font-black text-lg">BI</span>
            </div>
            <h1 className="text-2xl font-black uppercase tracking-tighter text-foreground">Control Center</h1>
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-1">Restricted Access</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin"
                className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground"
              />
            </div>
            {error && <p className="text-rose-500 text-xs font-bold">{error}</p>}
            <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] rounded-none border-0 shadow-lg shadow-blue-500/20">
              Authenticate
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex text-foreground">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(true)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-border">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-none bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-xs">BI</span>
              </div>
              {sidebarOpen && (
                <span className="font-black text-sm tracking-tighter uppercase text-foreground">
                  Control <span className="text-blue-500">Center</span>
                </span>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 transition-all group relative ${
                    isActive 
                      ? "bg-blue-600/10 text-blue-500 font-bold" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <span className={`${isActive ? "text-blue-500" : "group-hover:text-blue-400"}`}>{item.icon}</span>
                  {sidebarOpen && <span className="text-sm uppercase tracking-widest text-[10px]">{item.label}</span>}
                  {isActive && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute left-0 w-1 h-6 bg-blue-500" 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-border space-y-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              onClick={handleLogout}
              className="w-full justify-start gap-3 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 px-3 rounded-none"
            >
              <LogOut size={18} />
              {sidebarOpen && <span className="text-[10px] font-black uppercase tracking-widest">Sign Out</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-muted transition-colors text-muted-foreground"
            >
              {sidebarOpen ? <Menu size={20} /> : <X size={20} />}
            </button>
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted/50 border border-border rounded-none w-64">
              <Search size={14} className="text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                className="bg-transparent border-none text-xs focus:outline-none w-full placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-[9px] font-black uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Live
            </div>
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 bg-blue-600 rounded-full border-2 border-card" />
            </button>
            <div className="h-8 w-8 rounded-full bg-muted border border-border overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-600" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-muted/20 p-6 md:p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
