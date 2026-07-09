'use client';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, Layers, ShieldCheck, Download } from 'lucide-react';

export default function Slide14() {
  const categories = [
    { title: "AI Agents", desc: "專注於特定任務的智能代理，如會計、法務、研發助理。" },
    { title: "預訓練模型", desc: "各領域優化後的基礎模型，包含醫療、製造、金融專業知識。" },
    { title: "強化工具包", desc: "快速整合本地數據並發送至雲端強化訓練的自動化工具。" }
  ];

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full space-y-16 relative z-10">
        <div className="flex justify-between items-end">
            <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-orange-600"
                >
                    <Store size={18} />
                    <span className="text-xs font-bold tracking-widest uppercase">The Ecosystem</span>
                </motion.div>
                <h2 className="text-6xl font-bold tracking-tight">AIPP Store</h2>
                <p className="text-xl text-slate-500 max-w-xl">
                    模型商城與服務平台：打造您的專屬企業數位資產庫。
                </p>
            </div>
            
            <div className="pb-4">
                <button className="px-6 py-3 bg-white text-slate-800 border border-slate-200 rounded-full font-bold text-sm flex items-center gap-3 hover:scale-105 transition-transform shadow-md shadow-slate-200/50">
                    <ShoppingBag size={18} />
                    進入商城
                </button>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
            {categories.map((c, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-orange-500/30 transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-orange-600/10 transition-colors"></div>
                    <div className="relative z-10 space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-orange-600">
                            {i === 0 ? <Layers size={28} /> : i === 1 ? <ShieldCheck size={28} /> : <Download size={28} />}
                        </div>
                        <h3 className="text-2xl font-bold">{c.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
