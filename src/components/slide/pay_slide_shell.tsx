'use client';

import React from 'react';

/**
 * Info: (20260923 - Luphia) pay_slide_shell.tsx
 * - 「當 AI 學會支付」洞察報告的共用版型，採全盈+PAY 官網設計語言：
 *   白底、品牌橘 #FF4600（plus）、配角淺藍（bird）、文字灰 #505050（ink）、Noto Sans TC、膠囊標籤與漂浮圓點
 * - 預設匯出為分析頁；PaySceneShell 為情境頁（上方橘色場景標頭帶，蜜桃色底）
 */

type IPayAccent = 'plus' | 'bird' | 'ink';

export const PAY_FONT = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", 微軟正黑體, sans-serif';

export interface IPaySlideShellProps {
  act: string;
  scene?: string;
  accent?: IPayAccent;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  pageLabel?: string;
  children: React.ReactNode;
  compact?: boolean;
}

const ACCENT_MAP: Record<IPayAccent, { pill: string; line: string }> = {
  plus: { pill: 'bg-plus-500 text-white', line: 'bg-plus-300' },
  bird: { pill: 'bg-bird-500 text-white', line: 'bg-bird-300' },
  ink: { pill: 'bg-ink-700 text-white', line: 'bg-ink-300' },
};

/**
 * Info: (20260923 - Luphia) 官網招牌的漂浮圓點：位置固定，避免每次 render 抖動
 */
function FloatingDots({ tone = 'light' }: { tone?: 'light' | 'peach' }) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className={`absolute -right-24 -bottom-32 w-[420px] h-[420px] rounded-full ${tone === 'peach' ? 'bg-white/70' : 'bg-plus-50'}`} />
      <div className="absolute right-[140px] -top-16 w-[150px] h-[150px] rounded-full border border-plus-200" />
      <div className="absolute right-[96px] top-[92px] w-[10px] h-[10px] rounded-full bg-plus-500" />
      <div className="absolute right-[64px] top-[150px] w-[7px] h-[7px] rounded-full bg-bird-500" />
      <div className="absolute right-[40px] bottom-[210px] w-[8px] h-[8px] rounded-full bg-bird-300" />
      <div className="absolute left-[-60px] bottom-[-60px] w-[180px] h-[180px] rounded-full bg-plus-50/80" />
    </div>
  );
}

export interface IPaySceneShellProps {
  slug: string;
  pageLabel?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * Info: (20260923 - Luphia) 情境頁：蜜桃色底 + 上方品牌橘場景帶（劇本場景標頭）+ 下方白色旁白帶
 */
export function PaySceneShell({ slug, pageLabel, children, footer }: IPaySceneShellProps) {
  return (
    <div
      className="w-[1280px] h-[720px] bg-plus-50 relative overflow-hidden shadow-2xl flex flex-col text-ink-900"
      style={{ fontFamily: PAY_FONT }}
    >
      <FloatingDots tone="peach" />

      <div className="z-10 h-[50px] bg-plus-500 flex items-center justify-between px-14 flex-shrink-0">
        <span className="text-[13px] font-bold tracking-[0.12em] text-white">{slug}</span>
        {pageLabel && <span className="text-[11px] font-mono tracking-[0.2em] text-white/80">{pageLabel}</span>}
      </div>

      <div className="z-10 flex-1 min-h-0 px-14 py-7 flex flex-col">{children}</div>

      <div className="z-10 h-[46px] bg-white/90 border-t border-plus-100 flex items-center justify-between px-14 flex-shrink-0">
        <span className="text-[12px] text-ink-400 leading-snug pr-8">{footer}</span>
        <span className="text-[11px] font-bold tracking-[0.18em] text-plus-500 flex-shrink-0">CAFECA · 當 AI 學會支付</span>
      </div>
    </div>
  );
}

export default function PaySlideShell({
  act,
  scene,
  accent = 'plus',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: IPaySlideShellProps) {
  const tone = ACCENT_MAP[accent];

  return (
    <div
      className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col text-ink-900"
      style={{ fontFamily: PAY_FONT }}
    >
      <FloatingDots />

      <div className={`z-10 px-14 ${compact ? 'pt-8 pb-3' : 'pt-9 pb-5'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[12px] font-bold tracking-[0.12em] ${tone.pill}`}>{act}</span>
            <span className={`w-10 h-[2px] ${tone.line}`} />
            <span className="w-2.5 h-2.5 rounded-full border-2 border-plus-300" />
            {scene && (
              <span className="text-[12px] tracking-[0.12em] text-ink-400">{scene}</span>
            )}
          </div>
          {pageLabel && (
            <span className="text-[11px] font-mono tracking-[0.2em] text-ink-300 mr-24">{pageLabel}</span>
          )}
        </div>

        <h2 className="text-[38px] font-black leading-[1.18] tracking-tight text-ink-900">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-[16px] leading-relaxed text-ink-500 max-w-[1080px]">{subtitle}</p>
        )}
      </div>

      <div className="z-10 flex-1 px-14 min-h-0 flex flex-col">{children}</div>

      <div className="z-10 px-14 pb-6 pt-3">
        <div className="border-t border-ink-200 pt-3 flex items-center justify-between">
          <span className="text-[12px] text-ink-400 leading-snug pr-8">{footer}</span>
          <span className="text-[11px] font-bold tracking-[0.18em] text-plus-500 flex-shrink-0">CAFECA · 當 AI 學會支付</span>
        </div>
      </div>
    </div>
  );
}
