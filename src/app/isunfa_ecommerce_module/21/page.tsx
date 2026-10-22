'use client';

import { Blocks, CheckCircle2 } from 'lucide-react';

export default function EcModuleSlide21() {
  const takeaways = [
    '一套統一串接規格，管理所有平台上的商店',
    '每間商店自動擁有獨立帳本，集團層合併檢視',
    '供應商、主播與每一塊錢都算得清、追得回',
  ];

  const nextSteps = [
    '確認首批串接平台（Shopify 先行）與商店清單',
    '定義 SKU 編碼規範與各店帳本科目模板',
    '排定三階段開發時程與驗收標準',
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#fffdfa] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      {/* Info: (20260902 - Luphia) 細格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(30,41,59,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,41,59,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-64 w-[900px] h-[900px] rounded-full bg-orange-200/70 blur-[180px]" />
        <div className="absolute -left-52 bottom-0 w-[600px] h-[600px] rounded-full bg-amber-100/80 blur-[160px]" />
        <div className="absolute -right-52 bottom-0 w-[600px] h-[600px] rounded-full bg-sky-100/70 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      <div className="z-10 flex-1 flex flex-col items-center justify-center px-14 text-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-300 mb-7">
          <Blocks className="w-4 h-4 text-orange-600" />
          <span className="text-[13px] font-bold text-orange-600 tracking-wide">iSunFA · 電商整合模組</span>
        </div>

        <h1 className="text-[52px] font-black leading-[1.15] tracking-tight text-slate-900">
          前台開多少間店，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
            帳本就跟多少本
          </span>
        </h1>

        <div className="mt-9 grid grid-cols-2 gap-6 w-full max-w-[1000px] text-left">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-3.5">KEY TAKEAWAYS</div>
            <ul className="flex flex-col gap-2.5">
              {takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] text-slate-700 leading-snug">
                  <CheckCircle2 className="w-4.5 h-4.5 text-orange-600 flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-[13px] font-bold tracking-[0.25em] text-sky-600 mb-3.5">NEXT STEPS</div>
            <ul className="flex flex-col gap-2.5">
              {nextSteps.map((t, i) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] text-slate-700 leading-snug">
                  <span className="w-4.5 h-4.5 rounded-full bg-sky-50 border border-sky-300 text-[10px] font-black text-sky-600 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white px-7 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="text-[14px] text-slate-500">
            <span className="font-bold text-slate-900">iSunFA 陽光智能會計</span>
            <span className="mx-2.5 text-slate-300">·</span>
            <span>電商整合模組功能設計簡報</span>
          </div>
          <div className="text-[12px] text-slate-500 font-mono tracking-widest">THANK YOU · 2026.09</div>
        </div>
      </div>

    </div>
  );
}
