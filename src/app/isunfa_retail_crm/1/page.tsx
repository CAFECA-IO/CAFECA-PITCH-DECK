'use client';

import Image from 'next/image';
import { Users, ArrowRight, ScanLine } from 'lucide-react';
import SlideQRCode from '@/components/slide/slide_qr_code';

export default function RetailCrmSlide1() {
  const chain = ['交易明細', '客群輪廓', '場域行為', '自動經營'];

  return (
    <div className="w-[1280px] h-[720px] bg-[#fffdfa] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      {/* Info: (20260916 - Luphia) 細格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.24] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30,41,59,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-80 w-[1000px] h-[1000px] rounded-full bg-orange-200/60 blur-[170px]" />
        <div className="absolute -left-40 top-1/3 w-[680px] h-[680px] rounded-full bg-amber-100/80 blur-[160px]" />
        <div className="absolute right-[-160px] bottom-[-160px] w-[680px] h-[680px] rounded-full bg-orange-100/70 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      <div className="z-10 flex items-center justify-between px-14 pt-9">
        <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={150} height={44} className="object-contain" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-300">
          <Users className="w-4 h-4 text-orange-600" />
          <span className="text-[13px] font-bold text-orange-600 tracking-wide">產品簡報 Product Briefing</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center px-14 gap-10">

        <div className="flex-[62]">
          <div className="text-[15px] font-bold tracking-[0.3em] text-amber-600 mb-5">RETAIL VENUE CRM</div>

          <h1 className="text-[64px] font-black leading-[1.08] tracking-tight text-slate-900">
            零售場域
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
              智能客戶關係管理
            </span>
          </h1>

          <p className="mt-6 text-[21px] text-slate-600 font-medium leading-relaxed border-l-[3px] border-orange-400 pl-5">
            讓每一筆交易，<br />都變成一次對客戶的認識。
          </p>

          <div className="mt-8 flex items-center gap-2.5">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[13px] font-bold text-slate-700 shadow-sm">
                  {item}
                </span>
                {index < chain.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-orange-400" />}
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260916 - Luphia) 封面 QR：iSunFA 官網 */}
        <div className="flex-[38] flex justify-center">
          <div className="rounded-3xl border border-orange-200 bg-white px-9 py-8 shadow-[0_12px_40px_-24px_rgba(234,88,12,0.6)] flex flex-col items-center gap-5">
            <SlideQRCode url="https://isunfa.com" size={206} className="!border-orange-100" />
            <div className="text-center">
              <div className="text-[27px] font-black text-slate-900 font-mono leading-none tracking-tight">isunfa.com</div>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[13px] text-orange-600 font-bold">
                <ScanLine className="w-4 h-4" />
                掃描立即免費試用
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white px-7 py-4 flex items-center justify-between shadow-sm">
          <div className="text-[14px] text-slate-500">
            <span className="font-bold text-slate-900">iSunFA 陽光智能碳會計</span>
            <span className="mx-2.5 text-slate-300">·</span>
            <span className="font-bold text-slate-900">零售場域智能客戶關係管理</span>
          </div>
          <div className="text-[12px] text-slate-400 font-mono tracking-widest">2026.09</div>
        </div>
      </div>

    </div>
  );
}
