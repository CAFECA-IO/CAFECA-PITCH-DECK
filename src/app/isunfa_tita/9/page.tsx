'use client';

import { Database, CheckSquare, Activity, RotateCcw, ShieldCheck } from 'lucide-react';

export default function TITASlide9() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex items-center justify-between">
          <div>
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">Step 2 Verification</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟二檢核：碳係數精準度自我評估
            </h2>
            <p className="text-slate-500 mt-2 text-lg">確保 AI 選擇的碳係數版本與邊界符合國際標準，杜絕「綠色漂洗 (Greenwashing)」。</p>
          </div>
          <ShieldCheck className="w-16 h-16 text-emerald-200" />
        </div>

        <div className="flex-1 px-16 z-10 mt-8 flex flex-col gap-6">
          
          <div className="flex gap-6 h-full pb-12">
            {/* Knowledge Injection */}
            <div className="w-1/3 bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <Database size={24} />
                <h3 className="text-xl font-bold">1. 注入結構化知識</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">任務執行前，限定 AI 僅能檢索合法資料庫：</p>
              
              <div className="space-y-4 flex-1">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">環境部碳係數庫 6.0.4 版</h4>
                  <p className="text-xs text-slate-400">確保引用最新之本土電力與原物料排放係數。</p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">Ecoinvent 3.9 / ISO 14064-1</h4>
                  <p className="text-xs text-slate-400">規範範疇一(直接)、範疇二(間接)、範疇三(供應鏈) 之系統邊界定義。</p>
                </div>
              </div>
            </div>

            {/* AI Auto Inspection & Confidence */}
            <div className="w-2/3 flex flex-col gap-6">
              
              <div className="flex gap-6 h-1/2">
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-sky-600">
                    <CheckSquare size={24} />
                    <h3 className="text-xl font-bold">2. AI 自主設計檢驗項目</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">▪</span>
                      [系統邊界檢驗] 選用之碳係數是否涵蓋「搖籃到大門 (Cradle-to-Gate)」之要求？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">▪</span>
                      [單位換算檢驗] 憑證單位 (如公升) 轉換為係數單位 (如公噸) 的乘數是否正確？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold">▪</span>
                      [時效性檢驗] 係數發布年份是否符合或接近憑證發生年度，避免引用過期係數？
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 h-1/2">
                <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 shadow-sm text-white">
                  <div className="flex items-center gap-3 mb-4 text-amber-400">
                    <Activity size={24} />
                    <h3 className="text-xl font-bold">3. 信心度評估與重做機制</h3>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-center relative">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-700" />
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="105.5" className="text-amber-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">58%</div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="bg-amber-950/40 p-3 rounded-lg border border-amber-900/50">
                        <p className="text-sm text-amber-200"><span className="font-bold text-amber-400">觸發條件：</span> 信心度 &lt; 85% (遇到模糊品項「塑膠包材」，無法確定為 PP 或 PE)</p>
                      </div>
                      <div className="bg-emerald-950/40 p-3 rounded-lg border border-emerald-900/50 flex items-center gap-2">
                        <RotateCcw className="text-emerald-400 w-5 h-5 flex-shrink-0" />
                        <p className="text-sm text-emerald-200"><span className="font-bold text-emerald-400">執行動作：</span> 暫停寫入，觸發「Human-in-the-loop」，提供信心度最高的前三筆係數交由人類專家決策。</p>
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
          <div className="font-mono">#09</div>
        </div>
      </div>
    </div>
  );
}
