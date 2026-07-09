'use client';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Image from 'next/image';

export default function Slide1() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center relative overflow-hidden p-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="grid grid-cols-2 gap-20 items-center max-w-7xl relative z-10">
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Zap size={28} className="text-black fill-current" />
            </div>
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="text-sm font-bold tracking-[0.4em] text-slate-500 uppercase">Hybrid Cloud AIBOX</span>
          </motion.div>
          
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-8xl font-black tracking-tighter leading-tight"
            >
              iSunCloud <br />
              <span className="text-orange-600">AI BOX</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl text-slate-500 font-medium tracking-tight"
            >
              混合雲架構：隨使用而不斷進化的私人 AI
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-10 flex gap-10"
          >
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Version</div>
              <div className="text-sm font-mono text-orange-500">v1.2.0 Hybrid</div>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Core Concept</div>
              <div className="text-sm font-medium">Reinforcement Loop</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-orange-600/20 blur-[100px] rounded-full"></div>
          <Image 
            src="/isuncloud/hero.png" 
            alt="AI BOX" 
            width={1024}
            height={1024}
            className="relative z-10 w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.08)]"
          />
        </motion.div>
      </div>
    </div>
  );
}
