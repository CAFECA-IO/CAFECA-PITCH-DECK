'use client';

import { Cpu, Megaphone, Users, TrendingUp } from 'lucide-react';

export default function CafecaIsunfaSlide11() {
  // Info: (20260714 - Luphia) Use-of-funds for the NT$12M GISA capital raise (donut geometry: r=80, C≈502.65)
  const C = 2 * Math.PI * 80;
  const allocations = [
    { icon: Cpu, label: '擴增算力', amount: 600, pct: 50, color: '#f97316', tint: 'text-orange-500', bg: 'bg-orange-50', desc: '擴充 GPU 推理叢集、深化 FAITH 專家模型，提升同時服務廠商數與盤查速度。' },
    { icon: Megaphone, label: '品牌行銷', amount: 300, pct: 25, color: '#3b82f6', tint: 'text-blue-500', bg: 'bg-blue-50', desc: '內容行銷、國際展會與數位曝光，建立企業知名度、擴大主動詢問量能。' },
    { icon: Users, label: '擴大組織與碳盤查顧問合作', amount: 300, pct: 25, color: '#10b981', tint: 'text-emerald-500', bg: 'bg-emerald-50', desc: '增聘工程與顧問人才、與碳盤查顧問通路分潤合作，擴大交付與服務量能。' },
  ];

  // Info: (20260714 - Luphia) Precompute donut segment dash offsets
  let acc = 0;
  const segments = allocations.map((a) => {
    const len = (a.pct / 100) * C;
    const seg = { color: a.color, dash: `${len} ${C - len}`, offset: -acc };
    acc += len;
    return seg;
  });

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-14 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <TrendingUp size={15} />
          Capital Raise Plan
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          擬透過創櫃板募資 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">1,200 萬元</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          以現金增資擴充核心量能，將實證成果轉化為規模化成長動能。
        </p>
      </div>

      {/* Info: (20260714 - Luphia) Donut + Allocation Detail */}
      <div className="z-10 flex-1 px-20 pb-16 grid grid-cols-12 gap-10 items-center">

        {/* Info: (20260714 - Luphia) Donut Chart */}
        <div className="col-span-5 flex items-center justify-center">
          <div className="relative w-[300px] h-[300px]">
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#f1f5f9" strokeWidth="28" />
              {segments.map((s, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke={s.color}
                  strokeWidth="28"
                  strokeDasharray={s.dash}
                  strokeDashoffset={s.offset}
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-slate-800">1,200</span>
              <span className="text-lg font-bold text-slate-400 tracking-widest">萬元 · TWD</span>
            </div>
          </div>
        </div>

        {/* Info: (20260714 - Luphia) Allocation Cards */}
        <div className="col-span-7 flex flex-col gap-4">
          {allocations.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.label} className="flex items-center gap-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${a.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={a.tint} size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-lg font-black text-slate-800">{a.label}</h3>
                    <span className="text-sm font-bold" style={{ color: a.color }}>{a.amount} 萬 · {a.pct}%</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
