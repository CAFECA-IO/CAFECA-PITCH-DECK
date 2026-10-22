'use client';

import { Store, FileStack, UserCheck, ArrowRight } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide19() {
  const phases = [
    {
      tag: 'PHASE 1',
      days: '第 0–30 天',
      name: '客群輪廓上線',
      tone: 'border-slate-200 bg-white',
      text: 'text-orange-600',
      dot: 'bg-orange-500',
      todo: ['接 POS 明細、會員主檔、貨架配置圖', '產出六大客群、關聯規則與貨架 ROI 報表', '不需任何硬體投資'],
      out: '第一份「報表看不到的客戶洞察」',
    },
    {
      tag: 'PHASE 2',
      days: '第 31–90 天',
      name: '場域感知試點',
      tone: 'border-slate-200 bg-white',
      text: 'text-orange-600',
      dot: 'bg-orange-500',
      todo: ['複用既有監視器，加裝 1 台邊緣運算盒', '單一分區試點：熱區、猶豫指數、匿名客群還原', '啟動前三條自動化客戶旅程'],
      out: '沒刷卡的那 48% 第一次有了輪廓',
    },
    {
      tag: 'PHASE 3',
      days: '第 91–180 天',
      name: '全通路與模擬台',
      tone: 'border-slate-200 bg-white',
      text: 'text-orange-600',
      dot: 'bg-orange-500',
      todo: ['線上推播與線下端架排程打通', '接入周邊人口、交通、氣象資料', '交付情境模擬台與 CRM 會計月報'],
      out: '會議上當場問、當場算',
    },
  ];

  const asks = [
    { icon: Store, title: '一組示範門市', body: '單店即可起步，最好是客層混合、有貼標折扣時段的社區型門市。' },
    { icon: FileStack, title: '12 個月歷史資料', body: '逐筆品項明細（含時間戳與貨架代碼）、會員主檔、商品主檔與現行貨架配置圖。' },
    { icon: UserCheck, title: '一位營運窗口', body: '能決定貨架與檔期的人。技術不是瓶頸，能不能改貨架才是。' },
  ];

  return (
    <CrmSlideShell
      chapter="導入 · NEXT STEP"
      pageLabel="19 / 20"
      compact
      title={<>導入路線：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">90 天看到第一份答案</span></>}
      subtitle="不需要一開始就蓋到第三層。第一層 30 天就能產出可執行的客群策略，而且不用買任何硬體。"
    >
      <div className="flex flex-col h-full gap-4">

        <div className="grid grid-cols-3 gap-4 flex-1">
          {phases.map((phase) => (
            <div key={phase.tag} className={`rounded-2xl border ${phase.tone} p-5 flex flex-col shadow-sm`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400">{phase.tag}</span>
                <span className="text-[10.5px] text-slate-400">{phase.days}</span>
              </div>
              <div className="text-[21px] font-black text-slate-900 leading-tight mb-3">{phase.name}</div>
              <ul className="space-y-4 flex-1 flex flex-col justify-center">
                {phase.todo.map((item) => (
                  <li key={item} className="flex gap-2 text-[12px] text-slate-600 leading-snug">
                    <span className={`w-1.5 h-1.5 rounded-full mt-[6px] flex-shrink-0 ${phase.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2">
                <ArrowRight className={`w-3.5 h-3.5 ${phase.text}`} />
                <span className={`text-[12px] font-bold ${phase.text}`}>{phase.out}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[16px] font-black text-slate-900">我們只需要三件事，就可以開始</span>
            <span className="text-[11px] text-slate-400">— 其餘由 iSunFA 團隊建置</span>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {asks.map((ask) => {
              const Icon = ask.icon;
              return (
                <div key={ask.title} className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-300 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-black text-slate-900 leading-tight">{ask.title}</div>
                    <p className="text-[11px] text-slate-500 leading-snug mt-1">{ask.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
