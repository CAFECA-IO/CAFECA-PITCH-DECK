'use client';

import { Network, Globe, Lock } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col">
        
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        <div className="z-10 flex flex-col h-full">
          <div className="mb-12">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">
              什麼是「地下帝國」？
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl text-slate-300 leading-relaxed font-light">
                在亨利·法雷爾與亞伯拉罕·紐曼的著作《地下帝國》中，指出美國如何透過建立全球經濟的底層基礎設施，掌握了前所未有的地緣政治權力。
              </p>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm">
                <p className="text-lg text-slate-400">
                  <span className="text-red-400 font-bold">武器化的相互依賴 (Weaponized Interdependence)：</span> 
                  全球化並未帶來完全的和平，反而創造了新的「咽喉點」(Chokepoints)。控制這些網路節點的國家，能夠監聽、切斷對手的資源與資訊。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: Globe, title: '金融網路 (SWIFT)', desc: '控制全球資金流動的命脈，實施精準的經濟制裁。' },
                { icon: Network, title: '資訊網路 (海底電纜)', desc: '全球 95% 跨國數據仰賴電纜，成為監控與情報的關鍵節點。' },
                { icon: Lock, title: '科技供應鏈 (半導體)', desc: '掌握核心智慧財產與設備，鎖死對手的高科技與 AI 發展。' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-6 bg-slate-950/40 rounded-xl border border-slate-800 hover:border-red-900/50 transition-colors">
                  <div className="p-3 bg-red-950 rounded-lg shrink-0">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          02 // THE CONCEPT
        </div>
      </div>
    </div>
  );
}
