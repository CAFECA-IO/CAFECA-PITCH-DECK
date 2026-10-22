'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { ChrysanthemumMark, SwordMark } from '@/components/slide/kiku_katana_art';

/* Info: (20260830 - Luphia) 書名之謎：菊與刀為何並存 */
export default function ChrysanthemumSlide3() {
  return (
    <KikuSlideShell
      chapter="第一幕 ・ 謎題"
      chapterNote="WHY THIS TITLE"
      title={<>愛菊花的人，為什麼<span className="text-orange-600">佩刀</span>？</>}
      lead="書名本身就是這份報告的第一個結論。作者露絲・潘乃德在材料裡看見兩個互相矛盾的日本，而當時最流行的解釋很簡單：他們人格分裂、他們不可理喻。她不接受這個答案。"
      pageLabel="03 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch flex-1 min-h-0">

          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white p-7 flex flex-col shadow-[0_20px_50px_-25px_rgba(234,88,12,0.8)]">
            <ChrysanthemumMark size={72} className="text-white/90 mb-4" />
            <h3 className="text-[30px] font-black mb-2">菊</h3>
            <p className="text-[15px] leading-[1.9] text-white/95">
              日本的菊花不是野生的美。花匠把花瓣一片片扳開，插上細鐵絲固定，讓每一朵都長成規定的形狀。
              <span className="block mt-3 font-bold">美，來自被安排好的位置。</span>
            </p>
          </div>

          <div className="flex items-center justify-center px-2">
            <div className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center text-[24px] font-black shadow-lg">
              ？
            </div>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-7 flex flex-col shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)]">
            <SwordMark size={72} className="text-orange-400 mb-4" />
            <h3 className="text-[30px] font-black mb-2">刀</h3>
            <p className="text-[15px] leading-[1.9] text-stone-300">
              武士的刀要天天擦。潘乃德注意到，日本人談「保持刀不生鏽」時，指的往往不是兵器，而是自己——
              <span className="block mt-3 font-bold text-orange-300">責任生鏽的人，要自己負責擦亮。</span>
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-white/85 border border-orange-100 px-8 py-5 shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
          <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-2">潘乃德的答案</div>
          <p className="text-[19px] leading-relaxed text-stone-800 font-medium">
            這不是兩種性格，是同一種性格的兩面。菊與刀指向同一件事：
            <span className="text-orange-600 font-black">一個人只要站在對的位置、把該還的還清，就是美的。</span>
            接下來六個維度，就是她從這個矛盾裡拆出來的答案。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
