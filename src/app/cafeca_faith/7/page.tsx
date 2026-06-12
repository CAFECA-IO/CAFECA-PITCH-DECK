'use client';

import { AlertTriangle, Lightbulb, Recycle, Target } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 top-10 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-orange-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Actionable Impact & ROI</span>
      </div>

      {/* Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-16 relative">

        {/* Top Header Area */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">具體效益與回報</span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-800">
            為製造業每年減少 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">15%</span> 碳排放當量，<br />
            增加 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">5%</span> 淨收入。
          </h2>
          <p className="text-sm text-slate-400 font-mono mt-2">* 數據依製造產業類型與工廠實際狀況而有所不同</p>
        </div>

        {/* 3 Pillars */}
        <div className="flex flex-col gap-6 w-full pr-8">

          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl flex items-center gap-6 hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-orange-400"></div>
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
              <AlertTriangle className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">汰換異常設備</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                找出隱形的吃電怪獸與無效耗能設備，從源頭降低不必要的電力浪費與碳排放。
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl flex items-center gap-6 hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-blue-400"></div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
              <Lightbulb className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">導入典範製程</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                對標全球頂尖企業的綠色製程標準，引進最新減碳技術，提升整體生產效率。
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl flex items-center gap-6 hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-green-400"></div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
              <Recycle className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">加入循環經濟供應鏈</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                將廢棄物轉化為再生資源，對接下游應用廠商，化廢為寶，創造額外的商業價值。
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Right 1/3 Image Area */}
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
