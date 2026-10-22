'use client';

import { HeartHandshake, Compass, School, MessagesSquare, Feather } from 'lucide-react';

export default function CafecaTcSlide11() {
  const asks = [
    {
      icon: Compass,
      no: '01',
      title: '共同設計機制',
      desc: '品格力徽章樹、任務型態、合作規則——「什麼值得被獎勵」必須由誠致的教育專業定義，我們只負責把它變成系統',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: School,
      no: '02',
      title: '一個年級的試點',
      desc: '一所 KIST 學校、一個年級、兩個科目城鎮，跑一個學期——規模小到可以隨時喊停',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: MessagesSquare,
      no: '03',
      title: '說真話的檢驗',
      desc: '內在動機量表前後測、合作行為觀察、教師工時監測——數據公開，由誠致判定這場改革及不及格',
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
        <span className="w-2 h-2 rounded-full bg-[#9E2B20] animate-pulse"></span>
        <span className="text-xs font-mono text-[#9E2B20] uppercase tracking-widest">The Ask</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8E7E1] border border-[#E3B3A8] mb-4">
          <HeartHandshake className="w-4 h-4 text-[#9E2B20]" />
          <span className="text-sm font-semibold text-[#8C1F16]">我們需要的不是場域房東</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-[#2C2C2C]">
          邀請誠致，成為這場改革的<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#C9940E]">教育哲學共同設計者</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 3 Asks */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">
        {asks.map((a) => {
          const Icon = a.icon;
          return (
            <div key={a.no} className={`border ${a.color} rounded-3xl p-7 flex flex-col shadow-sm`}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Icon className={`w-6 h-6 ${a.iconColor}`} />
                </div>
                <span className="text-3xl font-black text-[#EBE1C8]">{a.no}</span>
              </div>
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3 leading-snug">{a.title}</h3>
              <p className="text-[13px] text-[#6F6259] leading-relaxed">{a.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Lightweight Promise */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Feather className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            底線不變：<span className="font-black text-[#FFD54F]">誠致全程零出資、教學決定權在教師、學生個資留在校內、隨時可以喊停</span>
            ——試點的教材與任務資產，全數回饋 KIST 教材資料庫。
          </p>
        </div>
      </div>

    </div>
  );
}
