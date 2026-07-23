'use client';

import { LockKeyhole, Link as LinkIcon, Fingerprint, BrainCircuit } from 'lucide-react';

export default function IsunfaAsusSlide6() {
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
      description: '在不解密原始資料下進行密文運算，讓薪資、財會與製程機密可於 EIP 上安全協作與驗證。',
    },
    {
      id: 'boltchain',
      title: 'Boltchain 區塊鏈存證',
      icon: LinkIcon,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      shadowColor: 'group-hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)]',
      gradient: 'from-emerald-500 to-teal-500',
      description: '高吞吐去中心化帳本，讓每筆簽核、打卡、取件與碳排紀錄具備不可篡改的信任基礎與稽核軌跡。',
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
      description: '基於 Web3 的去中心化數位身分，為人員、設備與晶片卡簽發專屬憑證，是 EIP 身分認證與 SSO 的信任核心。',
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
      description: '整合全球專利、法規與工程知識的 AI 核心大腦，可自動判定異常單據、推演製程並規劃最佳淨零路徑。',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>

      <div className="absolute top-10 right-14 z-20 text-xs font-bold text-slate-300">2 / 3</div>

      <div className="z-20 text-center mb-14 mt-4">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">Core Infrastructure</span>
        </div>
        <h2 className="text-5xl font-black text-slate-800 tracking-tight">四大核心技術</h2>
        <p className="text-lg text-slate-500 mt-4 font-medium max-w-2xl mx-auto">融合密碼學、區塊鏈與人工智慧，打造零信任架構下的企業信任基礎設施</p>
      </div>

      <div className="z-20 w-full max-w-6xl grid grid-cols-4 gap-6 px-12 relative">
        {technologies.map((tech) => (
          <div key={tech.id} className="relative group">
            <div className={`relative h-[300px] bg-white rounded-3xl p-7 border border-slate-200 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2 ${tech.shadowColor}`}>
              <div className={`w-16 h-16 ${tech.bgColor} ${tech.color} rounded-2xl flex items-center justify-center mb-5 shadow-inner border ${tech.borderColor}`}>
                <tech.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">{tech.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed flex-1">{tech.description}</p>
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${tech.gradient} mt-3 opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
