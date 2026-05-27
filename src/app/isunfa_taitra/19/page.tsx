'use client';

import { ShieldAlert, Cpu, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function TaitraSlide17() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-950/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-rose-400 font-bold tracking-[0.2em] text-sm uppercase bg-rose-950 px-4 py-1.5 rounded-full border border-rose-900/50">
              Step 1: AI Hallucination & Defense
            </span>
            <h2 className="text-4xl font-extrabold text-white mt-4">
              步驟一(下)幻覺：數值與單位虛構問題及其物理防禦
            </h2>
            <p className="text-slate-400 mt-2 text-lg">
              揭露 AI 在處理財務憑證時的「惡意貼心」幻覺，以及 CFV AI AGENT 的硬核數值約束防禦機制。
            </p>
          </div>
          <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-400">
            <ShieldAlert size={28} />
          </div>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Left Column: The Hallucination */}
          <div className="bg-rose-950/20 border border-rose-900/50 p-8 rounded-2xl relative h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-rose-300 flex items-center gap-2 mb-4">
                <AlertTriangle size={24} /> AI 的「數字整容」幻覺
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                當多模態 AI 對發票中的明細行數字提取不精準，導致明細加總與發票右下角的「含稅總額」出現 1 到 2 元的微小偏差時，**AI 為了完成「平衡」指令，會主動捏造或微調其中一個品項的單價或小數點**。
              </p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-rose-900/30">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">致命後果</span>
              <p className="text-xs text-slate-400 leading-relaxed">這種「完美的假帳」極具隱蔽性，將直接導致報稅與碳申報出現合規漏洞，甚至可能觸發稅務欺詐稽核。</p>
            </div>
          </div>

          {/* Right Column: The Defense */}
          <div className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-2xl relative h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-indigo-300 flex items-center gap-2 mb-4">
                <ShieldCheck size={24} className="text-emerald-400" /> CFV AI AGENT 確定性「物理防禦」
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                我們**絕不依賴 LLM 的數學計算**。在接收到 AI 解析的原始明細後，於沙盒中運行確定性的計算器進行加總驗證。
              </p>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li className="flex gap-2"><span className="text-emerald-400 font-bold">▪</span> <strong>100% 物理加總核對</strong>：重新計算明細加總，與總額差額超過 0.01 即刻阻斷。</li>
                <li className="flex gap-2"><span className="text-emerald-400 font-bold">▪</span> <strong>科目匹配庫強校正</strong>：調取供應商歷史採購品類結構，覆蓋 AI 的科目模糊歸類。</li>
              </ul>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-900/30 flex items-center gap-3">
              <Cpu className="text-emerald-400 w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-200">確定性驗證層 (Validation Layer)</h4>
                <p className="text-[10px] text-slate-500">在 LLM 外部建立「防火牆」，將模糊的文字轉化為確定性的數學守恆。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#17</div>
        </div>
      </div>
    </div>
  );
}
