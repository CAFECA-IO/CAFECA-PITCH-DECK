'use client';

import { Eye, Layers2, Link2 } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockAudienceStats } from '@/components/slide/mall_mockups';

export default function MallLiveSlide13() {
  const points = [
    { icon: Layers2, color: 'text-rose-300', title: '直播間、頻道雙層統計', desc: '同一套指標（觀看人次、平均在線、轉換率、消費金額）在直播間層與頻道層各算一份。' },
    { icon: Eye, color: 'text-cyan-300', title: '看的人 → 買的人', desc: '觀看行為與訂單以 SKU / 直播間 / 頻道三鍵關聯，流量到營收的轉換一路可追。' },
    { icon: Link2, color: 'text-violet-300', title: '餵回結算與排播', desc: '統計直接支撐主播分潤核算與頻道時段定價——熱門時段值多少錢，用數據說話。' },
  ];

  return (
    <MallSlideShell
      chapter="CH 06 · 直播營運"
      title={<span>觀看 × 消費統計：<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">流量與營收，兩層都要看得見</span></span>}
      pageLabel="13 / 20"
      compact
    >
      <div className="h-full flex gap-6 items-center">

        <div className="flex-[36] flex flex-col gap-3.5">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-4.5 py-3.5 flex items-start gap-3.5">
              <p.icon className={`w-6 h-6 ${p.color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="text-[16px] font-black text-white mb-1">{p.title}</div>
                <div className="text-[12.5px] text-slate-300 leading-relaxed">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：觀看與消費統計 */}
        <div className="flex-[64]">
          <MockAudienceStats />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜觀看 × 消費統計：左為直播間層、右為頻道層，指標同構可對照</div>
        </div>

      </div>
    </MallSlideShell>
  );
}
