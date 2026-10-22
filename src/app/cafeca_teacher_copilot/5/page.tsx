'use client';

import { TownSkyline, AdventureParty } from '@/components/slide/redink_town_art';
import { Map, Castle, ScrollText, Swords, Coins, Medal, BookMarked, Crown, Bot } from 'lucide-react';

export default function CafecaTcSlide5() {
  const world = [
    { icon: Castle, game: '冒險城鎮', edu: '科目／跨域主題', note: '同時是跨年級社群' },
    { icon: ScrollText, game: '委託任務', edu: '作業與評量', note: '費曼式：教別人、動手做' },
    { icon: Swords, game: '團體戰', edu: '專題與合作學習', note: '拼圖分工、缺一不可' },
    { icon: Coins, game: '積分', edu: '學習成果的證據', note: '獎勵理解，永遠可重賺' },
    { icon: Medal, game: '榮譽徽章', edu: 'KIST 七大品格力', note: '由人提名與頒發' },
    { icon: BookMarked, game: '任務日誌', edu: '學習歷程檔案', note: '評量變成證據鏈' },
    { icon: Crown, game: 'Game Master', edu: '教師', note: '城鎮導師 · 任務審定者' },
    { icon: Bot, game: 'AI 小幫手', edu: '學伴與助教', note: '結構化起步、紀錄透明' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-[#F8E7E1] rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-[#F9EADF] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#9E2B20] animate-pulse"></span>
        <span className="text-xs font-mono text-[#9E2B20] uppercase tracking-widest">The World</span>
      </div>

      <TownSkyline className="absolute bottom-24 left-0 w-full z-0 opacity-[0.12] pointer-events-none" />

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E7E1] border border-[#E3B3A8] mb-4">
          <Map className="w-4 h-4 text-[#9E2B20]" />
          <span className="text-sm font-semibold text-[#8C1F16]">紅墨的世界 · 一頁世界觀</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-[#2C2C2C]">
          學校是一場大型多人冒險，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E2B20] to-[#B31010]">地圖由老師的紅筆畫出</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) World Mapping Grid */}
      <div className="z-10 px-16 grid grid-cols-4 gap-4 flex-1">
        {world.map((w) => {
          const Icon = w.icon;
          return (
            <div key={w.game} className="bg-white border border-[#E6DCC3] rounded-2xl shadow-sm p-4 flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-xl bg-[#F9EADF] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#C01212]" />
                </div>
                <span className="text-[14px] font-black text-[#2C2C2C]">{w.game}</span>
              </div>
              <div className="text-[12px] font-bold text-[#574C45] mb-1">＝ {w.edu}</div>
              <div className="text-[10.5px] text-[#998A76] leading-snug mt-auto">{w.note}</div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Identity */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Map className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            這不是把遊戲當糖衣包在填鴨上——而是一次<span className="font-black text-[#FFD54F]">評量制度的改革</span>：
            任務日誌就是學習歷程，徽章就是品格力，教師端與學生端共用同一條 AI 產線與同一組審定紅線。
          </p>
          <AdventureParty tone="light" className="h-12 w-auto flex-shrink-0 opacity-90" />
        </div>
      </div>

    </div>
  );
}
