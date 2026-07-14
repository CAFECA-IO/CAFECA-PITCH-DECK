'use client';

import { Sparkles, Coins, ShieldCheck, Award, Zap } from 'lucide-react';

export default function CafecaFaithSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260701 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Business Value Creation</span>
      </div>

      {/* Info: (20260701 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col items-center px-16 relative">

        {/* Info: (20260701 - Luphia) Top Header Area */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm mx-auto">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">導入效益與商業價值</span>
          </div>

          <h2 className="text-5xl font-black leading-tight text-slate-800">
            導入 AI 碳會計系統的{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">四大企業優勢</span>
          </h2>

          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto mt-4">
            將碳盤查從「單純的合規成本」，轉化為企業的「永續競爭力」與「實質營運收益」。
          </p>
        </div>

        {/* Info: (20260701 - Luphia) 4 Cards Grid */}
        <div className="grid grid-cols-4 gap-6 w-full">
          {/* Info: (20260701 - Luphia) Card 1 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors shadow-inner">
              <Coins className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">大幅降低合規成本</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              節省 80% 的人工數據收集與登錄工時，縮短 70% 第三方現場稽核天數，省下高額的碳顧問與查證費用。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 2 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors shadow-inner">
              <ShieldCheck className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">消除漂綠合規風險</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              財務帳與碳帳實時雙軌勾稽，提供 100% 可被第三方審計的憑證軌跡，完美合規 IFRS S1/S2 與 CBAM 要求。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 3 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors shadow-inner">
              <Award className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">爭取國際供應鏈訂單</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              秒級產出單品碳足跡 (PCF)，滿足 Apple、Tesla 等跨國大廠減碳規範，以綠色實力贏得大廠供應鏈入場券。
            </p>
          </div>

          {/* Info: (20260701 - Luphia) Card 4 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors shadow-inner">
              <Zap className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">實現綠色營運獲利</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              結合 AI 能耗異常探測與未來減碳路徑模擬，精確導引節能設備投資與回收預測，將碳成本轉化為節能收益。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
