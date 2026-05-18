'use client';

import { FileText, Cpu, Globe } from 'lucide-react';

export default function TaitraSlide1() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>

        <div className="flex-1 flex flex-col px-20 z-10 justify-center items-center text-center">
          <div className="flex gap-4 mb-8">
            <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
              <FileText className="w-8 h-8 text-sky-400" />
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <Cpu className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="inline-block mb-6">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-400/10 px-6 py-2 rounded-full border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              iSunFA TAITRA
            </span>
          </div>

          <h1 className="text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
            從<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">記帳</span>到<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">記碳</span>
            <br />
            <span className="text-4xl md:text-5xl mt-4 block font-bold text-slate-300">迎戰碳費與 CBAM 的 AI 突圍術</span>
          </h1>

          <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed border-t border-slate-800 pt-8 mt-4">
            自動化憑證解析 × 精準碳排轉換 × 零信任審計追蹤<br />
            打造接軌國際的數位產品護照 (DPP)
          </p>
        </div>

        <div className="absolute bottom-8 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA TAITRA</div>
          <div className="font-mono">#01</div>
        </div>
      </div>
    </div>
  );
}
