'use client';

import { Sparkles, Landmark, Wind, LineChart, Cpu, Leaf } from 'lucide-react';

export default function Pmis20060723Slide12() {
  const items = [
    { year: '2017', icon: Landmark, tint: 'text-blue-600', bg: 'bg-blue-50', title: '金管會數位孿生實驗環境', tag: '金融監理科技' },
    { year: '2017–2019', icon: Wind, tint: 'text-emerald-600', bg: 'bg-emerald-50', title: '新北市政府空氣品質追蹤', tag: '環境監測' },
    { year: '2017–2020', icon: LineChart, tint: 'text-violet-600', bg: 'bg-violet-50', title: '好好證券', tag: '金融科技' },
    { year: '2019–2022', icon: Cpu, tint: 'text-rose-600', bg: 'bg-rose-50', title: '臺灣杉二號', tag: '國家級 AI 超算' },
    { year: '2021–2025', icon: Leaf, tint: 'text-orange-600', bg: 'bg-orange-50', title: '陽光智能碳會計', tag: 'iSunFA・碳會計' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-14 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Track Record
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          企業實績，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">近十年跨域交付</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          從金融監理、環境監測到國家級超算與碳會計，累積跨政府與產業的系統交付經驗。
        </p>
      </div>

      <div className="z-10 flex-1 px-16 flex items-center">
        <div className="relative w-full">
          {/* Info: (20260723 - Luphia) Timeline rail */}
          <div className="absolute top-[46px] left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-violet-200 to-orange-300 rounded-full"></div>

          <div className="relative grid grid-cols-5 gap-4">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="flex flex-col items-center text-center">
                  <div className={`w-[92px] h-[92px] rounded-2xl ${it.bg} border-2 border-white shadow-md flex items-center justify-center ${it.tint} relative z-10`}>
                    <Icon size={40} />
                  </div>
                  <div className="mt-4 px-2.5 py-1 rounded-full bg-slate-800 text-white text-xs font-black tabular-nums tracking-wide">
                    {it.year}
                  </div>
                  <div className="mt-3 bg-white rounded-xl border border-slate-200 shadow-sm px-3 py-3 w-full min-h-[92px] flex flex-col justify-center">
                    <p className="text-[15px] font-black text-slate-800 leading-snug">{it.title}</p>
                    <p className={`text-[12px] font-bold mt-1.5 ${it.tint}`}>{it.tag}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="z-10 px-20 py-6 text-center">
        <p className="text-sm text-slate-500 font-medium">
          同一支團隊的技術底蘊，如今匯聚為 <span className="font-black text-orange-500">PMIS 智慧監造平台</span>。
        </p>
      </div>
    </div>
  );
}
