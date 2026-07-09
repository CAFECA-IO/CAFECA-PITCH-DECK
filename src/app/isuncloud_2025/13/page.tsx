import { ArrowRight, Globe2, Network, Target, Handshake } from 'lucide-react';

export default function CAFECASlide13() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden flex flex-col justify-center border border-neutral-800 text-white">

      {/* Info: (20260319 - Luphia) Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-cyan-500/10 to-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 px-24 h-full flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm">Vision & Next Steps</span>
        </div>

        <h2 className="text-6xl font-black text-white leading-tight mb-4">
          驅動未來的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">群集智能</span>
        </h2>
        <p className="text-xl text-slate-300 font-light mb-10 max-w-4xl border-l-4 border-cyan-500/50 pl-6 shadow-[-10px_0_20px_-10px_rgba(6,182,212,0.2)]">
          我們致力於讓 AI 算力如同水電般普及，打造一個由無數專業「數位蜜蜂」共同構建的無限智能力量。
        </p>

        <div className="grid grid-cols-12 gap-8">

          {/* Info: (20260319 - Luphia) Roadmap */}
          <div className="col-span-12 md:col-span-7 flex flex-col">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-200">
              <Network size={20} className="text-cyan-400" /> Roadmap 發展路線 (9 Months)
            </h3>

            <div className="flex-1 bg-neutral-800/50 rounded-3xl p-6 border border-neutral-700 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Target size={150} />
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-16 text-right font-mono font-bold text-amber-500 text-sm">2026 Q2</div>
                  <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  <div className="flex-1 text-slate-300 text-[15px] group-hover:text-white transition-colors">
                    完成 <strong>5000 up</strong> 節點邊緣網格運算架構與測試。
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-16 text-right font-mono font-bold text-cyan-400 text-sm">2026 Q3</div>
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                  <div className="flex-1 text-slate-300 text-[15px] group-hover:text-white transition-colors">
                    深度整合 <strong>FAITH</strong>, <strong>Gemini</strong>, <strong>Claude</strong> LLM 模型，實現邊緣/雲端無縫動態調度。
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-16 text-right font-mono font-bold text-emerald-400 text-sm">2026 Q4</div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                  <div className="flex-1 text-slate-300 text-[15px] group-hover:text-white transition-colors">
                    正式上線 <strong>Nectar Store</strong> 技能生態系，開放全球開發者上傳模型模組。
                  </div>
                </div>
              </div>

              {/* Info: (20260319 - Luphia) Connecting line */}
              <div className="absolute left-[111px] top-10 bottom-10 w-0.5 bg-neutral-700 z-0"></div>
            </div>
          </div>

          {/* Info: (20260319 - Luphia) Call to Action */}
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-6 text-slate-200">
              <Handshake size={20} className="text-amber-500" /> Invite to Collaborate
            </h3>

            <div className="flex-1 bg-gradient-to-tr from-amber-600 to-orange-500 rounded-3xl p-6 shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                <Globe2 size={240} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h4 className="text-3xl font-black text-white leading-tight mb-3">
                  Join the<br />Hive Network.
                </h4>
                <p className="text-orange-100 font-medium mb-auto leading-relaxed text-sm">
                  我們正在尋求 <strong>種子輪 (Seed Round) 戰略投資</strong>，以及對於導入 AI 算力有龐大需求的 <strong>企業級 PoC 共創夥伴</strong>。
                </p>

                <div className="mt-5 flex items-center gap-3 text-white font-bold bg-black/20 w-fit px-5 py-2.5 rounded-xl border border-white/20 hover:bg-black/40 transition-colors cursor-pointer backdrop-blur-md">
                  Let&apos;s Talk <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-20 right-20 flex justify-between items-center text-slate-500 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
          2026 iSunCloud Inc.
        </div>
        <div>iSunCloud Pitch Deck</div>
      </div>
    </div>
  );
}
