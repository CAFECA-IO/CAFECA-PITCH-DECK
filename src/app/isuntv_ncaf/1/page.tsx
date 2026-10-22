'use client';

import Image from 'next/image';
import { Handshake } from 'lucide-react';

export default function IsuntvNcafSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-violet-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image src="/cafeca_logo.svg" alt="CAFECA" width={160} height={48} className="object-contain" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200">
          <Handshake className="w-4 h-4 text-violet-600" />
          <span className="text-sm font-bold text-violet-700">聯合提案合作邀請</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="text-lg font-bold text-violet-600 tracking-widest mb-5">iSunTV × 國家文化藝術基金會</div>

        <h1 className="text-[62px] font-black tracking-tight leading-[1.15] text-slate-800">
          用一場 AI 短片競賽，<br />
          為台灣藝文界打造<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">
            AI 影音創作暨藝評平台
          </span>
        </h1>

        <p className="text-2xl text-slate-500 font-medium leading-relaxed border-l-4 border-violet-500 pl-6 mt-9">
          數位發展部數位產業署「AI 生態系實證應用」徵案——<br />
          政府出資最高 3,000 萬，我們出技術，國藝會出藝文網絡與公信力。
        </p>
      </div>

      <div className="z-10 px-16 pb-10">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-7 py-4 shadow-sm flex items-center justify-between">
          <div className="text-sm text-slate-500">
            提案單位：<span className="font-bold text-slate-800">卡菲卡 CAFECA（iSunTV）</span>
            <span className="mx-2 text-slate-300">·</span>
            聯合提案邀請：<span className="font-bold text-slate-800">財團法人國家文化藝術基金會</span>
          </div>
          <div className="text-xs text-slate-400 font-bold tracking-wider">2026.08 · 數位發展部數位產業署 AI 生態系實證應用徵案</div>
        </div>
      </div>

    </div>
  );
}
