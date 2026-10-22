'use client';

import { FileSignature, Send, Presentation, Rocket, Trophy, PackageCheck } from 'lucide-react';

export default function IsuntvNcafSlide11() {
  const milestones = [
    {
      icon: FileSignature,
      date: '9/10 前',
      title: '簽署合作意向書',
      desc: '一頁即可，我們備妥草稿；為送件必附文件',
      highlight: true,
    },
    {
      icon: Send,
      date: '9/18',
      title: '完成送件',
      desc: 'Email 送達執行單位，17:00 截止',
      highlight: false,
    },
    {
      icon: Presentation,
      date: '10 月（預計）',
      title: '審查會議簡報',
      desc: '雙方共同出席，依五大評分項簡報',
      highlight: false,
    },
    {
      icon: Rocket,
      date: 'M1–M2',
      title: '平台上線・競賽公告',
      desc: 'iSunTV MVP 上線，競賽章程公告開跑',
      highlight: false,
    },
    {
      icon: Trophy,
      date: 'M3–M6',
      title: '徵件・工作坊・評審',
      desc: '巡迴工作坊、創作期、藝評人評審',
      highlight: false,
    },
    {
      icon: PackageCheck,
      date: 'M7–M8',
      title: '頒獎・展映・開源釋出',
      desc: '頒獎典禮與成果展，核心物件開源結案',
      highlight: false,
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span className="text-sm font-bold text-amber-600 tracking-widest">執行時程</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-10">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          從今天到成果展：<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-violet-600">約 8 個月的計畫期程</span>
        </h2>
      </div>

      <div className="z-10 px-16 grid grid-cols-3 gap-4 flex-1">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.title}
              className={`rounded-2xl p-5 flex flex-col shadow-sm ${
                m.highlight
                  ? 'bg-gradient-to-br from-violet-600 to-violet-800 text-white shadow-lg'
                  : 'bg-white border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${m.highlight ? 'bg-white/15' : 'bg-slate-100'}`}>
                  <Icon className={`w-5 h-5 ${m.highlight ? 'text-amber-300' : 'text-slate-600'}`} />
                </div>
                <span className={`text-xs font-black ${m.highlight ? 'text-white/60' : 'text-slate-300'}`}>{(i + 1).toString().padStart(2, '0')}</span>
              </div>
              <div className={`text-sm font-black mb-1 ${m.highlight ? 'text-amber-300' : 'text-violet-600'}`}>{m.date}</div>
              <h3 className={`text-[19px] font-black mb-1.5 ${m.highlight ? 'text-white' : 'text-slate-800'}`}>{m.title}</h3>
              <p className={`text-[13px] leading-relaxed ${m.highlight ? 'text-violet-100' : 'text-slate-500'}`}>{m.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-7">
        <p className="text-center text-sm text-slate-400">
          計畫期程以數產署核定公告為準（原則自公告日起約 8 個月）；M1–M8 為核定後的執行月份。
        </p>
      </div>

    </div>
  );
}
