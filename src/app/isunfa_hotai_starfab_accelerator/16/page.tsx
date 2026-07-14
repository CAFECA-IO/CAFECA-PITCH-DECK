'use client';

import Image from 'next/image';
import { Award, Trophy } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide16() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Awards & Recognition</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            榮譽與專業肯定
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="relative z-10 flex-1 px-16 pb-12 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">

          {/* Info: (20260610 - Luphia) Award 1: 2025 AI 新創地圖年度之星 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/80 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative group overflow-hidden min-h-[320px]">
            {/* Info: (20260610 - Luphia) Ambient Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full filter blur-xl group-hover:bg-emerald-500/10 transition-all duration-300"></div>

            <div className="flex items-start justify-between mb-6">
              <div className="bg-emerald-950/50 p-4 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-950/30">
                <Trophy size={32} />
              </div>
              <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Annual Winner
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <span className="text-emerald-400 font-mono text-sm font-bold tracking-wider mb-2">YEAR OF 2025</span>
              <h2 className="text-2xl font-black text-slate-100 mb-3 leading-snug">
                AI 新創地圖 年度之星
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                榮獲台灣指標性 AI 新創地圖年度之星殊榮，肯定 iSunFA 在 AI 應用的卓越實力。
              </p>
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Award 2: 2018 ICBC 區塊鏈最佳論文首獎 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/80 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative group overflow-hidden min-h-[320px]">
            {/* Info: (20260610 - Luphia) Ambient Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full filter blur-xl group-hover:bg-sky-500/10 transition-all duration-300"></div>

            <div className="flex items-start justify-between mb-6">
              <div className="bg-sky-950/50 p-4 rounded-2xl text-sky-400 border border-sky-500/20 shadow-lg shadow-sky-950/30">
                <Award size={32} />
              </div>
              <span className="text-[11px] font-extrabold text-sky-400 bg-sky-950/60 border border-sky-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                First Prize
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <span className="text-sky-400 font-mono text-sm font-bold tracking-wider mb-2">YEAR OF 2018</span>
              <h2 className="text-2xl font-black text-slate-100 mb-3 leading-snug">
                ICBC 區塊鏈最佳論文首獎
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                團隊核心區塊鏈與分散式帳本安全技術論文，榮獲 ICBC 區塊鏈論文競賽最高榮譽首獎。為車輛數位產品護照的防篡改維修歷史、里程可信度及機密數據安全提供理論與技術基石。
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium">
        <div>Slide 16 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
