'use client';

import Image from 'next/image';
import { Sparkles, FileCode, CheckCircle2 } from 'lucide-react';

export default function TaitraSlide15() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-950/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-sky-400 font-bold tracking-[0.2em] text-sm uppercase bg-sky-950 px-4 py-1.5 rounded-full border border-sky-900/50">
              Step 1: AI Data Ingestion
            </span>
            <h2 className="text-4xl font-extrabold text-white mt-4">
              步驟一(上)實作：多模態 AI 憑證自動解析與 OCR Prompt
            </h2>
            <p className="text-slate-400 mt-2 text-lg">
              如何下達精準的 Prompt 指令，使多模態 LLM 完美提取發票明細並以標準 JSON 格式輸出？
            </p>
          </div>
          <div className="p-3 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400">
            <Sparkles size={28} />
          </div>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Block: ChatGPT Mockup (7 cols) */}
          <div className="col-span-7 bg-[#171717] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[340px]">
            {/* Info: (20260527 - Luphia) Header */}
            <div className="bg-[#202020] px-4 py-2 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Image src="/images/twai_logo_color.png" alt="TWAI Logo" width={128} height={64} className="w-32 h-16 object-contain object-left" />
                <div className="text-left">
                  <span className="text-xs font-semibold text-neutral-200 block leading-tight">CFV AI AGENT</span>
                  <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
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
                <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mb-1">User Prompt (System Request)</div>
                <p className="leading-relaxed">
                  請解析上傳的發票圖片，提取品項、數量與金額。要求輸出為 JSON Schema。
                  <strong className="text-amber-400 block mt-1">【嚴格守恆律】明細加總必須等於小計，小計加上 5% 稅額必須等於總計。如不平衡，不得自創數據！</strong>
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Assistant Response Bubble */}
              <div className="self-start max-w-[85%] bg-[#202020] border border-neutral-800 text-neutral-200 p-3 rounded-2xl rounded-tl-sm shadow-md font-mono text-[10px]">
                <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider mb-1 font-sans flex items-center gap-1.5">
                  <Image src="/images/twai_logo_color.png" alt="TWAI Logo" width={56} height={28} className="w-14 h-7 object-contain object-left inline-block mr-1.5" />
                  Structured Assistant Response (JSON)
                </div>
                <pre className="whitespace-pre-wrap leading-normal font-mono">
                  {`{\n  "items": [\n    { "name": "瓦楞紙箱", "quantity": 1000, "unit": "個", "amount": 25000 }\n  ],\n  "subtotal": 25000,\n  "tax": 1250,\n  "total": 26250,\n  "verification_flag": true\n}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: Capabilities (5 cols) */}
          <div className="col-span-5 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FileCode className="text-sky-400" /> 多模態解析核心能力
            </h3>
            
            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex gap-3 items-start">
              <CheckCircle2 className="text-sky-400 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-200 text-sm">混合憑證識別支援</h4>
                <p className="text-xs text-slate-400 mt-1">完美相容電子發票 XML、PDF 電子憑證，以及相機拍攝的紙本發票與手寫收據。</p>
              </div>
            </div>

            <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 flex gap-3 items-start">
              <CheckCircle2 className="text-sky-400 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-200 text-sm">深層明細擷取</h4>
                <p className="text-xs text-slate-400 mt-1">不僅辨識總金額，更能深入抓取品項名稱、採購數量、計量單位，為碳盤查提供一手活動數據。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#15</div>
        </div>
      </div>
    </div>
  );
}
