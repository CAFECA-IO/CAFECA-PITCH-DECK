'use client';

import { Radio, CheckCircle2 } from 'lucide-react';

export default function MallLiveSlide20() {
  const takeaways = [
    '財務系統是唯一主源頭，平台只是前台',
    'SKU 唯一鍵貫穿商品、訂單、結算',
    '供應商與主播的每一塊錢都算得清、追得回',
  ];

  const nextSteps = [
    '確認需求清單 30 條的優先級與 Phase 切分',
    '盤點 Shopify 商店與第三方平台 API 權限',
    '定義 SKU 編碼規範與供應商主檔欄位',
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#0c0712] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260902 - Luphia) 細格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.24] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(168,162,192,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(168,162,192,0.14) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 -top-64 w-[900px] h-[900px] rounded-full bg-fuchsia-500/12 blur-[180px]" />
        <div className="absolute -left-52 bottom-0 w-[600px] h-[600px] rounded-full bg-rose-500/10 blur-[160px]" />
        <div className="absolute -right-52 bottom-0 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-500" />

      <div className="z-10 flex-1 flex flex-col items-center justify-center px-14 text-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-400/10 border border-rose-400/30 mb-7">
          <Radio className="w-4 h-4 text-rose-300" />
          <span className="text-[13px] font-bold text-rose-300 tracking-wide">iSunTVMall · 直播電商 × 財務結算並進</span>
        </div>

        <h1 className="text-[52px] font-black leading-[1.15] tracking-tight text-white">
          鏡頭前賣得再熱，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400">
            帳本後面都是冷靜的
          </span>
        </h1>

        <div className="mt-9 grid grid-cols-2 gap-6 w-full max-w-[1000px] text-left">
          <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
            <div className="text-[13px] font-bold tracking-[0.25em] text-rose-300 mb-3.5">KEY TAKEAWAYS</div>
            <ul className="flex flex-col gap-2.5">
              {takeaways.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] text-slate-200 leading-snug">
                  <CheckCircle2 className="w-4.5 h-4.5 text-rose-400 flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6">
            <div className="text-[13px] font-bold tracking-[0.25em] text-violet-300 mb-3.5">NEXT STEPS</div>
            <ul className="flex flex-col gap-2.5">
              {nextSteps.map((t, i) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] text-slate-200 leading-snug">
                  <span className="w-4.5 h-4.5 rounded-full bg-violet-500/20 border border-violet-400/40 text-[10px] font-black text-violet-300 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="z-10 px-14 pb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 flex items-center justify-between backdrop-blur-sm">
          <div className="text-[14px] text-slate-400">
            <span className="font-bold text-white">iSunTVMall</span>
            <span className="mx-2.5 text-slate-700">·</span>
            <span>直播電商功能設計簡報</span>
          </div>
          <div className="text-[12px] text-slate-500 font-mono tracking-widest">THANK YOU · 2026.09</div>
        </div>
      </div>

    </div>
  );
}
