'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { MessageCircle, CreditCard, ShoppingBag, Wallet, ArrowRight } from 'lucide-react';

export default function PaySlide5() {
  const rails = [
    { icon: CreditCard, name: 'Stripe Link', note: '3 億用戶、100 萬商家可直接結帳；其他商家改發一次性虛擬卡', date: '9/8 首發' },
    { icon: ShoppingBag, name: 'Shopify Shop Pay', note: '所有 Shopify 商店可由 Muse 直接結帳', date: '9/22' },
    { icon: Wallet, name: 'PayPal', note: '宣布開放全球 PayPal 商家給 Muse 結帳', date: '9/22' },
  ];

  const paths = [
    { k: '被包裝', v: '成為虛擬卡背後一個看不見名字的扣款來源。用戶還在，品牌消失。', tone: 'bg-ink-50 border-ink-200', t: 'text-ink-500' },
    { k: '被接入', v: '成為 Muse 在當地的支付選項之一，和 Link、PayPal 並列在同一個選單。', tone: 'bg-white border-plus-200', t: 'text-plus-600' },
    { k: '被需要', v: '提供 Muse 做不到的事：門市取貨、現金儲值、外籍人士實名、在地爭議處理。', tone: 'bg-plus-50 border-plus-500 border-2', t: 'text-plus-600' },
  ];

  return (
    <PaySlideShell
      act="ACT I · 軌道已經鋪好"
      scene="第一幕 · 新玩家"
      pageLabel="05 / 20"
      title={<>兩週前，Meta 帶著代理人 <span className="text-plus-500">Muse</span> 從聊天室走進收銀台</>}
      subtitle={<>2026 年 9 月 8 日上線，先開放美國，直接住進 WhatsApp，上線 10 天衝上 App Store 第一名。卡組織鋪的是軌道，Meta 帶來的是<span className="font-bold text-ink-900">每天 36 億人打開的入口</span>。</>}
      footer="資料來源：Meta 官方公告（2026.09.08）、Stripe 新聞稿、PYMNTS、TechCrunch（2026.09）；Meta 2026 Q2 財報（Family 日活躍人數 36.0 億）。Muse 目前僅於美國上線，海外時程未公布。"
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_1.1fr] gap-6 pb-2">
        <div className="flex flex-col gap-3">
          <div className="rounded-[24px] bg-white border border-ink-200 shadow-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-plus-500" />
              <span className="text-[16px] font-black text-ink-900">Muse 怎麼付錢</span>
            </div>
            <div className="flex flex-col gap-2">
              {rails.map((r) => (
                <div key={r.name} className="flex items-start gap-3 rounded-[16px] bg-ink-50 px-3 py-2.5">
                  <r.icon className="w-4 h-4 text-bird-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-[14px] font-bold text-ink-900">{r.name}</div>
                    <div className="text-[12.5px] text-ink-500 leading-snug">{r.note}</div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-plus-500 text-white text-[10.5px] font-bold flex-shrink-0">{r.date}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 flex-1">
            {[
              { v: '36 億', k: 'Meta 每日活躍人數' },
              { v: '免費／$20／$100', k: '三種月費方案' },
              { v: '花錢前問你', k: '官方安全設計' },
            ].map((s) => (
              <div key={s.k} className="rounded-[20px] bg-bird-50 border border-bird-200 px-3 py-3 flex flex-col justify-center">
                <div className="text-[17px] font-black text-ink-900 leading-tight">{s.v}</div>
                <div className="text-[11.5px] text-ink-500 mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-[14px] text-ink-700 leading-relaxed">
            <span className="font-black text-plus-500">關鍵觀察：</span>Muse 第一天只挑了三個錢包。其他所有支付工具，都被壓縮成「虛擬卡背後的一個帳戶」。當 Muse 隨著 WhatsApp 走進印尼、馬來西亞——以及在台灣的移工族群——每一個在地錢包都只剩三條路：
          </div>
          {paths.map((p, i) => (
            <div key={p.k} className={`flex-1 rounded-[20px] border px-5 py-3 flex items-center gap-4 ${p.tone}`}>
              <span className={`text-[26px] font-black w-[92px] flex-shrink-0 ${p.t}`}>{p.k}</span>
              <span className="text-[13.5px] text-ink-700 leading-snug flex-1">{p.v}</span>
              {i < 2 && <ArrowRight className="w-4 h-4 text-ink-300 flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </PaySlideShell>
  );
}
