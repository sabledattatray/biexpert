"use client";

import React from "react";
import { BarChart3, TrendingUp, Users, ArrowUpRight, ArrowDownRight, Globe, MonitorSmartphone, Calendar, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const overviewStats = [
  { label: "Unique Visitors", value: "84.2K", delta: "+14.5%", trend: "up" },
  { label: "Bounce Rate", value: "32.4%", delta: "-2.1%", trend: "down" },
  { label: "Session Duration", value: "3m 45s", delta: "+12s", trend: "up" },
  { label: "Conversion Rate", value: "4.8%", delta: "+0.6%", trend: "up" },
];

const topPages = [
  { path: "/services/dashboard-design", views: "12,450", bounce: "28%" },
  { path: "/case-studies/fintech-scale", views: "9,820", bounce: "31%" },
  { path: "/solutions/bfsi", views: "8,100", bounce: "25%" },
  { path: "/blog/dax-optimization", views: "5,400", bounce: "42%" },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-foreground">Traffic Analytics</h1>
          <p className="text-muted-foreground text-sm mt-1">Deep dive into visitor behavior, traffic sources, and conversion metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest h-10 px-6">
            <Calendar size={14} className="mr-2" /> Last 30 Days
          </Button>
          <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-10 px-6 border-0 shadow-lg shadow-blue-500/20">
            <Download size={14} className="mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {overviewStats.map((stat, i) => (
          <div key={i} className="bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</h3>
              <div className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${
                stat.trend === "up" ? "text-emerald-500" : "text-rose-500"
              }`}>
                {stat.trend === "up" ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.delta}
              </div>
            </div>
            <p className="text-3xl font-bold tracking-tighter text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="bg-card border border-border p-8 min-h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Acquisition Trends</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Organic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-indigo-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Direct</span>
            </div>
          </div>
        </div>
        
        {/* Abstract Chart Representation */}
        <div className="flex-1 relative flex items-end justify-between gap-1 mt-10">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-border" />)}
          </div>
          
          {Array.from({ length: 30 }).map((_, i) => {
            const h1 = 30 + Math.random() * 50;
            const h2 = 10 + Math.random() * 30;
            return (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group relative h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h2}%` }}
                  transition={{ delay: i * 0.02 }}
                  className="w-full bg-indigo-500/80 hover:bg-indigo-400 transition-colors"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h1}%` }}
                  transition={{ delay: i * 0.02 + 0.1 }}
                  className="w-full bg-blue-500 hover:bg-blue-400 transition-colors"
                />
              </div>
            )
          })}
        </div>
        <div className="flex justify-between mt-4 border-t border-border pt-4 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          <span>Day 1</span>
          <span>Day 15</span>
          <span>Day 30</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-card border border-border p-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Top Performing Pages</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Path</th>
                <th className="pb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Views</th>
                <th className="pb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-right">Bounce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {topPages.map((page, i) => (
                <tr key={i} className="group">
                  <td className="py-4 text-xs font-bold text-blue-400 group-hover:text-blue-500 transition-colors">{page.path}</td>
                  <td className="py-4 text-xs font-bold text-foreground text-right">{page.views}</td>
                  <td className="py-4 text-xs text-muted-foreground text-right">{page.bounce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Devices & Geography */}
        <div className="grid grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-card p-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
              <MonitorSmartphone size={14} /> Devices
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Desktop</span><span>68%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-blue-500 w-[68%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Mobile</span><span>29%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-indigo-500 w-[29%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Tablet</span><span>3%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-violet-500 w-[3%]" /></div>
              </div>
            </div>
          </div>
          <div className="bg-card p-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
              <Globe size={14} /> Regions
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>United States</span><span>45%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-blue-500 w-[45%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>India</span><span>32%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-indigo-500 w-[32%]" /></div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>United Kingdom</span><span>12%</span>
                </div>
                <div className="h-1.5 w-full bg-muted"><div className="h-full bg-violet-500 w-[12%]" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
