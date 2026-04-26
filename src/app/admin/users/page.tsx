"use client";

import React from "react";
import { UserPlus, Search, Shield, MoreHorizontal, Mail, Ban, CheckCircle2, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockUsers = [
  { id: 1, name: "Datta Sable", email: "datta@biexpert.com", role: "Super Admin", status: "Active", lastActive: "Just now" },
  { id: 2, name: "Sarah Jenkins", email: "sarah@acmecorp.com", role: "Client", status: "Active", lastActive: "2 hours ago" },
  { id: 3, name: "Michael Chang", email: "m.chang@fintech.io", role: "Client", status: "Active", lastActive: "1 day ago" },
  { id: 4, name: "Alex Mercer", email: "alex.m@system.com", role: "Editor", status: "Inactive", lastActive: "2 weeks ago" },
  { id: 5, name: "Elena Rodriguez", email: "elena@dataops.net", role: "Client", status: "Suspended", lastActive: "1 month ago" },
];

export default function UserManagement() {
  const [openMenuId, setOpenMenuId] = React.useState<number | null>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => setOpenMenuId(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase text-foreground">User Management</h1>
          <p className="text-muted-foreground text-sm mt-1">Control access, roles, and client permissions across the platform.</p>
        </div>
        <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest h-12 px-8 border-0 shadow-lg shadow-blue-500/20">
          <UserPlus size={16} className="mr-2" /> Invite User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Total Users</p>
            <p className="text-3xl font-black text-foreground">1,245</p>
          </div>
          <div className="h-12 w-12 bg-blue-500/10 flex items-center justify-center text-blue-500">
            <UserCog size={20} />
          </div>
        </div>
        <div className="bg-card border border-border p-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Active Clients</p>
            <p className="text-3xl font-black text-foreground">1,240</p>
          </div>
          <div className="h-12 w-12 bg-emerald-500/10 flex items-center justify-center text-emerald-500">
            <CheckCircle2 size={20} />
          </div>
        </div>
        <div className="bg-card border border-border p-6 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Suspended</p>
            <p className="text-3xl font-black text-foreground">5</p>
          </div>
          <div className="h-12 w-12 bg-rose-500/10 flex items-center justify-center text-rose-500">
            <Ban size={20} />
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row items-center gap-4 bg-card border border-border p-4">
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="Search users by name, email, or role..." 
            className="w-full bg-muted/50 border border-border pl-10 pr-4 h-10 text-xs focus:outline-none focus:border-blue-500 rounded-none transition-all placeholder:text-muted-foreground"
          />
        </div>
      </div>

      {/* User Table */}
      <div className="bg-card border border-border overflow-x-auto min-h-[400px]">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">User</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Role</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Last Active</th>
              <th className="p-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Manage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-muted to-border flex items-center justify-center shrink-0 text-muted-foreground font-bold text-xs uppercase">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{user.name}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                        <Mail size={10} /> {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Shield size={12} className={user.role === 'Super Admin' ? 'text-violet-500' : 'text-blue-500'} />
                    <span className="text-xs font-bold text-foreground">{user.role}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-none ${
                    user.status === "Active" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                    user.status === "Suspended" ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" :
                    "bg-muted text-muted-foreground border border-border"
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-xs text-muted-foreground">{user.lastActive}</span>
                </td>
                <td className="p-4 text-right relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === user.id ? null : user.id);
                    }}
                    className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-muted border border-transparent rounded-none"
                  >
                    <MoreHorizontal size={14} />
                  </Button>
                  
                  {/* Dropdown Menu */}
                  {openMenuId === user.id && (
                    <div className="absolute right-4 top-12 w-48 bg-card border border-border shadow-xl z-50 py-1">
                      <button className="w-full text-left px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors">
                        Edit Role & Permissions
                      </button>
                      <button className="w-full text-left px-4 py-2 text-xs font-bold text-foreground hover:bg-muted transition-colors">
                        Reset Password
                      </button>
                      <div className="h-px bg-border my-1" />
                      <button className="w-full text-left px-4 py-2 text-xs font-bold text-rose-500 hover:bg-rose-500/10 transition-colors">
                        Suspend User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
