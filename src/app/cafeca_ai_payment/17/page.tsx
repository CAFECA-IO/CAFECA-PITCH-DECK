'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Bot, PawPrint, ShoppingBag, Send, PauseCircle, ChevronRight } from 'lucide-react';

export default function PaySlide17() {
  const agents = [
    { icon: PawPrint, name: '家用助理', rule: '寄杯／日用／全寵家 · 月上限 3,000 · 巷口全家取貨', used: 1840, cap: 3000 },
    { icon: ShoppingBag, name: '購物代理', rule: '比價下單 · 單筆 > 1,000 先問我', used: 960, cap: 5000 },
    { icon: Send, name: '匯款代理', rule: '每月 8–10 日 · 上限 8,000 · 收款人鎖定', used: 8000, cap: 8000 },
  ];

  return (
    <PaySlideShell
      act="ACT IV · 下一步"
      scene="第四幕"
      pageLabel="17 / 20"
      title={<>錢包不會消失——它會從<span className="text-ink-400">收銀台</span>，搬到<span className="text-plus-600">董事會</span></>}
      subtitle={<>當付款不再需要人，人要做的是「定規矩」。錢包 App 的新任務，是成為使用者管理所有代理人的地方：誰可以花錢、花在哪、花多少、什麼時候一定要問我。</>}
      footer="產品概念示意（非現有功能）：金額與代理人名稱為虛構。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-[360px_1fr] gap-8 pb-2">
        {/* Info: (20260923 - Luphia) 左：授權錢包手機畫面示意 */}
        <div className="rounded-[36px] border-[6px] border-ink-900 bg-white shadow-2xl px-5 py-5 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[15px] font-black text-ink-900">我的代理人</span>
            <Bot className="w-4 h-4 text-plus-600" />
          </div>
          <div className="rounded-2xl bg-plus-500 text-white px-4 py-3 mb-3">
            <div className="text-[11px] opacity-80">本月由代理人代付</div>
            <div className="text-[26px] font-black leading-tight">NT$ 10,800</div>
            <div className="text-[11px] opacity-80">14 筆 · 2 筆等你確認 · 爭議 0</div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {agents.map((a) => (
              <div key={a.name} className="rounded-xl border border-ink-200 px-3 py-2.5">
                <div className="flex items-center gap-2 mb-1">
                  <a.icon className="w-4 h-4 text-plus-600" />
                  <span className="text-[13px] font-bold text-ink-900">{a.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-ink-400 ml-auto" />
                </div>
                <div className="text-[11px] text-ink-400 mb-1.5">{a.rule}</div>
                <div className="h-1.5 rounded bg-ink-100">
                  <div className={`h-full rounded ${a.used >= a.cap ? 'bg-bird-500' : 'bg-plus-500'}`} style={{ width: `${Math.min(100, (a.used / a.cap) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-plus-300 bg-plus-50 px-3 py-2 flex items-center gap-2">
            <PauseCircle className="w-4 h-4 text-plus-500" />
            <span className="text-[12px] font-bold text-plus-600">一鍵暫停所有代理人</span>
          </div>
        </div>

        {/* Info: (20260923 - Luphia) 右：從付款工具到授權中心的轉變 */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-[1fr_1fr] gap-3 text-[11px] font-bold tracking-widest text-ink-400 px-1">
            <span>過去：付款的地方</span><span className="text-plus-600">未來：授權的地方</span>
          </div>
          {[
            ['每天打開幾次', '每月設定一次、隨時可暫停'],
            ['比回饋、比優惠', '比「規則好不好設、出事好不好退」'],
            ['一個人一個錢包', '一個人、多個代理人、一本授權帳'],
            ['交易紀錄', '授權紀錄＋交易紀錄＋爭議證據'],
            ['使用者是客戶', '使用者與代理平台都是客戶'],
          ].map(([a, b]) => (
            <div key={a} className="grid grid-cols-[1fr_1fr] gap-3">
              <div className="bg-white border border-ink-200 rounded-xl px-4 py-2.5 text-[13.5px] text-ink-400 line-through decoration-ink-300">{a}</div>
              <div className="bg-plus-50 border border-plus-300 rounded-xl px-4 py-2.5 text-[13.5px] font-bold text-ink-900">{b}</div>
            </div>
          ))}
          <div className="mt-auto rounded-[24px] bg-plus-500 text-white shadow-lg shadow-plus-500/25 px-5 py-4">
            <div className="text-[15px] font-black leading-snug">還記得第 6 頁那把「沒有主人」的鑰匙嗎？</div>
            <div className="text-[13px] text-white/90 leading-snug mt-1">授權書就長在這個畫面裡。<span className="text-white font-black">誰保管使用者的規則，誰就是代理人每一次付款前必須來問的那一方。</span></div>
          </div>
        </div>
      </div>
    </PaySlideShell>
  );
}
