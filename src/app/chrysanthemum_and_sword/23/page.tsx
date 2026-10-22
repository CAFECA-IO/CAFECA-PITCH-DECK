'use client';

import { ChrysanthemumMark, SwordMark, RisingSunRays } from '@/components/slide/kiku_katana_art';

/* Info: (20260830 - Luphia) 結語：一本錯得很有價值的書 */
export default function ChrysanthemumSlide23() {
  const takeaways = [
    { k: '它錯在', v: '把文化當成一個固定的答案' },
    { k: '它對在', v: '把文化當成一個必須先問的問題' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl font-sans text-stone-800">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-amber-100/70" />
      <RisingSunRays className="absolute -left-[380px] -bottom-[440px] w-[1100px] h-[1100px] text-orange-400/12" />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(rgba(234,88,12,0.10) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-[8px] bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400" />

      <div className="relative z-10 h-full flex flex-col px-20 pt-12 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-[2px] bg-orange-500" />
          <span className="text-[13px] font-bold tracking-[0.35em] text-orange-600">結語 ・ WHY WE STILL READ IT</span>
        </div>

        <h2 className="text-[40px] font-black leading-[1.2] tracking-tight text-stone-900">
          取樣錯了、那一夜並不整齊、
          <br />
          房間裡少了一半的人——<span className="text-orange-600">那還讀它做什麼？</span>
        </h2>

        <div className="mt-5 grid grid-cols-[1fr_340px] gap-9 flex-1 min-h-0">
          <div className="flex flex-col gap-3.5">
            <div className="rounded-2xl bg-white/85 border border-orange-100 px-7 py-4 shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
              <p className="text-[18px] leading-[1.85] text-stone-700">
                因為在 1945 年，當所有人都在說「那些人不是人」的時候，
                有一個人坐下來，認真假設
                <span className="font-black text-orange-600">敵人是講道理的——只是講的不是你的道理</span>
                ，然後把那套道理推到底。她用錯的材料，做對了一件事。
                <span className="block mt-2">
                  而八十年後，那份報告還在被引用、被複述、被拿來當自我介紹。
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {takeaways.map((t) => (
                <div key={t.k} className="rounded-2xl bg-stone-900 text-white px-6 py-4">
                  <div className="text-[13px] font-bold tracking-[0.25em] text-orange-400 mb-2">{t.k}</div>
                  <p className="text-[17px] font-bold leading-snug">{t.v}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-4 shadow-[0_20px_50px_-25px_rgba(234,88,12,0.9)]">
              <p className="text-[18px] leading-[1.75] font-medium">
                所以今天讀《菊與刀》，不是為了認識日本。
                <span className="block mt-2 font-black text-[21px]">
                  是為了在心裡浮出一句「他們就是那樣的人」的時候，
                  <br />
                  記得先問：這句話是誰寫的？寫在哪一年？為誰而寫？
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[300px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_30px_80px_-20px_rgba(234,88,12,0.55)]" />
              <div className="absolute inset-[16px] rounded-full border-[3px] border-white/50" />
              <ChrysanthemumMark size={210} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/95" />
              <SwordMark size={170} className="absolute -right-4 -bottom-4 text-stone-800 drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 px-20 flex items-center justify-between text-[11px] tracking-[0.24em] text-stone-400 font-medium z-20">
        <span>THE CHRYSANTHEMUM AND THE SWORD ・ RUTH BENEDICT ・ 1946</span>
        <span className="font-mono text-orange-500">23 / 23</span>
      </div>
    </div>
  );
}
