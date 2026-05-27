'use client';

import { FileWarning, EyeOff, LayoutGrid, FileText, ArrowRightLeft } from 'lucide-react';

export default function TaitraSlide25() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Step 3: Practical Obstacles
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            步驟三(中)困難：長文本報告前後文不一致與格式跑版問題
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            碳盤查研究報告書動輒上萬字，傳統單一 Prompt 大模型在長篇生成中存在極大侷限。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Card 1: Account Context Drift */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ArrowRightLeft className="text-indigo-500" /> 1. 長文本前後語意漂移
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                在一次性生成長篇報告時，AI 常在「前言定義」中寫明採用 Cradle-to-Gate (搖籃到大門)，卻在報告後半段的「物流分銷」章節突然計入消費者使用階段碳排，產生邏輯斷裂。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <FileWarning className="text-indigo-500 w-4 h-4 flex-shrink-0" />
              <span>這將導致報告完全無法通過查證官的合規審查。</span>
            </div>
          </div>

          {/* Card 2: Layout Break */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-sky-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <LayoutGrid className="text-sky-500" /> 2. Markdown 格式破裂
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                巨量長文本在輸出到中後半段時，AI 極易因為 token 長度上限或生成速率限制，漏掉關閉 HTML/Markdown 標籤或 JSON 大括號，導致整份報告排版跑馬燈或跑版。
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100 flex items-center gap-2 text-xs text-sky-700">
              <EyeOff className="text-sky-500 w-4 h-4 flex-shrink-0" />
              <span>表格對齊破損、排版跑版，會降低報告的專業程度。</span>
            </div>
          </div>

          {/* Card 3: Data Omission */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="text-emerald-500" /> 3. 清查清冊數據遺漏
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                碳盤查有數十個製程排放源，在超長文生成中，大模型常會面臨「Lost in the middle (注意力丟失)」的缺陷，在彙整總表時，悄悄遗漏某些次要原料的排放明細。
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex items-center gap-2 text-xs text-slate-700">
              <FileWarning className="text-emerald-500 w-4 h-4 flex-shrink-0" />
              <span>數據遺漏將觸發查證的不合規判定，面臨退件。</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#25</div>
        </div>
      </div>
    </div>
  );
}
