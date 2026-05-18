'use client';

import { FileBarChart2, ScrollText, CheckCircle } from 'lucide-react';

export default function TaitraSlide10() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase">Step 3: Auto-Generated Reports</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
            步驟三：一鍵生成財報與碳盤查報告
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-3xl">揮別每季/每年底的崩潰加班，從數據匯入到產出合規報告，全程自動化。</p>
        </div>

        <div className="flex-1 px-16 z-10 flex gap-12 mt-12 pb-16">
          
          <div className="w-1/2 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden group hover:border-sky-300 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <FileBarChart2 size={100} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <FileBarChart2 size={24} />
                </div>
                財務審計報告
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>自動結轉並生成資產負債表與損益表</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>符合商業會計法與 IFRS 國際財務報導準則</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>附帶 AI 解析過程的溯源連結，會計師查帳零死角</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 relative overflow-hidden group hover:border-emerald-300 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <ScrollText size={100} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                  <ScrollText size={24} />
                </div>
                ISO 14064-1 溫室氣體盤查報告
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>自動分類範疇一、範疇二、範疇三之排放源</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>動態計算與彙整，隨時匯出最新符合查證標準的清冊</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span>內建防呆機制，碳係數異常提報系統，避免無效查證</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA TAITRA</div>
          <div className="font-mono">#10</div>
        </div>
      </div>
    </div>
  );
}
