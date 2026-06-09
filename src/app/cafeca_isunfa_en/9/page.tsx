'use client';

import Image from 'next/image';
import { MapPin, Landmark, TrendingUp, Network } from 'lucide-react';

export default function CafecaIsunfaSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Market Opportunity / TAM</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            East Asian Manufacturing Supply Chain TAM
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Total Market Value & Partnership Ecosystem */}
        <div className="w-2/5 flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-6 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Landmark size={150} />
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <TrendingUp size={16} />
              Total Addressable Market (TAM)
            </div>
            
            <h2 className="text-4xl font-black text-white font-mono flex items-baseline gap-1 mt-3">
              &gt; 1.5 <span className="text-lg text-emerald-400 font-sans">Billion TWD / Yr</span>
            </h2>
            
            <p className="text-xs text-slate-400 leading-relaxed mt-4">
              Excluding mainland China, the compliance market of core manufacturing in East Asia and ASEAN alone exceeds 1.5 Billion TWD annually. iSunFA&apos;s ultra-lightweight on-premise deployment is perfectly suited for these privacy-conscious precision supply chain enterprises.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-[2rem] flex gap-3.5 items-start">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <Network size={18} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-xs mb-1">
                Ecosystem Partnerships & Strategic Resources
              </h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Extensive leverage of TWS Supercomputer Accelerators, NCKU Innovation Incubator, and Japan ATR KGAP+ resources, partnering with multiple system integrators via profit-sharing models.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Countries Breakdown Grid */}
        <div className="w-3/5 grid grid-cols-2 gap-4">
          
          {[
            { country: 'Japan', count: '25,000 firms', color: 'text-amber-400', bg: 'bg-amber-500/10' },
            { country: 'Korea', count: '15,000 firms', color: 'text-sky-400', bg: 'bg-sky-500/10' },
            { country: 'Taiwan', count: '12,000 firms', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
            { country: 'Vietnam', count: '8,000 firms', color: 'text-teal-400', bg: 'bg-teal-500/10' },
            { country: 'Indonesia', count: '6,500 firms', color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
            { country: 'Malaysia', count: '5,000 firms', color: 'text-rose-400', bg: 'bg-rose-500/10' },
            { country: 'Philippines', count: '4,000 firms', color: 'text-orange-400', bg: 'bg-orange-500/10' },
            { country: 'Total (East Asian Mfg.)', count: '75,500 firms', color: 'text-white', bg: 'bg-white/5 font-extrabold' }
          ].map((item, i) => (
            <div key={i} className={`bg-slate-950/60 border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors`}>
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-semibold text-slate-200">{item.country}</span>
              </div>
              <span className={`text-base font-mono font-bold ${item.color}`}>
                {item.count}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 09 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
