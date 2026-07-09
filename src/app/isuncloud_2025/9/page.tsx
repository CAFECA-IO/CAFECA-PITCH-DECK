import { ShoppingBag, Box, DownloadCloud, Coins, Hexagon } from 'lucide-react';

export default function CAFECASlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden flex flex-col justify-center border border-neutral-800 text-white">

      {/* Info: (20260319 - Luphia) Decorative Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-amber-500/5 -skew-x-12 transform translate-x-20 pointer-events-none"></div>

      <div className="relative z-10 px-24 h-full flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm">Ecosystem</span>
        </div>

        <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
          技能生態系：Nectar Store
          <span className="block text-xl text-amber-500/80 font-light mt-2">The App Store for AI Swarms</span>
        </h2>

        <div className="flex gap-12">

          <div className="flex-1 space-y-4">

            {/* Info: (20260319 - Luphia) Point 1 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700 flex items-start gap-4 hover:border-amber-500/50 transition-colors group">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
                <Box size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5">動態擴充庫 (Dynamic Repository)</h3>
                <p className="text-sm text-slate-400 leading-normal font-light">
                  集中託管成千上萬的微調模型 (LoRA)、資料爬蟲腳本與 API 串接工具，涵蓋金融、醫療、製造等垂直領域知識。
                </p>
              </div>
            </div>

            {/* Info: (20260319 - Luphia) Point 2 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700 flex items-start gap-4 hover:border-sky-500/50 transition-colors group">
              <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors shrink-0">
                <DownloadCloud size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5">隨插即用 (Plug & Play)</h3>
                <p className="text-sm text-slate-400 leading-normal font-light">
                  當蜂群遭遇未知任務時，Worker 節點可瞬間從 Nectar Store 下載並熱裝備新技能，賦予 AI 代理無限延展性。
                </p>
              </div>
            </div>

            {/* Info: (20260319 - Luphia) Point 3 */}
            <div className="bg-neutral-800/50 rounded-2xl p-5 border border-neutral-700 flex items-start gap-4 hover:border-emerald-500/50 transition-colors group">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                <Coins size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5">開發者共創分潤 (Creator Economy)</h3>
                <p className="text-sm text-slate-400 leading-normal font-light">
                  鼓勵全球開發者上架獨創的技能模組。每當模組被蜂群調用時，開發者將自動獲得按次計費的代幣分潤，形成正向循環。
                </p>
              </div>
            </div>

          </div>

          <div className="w-[400px] flex items-center justify-center relative">
            <div className="w-full aspect-square bg-gradient-to-tr from-amber-500/20 to-neutral-900 rounded-full blur-3xl absolute pointer-events-none"></div>
            <div className="relative z-10 w-[300px] h-[450px] bg-neutral-950 border border-neutral-700 rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center">
              <ShoppingBag size={56} className="text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
              <div className="w-full text-center border-b border-neutral-800 pb-5 mb-5">
                <h4 className="font-bold text-xl text-white mb-1">Nectar Store</h4>
                <p className="text-xs text-slate-500">Available Skills</p>
              </div>
              <div className="w-full space-y-4">
                <div className="h-14 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center px-4 gap-4">
                  <Hexagon size={18} className="text-sky-400" />
                  <div className="flex-1">
                    <div className="h-2 w-20 bg-slate-600 rounded"></div>
                    <div className="h-1.5 w-12 bg-slate-700 rounded mt-1.5"></div>
                  </div>
                  <div className="text-[11px] text-amber-500 font-mono">+1.5c</div>
                </div>
                <div className="h-14 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center px-4 gap-4">
                  <Hexagon size={18} className="text-emerald-400" />
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-slate-600 rounded"></div>
                    <div className="h-1.5 w-16 bg-slate-700 rounded mt-1.5"></div>
                  </div>
                  <div className="text-[11px] text-amber-500 font-mono">+0.8c</div>
                </div>
                <div className="h-14 bg-neutral-800 rounded-xl border border-neutral-700 flex items-center px-4 gap-4">
                  <Hexagon size={18} className="text-rose-400" />
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-slate-600 rounded"></div>
                    <div className="h-1.5 w-10 bg-slate-700 rounded mt-1.5"></div>
                  </div>
                  <div className="text-[11px] text-amber-500 font-mono">+2.1c</div>
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
          AI App Store
        </div>
        <div>iSunCloud Pitch Deck</div>
      </div>
    </div>
  );
}
