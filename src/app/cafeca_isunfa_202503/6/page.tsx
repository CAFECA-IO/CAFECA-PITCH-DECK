'use client';

import Image from 'next/image';
import { Lightbulb, Database, Sparkles, TrendingDown } from 'lucide-react';

export default function CafecaIsunfaSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Info: (20260609 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[130px]"></div>
        <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[130px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">Dynamic Optimization</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 leading-tight">
            綠色典範對標與淨零路徑最佳化
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Info: (20260609 - Luphia) Left Side: Summary Callout */}
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <div className="bg-slate-950/60 backdrop-blur-md border border-amber-500/20 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-amber-500">
              <TrendingDown size={120} />
            </div>
            
            <p className="text-lg text-slate-200 leading-relaxed text-justify mb-4">
              工業製程的每個環節，總有其他企業效率更好，碳排更少。iSunFA 能依據龐大資料庫，<strong className="text-amber-400">秒級鎖定各個製程環節的綠色典範</strong>。
            </p>
            <p className="text-base text-slate-300 leading-relaxed text-justify">
              透過 AI 演算法，為企業量身打造、並動態導入<strong className="text-emerald-400">最理想的淨零路徑</strong>，幫助企業以最低代價取得頂級市場競爭力。
            </p>
          </div>
        </div>

        {/* Info: (20260609 - Luphia) Right Side: Features Cards */}
        <div className="w-1/2 space-y-4">
          
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl">
              <Database size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">秒級典範資料庫檢索</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                收集數十萬項國際指標製造業數據，即時比對自身工藝與行業最佳實踐（Best Practice）的排碳落差。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">AI 動態生成減碳路径</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                考量預算、產能配置與設備生命週期，AI 演算法自動規劃高性價比的長短期減碳替代路徑。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl">
              <Lightbulb size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">低代價、高市場競爭力</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                避免盲目進行天價設備汰換，優先進行局部製程優化或綠能採購，精準配置企業有限資源。
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 06 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
