"use client";

import { useState, useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[500] bg-card border border-border p-6 shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 shrink-0 bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500">
              <ShieldCheck size={20} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-foreground">Cookie Policy</h4>
                <button onClick={() => setShowBanner(false)} className="text-muted-foreground hover:text-foreground">
                  <X size={14} />
                </button>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed mb-4">
                We use cookies to optimize site performance and analyze traffic via Google Analytics. By clicking accept, you agree to our data processing as outlined in our{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={acceptCookies}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-none h-9"
                >
                  Accept All
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowBanner(false)}
                  className="flex-1 border-border hover:bg-muted text-[10px] font-bold uppercase tracking-widest rounded-none h-9"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
