'use client';
/* eslint-disable @next/next/no-img-element */

import { CheckSquare, ShieldCheck, AlertCircle } from 'lucide-react';

export default function TaitraSlide27() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
              Step 3 Verification
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟三(下)檢核：跨表單程式化勾稽稽核與 5% 實質性偏差驗證
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何建立自動化稽核邏輯，確保生成報告在出廠前符合 ISO 國際查證的誤差要求？
            </p>
          </div>
          <ShieldCheck className="w-16 h-16 text-sky-200" />
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Block: ChatGPT Mockup (7 cols) */}
          <div className="col-span-7 bg-[#171717] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[340px]">
            {/* Info: (20260527 - Luphia) Header */}
            <div className="bg-[#202020] px-4 py-2 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/twai_logo_color.png" 
                  alt="TWAI Logo" 
                  className="w-32 h-16 object-contain object-left"
                />
                <div className="text-left">
                  <span className="text-xs font-semibold text-neutral-200 block leading-tight">CFV AI AGENT</span>
                  <span className="text-[9px] text-sky-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block animate-pulse" />
                    Model Active
                  </span>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-700" />
                <span className="w-2 h-2 rounded-full bg-neutral-700" />
                <span className="w-2 h-2 rounded-full bg-neutral-700" />
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Chat Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar-hide text-left flex flex-col justify-start">
              {/* Info: (20260527 - Luphia) User Prompt Bubble */}
              <div className="self-end max-w-[85%] bg-[#2f2f2f] text-neutral-100 p-3 rounded-2xl rounded-tr-sm shadow-md font-sans">
                <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mb-1">User Prompt (Audit Request)</div>
                <p className="leading-relaxed">
                  請執行產品碳足跡報告的跨表單勾稽稽核：<br />
                  1. 驗證 3.12 t CO2e 總值與範疇 1+2+3 加總是否 100% 吻合。<br />
                  2. 計算實質性偏差率是否低於 5.0% 的嚴格 ISO 閥值門檻。
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Assistant Response Bubble */}
              <div className="self-start max-w-[85%] bg-[#202020] border border-neutral-800 text-neutral-200 p-3 rounded-2xl rounded-tl-sm shadow-md font-mono text-[10px]">
                <div className="text-[9px] text-sky-400 font-bold uppercase tracking-wider mb-1 font-sans flex items-center gap-1.5">
                  <img 
                    src="/images/twai_logo_color.png" 
                    alt="TWAI Logo" 
                    className="w-14 h-7 object-contain object-left inline-block mr-1.5"
                  />
                  Structured Assistant Response (JSON)
                </div>
                <pre className="whitespace-pre-wrap leading-normal font-mono text-[9px]">
                  {`{\n  "audit_passed": true,\n  "discrepancy_check": {\n    "scope_summary": 3.12,\n    "scope_detail_sum": 3.12,\n    "absolute_error": 0.0,\n    "discrepancy_rate": "0.00%"\n  },\n  "materiality_status": "PASSED (0.00% < 5.0%)",\n  "audit_trail_status": "Ready for SHA-256 blockchain anchoring"\n}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: Verification Criteria (5 cols) */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <CheckSquare className="text-sky-600" /> 2. 5% 實質性偏差自評
            </h3>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <AlertCircle className="text-amber-500 flex-shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sky-950 text-sm mb-1">實質性偏差 (Materiality Level)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">在查證實務中，稽核官所發現的所有漏算、算錯的碳排放偏差比例總和不得超過 5%。若大於 5%，則報告被判定不合格。</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <ShieldCheck className="text-emerald-500 flex-shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-sky-950 text-sm mb-1">程式化自動勾稽</h4>
                <p className="text-xs text-slate-500 leading-relaxed">系統在產出前進行恆等式平衡校對，檢查原物料採購噸數、產品產出量、以及廢棄物量是否符合質量守恆，自動修正小數點尾數誤差。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#27</div>
        </div>
      </div>
    </div>
  );
}
