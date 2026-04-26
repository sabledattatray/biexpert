"use client";

import React, { useState, useEffect } from "react";
import { Save, Globe, Lock, Bell, Server, Database, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "general", label: "General Settings", icon: Globe },
  { id: "security", label: "Security & Auth", icon: Lock },
  { id: "api", label: "API Keys", icon: Key },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "hosting", label: "Hosting & CDN", icon: Server },
  { id: "database", label: "Database Config", icon: Database },
];

function Toggle({ checked, onChange }: { checked: boolean, onChange: (v: boolean) => void }) {
  return (
    <button 
      onClick={() => onChange(!checked)}
      className={`relative inline-block w-12 h-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-blue-500" : "bg-muted border border-border"
      }`}
    >
      <span 
        className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-200 ease-in-out shadow-sm ${
          checked ? "left-[26px] bg-white" : "left-1 bg-muted-foreground"
        }`} 
      />
    </button>
  );
}

const defaultConfig = {
  siteName: "BI Expert | Datta Sable",
  primaryDomain: "https://dattasable.com",
  supportEmail: "support@dattasable.com",
  metaDescription: "Premium BI Expert Portfolio - Showcasing data analytics, SQL, and Power BI expertise.",
  searchVisibility: true,
  require2FA: true,
  publicRegistration: false,
  sendgridKey: "SG.xxxx.yyyy",
  cloudinarySecret: "cl_xxxx_yyyy",
  newUserAlerts: true,
  systemHealthReports: false,
  deploymentBranch: "main",
  dbString: "postgresql://postgres:password@localhost:5432/biexpert"
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [config, setConfig] = useState(defaultConfig);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("siteConfig");
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse config");
      }
    }
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("siteConfig", JSON.stringify(config));
      setIsSaving(false);
      alert("Global configuration settings have been successfully saved.");
    }, 800);
  };

  const updateConfig = (key: keyof typeof config, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  if (!isLoaded) return null; // Prevent hydration mismatch

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-foreground">Site Settings</h1>
          <p className="text-muted-foreground text-sm mt-1">Configure global platform behavior, integrations, and security.</p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          <Save size={16} className={`mr-2 ${isSaving ? "animate-pulse" : ""}`} /> 
          {isSaving ? "Saving..." : "Save Configuration"}
        </Button>
      </div>

      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        {/* Settings Navigation */}
        <div className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                  isActive 
                    ? "bg-blue-600/10 text-blue-500 font-bold border-l-2 border-blue-500" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent"
                }`}
              >
                <Icon size={16} /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Configuration Panel */}
        <div className="space-y-8">
          
          {/* --- GENERAL SETTINGS TAB --- */}
          {activeTab === "general" && (
            <>
              {/* Section 1 */}
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">General Information</h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Site Name</label>
                    <input 
                      type="text" 
                      value={config.siteName}
                      onChange={(e) => updateConfig("siteName", e.target.value)}
                      className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Primary Domain</label>
                    <input 
                      type="text" 
                      value={config.primaryDomain}
                      onChange={(e) => updateConfig("primaryDomain", e.target.value)}
                      className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Support Email</label>
                    <input 
                      type="email" 
                      value={config.supportEmail}
                      onChange={(e) => updateConfig("supportEmail", e.target.value)}
                      className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">SEO Defaults</h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Global Meta Description</label>
                    <textarea 
                      rows={4}
                      value={config.metaDescription}
                      onChange={(e) => updateConfig("metaDescription", e.target.value)}
                      className="w-full bg-muted/50 border border-border p-4 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Search Engine Visibility</h4>
                      <p className="text-xs text-muted-foreground mt-1">Allow search engines to index this site</p>
                    </div>
                    <Toggle 
                      checked={config.searchVisibility} 
                      onChange={(v) => updateConfig("searchVisibility", v)} 
                    />
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-card border border-rose-500/20 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500" />
                <h2 className="text-lg font-bold uppercase tracking-tighter text-rose-500 mb-2">Danger Zone</h2>
                <p className="text-muted-foreground text-sm mb-6 max-w-xl">These actions are destructive and cannot be undone. Proceed with extreme caution.</p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-rose-500/20 bg-rose-500/5">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Clear Cache</h4>
                      <p className="text-xs text-muted-foreground mt-1">Purge all edge CDN cached files across all regions.</p>
                    </div>
                    <Button variant="outline" className="rounded-none border-rose-500/50 text-rose-500 hover:bg-rose-500 hover:text-white shrink-0">
                      Purge Cache
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* --- SECURITY & AUTH TAB --- */}
          {activeTab === "security" && (
            <div className="space-y-8">
              {/* Existing Security Settings */}
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">Security & Authentication</h2>
                <div className="space-y-6 max-w-2xl">
                  <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Require Two-Factor Authentication</h4>
                      <p className="text-xs text-muted-foreground mt-1">Mandate 2FA for all administrative accounts.</p>
                    </div>
                    <Toggle 
                      checked={config.require2FA} 
                      onChange={(v) => updateConfig("require2FA", v)} 
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Public Registration</h4>
                      <p className="text-xs text-muted-foreground mt-1">Allow anyone to create an account on the platform.</p>
                    </div>
                    <Toggle 
                      checked={config.publicRegistration} 
                      onChange={(v) => updateConfig("publicRegistration", v)} 
                    />
                  </div>
                </div>
              </div>

              {/* Password Change Section */}
              <div className="bg-card border border-border p-6 md:p-8">
                <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">Admin Credentials</h2>
                <form 
                  className="space-y-6 max-w-2xl" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    const target = e.target as any;
                    const current = target.current.value;
                    const newPass = target.newPass.value;
                    const confirmPass = target.confirmPass.value;
                    
                    const actualCurrent = localStorage.getItem("adminPassword") || "admin123";
                    
                    if (current !== actualCurrent) {
                      alert("Incorrect current password.");
                      return;
                    }
                    if (newPass !== confirmPass) {
                      alert("New passwords do not match.");
                      return;
                    }
                    if (newPass.length < 6) {
                      alert("Password must be at least 6 characters.");
                      return;
                    }
                    
                    localStorage.setItem("adminPassword", newPass);
                    alert("Password successfully updated!");
                    target.reset();
                  }}
                >
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Current Password</label>
                    <input 
                      type="password" 
                      name="current"
                      required
                      placeholder="Enter current password"
                      className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">New Password</label>
                      <input 
                        type="password" 
                        name="newPass"
                        required
                        placeholder="Enter new password"
                        className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Confirm Password</label>
                      <input 
                        type="password" 
                        name="confirmPass"
                        required
                        placeholder="Confirm new password"
                        className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20">
                    Update Password
                  </Button>
                </form>
              </div>
            </div>
          )}

          {/* --- API KEYS TAB --- */}
          {activeTab === "api" && (
            <div className="bg-card border border-border p-6 md:p-8">
              <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">API & Integrations</h2>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">SendGrid API Key (Email)</label>
                  <input 
                    type="password" 
                    value={config.sendgridKey}
                    onChange={(e) => updateConfig("sendgridKey", e.target.value)}
                    className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Cloudinary Secret (Media)</label>
                  <input 
                    type="password" 
                    value={config.cloudinarySecret}
                    onChange={(e) => updateConfig("cloudinarySecret", e.target.value)}
                    className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- NOTIFICATIONS TAB --- */}
          {activeTab === "notifications" && (
            <div className="bg-card border border-border p-6 md:p-8">
              <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">System Notifications</h2>
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">New User Alerts</h4>
                    <p className="text-xs text-muted-foreground mt-1">Receive an email when a new client registers.</p>
                  </div>
                  <Toggle 
                    checked={config.newUserAlerts} 
                    onChange={(v) => updateConfig("newUserAlerts", v)} 
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                  <div>
                    <h4 className="text-sm font-bold text-foreground">System Health Reports</h4>
                    <p className="text-xs text-muted-foreground mt-1">Weekly automated breakdown of platform performance.</p>
                  </div>
                  <Toggle 
                    checked={config.systemHealthReports} 
                    onChange={(v) => updateConfig("systemHealthReports", v)} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- HOSTING TAB --- */}
          {activeTab === "hosting" && (
            <div className="bg-card border border-border p-6 md:p-8">
              <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">Hosting Environment</h2>
              <div className="space-y-6 max-w-2xl">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-bold text-emerald-500 uppercase tracking-widest">
                    <span>Edge Network Status</span>
                    <span>Operational</span>
                  </div>
                  <p className="text-xs text-emerald-600/80">All global CDN nodes are currently routing traffic successfully.</p>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Deployment Branch</label>
                  <select 
                    value={config.deploymentBranch}
                    onChange={(e) => updateConfig("deploymentBranch", e.target.value)}
                    className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground appearance-none"
                  >
                    <option value="main">main</option>
                    <option value="staging">staging</option>
                    <option value="development">development</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* --- DATABASE TAB --- */}
          {activeTab === "database" && (
            <div className="bg-card border border-border p-6 md:p-8">
              <h2 className="text-lg font-bold uppercase tracking-tighter text-foreground mb-6">Database Configuration</h2>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Connection String (URL)</label>
                  <input 
                    type="password" 
                    value={config.dbString}
                    onChange={(e) => updateConfig("dbString", e.target.value)}
                    className="w-full bg-muted/50 border border-border px-4 h-12 text-sm focus:outline-none focus:border-blue-500 rounded-none transition-colors text-foreground font-mono"
                  />
                </div>
                <div className="flex gap-4 pt-4 border-t border-border mt-4">
                   <Button variant="outline" className="rounded-none border-border bg-card text-[10px] font-bold uppercase tracking-widest h-10 px-6">
                    Test Connection
                  </Button>
                  <Button variant="outline" className="rounded-none border-rose-500/50 text-rose-500 hover:bg-rose-500 hover:text-white h-10 px-6 text-[10px] font-bold uppercase tracking-widest">
                    Run Migrations
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
