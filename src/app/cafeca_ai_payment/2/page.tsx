'use client';

import { PaySceneShell } from '@/components/slide/pay_slide_shell';
import { Bot, Search, ShieldCheck, CreditCard, Store, Bell } from 'lucide-react';

export default function PaySlide2() {
  const beats = [
    { time: '22:47:03', icon: Bot, who: '家用代理人', text: '偵測到自動餵食器的飼料存量低於 12%，依過去 90 天用量推估，後天中午會吃完。' },
    { time: '22:47:05', icon: Search, who: '家用代理人', text: '比對全家 APP 裡的全寵家與另外 5 家通路：同款 7.5kg 價差 NT$212，選擇明早 8 點可在巷口全家取貨的方案。' },
    { time: '22:47:06', icon: ShieldCheck, who: '授權規則', text: '寵物類、單筆 NT$1,500 以下、白名單商家——符合主人三個月前設定的規則，不需再問。' },
    { time: '22:47:06', icon: CreditCard, who: '支付網路', text: '以一次性代碼化憑證完成授權，商家收到的不是卡號，而是「這筆、這家、這個金額」。' },
    { time: '22:47:07', icon: Store, who: '門市', text: '訂單進入巷口那家全家的隔日取貨清單。' },
  ];

  return (
    <PaySceneShell
      slug="COLD OPEN · 內景　台北市中山區　租屋處　週四　22:47"
      pageLabel="02 / 20"
      footer="情境推演：依 2025–2026 年國際卡組織已公開的代理支付機制（代碼化憑證、使用者授權規則）改寫，非特定產品實況。"
    >
      <div className="grid grid-cols-[1fr_380px] gap-10 flex-1 min-h-0">
        <div className="flex flex-col">
          <div className="text-[14px] text-ink-400 mb-2">小安睡著了。她的貓「麻糬」還醒著。</div>
          <h2 className="text-[34px] font-black leading-tight text-ink-900 mb-6">
            四秒內，一筆交易完成了——<br />
            <span className="text-plus-500">沒有任何一個人按下付款鍵。</span>
          </h2>
          <div className="flex flex-col gap-2.5 flex-1">
            {beats.map((b) => (
              <div key={b.time + b.who} className="flex items-start gap-4 bg-white rounded-2xl px-4 py-2.5 shadow-sm border border-plus-100">
                <span className="text-[12px] font-mono font-bold text-plus-500 w-[70px] flex-shrink-0 pt-0.5">{b.time}</span>
                <b.icon className="w-4 h-4 text-bird-600 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[12.5px] font-bold text-ink-900 mr-2">{b.who}</span>
                  <span className="text-[13.5px] text-ink-500 leading-snug">{b.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260923 - Luphia) 右側：隔天早上小安手機上唯一看到的東西 */}
        <div className="flex flex-col justify-center">
          <div className="text-[12px] tracking-[0.2em] text-ink-400 mb-3">隔天 07:12 · 小安的鎖定畫面</div>
          <div className="rounded-[32px] border-[6px] border-ink-900 bg-gradient-to-b from-bird-100 to-plus-100 p-5 shadow-2xl">
            <div className="text-center text-[44px] font-light text-ink-900 leading-none mb-1">07:12</div>
            <div className="text-center text-[11px] text-ink-500 mb-5">9月25日 星期五</div>
            <div className="rounded-2xl bg-white/85 px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Bell className="w-3.5 h-3.5 text-ink-400" />
                <span className="text-[11px] font-bold text-ink-400">？？？</span>
                <span className="text-[10px] text-ink-400 ml-auto">9 小時前</span>
              </div>
              <div className="text-[12.5px] text-ink-900 leading-snug">已依你的規則替麻糬補貨 NT$1,280，今早 8:00 起可到巷口全家取貨。</div>
            </div>
          </div>
          <div className="mt-6 rounded-[24px] bg-plus-500 px-5 py-4 shadow-lg shadow-plus-500/25">
            <div className="text-[16px] font-black text-white leading-snug">這則通知上，應該寫誰的名字？</div>
            <div className="text-[12.5px] text-white/85 mt-1 leading-snug">代理人？發卡銀行？卡組織？超商？還是錢包？——這是整份報告要回答的問題。</div>
          </div>
        </div>
      </div>
    </PaySceneShell>
  );
}
