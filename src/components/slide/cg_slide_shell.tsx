'use client';

import React from 'react';

/**
 * Info: (20260914 - Luphia) cg_slide_shell.tsx
 * - CodeGraph 簡報的共用版型：深色開發者工具底 + 節點連線底紋 + 章節標籤
 */

type ICgAccent = 'cyan' | 'violet' | 'amber' | 'emerald' | 'rose';

export interface ICgSlideShellProps {
  chapter: string;
  accent?: ICgAccent;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  pageLabel?: string;
  children: React.ReactNode;
  compact?: boolean;
}

const ACCENT_MAP: Record<ICgAccent, { text: string; dot: string; bar: string }> = {
  cyan: { text: 'text-cyan-300', dot: 'bg-cyan-400', bar: 'from-cyan-400 to-sky-500' },
  violet: { text: 'text-violet-300', dot: 'bg-violet-400', bar: 'from-violet-400 to-fuchsia-500' },
  amber: { text: 'text-amber-300', dot: 'bg-amber-400', bar: 'from-amber-400 to-orange-500' },
  emerald: { text: 'text-emerald-300', dot: 'bg-emerald-400', bar: 'from-emerald-400 to-teal-500' },
  rose: { text: 'text-rose-300', dot: 'bg-rose-400', bar: 'from-rose-400 to-red-500' },
};

/**
 * Info: (20260914 - Luphia) 底紋用的節點座標，固定值以避免每次 render 抖動
 */
const GRAPH_NODES: { x: number; y: number; r: number }[] = [
  { x: 90, y: 120, r: 3 },
  { x: 240, y: 60, r: 2 },
  { x: 190, y: 250, r: 2.5 },
  { x: 60, y: 380, r: 2 },
  { x: 300, y: 430, r: 3 },
  { x: 1120, y: 90, r: 3 },
  { x: 1220, y: 230, r: 2 },
  { x: 1040, y: 320, r: 2.5 },
  { x: 1180, y: 470, r: 2 },
  { x: 980, y: 600, r: 3 },
  { x: 640, y: 30, r: 2 },
  { x: 520, y: 660, r: 2.5 },
];

const GRAPH_EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [2, 4],
  [2, 3],
  [3, 11],
  [5, 6],
  [5, 7],
  [7, 8],
  [8, 9],
  [7, 10],
  [4, 11],
];

export default function CgSlideShell({
  chapter,
  accent = 'cyan',
  title,
  subtitle,
  footer,
  pageLabel,
  children,
  compact = false,
}: ICgSlideShellProps) {
  const tone = ACCENT_MAP[accent];

  return (
    <div className="w-[1280px] h-[720px] bg-[#080b12] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260914 - Luphia) 等寬格線底紋 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Info: (20260914 - Luphia) 知識圖譜節點底紋 */}
      <svg className="absolute inset-0 z-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1280 720" aria-hidden="true">
        {GRAPH_EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={GRAPH_NODES[a].x}
            y1={GRAPH_NODES[a].y}
            x2={GRAPH_NODES[b].x}
            y2={GRAPH_NODES[b].y}
            stroke="rgba(103,232,249,0.20)"
            strokeWidth="1"
          />
        ))}
        {GRAPH_NODES.map((n) => (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r={n.r} fill="rgba(103,232,249,0.45)" />
        ))}
      </svg>

      {/* Info: (20260914 - Luphia) 環境光暈 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-44 -top-52 w-[720px] h-[720px] rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute -right-52 top-1/4 w-[720px] h-[720px] rounded-full bg-violet-500/10 blur-[170px]" />
        <div className="absolute left-1/3 -bottom-72 w-[680px] h-[680px] rounded-full bg-sky-500/[0.08] blur-[160px]" />
      </div>

      <div className={`absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r ${tone.bar} opacity-90`} />

      <div className={`z-10 px-14 ${compact ? 'pt-8 pb-3' : 'pt-9 pb-5'}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${tone.dot}`} />
            <span className={`text-[13px] font-bold tracking-[0.28em] ${tone.text}`}>{chapter}</span>
          </div>
          {pageLabel && (
            <span className="text-[11px] font-mono tracking-[0.2em] text-slate-500">{pageLabel}</span>
          )}
        </div>

        <h2 className="text-[38px] font-black leading-[1.15] tracking-tight text-white">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-[16px] leading-relaxed text-slate-400 max-w-[1050px]">{subtitle}</p>
        )}
      </div>

      <div className="z-10 flex-1 px-14 min-h-0 flex flex-col">{children}</div>

      <div className="z-10 px-14 pb-6 pt-3">
        <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
          <span className="text-[12px] text-slate-500 leading-snug pr-8">{footer}</span>
          <span className="text-[11px] font-mono tracking-[0.2em] text-slate-600 flex-shrink-0">CODEGRAPH</span>
        </div>
      </div>
    </div>
  );
}
