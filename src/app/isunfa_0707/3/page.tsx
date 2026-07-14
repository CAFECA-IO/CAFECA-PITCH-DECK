'use client';

import { Target, Database, Cpu, FileText, ShieldCheck, Layers } from 'lucide-react';

export default function CafecaFaithSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260707 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -bottom-1/4 w-[800px] h-[800px] bg-green-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">AI Implementation SOP</span>
      </div>

      {/* Info: (20260707 - Luphia) Content Container */}
      <div className="z-10 w-full max-w-6xl flex flex-col items-center px-8 relative">
        
        {/* Info: (20260707 - Luphia) Top Header Area */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm mx-auto">
            <Layers className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">標準作業流程</span>
          </div>
          
          <h2 className="text-5xl font-black leading-tight text-slate-800">
            企業帳務與碳盤查{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">AI 導入 SOP</span>
          </h2>
          
          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto mt-2">
            將傳統複雜漫長的碳盤查程序，簡化為五個自動化與智慧化的標準步驟，協助企業快速合規。
          </p>
        </div>

        {/* Info: (20260707 - Luphia) 5 Steps Stepper Container */}
        <div className="flex justify-between items-stretch w-full relative px-4">
          
          {/* Info: (20260707 - Luphia) Connecting Line behind the icons */}
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-orange-300 via-green-300 to-blue-300 rounded-full z-0 opacity-60"></div>
          
          {/* Info: (20260707 - Luphia) Step 1 */}
          <div className="z-10 flex flex-col items-center text-center w-[200px] group">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">1</span>
              <Target className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1 mt-4">邊界設定</h3>
            <span className="text-[11px] font-bold text-orange-500 tracking-wider mb-3">設定組織與營運邊界</span>
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-xl text-[13px] text-slate-500 leading-relaxed min-h-[130px] flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
              AI 自動梳理母子公司股權結構，精確界定 Scope 1, 2, 3 的盤查範疇，奠定合規的盤查基石。
            </div>
          </div>

          {/* Info: (20260707 - Luphia) Step 2 */}
          <div className="z-10 flex flex-col items-center text-center w-[200px] group">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-green-400 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">2</span>
              <Database className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1 mt-4">數據收集與鑑別</h3>
            <span className="text-[11px] font-bold text-green-600 tracking-wider mb-3">智慧辨識與多源收集</span>
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-xl text-[13px] text-slate-500 leading-relaxed min-h-[130px] flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
              利用 AI 技術與 API 串接，自動識別與擷取發票、水電單、燃料單等異質數據，並自動分類鑑別。
            </div>
          </div>

          {/* Info: (20260707 - Luphia) Step 3 */}
          <div className="z-10 flex flex-col items-center text-center w-[200px] group">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-400 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">3</span>
              <Cpu className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1 mt-4">帳務與碳排計算</h3>
            <span className="text-[11px] font-bold text-blue-600 tracking-wider mb-3">雙軌計算與自動配對</span>
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-xl text-[13px] text-slate-500 leading-relaxed min-h-[130px] flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
              財務明細帳與碳排係數智慧配對，排除重覆計算，即時計算組織碳排總量與產品碳足跡。
            </div>
          </div>

          {/* Info: (20260707 - Luphia) Step 4 */}
          <div className="z-10 flex flex-col items-center text-center w-[200px] group">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-400 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-1 -right-1 bg-indigo-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">4</span>
              <FileText className="w-8 h-8 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1 mt-4">報告撰寫</h3>
            <span className="text-[11px] font-bold text-indigo-600 tracking-wider mb-3">自動生成合規報告</span>
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-xl text-[13px] text-slate-500 leading-relaxed min-h-[130px] flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
              內建國際主流標準範本，一鍵生成符合稽核要求、透明且符合規範的碳盤查中英文報告書。
            </div>
          </div>

          {/* Info: (20260707 - Luphia) Step 5 */}
          <div className="z-10 flex flex-col items-center text-center w-[200px] group">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-emerald-400 flex items-center justify-center shadow-md relative group-hover:scale-105 transition-transform duration-300">
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">5</span>
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1 mt-4">內容查證</h3>
            <span className="text-[11px] font-bold text-emerald-600 tracking-wider mb-3">稽核軌跡與三方驗證</span>
            <div className="bg-white border border-slate-200 shadow-sm p-4 rounded-xl text-[13px] text-slate-500 leading-relaxed min-h-[130px] flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
              自動標記每筆數據的原始憑證軌跡與係數來源，提供完整的稽核鏈結，加速第三方機構查證程序。
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
