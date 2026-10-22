'use client';

import { ReceiptText, Coins, FileSpreadsheet } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockInvoicePanel } from '@/components/slide/fa_mockups';

export default function EcModuleSlide16() {
  const cards = [
    {
      icon: ReceiptText,
      color: 'text-emerald-600',
      title: '發票自動化（需求 #24）',
      desc: '系統自動生成發票、登記發票，並比對「開票金額 = 結算金額」——差額自動列入異常，不靠人眼掃表。',
    },
    {
      icon: Coins,
      color: 'text-amber-600',
      title: '多幣別與匯兌損益（需求 #22）',
      desc: '支援多幣別訂單，匯兌損益自動記錄入帳。跨境直播賣到日本、馬來西亞，帳上不會出現「匯率黑洞」。',
    },
    {
      icon: FileSpreadsheet,
      color: 'text-cyan-600',
      title: 'Excel 全量匯出（需求 #25）',
      desc: '所有數據可匯出 Excel、對接外部會計軟體——iSunFA 是主源頭，但不是資料監獄。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 07 · 帳本對帳"
      title={<span>發票、多幣別、匯出：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">會計師要的它都給</span></span>}
      pageLabel="16 / 21"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        <div className="flex-[44] flex flex-col gap-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 bg-white px-5 py-4 flex items-start gap-4">
              <c.icon className={`w-7 h-7 ${c.color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="text-[17px] font-black text-slate-900 mb-1">{c.title}</div>
                <div className="text-[13px] text-slate-600 leading-relaxed">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：發票與多幣別 */}
        <div className="flex-[56]">
          <MockInvoicePanel />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜發票管理：開票金額自動比對結算金額，匯損自動入帳</div>
        </div>

      </div>
    </FaSlideShell>
  );
}
