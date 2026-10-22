'use client';

import { CalendarRange, Flame, BarChart3 } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';
import { MockSalesAnalytics } from '@/components/slide/fa_mockups';

export default function EcModuleSlide13() {
  const points = [
    { icon: CalendarRange, color: 'text-orange-600', title: '五種週期 + 自訂區間', desc: '每日、每週、每月、每季、每年一鍵切換，也可框選任意日期區間——例如 11/11 購物節檔期。' },
    { icon: BarChart3, color: 'text-amber-600', title: '逐直播間拆解', desc: '每個直播間的 GMV、訂單數、客單價、退款率獨立呈現並可排行比較，找得出誰在帶量。' },
    { icon: Flame, color: 'text-amber-600', title: '檔期作戰視角', desc: '大促期間逐日盯盤：高峰日自動標示、與前檔期同比，開會不用再手動剪貼報表。' },
  ];

  return (
    <FaSlideShell
      chapter="CH 06 · 直播營運"
      title={<span>銷售數據分析：<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">日週月季年，一格看到雙 11</span></span>}
      pageLabel="13 / 21"
      compact
    >
      <div className="h-full flex gap-6 items-center">

        {/* Info: (20260902 - Luphia) 情境截圖：期間銷售分析 */}
        <div className="flex-[62]">
          <MockSalesAnalytics />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜銷售分析：自訂區間鎖定雙 11 檔期，逐日 GMV 與直播間排行並列</div>
        </div>

        <div className="flex-[38] flex flex-col gap-3.5">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-white px-4.5 py-3.5 flex items-start gap-3.5">
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
