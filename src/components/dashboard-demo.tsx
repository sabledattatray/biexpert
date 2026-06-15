"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Download, 
  Filter, 
  ChevronDown, 
  RefreshCw, 
  Database, 
  Cpu, 
  LineChart, 
  Lock, 
  Sparkles, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

// --- Mock Data ---

const overviewBarData = [
  { month: "Jan", actual: 40, target: 45, label: "$4.2M" },
  { month: "Feb", actual: 65, target: 50, label: "$6.8M" },
  { month: "Mar", actual: 48, target: 52, label: "$4.8M" },
  { month: "Apr", actual: 85, target: 60, label: "$8.5M" },
  { month: "May", actual: 58, target: 65, label: "$5.8M" },
  { month: "Jun", actual: 98, target: 70, label: "$9.8M" },
  { month: "Jul", actual: 78, target: 75, label: "$7.8M" },
];

const databaseStreams = [
  { name: "PostgreSQL Production", type: "DB Warehouse", status: "Active", latency: "12ms", load: 24, color: "text-secondary-cyan" },
  { name: "Snowflake Enterprise", type: "Cloud Data Lake", status: "Active", latency: "45ms", load: 58, color: "text-purple-400" },
  { name: "Google BigQuery", type: "Analytics Engine", status: "Syncing", latency: "115ms", load: 82, color: "text-amber-400" },
  { name: "Azure Synapse Link", type: "ETL Pipeline", status: "Active", latency: "28ms", load: 15, color: "text-emerald-400" },
];

const latencyPoints = [
  { time: "10:00", value: 34 },
  { time: "10:05", value: 42 },
  { time: "10:10", value: 28 },
  { time: "10:15", value: 65 },
  { time: "10:20", value: 48 },
  { time: "10:25", value: 32 },
  { time: "10:30", value: 24 },
];

