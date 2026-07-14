'use client';

import Image from 'next/image';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export default function TaitraSlide24() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-indigo-600 font-bold tracking-[0.2em] text-sm uppercase bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
              Step 3: CFP Report Writing
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
              步驟三(上)實作：一鍵生成符合 ISO 14067 報告書 Prompt
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何以嚴密的主導稽核員語氣，命令 AI 將碳清冊數據結構化撰寫為合規的 CFP 研究報告？
            </p>
          </div>
          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg h-fit border border-indigo-100">
            <FileText size={24} />
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
                  <span className="text-[9px] text-indigo-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block animate-pulse" />
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
                <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mb-1">User Prompt (ISO 14067 Request)</div>
                <p className="leading-relaxed">
                  你是一位 ISO 14067 產品碳足跡資深主導稽核官。請依據清查數據：
                  <strong className="text-indigo-400 block mt-1">「功能單位 1 噸鋼板。範疇 1: 2.15 t CO2e, 範疇 2: 0.85 t CO2e, 範疇 3: 0.12 t CO2e。」</strong>
                  撰寫 LCIA（生命週期影響評估）章節。必須嚴格勾稽，小數點不得有誤差，排除微量項目小於 1%！
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Assistant Response Bubble */}
              <div className="self-start max-w-[85%] bg-[#202020] border border-neutral-800 text-neutral-200 p-3 rounded-2xl rounded-tl-sm shadow-md font-sans text-[10px]">
                <div className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Image src="/images/twai_logo_color.png" alt="TWAI Logo" width={56} height={28} className="w-14 h-7 object-contain object-left inline-block mr-1.5" />
                  Structured Assistant Response (Markdown)
                </div>
                <div className="space-y-1.5 mt-1 text-[9px] leading-relaxed text-neutral-300">
                  <p className="font-bold text-white text-[10px] border-b border-neutral-800 pb-0.5">### 4.0 生命週期影響評估 (LCIA)</p>
                  <p>本研究功能單位為 **1 噸鋼板**。依據清查結果，產品碳足跡總計為 **3.12 t CO2e**：</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-neutral-400">
                    <li>範疇 1 (直接排放): **2.15 t CO2e** (68.91%)</li>
                    <li>範疇 2 (能源間接): **0.85 t CO2e** (27.24%)</li>
                    <li>範疇 3 (其他間接): **0.12 t CO2e** (3.85%)</li>
                  </ul>
                  <p className="text-[8px] text-emerald-400">【排除聲明】本製程已排除行政用電及包材微量膠水（總質量佔比 0.23% &lt; 1%），符合 ISO 排除閥值規範。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: Capabilities (5 cols) */}
          <div className="col-span-5 space-y-5">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="text-indigo-500" /> 一鍵產出與自動排版
            </h3>
            
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <CheckCircle2 className="text-indigo-500 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">標準化合規結構</h4>
                <p className="text-xs text-slate-500 mt-1">自動按照 ISO 14067 格式，生成包括產品功能單位、系統邊界流程、數據品質等級評估 (DQR) 等完整研究報告書。</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <CheckCircle2 className="text-indigo-500 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">無痛對接查證</h4>
                <p className="text-xs text-slate-500 mt-1">產出的 Markdown 格式可一鍵轉為 PDF，表格、數據對齊嚴密，直接呈報第三方稽核員現場查證。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#24</div>
        </div>
      </div>
    </div>
  );
}
