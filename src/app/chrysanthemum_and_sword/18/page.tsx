'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { MirrorScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 第三幕：日本照著這本書扮演自己 */
export default function ChrysanthemumSlide18() {
  const scripts = [
    {
      t: '詞彙',
      b: '「恥感文化」「義理人情」「集團主義」「建前與本音」——這些詞從這本書出發，變成日本人向世界自我介紹時的標準句型。要解釋自己，先拿它的框架來套。',
    },
    {
      t: '出版',
      b: '1970—80 年代，「日本人論」長成一個獨立的出版類型，累計上千種。書名不同，論證骨架幾乎都是同一副：日本人是集團的、是恥感的、是講義理的。',
    },
    {
      t: '出口',
      b: '1980 年代日本經濟起飛，美國管理學界又把這套說法買了回去，用「集團主義」解釋日本企業為什麼強。日本再照著這個解釋，寫成自己的企業文化手冊。',
    },
  ];

  return (
    <KikuSlideShell
      chapter="第三幕 ・ 扮演"
      chapterNote="PERFORMING THE SCRIPT"
      title={<>一個民族，照著一本外國人寫的書，<span className="text-orange-600">扮演自己</span></>}
      lead="這本書最不可思議的成就，不是它被日本人讀完，而是它被日本人用起來。從自我介紹、企業文化到觀光文宣，同一套劇本被複述了七十年。"
      pageLabel="18 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[320px_1fr] gap-6 flex-1 min-h-0">

          <div className="rounded-2xl bg-stone-900 text-white p-5 flex flex-col">
            <MirrorScene className="w-full h-[168px]" />
            <p className="text-[14.5px] leading-[1.85] text-stone-300 mt-3">
              他們照的那面鏡子，是 1946 年一個從沒來過的人磨出來的。
              <span className="block mt-2 text-orange-300 font-bold">
                照久了，鏡子裡的樣子，就變成了走路的姿勢。
              </span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {scripts.map((s, i) => (
              <div key={s.t} className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
                <div className="text-[12px] font-mono font-bold tracking-[0.18em] text-orange-400 mb-2">{`0${i + 1}`}</div>
                <h3 className="text-[24px] font-black text-stone-900 mb-3">{s.t}</h3>
                <p className="text-[14.5px] leading-[1.9] text-stone-600">{s.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="font-black">一份 1946 年的性格報告，最後變成了當事人的自我認同。</span>
            這是它最大的成功，也是它最重的責任。
            <span className="block mt-1.5 text-[19px] font-black">
              因為當一整個民族開始照著劇本演自己，我們最好回頭問一句——這個劇本，寫對了嗎？
            </span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
