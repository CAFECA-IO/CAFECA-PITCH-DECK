'use client';

import { PaySceneShell } from '@/components/slide/pay_slide_shell';
import { Coffee, Milk, Receipt, PawPrint, Bike, Package, Gift, Hand } from 'lucide-react';

export default function PaySlide14() {
  const week = [
    { day: '週一 07:40', icon: Coffee, scene: 'Let’s Café 寄杯', act: '上班路上經過門市，代理人從寄杯扣一杯大冰拿，出杯時剛好到。', ask: false },
    { day: '週二 18:10', icon: Milk, scene: '隨買跨店取', act: '冰箱只剩一瓶鮮乳，趁「任選 2 件 95 折」補兩瓶鮮乳、一盒雞蛋進寄存。', ask: false },
    { day: '週三 12:05', icon: Receipt, scene: '代收繳費', act: '電費比上期高 26%，超過她設的 20% 門檻——代理人停下來問她。', ask: true },
    { day: '週四 22:47', icon: PawPrint, scene: '全寵家', act: '麻糬的飼料。就是開場那四秒，明早巷口門市取貨。', ask: false },
    { day: '週五 19:30', icon: Bike, scene: 'FamiNow 外送', act: '加班。晚餐上限 NT$400，選了她上個月評價最高的兩樣。', ask: false },
    { day: '週六 10:00', icon: Package, scene: '店到店', act: '二手嬰兒車賣出，代理人付運費、印寄件單，她只要把車搬到門市。', ask: false },
    { day: '週日 21:00', icon: Gift, scene: 'Fa 點數', act: '一批點數下週到期，換成她每個月都會買的那款衛生紙。', ask: false },
  ];

  return (
    <PaySceneShell
      slug="SCENE 1 · 小安在全家的一週　—　她的生活，本來就繞著巷口那家店"
      pageLabel="14 / 20"
      footer="情境推演；全家 APP 會員 2,000 萬、每日交易會員逾 110 萬、隨買跨店取年營收破 50 億元、轉贈逾上億次、關係企業「全寵家」引自 2026 年全家法說會與媒體報導。"
    >
      <div className="grid grid-cols-[1fr_390px] gap-8 flex-1 min-h-0">
        <div className="flex flex-col min-h-0">
          <h2 className="text-[30px] font-black leading-tight text-ink-900 mb-4">
            一週、七個全家場景，<span className="text-plus-500">她只按了一次「確認」。</span>
          </h2>
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            {week.map((w) => (
              <div
                key={w.day}
                className={`flex-1 flex items-center gap-4 rounded-[18px] px-4 border ${w.ask ? 'bg-bird-50 border-bird-500 border-2' : 'bg-white border-plus-100 shadow-sm'}`}
              >
                <span className="text-[12px] font-bold text-ink-400 w-[78px] flex-shrink-0">{w.day}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${w.ask ? 'bg-bird-500' : 'bg-plus-500'}`}>
                  <w.icon className="w-4 h-4 text-white" />
                </span>
                <span className="text-[14px] font-black text-ink-900 w-[118px] flex-shrink-0">{w.scene}</span>
                <span className="text-[13px] text-ink-500 leading-snug flex-1">{w.act}</span>
                {w.ask && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-bird-500 text-white text-[11px] font-bold flex-shrink-0">
                    <Hand className="w-3 h-3" />問她
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <div className="rounded-[24px] bg-white border border-plus-100 shadow-sm px-5 py-4">
            <div className="text-[13px] font-bold text-plus-500 mb-2">小安三個月前設下的規則</div>
            <ul className="text-[13px] text-ink-700 leading-relaxed list-disc pl-4">
              <li>寄杯與日用品：照習慣補，不用問</li>
              <li>帳單照付，但比上期高 20% 先問我</li>
              <li>寵物類每月上限 NT$3,000</li>
              <li>一律在巷口那家全家取貨</li>
            </ul>
          </div>
          <div className="rounded-[24px] bg-white border border-bird-200 shadow-sm px-5 py-4">
            <div className="text-[15px] font-black text-bird-700 mb-1">洞察：寄杯，就是最早的授權書</div>
            <div className="text-[13px] text-ink-500 leading-snug">
              先付款、晚點取、可跨店、可轉贈——全家的會員早就習慣「把一筆消費交給系統保管」。隨買跨店取年營收破 <span className="font-bold text-ink-900">50 億元</span>、轉贈逾<span className="font-bold text-ink-900">上億次</span>，這正是代理人最需要的行為基礎。
            </div>
          </div>
          <div className="rounded-[24px] bg-plus-500 px-5 py-4 shadow-lg shadow-plus-500/25">
            <div className="text-[13.5px] text-white leading-snug">
              <span className="font-black">全盈的位置：</span>2,000 萬全家 APP 會員、每天 110 萬人在交易——代理人要接手的，是一套<span className="font-black">已經在跑</span>的生活。全盈要做的，是替這套生活保管規則。
            </div>
          </div>
        </div>
      </div>
    </PaySceneShell>
  );
}
