'use client';

import Image from 'next/image';
import { CheckCircle2, Car, ShieldCheck, ClipboardCheck, ArrowUpRight, BarChart4 } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-10 w-[500px] h-[500px] bg-emerald-600 rounded-full filter blur-[140px]"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">All-In-One Lifecycle Platform</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            五大支柱：一氣呵成的車況數位護照
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-semibold tracking-wider">
            本地部署 GPU 加速，可於 <span className="text-emerald-400 font-bold">72 小時</span> 內完成數十萬張歷史手寫工單的自動化辨識、勾稽與數位產品護照建立。
          </p>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-center relative z-10 py-4">
        <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">

          {/* Card 1: 車輛身份識別 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Car size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">車輛身份識別</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                基於車載唯一 VIN 碼建立底層身分，自動匹配車籍資料與初始規格參數。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              VIN Identity <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 2: 保修軌跡追蹤 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ClipboardCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">保修軌跡追蹤</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                即時登錄每次例行保養與零件變更，完整還原車輛生命週期的維修歷程。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Track Logs <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 3: 手寫工單 OCR */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">手寫工單 OCR</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                多模態大模型解析手寫技師註記與備註，自動提取非結構化零件品名。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Multimodal AI <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 4: AI 折舊評估 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <BarChart4 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">AI 折舊評估</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                基於實際保修品質、更換零件副廠率與里程，動態精算車輛殘值。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Valuation Engine <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 5: 車主透明看板 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">車主透明看板</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                提供車主直觀且防篡改的數位護照看板，讓交易與保養資訊一目了然。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Transparency <ArrowUpRight size={10} />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 10 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
