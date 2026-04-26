"use client";

import React from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Calendar,
  ChevronRight,
  Zap,
  ShieldCheck,
  Globe,
  Database,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Revenue", value: "$48,250", delta: "+12.5%", trend: "up", icon: <DollarSign size={20} className="text-emerald-500" /> },
  { label: "Page Views", value: "124.8K", delta: "+8.2%", trend: "up", icon: <Eye size={20} className="text-blue-500" /> },
  { label: "Active Clients", value: "1,240", delta: "-2.4%", trend: "down", icon: <Users size={20} className="text-violet-500" /> },
  { label: "System Load", value: "14ms", delta: "Optimal", trend: "up", icon: <Zap size={20} className="text-amber-500" /> },
];

const recentActivity = [
  { id: 1, action: "Blog Post Published", target: "Top 10 Power BI DAX tips", time: "2 hours ago", status: "success" },
  { id: 2, action: "User Signup", target: "John Smith (Acme Corp)", time: "4 hours ago", status: "info" },
  { id: 3, action: "Lead Generated", target: "Financial Audit Inquiry", time: "6 hours ago", status: "success" },
  { id: 4, action: "System Alert", target: "API Latency spike detected", time: "12 hours ago", status: "warning" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
            <ShieldCheck size={12} /> Executive Overview
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase text-foreground">Intelligence Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-2">Real-time performance metrics and system health monitoring.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-none border-border bg-card text-[10px] font-black uppercase tracking-widest h-10 px-6">
            <Calendar size={14} className="mr-2" /> Select Range
          </Button>
          <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest h-10 px-6 border-0 shadow-lg shadow-blue-500/20">
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border p-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-muted border border-border">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${
                stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.delta}
              </div>
            </div>
            <h3 className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h3>
            <p className="text-3xl font-black tracking-tighter text-foreground">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Main Chart Area Placeholder */}
        <div className="bg-card border border-border p-8 relative min-h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tighter text-foreground">Traffic Analysis</h3>
              <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest">Global platform engagement metrics</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Unique Views</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Total Events</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-end gap-3 px-2 py-4">
            {[40, 60, 45, 90, 65, 80, 50, 70, 85, 60, 40, 95].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[8px] font-black px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}K
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 px-2 border-t border-border pt-4 text-[9px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        {/* Sidebar Activity */}
        <div className="space-y-6">
          <div className="bg-card border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Recent Events</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground">
                <MoreVertical size={16} />
              </Button>
            </div>
            <div className="space-y-6">
              {recentActivity.map((event) => (
                <div key={event.id} className="flex gap-4 group">
                  <div className="relative">
                    <div className={`h-2.5 w-2.5 rounded-full mt-1.5 ${
                      event.status === "success" ? "bg-emerald-500" : event.status === "warning" ? "bg-rose-500" : "bg-blue-500"
                    } relative z-10`} />
                    <div className="absolute top-4 left-1.25 bottom-[-24px] w-px bg-border group-last:hidden" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground leading-none mb-1.5">{event.action}</p>
                    <p className="text-[11px] text-muted-foreground mb-1">{event.target}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-8 border-t border-border pt-6 rounded-none text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400 h-auto">
              View All Activity <ChevronRight size={14} className="ml-1" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-600 p-8 relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <h3 className="text-lg font-black tracking-tighter text-white uppercase mb-2 relative z-10">Quick Actions</h3>
            <p className="text-white/80 text-xs mb-6 relative z-10">Frequently used system tasks.</p>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <Link href="/admin/content/new" className="bg-white/10 hover:bg-white/20 p-3 flex flex-col items-center gap-2 transition-colors group">
                <FileText size={18} className="text-white" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white">New Post</span>
              </Link>
              <Link href="/admin/media" className="bg-white/10 hover:bg-white/20 p-3 flex flex-col items-center gap-2 transition-colors group">
                <ImageIcon size={18} className="text-white" />
                <span className="text-[9px] font-black uppercase tracking-widest text-white">Upload</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
