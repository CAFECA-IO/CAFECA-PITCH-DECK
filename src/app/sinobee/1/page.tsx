import { Hexagon, Network, Cpu, CloudLightning } from 'lucide-react';

export default function SinoBeeSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden flex flex-col justify-center border border-neutral-800">
      {/* Info: (20260319 - Luphia) Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10 mix-blend-overlay"></div>

      {/* Info: (20260319 - Luphia) Glowing Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Info: (20260319 - Luphia) Abstract Hexagon Formation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Hexagon size={600} strokeWidth={1} className="text-amber-500 absolute animate-pulse duration-[4000ms]" />
        <Hexagon size={800} strokeWidth={0.5} className="text-cyan-500 absolute rotate-12" />
        <Hexagon size={400} strokeWidth={2} className="text-amber-300 absolute -rotate-12" />
      </div>

      <div className="relative z-10 px-24 py-16 flex justify-between items-center h-full">
        {/* Info: (20260319 - Luphia) Left Content */}
        <div className="flex-1 max-w-3xl flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-sm flex items-center gap-2">
              <Hexagon size={14} className="fill-amber-500/20" /> Next-Gen AI Infrastructure
            </span>
          </div>

          <h1 className="text-7xl font-black text-white leading-tight mb-8 tracking-tight">
            SinoBee
            <span className="block text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300 font-bold mt-4 leading-normal">
              無限擴展的混合群集 AI 算力網路
            </span>
          </h1>

          <p className="text-2xl text-slate-300 leading-relaxed max-w-2xl font-light border-l-4 border-cyan-500/50 pl-6 shadow-[-10px_0_20px_-10px_rgba(6,182,212,0.2)]">
            結合 <strong className="text-amber-400 font-semibold">ASUS GX10</strong> 邊緣運算與 <strong className="text-cyan-400 font-semibold">TWAI</strong> 雲端溢流，<br />打造次世代 <span className="text-white font-bold bg-white/10 px-2 py-0.5 rounded ml-1">HaaS (Hive-as-a-Service)</span> 生態系。
          </p>
        </div>

        {/* Info: (20260319 - Luphia) Right Conceptual Graphic */}
        <div className="w-[450px] relative">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Info: (20260319 - Luphia) Center Queen/Hive Concept */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative z-10 bg-neutral-900/80 border border-neutral-700/50 p-8 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col items-center transform rotate-3">
              <Network size={80} className="text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
              <div className="flex gap-6 mb-2">
                <div className="flex flex-col items-center">
                  <Cpu size={32} className="text-amber-400 mb-2" />
                  <span className="text-[10px] text-amber-500/80 font-bold tracking-widest">ASUS GX10 EDGE</span>
                </div>
                <div className="w-px bg-neutral-700"></div>
                <div className="flex flex-col items-center">
                  <CloudLightning size={32} className="text-cyan-400 mb-2" />
                  <span className="text-[10px] text-cyan-500/80 font-bold tracking-widest">TWAI CLOUD</span>
                </div>
              </div>
              <div className="mt-6 text-center text-xs font-mono text-slate-400 tracking-widest">
                DECENTRALIZED LOGIC CORE
              </div>
            </div>

            {/* Info: (20260319 - Luphia) Floating Nodes */}
            <div className="absolute top-0 right-10 bg-neutral-800/80 border border-amber-500/30 p-3 rounded-xl backdrop-blur-md transform -rotate-12 animate-bounce flex items-center gap-2">
              <Hexagon size={16} className="text-amber-400 fill-amber-400/20" />
              <span className="text-white text-xs font-bold">Worker Node</span>
            </div>
            <div className="absolute bottom-10 left-0 bg-neutral-800/80 border border-cyan-500/30 p-3 rounded-xl backdrop-blur-md transform rotate-6 animate-pulse flex items-center gap-2">
              <Hexagon size={16} className="text-cyan-400 fill-cyan-400/20" />
              <span className="text-white text-xs font-bold">Cloud Mercenary</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-neutral-500 text-xs font-medium tracking-widest">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          2026 iSunFA • SINO BEE INC.
        </div>
        <div className="uppercase">Confidential Pitch Deck</div>
      </div>
    </div>
  );
}
