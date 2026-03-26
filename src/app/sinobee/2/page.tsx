import { AlertTriangle, ServerCrash, ZapOff, BrainCircuit } from 'lucide-react';

export default function CAFECASlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col justify-center border border-slate-200">

      {/* Info: (20260319 - Luphia) Background Graphic */}
      <div className="absolute right-[-10%] top-[-10%] opacity-5 text-slate-400 pointer-events-none">
        <ServerCrash size={800} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 px-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-rose-500 rounded-full"></div>
          <span className="text-rose-600 font-bold tracking-[0.2em] uppercase text-sm">The Problem</span>
        </div>

        <h2 className="text-5xl font-extrabold text-slate-800 leading-tight mb-16">
          傳統 AI 基礎設施的
          <span className="text-rose-500 mx-3">三大瓶頸</span>
        </h2>

        <div className="grid grid-cols-3 gap-8">

          {/* Info: (20260319 - Luphia) Box 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ZapOff size={150} />
            </div>
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <ZapOff size={32} className="text-rose-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">算力集中與成本高昂</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              傳統大模型過度依賴單一巨型伺服器或昂貴的 GPU 叢集，導致算力成本呈現幾何級數增長，讓多數企業難以負擔。
            </p>
          </div>

          {/* Info: (20260319 - Luphia) Box 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertTriangle size={150} />
            </div>
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 border border-orange-100 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <AlertTriangle size={32} className="text-orange-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">缺乏彈性與容錯 (SPOF)</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              面對突發運算高峰難以瞬間擴容；且只要核心節點發生單點故障，整個自動化流程就會瞬間停擺，穩定性大打折扣。
            </p>
          </div>

          {/* Info: (20260319 - Luphia) Box 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <BrainCircuit size={150} />
            </div>
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <BrainCircuit size={32} className="text-amber-500 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">能力固化與擴展受限</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              部署後的 AI 代理通常只能執行預設範疇內的單一任務，難以在運行中動態學習新技能或集體應對未知領域的挑戰。
            </p>
          </div>

        </div>
      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
          The Bottleneck
        </div>
        <div>CAFECA Pitch Deck</div>
      </div>
    </div>
  );
}
