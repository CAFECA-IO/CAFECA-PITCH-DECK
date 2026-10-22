'use client';

import { Check, X, Thermometer } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide3() {
  const pnl = [
    { item: '營業收入', now: '27,300', prev: '27,550', delta: '−0.9%', tone: 'text-slate-300' },
    { item: '營業成本', now: '20,990', prev: '20,690', delta: '+1.5%', tone: 'text-slate-300' },
    { item: '營業毛利', now: '6,310', prev: '6,860', delta: '−8.0%', tone: 'text-rose-300' },
    { item: '毛利率', now: '23.1%', prev: '24.9%', delta: '−1.8pp', tone: 'text-rose-400', highlight: true },
    { item: '營業費用', now: '5,310', prev: '5,240', delta: '+1.3%', tone: 'text-slate-300' },
    { item: '本期淨利', now: '1,000', prev: '1,620', delta: '−38.3%', tone: 'text-rose-300' },
  ];

  const can = [
    '這個月賺了多少、花了多少',
    '存貨還剩多少、周轉幾次',
    '毛利率掉了 1.8 個百分點',
    '稅要繳多少、現金夠不夠',
  ];

  const cannot = [
    '毛利為什麼掉？哪一格貨架在虧錢？',
    '走進來卻沒買的那些人，想要什麼？',
    '這支端架擺了三個月，到底有沒有效？',
    '如果旁邊蓋了車站，明年會變怎樣？',
  ];

  return (
    <TwinSlideShell
      chapter="破題 · WHY"
      chapterColor="text-rose-400"
      chapterDot="bg-rose-400"
      pageLabel="03 / 22"
      compact
      title={<>先問一個問題：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">會計報表，到底有什麼用？</span></>}
      subtitle="這是示範門市本月的簡明損益表（去識別化模擬推估，單位：新台幣千元）。所有數字都正確，所有數字都準時。然後呢？"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[40] rounded-2xl border border-white/12 bg-white/[0.04] overflow-hidden flex flex-col">
          <div className="px-5 py-2.5 bg-white/[0.05] border-b border-white/10 flex items-center justify-between">
            <span className="text-[13px] font-bold text-slate-200 tracking-wide">簡明損益表</span>
            <span className="text-[10px] font-mono text-slate-500">NT$ 千元</span>
          </div>
          <div className="px-5 py-1 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 text-[10.5px] text-slate-500 py-2 border-b border-white/10">
              <span>科目</span>
              <span className="text-right w-[68px]">本月</span>
              <span className="text-right w-[68px]">上月</span>
              <span className="text-right w-[56px]">變動</span>
            </div>
            {pnl.map((row) => (
              <div
                key={row.item}
                className={`grid grid-cols-[1fr_auto_auto_auto] gap-x-4 py-[13px] text-[13px] border-b border-white/[0.06] ${row.highlight ? 'bg-rose-500/10 -mx-5 px-5' : ''}`}
              >
                <span className={row.highlight ? 'font-bold text-white' : 'text-slate-300'}>{row.item}</span>
                <span className={`text-right w-[68px] font-mono ${row.highlight ? 'font-bold text-white' : 'text-slate-200'}`}>{row.now}</span>
                <span className="text-right w-[68px] font-mono text-slate-500">{row.prev}</span>
                <span className={`text-right w-[56px] font-mono font-bold ${row.tone}`}>{row.delta}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-[60] flex flex-col gap-3.5 h-full">
          <div className="grid grid-cols-2 gap-3.5 flex-1">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-[14px] font-black text-emerald-300">報表回答得了</span>
              </div>
              <ul className="space-y-3">
                {can.map((text) => (
                  <li key={text} className="text-[13px] text-slate-300 leading-snug flex gap-2">
                    <span className="text-emerald-500 mt-[1px]">·</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[0.06] p-5">
              <div className="flex items-center gap-2 mb-3">
                <X className="w-4 h-4 text-rose-400" />
                <span className="text-[14px] font-black text-rose-300">報表回答不了</span>
              </div>
              <ul className="space-y-3">
                {cannot.map((text) => (
                  <li key={text} className="text-[13px] text-slate-300 leading-snug flex gap-2">
                    <span className="text-rose-500 mt-[1px]">·</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-400/[0.12] to-transparent p-5 flex items-center gap-4">
            <Thermometer className="w-9 h-9 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-[21px] font-black text-white leading-snug">
                報表告訴你「在發燒」，<span className="text-amber-300">沒告訴你「哪裡發炎」。</span>
              </p>
              <p className="text-[12.5px] text-slate-400 mt-1.5">
                會計是結果的度量衡，不是原因的顯微鏡。它把一整個月、一整座賣場、幾十萬個決策，壓成一個數字。
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5">
            <p className="text-[13px] text-slate-400 leading-relaxed">
              <span className="text-white font-bold">本簡報的主張：</span>
              問題不在會計沒有用，而在於——我們一直只用了帳本裡不到 <span className="text-cyan-300 font-bold font-mono">5%</span> 的資訊量。
              剩下的 95%，被當成憑證封存，從來沒有被還原成「場景」。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
