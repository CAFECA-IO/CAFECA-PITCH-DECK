'use client';

import { UploadCloud, RefreshCw, Gift } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockPushDialog } from '@/components/slide/mall_mockups';

export default function MallLiveSlide5() {
  const flows = [
    {
      icon: UploadCloud,
      color: 'text-rose-300',
      title: '一鍵上架，無需重複建品',
      desc: '商品、規格、圖文、零售價、直播價、庫存一次推送至 Shopify 的 iSUN TVmall，直播上架直接使用（需求 #5）。',
    },
    {
      icon: RefreshCw,
      color: 'text-fuchsia-300',
      title: '庫存雙向同步',
      desc: '系統採購 / 退貨更新庫存 → 同步 Shopify；Shopify 訂單銷售 / 退款庫存 → 回寫系統（需求 #7）。兩邊永遠對得上。',
    },
    {
      icon: Gift,
      color: 'text-amber-300',
      title: '活動標籤：買一送一',
      desc: '活動訂單打上標籤，保留特殊活動結算邏輯（需求 #8）——贈品出庫算庫存、不算供應商應付，結算不吵架。',
    },
  ];

  return (
    <MallSlideShell
      chapter="CH 02 · 商品管理"
      title={<span>上架一鍵完成，<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">庫存永遠對得上</span></span>}
      pageLabel="05 / 20"
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
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 flex items-start gap-4">
              <f.icon className={`w-7 h-7 ${f.color} flex-shrink-0 mt-0.5`} />
              <div>
                <div className="text-[18px] font-black text-white mb-1">{f.title}</div>
                <div className="text-[13.5px] text-slate-300 leading-relaxed">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MallSlideShell>
  );
}
