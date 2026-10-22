'use client';

import { Quote, Lightbulb, Users, HeartHandshake, ArrowRight, X, Check } from 'lucide-react';

export default function CafecaTcSlide3() {
  const cores = [
    {
      icon: Lightbulb,
      title: '真實的理解知識',
      now: '制度獎勵的卻是：答對與速度',
      cost: '會考試不等於懂——補習式學習取代了思考',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: Users,
      title: '合作',
      now: '制度獎勵的卻是：個人排名',
      cost: '幫助同學，在制度上是「吃虧」的行為',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: HeartHandshake,
      title: '社交與品格',
      now: '制度幾乎不評量它',
      cost: '品格教育淪為標語，缺乏日常的著力點',
      color: 'border-[#DDB4A9] bg-[#F4E4DE]',
      iconColor: 'text-[#7E2420]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-[#F9EADF] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-[#FBF2D7] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#D61313] animate-pulse"></span>
        <span className="text-xs font-mono text-[#C01212] uppercase tracking-widest">The Misalignment</span>
      </div>

      {/* Info: (20261001 - Luphia) Core Quote */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#2C2C2C] flex items-center justify-center flex-shrink-0 shadow-lg">
            <Quote className="w-7 h-7 text-[#FFD54F]" />
          </div>
          <h2 className="text-[38px] font-black leading-snug text-[#2C2C2C]">
            教育的核心是三件事——<br />
            但現行制度，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#C9940E]">獎勵的都不是它們</span>
          </h2>
        </div>
      </div>

      {/* Info: (20261001 - Luphia) Three Cores vs System Rewards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">
        {cores.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className={`border ${c.color} rounded-3xl p-7 flex flex-col shadow-sm`}>
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                <Icon className={`w-6 h-6 ${c.iconColor}`} />
              </div>
              <div className="flex items-center gap-1.5 mb-1">
                <Check className={`w-4 h-4 ${c.iconColor}`} />
                <span className="text-[10px] font-black text-[#998A76] tracking-widest uppercase">教育的核心</span>
              </div>
              <h3 className="text-2xl font-black text-[#2C2C2C] mb-4">{c.title}</h3>
              <div className="flex items-center gap-1.5 mb-1">
                <X className="w-4 h-4 text-[#C24D3A]" />
                <span className="text-[10px] font-black text-[#C24D3A] tracking-widest uppercase">現實的錯位</span>
              </div>
              <p className="text-[13px] font-bold text-[#574C45] mb-2">{c.now}</p>
              <p className="text-[12px] text-[#6F6259] leading-relaxed mt-auto">{c.cost}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Transition */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <ArrowRight className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            考試最殘忍的特性是「一次定生死」；而人在遊戲裡願意反覆挑戰失敗，是因為「死了可以重來」——
            <span className="font-black text-[#FFD54F]">這場改革，就是把後者帶進教育</span>。
          </p>
        </div>
      </div>

    </div>
  );
}
