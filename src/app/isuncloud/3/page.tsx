'use client';
import { motion } from 'framer-motion';
import { Cloud, Database, ArrowRightLeft } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-600 font-black tracking-widest text-xs uppercase"
          >
            The Ultimate Solution
          </motion.div>
          <h2 className="text-6xl font-bold tracking-tight">Hybrid AI 混合雲平台</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            打破雲端與在地邊界。結合在地端的「數據私密性」與雲端的「極致算力」，打造不斷進化的企業專屬 AI。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12 pt-8">
          <div className="space-y-6 text-center group">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-600/10 transition-all duration-500">
              <Database size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">在地端數據安全</h3>
              <p className="text-sm text-slate-500">原始數據不離場，100% 確保企業機密與個人隱私。</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-orange-600/20"
            >
              <ArrowRightLeft size={64} strokeWidth={1} />
            </motion.div>
          </div>

          <div className="space-y-6 text-center group">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-white border border-slate-200 flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-500">
              <Cloud size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">雲端算力迭代</h3>
              <p className="text-sm text-slate-500">利用 TWS H100 集群進行週期性強化訓練，持續迭代模型。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
