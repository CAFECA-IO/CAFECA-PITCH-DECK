'use client';

import { FileText, Sparkles, Brain, ShieldCheck, Languages, LayoutTemplate, BarChart3 } from 'lucide-react';

export default function CafecaFaithSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-xs font-mono text-indigo-500 uppercase tracking-widest">AI Report Generation</span>
      </div>

      {/* Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col px-8 relative">
        
        {/* Top Header Area */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-indigo-200 shadow-sm mx-auto">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-semibold text-indigo-700">SOP 步驟四：報告撰寫 (Report Drafting)</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            如何透過 AI 自動完成{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">合規報告書撰寫？</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            碳盤查報告的書寫需要極高專業度與繁重排版。AI 報告撰寫模組能自動對接多國法規格式，一鍵生成合規之中英文報告書。
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          
          {/* Left Column: AI Mechanism (5/12 width) */}
          <div className="col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-1">
              <Brain className="w-4.5 h-4.5 text-indigo-600" />
              AI 智慧報告撰寫流程
            </h3>

            {/* Step 1 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 1
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">法規範本智慧媒合</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動對接國內外最新碳揭露標準，載入 ISO 14064-1、GHG Protocol 等標準報告範本。
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 2
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">數據圖表自動渲染</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                將計算出的邊界與活動數據自動渲染為標準格式圖表與矩陣表格，省去人工排版時間。
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 3
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">AI 合規文本智慧生成</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動撰寫不確定性分析、顯著性評估說明及排除條款等專業論述文字，確保合規性。
              </p>
            </div>

            {/* Step 4 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 4
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">雙語報告一鍵生成</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                結合永續領域大模型，一鍵將整份報告轉譯為標準之中英文雙語版本，無縫對接跨國稽核。
              </p>
            </div>
          </div>

          {/* Right Column: AI vs Manual Comparison Table (7/12 width) */}
          <div className="col-span-7 bg-white border border-slate-200 shadow-md rounded-2xl p-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-indigo-600" />
              AI 報告撰寫 vs 傳統人工優勢對比
            </h3>

            <div className="overflow-hidden border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-1/4">比較維度</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-3/8">傳統人工報告 (Manual)</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-indigo-600 bg-indigo-50/50 w-3/8">AI 智慧報告 (AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <LayoutTemplate className="w-3.5 h-3.5 text-slate-400" />
                      格式合規性
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      仰賴顧問查對舊範本，極易因條文更新而造成格式錯漏。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-indigo-50/30 leading-relaxed">
                      雲端實時更新各國範本，確保格式 100% 符最新標準。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
                      數據與圖表
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      手動從 Excel 複製圖表貼至 Word，圖表不一致且耗時排版。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-indigo-50/30 leading-relaxed">
                      計算數據與圖表自動同源渲染，徹底告別手動對齊排版。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5 text-slate-400" />
                      合規文字
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      需顧問人工撰寫大篇幅分析論述，品質參差不齊。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-indigo-50/30 leading-relaxed">
                      AI 基於標準準則庫，秒級產出專業、合規且精準的文本論述。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Languages className="w-3.5 h-3.5 text-slate-400" />
                      雙語翻譯
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      外包翻譯社耗時一週以上，且永續專有名詞翻譯易出錯。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-indigo-50/30 leading-relaxed">
                      內建永續專業詞庫大模型，秒級導出精準中英雙語報告。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      版控變更
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      數據修改時，全書所有對應表單都必須手動更正，極易漏改。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-indigo-50/30 leading-relaxed">
                      「一動全動」，數據修改後全書自動重新生成，版本永久同步。
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
