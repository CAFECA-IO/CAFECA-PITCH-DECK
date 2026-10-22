'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { CliffScene } from '@/components/slide/kiku_scenes';
import { Skull, Radio } from 'lucide-react';

/* Info: (20260830 - Luphia) 故事開場：1944 年華盛頓的委託 */
export default function ChrysanthemumSlide12() {
  const puzzles = [
    {
      icon: Skull,
      title: '不投降的敵人',
      body: '歐洲戰場上，部隊撐到三分之一傷亡就會開始考慮投降。太平洋上，很多單位撐到只剩下幾個人。統計官員一度以為是自己算錯了。',
    },
    {
      icon: Radio,
      title: '看不懂的廣播',
      body: '日本電台一邊承認軍艦被擊沉，一邊說這正好證明了「大和魂」。承認失敗與宣告勝利，出現在同一段話裡。',
    },
  ];

  return (
    <KikuSlideShell
      chapter="第二幕 ・ 真相"
      chapterNote="1944, WASHINGTON D.C."
      title={<>等一下——這份性格報告，<span className="text-orange-600">究竟是誰要的？</span></>}
      lead="它不是心理學家在和平年代做的問卷。1944 年 6 月，美國戰時情報局找上五十七歲的潘乃德，任務只有一句話：告訴我們，日本人是什麼樣的人，以及他們接下來會怎麼做。因為此刻，美軍完全看不懂正在對面的那個敵人。"
      pageLabel="12 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-[520px_1fr] gap-6 flex-1 min-h-0">

          <div className="rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)] flex flex-col">
            <CliffScene className="w-full h-[196px]" />
            <div className="px-6 py-4 flex-1 flex flex-col">
              <div className="text-[12px] font-mono font-bold tracking-[0.18em] text-orange-500 mb-1">SAIPAN, JULY 1944</div>
              <h3 className="text-[22px] font-black text-stone-900 mb-2">崖邊那些不肯下來的人</h3>
              <p className="text-[15px] leading-[1.85] text-stone-600">
                塞班島陷落時，成群的日本平民抱著孩子，從斷崖走下去。美軍架起擴音器喊了好幾天，用日語保證不會虐待他們，沒有人回頭。
                <span className="block mt-2 text-stone-800 font-bold">那不是軍令。沒有人拿槍逼他們。</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {puzzles.map((p, i) => (
              <div key={p.title} className="flex-1 rounded-2xl bg-white/85 border border-orange-100 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)] p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-md">
                    <p.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="text-[22px] font-black text-stone-900">{p.title}</h3>
                  <span className="ml-auto text-[12px] font-mono font-bold text-orange-300">{`0${i + 2}`}</span>
                </div>
                <p className="text-[15px] leading-[1.9] text-stone-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-stone-900 text-white px-7 py-5 flex items-center gap-5">
          <span className="text-[13px] font-bold tracking-[0.25em] text-orange-400 whitespace-nowrap">華盛頓的疑問</span>
          <p className="text-[18px] font-medium leading-relaxed">
            如果連他們什麼時候會停手都算不出來，那麼登陸日本本土，究竟要準備多少屍袋？
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
