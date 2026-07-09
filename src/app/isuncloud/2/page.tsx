'use client';
import { motion } from 'framer-motion';
import { ShieldAlert, Database, Lock } from 'lucide-react';

export default function Slide2() {
  const challenges = [
    { 
      title: "數據隱私洩漏", 
      desc: "傳統雲端 AI 需要上傳敏感數據，面臨核心資產外流風險。", 
      icon: <Lock size={28} /> 
    },
    { 
      title: "算力成本高昂", 
      desc: "長期租用高性能 GPU 集群，對企業而言是沉重的財務負擔。", 
      icon: <Database size={28} /> 
    },
    { 
      title: "模型通用化、不精準", 
      desc: "市售模型難以理解特定業務場景，無法與企業內部知識庫深度融合。", 
      icon: <ShieldAlert size={28} /> 
    }
  ];

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full space-y-20 relative z-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-black tracking-widest text-xs uppercase"
          >
            Market Challenges
          </motion.div>
          <h2 className="text-6xl font-bold tracking-tight">企業 AI 導入的關鍵障礙</h2>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {challenges.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-200 hover:border-orange-500/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-orange-600 mb-8 group-hover:scale-110 group-hover:bg-orange-600/10 transition-all">
                {c.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
