'use client';

import { Sparkles, ClipboardCheck, HardHat, FileSignature, Wallet, MapPinned, Users } from 'lucide-react';

export default function Pmis20060723Slide3() {
  const groups = [
    {
      icon: ClipboardCheck,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      title: '履約管控',
      modules: ['PMIS-01 行事曆預警', 'PMIS-02 待辦追蹤', 'PMIS-03 工程專案', 'PMIS-04 時程進度'],
    },
    {
      icon: HardHat,
      accent: 'from-emerald-500 to-teal-500',
      tint: 'text-emerald-600',
      title: '現場・品質・環安',
      modules: ['PMIS-05 環安衛管理', 'PMIS-07 品質稽核', 'PMIS-10 智能監測'],
    },
    {
      icon: FileSignature,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      title: '文件・簽核・報告',
      modules: ['PMIS-06 簽核管理', 'PMIS-11 工程日誌', 'PMIS-13 資料庫'],
    },
    {
      icon: Wallet,
      accent: 'from-violet-500 to-purple-500',
      tint: 'text-violet-600',
      title: '財務・永續',
      modules: ['PMIS-08 財務管理', 'PMIS-09 碳盤查'],
    },
    {
      icon: MapPinned,
      accent: 'from-rose-500 to-pink-500',
      tint: 'text-rose-600',
      title: '空間・現場',
      modules: ['PMIS-12 GIS 地圖'],
    },
    {
      icon: Users,
      accent: 'from-slate-500 to-slate-600',
      tint: 'text-slate-600',
      title: '組織與權限',
      modules: ['PMIS-14 組織管理'],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-14 pb-5 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Module Map
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          功能模組地圖，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">六大領域涵蓋全生命週期</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          14 個模組以六大領域組織，資料彼此連動，串起監造工作的每一環。
        </p>
      </div>

      <div className="z-10 flex-1 px-20 pb-10 grid grid-cols-3 grid-rows-2 gap-5">
        {groups.map((g) => {
          const Icon = g.icon;
          return (
            <div key={g.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className={`h-1.5 w-full bg-gradient-to-r ${g.accent}`}></div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center ${g.tint}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-slate-800">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.modules.map((m) => (
                    <span key={m} className="text-[13px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
