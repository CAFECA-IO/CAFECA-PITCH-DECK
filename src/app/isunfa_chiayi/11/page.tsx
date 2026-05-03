'use client';

import Image from 'next/image';

export default function Slide11() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/isunfa_chiayi/649432653_122292720338181179_4859574426932439543_n.jpg" 
            alt="Landmark Cafe in Chiayi" 
            fill 
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-24 text-center z-10 animate-fade-in-up">
          <h2 className="text-6xl font-black tracking-widest text-white mb-8 drop-shadow-xl">
            命定咖啡館生態圈
          </h2>
          <div className="inline-block px-12 py-4 bg-amber-500/90 backdrop-blur-md rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.3)]">
            <h3 className="text-4xl font-bold text-neutral-950 tracking-widest">
              你，就是嘉義的地標
            </h3>
          </div>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-white/50 text-xs tracking-[0.2em] uppercase z-20">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
