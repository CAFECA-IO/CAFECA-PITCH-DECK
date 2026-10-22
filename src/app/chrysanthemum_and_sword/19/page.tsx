'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { SplitSelfScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 轉折與故事一：那位兩邊都不算自己人的報導人 */
export default function ChrysanthemumSlide19() {
  const beats = [
    { t: '出生在美國', b: '他是二世，母語是英語，童年在美國東岸度過。' },
    { t: '十來歲被送回日本', b: '1930 年代初，父母把他帶回鄉下讀書。他一句敬語都不會，在學校裡是個徹底的外人。' },
    { t: '在最國家主義的年代上學', b: '他碰上的，正是修身課與國體教育被推到極致的那幾年。為了活下來，他把課本上的規則一條一條背熟。' },
    { t: '開戰前回到美國，然後被關進拘留營', b: '珍珠港後，他和十幾萬日裔一起被送進集中營。1944 年，戰時情報局把他找了出來。' },
  ];

  return (
    <KikuSlideShell
      chapter="第四幕 ・ 故事一"
      chapterNote="THE INFORMANT"
      title={<>她最倚重的那個日本人，<span className="text-orange-600">其實不太算日本人</span></>}
      lead="潘乃德最倚重的報導人之一，是一個叫做羅伯特・橋間的年輕人。後來的研究者去查了他的來歷，發現了一件很尷尬的事。"
      pageLabel="19 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[330px_1fr] gap-6 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-4 flex flex-col items-center justify-center shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <SplitSelfScene className="w-full h-[190px]" />
            <div className="text-center mt-2 px-2">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-orange-500">ROBERT HASHIMA</div>
              <p className="text-[14px] leading-snug text-stone-600 mt-1">
                在美國是日本人，在日本是美國人。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {beats.map((b, i) => (
              <div key={b.t} className="rounded-2xl bg-white/85 border border-orange-100 p-5 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-[15px] font-black mb-3">
                  {i + 1}
                </div>
                <div className="text-[18px] font-black text-stone-900 mb-2">{b.t}</div>
                <p className="text-[14px] leading-[1.85] text-stone-600">{b.b}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">為什麼一個外人，反而講得比誰都完整？</span>
            因為在自己文化裡長大的人，說不出自己的規則——那些東西是用身體記住的，不是用背的。
            只有外人才需要把它整理成條文。
            <span className="block mt-2 font-bold">
              潘乃德聽見的那個「日本人」，很大一部分是一個在日本被當成外人的美國少年，
              在軍國主義最盛的年代，背下來的那本公民課本。
            </span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
