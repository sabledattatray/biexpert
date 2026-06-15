"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Users, 
  ShoppingCart, 
  Cpu, 
  Database, 
  ShieldAlert, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  Calendar
} from "lucide-react";

// --- Types & Data Structures ---

type Region = "All" | "North" | "West" | "South";
type Timeframe = "7D" | "30D" | "YTD";
type DashboardType = "finance" | "sales" | "ops" | "risk";

const regions: Region[] = ["All", "North", "West", "South"];
const timeframes: Timeframe[] = ["7D", "30D", "YTD"];

const regionMultipliers: Record<Region, number> = {
  All: 1.0,
  North: 0.32,
  West: 0.44,
  South: 0.24,
};

const timeframeMultipliers: Record<Timeframe, number> = {
  "7D": 0.22,
  "30D": 0.58,
  YTD: 1.0,
};

export function DashboardPlayground() {
  const [activeTab, setActiveTab] = useState<DashboardType>("finance");
  const [region, setRegion] = useState<Region>("All");
  const [timeframe, setTimeframe] = useState<Timeframe>("30D");

  const rMult = regionMultipliers[region];
  const tMult = timeframeMultipliers[timeframe];

  // --- 1. Financial Dashboard Values ---
  const financeKPIs = {
    revenue: 12842000 * rMult * tMult,
    margin: 38.4 + (region === "West" ? 2.1 : region === "South" ? -1.8 : 0),
    cashFlow: 4120000 * rMult * tMult,
  };

  const getFinanceChartPoints = () => {
    // base points for YTD
    const base = [40, 55, 48, 72, 64, 85];
    const points = base.map(val => val * rMult * (timeframe === "7D" ? 0.3 : timeframe === "30D" ? 0.75 : 1));
    return points;
  };

  // --- 2. Sales Dashboard Values ---
  const salesKPIs = {
    conversion: 3.42 + (region === "North" ? 0.45 : region === "South" ? -0.32 : 0),
    pipeline: 8120000 * rMult * tMult,
    aov: 420 + (region === "West" ? 35 : region === "North" ? -15 : 0),
  };

  const getSalesChartHeights = () => {
    const base = [65, 82, 45, 95]; // SaaS, Enterprise, Retail, Services
    return base.map(val => val * rMult * (timeframe === "7D" ? 0.4 : timeframe === "30D" ? 0.8 : 1));
  };

  // --- 3. Operations Dashboard Values ---
  const opsKPIs = {
    cpu: Math.min(98.5, Math.max(12.5, 24.8 * (region === "North" ? 1.4 : region === "West" ? 0.85 : 1.1))),
    latency: Math.min(150, Math.max(5, 18.2 * (region === "South" ? 1.6 : region === "North" ? 0.9 : 1.0))),
    sla: 99.99 - (region === "South" ? 0.05 : 0),
  };

  const getOpsChartPoints = () => {
    const base = [25, 45, 30, 85, 40, 60, opsKPIs.latency];
    return base.map(val => val * (region === "South" ? 1.4 : 1.0));
  };

  // --- 4. Risk & Compliance Values ---
  const riskKPIs = {
    fraudRate: 0.02 * (region === "West" ? 1.5 : region === "South" ? 0.8 : 1.0),
    compliance: 98.8 + (region === "North" ? 0.8 : region === "West" ? -0.5 : 0),
    slaUptime: 100 - (region === "South" ? 0.08 : 0),
  };

  return (
    <section className="py-24 border-t border-white/[0.05] relative overflow-hidden">
      {/* Dynamic Background Glow meshes based on active tab */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10 transition-all duration-700 ${
          activeTab === "finance" ? "bg-primary-blue" :
          activeTab === "sales" ? "bg-secondary-cyan" :
          activeTab === "ops" ? "bg-accent-green" : "bg-purple-500"
        }`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-secondary-cyan mb-6 shadow-2xl backdrop-blur-md">
            Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-[42px] font-bold tracking-tight text-foreground leading-tight mb-5">
            Interactive Dashboard <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-neutral-text text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Select a target department and test live interactive filters. Experience the visual standard, speed, and analytical detail we build for enterprise customers.
          </p>
        </div>

        {/* Filters and Tab Navigation Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Selector Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-text/60 pl-2">Select Domain Dashboard</span>
            {[
              { id: "finance", label: "Financial Analyst", sub: "C-Suite Profit & Cashflow", color: "border-primary-blue bg-primary-blue/[0.02]" },
              { id: "sales", label: "Sales & Funnel Insights", sub: "Revenue by region & channel", color: "border-secondary-cyan bg-secondary-cyan/[0.02]" },
              { id: "ops", label: "Operations Control", sub: "Real-time ETL server logs", color: "border-accent-green bg-accent-green/[0.02]" },
              { id: "risk", label: "Risk & Compliance", sub: "Fintech audit & fraud rates", color: "border-purple-500 bg-purple-500/[0.02]" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as DashboardType);
                  // Auto reset filters to show dynamic change clearly
                  setRegion("All");
                  setTimeframe("30D");
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                  activeTab === tab.id 
                    ? `${tab.color} text-white border-white/[0.12] shadow-lg shadow-black/25` 
                    : "border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] text-neutral-text hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider">{tab.label}</h4>
                    <p className="text-[10px] text-neutral-text/80 mt-1 leading-normal">{tab.sub}</p>
                  </div>
                  <ArrowRight size={12} className={`transition-transform duration-300 ${activeTab === tab.id ? "translate-x-1" : "opacity-0"}`} />
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT: Live Embedded Dashboard Box */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            
            {/* Filter Toolbar */}
            <div className="glass-card-strong p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border border-white/[0.06] shadow-xl">
              <div className="flex items-center gap-2">
                <Filter size={12} className="text-secondary-cyan" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-text">Interactive Filters</span>
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap items-center gap-4">
                
                {/* Region Filter */}
                <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] p-1 rounded-lg">
                  {regions.map((r) => (
                    <button
                      key={r}
                      onClick={() => setRegion(r)}
                      className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                        region === r 
                          ? "bg-white/[0.06] text-white border border-white/[0.08]" 
                          : "text-neutral-text hover:text-white border border-transparent"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {/* Timeframe Filter */}
                <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] p-1 rounded-lg">
                  {timeframes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-3 py-1 text-[9px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                        timeframe === t 
                          ? "bg-white/[0.06] text-white border border-white/[0.08]" 
                          : "text-neutral-text hover:text-white border border-transparent"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Power BI Workspace Frame */}
            <div className="glass-card-strong relative z-10 w-full overflow-hidden p-6 rounded-2xl border border-white/[0.08] shadow-2xl animate-shine min-h-[360px]">
              
              {/* Workspace Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border border-white/[0.08] bg-white/[0.02] ${
                    activeTab === "finance" ? "text-primary-blue" :
                    activeTab === "sales" ? "text-secondary-cyan" :
                    activeTab === "ops" ? "text-accent-green" : "text-purple-500"
                  }`}>
                    {activeTab === "finance" ? <DollarSign size={16} /> :
                     activeTab === "sales" ? <ShoppingCart size={16} /> :
                     activeTab === "ops" ? <Cpu size={16} /> : <ShieldAlert size={16} />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      {activeTab === "finance" ? "C-Suite Financial Intelligence Dashboard" :
                       activeTab === "sales" ? "Global Sales & Channel Analytics" :
                       activeTab === "ops" ? "ETL Pipeline & Systems Status Monitor" :
                       "Fintech Compliance & Audit Control"}
                    </h3>
                    <p className="text-[9px] text-neutral-text uppercase tracking-widest mt-0.5">
                      Power BI Embedded Workspace · Region: {region} · Timeframe: {timeframe}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[8px] font-bold text-accent-green bg-accent-green/10 border border-accent-green/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-accent-green animate-pulse" />
                  Connected
                </div>
              </div>

              {/* Dashboard Content Switcher */}
              <AnimatePresence mode="wait">
                
                {/* 1. FINANCE DASHBOARD */}
                {activeTab === "finance" && (
                  <motion.div
                    key="finance"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Gross Revenue", value: `$${(financeKPIs.revenue / 1000000).toFixed(2)}M`, sub: "Total contract value", icon: <DollarSign size={14} />, color: "text-primary-blue" },
                        { label: "EBITDA Margin", value: `${financeKPIs.margin.toFixed(1)}%`, sub: "Operating efficiency", icon: <Percent size={14} />, color: "text-secondary-cyan" },
                        { label: "Operating Cash", value: `$${(financeKPIs.cashFlow / 1000000).toFixed(2)}M`, sub: "Net cash inflow", icon: <Activity size={14} />, color: "text-accent-green" }
                      ].map((kpi, idx) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.02] transition-colors relative">
                          <span className="text-[8px] font-bold text-neutral-text uppercase tracking-widest block mb-1">{kpi.label}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-base sm:text-lg font-bold text-white metric-number">{kpi.value}</span>
                            <span className={`${kpi.color} p-1 bg-white/[0.03] rounded`}>{kpi.icon}</span>
                          </div>
                          <span className="text-[8px] text-neutral-text/75 block mt-1">{kpi.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chart & Table */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* SVG Line Chart */}
                      <div className="md:col-span-8 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider">Revenue Trend (Actual vs Target)</span>
                          <span className="text-[8px] font-bold text-primary-blue bg-primary-blue/10 border border-primary-blue/20 px-2 py-0.5 rounded">Actual</span>
                        </div>

                        {/* Line Chart Graphic */}
                        <div className="relative h-[110px] flex items-end">
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-1">
                            {[0, 1, 2, 3].map((val) => (
                              <div key={val} className="w-full h-px bg-white/[0.02]" />
                            ))}
                          </div>
                          <svg className="w-full h-[80px] overflow-visible z-10" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline
                              fill="none"
                              stroke="#0057D9"
                              strokeWidth="2.0"
                              points={`0,${30 - getFinanceChartPoints()[0] / 3.5} 20,${30 - getFinanceChartPoints()[1] / 3.5} 40,${30 - getFinanceChartPoints()[2] / 3.5} 60,${30 - getFinanceChartPoints()[3] / 3.5} 80,${30 - getFinanceChartPoints()[4] / 3.5} 100,${30 - getFinanceChartPoints()[5] / 3.5}`}
                              strokeLinecap="round"
                            />
                            {/* Target dotted line */}
                            <polyline
                              fill="none"
                              stroke="rgba(255,255,255,0.15)"
                              strokeWidth="1"
                              strokeDasharray="2,2"
                              points={`0,20 20,18 40,16 60,14 80,12 100,10`}
                            />
                          </svg>
                          <div className="absolute inset-x-0 bottom-0 flex justify-between text-[7px] text-neutral-text/80 font-bold uppercase px-1 mt-1">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                          </div>
                        </div>
                      </div>

                      {/* Small Table */}
                      <div className="md:col-span-4 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl flex flex-col justify-between">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-2 block">Allocated Margins</span>
                        <div className="space-y-2 text-[10px] font-bold">
                          {[
                            { item: "Operations", share: "45%" },
                            { item: "Software Licensing", share: "22%" },
                            { item: "Infrastructure", share: "18%" },
                            { item: "Audit & Risk Check", share: "15%" }
                          ].map((cost, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-white/[0.03]">
                              <span className="text-neutral-text">{cost.item}</span>
                              <span className="text-white metric-number">{cost.share}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. SALES DASHBOARD */}
                {activeTab === "sales" && (
                  <motion.div
                    key="sales"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Conversion Rate", value: `${salesKPIs.conversion.toFixed(2)}%`, sub: "Visits to purchases", icon: <Users size={14} />, color: "text-secondary-cyan" },
                        { label: "Sales Pipeline", value: `$${(salesKPIs.pipeline / 1000000).toFixed(2)}M`, sub: "Deals in negotiation", icon: <DollarSign size={14} />, color: "text-primary-blue" },
                        { label: "Avg. Order Value", value: `$${salesKPIs.aov}`, sub: "Average cart size", icon: <ShoppingCart size={14} />, color: "text-accent-green" }
                      ].map((kpi, idx) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.02] transition-colors relative">
                          <span className="text-[8px] font-bold text-neutral-text uppercase tracking-widest block mb-1">{kpi.label}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-base sm:text-lg font-bold text-white metric-number">{kpi.value}</span>
                            <span className={`${kpi.color} p-1 bg-white/[0.03] rounded`}>{kpi.icon}</span>
                          </div>
                          <span className="text-[8px] text-neutral-text/75 block mt-1">{kpi.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chart & Table */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Product Category Bars */}
                      <div className="md:col-span-8 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-4 block">Sales Volume by Category</span>
                        
                        <div className="flex items-end justify-around h-[90px] relative">
                          {getSalesChartHeights().map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1.5 justify-end h-full">
                              <span className="text-[8px] font-bold text-secondary-cyan metric-number">${(h / 10).toFixed(1)}M</span>
                              <div className="w-[50%] sm:w-[35%] bg-gradient-to-t from-primary-blue to-secondary-cyan rounded-t-xs" style={{ height: `${h}%` }} />
                              <span className="text-[7.5px] font-bold text-neutral-text/80 uppercase">
                                {i === 0 ? "SaaS" : i === 1 ? "Enterprise" : i === 2 ? "Retail" : "Services"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Small regional breakdown */}
                      <div className="md:col-span-4 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-2 block">Sales Rep Ranking</span>
                        <div className="space-y-2 text-[10px] font-bold">
                          {[
                            { name: "Priya Sharma", perf: "114% target" },
                            { name: "Rohan Das", perf: "102% target" },
                            { name: "Amit Patel", perf: "98% target" },
                            { name: "Sneha Reddy", perf: "94% target" }
                          ].map((rep, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-white/[0.03]">
                              <span className="text-white">{rep.name}</span>
                              <span className="text-secondary-cyan metric-number">{rep.perf}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. OPERATIONS DASHBOARD */}
                {activeTab === "ops" && (
                  <motion.div
                    key="ops"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Active CPU Load", value: `${opsKPIs.cpu.toFixed(1)}%`, sub: "Cluster average", icon: <Cpu size={14} />, color: "text-accent-green" },
                        { label: "Pipeline Latency", value: `${opsKPIs.latency.toFixed(1)}ms`, sub: "End-to-end sync speed", icon: <Database size={14} />, color: "text-primary-blue" },
                        { label: "System SLA", value: `${opsKPIs.sla.toFixed(2)}%`, sub: "Guaranteed uptime", icon: <Activity size={14} />, color: "text-secondary-cyan" }
                      ].map((kpi, idx) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.02] transition-colors relative">
                          <span className="text-[8px] font-bold text-neutral-text uppercase tracking-widest block mb-1">{kpi.label}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-base sm:text-lg font-bold text-white metric-number">{kpi.value}</span>
                            <span className={`${kpi.color} p-1 bg-white/[0.03] rounded`}>{kpi.icon}</span>
                          </div>
                          <span className="text-[8px] text-neutral-text/75 block mt-1">{kpi.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chart & Table */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Latency line graph */}
                      <div className="md:col-span-8 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-3 block">ETL Processing Latency (Minutely)</span>
                        <div className="relative h-[110px] flex items-end">
                          <svg className="w-full h-[80px] overflow-visible z-10 px-2" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <polyline
                              fill="none"
                              stroke="#00E5A0"
                              strokeWidth="2"
                              points={`0,${30 - getOpsChartPoints()[0] / 3.5} 16,${30 - getOpsChartPoints()[1] / 3.5} 32,${30 - getOpsChartPoints()[2] / 3.5} 48,${30 - getOpsChartPoints()[3] / 3.5} 64,${30 - getOpsChartPoints()[4] / 3.5} 80,${30 - getOpsChartPoints()[5] / 3.5} 100,${30 - getOpsChartPoints()[6] / 3.5}`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-x-0 bottom-0 flex justify-between text-[7px] text-neutral-text/80 font-bold uppercase px-1">
                            <span>10m ago</span><span>5m ago</span><span>Live</span>
                          </div>
                        </div>
                      </div>

                      {/* ETL Pipelines state list */}
                      <div className="md:col-span-4 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-2 block">Sync Pipelines</span>
                        <div className="space-y-2.5 text-[9.5px]">
                          {[
                            { name: "Azure ADF", status: "Active", latency: "12ms" },
                            { name: "PostgreSQL Production", status: "Active", latency: "9ms" },
                            { name: "Google BigQuery", status: "Syncing", latency: "114ms" }
                          ].map((pipe, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-white/[0.03]">
                              <div>
                                <p className="font-bold text-white leading-tight">{pipe.name}</p>
                                <p className="text-[7.5px] text-neutral-text/75 uppercase tracking-wider mt-0.5">{pipe.latency}</p>
                              </div>
                              <span className="px-2 py-0.5 text-[7px] font-bold uppercase text-accent-green bg-accent-green/10 border border-accent-green/20 rounded">
                                {pipe.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. RISK & AUDIT COMPLIANCE */}
                {activeTab === "risk" && (
                  <motion.div
                    key="risk"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* KPI row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Fraud Alert Rate", value: `${riskKPIs.fraudRate.toFixed(2)}%`, sub: "Of transaction volume", icon: <ShieldAlert size={14} />, color: "text-purple-500" },
                        { label: "Compliance Score", value: `${riskKPIs.compliance.toFixed(1)}%`, sub: "Internal audit standard", icon: <CheckCircle2 size={14} />, color: "text-accent-green" },
                        { label: "SLA Response Uptime", value: `${riskKPIs.slaUptime.toFixed(2)}%`, sub: "Contract guarantee", icon: <Activity size={14} />, color: "text-secondary-cyan" }
                      ].map((kpi, idx) => (
                        <div key={idx} className="bg-white/[0.01] border border-white/[0.05] p-3 rounded-xl hover:bg-white/[0.02] transition-colors relative">
                          <span className="text-[8px] font-bold text-neutral-text uppercase tracking-widest block mb-1">{kpi.label}</span>
                          <div className="flex items-center justify-between">
                            <span className="text-base sm:text-lg font-bold text-white metric-number">{kpi.value}</span>
                            <span className={`${kpi.color} p-1 bg-white/[0.03] rounded`}>{kpi.icon}</span>
                          </div>
                          <span className="text-[8px] text-neutral-text/75 block mt-1">{kpi.sub}</span>
                        </div>
                      ))}
                    </div>

                    {/* Chart & Table */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      {/* Risk Category breakdown circle */}
                      <div className="md:col-span-8 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl flex items-center justify-around gap-6">
                        <div className="relative w-20 h-20 shrink-0">
                          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                            <circle cx="50" cy="50" r="38" fill="transparent" stroke="rgba(255,255,255,0.02)" strokeWidth="12" />
                            {/* Circular risk segment */}
                            <circle 
                              cx="50" 
                              cy="50" 
                              r="38" 
                              fill="transparent" 
                              stroke="#a855f7" 
                              strokeWidth="12" 
                              strokeDasharray="238.76" 
                              strokeDashoffset={238.76 * (1 - riskKPIs.compliance / 100)} 
                              strokeLinecap="round" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-white metric-number">{riskKPIs.compliance.toFixed(1)}%</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider block mb-2">Compliance Risk Categories</span>
                          <div className="space-y-1.5 text-[9px] font-bold">
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-purple-500" /><span className="text-white">Financial Audit Compliance</span></div>
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-secondary-cyan" /><span className="text-white">ISO 27001 Data Lineage</span></div>
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-accent-green" /><span className="text-white">RBI Local Data Storage Rules</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Small audit list */}
                      <div className="md:col-span-4 bg-white/[0.01] border border-white/[0.05] p-4 rounded-xl">
                        <span className="text-[9px] font-bold uppercase text-neutral-text tracking-wider mb-2 block">Recent Audits</span>
                        <div className="space-y-2 text-[10px] font-bold">
                          {[
                            { title: "Data Lineage check", result: "Passed" },
                            { title: "SSL Mode verify", result: "Passed" },
                            { title: "ADF Pipeline security", result: "Verifying" }
                          ].map((audit, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-white/[0.03]">
                              <span className="text-neutral-text">{audit.title}</span>
                              <span className={`metric-number text-[8px] uppercase font-extrabold ${audit.result === "Passed" ? "text-accent-green" : "text-amber-400"}`}>
                                {audit.result}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
