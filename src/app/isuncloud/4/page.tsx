'use client';
import { motion } from 'framer-motion';
import { Layers, CheckCircle2, Zap, RefreshCw } from 'lucide-react';

export default function Slide4() {
  const models = [
    { name: "Llama-3-Enterprise", type: "LLM", status: "Updated" },
    { name: "Mistral-v0.3-Pro", type: "LLM", status: "Updated" },
    { name: "Stability-SD3", type: "Vision", status: "New" },
    { name: "iSun-Finance-v2", type: "Expert", status: "Optimized" }
  ];

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-orange-600"
            >
              <RefreshCw size={20} />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600/80">Always Up-To-Date</span>
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight leading-tight">模型訂閱服務</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              無需擔心模型過時。透過 AIPP Store 訂閱服務，您的 AI BOX 將自動同步全球最先進的開源與專家模型。
            </p>
          </div>

          <div className="space-y-6">
            {[
              "即時同步全球 SOTA 開源模型",
              "專屬產業領域專家模型下載",
              "自動化模型版本管理與更新",
              "支援模型量化技術，提升本地效能"
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-slate-700"
              >
                <CheckCircle2 size={18} className="text-orange-600 shrink-0" />
                <span className="font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-orange-600/5 blur-[100px] rounded-full"></div>
          <div className="bg-white rounded-[3rem] border border-slate-200 p-10 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Layers className="text-orange-600" size={24} />
                  <span className="text-sm font-bold tracking-widest uppercase">AIPP Library</span>
               </div>
               <div className="px-3 py-1 bg-orange-600/10 rounded-full border border-orange-500/30 text-[10px] font-bold text-orange-600 uppercase">
                  Connected
               </div>
            </div>

            <div className="space-y-4">
               {models.map((m, i) => (
                 <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center justify-between group hover:bg-slate-100 transition-colors"
                 >
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-orange-600 transition-colors">
                        <Zap size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold">{m.name}</div>
                        <div className="text-[10px] text-slate-600 uppercase tracking-widest">{m.type}</div>
                      </div>
                   </div>
                   <div className="text-[10px] font-bold text-orange-600 px-2 py-0.5 bg-orange-600/10 rounded-md">
                      {m.status}
                   </div>
                 </motion.div>
               ))}
            </div>
            
            <div className="pt-4 flex justify-center">
               <div className="text-[10px] font-mono text-slate-600 animate-pulse">Checking for new models...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
