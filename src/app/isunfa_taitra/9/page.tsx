'use client';

import { Activity, Target, Zap, TrendingDown, Layers } from 'lucide-react';

export default function TaitraSlide7() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            LCA Value & Hotspot Analysis
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            碳足跡意義 (3/3)：生命週期評估 (LCA) 對企業的價值
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            碳盤查不只是為了應付合規，更是企業檢視生產效率、降低能耗與進行製程改良的強大管理工具。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Block: LCA Hotspots (7 cols) */}
          <div className="col-span-7 bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden h-fit">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold flex items-center gap-3 text-indigo-400 mb-6">
              <Target /> 精準捕捉「碳排放熱點 (Hotspots)」
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              生命週期評估 (LCA) 能夠將產品從「搖籃到大門」的製程進行**斷面化剖析**，清晰列出原材料採購、製程熱能、電力耗用及物流運輸各環節的碳排佔比。
            </p>
            <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <Layers className="text-indigo-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">數據驅動的製程優化</h4>
                  <p className="text-xs text-slate-400 mt-0.5">例如：某鋼鐵大廠透過 LCA 發現，其 75% 的碳排來自上游特定鐵礦砂原料，而非工廠用電，進而針對採購策略進行綠色調整。</p>
                </div>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <Zap className="text-amber-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">避免「盲目減碳」的資源浪費</h4>
                  <p className="text-xs text-slate-400 mt-0.5">許多企業在未做 LCA 之前，盲目投資汰換辦公室節能燈泡，卻忽略了主要能耗發生在特定高溫熔煉爐。LCA 指引高回報的綠色資本投入。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: Practical Value (5 cols) */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Activity className="text-indigo-600" /> 轉化為實質的管理效益
            </h3>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="text-emerald-500 w-5 h-5" />
                <h4 className="font-bold text-slate-800 text-lg">降低生產與能耗成本</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                碳盤查過程揭露了隱藏的原料浪費、待機用電黑洞與多餘的包材使用，直接推動企業進行降本增效。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <Target className="text-indigo-500 w-5 h-5" />
                <h4 className="font-bold text-slate-800 text-lg">生態設計與產品綠色升級</h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                利用 LCA 數據在研發設計階段進行材料替代分析，推出本質低碳、甚至碳中和的創新產品。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#07</div>
        </div>
      </div>
    </div>
  );
}
