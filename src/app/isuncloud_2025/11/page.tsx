import { LineChart, Database, Terminal, ShieldCheck } from 'lucide-react';

export default function CAFECASlide11() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden flex flex-col justify-center border border-neutral-800 text-white">

      {/* Info: (20260319 - Luphia) Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 px-24 h-full flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm">Applications</span>
        </div>

        <h2 className="text-5xl font-extrabold text-white leading-tight mb-16">
          殺手級應用場景
          <span className="text-3xl text-amber-500/80 font-light ml-4">Key Use Cases</span>
        </h2>

        <div className="grid grid-cols-3 gap-8 h-[360px]">

          {/* Info: (20260319 - Luphia) Card 1 */}
          <div className="bg-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-amber-500/50 shadow-2xl relative overflow-hidden group transition-all flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
              <LineChart size={32} className="text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">金融情報與高頻交易</h3>
            <p className="text-slate-400 leading-relaxed font-light mb-auto">
              <strong className="text-white font-normal">Scout (偵察蜂)</strong> 即時抓取全球報價與新聞情緒，成千上萬的 <strong className="text-white font-normal">Worker (工蜂)</strong> 並行執行複雜的蒙地卡羅技術分析，毫秒間發佈精準交易訊號。
            </p>
          </div>

          {/* Info: (20260319 - Luphia) Card 2 */}
          <div className="bg-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-cyan-500/50 shadow-2xl relative overflow-hidden group transition-all flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
              <Database size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">PB 級巨量資料解析</h3>
            <p className="text-slate-400 leading-relaxed font-light mb-auto">
              將海量非結構化資料 (Big Data) 碎片化，分發至全球邊緣節點。同步進行分散式資料清洗、特徵工程與分析，徹底打破單一資料庫的 I/O 瓶頸。
            </p>
          </div>

          {/* Info: (20260319 - Luphia) Card 3 */}
          <div className="bg-neutral-950 rounded-[2rem] p-8 border border-neutral-800 hover:border-emerald-500/50 shadow-2xl relative overflow-hidden group transition-all flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 border border-neutral-800 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
              <Terminal size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">AIOps 自動化維運</h3>
            <p className="text-slate-400 leading-relaxed font-light mb-auto">
              混合蜂群 24/7 不間斷監控企業 IT 基礎設施。透過微服務神經網路預測潛在故障節點，在系統崩潰前自動溢流或啟動無人干預的自癒機制。
            </p>
          </div>

        </div>

      </div>

      {/* Info: (20260319 - Luphia) Footer */}
      <div className="absolute bottom-8 left-24 right-24 flex justify-between items-center text-slate-600 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-amber-500" />
          Real-world Impact
        </div>
        <div>iSunCloud Pitch Deck</div>
      </div>
    </div>
  );
}
