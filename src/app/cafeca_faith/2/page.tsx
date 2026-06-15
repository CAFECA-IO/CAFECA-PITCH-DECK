'use client';

import { FileSearch, Calculator, Leaf, Link2, Factory } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Active Data Ingestion</span>
      </div>

      {/* Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-16 pt-16 relative">

        {/* Top Header Area */}
        <div className="space-y-4 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
            <FileSearch className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">讀懂你的企業</span>
          </div>

          <h2 className="text-5xl font-black leading-tight text-slate-800">
            只需 15 分鐘引導操作<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">後續 AI 168 小時獨立完成</span>
          </h2>

          <p className="text-base text-slate-500 leading-relaxed font-medium max-w-lg">
            在無人值守的情況下自動完成所有任務。我們為您自動彙整與分析繁雜的企業憑證資料，將原本耗時的資料整理工作，轉化為即時的營運洞察。
          </p>
        </div>

        {/* 4 Roles Grid */}
        <div className="grid grid-cols-2 gap-4 w-full pr-8">

          {/* Card 1 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-500 transition-colors">
              <Calculator className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">財務會計師</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">全年無休，精準處理帳務與財務報表，確保合規無誤。</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-500 transition-colors">
              <Leaf className="w-5 h-5 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">永續管理師</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">自動化碳盤查，提供符合國際標準的永續發展策略。</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-500 transition-colors">
              <Link2 className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">供應鏈管理師</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">追蹤上下游資料，優化供應鏈碳足跡與資源配置。</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-2xl hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-emerald-500 transition-colors">
              <Factory className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-base font-bold text-slate-800 mb-1">環境工程師</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">深入製程端，發掘能源耗損並提供改善工程建議。</p>
          </div>

        </div>
      </div>

      {/* Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
        <Image
          src="/cafeca_faith/robot_analysis.jpeg"
          alt="AI Robot Analyzing Documents"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}
