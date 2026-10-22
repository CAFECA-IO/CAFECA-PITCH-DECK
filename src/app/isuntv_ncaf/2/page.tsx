'use client';

import { Landmark, Cpu, Palette, TimerReset } from 'lucide-react';

export default function IsuntvNcafSlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">機會窗口</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          一個正在倒數的窗口：<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">制度設計就是要「科技×藝文」聯手</span>
        </h2>
        <p className="text-lg text-slate-500 mt-3 leading-relaxed">
          徵案規定：資訊服務業者<span className="font-bold text-slate-700">必須</span>與非營利社團法人或財團法人聯合提案，缺一不可。
          科技公司拿不到，藝文機構也拿不到——只有一起，才能申請。
        </p>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-5 flex-1">

        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-7 flex flex-col shadow-sm">
          <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <Landmark className="w-7 h-7 text-slate-600" />
          </div>
          <h3 className="text-[22px] font-black text-slate-800 mb-2">政府：出資源</h3>
          <div className="space-y-2 text-[15px] text-slate-600 leading-relaxed">
            <p>· 每案經費上限 <span className="font-bold text-slate-800">3,000 萬元</span></p>
            <p>· 提供<span className="font-bold text-slate-800">算力資源</span>供模型訓練</p>
            <p>· 計畫期程約 8 個月</p>
            <p>· 主辦：數位發展部數位產業署</p>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-violet-600 to-violet-800 rounded-3xl p-7 flex flex-col shadow-lg text-white">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
            <Cpu className="w-7 h-7 text-amber-300" />
          </div>
          <h3 className="text-[22px] font-black mb-2">CAFECA：出技術</h3>
          <div className="space-y-2 text-[15px] text-violet-100 leading-relaxed">
            <p>· 擔任主提案者（資服業者資格）</p>
            <p>· 開發 iSunTV 平台與開源核心</p>
            <p>· 承擔全部行政、資安、結案義務</p>
            <p>· 負責計畫執行與後續營運</p>
          </div>
        </div>

        <div className="flex-1 bg-white border-2 border-amber-300 rounded-3xl p-7 flex flex-col shadow-sm relative">
          <div className="absolute -top-4 left-8 bg-amber-500 text-white text-sm font-black px-4 py-1.5 rounded-full shadow">邀請國藝會</div>
          <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 mt-2">
            <Palette className="w-7 h-7 text-amber-600" />
          </div>
          <h3 className="text-[22px] font-black text-slate-800 mb-2">國藝會：出網絡</h3>
          <div className="space-y-2 text-[15px] text-slate-600 leading-relaxed">
            <p>· 聯合提案單位（財團法人資格）</p>
            <p>· AI 短片競賽共同主辦</p>
            <p>· 藝評人網絡與藝文團體動員</p>
            <p>· <span className="font-bold text-emerald-600">無需出資、無需開發</span></p>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-8">
        <div className="bg-slate-800 rounded-2xl px-7 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <TimerReset className="w-6 h-6 text-amber-400" />
            <span className="text-white font-bold text-lg">收件截止：115 年 9 月 18 日（五）17:00</span>
          </div>
          <span className="text-slate-300 text-sm">送件必附雙方合作證明文件（合作意向書）——建議 9/10 前完成簽署</span>
        </div>
      </div>

    </div>
  );
}
