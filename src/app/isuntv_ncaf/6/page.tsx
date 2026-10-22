'use client';

import { PenLine, Film, AudioLines, Share2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function IsuntvNcafSlide6() {
  const steps = [
    {
      icon: PenLine,
      color: 'violet',
      title: '腳本與分鏡',
      desc: 'AI 協作編劇：從一句構想展開劇本、分鏡與運鏡建議，創作者保有最終決定權。',
    },
    {
      icon: Film,
      color: 'amber',
      title: '影像生成',
      desc: '文生影、圖生影與素材混編，風格一致性控制，支援在地語境與文化元素。',
    },
    {
      icon: AudioLines,
      color: 'emerald',
      title: '配音配樂',
      desc: '中文語音合成、旁白多語版本與 AI 配樂，全部在同一條製作流程內完成。',
    },
    {
      icon: Share2,
      color: 'rose',
      title: '發布分享',
      desc: '個人頻道、策展專題與社群互動；每部作品都保留完整創作歷程紀錄。',
    },
  ];

  const colorMap: { [key: string]: { bg: string; text: string } } = {
    violet: { bg: 'bg-violet-50', text: 'text-violet-500' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-500' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-500' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">應用平台</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-10">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          iSunTV：<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">從一句構想到一部成片</span>，一站完成
        </h2>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-4 flex-1">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const c = colorMap[step.color];
          return (
            <div key={step.title} className="flex items-stretch gap-4 flex-1">
              <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col shadow-sm">
                <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${c.text}`} />
                </div>
                <div className="text-xs font-black text-slate-400 mb-1">STEP {i + 1}</div>
                <h3 className="text-[21px] font-black text-slate-800 mb-2">{step.title}</h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center"><ArrowRight className="w-6 h-6 text-slate-300 flex-shrink-0" /></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-8">
        <div className="bg-slate-800 rounded-2xl px-7 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span className="text-white font-bold">全程雲端、免安裝，計畫期間對參賽者免費</span>
          </div>
          <span className="text-slate-300 text-sm">遵循政府生成式 AI 指引與個資法·不使用中國來源模型·作品著作權歸創作者</span>
        </div>
      </div>

    </div>
  );
}
