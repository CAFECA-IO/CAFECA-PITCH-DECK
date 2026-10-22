'use client';

import { UserX, Undo2, PackageX, Route, ArrowRight } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide9() {
  const blind = [
    {
      icon: UserX,
      title: '看不見「沒買的人」',
      body: '每 100 位進店者，約 21 位空手離開。他們的意圖、他們卡在哪一格貨架，在帳本上完全不存在。',
      metric: '21%',
      unit: '空手離店率',
    },
    {
      icon: Undo2,
      title: '看不見「猶豫」',
      body: '拿起又放回，是離成交最近的一次失敗。單店每日估計 1,180 次，全都沒有留下任何一筆紀錄。',
      metric: '1,180',
      unit: '次／日 拿起放回',
    },
    {
      icon: PackageX,
      title: '看不見「缺貨」',
      body: '貨架空了兩個多小時，帳上只會顯示「這個品項今天賣得少」。需求與供給的落差，被記成了業績衰退。',
      metric: '2.4 hr',
      unit: '日均貨架斷貨',
    },
    {
      icon: Route,
      title: '看不見「真實動線」',
      body: '第一層的動線是用掃描時序推估出來的機率路徑，不是量測。轉角、端架、逆行與折返，全部是空白。',
      metric: '±1.4',
      unit: '貨架格 推估誤差',
    },
  ];

  const funnel = [
    { label: '經過店門', value: 100, width: '100%', color: 'bg-slate-500' },
    { label: '進入賣場', value: 100, width: '100%', color: 'bg-cyan-500' },
    { label: '走進至少一條走道', value: 96, width: '96%', color: 'bg-cyan-400' },
    { label: '拿起至少一件商品', value: 87, width: '87%', color: 'bg-emerald-400' },
    { label: '完成結帳', value: 79, width: '79%', color: 'bg-emerald-300' },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 1 · 天花板"
      chapterColor="text-amber-400"
      chapterDot="bg-amber-400"
      pageLabel="09 / 22"
      compact
      title={<>但第一層有天花板：<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">帳本看不見的四件事</span></>}
      subtitle="帳本是「成交紀錄」。凡是沒有成交的，它一律沉默——而營運要改善的，恰恰是那些沒有成交的部分。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[62] grid grid-cols-2 gap-3.5 h-full">
          {blind.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-2.5">
                  <Icon className="w-5 h-5 text-amber-400" />
                  <div className="text-right">
                    <div className="text-[20px] font-black text-white leading-none font-mono">{item.metric}</div>
                    <div className="text-[9.5px] text-slate-500 mt-1">{item.unit}</div>
                  </div>
                </div>
                <div className="text-[15px] font-black text-white leading-tight">{item.title}</div>
                <p className="text-[12px] text-slate-400 leading-snug mt-2">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="flex-[38] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex-1 flex flex-col">
            <div className="text-[13px] font-bold text-white mb-1">賣場真實漏斗（每 100 位進店者）</div>
            <div className="text-[10.5px] text-slate-500 mb-4">灰色以上帳本可見，其餘全靠推估</div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {funnel.map((step) => (
                <div key={step.label}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-slate-300">{step.label}</span>
                    <span className="font-mono font-bold text-white">{step.value}</span>
                  </div>
                  <div className="h-[9px] rounded-full bg-white/[0.07] overflow-hidden">
                    <div className={`h-full rounded-full ${step.color}`} style={{ width: step.width }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline gap-2">
              <span className="text-[30px] font-black text-rose-400 leading-none font-mono">21</span>
              <span className="text-[12px] text-slate-400 leading-snug">位進了店、卻沒有在帳本上留下任何一個字的人。</span>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.12] to-transparent p-5">
            <div className="flex items-center gap-2 mb-2">
              <ArrowRight className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-cyan-400">NEXT LAYER</span>
            </div>
            <p className="text-[17px] font-black text-white leading-snug">
              要看見沒有成交的事，<br />
              <span className="text-cyan-300">就必須讓賣場自己有眼睛。</span>
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
