'use client';

import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

export default function IsunfaPwbSlide13() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <div className="absolute -left-40 top-0 w-[800px] h-[800px] bg-orange-100/70 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-100/70 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex-1 flex items-center justify-between px-20">

        <div className="flex flex-col items-start justify-center max-w-[640px]">
          <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={210} height={54} className="opacity-90 mb-9" />

          <h1 className="text-[54px] font-black text-slate-800 tracking-tight leading-[1.2] mb-6">
            現在報名，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">下一批訂單就用得上</span>
          </h1>

          <p className="text-2xl text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6">
            現場備有報名表，歡迎洽詢承辦人員；<br />
            或掃描右方 QR-Code 了解方案內容。
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-inner">
            <QRCodeSVG
              value="https://isunfa.com"
              size={200}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"H"}
              includeMargin={false}
            />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-sm font-bold text-orange-500 tracking-widest">了解方案內容</span>
            <a href="https://isunfa.com" target="_blank" rel="noreferrer" className="text-2xl font-bold text-slate-700">
              iSunFA.com
            </a>
          </div>
        </div>

      </div>

      <div className="z-10 px-20 pb-10">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-7 py-4 flex items-center justify-between shadow-sm">
          <div className="text-[15px] text-slate-500">
            主辦：<span className="font-bold text-slate-800">台灣螺絲工業同業公會</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="font-bold text-slate-800">金屬工業研究發展中心</span>
            <span className="mx-2 text-slate-300">·</span>
            <span className="font-bold text-slate-800">卡菲卡金融科技</span>
          </div>
          <div className="text-[13px] text-slate-400">本計畫尚待數位產業署核定，實際內容以核定結果為準</div>
        </div>
      </div>

    </div>
  );
}
