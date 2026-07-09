'use client';
import { motion } from 'framer-motion';
import { Target, Heart, TrendingUp, UserCheck } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square rounded-[4rem] bg-gradient-to-br from-orange-500/10 to-orange-400/10 border border-slate-200 flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
             <div className="w-40 h-40 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-600 shadow-[0_0_50px_rgba(234,88,12,0.08)]">
                <Target size={80} strokeWidth={1} />
             </div>
             <div className="text-center space-y-2">
                <div className="text-4xl font-black tracking-tighter">100% 業務貼合</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em]">Adaptive Intelligence</div>
             </div>
          </div>
          
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <motion.div 
               animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="w-full h-full border border-orange-500 rounded-full"
             />
             <motion.div 
               animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
               transition={{ duration: 6, repeat: Infinity, delay: 1 }}
               className="w-full h-full border border-orange-400 rounded-full"
             />
          </div>
        </motion.div>

        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-orange-600 font-black tracking-widest text-xs uppercase"
            >
              Growing With You
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight leading-tight">個人化 AI：<br />越用越懂您的業務</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              AI 不再是通用的模組。隨著每一次的強化訓練，iSunCloud 會學習企業特有的語境、決策偏好與作業習慣，最終成為最懂您的數位專家。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4">
             {[
               { icon: <UserCheck className="text-orange-600" size={24} />, title: "專屬語境識別", desc: "精確理解企業內部術語與公文格式。" },
               { icon: <Heart className="text-orange-600" size={24} />, title: "偏好自適應", desc: "根據歷史操作習慣，自動優化回應風格。" },
               { icon: <TrendingUp className="text-orange-600" size={24} />, title: "效能持續攀升", desc: "隨著訓練次數增加，回應精準度穩定提升。" }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="flex items-start gap-6 group"
               >
                  <div className="mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="space-y-1">
                     <h3 className="text-lg font-bold">{item.title}</h3>
                     <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
