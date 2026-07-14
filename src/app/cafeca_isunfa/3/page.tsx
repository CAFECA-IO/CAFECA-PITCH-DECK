'use client';

import { Database, Sparkles, ShieldCheck, TrendingUp, AlertCircle } from 'lucide-react';

export default function CafecaIsunfaSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260701 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">AI Carbon Ledger</span>
      </div>

      {/* Info: (20260701 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col items-center px-16 relative">

        {/* Info: (20260701 - Luphia) Top Header Area */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm mx-auto">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">企業碳管理的關鍵挑戰</span>
          </div>

          <h2 className="text-5xl font-black leading-tight text-slate-800">
            為何企業帳務與碳盤查{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">必須導入 AI？</span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto mt-4">
            傳統人工「耗時、易錯、難追溯」的痛點，已成為企業合規與轉型的最大瓶頸。<br />唯有透過 AI，才能將靜態的歷史記錄，轉化為即時、精準的決策工具。
          </p>
        </div>

        {/* Info: (20260701 - Luphia) 4 Roles Grid */}
        <div className="grid grid-cols-4 gap-6 w-full">
          {/* Info: (20260701 - Luphia) Card 1 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors shadow-inner">
              <Database className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">處理海量異質數據</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              碳帳來源極其繁雜（發票、電費單、採購單等），人工處理效率極低。AI 能自動識別與解析多元數據，大幅提升資料輸入速度。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 2 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors shadow-inner">
              <Sparkles className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">語意匹配百萬係數</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              全球排放因子資料庫龐大且持續更新。AI 語意引擎能自動配對最合適的係數，避免人工錯配所導致的「漂綠」合規風險。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 3 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors shadow-inner">
              <ShieldCheck className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">滿足 IFRS 可審計性</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              嚴格應對 IFRS S1/S2 與外部稽核需求。AI 可串聯財務帳與碳帳，提供逐筆憑證的軌跡追蹤，確保數據可被第三方驗證。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 4 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors shadow-inner">
              <TrendingUp className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">異常分析與減碳預測</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              傳統盤查僅能記錄「過去」，AI 則能基於數據進行「未來」反向模擬，預測減碳路徑對財務與營運的影響，協助動態減碳決策。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
