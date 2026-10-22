'use client';

import { Snowflake, Calculator, BookOpenCheck } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockSupplierBill } from '@/components/slide/fa_mockups';

export default function EcModuleSlide9() {
  return (
    <FaSlideShell
      chapter="CH 04 · 供應商管理"
      title={<span>結算引擎：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">先凍結、再計算、後留帳</span></span>}
      pageLabel="09 / 21"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        <div className="flex-[46] flex flex-col gap-4">
          <div className="rounded-xl border border-cyan-300 bg-cyan-50 px-5 py-3.5 flex items-start gap-3.5">
            <Snowflake className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[17px] font-black text-slate-900 mb-1">凍結天數可自訂（需求 #15）</div>
              <div className="text-[13px] text-slate-600 leading-relaxed">訂單確認收貨 <span className="font-mono font-bold text-cyan-600">N</span> 日後才納入可結算金額——退貨高峰期還沒過，就不該把錢算給供應商，避免售後虧損。</div>
            </div>
          </div>

          <div className="rounded-xl border border-orange-300 bg-orange-50 px-5 py-3.5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Calculator className="w-6 h-6 text-orange-600" />
              <span className="text-[17px] font-black text-slate-900">應付貨款公式（需求 #16）</span>
            </div>
            <div className="rounded-lg bg-slate-100 border border-slate-200 px-4 py-3 font-mono text-[13.5px] leading-relaxed">
              <span className="text-slate-700">銷售金額</span>
              <span className="text-amber-600"> − 退款</span>
              <span className="text-amber-600"> − 平台扣點</span>
              <span className="text-red-600"> − 各類罰損</span>
              <br />
              <span className="text-slate-500">= </span>
              <span className="text-emerald-600 font-bold">實際應付金額</span>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 flex items-start gap-3.5">
            <BookOpenCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[17px] font-black text-slate-900 mb-1">應付總帳四狀態（需求 #17）</div>
              <div className="text-[13px] text-slate-600 leading-relaxed">累計應付、已付、待付、未結餘額完整記錄——任何時點都能回答「我們還欠誰多少錢」。</div>
            </div>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：供應商結算單 */}
        <div className="flex-[54]">
          <MockSupplierBill />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜供應商結算單：公式逐行透明，總帳四狀態隨列</div>
        </div>

      </div>
    </FaSlideShell>
  );
}
