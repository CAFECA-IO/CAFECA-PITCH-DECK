'use client';

import Image from 'next/image';

export default function Slide4() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Info: (20260527 - Luphia) Left Side: Content */}
        <div className="w-1/2 p-20 flex flex-col justify-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-500 text-sm tracking-widest mb-8 w-max">
            01 | 全能數位店長
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-6">全能數位店長</h2>
          <h3 className="text-3xl font-light text-neutral-400 mb-12">解決庫存盤點與人力</h3>

          <div className="space-y-8 mt-8">
            <div className="bg-gradient-to-r from-amber-500/10 to-transparent p-8 rounded-r-2xl border-l-4 border-amber-500">
              <p className="text-4xl font-bold text-amber-400 mb-2">減少 40% 盤點負擔</p>
              <p className="text-lg text-neutral-300 font-light">自動化庫存查詢與自助結帳，釋放店員雙手</p>
            </div>
            
            <div className="bg-gradient-to-r from-neutral-800/50 to-transparent p-8 rounded-r-2xl border-l-4 border-neutral-600">
              <p className="text-4xl font-bold text-white mb-2">結帳動線淨空</p>
              <p className="text-lg text-neutral-400 font-light">手機掃碼與自助結帳，隨逛隨買無需罰站</p>
            </div>
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Right Side: Image */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent z-10 w-24"></div>
          <Image 
            src="/images/isunfa_chiayi/isunfa_chiayi_pos_ui_1777801583552.png" 
            alt="Smart POS Interface" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Info: (20260527 - Luphia) Footer Info */}
        <div className="absolute bottom-6 left-16 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
