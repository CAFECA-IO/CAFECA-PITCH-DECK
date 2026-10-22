'use client';

import { Feather, Sparkles, Repeat2, School, HeartHandshake } from 'lucide-react';

export default function IsuntvNcafSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">AI 藝評專區</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          把「藝評台」的精神，<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-500">帶進 AI 影音的新現場</span>
        </h2>
        <p className="text-lg text-slate-500 mt-3">不是取代國藝會的藝評平台，而是把評論帶到爆量 AI 作品發生的第一線。</p>
      </div>

      <div className="z-10 px-16 grid grid-cols-2 gap-4 flex-1">

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center">
              <Feather className="w-5 h-5 text-violet-500" />
            </div>
            <h3 className="text-[20px] font-black text-slate-800">專業評論投稿與策展</h3>
          </div>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            延續國藝會經營藝術評論的傳統：邀請制專欄、公開投稿、專題策展，讓每部競賽作品都有評論位。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-[20px] font-black text-slate-800">AI 評論助手（人主筆、AI 輔助）</h3>
          </div>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            藝文評論模型協助草稿架構、背景考據與多語轉譯；AI 參與程度全程標註，署名與判斷永遠屬於評論人。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Repeat2 className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-[20px] font-black text-slate-800">作品 × 評論雙向導流</h3>
          </div>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            看作品的人讀得到評論，讀評論的人找得到作品——評論不再孤島，成為社群裡有流量的內容。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center">
              <School className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="text-[20px] font-black text-slate-800">藝評人才培育</h3>
          </div>
          <p className="text-[15px] text-slate-500 leading-relaxed">
            與國藝會共辦藝評工作坊，結合競賽作品實戰練筆，為斷層中的藝評生態補進新世代寫手。
          </p>
        </div>

      </div>

      <div className="z-10 px-16 py-7">
        <div className="bg-violet-50 border border-violet-200 rounded-2xl px-7 py-4 flex items-center gap-4">
          <HeartHandshake className="w-6 h-6 text-violet-600 flex-shrink-0" />
          <p className="text-[15px] text-slate-700 leading-relaxed">
            <span className="font-bold">開源回饋：</span>藝文評論模型開源釋出後，國藝會既有的評論平台與任何藝文機構，都能免費取用這套技術——這是計畫留給整個藝評生態的資產。
          </p>
        </div>
      </div>

    </div>
  );
}
