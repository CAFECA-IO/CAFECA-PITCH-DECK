'use client';

import { Sparkles, Building2, Landmark, Check, Info } from 'lucide-react';

export default function Pmis20060723Slide10() {
  const nt = (n: number) => 'NT$ ' + n.toLocaleString('en-US');

  const subsidies = [
    {
      icon: Building2,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      bg: 'bg-blue-50',
      source: '新北市政府',
      headline: '補助 4 萬元',
      amount: nt(40000),
      points: [
        '地方數位轉型 / 智慧應用補助',
        '定額補助，快速降低初期導入負擔',
      ],
    },
    {
      icon: Landmark,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      bg: 'bg-orange-50',
      source: '經濟部產業發展署',
      headline: '補助 50%，最高 500 萬',
      amount: '最高 ' + nt(5000000),
      points: [
        '產業數位轉型 / AI 應用補助',
        '按專案金額 50% 補助，上限 500 萬元',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-12 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Government Subsidies
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          政府補助加持，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">導入門檻再降低</span>
        </h2>
        <p className="text-base text-slate-500 font-medium mt-2 max-w-4xl mx-auto">
          可搭配地方與中央補助資源，有效降低企業實際自付金額。
        </p>
      </div>

      <div className="z-10 px-20 grid grid-cols-2 gap-8">
        {subsidies.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.source} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.accent}`}></div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center ${s.tint} flex-shrink-0`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400">{s.source}</p>
                    <p className={`text-2xl font-black ${s.tint} leading-tight`}>{s.headline}</p>
                  </div>
                </div>
                <div className={`inline-flex self-start items-baseline gap-2 px-3 py-1.5 rounded-lg ${s.bg} mb-4`}>
                  <span className="text-lg font-black text-slate-800 tabular-nums">{s.amount}</span>
                </div>
                <ul className="space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={17} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260723 - Luphia) Illustrative impact of 50% subsidy */}
      <div className="z-10 px-20 mt-5">
        <div className="rounded-2xl border border-orange-200 bg-orange-50/60 px-6 py-4 flex items-center justify-center gap-8">
          <span className="text-sm font-black text-slate-700">產發署 50% 補助試算</span>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="font-bold">基礎版</span>
            <span className="text-slate-400">{nt(837900)} →</span>
            <span className="font-black text-orange-600">補助 {nt(418950)}</span>
          </div>
          <div className="w-px h-6 bg-orange-200"></div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="font-bold">AI 智能版</span>
            <span className="text-slate-400">{nt(2778300)} →</span>
            <span className="font-black text-orange-600">補助 {nt(1389150)}</span>
          </div>
        </div>
      </div>

      <div className="z-10 px-20 py-4 mt-auto">
        <p className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1.5 text-center">
          <Info size={13} className="flex-shrink-0" />
          補助金額、資格與兩項補助能否併用，依各主管機關最新公告與審核結果為準；上述試算僅供示意。
        </p>
      </div>
    </div>
  );
}
