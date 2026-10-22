'use client';

import Image from 'next/image';
import { FileSignature, UserRoundCheck, Presentation, Mail } from 'lucide-react';

export default function IsuntvNcafSlide14() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-violet-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image src="/cafeca_logo.svg" alt="CAFECA" width={140} height={42} className="object-contain" />
        <div className="text-xs text-slate-400 font-bold tracking-wider">iSunTV × 國家文化藝術基金會</div>
      </div>

      <div className="z-10 px-16 pt-10 pb-8">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          我們需要國藝會的<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">三件事</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-5 flex-1">

        <div className="flex-1 bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl p-7 flex flex-col shadow-lg text-white relative">
          <div className="absolute -top-4 left-8 bg-amber-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">最急</div>
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4 mt-2">
            <FileSignature className="w-7 h-7 text-amber-300" />
          </div>
          <h3 className="text-[24px] font-black mb-2">9/10 前<br />簽署合作意向書</h3>
          <p className="text-[15px] text-violet-100 leading-relaxed mt-auto">
            一頁即可，草稿我們已備妥；這是 9/18 送件的必附文件，也是本次合作唯一的時間硬限制。
          </p>
        </div>

        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-7 flex flex-col shadow-sm">
          <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-4 mt-2">
            <UserRoundCheck className="w-7 h-7 text-violet-500" />
          </div>
          <h3 className="text-[24px] font-black text-slate-800 mb-2">指派一位<br />專案窗口</h3>
          <p className="text-[15px] text-slate-500 leading-relaxed mt-auto">
            共同確認競賽章程、命題方向與 AI 藝評專區規劃；例行溝通以線上會議為主，不增加行政負擔。
          </p>
        </div>

        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-7 flex flex-col shadow-sm">
          <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 mt-2">
            <Presentation className="w-7 h-7 text-amber-500" />
          </div>
          <h3 className="text-[24px] font-black text-slate-800 mb-2">審查會議<br />共同出席</h3>
          <p className="text-[15px] text-slate-500 leading-relaxed mt-auto">
            預計 10 月、約半天；簡報由 CAFECA 準備，國藝會代表出席即是對計畫公信力最有力的背書。
          </p>
        </div>

      </div>

      <div className="z-10 px-16 py-8">
        <div className="bg-slate-800 rounded-2xl px-7 py-4 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold">卡菲卡 CAFECA · Luphia Chang</span>
            <span className="text-slate-300 text-sm">luphia.chang@cafeca.com.tw</span>
          </div>
          <span className="text-slate-400 text-xs font-bold tracking-wider">數位發展部數位產業署「AI 生態系實證應用」徵案 · 2026.08</span>
        </div>
      </div>

    </div>
  );
}
