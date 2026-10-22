'use client';

import { UploadCloud, RefreshCw, Gift } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockPushDialog } from '@/components/slide/fa_mockups';

export default function EcModuleSlide6() {
  const flows = [
    {
      icon: UploadCloud,
      color: 'text-orange-600',
      title: '一鍵上架，無需重複建品',
      desc: '商品、規格、圖文、零售價、活動價、庫存透過統一串接規格一次推送至 Shopify 等各平台商店，上架直接使用，無需逐站建品。',
    },
    {
      icon: RefreshCw,
      color: 'text-amber-600',
      title: '庫存雙向同步',
      desc: '系統採購 / 退貨更新庫存 → 同步 Shopify；Shopify 訂單銷售 / 退款庫存 → 回寫系統（需求 #7）。兩邊永遠對得上。',
    },
    {
      icon: Gift,
      color: 'text-amber-600',
      title: '活動標籤：買一送一',
      desc: '活動訂單打上標籤，保留特殊活動結算邏輯（需求 #8）——贈品出庫算庫存、不算供應商應付，結算不吵架。',
    },
  ];

  return (
    <FaSlideShell
      chapter="CH 02 · 商品管理"
      title={<span>上架一鍵完成，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">庫存永遠對得上</span></span>}
      pageLabel="06 / 21"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        {/* Info: (20260902 - Luphia) 情境截圖：一鍵推送對話框 */}
        <div className="flex-[52]">
          <MockPushDialog />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜一鍵推送 Shopify：欄位級控制，成本價被系統攔截</div>
        </div>

        <div className="flex-[48] flex flex-col gap-4">
          {flows.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white px-5 py-4 flex items-start gap-4">
              <f.icon className={`w-7 h-7 ${f.color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="text-[18px] font-black text-slate-900 mb-1">{f.title}</div>
                <div className="text-[13.5px] text-slate-600 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </FaSlideShell>
  );
}
