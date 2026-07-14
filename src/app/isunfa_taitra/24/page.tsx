'use client';

import { ShieldCheck, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

export default function TaitraSlide22() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

        <div className="px-16 pt-16 z-10 flex justify-between items-start">
          <div>
            <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
              Step 2: AI Hallucination & Defense
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
              步驟二(下)幻覺：綠色漂洗 (低估碳係數) 問題與防護
            </h2>
            <p className="text-slate-500 mt-2 text-lg">
              解析 AI 「綠色漂洗」的迎合型幻覺，以及如何通過系統邊界強制校正來維持合規底線。
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
                <AlertTriangle size={24} /> AI 的「綠色漂洗 (Greenwashing)」匹配
              </h3>
              <p className="text-sm text-rose-700 leading-relaxed">
                當遇到界定不清的物料時，**LLM 會傾向於配對「碳排放係數最低」的候選資料**。這是因為在大模型訓練偏好 (RLHF) 中，低碳與節能是正面反饋。AI 會試圖「取悅」用戶，隱性美化產品碳排數據。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-rose-100">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">查證爆雷</span>
              <p className="text-xs text-slate-500 leading-relaxed">這在第三方查證時會被視為刻意低估排放（即「櫻桃效應/綠色漂白」），導致聲明書核發被直接否決。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Column: The Defense */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl relative h-[360px] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-emerald-800 flex items-center gap-2 mb-4">
                <ShieldCheck size={24} className="text-emerald-500" /> RAG 系統邊界與 PCR 強制對照
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                在 RAG 階段即鎖定了該產業 的 **PCR (產品類別規則)** 計算邊界。
              </p>
              <ul className="space-y-2 text-xs text-slate-500 leading-relaxed">
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">▪</span> <strong>檢索候選清單限定</strong>：AI 只能從經過 PCR 篩選的候選係數中挑選，斷絕低係數美化的可能。</li>
                <li className="flex gap-2"><span className="text-emerald-500 font-bold">▪</span> <strong>來源追溯透明揭露</strong>：報告書中自動鏈接至碳係數資料庫的出處與版本，接受查證官檢視。</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
              <Cpu className="text-emerald-500 w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-800">PCR 系統防衛線</h4>
                <p className="text-[10px] text-slate-500">以行業合規邊界，防範 AI 的主觀臆測，維持 100% 真實數據。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#22</div>
        </div>
      </div>
    </div>
  );
}
