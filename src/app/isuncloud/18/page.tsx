'use client';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Mail, Globe } from 'lucide-react';

export default function Slide18() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-24 relative overflow-hidden text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-4xl space-y-12 relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-orange-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(234,88,12,0.2)]"
        >
            <Zap size={48} className="text-white fill-current" />
        </motion.div>

        <div className="space-y-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl font-black tracking-tighter leading-tight"
            >
                掌握主導權 <br />
                <span className="text-slate-500">開啟企業 AI 持續進化新紀元</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-slate-500 font-medium"
            >
                iSunCloud AI BOX：越用越懂您的業務。
            </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-10"
        >
            <button className="group relative px-12 py-6 bg-orange-600 text-white font-black text-2xl rounded-full hover:scale-105 transition-all shadow-[0_20px_60px_rgba(234,88,12,0.2)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-4">
                    預約產品演示
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <div className="flex gap-16 text-slate-600 font-bold tracking-[0.3em] uppercase text-xs">
                <div className="flex items-center gap-2 hover:text-slate-500 transition-colors cursor-pointer">
                    <Globe size={14} />
                    <span>www.isunfa.com</span>
                </div>
                <div className="flex items-center gap-2 hover:text-slate-500 transition-colors cursor-pointer">
                    <Mail size={14} />
                    <span>contact@isunfa.com</span>
                </div>
            </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12">
        <div className="text-[10px] font-mono text-slate-800/10 uppercase tracking-widest leading-loose text-left">
            Designed for Excellence<br />
            Hybrid AI Reinforcement Lifecycle
        </div>
      </div>
    </div>
  );
}
