'use client';

import { Rocket, Handshake, LineChart } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';

export default function MallLiveSlide19() {
  const phases = [
    {
      icon: Rocket,
      tag: 'PHASE 1',
      title: '先讓貨與單跑起來',
      color: 'border-rose-400/40 bg-rose-500/[0.07]',
      tagColor: 'text-rose-300',
      items: ['商品主檔 + 三價體系（成本價鎖定）', '一鍵推送 Shopify · 庫存雙向同步', 'Webhook 訂單歸集（商城 + 直播）', '團隊直播間 + 頻道節目表', '活動標籤（買一送一）'],
      goal: '目標：直播開賣，訂單與庫存零手工',
    },
    {
      icon: Handshake,
      tag: 'PHASE 2',
      title: '再把錢分對',
      color: 'border-fuchsia-400/40 bg-fuchsia-500/[0.07]',
      tagColor: 'text-fuchsia-300',
      items: ['供應商檔案 + 採購入庫 / 退貨單據', '凍結天數 + 應付公式 + 拆單結算', '主播分級 · 佣金 + 運費規則', '多國多地區獨立結算'],
      goal: '目標：供應商與主播結算全自動',
    },
    {
      icon: LineChart,
      tag: 'PHASE 3',
      title: '最後讓帳可稽核可擴充',
      color: 'border-violet-400/40 bg-violet-500/[0.07]',
      tagColor: 'text-violet-300',
      items: ['Shopify Payout 對帳 · 六步結算流程', '發票自動化 + 多幣別匯損', '六大報表 + 日誌告警', '直播間 / 頻道觀看與銷售分析', '標準化開放 API 接第三方平台'],
      goal: '目標：財務閉環，平台隨接隨上',
    },
  ];

  return (
    <MallSlideShell
      chapter="CH 11 · 落地路線"
      title={<span>三階段推進：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-400 to-violet-400">賣得動 → 分得對 → 稽得了</span></span>}
      pageLabel="19 / 20"
      compact
    >
      <div className="h-full grid grid-cols-3 gap-5 content-center">
        {phases.map((p) => (
          <div key={p.tag} className={`rounded-2xl border ${p.color} p-5 flex flex-col h-full`}>
            <div className="flex items-center justify-between mb-3">
              <p.icon className={`w-8 h-8 ${p.tagColor}`} />
              <span className={`text-[12px] font-black tracking-[0.25em] ${p.tagColor}`}>{p.tag}</span>
            </div>
            <h3 className="text-[20px] font-black text-white mb-3">{p.title}</h3>
            <ul className="flex flex-col gap-2 mb-4">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-slate-300 leading-snug">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.tagColor.replace('text-', 'bg-')}`} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-3 border-t border-white/10 text-[12.5px] font-bold text-slate-200">{p.goal}</div>
          </div>
        ))}
      </div>
    </MallSlideShell>
  );
}
