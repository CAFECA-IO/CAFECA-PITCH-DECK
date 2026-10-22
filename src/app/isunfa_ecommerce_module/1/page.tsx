'use client';

import Image from 'next/image';
import { Blocks, ArrowRight, BookOpenCheck } from 'lucide-react';

export default function EcModuleSlide1() {
  const chain = ['統一串接規格', '多平台商店', '訂單歸集', '結算分潤', '獨立帳本'];
  const platforms = ['Shopify', '蝦皮購物', 'momo', 'TikTok Shop', '樂天市場'];
  const stores = [
    { name: '陽光選物旗艦店', platform: 'Shopify', ledger: 'LB-001' },
    { name: '陽光選物蝦皮店', platform: '蝦皮購物', ledger: 'LB-002' },
    { name: 'TVmall 直播商城', platform: 'Shopify', ledger: 'LB-004' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#fffdfa] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      {/* Info: (20260902 - Luphia) 細格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.24] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30,41,59,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[760px] h-[760px] rounded-full bg-orange-200/70 blur-[160px]" />
        <div className="absolute right-[-160px] top-10 w-[760px] h-[760px] rounded-full bg-amber-100/80 blur-[170px]" />
        <div className="absolute left-1/2 -bottom-72 w-[700px] h-[700px] rounded-full bg-sky-100/70 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      <div className="z-10 flex items-center justify-between px-14 pt-9">
        <Image src="/isunfa_logo_color.svg" alt="iSunFA" width={150} height={44} className="object-contain" />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-300">
          <Blocks className="w-4 h-4 text-orange-600" />
          <span className="text-[13px] font-bold text-orange-600 tracking-wide">功能設計簡報 Module Design Briefing</span>
        </div>
      </div>

      <div className="z-10 flex-1 flex items-center px-14 gap-10">

        <div className="flex-[56]">
          <div className="text-[15px] font-bold tracking-[0.3em] text-amber-600 mb-5">E-COMMERCE INTEGRATION MODULE</div>

          <h1 className="text-[60px] font-black leading-[1.1] tracking-tight text-slate-900">
            電商整合模組
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              一店一帳本
            </span>
          </h1>

          <p className="mt-6 text-[21px] text-slate-600 font-medium leading-relaxed border-l-[3px] border-orange-400 pl-5">
            一套統一串接規格，管理所有平台上的商店；<br />每一間商店，自動擁有一本獨立的帳。
          </p>

          <div className="mt-8 flex items-center gap-2">
            {chain.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-[13px] font-bold text-slate-700">
                  {item}
                </span>
                {index < chain.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-slate-400" />}
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 封面示意：多平台 → iSunFA → 獨立帳本 */}
        <div className="flex-[44]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 backdrop-blur-sm">
            <div className="flex flex-wrap gap-1.5 justify-center mb-3">
              {platforms.map((p) => (
                <span key={p} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11.5px] font-bold text-slate-600">{p}</span>
              ))}
            </div>
            <div className="text-center text-[11px] text-slate-500 tracking-widest mb-3">▼ 統一串接規格 · 同一組事件協定 ▼</div>
            <div className="rounded-xl border border-orange-300 bg-orange-50 px-4 py-2.5 text-center mb-3">
              <span className="text-[16px] font-black text-orange-700">iSunFA 電商整合模組</span>
            </div>
            <div className="flex flex-col gap-2">
              {stores.map((s) => (
                <div key={s.name} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded bg-gradient-to-br from-orange-400 to-amber-500" />
                    <span className="text-[12px] font-bold text-slate-700">{s.name}</span>
                    <span className="text-[10px] text-slate-500">{s.platform}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-600">
                    <BookOpenCheck className="w-3.5 h-3.5" />{s.ledger} 獨立帳本
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white px-7 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="text-[14px] text-slate-500">
            <span className="font-bold text-slate-900">iSunFA 陽光智能會計</span>
            <span className="mx-2.5 text-slate-300">·</span>
            <span className="font-bold text-slate-900">電商整合模組功能設計</span>
          </div>
          <div className="text-[12px] text-slate-500 font-mono tracking-widest">2026.09</div>
        </div>
      </div>

    </div>
  );
}
