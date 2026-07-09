'use client';
import { motion } from 'framer-motion';
import { Server, Cloud, Database, Cpu } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full space-y-16 relative z-10 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold tracking-tight">在地推理，雲端強化</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            獨創的混合雲循環機制：本地端負責即時運算與數據累積，雲端負責大規模強化訓練，確保模型日趨完善。
          </p>
        </div>

        <div className="flex items-center justify-between gap-12 relative h-80">
          {/* Local BOX */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-80 h-full p-8 rounded-[3rem] bg-white border border-slate-200 flex flex-col items-center justify-center space-y-6 relative group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-orange-600 text-black text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-orange-500/20">
               Local Node
            </div>
            <div className="w-20 h-20 rounded-3xl bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
               <Server size={40} />
            </div>
            <div className="text-center space-y-2">
               <div className="text-xl font-bold">iSunCloud BOX</div>
               <p className="text-xs text-slate-500">即時推理、數據採集、隱私過濾</p>
            </div>
          </motion.div>

          {/* Connection Loop */}
          <div className="flex-1 h-full flex flex-col items-center justify-center relative">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-orange-500/30 via-slate-200/50 to-orange-400/30"></div>
             </div>
             
             <motion.div 
               animate={{ x: [-100, 100], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 absolute top-1/4"
             >
                <Database size={20} />
             </motion.div>

             <motion.div 
               animate={{ x: [100, -100], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
               className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500 absolute bottom-1/4"
             >
                <Cpu size={20} />
             </motion.div>

             <div className="z-10 bg-[#050505] px-6 py-2 border border-slate-100 rounded-full text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                Reinforcement Loop
             </div>
          </div>

          {/* Cloud Cluster */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-80 h-full p-8 rounded-[3rem] bg-orange-600/5 border border-orange-200 flex flex-col items-center justify-center space-y-6 relative group"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-orange-600 text-slate-800 text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-orange-500/10">
               Cloud Cluster
            </div>
            <div className="w-20 h-20 rounded-3xl bg-orange-600/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
               <Cloud size={40} />
            </div>
            <div className="text-center space-y-2">
               <div className="text-xl font-bold">TWS H100 集群</div>
               <p className="text-xs text-slate-500">強化訓練、模型迭代、全球優化</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
