'use client';

import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';

export default function CafecaFaithSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260707 - Luphia) Background Soft Accents */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
        <div className="absolute -left-40 top-0 w-[800px] h-[800px] bg-orange-100/60 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-emerald-50/60 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-10 w-full h-full flex items-center justify-between px-40 relative">

        {/* Info: (20260707 - Luphia) Left Side: Text and Logo */}
        <div className="flex flex-col items-start justify-center">
          <div className="mb-10">
            <Image
              src="/isunfa_logo_color.svg"
              alt="iSunFA Logo"
              width={260}
              height={70}
              className="opacity-90"
            />
          </div>
          <h1 className="text-6xl font-black text-slate-800 tracking-tight mb-6">
            感謝聆聽
          </h1>
          <p className="text-2xl text-slate-500 font-medium tracking-widest border-l-4 border-orange-500 pl-4">
            <span className="text-orange-500">2026</span><br />
            iSunFA，人工智能碳會計
          </p>
        </div>

        {/* Info: (20260707 - Luphia) Right Side: QR Code Section */}
        <div className="flex flex-col items-center gap-6 bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-inner">
            <QRCodeSVG
              value="https://isunfa.com"
              size={220}
              bgColor={"#ffffff"}
              fgColor={"#0f172a"}
              level={"H"}
              includeMargin={false}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">
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
