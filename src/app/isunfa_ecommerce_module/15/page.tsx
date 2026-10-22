'use client';

import { Landmark, GitCompareArrows } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockRecon } from '@/components/slide/fa_mockups';

export default function EcModuleSlide15() {
  return (
    <FaSlideShell
      chapter="CH 07 · 帳本對帳"
      title={<span>業務帳 vs 資金帳：<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">帳是帳，錢是錢，兩邊都要對</span></span>}
      pageLabel="15 / 21"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        {/* Info: (20260902 - Luphia) 情境截圖：對帳畫面 */}
        <div className="flex-[54]">
          <MockRecon />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜Payout 對帳：業務帳、資金帳並列，六步結算流程進度可視</div>
        </div>

        <div className="flex-[46] flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 flex items-start gap-4">
            <Landmark className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-[17px] font-black text-slate-900 mb-1">自動抓取 Shopify Payout（需求 #21）</div>
              <div className="text-[13px] text-slate-600 leading-relaxed">
                系統自動抓取 Payout 真實資金報表，完成「業務帳 VS 資金帳」對帳——訂單算出來的錢，和實際入袋的錢，差一塊都要有解釋。
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <GitCompareArrows className="w-7 h-7 text-orange-600" />
              <span className="text-[17px] font-black text-slate-900">完整結算流程（需求 #23）</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {['自動產生結算單', '對帳確認', '審核', '待打款', '上傳憑證', '已結清'].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-1.5">
                  <span className="px-2.5 py-1.5 rounded-lg bg-orange-50 border border-orange-300 text-[12.5px] font-bold text-orange-800">{s}</span>
                  {i < arr.length - 1 && <span className="text-slate-400 text-[12px]">›</span>}
                </span>
              ))}
            </div>
            <div className="mt-2.5 text-[12.5px] text-slate-500 leading-relaxed">
              每一步留下操作人、時間戳與憑證附件——結清不是一個按鈕，是一條可稽核的證據鏈。
            </div>
          </div>
        </div>

      </div>
    </FaSlideShell>
  );
}
