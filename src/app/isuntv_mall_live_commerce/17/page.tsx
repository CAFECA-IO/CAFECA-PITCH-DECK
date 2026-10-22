'use client';

import { BellRing } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockReportCenter } from '@/components/slide/mall_mockups';

export default function MallLiveSlide17() {
  const reports = [
    '供應商銷售報表',
    'SKU 進銷存報表',
    '渠道營收報表',
    '主播佣金報表',
    '三方分潤報表',
    '財務應付彙總報表',
  ];

  return (
    <MallSlideShell
      chapter="CH 09 · 可觀測性"
      title={<span>日誌、告警、報表：<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">出錯要響，月底要有表</span></span>}
      pageLabel="17 / 20"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        <div className="flex-[44] flex flex-col gap-4">
          <div className="rounded-xl border border-amber-400/30 bg-amber-500/[0.07] px-5 py-4 flex items-start gap-4">
            <BellRing className="w-7 h-7 text-amber-300 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[17px] font-black text-white mb-1">異常自動記錄 + 告警（需求 #26）</div>
              <div className="text-[13px] text-slate-300 leading-relaxed">
                所有同步失敗、漏單、推送異常自動寫入日誌並發出告警提示——直播當下漏一單，等月底才發現就晚了。
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4">
            <div className="text-[17px] font-black text-white mb-2.5">六大標準報表自動生成（需求 #27）</div>
            <div className="grid grid-cols-2 gap-2">
              {reports.map((r, i) => (
                <div key={r} className="flex items-center gap-2 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2">
                  <span className="text-[11px] font-mono font-bold text-rose-300">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className="text-[13px] font-bold text-slate-200">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：報表中心 */}
        <div className="flex-[56]">
          <MockReportCenter />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜報表中心：渠道營收、告警與六大報表一站取用</div>
        </div>

      </div>
    </MallSlideShell>
  );
}
