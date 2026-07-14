'use client';

import Image from 'next/image';
import { Settings, Factory, ShieldAlert, Cpu } from 'lucide-react';

export default function CafecaIsunfaSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Info: (20260609 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute left-1/4 bottom-10 w-[400px] h-[400px] bg-red-600 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">The Enterprise Dilemma</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 leading-tight">
            製造業最核心痛點：極致複雜的製程
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Info: (20260609 - Luphia) Left: The Question */}
        <div className="w-2/5 space-y-6">
          <div className="bg-gradient-to-br from-amber-950/60 to-red-950/40 border border-amber-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <h2 className="text-3xl font-black text-white leading-snug mb-4">
              每間企業活動各異，<br />
              有成百上千個製程活動，<br />
              <span className="text-amber-400">到底該怎麼減？</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              傳統碳盤查顧問依賴人工填表、抽樣估算，無法觸及底層工藝的真實排碳。面對極具複雜度與多樣性的重工業，顧問模式完全失靈。
            </p>
          </div>
        </div>

        {/* Info: (20260609 - Luphia) Right: The Grid of Complexity */}
        <div className="w-3/5 grid grid-cols-2 gap-4">
          
          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-amber-500 rounded-xl">
              <Factory size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">化學反應與熔煉</h4>
              <p className="text-xs text-slate-400">鋼鐵、金屬與石化等製程的直接排放，高溫控制極難抽樣估算。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-sky-500 rounded-xl">
              <Settings size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">機械加工與動力裝配</h4>
              <p className="text-xs text-slate-400">多段切削、沖壓與點焊等動態能耗，受現場排班影響劇烈波動。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-emerald-500 rounded-xl">
              <Cpu size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">無塵室與高精密製程</h4>
              <p className="text-xs text-slate-400">極端溫濕度控制、化學氣體清洗，間接碳排計算耗時繁複。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-red-500 rounded-xl">
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">範疇三供應鏈回溯</h4>
              <p className="text-xs text-slate-400">上游原材料來源成千上萬，手動收集供應商數據堪稱不可能任務。</p>
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 04 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
