'use client';

import { Bot, PenLine, Compass, Link2, TimerReset, HeartHandshake, Check } from 'lucide-react';

export default function CafecaTcSlide8() {
  const teacherHelps = [
    '備課初稿：講義、學習單、差異化版本隔夜備好',
    '文書起草：評語、計畫、報告逐份確認即完成',
    '知識庫問答：共備經驗隨問隨答、回答附出處',
    '觀議課摘要：成長紀錄僅本人與教練可見',
  ];
  const studentHelps = [
    '任務提示與出處解說：卡關時有人可問、問了不丟臉',
    '反思引導：模板化提問帶著學生回顧策略',
    '複習提醒：依遺忘曲線排程，該回補的自動出現',
    '對話紀錄教師全程可見，進階能力隨治理成熟分級開放',
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
        <span className="text-xs font-mono text-[#C01212] uppercase tracking-widest">AI Companions</span>
      </div>

      {/* Info: (20261001 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F9EADF] border border-[#E8B5A4] mb-4">
          <Bot className="w-4 h-4 text-[#C01212]" />
          <span className="text-sm font-semibold text-[#A31111]">每位教師與學生，都有一個 AI 小幫手</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-[#2C2C2C]">
          老師有副手、學生有學伴，<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D61313] to-[#C9940E]">小幫手之間成為新的橋樑</span>
        </h2>
      </div>

      {/* Info: (20261001 - Luphia) Two Companion Columns */}
      <div className="z-10 px-16 grid grid-cols-2 gap-5 flex-1">
        <div className="bg-white border-t-4 border-[#D61313] border-x border-b border-[#E6DCC3] rounded-3xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-[#F9EADF] rounded-2xl flex items-center justify-center">
              <PenLine className="w-5 h-5 text-[#C01212]" />
            </div>
            <div>
              <div className="text-[10px] font-black text-[#C01212] tracking-widest uppercase">教師的小幫手</div>
              <h3 className="text-lg font-bold text-[#2C2C2C]">永遠交草稿的副手</h3>
            </div>
          </div>
          <ul className="space-y-2 flex-1">
            {teacherHelps.map((t) => (
              <li key={t} className="flex gap-2 items-start text-[12.5px] text-[#574C45]">
                <Check className="w-4 h-4 text-[#C01212] flex-shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-[#F9EADF] rounded-xl px-4 py-2.5 border border-[#F2CDBE]">
            <div className="text-[11px] text-[#A31111] font-bold flex items-center gap-1.5">
              <TimerReset className="w-3.5 h-3.5" />
              效果：備課文書時數減半，省下的時間回到課堂與陪伴
            </div>
          </div>
        </div>

        <div className="bg-white border-t-4 border-[#D5A316] border-x border-b border-[#E6DCC3] rounded-3xl shadow-sm p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 bg-[#FBF2D7] rounded-2xl flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#A87B0A]" />
            </div>
            <div>
              <div className="text-[10px] font-black text-[#A87B0A] tracking-widest uppercase">學生的小幫手</div>
              <h3 className="text-lg font-bold text-[#2C2C2C]">冒險路上的學伴</h3>
            </div>
          </div>
          <ul className="space-y-2 flex-1">
            {studentHelps.map((t) => (
              <li key={t} className="flex gap-2 items-start text-[12.5px] text-[#574C45]">
                <Check className="w-4 h-4 text-[#A87B0A] flex-shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-3 bg-[#FBF2D7] rounded-xl px-4 py-2.5 border border-[#F3E3AC]">
            <div className="text-[11px] text-[#8A6508] font-bold flex items-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5" />
              效果：個別化支持全天候都在——每個孩子的卡關即時被接住
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20261001 - Luphia) Bridge Strip */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#1D1514] to-[#443029] rounded-2xl px-8 py-4 shadow-lg">
          <Link2 className="w-5 h-5 text-[#FFD54F] flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            小幫手之間的橋樑：<span className="font-black text-[#FFD54F]">全班學伴的學習狀態自動彙整到老師的副手</span>——
            誰卡在哪一關、哪題全班都錯，老師一眼看見；跨語言的親師溝通，也由小幫手居中翻譯傳達。
          </p>
        </div>
      </div>

    </div>
  );
}
