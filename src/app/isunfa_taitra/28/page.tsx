'use client';

import { ShieldCheck, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

export default function TaitraSlide26() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
              Step 3: AI Hallucination & Defense
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
              步驟三(下)幻覺：指標衝突、數據漏列與重複計算防範
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              剖析長篇報告中的「數值前後打架」幻覺，以及如何通過分段式 Agent 勾稽鏈路實現全面防禦。
            </p>
          </div>
          <div className="p-3 bg-rose-50 text-rose-600 rounded-lg h-fit border border-rose-100">
            <ShieldAlert size={24} />
          </div>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Column: The Hallucination */}
          <div className="bg-rose-50 border border-rose-150 p-8 rounded-2xl relative h-[360px] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-rose-800 flex items-center gap-2 mb-4">
                <AlertTriangle size={24} /> AI 的「數據前後矛盾」幻覺
              </h3>
              <p className="text-sm text-rose-700 leading-relaxed">
                在撰寫超長報告時，**AI 經常在摘要中寫明產品碳足跡為「3.12 kg CO2e」，卻在製程附表中計算出「3.15 kg CO2e」**。大模型無法動態進行全篇文本的跨章節數學勾稽，導致關鍵績效指標 (KPI) 前後打架。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-100">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">查證爆雷</span>
              <p className="text-xs text-slate-500 leading-relaxed">查證官（如 BSI 查驗員）審核時，會極其嚴格地進行前後數據勾稽。任何超過 0.01 的數字打架，均會直接判定為「重大不合規」。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Column: The Defense */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl relative h-[360px] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 flex items-center gap-2 mb-4">
                <ShieldCheck size={24} className="text-emerald-500" /> CFV AI AGENT 分段式 Agent 鏈 (Chained Agents)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                我們**絕不由單一 Prompt 生成整份長報告**。而是將報告拆解為 8 個專門子模組。
              </p>
              <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">▪</span> <strong>微型 Agent 分工</strong>：範疇定義、原料清冊、不確定性分析等由專屬小 Agent 分段生成。</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">▪</span> <strong>總勾稽 Agent 機制</strong>：最後由「勾稽校對 Agent」重新提取全篇所有數值，運行確定性核對。</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
              <Cpu className="text-emerald-500 w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">Chained Agents 架構</h4>
                <p className="text-[10px] text-slate-500">以模組化與總稽核鏈路，根除大模型長文本數字丟失與衝突瓶頸。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#26</div>
        </div>
      </div>
    </div>
  );
}
