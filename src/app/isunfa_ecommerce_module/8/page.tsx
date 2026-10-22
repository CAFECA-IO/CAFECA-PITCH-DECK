'use client';

import { FolderKanban, GitBranch, PackageCheck } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';

export default function EcModuleSlide8() {
  const profile = ['結算週期', '扣點比例', '銀行帳戶', '資質文件', '合作狀態', '合約條款備註'];

  const splitItems = [
    { sku: 'SKU-TW-8801 膠原蛋白飲 ×2', supplier: '優鮮生技', amt: 'NT$ 2,760', color: 'border-orange-300 bg-orange-50' },
    { sku: 'SKU-TW-6602 氣炸烤箱 ×1', supplier: '家電聯合', amt: 'NT$ 3,990', color: 'border-amber-300 bg-amber-50' },
    { sku: 'SKU-TW-3105 沖牙機 ×1', supplier: '潔牙美學', amt: 'NT$ 2,490', color: 'border-sky-300 bg-sky-50' },
  ];

  return (
    <FaSlideShell
      chapter="CH 04 · 供應商管理"
      title={<span>一筆訂單三個供應商？<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-sky-600">自動拆分、各自結算</span></span>}
      subtitle="每個 SKU 綁定對應供應商（需求 #14），供應商檔案完整管理（需求 #12），採購入庫 / 退貨單據自動更新庫存與應付（需求 #13）。"
      pageLabel="08 / 21"
      compact
    >
      <div className="h-full grid grid-cols-[46fr_54fr] gap-7 items-center">

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2.5 mb-3">
              <FolderKanban className="w-6 h-6 text-orange-600" />
              <span className="text-[17px] font-black text-slate-900">供應商檔案六要素</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {profile.map((p) => (
                <span key={p} className="px-2 py-2 rounded-lg bg-slate-100 border border-slate-200 text-[12.5px] font-bold text-slate-700 text-center">{p}</span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center gap-2.5 mb-2">
              <PackageCheck className="w-6 h-6 text-emerald-600" />
              <span className="text-[17px] font-black text-slate-900">單據驅動：庫存與應付同步更新</span>
            </div>
            <div className="text-[13.5px] text-slate-600 leading-relaxed">
              採購入庫、部分入庫、供應商退貨——每張單據落地時，<span className="font-bold text-slate-900">庫存與應付帳款同時更新</span>，不需要月底人工回補。
            </div>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 拆單示意 */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-2.5 mb-3">
            <GitBranch className="w-6 h-6 text-amber-600" />
            <span className="text-[17px] font-black text-slate-900">同筆訂單 · 自動拆分明細獨立結算</span>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-2.5 mb-3 flex items-center justify-between">
            <span className="text-[13.5px] font-mono text-slate-700">直播訂單 #LV-09883</span>
            <span className="text-[13.5px] font-mono font-bold text-slate-900">NT$ 9,240</span>
          </div>

          <div className="flex justify-center mb-3">
            <span className="text-[11px] text-slate-500 tracking-widest">▼ 依 SKU 綁定供應商自動拆分 ▼</span>
          </div>

          <div className="flex flex-col gap-2">
            {splitItems.map((s) => (
              <div key={s.sku} className={`rounded-lg border ${s.color} px-3.5 py-2.5 flex items-center justify-between`}>
                <div>
                  <div className="text-[12.5px] font-bold text-slate-700">{s.sku}</div>
                  <div className="text-[11px] text-slate-500">結算對象：{s.supplier}（各依自己的扣點與週期）</div>
                </div>
                <span className="text-[13px] font-mono font-bold text-slate-900">{s.amt}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </FaSlideShell>
  );
}
