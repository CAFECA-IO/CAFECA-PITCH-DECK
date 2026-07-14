'use client';
/* eslint-disable @next/next/no-img-element */

import { BookOpen, ShieldCheck } from 'lucide-react';

export default function TaitraSlide18() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
              Step 1 Verification
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">
              步驟一(下)檢核：結構化知識注入與會計借貸平衡自評 Prompt
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何注入專業領域知識，引導 AI 像專業會計師一樣對解析出來的傳票進行嚴密勾稽？
            </p>
          </div>
          <ShieldCheck className="w-16 h-16 text-sky-200" />
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Block: ChatGPT Mockup (7 cols) */}
          <div className="col-span-7 bg-[#181717] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[340px]">
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
                  請核對憑證的會計合規性：驗證 5% 營業稅額是否精確，並判斷科目歸類是否合法（例：汽油發票應歸為「旅費/燃料費」而非「水電費」）。
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
                  Structured Assistant Response (GAAP)
                </div>
                <pre className="whitespace-pre-wrap leading-normal font-mono">
                  {`{\n  "audit_passed": true,\n  "tax_verified": "OK (25000 * 5% = 1250)",\n  "account_mapping": {\n    "item": "瓦楞紙箱",\n    "mapped_code": "5108",\n    "account_name": "包裝費",\n    "rationale": "符合營業費用分類準則，判定為包裝材料用途。"\n  }\n}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: Structured Knowledge (5 cols) */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <BookOpen className="text-sky-600" /> 1. 注入結構化領域知識
            </h3>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-sky-950 text-sm mb-1">IFRS / GAAP 會計準則限制</h4>
              <p className="text-xs text-slate-500 leading-relaxed">限制 AI 僅能參考財務公報第 15 號之「客戶合約之收入」與「營業費用分類規範」，杜絕科目自由發揮。</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-sky-950 text-sm mb-1">在地稅務法規限制</h4>
              <p className="text-xs text-slate-500 leading-relaxed">限定套用我國「統一發票使用辦法」、「營業稅法」，確保進項稅額與應納稅額計算完全合規。</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#18</div>
        </div>
      </div>
    </div>
  );
}
