'use client';

import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

export default function IsunfaPwbSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={170} height={44} className="object-contain" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
          <BadgeCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-bold text-emerald-700">會員廠免費導入</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="text-lg font-bold text-orange-500 tracking-widest mb-5">會員廠說明會</div>

        <h1 className="text-[68px] font-black tracking-tight leading-[1.12] text-slate-800">
          歐洲客戶開始要<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">
            「數位產品護照」
          </span><br />
          你拿得出來嗎？
        </h1>

        <p className="text-2xl text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6 mt-9">
          一套免費的 AI 工具，幫你的工廠自動產出<br />
          買方要的碳足跡與再生料履歷——順便把廢料變成收入。
        </p>
      </div>

      <div className="z-10 px-16 pb-10">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-7 py-4 shadow-sm flex items-center justify-between">
          <div className="text-sm text-slate-500">
            主辦：<span className="font-bold text-slate-800">台灣螺絲工業同業公會</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="font-bold text-slate-800">財團法人金屬工業研究發展中心</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="font-bold text-slate-800">卡菲卡金融科技（iSunFA）</span>
          </div>
          <div className="text-xs text-slate-400 font-bold tracking-wider">數位發展部數位產業署 AI 生態系實證應用計畫</div>
        </div>
      </div>

    </div>
  );
}
