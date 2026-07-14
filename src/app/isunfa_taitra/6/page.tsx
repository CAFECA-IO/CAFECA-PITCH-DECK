'use client';

import { Database, FileEdit, FileSearch, LineChart, BrainCircuit } from 'lucide-react';

export default function TaitraSlide5() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260527 - Luphia) Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 justify-between">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-xs uppercase bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">CFV AI Agent</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mt-3 tracking-wide leading-tight">
              AI 在碳盤查場景的五大核心適配能力
            </h2>
            <p className="text-slate-500 mt-2 text-sm max-w-4xl leading-relaxed">
              因應龐雜的碳足跡運算與供應鏈資料，AI 扮演著「自動化數位勞動力」的角色，將耗時的人工作業轉化為精準高效的機器流程。
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4">

            {/* Info: (20260527 - Luphia) Top Row: 3 Items */}
            <div className="flex gap-4 flex-1">
              {/* Info: (20260527 - Luphia) Data Organization */}
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full blur-2xl group-hover:bg-blue-100 transition-colors" />
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3 border border-blue-200 relative z-10">
                  <Database size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1 relative z-10">資料整理</h3>
                <h4 className="text-[10px] font-semibold text-blue-600 mb-2 relative z-10 uppercase tracking-wide">Data Organization</h4>
                <p className="text-slate-600 text-xs leading-relaxed relative z-10">
                  面對跨廠區、跨格式的異質性供應鏈數據，AI 能夠快速進行結構化清洗、正規化與歸戶，將混亂的原始數據轉為可分析的標準化格式。
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Data Entry */}
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full blur-2xl group-hover:bg-emerald-100 transition-colors" />
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-3 border border-emerald-200 relative z-10">
                  <FileEdit size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1 relative z-10">資料輸入</h3>
                <h4 className="text-[10px] font-semibold text-emerald-600 mb-2 relative z-10 uppercase tracking-wide">Automated Data Entry</h4>
                <p className="text-slate-600 text-xs leading-relaxed relative z-10">
                  結合多模態視覺模型 (Vision-Language Models)，自動辨識各類憑證、發票、收據與檢驗報告，並將數據精準輸入至碳會計系統，消除人為打字錯誤。
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Document Analysis */}
              <div className="flex-1 bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full blur-2xl group-hover:bg-purple-100 transition-colors" />
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3 border border-purple-200 relative z-10">
                  <FileSearch size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-1 relative z-10">文件分析</h3>
                <h4 className="text-[10px] font-semibold text-purple-600 mb-2 relative z-10 uppercase tracking-wide">Document Analysis</h4>
                <p className="text-slate-600 text-xs leading-relaxed relative z-10">
                  深入解讀複雜的 ISO 14067 法規文本、供應商聲明書及國際查證標準，自動提取關鍵合規性條款與生命週期邊界資訊。
                </p>
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Bottom Row: 2 Items */}
            <div className="flex gap-4 flex-1">
              {/* Info: (20260527 - Luphia) Quantitative Analysis */}
              <div className="flex-[4] bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full blur-2xl transition-colors" />
                <div className="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-lg flex items-center justify-center mb-3 border border-sky-500/30 relative z-10">
                  <LineChart size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-1 relative z-10">量化分析</h3>
                <h4 className="text-[10px] font-semibold text-sky-400 mb-2 relative z-10 uppercase tracking-wide">Quantitative Analysis</h4>
                <p className="text-slate-300 text-xs leading-relaxed relative z-10">
                  精準執行活動數據 (Activity Data) 與碳排係數 (Emission Factor) 的乘載運算、多單位的自動換算（如公斤、噸、度數），並自動勾稽數值邏輯，確保每一滴碳排都被準確量化，免除人工試算表的弊病。
                </p>
              </div>

              {/* Info: (20260527 - Luphia) Qualitative Analysis */}
              <div className="flex-[5] bg-amber-50 border border-amber-200 rounded-xl p-4 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-bl-full blur-2xl transition-colors" />
                <div className="flex items-start justify-between relative z-10">
                  <div className="w-10 h-10 bg-amber-200 text-amber-700 rounded-lg flex items-center justify-center mb-3 border border-amber-300">
                    <BrainCircuit size={20} />
                  </div>
                  <span className="bg-amber-100 text-amber-700 text-[9px] font-bold px-2 py-1 rounded border border-amber-300 shadow-sm">高度限制 (Highly Constrained)</span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1 relative z-10">質性分析 <span className="font-medium text-slate-500 text-xs ml-1">(少量適用)</span></h3>
                <h4 className="text-[10px] font-semibold text-amber-600 mb-2 relative z-10 uppercase tracking-wide">Qualitative Analysis</h4>
                <p className="text-slate-700 text-xs leading-relaxed relative z-10">
                  在極為嚴格的「防護欄 (Guardrails)」與提示工程限制下，針對供應鏈製程描述、碳盤查假設條件進行<span className="font-bold border-b-2 border-amber-300 mx-1">有限度</span>的質性推論。此設計可有效避免大語言模型產生幻覺 (Hallucinations)，確保碳足跡報告書論述的絕對合法性與客觀性。
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
