'use client';
import { motion } from 'framer-motion';
import { RefreshCw, Cpu, Zap, Calendar } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden text-center">
      <div className="max-w-5xl w-full space-y-16 relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 text-orange-500"
          >
            <Calendar size={18} />
            <span className="text-xs font-black tracking-[0.3em] uppercase">Iterative Lifecycle</span>
          </motion.div>
          <h2 className="text-6xl font-bold tracking-tight leading-tight">週期性強化訓練</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            每隔一段期間，iSunCloud 將本地累積的優質數據加密上傳至 TWS H100 伺服器集群，進行高強度微調，讓模型性能發生質變。
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8">
           {[
             { title: "數據定時打包", desc: "本地 AI BOX 自動彙整運行指標與反饋數據。", icon: <Zap size={24} /> },
             { title: "加密安全傳輸", desc: "端到端加密，確保數據在傳輸至 H100 集群時絕對安全。", icon: <RefreshCw size={24} /> },
             { title: "H100 強化訓練", desc: "利用數萬個核心並行運算，快速迭代出新版模型。", icon: <Cpu size={24} /> },
             { title: "差分更新回傳", desc: "僅下載模型權重更新，節省頻寬並即時生效。", icon: <RefreshCw size={24} /> }
           ].map((step, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center gap-6 hover:bg-slate-100 transition-all group"
             >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                   {step.icon}
                </div>
                <div className="space-y-2">
                   <h3 className="text-sm font-bold">{step.title}</h3>
                   <p className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="pt-10 flex justify-center opacity-30">
           <div className="flex items-center gap-10 text-[10px] font-mono tracking-[0.5em] uppercase">
              <span>Local Box</span>
              <div className="w-40 h-[1px] bg-gradient-to-r from-orange-500/50 via-orange-300/20 to-orange-500/50"></div>
              <span>TWS H100 Cluster</span>
           </div>
        </div>
      </div>
    </div>
  );
}
