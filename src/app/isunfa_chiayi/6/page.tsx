'use client';

import Image from 'next/image';

export default function Slide5() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-neutral-200">
        
        {/* Background Image full coverage */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/isunfa_chiayi/isunfa_chiayi_warm_latte_1777801605297.png" 
            alt="Warm Latte" 
            fill 
            className="object-cover opacity-90"
          />
          {/* Subtle warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-900/40 to-transparent"></div>
        </div>

        {/* Left Side: Content */}
        <div className="w-[55%] p-20 flex flex-col justify-center relative z-10 h-full">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-300 text-amber-200 text-sm tracking-widest mb-8 w-max bg-black/20 backdrop-blur-sm">
            02 | 專屬服務生
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-md">客戶專屬服務生</h2>
          <h3 className="text-3xl font-light text-amber-100 mb-16 drop-shadow-md">比你更懂你</h3>

          {/* Speech Bubble */}
          <div className="relative bg-white/95 backdrop-blur-md text-neutral-800 p-8 rounded-3xl rounded-tl-none shadow-2xl max-w-lg transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-amber-500/50">!</div>
            <p className="text-2xl font-medium leading-relaxed">
              「林先生歡迎回來！一樣要燕麥奶拿鐵，微溫嗎？」
            </p>
          </div>

          {/* Data Highlight */}
          <div className="mt-16 flex items-end gap-4">
            <div className="text-7xl font-black text-amber-400 drop-shadow-lg">25%</div>
            <div className="text-2xl font-medium text-white pb-2 drop-shadow-md">提升熟客回購率</div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-16 text-white/60 text-xs tracking-[0.2em] uppercase z-20">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
