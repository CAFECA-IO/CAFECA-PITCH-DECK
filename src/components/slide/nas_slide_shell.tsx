'use client';

import React from 'react';

/**
 * Info: (20260914 - Luphia) nas_slide_shell.tsx
 * - 公司導入 NAS 分享簡報的共用版型：iSunFA 配色（白底、深藍字、橘色重點）+ 機櫃硬碟燈號底紋 + 章節標籤
 */

type INasAccent = 'orange' | 'amber' | 'sky' | 'rose' | 'violet';

export interface INasSlideShellProps {
  chapter: string;
  accent?: INasAccent;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  pageLabel?: string;
  children: React.ReactNode;
  compact?: boolean;
}

const ACCENT_MAP: Record<INasAccent, { text: string; dot: string; bar: string }> = {
  orange: { text: 'text-orange-600', dot: 'bg-orange-500', bar: 'from-orange-500 to-amber-400' },
  amber: { text: 'text-amber-600', dot: 'bg-amber-500', bar: 'from-amber-500 to-orange-400' },
  sky: { text: 'text-sky-600', dot: 'bg-sky-500', bar: 'from-sky-500 to-cyan-400' },
  rose: { text: 'text-rose-600', dot: 'bg-rose-500', bar: 'from-rose-500 to-red-400' },
  violet: { text: 'text-violet-600', dot: 'bg-violet-500', bar: 'from-violet-500 to-fuchsia-400' },
};

/**
 * Info: (20260914 - Luphia) 右側裝飾機櫃的硬碟槽燈號狀態，固定值以避免每次 render 抖動
 */
const BAY_LEDS: ('on' | 'busy' | 'off')[] = ['on', 'busy', 'on', 'on', 'busy', 'on', 'off', 'on', 'busy', 'on', 'on', 'off'];

const LED_CLASS: Record<'on' | 'busy' | 'off', string> = {
  on: 'bg-orange-500/80',
  busy: 'bg-amber-400 animate-pulse',
  off: 'bg-slate-300',
};

export default function NasSlideShell({
  chapter,
  accent = 'orange',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: INasSlideShellProps) {
  const tone = ACCENT_MAP[accent];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      {/* Info: (20260914 - Luphia) 點陣底紋，呼應機房防靜電地板 */}
      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Info: (20260914 - Luphia) 右側裝飾機櫃：一排硬碟槽與燈號 */}
      <div className="absolute right-0 top-0 bottom-0 w-[64px] z-0 pointer-events-none border-l border-slate-200 bg-slate-50 flex flex-col justify-center gap-[10px] px-[14px]" aria-hidden="true">
        {BAY_LEDS.map((led, i) => (
          <div key={`${led}-${i}`} className="h-[34px] rounded-[4px] border border-slate-200 bg-white flex items-center justify-between px-2">
            <div className="flex flex-col gap-[3px]">
              <span className="block w-[14px] h-[1.5px] bg-slate-300" />
              <span className="block w-[14px] h-[1.5px] bg-slate-300" />
              <span className="block w-[14px] h-[1.5px] bg-slate-300" />
            </div>
            <span className={`w-[5px] h-[5px] rounded-full ${LED_CLASS[led]}`} />
          </div>
        ))}
      </div>

      {/* Info: (20260914 - Luphia) 環境光暈 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-56 w-[720px] h-[720px] rounded-full bg-orange-200/40 blur-[170px]" />
        <div className="absolute right-[10%] -bottom-72 w-[680px] h-[680px] rounded-full bg-amber-100/60 blur-[160px]" />
      </div>

      <div className={`absolute inset-x-0 top-0 h-[4px] z-20 bg-gradient-to-r ${tone.bar}`} />

      <div className={`z-10 pl-14 pr-24 ${compact ? 'pt-8 pb-3' : 'pt-9 pb-5'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${tone.dot}`} />
            <span className={`text-[13px] font-bold tracking-[0.28em] ${tone.text}`}>{chapter}</span>
          </div>
          {pageLabel && (
            <span className="text-[11px] font-mono tracking-[0.2em] text-slate-400">{pageLabel}</span>
          )}
        </div>

        <h2 className="text-[38px] font-black leading-[1.15] tracking-tight text-slate-900">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-[16px] leading-relaxed text-slate-600 max-w-[1050px]">{subtitle}</p>
        )}
      </div>

      <div className="z-10 flex-1 pl-14 pr-24 min-h-0 flex flex-col">{children}</div>

      <div className="z-10 pl-14 pr-24 pb-6 pt-3">
        <div className="border-t border-slate-200 pt-3 flex items-center justify-between">
          <span className="text-[12px] text-slate-500 leading-snug pr-8">{footer}</span>
          <span className="text-[11px] font-mono tracking-[0.2em] text-slate-400 flex-shrink-0">CAFECA · NAS</span>
        </div>
      </div>
    </div>
  );
}
