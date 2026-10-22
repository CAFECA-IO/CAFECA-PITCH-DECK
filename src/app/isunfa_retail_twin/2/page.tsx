'use client';

import { Coffee, Brain, Store, ArrowRight } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide2() {
  const shopFacts = [
    { k: '定位', v: '司康專賣 × 選物店' },
    { k: '位置', v: '台北市松山區民生東路四段 97 巷' },
    { k: '空間', v: '座位不多，忙時與其他客人併桌' },
  ];

  // Info: (20260826 - Luphia) 這三條店規正是全篇的伏筆：老闆對「要什麼客人」的判斷，一條都沒寫進報表
  const shopRules = [
    '低消一杯飲料，平日不限時',
    '10 歲以下孩童不入內',
    '假日僅接待 2 人以下',
  ];

  const ownerKnows = [
    '哪一位是熟客、上次坐哪個位子、點的是哪一款司康',
    '今天哪一盤會先賣完，明天要多烤幾顆',
    '誰是專程來吃司康，誰只是想找個地方坐一個下午',
    '為什麼假日不接三人以上——併桌會毀掉這裡的安靜',
    '為什麼 10 歲以下不入內——那不是規定，是對空間體驗的承諾',
  ];

  const scaleStats = [
    { v: '約 200 坪', k: '賣場面積' },
    { v: '上萬個', k: 'SKU 品項' },
    { v: '2,180 筆', k: '日均交易' },
    { v: '數十人', k: '輪班員工' },
  ];

  const losses = [
    '沒有任何一個人，站得到全店每一條走道',
    '沒有任何一顆腦袋，記得住每天 1.4 萬筆品項',
    '於是我們發明了報表——用資訊量，換取可管理性',
  ];

  return (
    <TwinSlideShell
      chapter="破題 · 從一間咖啡店說起"
      chapterColor="text-amber-400"
      chapterDot="bg-amber-400"
      pageLabel="02 / 22"
      compact
      title={<>先講一間<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">只有一個人的咖啡店</span></>}
      subtitle="台北民生社區的「勺子咖啡店 Spoon Cafe」，一家司康專賣的獨立咖啡館。沒有 POS 分析、沒有 BI 系統、沒有管理報表——但老闆知道店裡發生的每一件事。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="flex gap-5 flex-1">

          <div className="flex-[34] rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Coffee className="w-5 h-5 text-amber-400" />
              <span className="text-[16px] font-black text-white">勺子咖啡店</span>
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">SPOON CAFE</span>
            </div>
            <div className="space-y-2.5">
              {shopFacts.map((fact) => (
                <div key={fact.v} className="flex gap-3 items-start">
                  <span className="text-[10.5px] text-amber-300/80 w-[30px] flex-shrink-0 pt-[2px]">{fact.k}</span>
                  <span className="text-[12.5px] text-slate-200 leading-snug">{fact.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-white/10 flex-1">
              <div className="text-[11px] font-bold text-amber-300 tracking-wider mb-2.5">店家規則</div>
              <ul className="space-y-2">
                {shopRules.map((rule) => (
                  <li key={rule} className="flex gap-2 text-[12.5px] text-slate-200 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-[6px] flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] text-slate-500 leading-snug mt-3 pt-3 border-t border-white/10">
              資料整理自該店公開資訊與媒體報導，與本提案無合作關係，僅作為對照案例引用。
            </p>
          </div>

          <div className="flex-[38] rounded-2xl border border-white/12 bg-white/[0.04] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Brain className="w-5 h-5 text-emerald-400" />
              <span className="text-[16px] font-black text-white">老闆知道，但報表寫不出來的事</span>
            </div>
            <ul className="space-y-3.5 flex-1 flex flex-col justify-center">
              {ownerKnows.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-slate-300 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-[7px] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-[28] rounded-2xl border border-white/12 bg-white/[0.04] p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Store className="w-5 h-5 text-cyan-400" />
              <span className="text-[16px] font-black text-white">把它放大 200 倍</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {scaleStats.map((stat) => (
                <div key={stat.k} className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2.5">
                  <div className="text-[16px] font-black text-cyan-300 leading-none">{stat.v}</div>
                  <div className="text-[10px] text-slate-500 mt-1.5">{stat.k}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 flex-1">
              {losses.map((item) => (
                <li key={item} className="flex gap-2 text-[12px] text-slate-400 leading-snug">
                  <ArrowRight className="w-3 h-3 text-slate-600 mt-[3px] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="rounded-2xl border border-white/12 bg-gradient-to-r from-white/[0.08] to-transparent px-7 py-4">
          <p className="text-[22px] font-black text-white leading-[1.45]">
            報表不是為了看見更多，而是為了在看不見的時候還能管理。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">數位孿生要做的，是把那顆「老闆的腦袋」，重新裝回 200 坪的賣場裡。</span>
          </p>
        </div>

      </div>
    </TwinSlideShell>
  );
}
