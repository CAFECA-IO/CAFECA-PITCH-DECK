'use client';

import { Zap, Layers, PlugZap } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockOrderInbox } from '@/components/slide/mall_mockups';

export default function MallLiveSlide6() {
  const events = ['新訂單', '付款', '發貨', '部分退款', '全額退款', '拒付', '平台手續費'];

  return (
    <MallSlideShell
      chapter="CH 03 · 訂單歸集"
      title={<span>三路訂單，<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">一秒歸隊</span></span>}
      pageLabel="06 / 20"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        <div className="flex-[46] flex flex-col gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Zap className="w-6 h-6 text-rose-300" />
              <span className="text-[17px] font-black text-white">Shopify Webhook 即時接收（需求 #9）</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {events.map((e) => (
                <span key={e} className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-400/25 text-[12px] font-bold text-rose-200">{e}</span>
              ))}
            </div>
            <div className="mt-2.5 text-[12.5px] text-slate-400">每個事件完整回傳系統，訂單生命週期不斷片。</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="flex items-center gap-2.5 mb-2">
              <Layers className="w-6 h-6 text-fuchsia-300" />
              <span className="text-[17px] font-black text-white">三類訂單自動歸集（需求 #10）</span>
            </div>
            <div className="text-[13.5px] text-slate-300 leading-relaxed">
              <span className="text-cyan-300 font-bold">TVmall 商城訂單</span> ／
              <span className="text-rose-300 font-bold"> 自有直播訂單</span> ／
              <span className="text-violet-300 font-bold"> 第三方電商平台訂單</span>
              ——來源標籤化，後續結算與報表按渠道自動分流。
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="flex items-center gap-2.5 mb-2">
              <PlugZap className="w-6 h-6 text-violet-300" />
              <span className="text-[17px] font-black text-white">第三方 API 全流程接入（需求 #11）</span>
            </div>
            <div className="text-[13.5px] text-slate-300 leading-relaxed">
              外部平台「下單、收款、物流、售後」全流程資料完整接入，統一納入系統結算——不留帳外孤島。
            </div>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：訂單歸集列表 */}
        <div className="flex-[54]">
          <MockOrderInbox />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜訂單歸集：三種來源同列一表，狀態即時回傳</div>
        </div>

      </div>
    </MallSlideShell>
  );
}
