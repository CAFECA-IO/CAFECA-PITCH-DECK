'use client';

import React from 'react';

/**
 * Info: (20260902 - Luphia) fa_slide_shell.tsx
 * - iSunFA 電商整合模組簡報的共用版型：比照 isunfa.com 深海軍藍底 + 橘色主色 + 細格線
 */

export interface IFaSlideShellProps {
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

export default function FaSlideShell({
  chapter,
  chapterColor = 'text-orange-600',
  chapterDot = 'bg-orange-400',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: IFaSlideShellProps) {
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

      {/* Info: (20260902 - Luphia) 品牌光暈：橘日 + 深藍 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[720px] h-[720px] rounded-full bg-orange-100/80 blur-[160px]" />
        <div className="absolute -right-52 top-1/3 w-[720px] h-[720px] rounded-full bg-amber-100/80 blur-[170px]" />
        <div className="absolute left-1/3 -bottom-64 w-[640px] h-[640px] rounded-full bg-sky-100/70 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 opacity-90" />

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
        <h2 className={`${compact ? 'text-[34px]' : 'text-[40px]'} font-black leading-[1.18] tracking-tight text-slate-900`}>{title}</h2>
        {subtitle && <p className="mt-2.5 text-[15px] text-slate-500 leading-relaxed max-w-[1020px]">{subtitle}</p>}
      </div>

      <div className="z-10 flex-1 px-14 pb-5 min-h-0">{children}</div>

      <div className="z-10 px-14 py-4 border-t border-slate-200 bg-slate-50">
        {footer ?? (
          <div className="flex items-center justify-between text-[11px] text-slate-500 tracking-wider">
            <span>iSunFA｜電商整合模組 功能設計簡報</span>
            <span>統一串接規格 · 每店獨立帳本 · SKU 全域唯一鍵</span>
          </div>
        )}
      </div>
    </div>
  );
}
