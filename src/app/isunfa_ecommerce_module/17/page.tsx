'use client';

import { PlugZap, ShieldCheck, ScrollText } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockConnectorSpec } from '@/components/slide/fa_mockups';

export default function EcModuleSlide17() {
  const points = [
    {
      icon: PlugZap,
      color: 'text-orange-600',
      title: '一份規格，接遍所有平台',
      desc: '新平台只需實作一份轉接器（Adapter）：同一組事件、同一組欄位。今天接 Shopify，明天接蝦皮、momo、TikTok Shop——模組核心一行不改。',
    },
    {
      icon: ShieldCheck,
      color: 'text-amber-600',
      title: '權限、鑒權、限流',
      desc: 'API Key + 角色範圍控制第三方能拿到的資料；限流防止外部高頻拉取拖垮結算主系統。',
    },
    {
      icon: ScrollText,
      color: 'text-sky-600',
      title: '完整請求日誌 + 異常記錄',
      desc: '每一次呼叫留痕，出問題可回放——留痕不是功能，是串接規格的一部分。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 08 · 開放能力"
      title={<span>統一串接規格：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-sky-600">平台會換，規格不動</span></span>}
      pageLabel="17 / 21"
      compact
    >
      <div className="h-full flex gap-6 items-center">

        <div className="flex-[38] flex flex-col gap-3.5">
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

        {/* Info: (20260902 - Luphia) 情境截圖：統一串接規格 */}
        <div className="flex-[62]">
          <MockConnectorSpec />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜平台轉接器：五個平台共用同一組事件協定，寫入各店獨立帳本</div>
        </div>

      </div>
    </FaSlideShell>
  );
}
