'use client';

import React from 'react';
import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Store, Footprints } from 'lucide-react';

/**
 * Info: (20260923 - Luphia) pay_country_slide.tsx
 * - 「當 AI 學會支付」國家頁共用版型：市場快照 × 洗牌方向 × 當地 FamilyMart 小場景 × 全盈的一步
 */

export interface IPayCountryStat {
  v: string;
  k: string;
}

export interface IPayCountrySlideProps {
  pageLabel: string;
  flag: string;
  country: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  stats: IPayCountryStat[];
  winners: string[];
  losers: string[];
  sceneTitle: string;
  sceneLines: string[];
  move: React.ReactNode;
  footer: string;
}

export default function PayCountrySlide({
  pageLabel,
  flag,
  country,
  title,
  subtitle,
  stats,
  winners,
  losers,
  sceneTitle,
  sceneLines,
  move,
  footer,
}: IPayCountrySlideProps) {
  return (
    <PaySlideShell
      act={`${flag} ${country}`}
      scene="第二幕 · 國家篇"
      pageLabel={pageLabel}
      title={title}
      subtitle={subtitle}
      footer={footer}
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-[300px_1fr_360px] gap-5 pb-2">
        {/* Info: (20260923 - Luphia) 左：市場快照 */}
        <div className="flex flex-col gap-2.5">
          {stats.map((s) => (
            <div key={s.k} className="flex-1 rounded-[20px] bg-white border border-ink-200 shadow-sm px-4 py-2.5 flex flex-col justify-center">
              <div className="text-[24px] font-black text-ink-900 leading-tight">{s.v}</div>
              <div className="text-[12px] text-ink-500 leading-snug">{s.k}</div>
            </div>
          ))}
        </div>

        {/* Info: (20260923 - Luphia) 中：洗牌方向 */}
        <div className="flex flex-col gap-3">
          <div className="flex-1 rounded-[24px] bg-plus-50 border border-plus-200 px-5 py-4">
            <div className="text-[15px] font-black text-plus-600 mb-3">代理人來了，份額流向誰</div>
            <ul className="flex flex-col gap-3">
              {winners.map((w) => (
                <li key={w} className="flex items-start gap-2 text-[15px] text-ink-700 leading-snug">
                  <span className="mt-[3px] px-1.5 rounded-full bg-plus-500 text-white text-[10px] font-bold flex-shrink-0">增</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 rounded-[24px] bg-white border border-ink-200 shadow-sm px-5 py-4">
            <div className="text-[15px] font-black text-ink-500 mb-3">誰的「選擇時刻」會被拿走</div>
            <ul className="flex flex-col gap-3">
              {losers.map((l) => (
                <li key={l} className="flex items-start gap-2 text-[15px] text-ink-700 leading-snug">
                  <span className="mt-[3px] px-1.5 rounded-full bg-ink-300 text-white text-[10px] font-bold flex-shrink-0">減</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info: (20260923 - Luphia) 右：當地 FamilyMart 小場景與全盈的一步 */}
        <div className="flex flex-col gap-3">
          <div className="flex-1 rounded-[24px] bg-bird-50 border border-bird-200 px-5 py-4 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Store className="w-4 h-4 text-bird-700" />
              <span className="text-[13px] font-black text-bird-700">{sceneTitle}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {sceneLines.map((line) => (
                <div key={line} className="flex items-start gap-2 text-[13px] text-ink-700 leading-snug">
                  <Footprints className="w-3.5 h-3.5 text-bird-500 mt-[3px] flex-shrink-0" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] bg-plus-500 px-5 py-4 shadow-lg shadow-plus-500/25">
            <div className="text-[12px] font-bold tracking-widest text-white/80 mb-1">全盈的一步</div>
            <div className="text-[14px] text-white leading-snug">{move}</div>
          </div>
        </div>
      </div>
    </PaySlideShell>
  );
}
