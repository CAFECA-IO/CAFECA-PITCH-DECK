import { Crown, Eye, Wrench, CloudLightning, ShieldCheck } from 'lucide-react';

export default function SinoBeeSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col justify-center border border-slate-200">

      {/* Info: (20260319 - Luphia) Decorative */}
      <div className="absolute top-10 right-10 flex opacity-10 pointer-events-none">
        <div className="w-96 h-96 border-4 border-amber-500 rounded-full"></div>
        <div className="w-96 h-96 border-4 border-cyan-500 rounded-full -ml-48 mt-12"></div>
      </div>

      <div className="relative z-10 px-24 h-full flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm">Core Technology 2</span>
        </div>

        <h2 className="text-4xl font-extrabold text-slate-800 leading-tight mb-12">
          專業分工的蜂群網路 <span className="text-slate-400 font-light ml-2">Swarm Agents</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 h-[400px]">

          {/* Info: (20260319 - Luphia) Queen - Brain (Top/Left span) */}
          <div className="col-span-12 md:col-span-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-xl flex flex-col text-white relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Crown size={200} />
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
              <Crown size={32} className="text-amber-400" />
            </div>
            <h3 className="text-3xl font-black mb-1">Queen</h3>
            <p className="text-amber-300 font-bold tracking-wider text-xs uppercase mb-6">女王節點 (大腦)</p>
            <p className="text-slate-300 leading-relaxed font-light mt-auto">
              系統的絕對核心中樞。不直接參與底層運算，專注於<strong className="text-amber-400 font-normal">全球任務編排、全網算力調度與蜂群狀態監控</strong>，確保集體智能的高效運作。
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-6">

            {/* Info: (20260319 - Luphia) Scout */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-4 border border-sky-100 group-hover:bg-sky-500 transition-colors">
                <Eye size={24} className="text-sky-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Scout</h3>
              <p className="text-sky-600 font-semibold text-xs tracking-wider uppercase mb-3">偵察蜂 (Edge)</p>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                分佈於端點的敏捷節點。負責<strong className="text-slate-700">即時採集外部環境數據、觸發事件告警</strong>，並將前線情資準確回傳給 Queen。
              </p>
            </div>

            {/* Info: (20260319 - Luphia) Worker */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex flex-col hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4 border border-amber-100 group-hover:bg-amber-500 transition-colors">
                <Wrench size={24} className="text-amber-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Worker</h3>
              <p className="text-amber-600 font-semibold text-xs tracking-wider uppercase mb-3">工蜂 (Edge / GX10)</p>
              <p className="text-slate-500 text-sm leading-relaxed mt-auto">
                基於 ASUS GX10 佈建的主力。接收 Queen 拆解後的碎片化任務，負責<strong className="text-slate-700">高強度持久的並行推論與資料清洗</strong>。
              </p>
            </div>

            {/* Info: (20260319 - Luphia) Mercenary */}
            <div className="col-span-2 bg-gradient-to-r from-cyan-50 to-white rounded-3xl p-6 border border-cyan-200 shadow-md flex items-center gap-6 hover:shadow-cyan-500/10 transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center shrink-0 border border-cyan-200">
                <CloudLightning size={32} className="text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">Mercenary</h3>
                <p className="text-cyan-600 font-semibold text-xs tracking-wider uppercase mb-2">傭兵蜂 (Cloud / TWAI)</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  只有在遇到<strong className="text-slate-800">極度算力飢渴或高度複雜任務</strong>時，才會在 TWAI 雲端中動態生成的臨時強效節點。任務一經解局，傭兵即刻解散退役。
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-amber-500" />
          Layer 2 Agents
        </div>
        <div>SinoBee Pitch Deck</div>
      </div>

    </div>
  );
}
