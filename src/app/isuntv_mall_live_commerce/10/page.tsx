'use client';

import { Users, PackageOpen, CalendarClock } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockTeamStudio } from '@/components/slide/mall_mockups';

export default function MallLiveSlide10() {
  const points = [
    { icon: Users, color: 'text-rose-300', title: '註冊團隊自營直播間', desc: '每個註冊團隊擁有自己的直播間與貨架，人員、選品、營運自主。' },
    { icon: PackageOpen, color: 'text-fuchsia-300', title: '貨物自由上下架', desc: '團隊可隨時將系統商品庫的 SKU 上架 / 下架到自己的直播間，不需平台審批每一件。' },
    { icon: CalendarClock, color: 'text-violet-300', title: '直播時間自由排定', desc: '團隊自行排定直播時段並向頻道節目表登錄；平台節目表對外公告各直播間播出時間。' },
  ];

  return (
    <MallSlideShell
      chapter="CH 06 · 直播營運"
      title={<span>團隊直播間：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">自己的貨架，自己的檔期</span></span>}
      pageLabel="10 / 20"
      compact
    >
      <div className="h-full flex gap-6 items-center">

        {/* Info: (20260902 - Luphia) 情境截圖：團隊直播間管理 */}
        <div className="flex-[62]">
          <MockTeamStudio />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜團隊直播間後台：左側貨架自由上下架，右側自由排播並登錄頻道時段</div>
        </div>

        <div className="flex-[38] flex flex-col gap-3.5">
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

      </div>
    </MallSlideShell>
  );
}
