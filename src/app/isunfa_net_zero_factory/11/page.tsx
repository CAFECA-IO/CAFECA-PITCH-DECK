'use client';

import { Leaf, Cpu, Globe2, Sparkles } from 'lucide-react';

export default function NetZeroFactorySlide11() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-slate-950 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl text-white">

        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex-1 flex flex-col px-20 pt-8 pb-16 z-10 items-center justify-center text-center">

          <div className="relative mb-4">
            <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full" />
            <div className="w-20 h-20 bg-slate-900 border border-emerald-400/30 rounded-3xl flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
              <Leaf className="text-emerald-400" size={40} strokeWidth={1.5} />
              <div className="absolute bottom-2 right-2 bg-slate-900 rounded-full p-1 border border-slate-800">
                <Cpu className="text-teal-300" size={14} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 tracking-tight leading-tight mb-4">
            Creating a Better Future <br /> with Green AI
          </h2>

          <p className="text-lg text-emerald-100/80 font-medium max-w-3xl leading-relaxed mb-8">
            iSunFA Net-Zero Factory is not just an upgrade; it is a paradigm shift. We are transforming industrial waste into strategic assets, proving that environmental stewardship and economic growth can thrive together.
          </p>

          <div className="flex gap-6 w-full max-w-4xl">
            {/* Info: (20260527 - Luphia) Pillar 1 */}
            <div className="flex-1 bg-slate-900/50 backdrop-blur-md border border-emerald-500/20 p-5 rounded-2xl flex flex-col items-center hover:bg-slate-800/80 transition-colors shadow-lg">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-3 border border-emerald-500/20">
                <Globe2 size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Zero Waste Vision</h3>
              <p className="text-xs text-slate-400 text-center leading-relaxed">Closing the loop on manufacturing by entirely eliminating physical waste through infinite recycling chains.</p>
            </div>

            {/* Info: (20260527 - Luphia) Pillar 2 */}
            <div className="flex-1 bg-slate-900/50 backdrop-blur-md border border-teal-500/20 p-5 rounded-2xl flex flex-col items-center hover:bg-slate-800/80 transition-colors shadow-lg">
              <div className="w-10 h-10 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mb-3 border border-teal-500/20">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Resource Independence</h3>
              <p className="text-xs text-slate-400 text-center leading-relaxed">Empowering nations and enterprises with a self-sufficient secondary raw material supply chain.</p>
            </div>

            {/* Info: (20260527 - Luphia) Pillar 3 */}
            <div className="flex-1 bg-slate-900/50 backdrop-blur-md border border-sky-500/20 p-5 rounded-2xl flex flex-col items-center hover:bg-slate-800/80 transition-colors shadow-lg">
              <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mb-3 border border-sky-500/20">
                <Cpu size={20} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">AI-Driven Evolution</h3>
              <p className="text-xs text-slate-400 text-center leading-relaxed">Continuously optimizing efficiency and tracing material lineage with cutting-edge multi-modal AI.</p>
            </div>
          </div>



        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10 pointer-events-none">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#11</span>
          </div>
        </div>
      </div>
    </div>
  );
}
