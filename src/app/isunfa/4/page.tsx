'use client';

import { Target, Sparkles, Brain, Clock, ShieldCheck, AlertCircle, RefreshCw, Scissors } from 'lucide-react';

export default function CafecaFaithSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260701 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">AI Boundary Setting</span>
      </div>

      {/* Info: (20260701 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col px-8 relative">
        
        {/* Info: (20260701 - Luphia) Top Header Area */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm mx-auto">
            <Target className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-semibold text-orange-600">SOP 步驟一：邊界設定 (Boundary Setting)</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            如何透過 AI 快速完成{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">邊界設定與範疇界定？</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            邊界設定是碳盤查的核心起點。AI 將傳統繁瑣的組織審查、範疇分類與排除判定自動化，比起人工能省下數週時間。
          </p>
        </div>

        {/* Info: (20260701 - Luphia) Two Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          
          {/* Info: (20260701 - Luphia) Left Column: AI Mechanism (5/12 width) */}
          <div className="col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-1">
              <Brain className="w-4.5 h-4.5 text-orange-500" />
              AI 智慧設定流程
            </h3>

            {/* Info: (20260701 - Luphia) Step 1 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 1
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">股權結構自動串接</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                串接商工登記 API 與集團財務報表，自動建構持股樹狀圖，精確推算控制權與股權比例。
              </p>
            </div>

            {/* Info: (20260701 - Luphia) Step 2 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 2
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">營運範疇智慧判定</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                識別跨國子公司與生產廠房，依據控制權法 (Control Approach) 自動劃定營運控制邊界。
              </p>
            </div>

            {/* Info: (20260701 - Luphia) Step 3 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 3
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">溫室氣體範疇分類</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                依 ISO 14064-1 將營運活動精準分類至 Scope 1 直接排放、Scope 2 能源間接排放、Scope 3 價值鏈排放。
              </p>
            </div>

            {/* Info: (20260701 - Luphia) Step 4 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-purple-50 text-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 4
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">切斷原則智慧判定</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動評估顯著性門檻。若特定排放源（如員工通勤）估計佔比極低，AI 建議予以切斷排除，聚焦關鍵項目。
              </p>
            </div>
          </div>

          {/* Info: (20260701 - Luphia) Right Column: AI vs Manual Comparison Table (7/12 width) */}
          <div className="col-span-7 bg-white border border-slate-200 shadow-md rounded-2xl p-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-green-600" />
              AI 邊界設定 vs 傳統人工優勢對比
            </h3>

            <div className="overflow-hidden border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-1/4">比較維度</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-3/8">傳統人工設定 (Manual)</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-orange-600 bg-orange-50/50 w-3/8">AI 智慧設定 (AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      作業時間
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      跨部門往返核對，人工檢視報表，需耗時 2~4 週。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-orange-50/30 leading-relaxed">
                      API 自動撈取股權與營運數據，秒級完成。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
                      控制權判定
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      複雜持股結構易算錯、重覆計算或遺漏子公司。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-orange-50/30 leading-relaxed">
                      持股樹自動勾稽，100% 覆蓋，避免合規漏洞。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-slate-400" />
                      切斷原則判定
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      顧問憑經驗估算，耗費時間收集無效益的微小數據。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-orange-50/30 leading-relaxed">
                      依同業基準顯著性分析，自動排除極低占比項目（如員工通勤）。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                      標準應變力
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      法規或設定原則變更（如切換控制權法），需全盤重做。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-orange-50/30 leading-relaxed">
                      一鍵切換控制權法與股權比例法，數據自動重算。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      稽核軌跡
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      設定與判定依據散落於 Excel 與信件會議記錄中。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-orange-50/30 leading-relaxed">
                      完整記錄設定依據與法規引用邏輯，外部稽核一鍵即現。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
