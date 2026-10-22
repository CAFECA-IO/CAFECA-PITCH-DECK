'use client';

import { Coffee, Brain, Store, ArrowRight } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide2() {
  const shopFacts = [
    { k: '定位', v: '司康專賣 × 選物店' },
    { k: '位置', v: '台北市松山區民生東路四段 97 巷' },
    { k: '空間', v: '座位不多，忙時與其他客人併桌' },
  ];

  // Info: (20260916 - Luphia) 這三條店規就是最原始的客群篩選：老闆很清楚自己要經營誰
  const shopRules = ['低消一杯飲料，平日不限時', '10 歲以下孩童不入內', '假日僅接待 2 人以下'];

  const ownerKnows = [
    '哪一位是熟客、上次坐哪個位子、點的是哪一款司康',
    '誰是專程來吃司康，誰只是想找個地方坐一個下午',
    '誰隔兩週一定會再來，誰是路過一次就不會回來的觀光客',
    '為什麼假日不接三人以上——併桌會毀掉這裡的安靜',
  ];

  const scaleStats = [
    { v: '約 200 坪', k: '賣場面積' },
    { v: '上萬個', k: 'SKU 品項' },
    { v: '2,180 筆', k: '日均交易' },
    { v: '數十人', k: '輪班員工' },
  ];

  const losses = [
    '沒有任何一位店員，認得出今天走進來的每一個人',
    '沒有任何一顆腦袋，記得住每天 1.4 萬筆品項',
    '於是我們有了會員系統——但它只記得卡號，不記得人',
  ];

  return (
    <CrmSlideShell
      chapter="破題 · 從一間咖啡店說起"
      pageLabel="02 / 20"
      compact
      title={<>最早的 CRM，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">是一個記得客人的老闆</span></>}
      subtitle="台北民生社區的「勺子咖啡店」，一家司康專賣的獨立咖啡館。沒有會員系統、沒有 CRM、沒有一張分析報表——但老闆認得每一位走進來的人。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="flex gap-5 flex-1">

          <div className="flex-[34] rounded-2xl border border-orange-200 bg-orange-50/50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3.5">
              <Coffee className="w-5 h-5 text-orange-600" />
              <span className="text-[16px] font-black text-slate-900">勺子咖啡店</span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">SPOON CAFE</span>
            </div>

            <div className="space-y-2.5">
              {shopFacts.map((fact) => (
                <div key={fact.v} className="flex gap-3 items-start">
                  <span className="text-[10.5px] text-slate-400 w-[30px] flex-shrink-0 pt-[2px]">{fact.k}</span>
                  <span className="text-[12.5px] text-slate-700 leading-snug">{fact.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3.5 border-t border-orange-200 flex-1">
              <div className="text-[11px] font-bold text-orange-600 tracking-wider mb-2.5">店家規則＝最原始的客群篩選</div>
              <ul className="space-y-2">
                {shopRules.map((rule) => (
                  <li key={rule} className="flex gap-2 text-[12.5px] text-slate-700 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-[6px] flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] text-slate-400 leading-snug mt-3 pt-3 border-t border-orange-200">
              資料整理自該店公開資訊與媒體報導，與本簡報無合作關係，僅作為對照案例引用。
            </p>
          </div>

          <div className="flex-[38] rounded-2xl border border-slate-200 bg-white p-5 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <Brain className="w-5 h-5 text-slate-500" />
              <span className="text-[16px] font-black text-slate-900">老闆知道，但會員系統不知道的事</span>
            </div>
            <ul className="space-y-3.5 flex-1 flex flex-col justify-center">
              {ownerKnows.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] text-slate-700 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-[7px] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-[28] rounded-2xl border border-slate-200 bg-white p-5 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <Store className="w-5 h-5 text-slate-500" />
              <span className="text-[16px] font-black text-slate-900">把它放大 200 倍</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {scaleStats.map((stat) => (
                <div key={stat.k} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <div className="text-[16px] font-black text-slate-900 leading-none">{stat.v}</div>
                  <div className="text-[10px] text-slate-400 mt-1.5">{stat.k}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-2.5 flex-1">
              {losses.map((item) => (
                <li key={item} className="flex gap-2 text-[12px] text-slate-500 leading-snug">
                  <ArrowRight className="w-3 h-3 text-slate-300 mt-[3px] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-7 py-4 shadow-sm">
          <p className="text-[22px] font-black text-slate-900 leading-[1.45]">
            會員系統不是 CRM，它只是一張識別證。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">真正的 CRM，是把那顆「老闆的腦袋」，重新裝回 200 坪的賣場裡。</span>
          </p>
        </div>

      </div>
    </CrmSlideShell>
  );
}
