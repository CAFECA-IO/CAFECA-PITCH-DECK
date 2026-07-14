'use client';

import { Database, FileSpreadsheet, Percent } from 'lucide-react';

export default function TaitraSlide9() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            ISO 14067 Step 2
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            ISO 14067 步驟 (2/4)：生命週期清查分析 (LCI)
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            數據收集與分析階段。收集所有納入系統邊界內的活動數據與對應的碳排係數。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Primary Data */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileSpreadsheet className="text-emerald-500" /> 1. 初級數據收集
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                針對企業能直接控制或影響的過程，**必須優先收集現場一手量測的初級數據**。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">要求規範</span>
              <p className="text-xs text-slate-700 font-medium">例如工廠電錶度數、燃料耗用量、原料實際採購重。時間需覆蓋連續至少 12 個月。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Secondary Data */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-sky-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Database className="text-sky-500" /> 2. 次級數據應用
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                引用權威第三方資料庫或官方公告之碳排係數。數據必須經品質矩陣評級，評估是否合規。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">DQR 品質評分</span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                次級數據需經 <strong>DQR 評級</strong>（評分 1-5），包含 5 大維度：技術 (TeR)、地理 (GR)、時間代表性 (TiR)、完整性 (C) 與精確性 (P)。
              </p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Allocation */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Percent className="text-indigo-500" /> 3. 分配與回收原則
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                處理多種聯產品（如副產碎金屬）及使用回收料/廢棄物再利用時，須遵循嚴格邊界劃分。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">聯產品與回收分配</span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                * 分配順序：優先避免分配 &gt; 物理分配 (質量) &gt; 經濟分配。<br />
                * 回收分配：回收料與廢棄物之生命週期邊界劃分，需遵循 PCR 的切斷法 (Cut-off) 或避讓法處理。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#09</div>
        </div>
      </div>
    </div>
  );
}
