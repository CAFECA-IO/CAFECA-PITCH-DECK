import { Hexagon, CloudLightning, Server, Layers, ArrowRightLeft } from 'lucide-react';

export default function CAFECASlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden flex flex-col justify-center border border-neutral-800">

      {/* Info: (20260319 - Luphia) Background Graphic */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-amber-500/5 via-neutral-900 to-cyan-500/5 pointer-events-none"></div>

      <div className="relative z-10 px-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">Core Technology 1</span>
        </div>

        <h2 className="text-5xl font-extrabold text-white leading-tight mb-12">
          混合蜂巢架構
          <span className="text-3xl text-slate-400 font-light ml-4">Hybrid-Decentralized Architecture</span>
        </h2>

        <div className="flex items-stretch gap-8 h-[380px]">

          {/* Info: (20260319 - Luphia) Edge Box */}
          <div className="flex-1 bg-neutral-900 rounded-3xl border border-amber-500/20 p-8 relative group hover:border-amber-400 transition-colors flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center">
                <Hexagon size={32} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-amber-500 tracking-tight">D-Hive</h3>
                <p className="text-slate-400 font-bold tracking-widest text-sm uppercase">去中心化蜂巢 (Edge Grid)</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <Server className="text-amber-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-slate-200 mb-1">硬體基礎：ASUS GX10 主機</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">由無數輕量、高效的邊緣運算節點組成底層實體網格，提供極具成本效益的常態算力。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Layers className="text-amber-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-slate-200 mb-1">常態成本極小化</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">完美負荷日常的輕中度推論與常規自動化巡檢，省去龐大的機房冷氣與維運開銷。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info: (20260319 - Luphia) Center Connector */}
          <div className="flex flex-col justify-center items-center px-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <ArrowRightLeft className="text-slate-400" size={20} />
            </div>
            <div className="w-px h-full absolute bg-gradient-to-b from-transparent via-neutral-700 to-transparent"></div>
          </div>

          {/* Info: (20260319 - Luphia) Cloud Box */}
          <div className="flex-1 bg-neutral-900 rounded-3xl border border-cyan-500/20 p-8 relative group hover:border-cyan-400 transition-colors flex flex-col overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>

            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                <CloudLightning size={32} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-cyan-400 tracking-tight">C-Hive</h3>
                <p className="text-slate-400 font-bold tracking-widest text-sm uppercase">公有雲溢流 (Cloud Overflow)</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <Server className="text-cyan-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-slate-200 mb-1">深度整合台智雲 (TWAI)</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">突破實體硬體上限，無縫串接高效能公有雲叢集，確保全網路的絕對彈性。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Layers className="text-cyan-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-slate-200 mb-1">毫秒級瞬間擴容與釋放</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">遇到極端算力需求時瞬間啟動，任務完成後即刻釋放資源，實現精準到秒的成本控管。</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-500 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          Layer 1 Architecture
        </div>
        <div>CAFECA Pitch Deck</div>
      </div>
    </div>
  );
}
