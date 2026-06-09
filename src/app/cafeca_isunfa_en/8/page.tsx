'use client';

import Image from 'next/image';
import { ShieldAlert, Cpu, Landmark, Coins } from 'lucide-react';

export default function CafecaIsunfaSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Edge AI & Cost Efficiency</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            Ultra-Lightweight On-Premise Deployment: Ultimate Cost-Effectiveness
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">

        {/* Left Column: The Edge AI Metric & Business Model */}
        <div className="w-[45%] flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-emerald-500/5">
              <Cpu size={120} />
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider mb-2">
              <Cpu size={14} />
              Edge Deployment Requirements
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              0.7B Tokens AI Consumption
            </h3>

            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5 mb-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Computing Hardware Requirement</span>
                <span className="font-bold text-white font-mono">20x RTX 5070 Ti</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Deployment Time</span>
                <span className="font-bold text-emerald-400 font-mono">72 Hours</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed">
              Complete corporate carbon accounting, product carbon footprints, digital product passports, green supply chain management, and net-zero planning within 72 hours!
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-[2rem] flex gap-3.5 items-start">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <Coins size={18} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-xs mb-1">
                Asset-Light Business Model
              </h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Offers cloud subscriptions (60% premium) or on-premise Turn-Key hardware/software appliances (60% hardware markup buyout). No hardware CAPEX advance pressure for the company.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Cost Comparisons with Bar Chart */}
        <div className="w-[55%] space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2 mb-1">
              <Landmark className="text-emerald-500" size={18} />
              Ultimate Operational Cost Comparison (TWD)
            </h3>
            <p className="text-xs text-slate-500">Comparison between one-time setup and long-term operational costs</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-6 rounded-[2rem] space-y-6">

            {/* Bar 1: Custom LLM */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Traditional Custom LLM Project (Dev + Maintenance)
                </span>
                <span className="font-mono font-bold text-rose-400">&gt; TWD 45,000,000</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)]" style={{ width: '100%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500">Huge upfront R&D CAPEX, 6-12 months customization cycle, high maintenance costs, and project failure risk.</p>
            </div>

            {/* Bar 2: Gemini 3 Flash */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Gemini 3 Flash Cloud API (5-Year Cumulative)
                </span>
                <span className="font-mono font-bold text-amber-400">TWD 7,900,000</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)]" style={{ width: '17.5%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500">Billed by token count; cumulative call costs escalate over time, posing risks of leaking sensitive business and technical data.</p>
            </div>

            {/* Bar 3: FAITH */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
                  FAITH On-Premise Edge Computing (Single Analysis Cost)
                </span>
                <span className="font-mono font-bold text-emerald-400">TWD 16,438</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 relative">
                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" style={{ width: '1.5%' }}></div>
              </div>
              <p className="text-[10px] text-emerald-400/80">Single process-level analysis operational cost requires only TWD 16,438 (including 864 kWh electricity for 20 GPUs running full load for 72 hrs, strict annual equipment depreciation, and R&D amortization).</p>
            </div>

          </div>

          {/* Secure Edge Highlight */}
          <div className="bg-emerald-950/30 border border-emerald-500/10 px-5 py-3.5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 bg-emerald-500 text-slate-950 rounded-xl">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 text-xs mb-0.5">Zero-Trust On-Premise Security: Compliance & Long-Term Savings</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Eliminates risks of leaking sensitive production data to the cloud, saves most long-term API expenditures, and achieves sustainable operations with autonomous computing power.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 08 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
