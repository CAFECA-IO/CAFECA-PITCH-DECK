'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { ArrowRight } from 'lucide-react';

export default function PaySlide25() {
  const pairs = [
    { old: '會員數', neu: '有效授權數', why: '有多少人把「規則」交給你保管' },
    { old: 'MAU／App 開啟次數', neu: '代理交易占比', why: '總交易中，由代理人發起的比例' },
    { old: '回饋成本／獲客成本', neu: '授權續留率', why: '規則被保留、沒有被改走的比例——新的忠誠度' },
    { old: '客訴件數', neu: '代理爭議率與結案天數', why: '出事時，你是不是最快把事情擺平的那一方' },
    { old: '支付據點數', neu: '門市代理履約件數', why: '代理人的訂單，有多少在你的門市落地' },
    { old: '交易手續費收入', neu: '每一份授權的年收入', why: '授權管理、履約、風控服務加總' },
  ];

  return (
    <PaySlideShell
      act="ACT IV · 下一步"
      scene="第四幕"
      pageLabel="25 / 26"
      title={<>換一面儀表板：<span className="text-plus-600">別用錢包時代的尺，量代理時代的路</span></>}
      subtitle={<>管理團隊看什麼數字，組織就會往哪裡長。如果董事會還只看 MAU，團隊就會繼續把預算花在「讓人打開 App」上。</>}
      footer="指標為本報告建議之管理框架，可先以影子指標方式與現行 KPI 並列追蹤。"
    >
      <div className="flex-1 min-h-0 flex flex-col gap-2 pb-2">
        <div className="grid grid-cols-[250px_40px_280px_1fr] gap-3 px-4 text-[11px] font-bold tracking-widest text-ink-400">
          <span>錢包時代的指標</span><span /><span className="text-plus-600">代理時代的指標</span><span>它在量什麼</span>
        </div>
        {pairs.map((p) => (
          <div key={p.old} className="grid grid-cols-[250px_40px_280px_1fr] flex-1 gap-3 items-center bg-white border border-ink-200 rounded-xl px-4 py-3 shadow-sm">
            <span className="text-[15px] text-ink-400 line-through decoration-ink-300">{p.old}</span>
            <ArrowRight className="w-4 h-4 text-plus-500" />
            <span className="text-[18px] font-black text-ink-900">{p.neu}</span>
            <span className="text-[15px] text-ink-500">{p.why}</span>
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
