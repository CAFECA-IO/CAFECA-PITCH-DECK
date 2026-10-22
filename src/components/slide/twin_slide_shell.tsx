'use client';

import React from 'react';

/**
 * Info: (20260826 - Luphia) twin_slide_shell.tsx
 * - 大型賣場數位孿生簡報的共用版型：深色技術底 + 藍圖格線 + 章節標籤
 */

export interface ITwinSlideShellProps {
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

export default function TwinSlideShell({
  chapter,
  chapterColor = 'text-emerald-400',
  chapterDot = 'bg-emerald-400',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: ITwinSlideShellProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-[#070b14] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260826 - Luphia) 藍圖格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Info: (20260826 - Luphia) 環境光暈 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[720px] h-[720px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="absolute -right-52 top-1/3 w-[720px] h-[720px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute left-1/3 -bottom-64 w-[640px] h-[640px] rounded-full bg-indigo-500/10 blur-[160px]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 opacity-80" />

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
            <span>CAFECA × iSunFA｜大型賣場數位孿生技術簡報</span>
            <span>分析樣本：國內某全國性連鎖超市 · 高雄門市群（去識別化）｜數值為模擬推估</span>
          </div>
        )}
      </div>
    </div>
  );
}
