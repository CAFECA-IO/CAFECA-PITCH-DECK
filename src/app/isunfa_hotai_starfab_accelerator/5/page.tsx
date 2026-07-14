'use client';

import Image from 'next/image';
import { Eye, FileText, Cpu, ArrowRight } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-10 top-1/4 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[130px]"></div>
        <div className="absolute right-10 bottom-10 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[130px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">AI 數位化方案</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            車輛的智能眼睛，多模態 AI 識別技術
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="flex-1 px-16 flex flex-col justify-center relative z-10 w-full max-w-5xl mx-auto py-4">

        <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-8 rounded-3xl mb-8">
          <p className="text-xl text-slate-200 font-medium leading-relaxed text-justify">
            以每一輛車的車身獨一無二識別碼 (<strong className="text-emerald-400 mx-1 font-extrabold">VIN 碼</strong>) 為核心，多模態 AI 能夠直接辨識、解析包含<strong className="text-sky-400 mx-1 font-extrabold">手寫在內的所有紙本工單與憑證</strong>，即時同步資訊至數位產品護照，打通售後保修的<strong className="text-emerald-300 mx-1 font-extrabold">數據壁壘</strong>，確保履歷的<strong className="text-sky-300 mx-1 font-extrabold">完整與誠信</strong>。
          </p>
        </div>

        {/* Info: (20260610 - Luphia) Process Flow Diagram */}
        <div className="flex items-center justify-between gap-4 w-full">

          {/* Info: (20260610 - Luphia) Step 1: Inputs */}
          <div className="flex-1 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 mb-3">
              <FileText size={24} />
            </div>
            <h4 className="font-bold text-slate-200 text-sm mb-1">多源工單憑證</h4>
            <p className="text-xs text-slate-500 leading-normal">
              自動收集估價單、手寫保修單、發票與零件細目
            </p>
          </div>

          <ArrowRight className="text-slate-600 flex-shrink-0" size={20} />

          {/* Info: (20260610 - Luphia) Step 2: AI Processor */}
          <div className="flex-1 bg-gradient-to-br from-emerald-950 to-emerald-900 border border-emerald-500/30 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-emerald-500/50 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Cpu size={24} />
            </div>
            <h4 className="font-bold text-emerald-300 text-sm mb-1">AI 識別與勾稽</h4>
            <p className="text-xs text-emerald-100/70 leading-normal">
              AI 引擎精準解析手寫技師筆跡與零件品項代碼
            </p>
          </div>

          <ArrowRight className="text-slate-600 flex-shrink-0" size={20} />

          {/* Info: (20260610 - Luphia) Step 3: Outputs */}
          <div className="flex-1 bg-slate-900/80 border border-slate-800 p-5 rounded-2xl flex flex-col items-center text-center relative group hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 mb-3">
              <Eye size={24} />
            </div>
            <h4 className="font-bold text-slate-200 text-sm mb-1">車輛數位產品護照</h4>
            <p className="text-xs text-slate-500 leading-normal">
              資訊自動歸檔至專屬 VIN 碼，提供透明的完整履歷
            </p>
          </div>

        </div>

      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 05 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
