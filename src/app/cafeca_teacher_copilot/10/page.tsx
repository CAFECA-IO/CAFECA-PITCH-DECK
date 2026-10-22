'use client';

import { ShieldCheck, EyeOff, RotateCcw, Medal, Crown } from 'lucide-react';

export default function CafecaTcSlide10() {
  const lines = [
    {
      icon: EyeOff,
      title: '沒有公開排行榜',
      desc: '排名獎勵相對位置，摧毀合作與弱勢者的參與——這裡只跟「昨天的自己」與「團隊目標」比',
      color: 'bg-[#F8E7E1] border-[#EFCFC5]',
      iconColor: 'text-[#9E2B20]',
    },
    {
      icon: RotateCcw,
      title: '積分永遠可以重新賺',
      desc: '把遊戲最人道的特性「死了可以重來」帶進評量，拿走考試最殘忍的特性「一次定生死」',
      color: 'bg-[#F9EADF] border-[#F2CDBE]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: Medal,
      title: '品格徽章人發、學業積分機算',
      desc: '徽章由教師與隊友提名頒發，行為證據自動彙整供提名參考——品格永遠由人定義',
      color: 'bg-[#FBF2D7] border-[#F3E3AC]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: Crown,
      title: '教師是 Game Master',
      desc: '城鎮的導師與任務審定者——學生的冒險地圖，是老師用紅筆畫出來的，教學決定權永遠在教師',
      color: 'bg-[#F4E4DE] border-[#EACCC2]',
      iconColor: 'text-[#7E2420]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-[#F8E7E1] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-[#F4E4DE] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#9E2B20] animate-pulse"></span>
        <span className="text-xs font-mono text-[#9E2B20] uppercase tracking-widest">Design Red Lines</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E7E1] border border-[#E3B3A8] mb-4">
          <ShieldCheck className="w-4 h-4 text-[#9E2B20]" />
          <span className="text-sm font-semibold text-[#8C1F16]">四條不可讓步的設計底線</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-[#2C2C2C]">
          遊戲化是雙面刃——<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9E2B20] to-[#6E1A1A]">握刀的方式寫在底線裡</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 4 Red Lines */}
      <div className="z-10 px-16 grid grid-cols-2 gap-4 flex-1">
        {lines.map((l) => {
          const Icon = l.icon;
          return (
            <div key={l.title} className={`border ${l.color} rounded-2xl p-6 flex gap-4 shadow-sm`}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon className={`w-6 h-6 ${l.iconColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-1.5">{l.title}</h3>
                <p className="text-[12.5px] text-[#6F6259] leading-relaxed">{l.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Note */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <ShieldCheck className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            再加一條科學的底線：試點以<span className="font-black text-[#FFD54F]">內在動機量表前後測公開驗證</span>
            ——外在獎勵若排擠了內在動機，數據會說話，不及格就修、修不好就停。
          </p>
        </div>
      </div>

    </div>
  );
}
