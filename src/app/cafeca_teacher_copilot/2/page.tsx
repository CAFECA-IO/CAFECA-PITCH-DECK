'use client';

import { Landmark, MessagesSquare, Send, Hammer, GitFork, ArrowRight, Infinity as InfinityIcon, Monitor } from 'lucide-react';

export default function CafecaTcSlide2() {
  const steps = [
    {
      icon: MessagesSquare,
      no: '1',
      title: '訪談真實需求',
      desc: '資服業者與非營利組織走進真實場域，訪談第一線工作者——定義的是社會的真痛點，不是辦公室裡想像的需求',
      color: 'border-[#DDB4A9] bg-[#F4E4DE]',
      iconColor: 'text-[#7E2420]',
    },
    {
      icon: Send,
      no: '2',
      title: '向政府提案',
      desc: '以訪談結果向數位產業署提出實證計畫，由政府經費支應模型訓練、系統開發與場域實證',
      color: 'border-[#E8B5A4] bg-[#F9EADF]',
      iconColor: 'text-[#C01212]',
    },
    {
      icon: Hammer,
      no: '3',
      title: '建設數位基盤',
      desc: '打造領域型 AI 模型、知識庫與工作流系統——像公路與自來水一樣的資訊產業基礎建設',
      color: 'border-[#EBD28A] bg-[#FBF2D7]',
      iconColor: 'text-[#A87B0A]',
    },
    {
      icon: GitFork,
      no: '4',
      title: '成果開源釋出',
      desc: '模型權重、程式與文件依規範全數開放，任何人都可依授權條件取得、使用與再利用',
      color: 'border-[#E3B3A8] bg-[#F8E7E1]',
      iconColor: 'text-[#9E2B20]',
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
        <span className="text-xs font-mono text-[#C01212] uppercase tracking-widest">Opening · 百工百業 AI</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EADF] border border-[#E8B5A4] mb-4">
          <Landmark className="w-4 h-4 text-[#C01212]" />
          <span className="text-sm font-semibold text-[#A31111]">什麼是百工百業 AI</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-[#2C2C2C]">
          政府出資建基盤，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#C9940E]">開源釋出、全民免費用</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) 4-Step Program Model */}
      <div className="z-10 px-16 flex gap-4 items-stretch">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.no} className="flex items-center gap-4 flex-1">
              <div className={`border ${step.color} rounded-2xl p-5 flex flex-col flex-1 h-full shadow-sm`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className={`w-5 h-5 ${step.iconColor}`} />
                  </div>
                  <span className="text-2xl font-black text-[#EBE1C8]">{step.no}</span>
                </div>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-1.5">{step.title}</h3>
                <p className="text-[11.5px] text-[#6F6259] leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <ArrowRight className="w-5 h-5 text-[#C9BCA4] flex-shrink-0" />}
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Citizen Outcome Highlight */}
      <div className="z-10 px-16 pt-5 flex-1 flex items-stretch">
        <div className="w-full bg-white border-2 border-[#EBD28A] rounded-3xl shadow-lg px-8 py-5 grid grid-cols-[auto_1fr_auto] gap-6 items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 px-3 py-1.5 bg-[#D5A316] text-white text-[10px] font-black tracking-widest rounded-bl-xl">對民眾的意義</div>
          <div className="w-14 h-14 rounded-2xl bg-[#FBF2D7] flex items-center justify-center flex-shrink-0">
            <Monitor className="w-7 h-7 text-[#A87B0A]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2C2C2C] mb-1">建設完成後，學校與民眾只需購置所需設備，即可永久免費使用</h3>
            <p className="text-[12.5px] text-[#6F6259] leading-relaxed">
              沒有授權費、沒有訂閱費——就像用電腦上公路局網站不用付過路費。開源成果同時開放給全國資訊服務業者
              發展加值應用，形成持續成長的生態系，而基礎能力永遠免費。
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#FBF2D7] border border-[#F3E3AC] flex-shrink-0">
            <InfinityIcon className="w-5 h-5 text-[#A87B0A]" />
            <div className="text-[12px] font-black text-[#8A6508] leading-tight">永久免費<br />使用</div>
          </div>
        </div>
      </div>

      {/* Info: (20261001 - Luphia) Bottom Positioning */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Landmark className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            今天要分享的「紅墨」，正是這個模式在<span className="font-black text-[#FFD54F]">教育領域的嘗試</span>——
            接下來幾分鐘，說明它想改變什麼、怎麼改變，以及我們想邀請誠致一起做什麼。
          </p>
        </div>
      </div>

    </div>
  );
}
