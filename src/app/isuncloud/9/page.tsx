'use client';
import { motion } from 'framer-motion';
import { Database, LineChart, ShieldCheck } from 'lucide-react';

export default function Slide9() {
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
              Data Empowerment
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight">本地運行數據的價值</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              您的企業運作數據是 AI 成長最好的養分。iSunCloud 在確保隱私的前提下，採集本地運行數據，轉化為模型訓練的高品質資料集。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-4">
              <ShieldCheck className="text-orange-600" size={24} />
              <div className="text-sm font-bold">隱私脫敏技術</div>
              <p className="text-xs text-slate-500">採集過程中自動過濾敏感資訊，確保僅上傳「訓練特徵」。</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 space-y-4">
              <LineChart className="text-orange-600" size={24} />
              <div className="text-sm font-bold">品質自動標註</div>
              <p className="text-xs text-slate-500">利用本地算力對採集數據進行初步標註與清洗。</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-[#111] rounded-[3rem] border border-slate-200 p-12 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-orange-600/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 space-y-8">
             <div className="flex items-center gap-4">
                <Database className="text-orange-600" size={32} />
                <div className="text-xl font-bold uppercase tracking-tight">Local Intelligence Hub</div>
             </div>
             
             <div className="space-y-4 font-mono text-[10px] text-slate-500">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100">
                   <span>Collected Interactions</span>
                   <span className="text-orange-500">128,492 Units</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100">
                   <span>Privacy Score</span>
                   <span className="text-orange-500">99.8% Optimized</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100">
                   <span>Training Readiness</span>
                   <span className="text-orange-500">Ready for H100</span>
                </div>
             </div>

             <div className="pt-4 flex items-center justify-center">
                <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                   <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-full bg-orange-600"
                   />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
