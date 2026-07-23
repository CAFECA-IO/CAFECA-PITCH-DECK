'use client';

import Image from 'next/image';
import { HardHat, MapPinned, LineChart, ShieldCheck } from 'lucide-react';

export default function Pmis20060723Slide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260723 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Info: (20260723 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-20 relative">

        <div className="inline-flex items-center gap-2 self-start mb-8 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          智慧監造・工程專案管理資訊系統
        </div>

        <div className="mb-6">
          <Image
            src="/cafeca_logo.svg"
            alt="CAFECA Logo"
            width={170}
            height={51}
            className="object-contain"
          />
        </div>

        <div className="space-y-5 text-left">
          <h1 className="text-6xl font-black tracking-tight leading-tight text-slate-800">
            PMIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">智慧監造</span>
          </h1>
          <p className="text-2xl font-bold text-slate-600 tracking-wide">AI 智慧監造專案管理資訊系統</p>

          <div className="flex items-center gap-4 pt-4 mt-2 border-l-4 border-orange-500 pl-6">
            <div>
              <p className="text-sm text-slate-400 font-bold tracking-widest uppercase mb-1">Project Management Information System</p>
              <p className="text-base text-slate-500 font-medium mt-1 leading-relaxed">
                為公共工程監造單位打造的一站式資訊化平台<br />
                整合 14 大功能模組，導入費思 AI 助理，涵蓋工程全生命週期
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-6 text-sm font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200"><HardHat size={15} className="text-orange-500" />履約管控</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200"><LineChart size={15} className="text-orange-500" />進度 S-Curve</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200"><MapPinned size={15} className="text-orange-500" />GIS 圖資</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200"><ShieldCheck size={15} className="text-orange-500" />權限控管</span>
          </div>
        </div>
      </div>

      {/* Info: (20260723 - Luphia) Right 1/3 Visual Panel */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-gradient-to-br from-slate-800 to-slate-900 border-l border-slate-200 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="z-10 flex flex-col items-center gap-8">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-orange-500/30">
            <HardHat size={60} className="text-white" />
          </div>
          <div className="text-center">
            <p className="text-orange-400 font-black text-3xl tracking-wide">PMIS</p>
            <p className="text-slate-400 text-sm font-medium mt-1">監造・品質・安全・進度</p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <Image
            src="/isunfa_logo_color.svg"
            alt="iSunFA Logo"
            width={110}
            height={31}
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}
