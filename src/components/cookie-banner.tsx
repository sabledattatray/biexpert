"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Force show for debugging if needed, but let's try standard check first
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        left: '24px',
        maxWidth: '400px',
        zIndex: 9999,
        backgroundColor: '#111111',
        border: '1px solid #333333',
        padding: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        marginLeft: 'auto'
      }}
      className="md:w-[400px]"
    >
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 shrink-0 bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500">
          <ShieldCheck size={20} />
        </div>
        <div className="flex-1">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground mb-2">Cookie Policy</h4>
          <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
            We use cookies to optimize site performance and analyze traffic. By clicking accept, you agree to our{" "}
            <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={acceptCookies}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-3"
            >
              Accept All
            </button>
            <button 
              onClick={() => setShowBanner(false)}
              className="flex-1 border border-border hover:bg-muted text-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-3"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
