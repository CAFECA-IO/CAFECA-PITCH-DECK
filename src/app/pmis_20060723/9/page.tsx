'use client';

import { Sparkles, Server, Cpu, Check } from 'lucide-react';

type PriceLine = { k: string; v: string; sub?: boolean };

export default function Pmis20060723Slide9() {
  const nt = (n: number) => 'NT$ ' + n.toLocaleString('en-US');

  const basic: {
    icon: typeof Server; label: string; tagline: string; accent: string;
    ring: string; lines: PriceLine[]; total: number; totalTint: string;
  } = {
    icon: Server,
    label: '基礎版',
    tagline: 'iSunFA 系統核心 + 13 模組',
    accent: 'from-slate-600 to-slate-700',
    ring: 'border-slate-200',
    lines: [
      { k: '軟體核心 iSunFA', v: nt(201600) },
      { k: '13 模組（25,200 × 13）', v: nt(327600) },
      { k: '軟體小計', v: nt(529200), sub: true },
      { k: '客製化與首年維護（軟體 × 25%）', v: nt(132300) },
      { k: '硬體', v: nt(176400) },
    ],
    total: 837900,
    totalTint: 'text-slate-800',
  };

  const ai: typeof basic = {
    icon: Cpu,
    label: 'AI 智能版',
    tagline: '軟體 1.8 倍・高規 AI 運算硬體',
    accent: 'from-orange-500 to-amber-500',
    ring: 'border-orange-300',
    lines: [
      { k: '軟體費用（基礎版 1.8 倍）', v: nt(952560) },
      { k: '客製化與首年維護（軟體 × 25%）', v: nt(238140) },
      { k: '硬體（AI 運算主機）', v: nt(1587600) },
    ],
    total: 2778300,
    totalTint: 'text-orange-600',
  };

  const plans = [basic, ai];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-12 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Pricing
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          費用方案，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">兩種版本一次到位</span>
        </h2>
      </div>

      <div className="z-10 flex-1 px-20 grid grid-cols-2 gap-8 items-stretch pb-4">
        {plans.map((p) => {
          const Icon = p.icon;
          const highlight = p.label === 'AI 智能版';
          return (
            <div key={p.label} className={`bg-white rounded-2xl border ${p.ring} ${highlight ? 'shadow-lg ring-2 ring-orange-500/15' : 'shadow-sm'} overflow-hidden flex flex-col`}>
              <div className={`px-7 py-5 bg-gradient-to-r ${p.accent} text-white flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon size={26} />
                </div>
                <div>
                  <p className="text-2xl font-black leading-none">{p.label}</p>
                  <p className="text-sm text-white/85 mt-1">{p.tagline}</p>
                </div>
              </div>

              <div className="px-7 py-4 flex-1 flex flex-col">
                <div className="flex-1">
                  {p.lines.map((l) => (
                    <div key={l.k} className={`flex items-center justify-between py-2 border-b border-slate-100 ${l.sub ? 'font-black text-slate-700' : ''}`}>
                      <span className={`text-[14px] ${l.sub ? 'text-slate-700' : 'text-slate-600'} flex items-center gap-2`}>
                        {!l.sub && <Check size={14} className="text-emerald-500 flex-shrink-0" />}
                        {l.k}
                      </span>
                      <span className={`text-[14px] font-bold tabular-nums ${l.sub ? 'text-slate-700' : 'text-slate-800'}`}>{l.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t-2 border-slate-200 flex items-end justify-between">
                  <span className="text-sm font-bold text-slate-500">總計（含稅）</span>
                  <span className={`text-3xl font-black tabular-nums ${p.totalTint}`}>{nt(p.total)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-20 py-5 text-center">
        <p className="text-xs text-slate-500 font-medium">
          以上金額均<span className="font-bold text-slate-700">含稅</span>；25% 附加費涵蓋<span className="font-bold text-slate-700">客製化開發與首年維護</span>，以軟體費用為計算基準。
        </p>
      </div>
    </div>
  );
}
