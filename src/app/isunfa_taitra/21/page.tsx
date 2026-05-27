'use client';

import { Activity, RotateCcw, ShieldCheck, CheckSquare } from 'lucide-react';

export default function TaitraSlide19() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-amber-600 font-bold tracking-[0.2em] text-sm uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
              Step 1 Verification
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟一(下)檢核：信心度評估與重做機制
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何建立嚴謹的自評分數機制，確保低信心度產出在寫入總帳前被即時攔截？
            </p>
          </div>
          <Activity className="w-16 h-16 text-amber-200" />
        </div>

        <div className="flex-1 px-16 z-10 mt-8 flex flex-col gap-6">
          <div className="flex gap-6 h-full pb-12 items-center">
            
            {/* Left Column: List of Checks */}
            <div className="w-1/2 space-y-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
                <CheckSquare className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800">AI 自主設計多維度檢驗項目</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    在知識庫引導下，AI 會生成自我勾稽程式：比對明細金額之和是否完全與發票總價相等；校對 5% 營業稅；核對會計科目分類合法性。
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
                <ShieldCheck className="text-sky-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-slate-800">輸出信心度分數評級</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    系統對每一個解析欄位給予 0%-100% 的機率自評。任何一項檢驗不通過（如加總差 1 塊錢），信心分數將被強制降為低於 90% 臨界值。
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Retry Loop */}
            <div className="w-1/2 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white shadow-xl h-[340px] flex flex-col justify-between">
              <div className="flex items-center gap-3 text-amber-400">
                <RotateCcw className="animate-spin-slow" size={24} />
                <h3 className="text-xl font-bold">自評重做與反思引擎 (Self-Correction Loop)</h3>
              </div>
              
              <div className="flex items-center gap-6 my-4">
                <div className="text-center relative flex-shrink-0">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-800" />
                    <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="213.5" strokeDashoffset="53.4" className="text-rose-500" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-base">75%</div>
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-900/40">
                    <p className="text-xs text-rose-200"><span className="font-bold text-rose-400">攔截臨界：</span> 信心分數 &lt; 90% (觸發警報)</p>
                  </div>
                  <div className="bg-amber-950/40 p-3 rounded-lg border border-amber-900/40">
                    <p className="text-xs text-amber-200"><span className="font-bold text-amber-400">防護措施：</span> 系統自動拋棄本次幻覺數據，拒絕對接總帳，並重啟微型解析任務要求重新校對。</p>
                  </div>
                </div>
              </div>

              <div className="text-sky-400 text-xs font-semibold text-center border-t border-slate-800 pt-3">
                💡 雙重物理加算與自評回饋，確保步驟一產出 100% 正確率。
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#19</div>
        </div>
      </div>
    </div>
  );
}
