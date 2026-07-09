'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Slide17() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-16 items-stretch relative z-10">
        <div className="flex flex-col justify-between py-10">
            <div className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold tracking-tight"
                >
                    定價方案與 <br />
                    <span className="text-orange-600">投資價值</span>
                </motion.h2>
                <p className="text-xl text-slate-500 leading-relaxed max-w-sm">
                    一次性硬體投入 + 靈活的模型訂閱，為企業打造長期的 AI 競爭力。
                </p>
            </div>

            <div className="space-y-4">
                {[
                    { icon: <TrendingUp size={18} />, text: "模型隨數據積累越用越精準" },
                    { icon: <ShieldCheck size={18} />, text: "混合雲架構省下 70% 雲端成本" },
                    { icon: <RefreshCw size={18} />, text: "訂閱服務確保模型永不過時" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-500">
                        <div className="text-orange-600">{item.icon}</div>
                        <span className="text-sm font-medium">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col"
        >
            <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 rounded-[3rem] p-12 flex-1 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="space-y-10">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold tracking-tight">iSunCloud AI BOX</h3>
                            <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">Hybrid AI Package</p>
                        </div>
                        <div className="px-3 py-1 bg-orange-600 text-white text-[10px] font-black rounded-full uppercase tracking-tighter shadow-lg shadow-orange-500/20">
                            Enterprise
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-sm text-slate-500">NT$</span>
                            <span className="text-8xl font-black tracking-tighter">176,000</span>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100"></div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-orange-600" />
                            <span className="text-sm font-medium">硬體主機與 iSunCloud OS v1.2.0</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-orange-600" />
                            <span className="text-sm font-medium">模型訂閱服務 (AIPP Store 接入)</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-orange-600" />
                            <span className="text-sm font-medium text-orange-500">週期性 H100 強化訓練服務</span>
                        </div>
                        <div className="pl-7 text-[11px] text-slate-500 italic">
                            * 強化訓練依實際計算單位計費 (Usage-based)
                        </div>
                    </div>
                </div>

                <div className="pt-10">
                    <button className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-lg hover:scale-[1.02] transition-transform shadow-lg shadow-orange-500/20">
                        預約專人諮詢
                    </button>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
