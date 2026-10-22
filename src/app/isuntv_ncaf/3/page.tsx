'use client';

import { AlertTriangle, MessageSquareOff, Wand2, Target } from 'lucide-react';

export default function IsuntvNcafSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 top-0 w-[600px] h-[600px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute right-0 -bottom-1/4 w-[700px] h-[700px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
        <span className="text-sm font-bold text-rose-600 tracking-widest">為什麼是現在</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          AI 正在改寫創作規則——<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600">藝文界不能缺席</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex gap-6 flex-1">

        <div className="flex-[3] flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Wand2 className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h3 className="text-[19px] font-black text-slate-800 mb-1">創作門檻崩落，話語權卻不在藝文界</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                生成式 AI 讓人人都能產出影音，但工具、規則與美學標準，正由國際科技平台單方面定義。
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="text-[19px] font-black text-slate-800 mb-1">創作者對 AI 焦慮多於掌握</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                著作權歸屬、風格被模仿、生計被取代——缺乏一個「規則透明、對創作者友善」的實驗場域。
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
            <div className="w-11 h-11 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MessageSquareOff className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <h3 className="text-[19px] font-black text-slate-800 mb-1">藝術評論量能萎縮，AI 作品更無人評</h3>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                媒體藝文版面縮減、專業藝評斷層；爆量的 AI 生成作品，更需要評論來建立價值判準。
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[2] bg-gradient-to-br from-violet-700 to-slate-800 rounded-3xl p-8 flex flex-col shadow-lg text-white">
          <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-5">
            <Target className="w-6 h-6 text-amber-300" />
          </div>
          <h3 className="text-[24px] font-black leading-snug mb-4">這三題，正好都是<br />國藝會的使命範圍</h3>
          <div className="space-y-4 text-[15px] leading-relaxed">
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="font-bold text-amber-300">扶植創作</p>
              <p className="text-violet-100">以競賽與免費工具，讓創作者站上 AI 浪頭而非被浪打翻</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="font-bold text-amber-300">深耕藝評</p>
              <p className="text-violet-100">延續藝評台的評論傳統，為 AI 作品建立台灣自己的評論現場</p>
            </div>
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="font-bold text-amber-300">文化平權</p>
              <p className="text-violet-100">雲端免費工具讓非都會區的學校與團體同步取得創作能力</p>
            </div>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-7">
        <p className="text-center text-lg font-bold text-slate-700">
          與其讓藝文界被動接受 AI，不如由國藝會出面，<span className="text-violet-600">主導定義 AI 時代的創作與評論標準</span>。
        </p>
      </div>

    </div>
  );
}
