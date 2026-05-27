'use client';

import Image from 'next/image';

export default function Slide2() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex items-center justify-center border border-neutral-800">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/isunfa_chiayi/isunfa_chiayi_night_mess_1777801567686.png" 
            alt="Messy cafe counter at night" 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[3000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="z-10 text-center px-12 animate-fade-in-up mt-40">
          <h2 className="text-6xl font-bold tracking-wider text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] border-l-8 border-red-600 pl-8 text-left bg-neutral-900/40 p-8 backdrop-blur-sm rounded-r-2xl">
            <span className="text-red-500 font-light text-4xl block mb-4">晚上 10 點，鐵門拉下</span>
            庫存盤點的惡夢才剛開始？
          </h2>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500/70 text-xs tracking-[0.2em] uppercase z-10">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
