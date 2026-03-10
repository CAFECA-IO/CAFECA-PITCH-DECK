import { Sparkles, Building2, ArrowDown, Cpu } from 'lucide-react';

export default function CafecaFintechSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex flex-col overflow-hidden">

      {/* Info: (20260123) Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 w-full h-1/2 bg-sky-50"></div>
        <div className="absolute bottom-0 w-full h-1/2 bg-slate-900"></div>
      </div>

      {/* Info: (20260123) Header */}
      <div className="relative z-10 w-full px-16 pt-12 mb-8">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-1 bg-sky-600 rounded-full"></div>
          <span className="text-sky-700 font-bold tracking-[0.2em] uppercase text-sm">核心產品</span>
        </div>
        <h1 className="text-5xl font-extrabold text-slate-800 leading-tight">
          iSunFA
        </h1>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-16 pb-12 gap-8">

        {/* Info: (20260123) Top Card - The Surface */}
        <div className="w-full max-w-4xl bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex items-center gap-8 relative z-20 transform hover:-translate-y-1 transition-transform duration-500">
          <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
            <Sparkles size={40} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-1">表面價值</div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">人工智能碳會計軟體</h2>
            <p className="text-slate-500 text-lg leading-relaxed">由先進人工智能模型驅動的自動化會計審計、碳盤查、製程優化系統。</p>
          </div>
          <div className="text-right shrink-0">
            <span className="block text-4xl font-extrabold text-slate-200">10%</span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">可見效用</span>
          </div>
        </div>

        {/* Info: (20260123) Connector */}
        <div className="relative z-30 flex flex-col items-center justify-center text-white/80">
          <span className="text-xs font-mono font-bold tracking-widest mb-1 opacity-80">底層核心</span>
          <ArrowDown size={24} />
        </div>

        {/* Info: (20260310) Bottom Card - The Core Reality (Divided) */}
        <div className="w-full max-w-5xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col relative z-20 hover:scale-[1.01] transition-transform duration-500 ring-1 ring-white/10">

          <div className="absolute top-6 right-8 text-right shrink-0 opacity-40 z-0">
            <span className="block text-4xl font-extrabold text-white">90%</span>
            <span className="text-[10px] text-white font-medium uppercase tracking-wider">真實價值</span>
          </div>

          <div className="grid grid-cols-2 gap-8 relative z-10 pt-4">

            {/* Card 1: Green Tech */}
            <div className="flex items-start gap-5 pl-2">
              <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/30">
                <Cpu size={32} />
              </div>
              <div className="pr-4">
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight tracking-wide">先進綠色科技<br />推動引擎</h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  透過<span className="text-white font-medium">Green AI 智能引擎</span>，為企業持續評估技術更新可行性與潛在收益，為企業提供精準的減碳路徑與永續發展技術支撐同時建立牢不可破的技術護城河。
                </p>
              </div>
            </div>

            {/* Card 2: Bank Core */}
            <div className="flex items-start gap-5 relative border-l border-white/10 pl-6">
              <div className="w-16 h-16 bg-sky-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-sky-400 shrink-0 border border-sky-500/30">
                <Building2 size={32} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-1.5 py-0.5 rounded bg-sky-500/80 text-white text-[9px] font-bold uppercase tracking-wider">金融牌照賦能</div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-widest opacity-80">合規後上線</div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 leading-tight tracking-wide">銀行核心融資與<br />放款系統</h2>
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  透過財務分析技術實現<span className="text-white font-medium">銀行核心系統</span>，即時捕捉財務健康狀況，實現大規模放款審核，推動企業<span className="text-white font-medium">綠色製程更新</span>。
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="absolute bottom-6 right-12 text-white/20 text-[10px] font-mono z-10">
        CAFECA FINTECH • CORE PRODUCT
      </div>

    </div>
  );
}
