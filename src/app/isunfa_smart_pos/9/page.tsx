'use client';

import { Smartphone, MapPin, Sparkles, UserCheck } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        {/* Content Container */}
        <div className="w-full pt-16 pb-20 px-20 flex flex-col h-full relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-500 text-sm tracking-widest mb-6 w-max bg-amber-500/10 backdrop-blur-sm">
            02-1 | 虛實融合體驗
          </div>
          
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-5xl font-bold text-white mb-3">當客戶的手機成為店家的入口</h2>
              <h3 className="text-2xl font-light text-amber-400">打破生客界線，實現無縫跨店導購</h3>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-neutral-900/80 px-6 py-3 rounded-2xl border border-neutral-800">
              <Smartphone size={24} className="text-amber-500" />
              <span className="text-neutral-300 font-medium tracking-wider">BYOD (Bring Your Own Device)</span>
            </div>
          </div>

          <div className="flex gap-8 flex-1 min-h-0">
            
            {/* Feature 1 */}
            <div className="w-1/2 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 rounded-2xl p-8 border border-neutral-800/80 backdrop-blur-sm flex flex-col relative group hover:border-amber-500/30 transition-colors">
              <div className="absolute top-0 right-0 opacity-5 text-neutral-400 group-hover:text-amber-500 transition-colors translate-x-4 -translate-y-4">
                <UserCheck size={160} />
              </div>
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 text-amber-400 shadow-inner">
                <Sparkles size={28} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 relative z-10">陌生店家，熟悉推薦</h4>
              <p className="text-lg text-neutral-400 font-light leading-relaxed flex-1 relative z-10">
                透過手機存取 POS 雲端服務，AI 即時分析客戶過往的風格喜好與購物維度。即使是第一次踏入的陌生店鋪，系統也能第一時間推薦最適合他的產品，猶如老友般的專屬體驗。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="w-1/2 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 rounded-2xl p-8 border border-neutral-800/80 backdrop-blur-sm flex flex-col relative group hover:border-amber-500/30 transition-colors">
              <div className="absolute top-0 right-0 opacity-5 text-neutral-400 group-hover:text-amber-500 transition-colors translate-x-4 -translate-y-4">
                <MapPin size={160} />
              </div>
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6 text-amber-400 shadow-inner">
                <MapPin size={28} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 relative z-10">隨需預測，精準導流</h4>
              <p className="text-lg text-neutral-400 font-light leading-relaxed flex-1 relative z-10">
                AI 結合地理位置隨時預測用戶需求。當客戶抵達特定車站或商圈時，主動推播附近符合其品味的風格店家與當季單品，將線上流量完美轉化為線下實體進店率。
              </p>
            </div>

          </div>

        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-20 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
