'use client';

import { Cable, WifiOff, Map } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col">
        
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none"></div>

        <div className="z-10 flex flex-col h-full">
          <div className="mb-12">
            <span className="text-cyan-500 font-mono text-sm tracking-widest mb-2 block">CURRENT EVENTS 2026</span>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">
              2026: 海底電纜與資訊咽喉
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-600 to-transparent"></div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-12 mt-4 items-center">
            
            <div className="relative h-full flex flex-col justify-center">
              <div className="absolute inset-0 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
                {/* Abstract Map Graphic */}
                <Map size={400} className="text-slate-800 absolute opacity-30" />
                
                {/* Cable Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 300 Q 150 100 300 200 T 550 250" fill="transparent" stroke="#0891b2" strokeWidth="4" className="animate-pulse" />
                  <path d="M 50 150 Q 200 300 350 150 T 550 100" fill="transparent" stroke="#164e63" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Choke Point */}
                  <circle cx="300" cy="200" r="10" fill="#ef4444" className="animate-ping" />
                  <circle cx="300" cy="200" r="6" fill="#ef4444" />
                </svg>

                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-center text-sm font-mono text-cyan-400">
                    <span className="flex items-center gap-2"><Cable size={16}/> SEA-ME-WE 6</span>
                    <span className="text-red-400 flex items-center gap-2"><WifiOff size={16}/> SEVERED </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                網際網路並非存在於雲端，而是依賴物理層的海底電纜。美國長期透過監聽這些資訊咽喉，掌握全球情報。
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="p-5 bg-slate-800/40 rounded-xl border-l-4 border-cyan-500">
                  <h4 className="text-lg font-bold text-slate-100 mb-2">主權網路與硬體隔離</h4>
                  <p className="text-slate-400">
                    2026年，歐洲與亞洲國家不再信任單一霸權的電纜網路，積極建立「備援物理網路」。同時，美國否決了多條連接中國的海底電纜計畫，全球互聯網正式出現物理斷層 (Splinternet)。
                  </p>
                </div>

                <div className="p-5 bg-slate-800/40 rounded-xl border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-slate-100 mb-2">灰帶衝突的基礎設施戰</h4>
                  <p className="text-slate-400">
                    紅海與台海周邊的海底電纜頻繁遭到「不明原因」切斷。這展現了地下帝國的脆弱性：經濟的武器化也會引發實體層面的報復與破壞，資訊基礎設施已成為戰爭的最前線。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          05 // SUBMARINE CABLES
        </div>
      </div>
    </div>
  );
}
