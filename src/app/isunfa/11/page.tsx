'use client';

import { Cloud, Server, CheckCircle2, ShieldCheck, Zap, Database } from 'lucide-react';

export default function CafecaFaithSlide11() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260701 - Luphia) Background Accents (Matching Screenshot Style) */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      {/* Info: (20260701 - Luphia) Header */}
      <div className="z-20 text-center mb-8 mt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-sm font-semibold text-orange-600 uppercase tracking-widest">Business Model</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">企業人工智能導入</h2>
        <p className="text-base text-slate-500 mt-2 font-medium">針對不同規模企業，提供最適合的數位綠色轉型方案</p>
      </div>

      {/* Info: (20260701 - Luphia) Pricing Cards Container */}
      <div className="z-20 w-full max-w-4xl grid grid-cols-2 gap-8 px-12 relative">

        {/* Info: (20260701 - Luphia) Card 1: Cloud Subscription */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Cloud className="w-40 h-40 text-orange-500" />
          </div>

          <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
            <Cloud className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-2">雲端訂閱 (無硬體)</h3>
          <p className="text-slate-500 mb-6 text-sm">適合快速導入、尋求輕量化綠色轉型的中小企業，無須額外建置硬體資源。</p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-sm font-bold text-slate-400">NT$</span>
            <span className="text-5xl font-black text-slate-800 tracking-tighter">29,400</span>
            <span className="text-slate-400 font-medium">/ 年</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500" />
              <span className="text-slate-600 font-medium text-sm">純軟體 SaaS 雲端服務</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-slate-600 font-medium text-sm">即開即用，快速對接</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-orange-500" />
              <span className="text-slate-600 font-medium text-sm">標準溫室氣體與碳足跡運算</span>
            </div>
          </div>
        </div>

        {/* Info: (20260701 - Luphia) Card 2: On-Premise Buyout */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 border border-orange-400 shadow-2xl hover:shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Server className="w-40 h-40 text-white" />
          </div>

          <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-4 shadow-inner border border-white/20 backdrop-blur-sm">
            <Server className="w-7 h-7" />
          </div>

          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-white">本地部署 (買斷制)</h3>
            <span className="px-3 py-1 bg-white text-orange-600 text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
              企業首選
            </span>
          </div>

          <p className="text-orange-100 mb-6 text-sm">針對高度注重資料隱私與邊緣運算的精密製造供應鏈，提供地端超輕量部署。</p>

          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-sm font-bold text-orange-200">NT$</span>
            <span className="text-5xl font-black text-white tracking-tighter">303,660</span>
            <span className="text-orange-200 font-medium">/ 買斷</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">高度資安防護與商業隱私</span>
            </div>
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">邊緣硬體設備與地端主機</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">自定義系統對接與客製化擴充</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
