"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, ShieldCheck, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { LinkedInIcon, GithubIcon } from "@/components/social-icons";

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 bg-card border border-border relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-none bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/30 mb-6">
            <span className="text-white font-bold text-xl">BI</span>
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground uppercase mb-2">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">Access your intelligence dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
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
            <div className="flex items-center justify-between ml-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</label>
              <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:text-blue-400">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 bg-muted/50 border border-border pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500 transition-all rounded-none"
              />
            </div>
          </div>

          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs rounded-none border-0 shadow-lg shadow-blue-500/20">
            Sign In <Zap size={14} className="ml-2" />
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-card px-4 text-muted-foreground">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              onClick={() => signIn("linkedin")}
              className="h-12 border-border rounded-none hover:bg-muted font-black text-[10px] uppercase tracking-widest gap-2"
            >
              <LinkedInIcon size={14} /> LinkedIn
            </Button>
            <Button 
              variant="outline" 
              onClick={() => signIn("github")}
              className="h-12 border-border rounded-none hover:bg-muted font-black text-[10px] uppercase tracking-widest gap-2"
            >
              <GithubIcon size={14} /> GitHub
            </Button>
          </div>
        </form>

        <div className="mt-10 pt-10 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">New to BI Expert?</p>
          <Link href="/contact">
            <Button variant="outline" className="w-full h-12 border-border text-foreground font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-muted">
              Create an Account <ArrowRight size={14} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 opacity-50">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Secure Enterprise Access</span>
        </div>
      </motion.div>
    </div>
  );
}
