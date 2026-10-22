'use client';

import { QuestFlag } from '@/components/slide/redink_town_art';
import { Gamepad2, ShieldCheck, RotateCcw, Users, Coins, Sparkles } from 'lucide-react';

export default function CafecaTcSlide4() {
  const traits = [
    {
      icon: ShieldCheck,
      title: '好遊戲是無法作弊的評量',
      desc: '打不過那隻王，就是還沒學會走位——沒有人需要改考卷。設計得當的任務，沒有真理解就交不出來。',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: RotateCcw,
      title: '好遊戲獎勵重試',
      desc: '失敗是資訊、不是判決；積分永遠可以靠努力重新賺——人願意在遊戲裡反覆挑戰自己做不到的事。',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: Users,
      title: '好遊戲的團隊戰缺一不可',
      desc: '結構性互賴讓「把隊友教會」成為最優策略——合作不是美德呼籲，是通關的必要條件。',
      color: 'border-[#DDB4A9] bg-[#F4E4DE]',
      iconColor: 'text-[#7E2420]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-[#FBF2D7] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-[#F9EADF] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#F2C333] animate-pulse"></span>
        <span className="text-xs font-mono text-[#A87B0A] uppercase tracking-widest">Why Games</span>
      </div>

      <QuestFlag className="absolute top-16 right-16 w-16 z-10 opacity-90" />

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBF2D7] border border-[#EBD28A] mb-4">
          <Gamepad2 className="w-4 h-4 text-[#A87B0A]" />
          <span className="text-sm font-semibold text-[#8A6508]">為什麼是遊戲</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-[#2C2C2C]">
          遊戲的機制，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5A316] to-[#B31010]">天生長在教育的三核心上</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 3 Game Traits */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">
        {traits.map((t) => {
          const Icon = t.icon;
          return (
            <div key={t.title} className={`border ${t.color} rounded-3xl p-7 flex flex-col shadow-sm`}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <Icon className={`w-6 h-6 ${t.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3 leading-snug">{t.title}</h3>
              <p className="text-[13px] text-[#6F6259] leading-relaxed">{t.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Why It Failed Before / Why Now */}
      <div className="z-10 px-16 py-6">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
          <div className="flex items-center gap-3 bg-[#F1E9D3] border border-[#E6DCC3] rounded-2xl px-6 py-4">
            <Coins className="w-5 h-5 text-[#6F6259] flex-shrink-0" />
            <p className="text-[13px] text-[#574C45] font-medium leading-snug">
              這個理念三十年前就有，卡住的從來不是教育學——是<span className="font-black">營運成本</span>：
              任務要人設計、多元成果要人評、個別化要人排
            </p>
          </div>
          <div className="flex items-center text-2xl font-black text-[#D61313]">→</div>
          <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-6 py-4 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
            <p className="text-[13px] text-white font-medium leading-snug">
              AI 沒有讓遊戲化更有趣——<span className="font-black text-[#FFD54F]">AI 第一次讓「好的遊戲化」在經濟上可行</span>：
              任務可量產、多元成果評得過來、分組自動化
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
