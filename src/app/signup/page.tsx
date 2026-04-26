"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, ShieldCheck, Mail, Lock, User, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon, GithubIcon } from "@/components/social-icons";

export default function SignupPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg p-10 bg-card border border-border relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30 mb-6">
            <span className="text-white font-bold text-xl">BI</span>
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase mb-2">Create Account</h1>
          <p className="text-muted-foreground text-sm">Start your 14-day free intelligence trial</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full h-12 bg-muted/50 border border-border pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Company</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input 
                  type="text" 
                  placeholder="Acme Corp"
                  className="w-full h-12 bg-muted/50 border border-border pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Work Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full h-12 bg-muted/50 border border-border pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Set Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 bg-muted/50 border border-border pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/10">
            <ShieldCheck className="text-blue-500 shrink-0" size={18} />
            <p className="text-[10px] leading-relaxed text-muted-foreground font-medium uppercase tracking-wider">
              By signing up, you agree to our <Link href="/terms" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs rounded-none border-0 shadow-lg shadow-blue-500/20">
            Create Account <Zap size={14} className="ml-2" />
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-card px-4 text-muted-foreground">Or sign up with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="h-12 border-border rounded-none hover:bg-muted font-black text-[10px] uppercase tracking-widest gap-2"
            >
              <LinkedInIcon size={14} /> LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="h-12 border-border rounded-none hover:bg-muted font-black text-[10px] uppercase tracking-widest gap-2"
            >
              <GithubIcon size={14} /> GitHub
            </Button>
          </div>
        </form>

        <div className="mt-10 pt-10 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">Already have an account?</p>
          <Link href="/login">
            <Button variant="outline" className="w-full h-12 border-border text-foreground font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-muted">
              Sign In to Platform <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
