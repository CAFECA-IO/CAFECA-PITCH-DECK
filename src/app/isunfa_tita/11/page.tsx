'use client';

import { FileText, CheckSquare, Activity, ShieldCheck } from 'lucide-react';

export default function TITASlide11() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex items-center justify-between">
          <div>
            <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">Step 3 Verification</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟三檢核：報告完整性與平衡邏輯自評
            </h2>
            <p className="text-slate-500 mt-2 text-lg">財報與碳盤查報告輸出的最終守門員，確保數據結構嚴密無死角。</p>
          </div>
          <ShieldCheck className="w-16 h-16 text-indigo-200" />
        </div>

        <div className="flex-1 px-16 z-10 mt-8 flex flex-col gap-6">
          
          <div className="flex gap-6 h-full pb-12">
            {/* Knowledge Injection */}
            <div className="w-1/3 bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-indigo-400">
                <FileText size={24} />
                <h3 className="text-xl font-bold">1. 注入結構化知識</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">任務執行前，載入國際財務與永續報告書格式標準：</p>
              
              <div className="space-y-4 flex-1">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-indigo-300 text-sm mb-1">IFRS 9 / GAAP 財報編製準則</h4>
                  <p className="text-xs text-slate-400">資產負債表之會計恆等式規範，損益表之結轉原則。</p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-indigo-300 text-sm mb-1">ISO 14064-1 / ISO 14067</h4>
                  <p className="text-xs text-slate-400">溫室氣體聲明之結構要求，以及產品碳足跡盤查清冊必備欄位。</p>
                </div>
              </div>
            </div>

            {/* AI Auto Inspection & Confidence */}
            <div className="w-2/3 flex flex-col gap-6">
              
              <div className="flex gap-6 h-1/2">
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-emerald-600">
                    <CheckSquare size={24} />
                    <h3 className="text-xl font-bold">2. AI 自主設計檢驗項目</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▪</span>
                      [財報平衡檢驗] 資產總額是否嚴格等於「負債總額 + 權益總額」？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▪</span>
                      [碳排分類檢驗] 範疇一、二、三的碳排總和是否完全窮盡所有來源，且無重複計算 (Double Counting)？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▪</span>
                      [審計軌跡檢驗] 所有盤查清冊中的碳排數值，是否皆具有指向原始憑證哈希值 (Hash) 的反向追蹤連結？
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 h-1/2">
                <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-sm text-white">
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <Activity size={24} />
                    <h3 className="text-xl font-bold">3. 信心度評估與重做機制</h3>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-center relative">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="0" className="text-emerald-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-emerald-400">100%</div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="bg-emerald-950/40 p-3 rounded-lg border border-emerald-900/50">
                        <p className="text-sm text-emerald-200"><span className="font-bold text-emerald-400">評估結果：</span> 恆等式成立，軌跡完整，無重複計算。</p>
                      </div>
                      <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 flex items-center gap-2">
                        <CheckSquare className="text-slate-400 w-5 h-5 flex-shrink-0" />
                        <p className="text-sm text-slate-300">執行動作：鎖定數據狀態，正式發布審計報表與數位產品護照 (DPP)。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 國際貿易署</div>
          <div className="font-mono">#11</div>
        </div>
      </div>
    </div>
  );
}
