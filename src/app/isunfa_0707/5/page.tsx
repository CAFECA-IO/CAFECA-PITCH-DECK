'use client';

import { Calculator, Search, MapPin, Brain, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function CafecaFaithSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260707 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-green-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-mono text-green-600 uppercase tracking-widest">AI Data Ingestion</span>
      </div>

      {/* Info: (20260707 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col px-8 relative">
        
        {/* Info: (20260707 - Luphia) Top Header Area */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-green-200 shadow-sm mx-auto">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">SOP 步驟二：數據收集與鑑別 (Data Collection & Identification)</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            如何透過 AI 完成{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">數據收集與智慧鑑別？</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
            數據收集是碳盤查中最繁重的工序。AI 智慧化解決了傳統人工收集單據、換算單位、查詢係數與驗證距離的巨大痛點。
          </p>
        </div>

        {/* Info: (20260707 - Luphia) Two Column Layout */}
        <div className="grid grid-cols-12 gap-6 items-start w-full">
          
          {/* Info: (20260707 - Luphia) Left Column: AI Mechanism (5/12 width) */}
          <div className="col-span-5 space-y-3">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-1">
              <Brain className="w-4.5 h-4.5 text-green-600" />
              AI 智慧收集與鑑別流程
            </h3>

            {/* Info: (20260707 - Luphia) Step 1 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 1
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">多源異質數據自動擷取</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                透過 OCR 與 NLP 技術，自動識別發票、電費單、加油卡等雜亂文件，免除人工手動登載之苦。
              </p>
            </div>

            {/* Info: (20260707 - Luphia) Step 2 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 2
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">自動單位與當量換算</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動辨識公升、度數、噸、公斤等異質單位，AI 依標準轉換公式自動完成當量標準化與換算。
              </p>
            </div>

            {/* Info: (20260707 - Luphia) Step 3 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 3
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">智慧語意係數查詢</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                自動檢索全球排放因子資料庫（如環境部、DEFRA 等），語意比對品名，精準配對最適係數。
              </p>
            </div>

            {/* Info: (20260707 - Luphia) Step 4 Card */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-xl relative hover:shadow-md transition-shadow">
              <div className="absolute top-3 right-4 bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Step 4
              </div>
              <h4 className="text-xs font-bold text-slate-800 mb-0.5">運輸距離自動查證</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                結合 GIS 與地圖 API 自動解析物流起訖點，驗證運輸距離，確保 Scope 3 運輸數據真實可靠。
              </p>
            </div>
          </div>

          {/* Info: (20260707 - Luphia) Right Column: AI vs Manual Comparison Table (7/12 width) */}
          <div className="col-span-7 bg-white border border-slate-200 shadow-md rounded-2xl p-5">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4.5 h-4.5 text-blue-600" />
              AI 數據收集 vs 傳統人工優勢對比
            </h3>

            <div className="overflow-hidden border border-slate-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-1/4">比較維度</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-slate-500 w-3/8">傳統人工設定 (Manual)</th>
                    <th className="py-2.5 px-3 text-xs font-bold text-green-600 bg-green-50/50 w-3/8">AI 智慧設定 (AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      數據錄入
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      人工逐筆登載，易出錯且耗時數月。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      批次 OCR 識別與 API 串接，秒級完成。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-slate-400" />
                      當量換算
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      人工翻查換算公式，容易因單位混亂而算錯。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      自動識別異質單位，自動完成標準化當量換算。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      係數查詢
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      手動於數萬筆因子庫中篩選，容易配錯產生合規風險。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      語意匹配引擎，毫秒級自動檢索並對應最新因子。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      運輸距離
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      手動利用地圖查詢起訖估算，繁瑣且難以查證。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      地圖 API 自動計算起訖物流路徑並存檔供後續稽核。
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      數據檢核
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-500 leading-relaxed">
                      人眼抽查，難以察記重複申報或中間漏報。
                    </td>
                    <td className="py-2.5 px-3 text-[11px] font-semibold text-slate-800 bg-green-50/30 leading-relaxed">
                      自動校對單據連續性與異常值，智慧提醒數據缺漏。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
