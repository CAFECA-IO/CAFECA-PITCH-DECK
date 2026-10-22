'use client';

import { AdventureParty } from '@/components/slide/redink_town_art';
import { Film, ScrollText, Users, FlaskConical, Upload, Medal, BookMarked, Clock } from 'lucide-react';

export default function CafecaTcSlide7() {
  const steps = [
    {
      icon: ScrollText,
      day: '週一',
      actor: 'AI＋教師',
      actorColor: 'bg-[#EDD6D0] text-[#6E1A1A]',
      title: '委託任務發布',
      desc: '數學城鎮貼出告示：《替全班調一桶 1:8 蜂蜜水》——AI 依課綱生成任務，教師審定後上架',
    },
    {
      icon: Users,
      day: '週二',
      actor: '系統分組',
      actorColor: 'bg-[#F8E9BE] text-[#8A6508]',
      title: '組隊與拼圖分工',
      desc: '異質分組成隊：有人研究比例換算、有人管容器容積、有人寫配方書——缺一塊就調不出來',
    },
    {
      icon: FlaskConical,
      day: '週三',
      actor: '團隊',
      actorColor: 'bg-[#F6D9CB] text-[#A31111]',
      title: '實作與互教',
      desc: '實際動手調配、彼此教會自己負責的那一塊——教別人，是通關的必要條件',
    },
    {
      icon: Upload,
      day: '週四',
      actor: '多元成果',
      actorColor: 'bg-[#F2D4CE] text-[#8C1F16]',
      title: '提交成果',
      desc: '配方書、過程影片、口頭解說任選組合提交——AI 初評理解證據，教師紅筆覆核',
    },
    {
      icon: Medal,
      day: '週五',
      actor: '人發徽章',
      actorColor: 'bg-[#EDD6D0] text-[#6E1A1A]',
      title: '積分與徽章',
      desc: '團隊積分含最弱成員進步幅度；隊友互相提名「堅毅」「社交智慧」徽章，教師頒發',
    },
    {
      icon: BookMarked,
      day: '之後',
      actor: '自動累積',
      actorColor: 'bg-[#E6DCC3] text-[#574C45]',
      title: '任務日誌入檔',
      desc: '整段歷程自動整理進任務日誌——這就是學習歷程檔案，評量成為證據鏈',
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
        <span className="text-xs font-mono text-[#C01212] uppercase tracking-widest">Scenario</span>
      </div>

      <AdventureParty className="absolute top-16 right-16 w-60 z-10 opacity-90" />

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EADF] border border-[#E8B5A4] mb-4">
          <Film className="w-4 h-4 text-[#C01212]" />
          <span className="text-sm font-semibold text-[#A31111]">應用情境</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-[#2C2C2C]">
          一個委託任務的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#C9940E]">一週旅程</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) Timeline Grid */}
      <div className="z-10 px-16 grid grid-cols-3 gap-x-5 gap-y-5 flex-1">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.day + step.title} className="bg-white border border-[#E6DCC3] rounded-2xl shadow-sm p-5 flex flex-col relative overflow-hidden">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#F8F2E1] border border-[#F1E9D3] rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#574C45]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#C01212] tracking-widest">{step.day}</span>
                    <h3 className="text-[15px] font-bold text-[#2C2C2C] leading-tight">{step.title}</h3>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${step.actorColor}`}>{step.actor}</span>
              </div>
              <p className="text-[12px] text-[#6F6259] leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20261001 - Luphia) Bottom Comparison */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-6 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Clock className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium flex-1">
            同一個單元的傳統版本：一張比例計算考卷、一個分數；紅墨版本：
            <span className="font-black text-[#FFD54F]">一桶真的蜂蜜水、一份配方書、一次互教、兩枚徽章、一段進了學習歷程的證據</span>。
          </p>
        </div>
      </div>

    </div>
  );
}
