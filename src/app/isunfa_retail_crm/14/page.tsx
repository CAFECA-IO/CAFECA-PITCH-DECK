'use client';

import { BellRing, Undo2, RefreshCw, Clock4, UserPlus, Workflow } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide14() {
  const journeys = [
    {
      icon: RefreshCw,
      name: '沉睡喚回',
      trigger: '90 天未回訪',
      action: '推播「他自己的 TOP3 常購品」＋限時券，不發通用券',
      channel: 'APP 推播',
      metric: '+18%',
      metricK: '回訪率',
      tone: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      icon: Undo2,
      name: '猶豫追擊',
      trigger: '貨架前停留 8 秒未購（場域訊號）',
      action: '隔日推送同品類的規格比較與中價位替代品',
      channel: 'APP／LINE',
      metric: '11.4%',
      metricK: '追擊轉換',
      tone: 'text-orange-600',
      ring: 'border-orange-200',
      bg: 'bg-orange-50/50',
      star: true,
    },
    {
      icon: Clock4,
      name: '週期提醒',
      trigger: '箱購保久乳 21 天週期將到',
      action: '到期前 3 天提醒，附「箱購到府」預約連結',
      channel: '簡訊／APP',
      metric: '34%',
      metricK: '開信率',
      tone: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      icon: BellRing,
      name: '時段攔截',
      trigger: '輪班客群 × 打烊前 30 分鐘',
      action: '即期鮮食折扣同步上電子標籤與推播',
      channel: '電子標籤＋推播',
      metric: '27%',
      metricK: '券核銷率',
      tone: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
    {
      icon: UserPlus,
      name: '新客二回',
      trigger: '首購後 7 天未再訪',
      action: '依首購籃推薦互補品，引導第二次購買',
      channel: 'APP 推播',
      metric: '+23%',
      metricK: '二回購率',
      tone: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
    },
  ];

  return (
    <CrmSlideShell
      chapter="客戶經營 · 自動化旅程"
      pageLabel="14 / 20"
      compact
      title={<>五條自動旅程，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">行銷不再每週手動撈名單</span></>}
      subtitle="每一條旅程的觸發條件，都來自前面幾層算出來的客群與行為訊號。設定一次，之後由系統自己跑。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="flex-1 flex flex-col gap-2.5">
          {journeys.map((journey) => {
            const Icon = journey.icon;
            return (
              <div
                key={journey.name}
                className={`rounded-2xl border ${journey.ring} ${journey.bg} px-5 py-3.5 flex items-center gap-5 flex-1 shadow-sm`}
              >
                <div className="flex items-center gap-3 w-[150px] flex-shrink-0">
                  <Icon className="w-5 h-5 text-slate-500" />
                  <div>
                    <div className="text-[16px] font-black text-slate-900 leading-tight">{journey.name}</div>
                    {journey.star && <span className="text-[9px] font-bold text-orange-600">場域訊號獨有</span>}
                  </div>
                </div>

                <div className="w-[216px] flex-shrink-0">
                  <div className="text-[9.5px] text-slate-400 mb-[3px]">觸發條件</div>
                  <div className="text-[12px] font-bold text-slate-700 leading-snug">{journey.trigger}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[9.5px] text-slate-400 mb-[3px]">自動動作</div>
                  <div className="text-[12px] text-slate-600 leading-snug">{journey.action}</div>
                </div>

                <div className="w-[112px] flex-shrink-0">
                  <div className="text-[9.5px] text-slate-400 mb-[3px]">通路</div>
                  <div className="text-[11.5px] text-slate-600">{journey.channel}</div>
                </div>

                <div className="w-[76px] flex-shrink-0 text-right">
                  <div className={`text-[21px] font-black font-mono leading-none ${journey.tone}`}>{journey.metric}</div>
                  <div className="text-[9.5px] text-slate-400 mt-1">{journey.metricK}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 flex items-center gap-5 shadow-sm">
          <Workflow className="w-5 h-5 text-orange-600 flex-shrink-0" />
          <p className="text-[14px] text-slate-600 leading-relaxed">
            <span className="text-slate-900 font-bold">第二條是關鍵。</span>
            「貨架前猶豫了 8 秒卻沒買」這個觸發條件，任何只接 POS 的 CRM 都做不出來——因為那筆交易根本不存在。
          </p>
        </div>

      </div>
    </CrmSlideShell>
  );
}
