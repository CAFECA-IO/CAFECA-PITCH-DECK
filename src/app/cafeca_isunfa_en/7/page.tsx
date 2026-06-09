'use client';

import Image from 'next/image';
import { CheckCircle2, Factory, ShieldCheck, ClipboardCheck, ArrowUpRight, BarChart4 } from 'lucide-react';

export default function CafecaIsunfaSlide7() {
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
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">All-In-One Compliance</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            5 Pillars: A Seamless Compliance Platform
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-semibold tracking-wider">
            Deploying <span className="text-emerald-400 font-bold">20x RTX 5070 Ti</span> on-premise, complete all compliance and analyses in as fast as <span className="text-sky-400 font-bold">72 hours</span>.
          </p>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-center relative z-10 py-4">
        <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">

          {/* Card 1: 組織碳盤查 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Factory size={22} />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Corporate Carbon Accounting</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Automatically integrates emission source data across multiple sites, producing corporate GHG reports matching ISO 14064-1 standards.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14064-1 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 2: 產品碳足跡 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ClipboardCheck size={22} />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Product Carbon Footprint</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Uses process inverse reasoning to compute lifetime carbon emissions of single products, matching ISO 14067 verification norms.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14067 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 3: 數位產品護照 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Digital Product Passport</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Generates EU-compliant Digital Product Passports (DPP) to report carbon traceability, ensuring products pass border tariff audits smoothly.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              EU DPP Compliant <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 4: 綠色供應鏈 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <BarChart4 size={22} />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Green Supply Chain Management</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Dynamically tracks and audits real emission data of downstream suppliers, mitigating Scope 3 supply chain carbon risks.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Scope 3 Management <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Card 5: 淨零碳排規劃 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-sm font-bold text-slate-100">Net-Zero Strategic Planning</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Combines multi-dimensional analysis and green routing, simulating optimal equipment upgrades and carbon reduction investment paths.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Net-Zero Path <ArrowUpRight size={10} />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 07 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
