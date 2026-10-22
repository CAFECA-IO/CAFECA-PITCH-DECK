'use client';

import { Tv, LockKeyhole, Megaphone } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';
import { MockChannelEPG } from '@/components/slide/mall_mockups';

export default function MallLiveSlide11() {
  const points = [
    { icon: Tv, color: 'text-violet-300', title: '平台方建立頻道', desc: '平台管理方開設頻道（綜合購物、美妝、3C……），直播間向頻道登錄節目，如同電視台排片。' },
    { icon: LockKeyhole, color: 'text-rose-300', title: '每時段僅一檔節目', desc: '同一頻道同一時段只能登錄一檔節目，先登先得、系統鎖定——不會出現兩個直播間搶同一時段。' },
    { icon: Megaphone, color: 'text-fuchsia-300', title: '節目表全平台公開', desc: '用戶像看電視節目表一樣知道幾點播什麼、在哪一台，依時段轉台，養成收視習慣。' },
  ];

  return (
    <MallSlideShell
      chapter="CH 06 · 直播營運"
      title={<span>頻道與節目表：<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">像經營電視台一樣經營直播</span></span>}
      pageLabel="11 / 20"
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

        {/* Info: (20260902 - Luphia) 情境截圖：頻道節目表 */}
        <div className="flex-[64]">
          <MockChannelEPG />
          <div className="mt-2 text-center text-[11px] text-slate-500">情境截圖｜頻道節目表（EPG）：三個頻道 × 四個時段，每格僅一檔節目，空檔開放登錄</div>
        </div>

      </div>
    </MallSlideShell>
  );
}
