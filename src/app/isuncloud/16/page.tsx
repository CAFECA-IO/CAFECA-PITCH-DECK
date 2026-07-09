'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export default function Slide16() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-orange-600 font-black tracking-widest text-xs uppercase"
            >
              Zero Trust Security
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight">零信任安全體系</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              您的數據是您最寶貴的資產。iSunCloud 採用軍規級加密與物理隔離技術，確保數據在採集、處理與強化訓練過程中絕對私有。
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-600 shrink-0">
                <Lock size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">端到端加密 (E2EE)</h3>
                <p className="text-sm text-slate-500">數據在本地採集與雲端強化之間傳輸時，全程處於加密狀態。</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-600 shrink-0">
                <EyeOff size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">差分隱私技術</h3>
                <p className="text-sm text-slate-500">在數據特徵中加入雜訊，確保即使在雲端訓練也無法還原原始數據內容。</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-[#111] to-[#050505] rounded-[4rem] border border-slate-200 p-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center gap-10">
             <div className="relative">
                <div className="w-48 h-48 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-600">
                   <ShieldCheck size={100} strokeWidth={1} />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-orange-500/30 rounded-full"
                />
             </div>
             <div className="text-center space-y-2">
                <div className="text-2xl font-black tracking-tight uppercase">Hardware Secure Enclave</div>
                <div className="flex items-center justify-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
                   <span className="text-[10px] font-mono text-orange-600/60 uppercase tracking-widest">Active Protection</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
