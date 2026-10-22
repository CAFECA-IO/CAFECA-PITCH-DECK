'use client';

import { Users, Globe2, SlidersHorizontal } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockAnchorConfig } from '@/components/slide/fa_mockups';

export default function EcModuleSlide10() {
  const cards = [
    {
      icon: Users,
      color: 'text-orange-600',
      title: '主播分兩類（需求 #18）',
      desc: '內部正式主播走薪酬 + 佣金；外部達人主播走合作分潤。兩套邏輯在系統內並行，不互相污染。',
    },
    {
      icon: Globe2,
      color: 'text-amber-600',
      title: '多國多地區批量管理（需求 #19）',
      desc: '台灣、日本、東南亞主播批量管理、各自獨立結算——幣別、稅制、打款方式跟著地區走。',
    },
    {
      icon: SlidersHorizontal,
      color: 'text-sky-600',
      title: '佣金 + 運費自由設置（需求 #20）',
      desc: '每位主播備貨比例不同，佣金比例與運費補貼必須能逐人、逐地區自由設定，不能寫死一條公式。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 05 · 主播分潤"
      title={<span>主播分級分潤：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">一人一規則，一區一結算</span></span>}
      pageLabel="10 / 21"
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

        {/* Info: (20260902 - Luphia) 情境截圖：主播佣金設定 */}
        <div className="flex-[56]">
          <MockAnchorConfig />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜主播分潤設定：類型、地區、佣金、運費規則逐人獨立</div>
        </div>

      </div>
    </FaSlideShell>
  );
}
