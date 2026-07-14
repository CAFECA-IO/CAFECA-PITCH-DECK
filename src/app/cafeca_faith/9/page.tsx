'use client';

import { ActivitySquare, FileSearch, ShieldCheck, Link2, Leaf } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260615 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 top-10 w-[600px] h-[600px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-blue-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Comprehensive ESG Analysis</span>
      </div>

      {/* Info: (20260615 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-12 relative pt-16">

        {/* Info: (20260615 - Luphia) Top Header Area */}
        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">一氣呵成完成所有企業所需分析</span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-800">
            從廠區到產品，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">完整涵蓋全球永續合規標準。</span>
          </h2>
        </div>

        {/* Info: (20260615 - Luphia) 5 Analysis Items Grid */}
        <div className="grid grid-cols-2 gap-4 w-full pr-8">

          {/* Info: (20260615 - Luphia) Item 1 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute left-0 top-0 w-1 h-full bg-blue-400"></div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <ActivitySquare className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">組織碳盤查</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">ISO 14064-1</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              自動整合多個廠區的排放源數據，產出符合國際標準的組織溫室氣體申報報告。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Item 2 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute left-0 top-0 w-1 h-full bg-emerald-400"></div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-500 transition-colors">
                  <FileSearch className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">產品碳足跡</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">ISO 14067</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              以製程反向推理技術，計算出單一產品在生命週期內的碳排放，符合查證規範。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Item 3 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute left-0 top-0 w-1 h-full bg-indigo-400"></div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-500 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-indigo-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">數位產品護照</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">EU DPP Compliant</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              產出符合歐盟規範的數位產品護照 (DPP)，即時回報產品碳履歷，保障產品順利通過邊境關稅審查。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Item 4 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-500 transition-colors">
                  <Link2 className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">綠色供應鏈管理</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">Scope 3 Management</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              動態追蹤並稽核下游供應商的實質碳排數據，降低企業的範疇三 (Scope 3) 供應鏈碳風險。
            </p>
          </div>

          {/* Info: (20260615 - Luphia) Item 5 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group relative overflow-hidden flex flex-col justify-between col-span-2 w-1/2">
            <div className="absolute left-0 top-0 w-1 h-full bg-teal-400"></div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-500 transition-colors">
                  <Leaf className="w-5 h-5 text-teal-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800">淨零碳排規劃</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">Net-Zero Path</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              結合多維數據分析與綠色路徑規劃，動態模擬最佳設備升級與減量投資路徑。
            </p>
          </div>

        </div>

      </div>

      {/* Info: (20260615 - Luphia) Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
        <Image
          src="/cafeca_faith/robot_impact.jpeg"
          alt="Impact and ROI Robot"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}
