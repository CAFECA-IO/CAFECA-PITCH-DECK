'use client';

import { Puzzle, Lightbulb, Users, HeartHandshake } from 'lucide-react';

export default function CafecaTcSlide6() {
  const mappings = [
    {
      icon: Lightbulb,
      core: '真實的理解',
      mech: '無法作弊的費曼式任務',
      desc: '任務以「產出與教學」為主：向學弟妹解釋、錄教學影片、寫配方書、替錯誤解法除錯——沒有真理解就交不出來。',
      detail: 'AI 依課綱量產任務初稿與難度星級，教師紅筆審定後上架；多模態成果 AI 初評、教師覆核。',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
      badge: 'bg-[#F6D9CB] text-[#A31111]',
    },
    {
      icon: Users,
      core: '合作',
      mech: '結構性互賴的團體戰',
      desc: '拼圖式分工：每人掌握一塊知識、必須互教才能通關；團隊積分納入「最弱成員的進步幅度」。',
      detail: '學力好的學生，最優策略從「自己寫完」變成「把隊友教會」——而教別人正是最深的理解證據。',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
      badge: 'bg-[#F8E9BE] text-[#8A6508]',
    },
    {
      icon: HeartHandshake,
      core: '社交與品格',
      mech: '人發的徽章 × 走出螢幕的任務',
      desc: '徽章樹直接採 KIST 七大品格力，由教師與隊友提名頒發，行為證據自動彙整供提名參考。',
      detail: '跨年級師徒任務、訪問家人與社區長者、全組實地操作——遊戲把人推向真實互動，而不是替代它。',
      color: 'border-[#DDB4A9] bg-[#F4E4DE]',
      iconColor: 'text-[#7E2420]',
      badge: 'bg-[#EDD6D0] text-[#6E1A1A]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[700px] h-[700px] bg-[#F9EADF] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] bg-[#F4E4DE] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#D61313] animate-pulse"></span>
        <span className="text-xs font-mono text-[#C01212] uppercase tracking-widest">Core × Mechanics</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EADF] border border-[#E8B5A4] mb-4">
          <Puzzle className="w-4 h-4 text-[#C01212]" />
          <span className="text-sm font-semibold text-[#A31111]">三核心 × 遊戲機制</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-[#2C2C2C]">
          每個核心，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#6E1A1A]">都有一個鎖死它的機制</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 3 Core-Mechanic Cards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">
        {mappings.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.core} className={`border ${m.color} rounded-3xl p-6 flex flex-col shadow-sm`}>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Icon className={`w-5 h-5 ${m.iconColor}`} />
                </div>
                <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${m.badge}`}>{m.core}</span>
              </div>
              <h3 className="text-lg font-bold text-[#2C2C2C] mb-2.5 leading-snug">{m.mech}</h3>
              <p className="text-[12.5px] text-[#574C45] leading-relaxed mb-3">{m.desc}</p>
              <p className="text-[11.5px] text-[#998A76] leading-relaxed mt-auto">{m.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Note */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Puzzle className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            三個機制互相鎖定：<span className="font-black text-[#FFD54F]">教別人既是合作的策略，也是理解最深的證據，更是品格被看見的時刻</span>
            ——這就是「用遊戲結構承載教育核心」的意思。
          </p>
        </div>
      </div>

    </div>
  );
}
