'use client';

import { Trophy, MonitorPlay, Blocks, ArrowDown } from 'lucide-react';

export default function IsuntvNcafSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-0 -top-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
        <span className="text-sm font-bold text-violet-600 tracking-widest">提案總覽</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-7">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          一場競賽、一座平台、<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">一套開源公共財</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex flex-col gap-3 flex-1">

        <div className="bg-white border-2 border-amber-300 rounded-2xl px-7 py-4 flex items-center gap-6 shadow-sm">
          <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Trophy className="w-7 h-7 text-amber-500" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[22px] font-black text-slate-800">擴散引擎｜AI 短片創作競賽</h3>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">與國藝會共同主辦</span>
            </div>
            <p className="text-[15px] text-slate-500">以競賽驅動全台學校、藝文團體與創作者導入平台——報名即場域，目標 300+ 場域擴散。</p>
          </div>
        </div>

        <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-slate-300" /></div>

        <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl px-7 py-4 flex items-center gap-6 shadow-lg text-white">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
            <MonitorPlay className="w-7 h-7 text-amber-300" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[22px] font-black">應用平台｜iSunTV — AI 影音製作暨社群分享平台</h3>
            </div>
            <p className="text-[15px] text-violet-100">腳本、分鏡、影音生成到發布分享一站完成；內建 <span className="font-bold text-amber-300">AI 藝評專區</span>，形成「創作→發表→評論→再創作」的文化閉環。</p>
          </div>
        </div>

        <div className="flex justify-center"><ArrowDown className="w-5 h-5 text-slate-300" /></div>

        <div className="bg-white border border-slate-300 rounded-2xl px-7 py-4 flex items-center gap-6 shadow-sm">
          <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Blocks className="w-7 h-7 text-slate-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-[22px] font-black text-slate-800">開源核心｜AI 影音創作中介平台＋藝文評論模型</h3>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">計畫結束後開源釋出</span>
            </div>
            <p className="text-[15px] text-slate-500">依徵案規定以開源授權釋出，成為整個藝文界與資服產業都能取用的公共基礎建設。</p>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-7">
        <p className="text-center text-lg text-slate-500">
          競賽帶來人流，平台留住創作，開源留下公共財——<span className="font-bold text-slate-700">三層互相供血，計畫結束後生態仍能自轉。</span>
        </p>
      </div>

    </div>
  );
}
