'use client';

import { Blocks, MonitorPlay, Megaphone, Wallet } from 'lucide-react';

export default function IsuntvNcafSlide12() {
  const budgets = [
    {
      icon: Blocks,
      pct: '40%',
      amount: '1,200 萬',
      title: 'AI 模型訓練與中介平台',
      desc: '中介平台開發、藝文評論模型訓練與調校、開源文件（Model Card / SBOM）、資訊安全檢驗。',
      bar: 'w-[40%]',
      color: 'bg-violet-500',
      text: 'text-violet-600',
      bg: 'bg-violet-50',
    },
    {
      icon: MonitorPlay,
      pct: '20%',
      amount: '600 萬',
      title: 'AI 應用系統開發',
      desc: 'iSunTV 平台前後端與使用者介面、AI 藝評專區、測試驗證與部署。',
      bar: 'w-[20%]',
      color: 'bg-amber-500',
      text: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Megaphone,
      pct: '40%',
      amount: '1,200 萬',
      title: 'AI 生態系場域擴散',
      desc: '競賽辦理（獎金、評審費、頒獎與展映）、300+ 場域導入與輔導、巡迴工作坊、後續服務營運。',
      bar: 'w-[40%]',
      color: 'bg-emerald-500',
      text: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-bold text-emerald-600 tracking-widest">經費規劃</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          3,000 萬怎麼用：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-600">依徵案建議配比規劃</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex flex-col gap-4 flex-1">
        {budgets.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.title} className="bg-white border border-slate-200 rounded-2xl px-7 py-4 shadow-sm flex items-center gap-6">
              <div className={`w-14 h-14 ${b.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-7 h-7 ${b.text}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-[20px] font-black text-slate-800">{b.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-[26px] font-black ${b.text}`}>{b.pct}</span>
                    <span className="text-sm text-slate-400 font-bold">約 {b.amount}</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full mb-2 overflow-hidden">
                  <div className={`h-full ${b.color} ${b.bar} rounded-full`}></div>
                </div>
                <p className="text-[14px] text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-7">
        <div className="bg-slate-800 rounded-2xl px-7 py-4 flex items-center gap-4 shadow-lg">
          <Wallet className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <p className="text-[15px] text-slate-200 leading-relaxed">
            <span className="font-bold text-white">國藝會零出資：</span>經費由數產署核定撥付、CAFECA 負責執行；雲端服務型無設備自籌要求。實際金額依審查會議決議核定。
          </p>
        </div>
      </div>

    </div>
  );
}
