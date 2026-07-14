'use client';
/* eslint-disable @next/next/no-img-element */

import { Sparkles, Database, CheckCircle2 } from 'lucide-react';

export default function TaitraSlide20() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
              Step 2: Carbon Footprint Mapping
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
              步驟二(上)實作：RAG 向量檢索與碳係數自動配對 Prompt
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              如何藉由 RAG 檢索增強，將記帳品項精準對應至國家或國際認證的標準碳係數資料庫？
            </p>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit border border-emerald-100">
            <Database size={24} />
          </div>
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
                <div className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mb-1">User Prompt (RAG Factor Match)</div>
                <p className="leading-relaxed text-[11px]">
                  請將記帳品項「瓦楞紙箱」對應到 RAG 檢索出的碳排係數庫：<br/>
                  1. Corrugated board box, 0.85 kg CO2e/kg (MOENV 2025)<br/>
                  2. Cultural paper, 1.21 kg CO2e/kg (ecoinvent v3.9)<br/>
                  選擇最符合材料特性的係數，並回傳信心度評估。
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Assistant Response Bubble */}
              <div className="self-start max-w-[85%] bg-[#202020] border border-neutral-800 text-neutral-200 p-3 rounded-2xl rounded-tl-sm shadow-md font-mono text-[10px]">
                <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider mb-1 font-sans flex items-center gap-1.5">
                  <img 
                    src="/images/twai_logo_color.png" 
                    alt="TWAI Logo" 
                    className="w-14 h-7 object-contain object-left inline-block mr-1.5"
                  />
                  Structured Assistant Response (JSON)
                </div>
                <pre className="whitespace-pre-wrap leading-normal font-mono text-[9px]">
                  {`{\n  "matched_factor": "Corrugated board box (MOENV 2025)",\n  "emission_factor": 0.85,\n  "unit": "kg CO2e/kg",\n  "confidence_score": 0.98,\n  "pcr_boundary": "Cradle-to-Gate",\n  "rationale": "品項材料特徵及生命週期邊界 100% 精準吻合。"\n}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Block: RAG (5 cols) */}
          <div className="col-span-5 space-y-5">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="text-emerald-500" /> RAG 向量配對機制
            </h3>
            
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">限制 LLM 自創能力</h4>
                <p className="text-xs text-slate-500 mt-1">我們從不相信 AI 的記憶。在配對前，系統先在 Vector DB 檢索出環境部、Ecoinvent 等資料庫的前 5 筆候選資料，強迫 AI 只能從中選擇。</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start">
              <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
              <div>
                <h4 className="font-bold text-slate-800 text-sm">語義相似度關聯</h4>
                <p className="text-xs text-slate-500 mt-1">運用高維度 Embedding 模型計算語義相似度，克服商品代稱與資料庫標準名稱不一致的盲點。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#20</div>
        </div>
      </div>
    </div>
  );
}
