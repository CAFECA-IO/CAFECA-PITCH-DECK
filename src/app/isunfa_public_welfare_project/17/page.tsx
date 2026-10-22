'use client';

import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

export default function IsunfaPwpSlide17() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Soft Accents */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-40 top-0 w-[800px] h-[800px] bg-orange-100/60 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 flex-1 flex items-center justify-between px-28">

        {/* Info: (20260819 - Luphia) Left Side: Text and Logo */}
        <div className="flex flex-col items-start justify-center max-w-[660px]">
          <div className="mb-10">
            <Image
              src="/isunfa_logo_color.svg"
              alt="iSunFA Logo"
              width={250}
              height={65}
              className="opacity-90"
            />
          </div>
          <h1 className="text-[60px] font-black text-slate-800 tracking-tight leading-[1.15] mb-7">
            讓每一噸廢料，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">都有一本護照</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6">
            AI 賦能金屬製造業<br />
            「數位產品護照與零廢循環生態系」實證推動計畫
          </p>
          <div className="mt-8 pt-6 border-t border-slate-200 w-full">
            <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-2">提案團隊</div>
            <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-[13px] font-bold text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>卡菲卡金融科技股份有限公司
              </span>
              <span className="text-slate-300">×</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>財團法人金屬工業研究發展中心
              </span>
              <span className="text-slate-300">×</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>台灣螺絲工業同業公會
              </span>
            </div>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Right Side: QR Code Section */}
        <div className="flex flex-col items-center gap-6 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-inner">
            <QRCodeSVG
              value="https://isunfa.com"
              size={210}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"H"}
              includeMargin={false}
            />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              了解雲端方案
            </span>
            <a
              href="https://isunfa.com"
              target="_blank"
              rel="noreferrer"
              className="text-2xl font-bold text-slate-700 hover:text-orange-500 transition-colors"
            >
              iSunFA.com
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
