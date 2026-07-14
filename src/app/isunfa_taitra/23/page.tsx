'use client';

import { Network, Database, ShieldAlert, GitCompare, MessageSquare } from 'lucide-react';

export default function TaitraSlide21() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
            Step 2: Practical Obstacles
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            步驟二(中)困難：多語意同義詞轉換與巨量資料庫檢索限制
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            碳係數資料庫種類繁多且命名邏輯各異，是 AI 語義理解與檢索工程的巨大障礙。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Card 1: Synonym Barrier */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GitCompare className="text-indigo-500" /> 1. 同義詞與多語系障礙
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                企業採購名單常使用產業俗稱（如「牛皮紙箱」），但官方國家碳係數庫登載名稱為「未漂白牛皮紙 (Kraft Paper)」。AI 若單純進行字面匹配，將產生極高錯誤率。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <MessageSquare className="text-indigo-500 w-4 h-4 flex-shrink-0" />
              <span>「A4 影印紙」必須映射至「非塗布文化紙」才能準確計算。</span>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 2: Database Token Overload */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-sky-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Database className="text-sky-500" /> 2. 巨量資料庫 Token 限制
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                環境部與國際權威 (Ecoinvent) 的碳排係數多達數萬筆。將整份資料庫一股腦塞進 Prompt 會超出 AI 的上下文 (Token) 限制，甚至導致 LLM 「注意力渙散」。
              </p>
            </div>
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100 flex items-center gap-2 text-xs text-sky-700">
              <ShieldAlert className="text-sky-500 w-4 h-4 flex-shrink-0" />
              <span>必須透過前置檢索器 (Retriever) 先行過濾出高關聯子集。</span>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 3: Specificity Gaps */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Network className="text-emerald-500" /> 3. 技術規格之細微差異
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                例如：採購單上寫「不鏽鋼」，但碳係數庫內區分「高溫冶煉不鏽鋼」、「再生鋼材不鏽鋼」等數十種製程，其排放係數相差數倍，AI 難以自行做出正確的技術規格判斷。
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100 flex items-center gap-2 text-xs text-slate-700">
              <ShieldAlert className="text-emerald-500 w-4 h-4 flex-shrink-0" />
              <span>缺乏明確參數時，AI 極易陷入猜測而偏離客觀製程事實。</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#21</div>
        </div>
      </div>
    </div>
  );
}
