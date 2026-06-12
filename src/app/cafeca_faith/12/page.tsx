'use client';

import { LockKeyhole, Link, Fingerprint, BrainCircuit } from 'lucide-react';

export default function CafecaFaithSlide12() {
  const technologies = [
    {
      id: 'alohomora',
      title: 'Alohomora 同態加密',
      icon: LockKeyhole,
      color: 'text-violet-500',
      bgColor: 'bg-violet-50',
      borderColor: 'border-violet-100',
      shadowColor: 'group-hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)]',
      gradient: 'from-violet-500 to-fuchsia-500',
      description: '支援在不解密原始資料的前提下進行密文運算，保障企業在雲端協作中的最高層級商業機密與數據隱私。',
    },
    {
      id: 'boltchain',
      title: 'Boltchain 區塊鏈存證',
      icon: Link,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      shadowColor: 'group-hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]',
      gradient: 'from-emerald-500 to-teal-500',
      description: '採用高吞吐量的去中心化分散式帳本技術，確保每一筆碳排數據與交易紀錄具備不可篡改的絕對信任基礎。',
    },
    {
      id: 'cafeca',
      title: 'CAFECA 數位身分證',
      icon: Fingerprint,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      shadowColor: 'group-hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)]',
      gradient: 'from-blue-500 to-cyan-500',
      description: '基於 Web3 的去中心化數位身分架構，賦予供應鏈中每一個設備、產品與人員專屬憑證，精準追溯碳足跡。',
    },
    {
      id: 'faith',
      title: 'FAITH 智能模型',
      icon: BrainCircuit,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100',
      shadowColor: 'group-hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]',
      gradient: 'from-orange-500 to-amber-500',
      description: '整合全球公開專利、法規與跨領域工程知識的 AI 核心大腦，能自主推演綠色製程並動態規劃最佳淨零路徑。',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Light Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>

      {/* Header */}
      <div className="z-20 text-center mb-16 mt-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">Core Infrastructure</span>
        </div>
        <h2 className="text-5xl font-black text-slate-800 tracking-tight">底層技術優勢</h2>
        <p className="text-lg text-slate-500 mt-4 font-medium max-w-2xl mx-auto">融合密碼學、區塊鏈與人工智慧，打造零信任架構下的安全永續生態系</p>
      </div>

      {/* 4 Pillars Layout */}
      <div className="z-20 w-full max-w-6xl grid grid-cols-4 gap-6 px-12 relative">
        {technologies.map((tech) => (
          <div key={tech.id} className="relative group">
            
            {/* Card Content */}
            <div className={`relative h-[320px] bg-white rounded-3xl p-8 border border-slate-200 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2 ${tech.shadowColor}`}>
              
              <div className={`w-16 h-16 ${tech.bgColor} ${tech.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner border ${tech.borderColor}`}>
                <tech.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">{tech.title}</h3>
              
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {tech.description}
              </p>

              {/* Decorative line at bottom */}
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${tech.gradient} mt-4 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
