'use client';

import { CalendarDays } from 'lucide-react';

const PHASES = [
  { id: 'p1', label: '說明會與報名', when: '計畫啟動後 1–2 個月', desc: '北中南巡迴說明會，會員廠報名登記', pct: 25 },
  { id: 'p2', label: '首批導入', when: '第 5 個月起', desc: '第一批工廠完成教育訓練並產出首本護照', pct: 50 },
  { id: 'p3', label: '擴大導入', when: '第 6–7 個月', desc: '陸續開放後續梯次，同步啟動廢料媒合', pct: 80 },
  { id: 'p4', label: '全面上線', when: '第 8 個月', desc: '累計 300 家以上完成建置，平台轉入常態營運', pct: 100 },
];

export default function IsunfaPwbSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-sm font-bold text-blue-600 tracking-widest">時程</span>
      </div>

      <div className="z-10 px-16 pt-[88px] pb-7 flex items-end justify-between">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          什麼時候輪到我？
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm flex-shrink-0">
          <CalendarDays className="w-5 h-5 text-slate-500" />
          <span className="text-[15px] font-bold text-slate-600">計畫期程共 8 個月</span>
        </div>
      </div>

      <div className="z-10 px-16 flex-1 space-y-4">
        {PHASES.map((p) => (
          <div key={p.id} className="bg-white border border-slate-200 rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex items-baseline justify-between mb-3">
              <div className="flex items-baseline gap-4">
                <span className="text-[26px] font-black text-slate-800">{p.label}</span>
                <span className="text-[16px] font-bold text-orange-500">{p.when}</span>
              </div>
              <span className="text-[15px] text-slate-500">{p.desc}</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full" style={{ width: `${p.pct}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 px-16 py-6">
        <p className="text-center text-[17px] text-slate-500">
          先報名的優先安排教育訓練梯次。<span className="font-bold text-slate-700">名額有限，額滿為止。</span>
          <span className="text-[14px] text-slate-400 ml-2">（實際時程依計畫核定結果調整）</span>
        </p>
      </div>

    </div>
  );
}
