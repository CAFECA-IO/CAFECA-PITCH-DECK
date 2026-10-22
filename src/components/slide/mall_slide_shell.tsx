'use client';

import React from 'react';

/**
 * Info: (20260902 - Luphia) mall_slide_shell.tsx
 * - iSunTVMall 直播電商功能設計簡報的共用版型：深色直播光感底 + 玫瑰紫漸層 + 章節標籤
 */

export interface IMallSlideShellProps {
  chapter: string;
  chapterColor?: string;
  chapterDot?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  pageLabel?: string;
  children: React.ReactNode;
  compact?: boolean;
}

export default function MallSlideShell({
  chapter,
  chapterColor = 'text-rose-400',
  chapterDot = 'bg-rose-400',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: IMallSlideShellProps) {
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

      {/* Info: (20260902 - Luphia) 直播間環境光暈 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[720px] h-[720px] rounded-full bg-rose-500/10 blur-[160px]" />
        <div className="absolute -right-52 top-1/3 w-[720px] h-[720px] rounded-full bg-fuchsia-500/10 blur-[170px]" />
        <div className="absolute left-1/3 -bottom-64 w-[640px] h-[640px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-500 opacity-80" />

      <div className={`z-10 px-14 ${compact ? 'pt-8 pb-3' : 'pt-9 pb-5'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${chapterDot}`} />
            <span className={`text-[13px] font-bold tracking-[0.28em] ${chapterColor}`}>{chapter}</span>
          </div>
          {pageLabel && (
            <span className="text-[11px] font-mono tracking-widest text-slate-500">{pageLabel}</span>
          )}
        </div>
        <h2 className={`${compact ? 'text-[34px]' : 'text-[40px]'} font-black leading-[1.18] tracking-tight text-white`}>{title}</h2>
        {subtitle && <p className="mt-2.5 text-[15px] text-slate-400 leading-relaxed max-w-[1020px]">{subtitle}</p>}
      </div>

      <div className="z-10 flex-1 px-14 pb-5 min-h-0">{children}</div>

      <div className="z-10 px-14 py-4 border-t border-white/10 bg-white/[0.02]">
        {footer ?? (
          <div className="flex items-center justify-between text-[11px] text-slate-500 tracking-wider">
            <span>iSunTVMall｜直播電商 × 財務結算系統 功能設計簡報</span>
            <span>財務系統為唯一數據主源頭 · Shopify 只做前台銷售 · SKU 全域唯一鍵</span>
          </div>
        )}
      </div>
    </div>
  );
}
