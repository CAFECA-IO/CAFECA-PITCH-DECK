'use client';

import { ShieldCheck, Sparkles, Brain, Clock, Link2, Search, ActivitySquare } from 'lucide-react';

export default function CafecaFaithSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260629 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">AI Audit Readiness</span>
      </div>

      {/* Info: (20260629 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col px-8 relative">
        
        {/* Info: (20260629 - Luphia) Top Header Area */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm mx-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">SOP 步驟五：內容查證 (Content Verification)</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            如何透過 AI 完成{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">內容查證與持續審計？</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            第三方機構查證是碳盤查的最終考驗。AI 透過「持續審計」機制與憑證鏈結，徹底免除查證前夕的混亂，確保數據 100% 通過稽核。
          </p>
        </div>

        {/* Info: (20260629 - Luphia) Two Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          
          {/* Info: (20260629 - Luphia) Left Column: AI Mechanism (5/12 width) */}
          <div className="col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-1">
              <Brain className="w-4.5 h-4.5 text-emerald-600" />
              AI 智慧查證與持續審計流程
            </h3>

            {/* Info: (20260629 - Luphia) Step 1 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 1
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">憑證軌跡自動錨定</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動將每筆碳排數據鎖定對應之會計憑證（發票、收據），建立不可篡改的鏈結。
              </p>
            </div>

            {/* Info: (20260629 - Luphia) Step 2 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 2
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">智慧合理性檢核</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                動態對比歷史能耗與行業基準，自動篩選並標記異常值，預先排除人工計算或錄入錯誤。
              </p>
            </div>

            {/* Info: (20260629 - Luphia) Step 3 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 3
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">持續審計與即時預檢</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                系統全年無休進行持續審計，自動生成符合 SGS、BSI 等機構規範之稽核工作底稿。
              </p>
            </div>

            {/* Info: (20260629 - Luphia) Step 4 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 4
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">數位查證通道開放</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                為外部稽核員開放專屬唯讀數位通道，支援遠端抽查與一鍵追溯，大幅縮短實地查核天數。
              </p>
            </div>
          </div>

          {/* Info: (20260629 - Luphia) Right Column: AI vs Manual Comparison Table (7/12 width) */}
          <div className="col-span-7 bg-white border border-slate-200 shadow-md rounded-2xl p-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-emerald-600" />
              AI 內容查證 vs 傳統人工優勢對比
            </h3>

            <div className="overflow-hidden border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-1/4">比較維度</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-3/8">傳統人工查證 (Manual)</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-emerald-600 bg-emerald-50/50 w-3/8">AI 智慧查證 (AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ActivitySquare className="w-3.5 h-3.5 text-slate-400" />
                      審計模式
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      每年一次的突擊式盤點，查證前夕全體加班趕工整理單據。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-emerald-50/30 leading-relaxed">
                      全年無休**持續審計 (Continuous Auditing)**，隨時維持就緒狀態。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-slate-400" />
                      憑證整理
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      紙本單據散落各處，稽核抽樣時常翻箱倒櫃找不到正本。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-emerald-50/30 leading-relaxed">
                      每筆碳數據自動關聯並錨定電子憑證，隨抽隨現。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      異常排查
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      稽核實地抽查時才發現計算錯誤，導致重複修改與延宕。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-emerald-50/30 leading-relaxed">
                      AI 實時交叉檢驗異常與漏報，在盤查中即時自動導正。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      稽核效率
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      外部稽核員需現場駐點查核數天，溝通與複查成本高昂。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-emerald-50/30 leading-relaxed">
                      開放唯讀數位通道進行遠端預審，縮短 70% 現場查證天數。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      數據可信度
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      人工調整與試算表痕跡多，稽核員對真實性容易持保留態度。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-emerald-50/30 leading-relaxed">
                      具備防篡改系統軌跡與完整稽核留痕，第三方極度信任。
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
