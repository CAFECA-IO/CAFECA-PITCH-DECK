'use client';

import { ShieldCheck, BrainCircuit, Sparkles } from 'lucide-react';

export default function TaitraSlide2() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        {/* Background gradient blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        {/* Slide Header */}
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            What You Will Learn
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            你將學到什麼？
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-4xl">
            深入掌握產品碳足跡盤查的國際合規知識，以及如何透過 AI 關鍵技術落地，全面賦能綠色轉型。
          </p>
        </div>

        {/* Content Body: 3-column learning outcomes */}
        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-6 pb-12 items-center">

          {/* Card 1: ISO 14067 Compliance */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden h-[380px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1. AI 快速獲取新知</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                運用 AI 作為專屬學習助理，在最短時間內跨入陌生的碳盤查與法規領域。
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">▪</span>
                  <span><strong>概念白話文翻譯</strong>：將艱澀難懂的 ISO 14067 條文轉化為易懂的商業邏輯。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">▪</span>
                  <span><strong>法規精準速讀術</strong>：快速解析上百頁的標準文件，提煉出「能做與不能做」的合規紅線。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">▪</span>
                  <span><strong>專屬領域知識庫</strong>：透過資料餵養與提示技巧，打造您的 24 小時隨身顧問。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold mt-0.5">▪</span>
                  <span><strong>稽核情境對答演練</strong>：模擬 SGS 等第三方查證機構的提問，強化實戰應對能力。</span>
                </li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider border-t border-slate-100 pt-3">
              PHASE 01: AI ASSISTED LEARNING
            </div>
          </div>

          {/* Card 2: Autonomous AI Agents */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden h-[380px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">2. AI 代理完成任務</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                認識 AI Agent 的自主執行能力，將繁瑣的資料處理與碳盤查運算流程全面自動化。
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">▪</span>
                  <span><strong>多模態資料萃取</strong>：自動辨識並解析來自 PDF、圖片或表單的非結構化原始憑證。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">▪</span>
                  <span><strong>碳係數智慧映射</strong>：利用向量檢索 (RAG) 從巨量資料庫中精準媒合最適當的碳排係數。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">▪</span>
                  <span><strong>自動化邏輯運算</strong>：代理程式自主執行跨單位換算與乘載計算，徹底排除人工試算錯誤。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 font-bold mt-0.5">▪</span>
                  <span><strong>端到端報告生成</strong>：從清理原始數據，到一鍵產出符合 ISO 規範的碳足跡報告書。</span>
                </li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider border-t border-slate-100 pt-3">
              PHASE 02: AUTONOMOUS AI AGENTS
            </div>
          </div>

          {/* Card 3: AI Hallucination Defense */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative overflow-hidden h-[380px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-sky-500" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl border border-sky-100">
                  <BrainCircuit size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">3. AI 幻覺防禦</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                學習如何利用硬核的駕馭工程（Harness Engineering）突破 AI 幻覺與落地瓶頸。
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold mt-0.5">▪</span>
                  <span><strong>多模態物理加總驗證</strong>：阻斷 AI 對財務憑證數值的虛構。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold mt-0.5">▪</span>
                  <span><strong>RAG 檢索與 PCR 鎖定</strong>：杜絕低估係數的綠色漂洗風險。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold mt-0.5">▪</span>
                  <span><span><strong>Chained Agents 生成</strong>：分段組裝長文本報告，解決跑版問題。</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold mt-0.5">▪</span>
                  <span><strong>人機協同 (HITL) 覆核</strong>：信心度評估與微任務安全覆核。</span>
                </li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono tracking-wider border-t border-slate-100 pt-3">
              PHASE 03: HARNESS ENGINEERING
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#02</div>
        </div>
      </div>
    </div>
  );
}
