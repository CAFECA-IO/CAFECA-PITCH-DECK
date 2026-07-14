'use client';

import Image from 'next/image';
import { CheckCircle2, Factory, ShieldCheck, ClipboardCheck, ArrowUpRight, BarChart4 } from 'lucide-react';

export default function CafecaIsunfaSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260609 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-10 w-[500px] h-[500px] bg-emerald-600 rounded-full filter blur-[140px]"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">All-In-One Compliance</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            五大支柱：一氣呵成的合規平台
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-semibold tracking-wider">
            本地部署 <span className="text-emerald-400 font-bold">20 片 RTX 5070 Ti</span>，最快 <span className="text-sky-400 font-bold">72 小時</span> 即可完成所有合規與分析。
          </p>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-center relative z-10 py-4">
        <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">

          {/* Info: (20260609 - Luphia) Card 1: 組織碳盤查 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Factory size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">組織碳盤查</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                自動整合多個廠區的排放源數據，產出符合 ISO 14064-1 國際標準的組織溫室氣體申報報告。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14064-1 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260609 - Luphia) Card 2: 產品碳足跡 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ClipboardCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">產品碳足跡</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                以製程反向推理技術，計算出單一產品在生命週期內的碳排放，符合 ISO 14067 查證規範。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14067 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260609 - Luphia) Card 3: 數位產品護照 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">數位產品護照</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                產出符合歐盟規範的數位產品護照 (DPP)，即時回報產品碳履歷，保障產品順利通過邊境關稅審查。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              EU DPP Compliant <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260609 - Luphia) Card 4: 綠色供應鏈 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <BarChart4 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">綠色供應鏈管理</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                動態追蹤並稽核下游供應商的實質碳排數據，降低企業的範疇三 (Scope 3) 供應鏈碳風險。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Scope 3 Management <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260609 - Luphia) Card 5: 淨零碳排規劃 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">淨零碳排規劃</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                結合多維數據分析與綠色路徑規劃，動態模擬最佳設備升級與減量投資路徑。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Net-Zero Path <ArrowUpRight size={10} />
            </div>
          </div>

        </div>
      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 07 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
