'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { ArrowRight } from 'lucide-react';

/* Info: (20260830 - Luphia) 高潮：天皇存廢之爭與潘乃德的推論 */
export default function ChrysanthemumSlide14() {
  const chain = [
    { step: '1', text: '天皇不是政治領袖，而是「恩」的來源本身。日本人罵軍部、罵財閥、罵政府，但幾乎沒有人罵天皇。' },
    { step: '2', text: '所以攻擊天皇，等於要求全體日本人否定自己存在的根據。那會換來一場沒有終點的抵抗。' },
    { step: '3', text: '但反過來看——如果停戰是天皇的命令，那麼投降就不是背叛，而是盡忠。同一套邏輯，答案完全相反。' },
    { step: '4', text: '而且日本人不會因為戰敗而崩潰。他們會重算一次「各得其所」，然後在新的位置上，一樣認真。' },
  ];

  return (
    <KikuSlideShell
      chapter="第二幕 ・ 豪賭"
      chapterNote="THE EMPEROR QUESTION, 1945"
      title={<>1945 年，華盛頓吵的是：<span className="text-orange-600">要不要廢掉天皇</span></>}
      lead="輿論與多數官員的答案很直覺——他是元凶，當然要審判、要廢除。潘乃德的報告說：千萬不要。"
      pageLabel="14 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-xl bg-stone-200/70 border border-stone-300 px-6 py-4">
            <div className="text-[12px] font-bold tracking-[0.24em] text-stone-500 mb-1.5">主流意見</div>
            <p className="text-[17px] leading-relaxed text-stone-700">
              廢除天皇制、把裕仁送上法庭。不然這場戰爭等於沒有打完。
            </p>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-4 shadow-[0_16px_36px_-24px_rgba(234,88,12,0.9)]">
            <div className="text-[12px] font-bold tracking-[0.24em] mb-1.5 opacity-90">潘乃德的報告</div>
            <p className="text-[17px] leading-relaxed font-medium">
              動天皇，你們就得為本土決戰準備幾百萬人的傷亡。留下他，戰爭可能一天之內結束。
            </p>
          </div>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-4 gap-4">
          {chain.map((c, i) => (
            <div key={c.step} className="relative rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center text-[18px] font-black mb-4">
                {c.step}
              </div>
              <p className="text-[15px] leading-[1.9] text-stone-700">{c.text}</p>
              {i < chain.length - 1 ? (
                <ArrowRight size={20} className="absolute -right-3.5 top-1/2 -translate-y-1/2 text-orange-400 bg-orange-50 rounded-full z-10" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">請注意這件事的性質：</span>
            這不是同情敵人，也不是道德立場。這是一個純粹的技術判斷——
            <span className="font-bold">在戰爭最激烈的時候，假設對方是講道理的，只是講的不是你的道理。</span>
            然後把那套道理推到底，看它會導向哪裡。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
