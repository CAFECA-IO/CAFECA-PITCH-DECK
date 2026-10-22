'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { DebtScrollScene } from '@/components/slide/kiku_scenes';
import { TriangleAlert } from 'lucide-react';

/* Info: (20260830 - Luphia) 第二把鑰匙：恩 */
export default function ChrysanthemumSlide5() {
  const debts = [
    { title: '皇恩', body: '生為日本人就欠下的，最大的一筆' },
    { title: '親恩', body: '被生下來、被養大，這筆帳一輩子還不完' },
    { title: '師恩', body: '教過你的人，終身有位' },
    { title: '主恩', body: '主君、上司、任何幫過你的人' },
  ];

  return (
    <KikuSlideShell
      chapter="維度 二 ・ 負債"
      chapterNote="ON — THE DEBT YOU ARE BORN WITH"
      title={<>你一出生，<span className="text-orange-600">就已經欠債了</span></>}
      lead="潘乃德說，要理解日本人，得先接受一件對美國人來說很奇怪的事：受人恩惠不是溫暖的事，是壓力很大的事。"
      pageLabel="05 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[250px_1fr_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-3 flex items-center justify-center shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <DebtScrollScene className="w-full h-full" />
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)] flex flex-col">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-4">與生俱來的四筆帳</div>
            <div className="grid grid-cols-2 gap-3.5 flex-1">
              {debts.map((d) => (
                <div key={d.title} className="rounded-xl bg-orange-50 border border-orange-200 p-4 flex flex-col justify-center">
                  <div className="text-[23px] font-black text-orange-600 mb-1">{d.title}</div>
                  <div className="text-[13.5px] leading-snug text-stone-600">{d.body}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-400 mb-4">一個語言上的線索</div>
            <p className="text-[15px] leading-[1.9] text-stone-300">
              日語裡表達感謝的詞，有好幾個原意都不是快樂。
            </p>
            <div className="mt-4">
              <div className="text-[24px] font-black text-white">「かたじけない」</div>
              <div className="mt-1 text-[14px] text-stone-400">直譯接近：這讓我感到羞愧、慚愧。</div>
            </div>
            <div className="mt-4">
              <div className="text-[24px] font-black text-white">「すみません」</div>
              <div className="mt-1 text-[14px] text-stone-400">字面是：這件事還沒有了結。既用來道歉，也用來道謝。</div>
            </div>
            <p className="mt-auto pt-5 text-[16px] leading-relaxed text-orange-300 font-bold border-t border-white/10">
              謝謝你 ＝ 我又欠你一筆，而我還沒還。
            </p>
          </div>
        </div>

        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/70 px-7 py-4 flex items-start gap-4">
          <TriangleAlert size={22} className="text-orange-600 mt-0.5 flex-shrink-0" />
          <p className="text-[17px] leading-relaxed text-stone-700">
            所以日本人會在街上避免管閒事，也不輕易接受陌生人的幫忙。潘乃德記下當時流行的一句提醒：
            <span className="font-black text-orange-600">「不要隨便受人之恩。」</span>
            不是冷漠——是因為每一份好意，都會變成一張到期日不明的帳單。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
