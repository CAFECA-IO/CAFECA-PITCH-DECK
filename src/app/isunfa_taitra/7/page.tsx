'use client';

import { BookOpen, CheckSquare, Activity, RotateCcw, ShieldCheck } from 'lucide-react';

export default function TaitraSlide7() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex items-center justify-between">
          <div>
            <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">Step 1 Verification</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟一檢核：AI 自我檢驗與信心度評估
            </h2>
            <p className="text-slate-500 mt-2 text-lg">透過注入專業會計準則，賦予 AI 自行設計測驗與反思錯誤的能力。</p>
          </div>
          <ShieldCheck className="w-16 h-16 text-sky-200" />
        </div>

        <div className="flex-1 px-16 z-10 mt-8 flex flex-col gap-6">
          
          <div className="flex gap-6 h-full pb-12">
            {/* Knowledge Injection */}
            <div className="w-1/3 bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative flex flex-col">
              <div className="flex items-center gap-3 mb-4 text-sky-400">
                <BookOpen size={24} />
                <h3 className="text-xl font-bold">1. 注入結構化知識</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">任務執行前，限定 AI 僅能參考以下範圍：</p>
              
              <div className="space-y-4 flex-1">
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-sky-300 text-sm mb-1">IFRS / GAAP 會計準則</h4>
                  <p className="text-xs text-slate-400">第 15 號「客戶合約之收入」與「營業費用分類規範」。</p>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  <h4 className="font-bold text-sky-300 text-sm mb-1">在地稅務法規</h4>
                  <p className="text-xs text-slate-400">統一發票使用辦法、營業稅法 (5% 稅額計算)。</p>
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
                      [借貸平衡檢驗] 檢查擷取之明細項目加總，是否嚴格等於憑證總金額？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▪</span>
                      [稅額邏輯檢驗] 銷售額 × 5% 是否等於稅額 (容許進位誤差)？
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">▪</span>
                      [會計科目合規] 該品項對應之會計科目，是否落於 GAAP 營業費用表內？
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
                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="62.8" className="text-rose-500" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">75%</div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="bg-rose-950/40 p-3 rounded-lg border border-rose-900/50">
                        <p className="text-sm text-rose-200"><span className="font-bold text-rose-400">觸發條件：</span> 信心度 &lt; 90% (加總出現 1 塊錢誤差)</p>
                      </div>
                      <div className="bg-amber-950/40 p-3 rounded-lg border border-amber-900/50 flex items-center gap-2">
                        <RotateCcw className="text-amber-400 w-5 h-5" />
                        <p className="text-sm text-amber-200"><span className="font-bold text-amber-400">執行動作：</span> 拋棄本次幻覺生成，重啟微型任務，並要求 AI 重新校對稅額進位邏輯。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA TAITRA</div>
          <div className="font-mono">#07</div>
        </div>
      </div>
    </div>
  );
}
