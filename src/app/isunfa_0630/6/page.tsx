'use client';

import { BookOpen, RefreshCw, BarChart3, Brain, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function CafecaFaithSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-green-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-mono text-green-600 uppercase tracking-widest">AI Carbon Calculation</span>
      </div>

      {/* Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col px-8 relative">
        
        {/* Top Header Area */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-200 shadow-sm mx-auto">
            <RefreshCw className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">SOP 步驟三：帳務與碳排計算 (Accounting & Carbon Calculation)</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            如何透過 AI 完成{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">帳務與碳排計算？</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            將企業財務憑證即時轉化為碳排放記錄。AI 內建合規計算引擎，支援國際財務準則與碳排標準的一鍵無縫轉換。
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          
          {/* Left Column: AI Mechanism (5/12 width) */}
          <div className="col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-1">
              <Brain className="w-4.5 h-4.5 text-green-600" />
              AI 智慧計算與轉換流程
            </h3>

            {/* Step 1 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 1
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">財務與碳帳雙軌勾稽</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動連結 ERP 會計憑證與碳排放因子，記帳即計碳，同步生成財務明細帳與碳排明細帳。
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 2
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">IFRS 與 GAAP 智慧對照</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                支援國際財務報導準則（IFRS）與在地會計準則（GAAP）轉換，自動調節碳資產之會計科目表達。
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 3
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">ISO 與 GHG 雙標準轉換</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                數據一鍵切換，在 ISO 14064-1 的六大類別與 GHG Protocol 的三大範疇 (Scope 1/2/3) 間自動對應。
              </p>
            </div>

            {/* Step 4 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 4
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">動態分配與產品碳足跡</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                根據產品產量、機器工時動態分攤範疇二與三之折合碳排，精準計算單一產品碳足跡 (PCF)。
              </p>
            </div>
          </div>

          {/* Right Column: AI vs Manual Comparison Table (7/12 width) */}
          <div className="col-span-7 bg-white border border-slate-200 shadow-md rounded-2xl p-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-green-600" />
              AI 碳排計算 vs 傳統人工優勢對比
            </h3>

            <div className="overflow-hidden border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-1/4">比較維度</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-3/8">傳統人工計算 (Manual)</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-green-600 bg-green-50/50 w-3/8">AI 智慧計算 (AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      雙軌勾稽
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      財務帳與碳帳各自獨立，需以人工比對，極難對齊。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      憑證輸入時自動建立雙向連結，100% 同源且不漏單。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      會計準則對接
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      人工手動調整 GAAP 與 IFRS 合規科目，流程繁複。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      內建翻譯引擎，會計準則對接與調節表自動產製。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                      碳標準轉換
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      標準變更時，所有單據必須重新手動分類與算碳。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      底層資料庫架構一鍵轉換 ISO 與 GHG 分類，免除重算。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-slate-400" />
                      分配計算
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      使用固定比例分攤間接排碳，無法反映動態生產變化。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      結合工時與排程數據動態分攤，高精度產出單品碳排。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      可審計性
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      計算邏輯隱藏在龐雜的 Excel 公式中，稽核困難。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      所有計算因子與公式均可一鍵追溯到原始會計憑證。
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
