'use client';

import Image from 'next/image';

export default function Slide7() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-black relative overflow-hidden shadow-2xl flex items-center justify-center border border-neutral-800">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/isunfa_chiayi/isunfa_chiayi_music_vibe_1777801638705.png"
            alt="Immersive Music Atmosphere"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Content */}
        <div className="z-10 text-center px-12 animate-fade-in-up mt-20">
          <div className="inline-block px-6 py-2 rounded-full border border-purple-500/50 text-purple-300 text-sm tracking-widest mb-8 bg-purple-900/30 backdrop-blur-md">
            04 | 二十四小時駐點音樂師
          </div>

          <h2 className="text-6xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 leading-tight drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            打造專屬氛圍，不用排歌單
          </h2>

          <h3 className="text-2xl font-light text-purple-200 mt-6 tracking-[0.3em]">
            音樂就是你的風格
          </h3>
        </div>

        {/* Huge Music Symbol */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] text-purple-500/10 pointer-events-none z-0 mix-blend-screen">
          ♪
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-purple-200/40 text-xs tracking-[0.2em] uppercase z-10">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
