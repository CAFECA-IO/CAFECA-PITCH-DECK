'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Banknote, PenLine, Nfc, QrCode, Repeat, Bot } from 'lucide-react';

export default function PaySlide3() {
  const eras = [
    { icon: Banknote, era: '現金', act: '數鈔、找零', sec: '~20 秒', h: 100 },
    { icon: PenLine, era: '刷卡簽名', act: '刷卡、簽單', sec: '~15 秒', h: 78 },
    { icon: Nfc, era: '感應', act: '靠一下', sec: '~3 秒', h: 36 },
    { icon: QrCode, era: '掃碼錢包', act: '打開 App、掃碼', sec: '~5 秒', h: 44 },
    { icon: Repeat, era: '綁定扣款', act: '設定一次', sec: '0 秒／筆', h: 12 },
    { icon: Bot, era: '代理支付', act: '說一次規則', sec: '沒有「動作」', h: 3 },
  ];

  return (
    <PaySlideShell
      act="PROLOGUE"
      scene="序幕"
      accent="ink"
      pageLabel="03 / 26"
      title={<>支付的歷史，是一部<span className="text-plus-600">「付款動作」不斷消失</span>的歷史</>}
      subtitle={<>每一代支付工具都把付款那一刻縮短一點；每一次縮短，都有一群靠「那一刻」賺錢的人被重新洗牌。這一次不是縮短——是那一刻本身不見了。</>}
      footer="秒數為一般門市結帳情境的量級示意，用於比較，非實測數據。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_300px] gap-8 pb-2">
        <div className="bg-white border border-ink-200 rounded-2xl p-6 flex flex-col shadow-sm">
          <div className="text-[11px] font-bold tracking-widest text-ink-400 mb-4">付款那一刻的長度（示意）</div>
          <div className="flex-1 grid grid-cols-6 gap-4 items-end">
            {eras.map((e, i) => (
              <div key={e.era} className="flex flex-col items-center h-full justify-end">
                <span className={`text-[12px] font-mono mb-2 ${i === eras.length - 1 ? 'text-plus-600 font-bold' : 'text-ink-400'}`}>{e.sec}</span>
                <div
                  className={`w-full rounded-t-xl ${i === eras.length - 1 ? 'bg-plus-500' : 'bg-ink-300'}`}
                  style={{ height: `${e.h * 2.2}px` }}
                />
                <div className="mt-3 flex flex-col items-center">
                  <e.icon className={`w-5 h-5 mb-1.5 ${i === eras.length - 1 ? 'text-plus-600' : 'text-ink-400'}`} />
                  <span className="text-[14px] font-black text-ink-900">{e.era}</span>
                  <span className="text-[11.5px] text-ink-400">{e.act}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {[
            { k: '感應卡來了', v: '簽單與櫃檯核對的工作消失，收單機升級潮出現。' },
            { k: '掃碼錢包來了', v: '「打開 App」成為黃金時刻——首頁、回饋、廣告都長在這一秒上。' },
            { k: '代理人來了', v: '沒有人打開 App。黃金時刻從結帳頁，搬到「設定規則」的那一刻。' },
          ].map((c, i) => (
            <div key={c.k} className={`flex-1 rounded-2xl px-5 py-4 border ${i === 2 ? 'bg-plus-50 border-plus-300' : 'bg-white border-ink-200 shadow-sm'}`}>
              <div className={`text-[14px] font-black mb-1 ${i === 2 ? 'text-plus-700' : 'text-ink-900'}`}>{c.k}</div>
              <div className="text-[13px] text-ink-500 leading-snug">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </PaySlideShell>
  );
}
