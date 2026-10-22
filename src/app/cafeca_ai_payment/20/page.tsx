'use client';

import { PaySceneShell } from '@/components/slide/pay_slide_shell';
import { Bell } from 'lucide-react';

export default function PaySlide20() {
  return (
    <PaySceneShell
      slug="EPILOGUE · 同一個週四　22:47　—　再看一次"
      pageLabel="20 / 20"
      footer="CAFECA 卡菲卡金融科技 · 本報告所有情境均為推演，數據來源已標註於各頁頁尾。"
    >
      <div className="grid grid-cols-[1fr_400px] gap-12 flex-1 min-h-0">
        <div className="flex flex-col justify-center">
          <div className="text-[15px] text-ink-500 mb-4">還是那四秒。還是沒有人按下付款鍵。<br />但這一次，隔天早上的通知寫上了名字。</div>
          <h2 className="text-[48px] font-black leading-[1.2] text-ink-900">
            當 AI 學會支付，<br />
            最後被記住的，<br />
            <span className="text-plus-500">是那個替你守住規則的名字。</span>
          </h2>

          <div className="mt-9 flex gap-3">
            {[
              { k: '一個判斷', v: '介面會消失，信任不會' },
              { k: '一個位置', v: '代理時代的在地信任層' },
              { k: '一個起點', v: '寵物補貨 × 門市取貨' },
            ].map((c) => (
              <div key={c.k} className="rounded-[20px] bg-white border border-plus-100 shadow-sm px-5 py-3">
                <div className="text-[11px] font-bold tracking-[0.2em] text-plus-500 mb-1">{c.k}</div>
                <div className="text-[14px] font-bold text-ink-900 leading-snug">{c.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-[12px] tracking-[0.2em] text-ink-400 mb-3">隔天 07:12 · 小安的鎖定畫面</div>
          <div className="rounded-[32px] border-[6px] border-ink-900 bg-gradient-to-b from-bird-100 to-plus-100 p-5 shadow-2xl">
            <div className="text-center text-[44px] font-light text-ink-900 leading-none mb-1">07:12</div>
            <div className="text-center text-[11px] text-ink-500 mb-5">9月25日 星期五</div>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-lg ring-2 ring-plus-500">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-3.5 h-3.5 text-plus-500" />
                <span className="text-[11px] font-black text-plus-500">全盈+PAY</span>
                <span className="text-[10px] text-ink-400 ml-auto">9 小時前</span>
              </div>
              <div className="text-[12.5px] text-ink-900 leading-snug">已依你的規則替麻糬補貨 NT$1,280，今早 8:00 起可到巷口全家取貨。本月寵物額度剩 NT$1,160。</div>
            </div>
          </div>
          <div className="mt-6 rounded-[24px] bg-plus-500 px-5 py-4 shadow-lg shadow-plus-500/25">
            <div className="text-[13px] font-bold tracking-[0.2em] text-white/85 mb-1">下一步提議</div>
            <div className="text-[14px] text-white leading-snug">一場 90 分鐘工作坊：挑定第一個試點場景與國家、畫出授權書的第一版欄位、列出要先和誰談。</div>
          </div>
        </div>
      </div>
    </PaySceneShell>
  );
}
