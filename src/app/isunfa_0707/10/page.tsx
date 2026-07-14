'use client';

import { ArrowRight, ClipboardCheck, Cpu, Factory, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MOEADigitalTransformationSlide() {
  const steps = [
    {
      title: "第一階段：基礎盤查與健檢",
      subtitle: "專業診斷・精準定位",
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "border-orange-500/30",
      features: [
        "導入「19+1」機制專業輔導",
        "碳盤查現況診斷與健檢報告",
        "自付額僅需 NT$ 10,000",
        "產出數位轉型路徑建議書"
      ]
    },
    {
      title: "第二階段：AI 碳會計工具導入",
      subtitle: "智慧轉型・效率升級",
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/30",
      features: [
        "最高補助 NT$ 100,000",
        "導入 iSunFA 智能碳會計系統",
        "建立即時碳管理自動化對帳",
        "數據驅動的減碳策略模擬"
      ]
    },
    {
      title: "第三階段：智慧設備汰換",
      subtitle: "節能降碳・資產增值",
      icon: <Factory className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
      features: [
        "設備補助比例最高 50%",
        "單案最高補助 NT$ 5,000,000",
        "AI 分析能源熱點進行設備升級",
        "提供政府補助申請代辦服務"
      ]
    }
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden flex flex-col font-sans text-slate-900">
      
      {/* Info: (20260707 - Luphia) Top Border Indicator */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-20">
        <div className="h-full bg-orange-500 w-1/4" />
      </div>

      {/* Info: (20260707 - Luphia) Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-500/[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/[0.03] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Info: (20260707 - Luphia) Content Wrapper with Padding */}
      <div className="flex-1 flex flex-col p-12 relative z-10">
        
        {/* Info: (20260707 - Luphia) Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-orange-500 font-black tracking-[0.4em] text-[10px] uppercase">Policy Framework</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-tight mb-2 text-slate-900">
            經濟部數位轉型輔導計劃<br />
            <span className="text-slate-400">邁向淨零轉型三部曲</span>
          </h1>
          <p className="text-slate-500 text-base max-w-3xl font-medium leading-relaxed">
            透過階段性輔導與政府資源，協助企業從診斷、數位化到設備升級，全方位落實低碳智慧化管理。
          </p>
        </motion.div>

        {/* Info: (20260707 - Luphia) Steps Grid */}
        <div className="grid grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col bg-white border border-slate-100 rounded-[24px] p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all group relative overflow-hidden shadow-sm"
            >
              {/* Info: (20260707 - Luphia) Step Number Badge */}
              <div className="absolute top-6 right-6 text-6xl font-black text-slate-100 italic group-hover:text-slate-200 transition-colors pointer-events-none">
                0{index + 1}
              </div>

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-sm border border-white/50`}>
                <div className="scale-75">{step.icon}</div>
              </div>
              
              <div className="mb-4 relative z-10">
                <h3 className="text-lg font-black mb-1 text-slate-900 tracking-tight">{step.title}</h3>
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{step.subtitle}</p>
              </div>

              <ul className="space-y-2 mb-auto relative z-10">
                {step.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5 text-[11px] text-slate-600 font-medium">
                    <div className="mt-1 flex-shrink-0">
                      <ShieldCheck size={12} className="text-emerald-500/70" />
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Info: (20260707 - Luphia) Price/Subsidy Tag */}
              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <DollarSign size={10} className="text-orange-600" />
                   </div>
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">政府補助支援</span>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                   <ArrowRight size={14} className="text-slate-300 group-hover:text-white transition-colors" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info: (20260707 - Luphia) Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6"
        >
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">目標對象</span>
              <span className="text-[11px] font-bold text-slate-800">具轉型需求之製造業及中小企業</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">輔導能量</span>
              <span className="text-[11px] font-bold text-slate-800">結合資策會及各界數位專家團隊</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase">Economic Intelligence Integration</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
