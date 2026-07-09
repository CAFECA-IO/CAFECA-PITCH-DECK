'use client';
import { motion } from 'framer-motion';
import { Zap, Cpu, BarChart3, Cloud } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-orange-500"
            >
              <Cloud size={20} />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">Strategic Partnership</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold tracking-tight"
            >
              台智雲 TWS <br />
              <span className="text-orange-600">H100 伺服器集群</span>
            </motion.h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              當需要進行大規模模型強化訓練時，iSunCloud 可即時連接至台智雲頂級 H100 GPU 叢集，提供近乎無限的運算動力。
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">極致強化訓練效能</h3>
                <p className="text-sm text-slate-500">調用 H100 算力，讓原本需要數月的訓練任務縮短至數小時。</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-orange-600/10 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">根據用量計費 (Usage-based)</h3>
                <p className="text-sm text-slate-500">僅在進行模型強化時支付算力費用，最大化資源利用率。</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-gradient-to-br from-orange-500/10 to-transparent p-1 border border-orange-200 rounded-[3.5rem] overflow-hidden"
        >
          <div className="bg-white rounded-[3.3rem] p-12 space-y-8 relative overflow-hidden">
             <div className="w-full aspect-square bg-white rounded-3xl border border-slate-100 relative flex items-center justify-center group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent"></div>
                <div className="relative z-10 text-center space-y-6">
                    <Cpu size={120} className="mx-auto text-orange-600/50 group-hover:text-orange-600 transition-colors duration-700" />
                    <div className="space-y-2">
                        <div className="text-2xl font-black tracking-tighter uppercase">NVIDIA H100</div>
                        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em]">Cloud Training Active</div>
                    </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
