'use client';

import { Cpu, Factory, SquarePen, Shuffle, Bot, Layers } from 'lucide-react';

export default function CafecaTcSlide9() {
  const engines = [
    {
      icon: Factory,
      title: '任務量產',
      desc: '紅墨產線把課綱單元量產成費曼式任務初稿（敘事外皮＋難度星級＋多角度影音），教師審定上架——內容產能不再是瓶頸',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: SquarePen,
      title: '多元成果批改',
      desc: '影片、作品、口說、配方書——AI 依規準初評理解證據、教師紅筆覆核，多元評量第一次評得過來',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: Shuffle,
      title: '異質分組與難度調節',
      desc: '依學習數據自動配隊與配題，讓每個孩子都站在「努力搆得到」的挑戰線上',
      color: 'border-[#DDB4A9] bg-[#F4E4DE]',
      iconColor: 'text-[#7E2420]',
    },
    {
      icon: Bot,
      title: 'AI 小幫手（分級推進）',
      desc: 'V1 聚焦任務提示、出處解說與模板化反思，對話紀錄教師全程可見——進階能力隨治理成熟分級開放',
      color: 'border-[#E3B3A8] bg-[#F8E7E1]',
      iconColor: 'text-[#9E2B20]',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#FDF9EB] relative overflow-hidden shadow-2xl flex flex-col border border-[#E6DCC3] text-[#2C2C2C] font-sans">

      {/* Info: (20261001 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-[#F4E4DE] rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-[#F9EADF] rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-[#6E1A1A] animate-pulse"></span>
        <span className="text-xs font-mono text-[#8A2A22] uppercase tracking-widest">The Engine</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4E4DE] border border-[#DDB4A9] mb-4">
          <Cpu className="w-4 h-4 text-[#7E2420]" />
          <span className="text-sm font-semibold text-[#6E1A1A]">引擎：紅墨 AI 產線</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-[#2C2C2C]">
          這個世界跑得動，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E1A1A] to-[#B31010]">因為引擎已經造好了</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 4 Engine Capabilities */}
      <div className="z-10 px-16 grid grid-cols-2 gap-4 flex-1">
        {engines.map((e) => {
          const Icon = e.icon;
          return (
            <div key={e.title} className={`border ${e.color} rounded-2xl p-5 flex gap-4 shadow-sm`}>
              <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon className={`w-5 h-5 ${e.iconColor}`} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-1">{e.title}</h3>
                <p className="text-[12px] text-[#6F6259] leading-relaxed">{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Note */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Layers className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            紅墨的教師端是老師的筆、學生端是冒險世界——<span className="font-black text-[#FFD54F]">共用同一條產線、同一套審定流程、同一組紅線</span>：
            教師簽核定稿、學生個資留在校內、地端部署。
          </p>
        </div>
      </div>

    </div>
  );
}
