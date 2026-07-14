'use client';

import Image from 'next/image';
import { Landmark, Code, Target, Server } from 'lucide-react';

export default function CafecaIsunfaSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Info: (20260609 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-10 top-1/4 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px] animate-pulse"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">Fundraising & Use of Funds</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 leading-tight">
            Fundraising Plan & Use of Funds
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-amber-500/10 p-1 rounded-lg text-amber-400">
              <Landmark size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Fund Target</div>
              <div className="text-sm font-black text-white font-mono">TWD 12M</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-8">
        
        {/* Info: (20260609 - Luphia) Left Side: Fund Details Card */}
        <div className="w-1/3 flex flex-col justify-center">
          <div className="bg-slate-950/60 border border-slate-800 p-8 rounded-3xl relative overflow-hidden">
            <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Execution Period</div>
            <h3 className="text-2xl font-extrabold text-white mb-6">Timeline: 1 Year</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                50% R&D & Product Upgrades
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                30% Taiwan & Japan Expansion
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                20% GPU Compute Node Reserves
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260609 - Luphia) Right Side: Allocation Cards with Progress Bar Style */}
        <div className="w-2/3 space-y-4">
          
          {/* Info: (20260609 - Luphia) Item 1: R&D (50%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all">
            {/* Info: (20260609 - Luphia) Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-emerald-500 w-[50%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Code className="text-emerald-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">R&D & Product Upgrades</h4>
              </div>
              <span className="text-emerald-400 font-bold font-mono text-sm">50% (TWD 6.0M)</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Refining FAITH&apos;s physical and emission inference precision for heavy industries (steel, fasteners, textiles) to match strict EU verification demands.
            </p>
          </div>

          {/* Info: (20260609 - Luphia) Item 2: Market Expansion (30%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-sky-500/20 transition-all">
            {/* Info: (20260609 - Luphia) Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-sky-500 w-[30%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Target className="text-sky-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">Taiwan & Japan Market Expansion</h4>
              </div>
              <span className="text-sky-400 font-bold font-mono text-sm">30% (TWD 3.6M)</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Establishing local teams and marketing networks in Taiwan and Japan, directly interfacing with manufacturing guilds, chambers of commerce, and green finance channels.
            </p>
          </div>

          {/* Info: (20260609 - Luphia) Item 3: Nodes (20%) */}
          <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-2xl relative overflow-hidden group hover:border-amber-500/20 transition-all">
            {/* Info: (20260609 - Luphia) Visual Indicator */}
            <div className="absolute top-0 left-0 h-1 bg-amber-500 w-[20%]"></div>
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Server className="text-amber-400" size={18} />
                <h4 className="font-bold text-slate-200 text-sm">Computing Nodes & Edge Reserves</h4>
              </div>
              <span className="text-amber-400 font-bold font-mono text-sm">20% (TWD 2.4M)</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Procuring edge servers and GPU nodes to support on-premise compute requirements for enterprise clients demanding top-tier data privacy.
            </p>
          </div>

        </div>

      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 12 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
