'use client';

import {
  Sparkles,
  TrendingUp,
  Milestone,
  ListTree,
  ArrowUpNarrowWide,
  AlertTriangle,
} from 'lucide-react';

export default function Pmis20060723Slide5() {
  // Info: (20260723 - Luphia) Three cumulative curves driving the S-Curve dashboard
  const curves = [
    {
      name: '預定累計 %',
      desc: '依計畫塑形的基準線（藍虛線）',
      color: 'text-blue-600',
      dot: 'bg-blue-500',
    },
    {
      name: '實際累計 %',
      desc: '依實際完成塑形（綠實線）',
      color: 'text-emerald-600',
      dot: 'bg-emerald-500',
    },
    {
      name: '預測趨勢 %',
      desc: '由現況線性外推至工期末月（橘虛線）',
      color: 'text-orange-600',
      dot: 'bg-orange-500',
    },
  ];

  // Info: (20260723 - Luphia) Two switchable calculation bases
  const bases = [
    {
      icon: Milestone,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      badge: '預設',
      title: '里程碑 Milestone',
      subtitle: '事件式',
      features: [
        '以里程碑「權重」累計進度',
        '預定完成日塑形預定曲線',
        '實際完成日塑形實際曲線',
      ],
    },
    {
      icon: ListTree,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      badge: '可切換',
      title: '分項工程 WorkItem',
      subtitle: '期間式',
      features: [
        '以工項「預定工期天數」為權重',
        '進度 % 累計預定曲線',
        '實際起訖日塑形實際曲線',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260723 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260723 - Luphia) Header */}
      <div className="z-10 px-16 pt-10 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Data-Driven Progress
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          進度 S-Curve，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">資料一改，曲線即時反映</span>
        </h2>
        <p className="text-base text-slate-500 font-medium mt-2 max-w-4xl mx-auto">
          專案總覽與儀表板以 S-Curve 逐月計算三條累計曲線，完全由資料驅動。
        </p>
      </div>

      {/* Info: (20260723 - Luphia) Body: chart + curve legend | calculation bases */}
      <div className="z-10 flex-1 px-16 grid grid-cols-2 gap-6">

        {/* Info: (20260723 - Luphia) Left column: SVG S-Curve + three curve legend */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={18} className="text-orange-500" />
              <span className="text-sm font-black text-slate-700">逐月累計進度示意</span>
            </div>
            <svg viewBox="0 0 400 200" className="w-full flex-1">
              <line x1="30" y1="10" x2="30" y2="175" stroke="#e2e8f0" strokeWidth="1.5" />
              <line x1="30" y1="175" x2="385" y2="175" stroke="#e2e8f0" strokeWidth="1.5" />
              {[0, 1, 2, 3].map((g) => (
                <line
                  key={`grid-${g}`}
                  x1="30"
                  y1={175 - g * 45}
                  x2="385"
                  y2={175 - g * 45}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                />
              ))}
              {/* 預定累計 (blue dashed) */}
              <path
                d="M30 172 C 110 165, 150 120, 210 90 S 320 30, 385 20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeDasharray="6 5"
              />
              {/* 實際累計 (green solid) */}
              <path
                d="M30 172 C 100 168, 140 140, 200 118"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
              />
              {/* 預測趨勢 (orange dashed extrapolation) */}
              <path
                d="M200 118 L 385 55"
                fill="none"
                stroke="#f97316"
                strokeWidth="2.5"
                strokeDasharray="6 5"
              />
              <circle cx="200" cy="118" r="4" fill="#10b981" />
              <text x="205" y="112" fontSize="10" fill="#64748b">現況</text>
            </svg>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {curves.map((c) => (
              <div key={c.name} className="bg-white rounded-xl border border-slate-200 shadow-sm p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`}></span>
                  <span className={`text-xs font-black ${c.color}`}>{c.name}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260723 - Luphia) Right column: two calculation bases */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 flex-1">
            {bases.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${b.accent}`}></div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center ${b.tint}`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{b.badge}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-800 leading-tight">{b.title}</h3>
                    <p className="text-xs text-slate-400 font-bold mb-3">{b.subtitle}</p>
                    <ul className="space-y-2">
                      {b.features.map((f) => (
                        <li key={f} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${b.tint.replace('text', 'bg')}`}></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info: (20260723 - Luphia) Single progress definition */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
            <ArrowUpNarrowWide size={22} className="text-orange-500 flex-shrink-0" />
            <p className="text-xs text-slate-600 leading-relaxed">
              工項 <span className="text-orange-600 font-black">→</span> 里程碑 <span className="text-orange-600 font-black">→</span> 專案「單向上捲」，全系統
              <span className="font-black text-slate-800">單一進度定義</span>：專案列表、總覽、里程碑、報表、儀表板數字一致。
            </p>
          </div>
        </div>
      </div>

      {/* Info: (20260723 - Luphia) Early-warning footer */}
      <div className="z-10 px-16 py-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-sm">
          <AlertTriangle size={16} className="text-orange-500" />
          <span className="text-slate-700">
            <span className="font-black text-orange-600">即時預警</span>：落後預定 X% ＝ 目前實際累計 − 目前預定累計
          </span>
        </div>
      </div>
    </div>
  );
}
