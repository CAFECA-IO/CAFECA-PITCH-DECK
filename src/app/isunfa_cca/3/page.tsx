'use client';

import { ArrowRight, Database, Calculator, FileCheck2, ScanLine } from 'lucide-react';

export default function CCASlide3() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase">Solution Architecture</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
            核心解法：財務與碳排雙軌並進的 AI 引擎
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-3xl">一套憑證，兩套帳本。將企業日常的「財務記帳」直接轉化為「碳盤查數據」，實現無痛合規。</p>
        </div>

        <div className="flex-1 px-16 z-10 flex flex-col justify-center mt-8 pb-12">

          {/* Pipeline Diagram */}
          <div className="flex items-center justify-between gap-4">

            {/* Step 1 */}
            <div className="flex-1 bg-white border-2 border-slate-200 rounded-2xl p-6 text-center shadow-sm relative">
              <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4">
                <ScanLine size={32} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">1. 原始憑證匯入</h3>
              <p className="text-sm text-slate-500">發票、收據、進口報單</p>
            </div>

            <ArrowRight className="text-slate-300 w-8 h-8 flex-shrink-0" />

            {/* Step 2 */}
            <div className="flex-1 bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 text-center shadow-sm relative transform scale-105">
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-4">
                <Database size={32} />
              </div>
              <h3 className="font-bold text-sky-900 text-lg mb-2">2. AI 智能解析與雙軌入帳</h3>
              <p className="text-sm text-sky-700">擷取品項、金額、數量<br />自動生成財務傳票</p>
            </div>

            <ArrowRight className="text-slate-300 w-8 h-8 flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex-1 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center shadow-sm relative">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <Calculator size={32} />
              </div>
              <h3 className="font-bold text-emerald-900 text-lg mb-2">3. 碳係數自動換算</h3>
              <p className="text-sm text-emerald-700">對應環境部碳係數<br />計算範疇一、二、三碳排</p>
            </div>

            <ArrowRight className="text-slate-300 w-8 h-8 flex-shrink-0" />

            {/* Step 4 */}
            <div className="flex-1 bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-6 text-center shadow-sm relative">
              <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                <FileCheck2 size={32} />
              </div>
              <h3 className="font-bold text-indigo-900 text-lg mb-2">4. 產出報告與 DPP</h3>
              <p className="text-sm text-indigo-700">ISO 14064-1 報告<br />數位產品護照 (DPP)</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 氣候變遷署</div>
          <div className="font-mono">#03</div>
        </div>
      </div>
    </div>
  );
}
