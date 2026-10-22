'use client';

import { Cpu, Palette, Gift, CheckCircle2 } from 'lucide-react';

export default function IsuntvNcafSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-0 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">合作分工</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          分工清楚：<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">重的我們扛，光環一起戴</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-5 flex-1">

        <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-7 flex flex-col shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
              <Cpu className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-[22px] font-black">CAFECA 負責</h3>
          </div>
          <div className="space-y-2.5 text-[15px] text-slate-300 leading-relaxed">
            <p>· 擔任主提案者與簽約主體，承擔全部履約責任</p>
            <p>· 平台與開源核心的全部開發、營運、維護</p>
            <p>· 行政庶務：申請文件、進度提報、結案報告</p>
            <p>· 資安檢測、Model Card、SBOM 等合規交付</p>
            <p>· 競賽執行庶務（報名系統、獎金核發、活動辦理）</p>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl p-7 flex flex-col shadow-lg text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center">
              <Palette className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-[22px] font-black">國藝會負責</h3>
          </div>
          <div className="space-y-2.5 text-[15px] text-violet-100 leading-relaxed">
            <p>· 聯合提案單位掛名（財團法人資格）</p>
            <p>· AI 短片競賽共同主辦與命題方向</p>
            <p>· 藝評人網絡：評審、專欄、工作坊師資</p>
            <p>· 藝文團體與場域動員協力</p>
            <p>· 審查會議共同出席（約半天）</p>
          </div>
        </div>

        <div className="flex-1 bg-white border-2 border-amber-300 rounded-3xl p-7 flex flex-col shadow-sm relative">
          <div className="absolute -top-4 left-8 bg-amber-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">國藝會獲得</div>
          <div className="flex items-center gap-3 mb-4 mt-2">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-[22px] font-black text-slate-800">零出資，四項資產</h3>
          </div>
          <div className="space-y-2.5 text-[15px] text-slate-600 leading-relaxed">
            <p>· 一座 AI 影音創作與藝評平台的<span className="font-bold text-slate-800">共同催生者身分</span></p>
            <p>· AI 時代藝文政策的<span className="font-bold text-slate-800">話語權與示範案例</span></p>
            <p>· 觸及<span className="font-bold text-slate-800">年輕世代創作者</span>的新管道</p>
            <p>· 開源成果<span className="font-bold text-slate-800">永久免費公益使用</span></p>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-7">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-7 py-4 flex items-center gap-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
          <p className="text-[15px] text-slate-700 leading-relaxed">
            <span className="font-bold">明確承諾：</span>國藝會無需出資、無需開發、無智財移轉義務——徵案的著財權移轉與開源義務，主體均為承案廠商 CAFECA。
          </p>
        </div>
      </div>

    </div>
  );
}
