'use client';

import { Target, Layout, ShieldAlert } from 'lucide-react';

export default function TaitraSlide8() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            ISO 14067 Step 1
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            ISO 14067 步驟 (1/4)：目的與範圍界定 (Goal & Scope)
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            產品碳足跡盤查的基石，必須在量化前嚴格定義計算的標的與覆蓋範圍。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Card 1: Functional Unit */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-sky-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Target className="text-sky-500" /> 1. 功能單位 (FU)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                所有碳足跡數據必須以此**可量化的基準單位**進行折算與呈現，確保未來比較時的公正性。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">案例範例</span>
              <p className="text-xs text-slate-700 font-medium">「生產 1 公噸特定等級之不鏽鋼材」或「使用 1 小時之雲端運算服務」。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 2: System Boundary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Layout className="text-emerald-500" /> 2. 系統邊界
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                繪製生命週期流程圖，定義哪些「單元過程」必須納入計算邊界，哪些被排除。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">邊界劃分</span>
              <p className="text-xs text-slate-700 font-medium">
                * B2B 採用「搖籃到大門 (Cradle-to-Gate)」<br />
                * B2C 採用「搖籃到墳墓 (Cradle-to-Grave)」
              </p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 3: Cut-off Criteria */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden h-[360px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-rose-500" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <ShieldAlert className="text-rose-500" /> 3. 排除準則 (Cut-off)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                排除次要輸入必須透明揭露。此外，機器設備、廠房建設等資本財，依 PCR 規範可合規排除但須合理論證。
              </p>
            </div>
            <div className="bg-rose-50 rounded-xl p-4 border border-rose-100">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1">排除與資本財</span>
              <p className="text-xs text-rose-700 font-medium leading-relaxed">
                * 項目排除：單一排除 &lt; 1% 且總排除 &lt; 5% 限制線。<br />
                * 資本財排除：符合 PCR 下可合規排除基礎設施，但須於報告書中透明揭露與科學論證。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#08</div>
        </div>
      </div>
    </div>
  );
}
