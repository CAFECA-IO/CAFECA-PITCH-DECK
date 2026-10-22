'use client';

import { BookOpenCheck, Combine, Layers } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockStoreHub } from '@/components/slide/fa_mockups';

export default function EcModuleSlide4() {
  const points = [
    {
      icon: BookOpenCheck,
      color: 'text-orange-600',
      title: '串接即建帳',
      desc: '新商店完成串接的同時，iSunFA 自動建立該店專屬帳本——科目表、傳票、進銷存、結算規則一次到位。',
    },
    {
      icon: Layers,
      color: 'text-amber-600',
      title: '帳本完全隔離',
      desc: '每本帳獨立記錄該店的收入、成本、費用與應收應付；A 店的退款永遠不會弄髒 B 店的毛利。',
    },
    {
      icon: Combine,
      color: 'text-sky-600',
      title: '集團層合併檢視',
      desc: '單店看單店的帳，老闆看合併報表——跨店損益、跨平台營收占比，一鍵切換視角。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 01 · 設計總綱"
      title={<span>多商店管理：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">每一間商店，都有自己的帳本</span></span>}
      pageLabel="04 / 21"
      compact
    >
      <div className="h-full flex gap-6 items-center">

        {/* Info: (20260902 - Luphia) 情境截圖：多商店管理 */}
        <div className="flex-[60]">
          <MockStoreHub />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜商店管理：跨平台商店同列一表，每間商店掛一本獨立帳本</div>
        </div>

        <div className="flex-[40] flex flex-col gap-3.5">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 flex items-start gap-3.5">
              <p.icon className={`w-6 h-6 ${p.color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="text-[16px] font-black text-slate-900 mb-1">{p.title}</div>
                <div className="text-[12.5px] text-slate-600 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </FaSlideShell>
  );
}
