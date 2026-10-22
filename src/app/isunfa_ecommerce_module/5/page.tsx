'use client';

import { Tag, Radio, Factory, ShieldAlert } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockProductPricing } from '@/components/slide/fa_mockups';

export default function EcModuleSlide5() {
  const prices = [
    { icon: Tag, name: '零售價', where: '官網商城顯示', color: 'text-slate-700', border: 'border-slate-200', bg: 'bg-white' },
    { icon: Radio, name: '直播價', where: '直播間限時顯示', color: 'text-orange-600', border: 'border-orange-300', bg: 'bg-orange-50' },
    { icon: Factory, name: '工廠結算成本價', where: '僅系統內部留存', color: 'text-amber-600', border: 'border-amber-300', bg: 'bg-amber-50' },
  ];

  return (
    <FaSlideShell
      chapter="CH 02 · 商品管理"
      title={<span>一件商品、三種價格，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">成本價是紅線</span></span>}
      subtitle="零售價、直播價、工廠結算成本價三價完整留存於系統（需求 #4）；成本價僅限內部留存、禁止同步至 Shopify（需求 #6）。"
      pageLabel="05 / 21"
      compact
    >
      <div className="h-full flex gap-7 items-center">

        <div className="flex-[46] flex flex-col gap-3.5">
          {prices.map((p) => (
            <div key={p.name} className={`rounded-xl border ${p.border} ${p.bg} px-5 py-3.5 flex items-center gap-4`}>
              <p.icon className={`w-7 h-7 ${p.color} flex-shrink-0`} />
              <div>
                <div className={`text-[19px] font-black ${p.color}`}>{p.name}</div>
                <div className="text-[12.5px] text-slate-500">{p.where}</div>
              </div>
            </div>
          ))}

          <div className="rounded-xl border border-red-300 bg-red-50 px-5 py-3.5 flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-[13.5px] text-slate-600 leading-relaxed">
              <span className="font-bold text-red-600">為什麼是紅線？</span>
              成本價一旦外洩到前台或第三方平台，供應商議價空間與毛利結構全部曝光。同步引擎在欄位層級<span className="font-bold text-slate-900">直接攔截</span>成本價欄位，而非依賴人工把關。
            </div>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 情境截圖：商品三價維護 */}
        <div className="flex-[54]">
          <MockProductPricing />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜商品主檔：三價並列維護，成本價鎖定不出系統</div>
        </div>

      </div>
    </FaSlideShell>
  );
}
