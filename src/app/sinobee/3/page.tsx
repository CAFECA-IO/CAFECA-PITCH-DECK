import { Hexagon, Network, Sprout } from 'lucide-react';

export default function CAFECASlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden flex flex-col justify-center border border-neutral-800 text-white">

      {/* Info: (20260319 - Luphia) Background Graphic */}
      <div className="absolute right-[-10%] top-[0%] opacity-[0.03] text-amber-500 pointer-events-none">
        <Network size={900} strokeWidth={0.5} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 px-24 flex gap-12 items-center h-full">

        {/* Info: (20260319 - Luphia) Left Concept Graphic */}
        <div className="w-[400px] flex flex-col items-center justify-center relative">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <Hexagon size={320} className="text-amber-500/20 fill-amber-500/10 absolute animate-pulse duration-[3000ms]" strokeWidth={1} />
            <div className="w-48 h-48 bg-neutral-950 border border-amber-500/50 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center relative z-10 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Network size={80} className="text-amber-400" />
            </div>

            {/* Info: (20260319 - Luphia) Orbital Bees */}
            <div className="absolute top-0 right-0 animate-bounce">
              <div className="bg-cyan-500/20 text-cyan-400 p-2 border border-cyan-500/50 rounded-lg backdrop-blur-md">
                <Hexagon size={24} className="fill-cyan-500/20" />
              </div>
            </div>
            <div className="absolute bottom-10 left-0 animate-bounce" style={{ animationDelay: '500ms' }}>
              <div className="bg-amber-500/20 text-amber-400 p-2 border border-amber-500/50 rounded-lg backdrop-blur-md">
                <Hexagon size={32} className="fill-amber-500/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260319 - Luphia) Right Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm">The Solution</span>
          </div>

          <h2 className="text-6xl font-black text-white leading-tight mb-12">
            次世代 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">仿生群集</span> 智能
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-neutral-900 transition-colors shrink-0">
                <Network size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">群集智能 (Swarm Intelligence)</h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  不再依賴單一巨型 AI，而是將複雜任務無縫拆解給成千上萬個分散式的專業「數位蜜蜂」進行並行處理，突破單機極限。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-neutral-900 transition-colors shrink-0">
                <Hexagon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">平時省錢，戰時攻堅</h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  完美融合 <strong className="text-cyan-400 font-normal">去中心化邊緣硬體 (ASUS GX10)</strong> 與 <strong className="text-cyan-400 font-normal">公有雲彈性擴展 (TWAI)</strong>。常態運算成本極低，突發需求瞬間溢流雲端。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-neutral-900 transition-colors shrink-0">
                <Sprout size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">微服務動態進化</h3>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  透過生態圈技能商店隨插即用，賦予 AI 代理無限的神經可塑性，即時學習新技能應對未知領域，告別能力固化。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-500 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          The CAFECA Solution
        </div>
        <div>CAFECA Pitch Deck</div>
      </div>
    </div>
  );
}
