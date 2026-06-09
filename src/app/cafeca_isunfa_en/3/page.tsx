'use client';

import Image from 'next/image';
import { Activity, Globe, Leaf } from 'lucide-react';

export default function CafecaIsunfaSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Emerald Glowing Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">The Global Equation</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-300 leading-tight">
            The Absolute Constant of Climate Physics
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Formula Card */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="bg-slate-950/60 backdrop-blur-md border border-emerald-500/20 p-10 rounded-[2rem] text-center relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Globe size={200} />
            </div>
            
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">
              Physical Carbon Reduction Conversion Constant
            </div>
            
            {/* The Big Equation */}
            <div className="space-y-4">
              <div className="text-5xl font-black text-emerald-400 font-mono tracking-tight">
                -2.2 Trillion Tons CO₂e
              </div>
              <div className="text-2xl text-slate-400 font-light">=</div>
              <div className="text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-2">
                -1<span className="text-3xl text-emerald-500">°C</span> Avg. Global Temp
              </div>
            </div>
            
            <p className="text-slate-400 text-xs mt-6 leading-relaxed">
              Lowering the global average temperature by 1 degree requires a physical reduction of 2.2 trillion tons of CO2e across the global industry chain. This is a hard-core race with no room for speculation.
            </p>
          </div>
        </div>

        {/* Right Side: What this means for Industry */}
        <div className="w-1/2 space-y-6">
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">The Unavoidable Absolute Quota</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                2.2 trillion tons is a physical boundary. Governments break down this constant for manufacturing sectors, rendering carbon allowances and carbon tax indicators the &ldquo;second balance sheet&rdquo; of corporate financial reports.
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-200 mb-2">Precision is Corporate Profit</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A 1% error means millions in tariff penalties or lost allowances. Enterprises need ultra-precise, process-level carbon footprint data, not vague estimates.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 03 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
