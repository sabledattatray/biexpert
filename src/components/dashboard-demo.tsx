"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Download, Filter, ChevronDown, RefreshCw } from "lucide-react";

const barData = [
  { month: "Jan", value: 40, label: "$4.2M" },
  { month: "Feb", value: 65, label: "$6.8M" },
  { month: "Mar", value: 45, label: "$4.7M" },
  { month: "Apr", value: 80, label: "$8.4M" },
  { month: "May", value: 55, label: "$5.8M" },
  { month: "Jun", value: 95, label: "$9.9M" },
  { month: "Jul", value: 75, label: "$7.9M" },
];

const kpiData = [
  { title: "Gross Revenue", val: "$42.8M", delta: "+14.2%", color: "text-emerald-400" },
  { title: "Margin", val: "34.2%", delta: "+2.1%", color: "text-emerald-400" },
  { title: "Churn", val: "1.2%", delta: "-0.4%", color: "text-emerald-400" },
];

function BarChart({ hoveredBar, setHoveredBar }: { hoveredBar: number | null; setHoveredBar: (i: number | null) => void }) {
  return (
    <div className="flex items-end justify-between gap-1 h-[120px] relative">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-full h-px bg-white/5" />
        ))}
      </div>
      {barData.map((bar, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center gap-1 z-10 group/bar"
          onMouseEnter={() => setHoveredBar(i)}
          onMouseLeave={() => setHoveredBar(null)}
        >
          <AnimatePresence>
            {hoveredBar === i && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-7 px-2 py-0.5 bg-white text-black text-[9px] font-bold rounded pointer-events-none z-30 whitespace-nowrap"
              >
                {bar.label}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full flex items-end" style={{ height: "110px" }}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${bar.value}%` }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
              className={`w-full rounded-t-sm transition-colors duration-200 ${
                hoveredBar === i ? "bg-blue-400" : "bg-blue-600"
              }`}
            />
          </div>
          <span className="text-[7px] font-bold text-muted-foreground/30 uppercase">{bar.month}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart() {
  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="38" fill="transparent" stroke="currentColor" className="text-muted-foreground/10" strokeWidth="14" />
        <motion.circle
          cx="50" cy="50" r="38"
          fill="transparent"
          stroke="#3b82f6"
          strokeWidth="14"
          strokeDasharray="238.76"
          initial={{ strokeDashoffset: 238.76 }}
          animate={{ strokeDashoffset: 238.76 * 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="50" cy="50" r="38"
          fill="transparent"
          stroke="#8b5cf6"
          strokeWidth="14"
          strokeDasharray="238.76"
          strokeDashoffset="167.1"
          transform="rotate(252 50 50)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base font-bold text-foreground">70%</span>
        <span className="text-[7px] font-bold text-muted-foreground/40 uppercase">Enterprise</span>
      </div>
    </div>
  );
}

export default function MainDashboardUI() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="relative w-full"
    >
      <div className="absolute -inset-6 bg-blue-600/15 blur-[80px] rounded-full pointer-events-none" />
      <div className="relative border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/50">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 flex items-center justify-center rounded-sm shadow-lg shadow-blue-600/20">
              <BarChart3 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[11px] font-bold text-foreground/80 tracking-tight">BI Expert — Executive FY26</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-bold uppercase tracking-widest">
              <RefreshCw className="w-2.5 h-2.5 animate-spin-slow" />
              <span className="hidden sm:inline">Live</span>
            </div>
            <button 
              className="p-1 border border-border hover:bg-muted transition-colors"
              aria-label="Download executive report"
            >
              <Download className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-background overflow-x-auto no-scrollbar">
          <Filter className="w-3 h-3 text-muted-foreground/50 shrink-0" />
          <div className="h-3 w-px bg-border shrink-0" />
          {["BFSI", "Automation", "FY26"].map((f, i) => (
            <button key={i} className="flex items-center gap-1 px-2 py-0.5 bg-muted border border-border text-[9px] font-bold text-muted-foreground uppercase tracking-widest whitespace-nowrap hover:border-blue-500/50 hover:text-blue-500 transition-colors shrink-0">
              {f} <ChevronDown className="w-2.5 h-2.5" />
            </button>
          ))}
        </div>

        <div className="p-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {kpiData.map((kpi, i) => (
              <div key={i} className="bg-muted/50 border border-border p-3 relative group overflow-hidden hover:border-blue-500/40 transition-colors cursor-crosshair">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-600/0 group-hover:bg-blue-600/60 transition-colors" />
                <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest truncate mb-1">{kpi.title}</p>
                <p className="text-sm font-bold text-foreground">{kpi.val}</p>
                <p className={`text-[9px] font-bold ${kpi.color}`}>{kpi.delta}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 bg-muted/50 border border-border p-3 relative">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[9px] font-bold text-foreground/70 uppercase tracking-widest">Revenue by Month</p>
                  <p className="text-[8px] text-muted-foreground/50 uppercase">Actual vs Forecast</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-blue-600 rounded-sm" />
                  <div className="w-2 h-2 bg-blue-600/20 rounded-sm" />
                </div>
              </div>
              <BarChart hoveredBar={hoveredBar} setHoveredBar={setHoveredBar} />
            </div>

            <div className="col-span-1 bg-muted/50 border border-border p-3 flex flex-col items-center justify-center gap-2">
              <p className="text-[8px] font-bold text-muted-foreground/50 uppercase tracking-widest">Market Share</p>
              <DonutChart />
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-[7px] text-muted-foreground">Ent</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-violet-500" /><span className="text-[7px] text-muted-foreground">SMB</span></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] text-muted-foreground/50 font-bold uppercase tracking-widest">All systems operational</span>
            </div>
            <span className="text-[8px] text-muted-foreground/30">Last sync: just now</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
