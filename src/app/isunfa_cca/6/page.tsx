'use client';

import { Sparkles, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function CCASlide6() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-400 font-bold tracking-[0.2em] text-sm uppercase">Step 1: AI Data Ingestion</span>
          <h2 className="text-4xl font-extrabold text-white mt-2">
            步驟一：AI 自動記帳與活動數據 (Activity Data) 辨識
          </h2>
        </div>

        <div className="flex-1 px-16 z-10 flex mt-12 gap-12 pb-16">
          {/* Left: The Ideal State */}
          <div className="w-1/2 flex flex-col">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-sky-500/20 rounded-xl">
                  <Sparkles className="text-sky-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">多模態 AI 萃取</h3>
              </div>
              <ul className="space-y-6 text-slate-300 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" />
                  <p>支援紙本發票、電子發票 (XML/PDF)、手寫收據的混合識別。</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" />
                  <p>不僅辨識總金額，更深入擷取<span className="text-sky-400 font-bold">品項明細、數量、單位</span> (如：電力 1000度、A4紙 50包)。</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 flex-shrink-0" />
                  <p>自動生成標準化 JSON 格式，直接對接 ERP 系統與 iSunFA 總帳。</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: The Hallucination Problem */}
          <div className="w-1/2 flex flex-col">
            <div className="bg-rose-950/30 border border-rose-900/50 rounded-2xl p-8 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertOctagon size={120} />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <CheckCircle2 className="text-emerald-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-200">駕馭工程：即時阻斷幻覺</h3>
              </div>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-slate-900/80 p-4 rounded-lg border border-emerald-900/50">
                  <h4 className="text-emerald-400 font-bold mb-2">數值與單位強制驗證</h4>
                  <p className="text-sm text-slate-400">系統拒絕單純的「LLM 猜測」。在辨識後，自動觸發微型任務驗證總金額與明細是否平衡，並核對單位邏輯，確保財稅數據無誤。</p>
                </div>
                
                <div className="bg-slate-900/80 p-4 rounded-lg border border-emerald-900/50">
                  <h4 className="text-emerald-400 font-bold mb-2">模糊品項的專屬知識比對</h4>
                  <p className="text-sm text-slate-400">當遇到「耗材一批」等模糊字眼，系統將自動調用企業過往採購紀錄與 IFRS 準則，進行嚴謹的科目歸類，不讓 AI 自由發揮。</p>
                </div>

                <div className="mt-6 border-t border-emerald-900/30 pt-4">
                  <p className="text-sky-400 font-medium">💡 無縫串接至下一步驟的自我評估機制，確保 100% 正確率。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 氣候變遷署</div>
          <div className="font-mono">#06</div>
        </div>
      </div>
    </div>
  );
}
