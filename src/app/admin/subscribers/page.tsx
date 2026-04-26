import { prisma } from "@/lib/prisma";
import { Mail, Calendar, Trash2, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function SubscribersPage() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-tighter text-foreground mb-1">
            Newsletter Subscribers
          </h1>
          <p className="text-sm text-muted-foreground">Manage your audience and export email lists.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-10 rounded-none border-border hover:bg-muted font-bold text-[10px] uppercase tracking-widest">
            <Download size={14} className="mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Total Audience</p>
          <p className="text-3xl font-bold text-foreground">{subscribers.length}</p>
          <div className="mt-4 h-1 w-full bg-blue-500/10"><div className="h-full bg-blue-500 w-full" /></div>
        </div>
        <div className="bg-card border border-border p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Growth (30d)</p>
          <p className="text-3xl font-bold text-emerald-400">+12%</p>
          <div className="mt-4 h-1 w-full bg-emerald-500/10"><div className="h-full bg-emerald-500 w-1/3" /></div>
        </div>
        <div className="bg-card border border-border p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Status</p>
          <p className="text-3xl font-bold text-blue-500 uppercase">Live</p>
          <div className="mt-4 h-1 w-full bg-blue-500/10"><div className="h-full bg-blue-500 w-1/2 animate-pulse" /></div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
            <input 
              type="text" 
              placeholder="Filter by email..." 
              className="w-full h-10 bg-muted/50 border border-border pl-10 pr-4 text-xs focus:outline-none focus:border-blue-500 rounded-none transition-colors"
            />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Showing {subscribers.length} entries</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/30">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border">Email Address</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border">Joined Date</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {subscribers.length > 0 ? subscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-muted/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                        <Mail size={14} />
                      </div>
                      <span className="text-sm font-bold text-foreground">{sub.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-all">
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3} className="px-6 py-20 text-center">
                    <p className="text-sm text-muted-foreground">No subscribers found yet.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