// --- Sub-components ---

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min === 0 ? 1 : max - min;
  const points = data
    .map((val, index) => {
      const x = (index / (data.length - 1)) * 50;
      const y = 15 - ((val - min) / range) * 12;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg className="w-14 h-5 overflow-visible" viewBox="0 0 50 15">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={points} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MainDashboardUI() {
  const [activeTab, setActiveTab] = useState<"overview" | "streams" | "performance">("overview");
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [liveRevenue, setLiveRevenue] = useState(42845610);
  const [refreshing, setRefreshing] = useState(false);

  // Live count-up animation for Gross Revenue
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRevenue((prev) => prev + Math.floor(Math.random() * 150) + 10);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleManualRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="relative w-full"
    >
      {/* Glow Layer behind the dashboard */}
      <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-tr from-primary-blue/20 via-secondary-cyan/15 to-accent-green/20 blur-3xl opacity-100 pointer-events-none" />
      
      {/* Dashboard Main Panel */}
      <div className="glass-card bg-dark-bg/50 backdrop-blur-2xl border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl animate-shine">
        
        {/* Tab Switchers */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex text-[11px] font-bold text-neutral-text overflow-x-auto no-scrollbar shrink-0">
              {[
                { id: "overview", label: "Executive Overview", icon: <BarChart3 className="w-3.5 h-3.5" />, color: "border-secondary-cyan text-white bg-secondary-cyan/[0.03]" },
                { id: "streams", label: "Data Pipelines", icon: <Database className="w-3.5 h-3.5" />, color: "border-purple-500 text-white bg-purple-500/[0.03]" },
                { id: "performance", label: "Latency Monitor", icon: <Cpu className="w-3.5 h-3.5" />, color: "border-accent-green text-white bg-accent-green/[0.03]" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-4 py-3 border-b-2 font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id 
                      ? tab.color 
                      : "border-transparent hover:text-white hover:bg-white/[0.01]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 sm:py-0 border-t sm:border-t-0 border-white/[0.06] shrink-0">
              <span className="flex items-center gap-1 text-[9px] font-bold text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                Live Sync
              </span>
            </div>
          </div>

          {/* Main Visuals Box */}
          <div className="p-5 min-h-[290px] relative">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* KPI Cards Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { 
                        title: "Gross Revenue", 
                        value: `$${(liveRevenue / 1000000).toFixed(2)}M`, 
                        sub: "Real-time updates", 
                        delta: "+14.2% ↑", 
                        sparkData: [40, 42, 45, 43, 48, 52, liveRevenue / 1000000],
                        color: "text-secondary-cyan" 
                      },
                      { 
                        title: "Query Savings", 
                        value: "2.8k hrs", 
                        sub: "MIS manual audit", 
                        delta: "+40% saved", 
                        sparkData: [1.2, 1.5, 1.8, 2.1, 2.0, 2.4, 2.8],
                        color: "text-purple-400" 
                      },
                      { 
                        title: "Active Users", 
                        value: "14,821", 
                        sub: "Power BI embedded", 
                        delta: "+8.3% today", 
                        sparkData: [11000, 11500, 12000, 12500, 13100, 13900, 14821],
                        color: "text-accent-green" 
                      },
                    ].map((card, i) => (
                      <div 
                        key={i} 
                        className="bg-white/[0.01] border border-white/[0.05] rounded-xl p-3 relative group overflow-hidden hover:border-secondary-cyan/40 hover:bg-white/[0.02] transition-all cursor-crosshair shadow-md"
                      >
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary-blue to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                        <p className="text-[8px] font-bold text-neutral-text uppercase tracking-widest mb-1 truncate">{card.title}</p>
                        <div className="flex items-end justify-between gap-2">
                          <div>
                            <p className="text-sm sm:text-base font-bold text-white metric-number">{card.value}</p>
                            <p className="text-[8px] text-neutral-text mt-0.5">{card.sub}</p>
                          </div>
                          <div className="text-right">
                            <Sparkline data={card.sparkData} color={`var(--color-${card.color.replace('text-', '')})`} />
                            <span className={`text-[8px] font-bold ${card.color} mt-1 block`}>{card.delta}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 relative">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-[9px] font-bold text-foreground/80 uppercase tracking-widest">Revenue Performance</p>
                          <p className="text-[8px] text-neutral-text uppercase">Actual (Gradient) vs Target (Ghost)</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-gradient-to-r from-primary-blue to-secondary-cyan" /><span className="text-[7px] text-neutral-text">Actual</span></div>
                          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-white/[0.08]" /><span className="text-[7px] text-neutral-text">Target</span></div>
                        </div>
                      </div>
                      
                      {/* Interactive Bar Chart with Y-Axis and Static Metrics */}
                      <div className="flex gap-2.5 items-stretch h-[120px] mt-6 relative select-none">
                        {/* Y-Axis Ticks */}
                        <div className="flex flex-col justify-between items-end text-[7.5px] font-bold text-neutral-text/50 w-10 pr-1 py-1 shrink-0">
                          <span>$10.0M</span>
                          <span>$7.5M</span>
                          <span>$5.0M</span>
                          <span>$2.5M</span>
                          <span>$0.0M</span>
                        </div>

                        {/* Chart Grid & Bars Area */}
                        <div className="flex-1 flex items-end justify-between gap-1 sm:gap-2 relative h-full">
                          {/* Horizontal Grid Lines */}
                          <div className="absolute inset-x-0 top-[4px] bottom-[4px] flex flex-col justify-between pointer-events-none">
                            {[0, 1, 2, 3, 4].map((idx) => (
                              <div key={idx} className="w-full h-px bg-white/[0.04]" />
                            ))}
                          </div>

                          {overviewBarData.map((bar, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1.5 z-10 group/bar h-full justify-end"
                              onMouseEnter={() => setHoveredBar(i)}
                              onMouseLeave={() => setHoveredBar(null)}
                            >
                              {/* Static Metric Label Above Bar */}
                              <span className="text-[7.5px] font-extrabold text-secondary-cyan metric-number tracking-tighter transition-all duration-300 group-hover/bar:text-accent-green group-hover/bar:scale-105">
                                {bar.label}
                              </span>

                              <div className="w-full flex items-end justify-center relative cursor-pointer h-[80px]">
                                {/* Target Ghost Bar */}
                                <div 
                                  className="absolute w-[60%] sm:w-[45%] rounded-t-xs bg-white/[0.03] border border-dashed border-white/10"
                                  style={{ height: `${bar.target}%` }}
                                />
                                {/* Actual Bar */}
                                <motion.div
                                  className={`w-[60%] sm:w-[45%] rounded-t-xs z-10 transition-all duration-300 ${
                                    hoveredBar === i 
                                      ? "bg-gradient-to-t from-primary-blue to-secondary-cyan shadow-[0_0_12px_rgba(0,194,255,0.5)] scale-x-105" 
                                      : "bg-gradient-to-t from-primary-blue/80 to-secondary-cyan/80"
                                  }`}
                                  style={{ height: `${bar.actual}%` }}
                                  layoutId={`main-bar-${i}`}
                                />
                              </div>
                              <span className="text-[8px] font-bold text-neutral-text uppercase tracking-wider transition-colors duration-300 group-hover/bar:text-white">{bar.month}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Donut / Share Chart */}
                    <div className="md:col-span-1 bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 flex flex-col items-center justify-center relative">
                      <p className="text-[8px] font-bold text-neutral-text/80 uppercase tracking-widest text-center">BI Tool Distribution</p>
                      
                      <div className="relative w-20 h-20 mx-auto my-3">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="38" fill="transparent" stroke="currentColor" className="text-white/[0.02]" strokeWidth="12" />
                          <circle cx="50" cy="50" r="38" fill="transparent" stroke="#00C2FF" strokeWidth="12" strokeDasharray="238.76" strokeDashoffset={238.76 * 0.45} strokeLinecap="round" />
                          <circle cx="50" cy="50" r="38" fill="transparent" stroke="#8b5cf6" strokeWidth="12" strokeDasharray="238.76" strokeDashoffset={238.76 * 0.75} transform="rotate(162 50 50)" strokeLinecap="round" />
                          <circle cx="50" cy="50" r="38" fill="transparent" stroke="#00E5A0" strokeWidth="12" strokeDasharray="238.76" strokeDashoffset={238.76 * 0.8} transform="rotate(270 50 50)" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-sm font-bold text-white metric-number">55%</span>
                          <span className="text-[6px] font-bold uppercase tracking-widest text-neutral-text">Power BI</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-1 text-[7px] text-neutral-text">
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-secondary-cyan" /><span>Power BI</span></div>
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-purple-500" /><span>Tableau</span></div>
                        <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-accent-green" /><span>SQL ETL</span></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "streams" && (
                <motion.div
                  key="streams"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <p className="text-[9px] font-bold text-foreground/80 uppercase tracking-widest">Active Data Warehousing Streams</p>
                  
                  {/* Database streams list table */}
                  <div className="space-y-2">
                    {databaseStreams.map((stream, idx) => (
                      <div 
                        key={stream.name}
                        className="bg-white/[0.01] border border-white/[0.05] rounded-xl p-3 flex items-center justify-between hover:bg-white/[0.02] hover:border-primary-blue/30 transition-all shadow-inner"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-white/[0.03] rounded-lg border border-white/[0.08] ${stream.color}`}>
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">{stream.name}</p>
                            <p className="text-[8px] text-neutral-text uppercase tracking-wider mt-0.5">{stream.type}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-5 text-right">
                          <div>
                            <p className="text-[8px] text-neutral-text">Latency</p>
                            <p className="text-xs font-bold text-white metric-number mt-0.5">{stream.latency}</p>
                          </div>
                          <div className="w-16">
                            <p className="text-[8px] text-neutral-text">Load</p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary-blue to-secondary-cyan rounded-full" 
                                  style={{ width: `${stream.load}%` }}
                                />
                              </div>
                              <span className="text-[8px] font-bold text-white metric-number">{stream.load}%</span>
                            </div>
                          </div>
                          <span className={`text-[8px] font-bold px-2.5 py-0.5 rounded-full ${stream.status === "Active" ? "bg-accent-green/10 text-accent-green border border-accent-green/20" : "bg-amber-400/10 text-amber-400 border border-amber-400/20"}`}>
                            {stream.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline Suggestion Banner */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-primary-blue/5 border border-primary-blue/10">
                    <Sparkles className="w-3.5 h-3.5 text-secondary-cyan animate-pulse shrink-0" />
                    <span className="text-[10px] text-secondary-cyan font-medium leading-relaxed">
                      AI Tuning: SQL Server indexes rebuilt on 4 tables. Query speed improved by 24%!
                    </span>
                  </div>
                </motion.div>
              )}

              {activeTab === "performance" && (
                <motion.div
                  key="performance"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-bold text-foreground/80 uppercase tracking-widest">Database Query Latency</p>
                      <p className="text-[8px] text-neutral-text uppercase">Rolling 30 minutes (milliseconds)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-neutral-text">Average Latency</p>
                      <p className="text-sm font-bold text-accent-green metric-number">38.4ms</p>
                    </div>
                  </div>

                  {/* Latin line latency chart representation */}
                  <div className="bg-white/[0.01] border border-white/[0.05] rounded-xl p-4 relative h-[140px] flex items-end">
                    <div className="absolute inset-x-0 inset-y-4 flex flex-col justify-between px-4 pointer-events-none">
                      {[100, 75, 50, 25, 0].map((label, idx) => (
                        <div key={idx} className="w-full flex items-center justify-between text-[7px] text-neutral-text/50">
                          <span>{label}ms</span>
                          <div className="flex-1 h-px bg-white/[0.02] mx-2" />
                        </div>
                      ))}
                    </div>

                    {/* SVG Line Graph */}
                    <svg className="w-full h-[80px] overflow-visible z-10 px-6" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00E5A0" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <path 
                        d={`M 0,30 L 0,${30 - latencyPoints[0].value / 3} L 16,${30 - latencyPoints[1].value / 3} L 33,${30 - latencyPoints[2].value / 3} L 50,${30 - latencyPoints[3].value / 3} L 66,${30 - latencyPoints[4].value / 3} L 83,${30 - latencyPoints[5].value / 3} L 100,${30 - latencyPoints[6].value / 3} L 100,30 Z`}
                        fill="url(#chart-glow)"
                      />
                      {/* Line Path */}
                      <polyline
                        fill="none"
                        stroke="#00E5A0"
                        strokeWidth="1.5"
                        points={`0,${30 - latencyPoints[0].value / 3} 16,${30 - latencyPoints[1].value / 3} 33,${30 - latencyPoints[2].value / 3} 50,${30 - latencyPoints[3].value / 3} 66,${30 - latencyPoints[4].value / 3} 83,${30 - latencyPoints[5].value / 3} 100,${30 - latencyPoints[6].value / 3}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="absolute inset-x-0 bottom-1.5 flex justify-between px-10 text-[7px] text-neutral-text font-bold uppercase tracking-wider">
                      {latencyPoints.map((pt, i) => (
                        <span key={i}>{pt.time}</span>
                      ))}
                    </div>
                  </div>

                  {/* Systems diagnostics metrics row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/[0.01] border border-white/[0.05] rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-green" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">ETL Pipeline Health</span>
                      </div>
                      <span className="text-[10px] font-bold text-accent-green metric-number">100% OK</span>
                    </div>

                    <div className="bg-white/[0.01] border border-white/[0.05] rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-secondary-cyan" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">Azure CPU load</span>
                      </div>
                      <span className="text-[10px] font-bold text-secondary-cyan metric-number">14.8%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Operational Strip */}
          <div className="flex items-center justify-between py-3.5 px-5 bg-white/[0.01] border-t border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[8px] text-neutral-text/50 font-bold uppercase tracking-widest">All database connections secure</span>
            </div>
            <span className="text-[8px] text-neutral-text/30">Auto-refresh: every 30s</span>
          </div>
        </div>
      </motion.div>
  );
}
