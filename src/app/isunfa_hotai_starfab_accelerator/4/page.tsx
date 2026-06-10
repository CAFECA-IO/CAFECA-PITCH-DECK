'use client';

import Image from 'next/image';
import { FileText, Layers, Gauge, Receipt } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/4 bottom-10 w-[400px] h-[400px] bg-red-600 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">The Maintenance Dilemma</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 leading-tight">
            保修服務最核心痛點：極致碎片化的單據
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left: The Question */}
        <div className="w-2/5 space-y-6">
          <div className="bg-gradient-to-br from-amber-950/60 to-red-950/40 border border-amber-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <h2 className="text-3xl font-black text-white leading-snug mb-4">
              每輛車保養百異，<br />
              有成百上千個手寫單據，<br />
              <span className="text-amber-400">到底該怎麼整合？</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              車主每次回廠、或在外廠保養，產生的估價單、手寫工單、發票與檢測報告規格完全不一。傳統人工登錄耗時費力，更難以即時建立完整的數位履歷。
            </p>
          </div>
        </div>

        {/* Right: The Grid of Complexity */}
        <div className="w-3/5 grid grid-cols-2 gap-4">
          
          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-amber-500 rounded-xl flex-shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">手寫工單與簽名</h4>
              <p className="text-xs text-slate-400">技師習慣以原子筆手寫註記、勾選，並有草率簽名，字跡辨識難度極高。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-sky-500 rounded-xl flex-shrink-0">
              <Layers size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">非結構化零件明細</h4>
              <p className="text-xs text-slate-400">各廠牌與外廠的零件品名、規格代碼缺乏統一標準，格式極度紛雜。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-emerald-500 rounded-xl flex-shrink-0">
              <Gauge size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">動態車況檢測報告</h4>
              <p className="text-xs text-slate-400">胎紋、電瓶、煞車等安全性檢測數據散落在不同紙本或獨立系統中。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-red-500 rounded-xl flex-shrink-0">
              <Receipt size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">外廠保修收據</h4>
              <p className="text-xs text-slate-400">副廠或非正規授權廠的收據規格各異，歷史記錄極易遺失或被惡意隱瞞。</p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 04 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
