'use client';

import React from 'react';
import { RisingSunRays } from '@/components/slide/kiku_katana_art';

/**
 * Info: (20260830 - Luphia) kiku_slide_shell.tsx
 * - 《菊與刀》說書簡報共用版型：白底 + 橘色主色 + 和紙質感
 */

export interface IKikuSlideShellProps {
  chapter: string;
  chapterNote?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children: React.ReactNode;
  pageLabel?: string;
  compact?: boolean;
}

export default function KikuSlideShell({
  chapter,
  chapterNote,
  title,
  lead,
  children,
  pageLabel,
  compact = false,
}: IKikuSlideShellProps) {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col font-sans text-stone-800">

      {/* Info: (20260830 - Luphia) 和紙底紋與暖橘光暈 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-orange-50/60 to-amber-50 pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(234,88,12,0.10) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <RisingSunRays className="absolute -right-56 -top-56 w-[620px] h-[620px] text-orange-400/10 z-0 pointer-events-none" />
      <div className="absolute -left-40 -bottom-52 w-[560px] h-[560px] rounded-full bg-amber-300/20 blur-[150px] z-0 pointer-events-none" />

      {/* Info: (20260830 - Luphia) 頂部橘色主色帶 */}
      <div className="absolute inset-x-0 top-0 h-[6px] z-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      {/* Info: (20260830 - Luphia) 標題區 */}
      <div className={`z-10 px-16 ${compact ? 'pt-9 pb-3' : 'pt-11 pb-5'}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-orange-500" />
          <span className="text-[13px] font-bold tracking-[0.3em] text-orange-600">{chapter}</span>
          {chapterNote ? (
            <span className="text-[12px] tracking-[0.12em] text-stone-400">{chapterNote}</span>
          ) : null}
        </div>
        <h2 className={`${compact ? 'text-[34px]' : 'text-[42px]'} font-black leading-tight tracking-tight text-stone-900`}>
          {title}
        </h2>
        {lead ? (
          <p className="mt-3 text-[17px] leading-relaxed text-stone-500 max-w-5xl">{lead}</p>
        ) : null}
      </div>

      {/* Info: (20260830 - Luphia) 內容區 */}
      <div className="z-10 flex-1 px-16 pb-14 min-h-0">
        {children}
      </div>

      {/* Info: (20260830 - Luphia) 頁尾 */}
      <div className="absolute bottom-5 inset-x-0 px-16 z-20 flex items-center justify-between text-[11px] tracking-[0.22em] text-stone-400 font-medium">
        <span>THE CHRYSANTHEMUM AND THE SWORD ・ RUTH BENEDICT ・ 1946</span>
        <span className="font-mono text-orange-500">{pageLabel}</span>
      </div>
    </div>
  );
}
