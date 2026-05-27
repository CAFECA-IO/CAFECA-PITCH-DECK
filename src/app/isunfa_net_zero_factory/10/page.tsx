'use client';

import { MapPin, Microchip, Cpu, Factory, TrendingUp, Sparkles, Box } from 'lucide-react';

export default function NetZeroFactorySlide10() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl text-white">

        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-900/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 justify-between">

          <div className="mb-2">
            <span className="text-emerald-400 font-bold tracking-[0.2em] text-xs uppercase bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mt-3 tracking-wide leading-tight flex items-center gap-3">
              <MapPin className="text-sky-400" size={28} />
              Taiwan Science Parks: Urban Mining Potential
            </h2>
            <p className="text-slate-400 mt-2 text-sm max-w-3xl leading-relaxed">Unlocking billions in high-value secondary resources across Taiwan&apos;s key high-tech manufacturing clusters through AI-driven material recovery.</p>
          </div>

          <div className="flex-1 flex gap-5 mt-2 relative z-10">
            
            {/* HSP */}
            <div className="flex-1 bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl flex flex-col relative overflow-hidden group hover:bg-slate-800 transition-colors shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-bl-full blur-2xl group-hover:bg-sky-500/20 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center border border-sky-500/30">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Hsinchu (HSP)</h3>
                  <p className="text-xs text-sky-400 font-medium">Semiconductor & IC Base</p>
                </div>
              </div>
              <div className="mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 shadow-inner">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Est. Annual Value</p>
                <div className="text-3xl font-black text-white flex items-baseline gap-1">
                  <span className="text-lg text-slate-500">NT$</span>15.2<span className="text-lg text-slate-400">B</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-2 font-bold border-b border-slate-700 pb-1.5">Key Recoverable Materials</p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Sparkles size={16} className="text-amber-400 mt-0.5 shrink-0" /> Precious Metals (Au, Ag, Pd) from e-waste</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Box size={16} className="text-sky-400 mt-0.5 shrink-0" /> High-purity Silicon Wafers</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><TrendingUp size={16} className="text-emerald-400 mt-0.5 shrink-0" /> High-grade Copper & IC Substrates</li>
                </ul>
              </div>
            </div>

            {/* CTSP */}
            <div className="flex-1 bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl flex flex-col relative overflow-hidden group hover:bg-slate-800 transition-colors shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/30">
                  <Factory size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Central (CTSP)</h3>
                  <p className="text-xs text-emerald-400 font-medium">Precision Machinery & Optics</p>
                </div>
              </div>
              <div className="mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 shadow-inner">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Est. Annual Value</p>
                <div className="text-3xl font-black text-white flex items-baseline gap-1">
                  <span className="text-lg text-slate-500">NT$</span>8.5<span className="text-lg text-slate-400">B</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-2 font-bold border-b border-slate-700 pb-1.5">Key Recoverable Materials</p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Sparkles size={16} className="text-emerald-400 mt-0.5 shrink-0" /> Rare Earth Elements</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Box size={16} className="text-sky-400 mt-0.5 shrink-0" /> Optical Glass & Quartz</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><TrendingUp size={16} className="text-amber-400 mt-0.5 shrink-0" /> Specialized Alloy Scrap</li>
                </ul>
              </div>
            </div>

            {/* STSP */}
            <div className="flex-1 bg-slate-800/60 border border-slate-700/80 p-5 rounded-2xl flex flex-col relative overflow-hidden group hover:bg-slate-800 transition-colors shadow-lg">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full blur-2xl group-hover:bg-amber-500/20 transition-colors" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center border border-amber-500/30">
                  <Microchip size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Southern (STSP)</h3>
                  <p className="text-xs text-amber-400 font-medium">Advanced Manufacturing</p>
                </div>
              </div>
              <div className="mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50 shadow-inner relative overflow-hidden">
                <div className="absolute right-0 bottom-0 text-amber-400/10 pointer-events-none transform translate-x-2 translate-y-2">
                  <TrendingUp size={48} />
                </div>
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-1">Est. Annual Value</p>
                <div className="text-3xl font-black text-white flex items-baseline gap-1 relative z-10">
                  <span className="text-lg text-slate-500">NT$</span>22.8<span className="text-lg text-slate-400">B</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-2 font-bold border-b border-slate-700 pb-1.5">Key Recoverable Materials</p>
                <ul className="space-y-3 mt-3">
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Sparkles size={16} className="text-amber-400 mt-0.5 shrink-0" /> Ultra-pure Silicon & Advanced Metals</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><Box size={16} className="text-sky-400 mt-0.5 shrink-0" /> Copper Sulfate & Chemical Solvents</li>
                  <li className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"><TrendingUp size={16} className="text-emerald-400 mt-0.5 shrink-0" /> Sub-5nm Fabrication Byproducts</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="mt-4 flex justify-between items-center bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 shadow-lg relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-xl border border-emerald-500/30">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Total Estimated Taiwan Science Park Urban Mining Value</p>
                <p className="text-xs text-slate-400">A massive untapped strategic resource pool.</p>
              </div>
            </div>
            <div className="text-3xl font-black text-emerald-400 tracking-tight">NT$ 46.5B <span className="text-sm font-medium text-slate-400 ml-1 tracking-normal">/ year</span></div>
          </div>

        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
