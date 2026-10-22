'use client';

import { ChrysanthemumMark, SwordMark, RisingSunRays } from '@/components/slide/kiku_katana_art';

/* Info: (20260830 - Luphia) 封面：菊與刀 */
export default function ChrysanthemumSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl font-sans text-stone-800">

      {/* Info: (20260830 - Luphia) 背景層 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-amber-100/70" />
      <RisingSunRays className="absolute left-1/2 -translate-x-1/2 -top-[420px] w-[1400px] h-[1400px] text-orange-400/12" />
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: 'radial-gradient(rgba(234,88,12,0.10) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[8px] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      {/* Info: (20260830 - Luphia) 左側標題 */}
      <div className="absolute inset-y-0 left-0 w-[720px] flex flex-col justify-center pl-20 pr-8 z-10">
        <div className="flex items-center gap-3 mb-7">
          <span className="w-10 h-[2px] bg-orange-500" />
          <span className="text-[13px] font-bold tracking-[0.35em] text-orange-600">說書 ・ BOOK TALK</span>
        </div>

        <h1 className="text-[128px] leading-[0.9] font-black tracking-tight text-stone-900">
          菊<span className="text-orange-500 mx-2">與</span>刀
        </h1>

        <p className="mt-6 text-[22px] font-bold tracking-[0.08em] text-stone-600">
          The Chrysanthemum and the Sword
        </p>
        <p className="mt-1 text-[16px] tracking-[0.2em] text-stone-400">
          Ruth Benedict ・ 露絲・潘乃德 ・ 1946
        </p>

        <div className="mt-9 border-l-[3px] border-orange-500 pl-5 max-w-[560px]">
          <p className="text-[19px] leading-relaxed text-stone-700 font-medium">
            1946 年，一本書用六個維度，
            <br />
            說完了七千萬個日本人。
            <br />
            它到今天還在賣，而賣得最好的地方，是日本。
          </p>
          <p className="mt-3 text-[26px] font-black text-orange-600">
            「日本人，到底是什麼樣的人？」
          </p>
        </div>

        <div className="mt-9 flex items-center gap-3 text-[13px] tracking-[0.18em] text-stone-400">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          一份性格報告 ・ 一場戰爭 ・ 一個照著它扮演自己的民族
        </div>
      </div>

      {/* Info: (20260830 - Luphia) 右側菊與刀圖像 */}
      <div className="absolute inset-y-0 right-0 w-[560px] flex items-center justify-center z-10">
        <div className="relative w-[430px] h-[430px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_30px_80px_-20px_rgba(234,88,12,0.55)]" />
          <div className="absolute inset-[18px] rounded-full border-[3px] border-white/50" />
          <ChrysanthemumMark size={300} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/95" />
          <SwordMark size={240} className="absolute -right-6 -bottom-6 text-stone-800 drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]" />
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 px-20 flex items-center justify-between text-[11px] tracking-[0.24em] text-stone-400 font-medium z-20">
        <span>CULTURE STUDIED AT A DISTANCE</span>
        <span>23 SLIDES</span>
      </div>
    </div>
  );
}
