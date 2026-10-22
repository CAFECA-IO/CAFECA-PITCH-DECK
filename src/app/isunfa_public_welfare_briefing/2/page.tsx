'use client';

import { CalendarClock, AlertTriangle } from 'lucide-react';

const TIMELINE = [
  { id: 't1', year: '2023', label: 'CBAM 過渡期', desc: '歐盟開始要求進口商申報產品內含碳排，僅申報、不收費', tone: 'past' },
  { id: 't2', year: '2026', label: 'CBAM 正式收費', desc: '內含碳排開始課徵費用，成本直接反映到報價上', tone: 'now' },
  { id: 't3', year: '逐步實施', label: 'ESPR 數位產品護照', desc: '歐盟要求鋼鐵、鋁製品等逐步導入 DPP，揭露材料與環境資訊', tone: 'next' },
];

export default function IsunfaPwbSlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-sm font-bold text-red-500 tracking-widest">正在發生的事</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          這不是未來式，<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">是現在進行式</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex-1">
        <div className="relative">
          <div className="absolute top-[42px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-slate-300 via-orange-400 to-red-400 rounded-full"></div>
          <div className="grid grid-cols-3 gap-8 relative">
            {TIMELINE.map((t) => (
              <div key={t.id} className="flex flex-col items-center text-center">
                <div className={`w-[86px] h-[86px] rounded-full flex items-center justify-center border-4 bg-white shadow-md mb-5 ${
                  t.tone === 'now' ? 'border-red-500' : t.tone === 'next' ? 'border-orange-400' : 'border-slate-300'
                }`}>
                  <CalendarClock className={`w-9 h-9 ${
                    t.tone === 'now' ? 'text-red-500' : t.tone === 'next' ? 'text-orange-500' : 'text-slate-400'
                  }`} />
                </div>
                <div className={`text-2xl font-black mb-1 ${
                  t.tone === 'now' ? 'text-red-500' : t.tone === 'next' ? 'text-orange-500' : 'text-slate-400'
                }`}>{t.year}</div>
                <div className="text-xl font-bold text-slate-800 mb-2">{t.label}</div>
                <p className="text-[15px] text-slate-500 leading-relaxed px-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 px-16 pb-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-3xl px-9 py-6 flex items-center gap-5">
          <AlertTriangle className="w-9 h-9 text-red-500 flex-shrink-0" />
          <p className="text-xl text-slate-700 font-medium leading-relaxed">
            對外銷扣件業來說，衝擊不是「碳費多少錢」，而是
            <span className="font-black text-red-600">買方直接把提不出履歷的供應商換掉</span>。
          </p>
        </div>
      </div>

    </div>
  );
}
