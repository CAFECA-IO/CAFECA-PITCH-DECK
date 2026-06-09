'use client';

import Image from 'next/image';
import { Landmark, Code, Target, Server } from 'lucide-react';

export default function CafecaIsunfaSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-10 top-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">Fundraising & Use of Funds</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 leading-tight">
            募資計畫與資金用途
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-amber-500/10 p-1 rounded-lg text-amber-400">
              <Landmark size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Fund Target</div>
              <div className="text-sm font-black text-white font-mono">TWD 12M</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-8">
        
        {/* Left Side: Fund Details Card */}
        <div className="w-1/3 flex flex-col justify-center">
          <div className="bg-slate-950/60 border border-slate-800 p-8 rounded-3xl relative overflow-hidden">
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Execution Period</div>
            <h3 className="text-3xl font-extrabold text-white mb-6">執行期間：一年</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                50% 研發與產品升級
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                30% 臺灣與日本市場拓展
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                20% 算力節點儲備
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Allocation Cards with Progress Bar Style */}
        <div className="w-2/3 space-y-4">
          
          {/* Item 1: R&D (50%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all">
            {/* Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-emerald-500 w-[50%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Code className="text-emerald-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">研發與產品升級</h4>
              </div>
              <span className="text-emerald-400 font-bold font-mono text-sm">50% (TWD 6.0M)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              深化 FAITH 專家模型於鋼鐵、金屬扣件、紡織等傳統核心工業製程之物理與碳排推理精準度，對接歐盟查驗要求。
            </p>
          </div>

          {/* Item 2: Market Expansion (30%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-sky-500/20 transition-all">
            {/* Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-sky-500 w-[30%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Target className="text-sky-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">臺灣與日本市場拓展</h4>
              </div>
              <span className="text-sky-400 font-bold font-mono text-sm">30% (TWD 3.6M)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              建立臺灣與日本在地服務團隊與行銷網路，直接對接兩地製造公會、商會及綠色金融融資通道。
            </p>
          </div>

          {/* Item 3: Nodes (20%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-amber-500/20 transition-all">
            {/* Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-amber-500 w-[20%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Server className="text-amber-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">算力節點與地端儲備</h4>
              </div>
              <span className="text-amber-400 font-bold font-mono text-sm">20% (TWD 2.4M)</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              採購並擴增地端運算伺服器與GPU節點，以因應大客戶高隱私、地端獨占部署（On-Premise）的算力運營需求。
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 12 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
