'use client';

import { BarChart3, Flame, Scale } from 'lucide-react';

export default function TaitraSlide10() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            ISO 14067 Step 3
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            ISO 14067 步驟 (3/4)：生命週期影響評估與解釋 (LCIA)
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            碳足跡量化計算與敏感度評估。將溫室氣體活動數據折算為二氧化碳當量，並做嚴謹釋意。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) GWP 100 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <BarChart3 className="text-indigo-500" /> 1. 全球暖化潛勢 (GWP 100)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                採用 IPCC 最新 100 年 GWP 係數折算。<strong>外部購買的碳抵消與碳權，絕對不得用於扣減產品碳足跡。</strong>
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">溫室氣體與碳抵消</span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                * 七大氣體：CO₂, CH₄, N₂O 等加權折算。<br />
                * <strong>抵消紅線</strong>：標準規定外部碳抵消（Offsets）<strong>不得</strong>用於抵扣產品碳足跡以宣稱碳中和。
              </p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Fossil vs Biogenic */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-rose-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Flame className="text-rose-500" /> 2. 化石碳與生物碳區分
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                報告中<strong>必須</strong>將化石燃料排放與生物來源（如木材）的碳排放與清除分開列表揭露。
              </p>
            </div>
            <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1">LUC 攤銷與生物碳儲存</span>
              <p className="text-xs text-rose-700 font-medium leading-relaxed">
                * dLUC 計算：直接土地利用變更需依 20 年線性均攤。<br />
                * 生物碳清除與儲存：生物碳排放與清除單獨列計；儲存期未滿 100 年有嚴格的計量扣減限制。
              </p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Sensitivity & Uncertainty */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Scale className="text-amber-500" /> 3. 敏感度與不確定性分析
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                評估關鍵假設（如能源結構選擇、原料分配方法）變更時對產品碳足跡結果產生的波動。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">報告穩健性</span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                透明呈現不確定性來源與佔比，確保碳足跡結論在不同參數配置下均具備高度可信度。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#10</div>
        </div>
      </div>
    </div>
  );
}
