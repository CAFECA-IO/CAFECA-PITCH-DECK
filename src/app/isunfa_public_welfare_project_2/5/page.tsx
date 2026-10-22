'use client';

import { Target, Bot, HeartHandshake, Megaphone, Gift, RefreshCcw, GitFork, ArrowRight, Sparkles } from 'lucide-react';

export default function IsunfaPwp2Slide5() {
  const stages = [
    {
      id: 's1',
      no: '01',
      icon: Megaphone,
      title: '基金會示範場域深訪',
      desc: '以唐氏症基金會全台據點為示範場域，盤點人事、行政、會計與影響力溝通四大流程的真實需求',
      tint: 'bg-orange-50',
      ink: 'text-orange-600',
    },
    {
      id: 's2',
      no: '02',
      icon: Gift,
      title: '免費／低門檻導入',
      desc: '資源弱勢之社福機構零費用導入「愛智扶」，公益輔導完成首月上線與教育訓練',
      tint: 'bg-rose-50',
      ink: 'text-rose-600',
    },
    {
      id: 's3',
      no: '03',
      icon: RefreshCcw,
      title: '資料回流訓練模型',
      desc: '去識別化後之行政文書、帳務與流程數據回饋 FAITH 領域型模型，形成正向循環',
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
    },
    {
      id: 's4',
      no: '04',
      icon: GitFork,
      title: '開源釋出與擴散',
      desc: '核心模型與中介平台以 MIT 授權釋出，供其他資服業者為各類社福組織接續開發應用服務',
      tint: 'bg-emerald-50',
      ink: 'text-emerald-600',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Goals &amp; Approach</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 mb-4">
          <Target className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-semibold text-orange-600">計畫目標與推動模式</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-slate-800">
          雙軸並進：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">智能後台 × 影響力溝通</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) Two Axes */}
      <div className="z-10 px-16 grid grid-cols-2 gap-6">
        <div className="bg-white border border-orange-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-orange-500 tracking-widest uppercase">軸線 A</div>
              <h3 className="text-lg font-bold text-slate-800">智能後台（人事×行政×會計）</h3>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            從人事排班出勤、公文與補助申請，到 <span className="font-bold text-slate-700">憑證自動入帳、專款專用勾稽與固定資產／捐贈物資盤點</span>，
            AI 一站式代勞，管理人員只需最終確認——讓一位行政量能撐起整個機構。
          </p>
        </div>
        <div className="bg-white border border-blue-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-400"></div>
          <div className="flex items-center gap-3 mb-3 mt-1">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-blue-500 tracking-widest uppercase">軸線 B</div>
              <h3 className="text-lg font-bold text-slate-800">影響力溝通（對外增信）</h3>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            AI 彙整服務時數、方案成效與善款運用軌跡，量化為 <span className="font-bold text-slate-700">ESG／年度影響力報告與徵信素材</span>，
            主動向社會大眾溝通基金會帶來的正面影響力，把行政數據轉化為勸募信任。
          </p>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) 4-Stage Model */}
      <div className="z-10 px-16 pt-5 pb-4 flex-1 flex flex-col min-h-0">
        <div className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-2.5">公益型生態系推動模式（四段式）</div>
        <div className="grid grid-cols-4 gap-4 items-start">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 ${s.tint} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.ink}`} />
                    </div>
                    <span className={`text-2xl font-black ${s.ink} opacity-30`}>{s.no}</span>
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-800 mb-2">{s.title}</h4>
                  <p className="text-[11.5px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < stages.length - 1 && (
                  <div className="absolute top-1/2 -right-[13px] -translate-y-1/2 z-10 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260908 - Luphia) Bottom Insight */}
      <div className="z-10 px-16 pb-7">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <Sparkles className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            <span className="font-black text-orange-400">雙軸互補</span>：後台省下的每一小時，都轉化為服務對象的陪伴時間；
            對外說清楚的每一份成效，都轉化為下一筆善款的信任。
          </p>
        </div>
      </div>

    </div>
  );
}
