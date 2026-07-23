'use client';

import Image from 'next/image';
import { Globe, ArrowUpRight, HardHat } from 'lucide-react';

export default function Pmis20060723Slide13() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-white font-sans bg-gradient-to-br from-slate-800 to-slate-900">

      {/* Info: (20260723 - Luphia) Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] bg-orange-500 rounded-full mix-blend-screen filter blur-[130px] animate-pulse"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber-400 rounded-full mix-blend-screen filter blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>

      <div className="z-10 flex flex-col items-center text-center px-16">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-orange-500/30 mb-8">
          <HardHat size={42} className="text-white" />
        </div>

        <h1 className="text-6xl font-black tracking-tight leading-tight">
          感謝<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">聆聽</span>
        </h1>
        <p className="text-xl text-slate-300 font-medium mt-5 max-w-2xl leading-relaxed">
          PMIS AI 智慧監造專案管理資訊系統<br />
          期待與您攜手，讓每一個公共工程都被精準管理。
        </p>

        {/* Info: (20260723 - Luphia) Demo link */}
        <a
          href="https://pmis.isunfa.com"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-800 shadow-2xl hover:shadow-orange-500/20 transition-shadow group"
        >
          <span className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
            <Globe size={24} />
          </span>
          <span className="text-left">
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Live Demo</span>
            <span className="block text-2xl font-black text-slate-800">pmis.isunfa.com</span>
          </span>
          <ArrowUpRight size={26} className="text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="absolute bottom-8 z-10 flex items-center gap-4">
        <Image src="/cafeca_logo.svg" alt="CAFECA" width={130} height={39} className="object-contain brightness-0 invert opacity-80" />
        <span className="w-px h-6 bg-white/20"></span>
        <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={100} height={28} className="object-contain bg-white/90 rounded px-2 py-1" />
      </div>
    </div>
  );
}
