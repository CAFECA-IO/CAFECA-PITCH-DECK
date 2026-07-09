'use client';
import { motion } from 'framer-motion';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Slide15() {
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
                    Intelligent Guidance
                </motion.div>
                <h2 className="text-6xl font-bold tracking-tight">AI 教練模型</h2>
                <p className="text-xl text-slate-500 leading-relaxed">
                    引導您完成整個強化訓練週期。AI 教練會分析數據品質、推薦強化策略，並監控模型在 H100 上的訓練進度。
                </p>
            </div>

            <div className="space-y-6">
                {[
                    "數據採集品質評估與建議",
                    "強化訓練超參數自動優化",
                    "模型迭代效果對比分析",
                    "部署環境適配性檢測"
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 text-slate-700"
                    >
                        <CheckCircle2 size={18} className="text-orange-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
        >
            <div className="absolute inset-0 bg-orange-600/5 blur-[120px] rounded-full"></div>
            <div className="bg-white rounded-[3rem] border border-slate-200 p-10 shadow-2xl space-y-8 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white">
                        <MessageSquare size={24} fill="currentColor" />
                    </div>
                    <div className="space-y-0.5">
                        <div className="text-sm font-bold">AI Coach - iSunCloud</div>
                        <div className="text-[10px] text-orange-600 font-bold uppercase tracking-widest">Training Support</div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-slate-100 text-xs text-slate-500 leading-relaxed">
                        根據本月累積的業務反饋數據，我建議在下一次 H100 強化訓練中增加「專業語境辨識」的比重。
                    </div>
                    
                    <div className="flex justify-end">
                        <div className="bg-orange-600 p-5 rounded-2xl rounded-tr-none text-xs text-white font-bold max-w-[80%]">
                            同意。請自動設定強化訓練參數，並預約本週末的 H100 算力。
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl rounded-tl-none border border-slate-100 text-xs text-slate-500 leading-relaxed">
                        好的。已完成數據預處理，H100 算力已預約。訓練完成後將自動回傳更新包。
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
