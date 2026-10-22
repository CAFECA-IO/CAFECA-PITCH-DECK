'use client';

import { GraduationCap, Users, Theater, Award, Clapperboard, Scale } from 'lucide-react';

export default function IsuntvNcafSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/3 -top-1/4 w-[700px] h-[700px] bg-amber-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        <span className="text-sm font-bold text-amber-600 tracking-widest">擴散引擎</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          AI 短片創作競賽——<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-violet-600">競賽即推廣，報名即導入</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex gap-6 flex-1">

        <div className="flex-[3] grid grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-violet-500" />
              <h3 className="text-[18px] font-black text-slate-800">三大組別</h3>
            </div>
            <p className="text-[14px] text-slate-500 leading-relaxed">學生組、一般創作組、藝文團體組——由雙方共同訂定章程與命題（在地文化、藝術轉譯）。</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Clapperboard className="w-6 h-6 text-amber-500" />
              <h3 className="text-[18px] font-black text-slate-800">徵件規格</h3>
            </div>
            <p className="text-[14px] text-slate-500 leading-relaxed">3–5 分鐘短片，須以 iSunTV AI 工具完成主要製程——確保每件參賽作品都是一次真實場域導入。</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Scale className="w-6 h-6 text-emerald-500" />
              <h3 className="text-[18px] font-black text-slate-800">評審機制</h3>
            </div>
            <p className="text-[14px] text-slate-500 leading-relaxed">國藝會藝評人網絡＋影視專業評審主導決選；AI 僅輔助初審合規檢核，價值判斷始終在人。</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6 text-rose-500" />
              <h3 className="text-[18px] font-black text-slate-800">獎項與展映</h3>
            </div>
            <p className="text-[14px] text-slate-500 leading-relaxed">計畫經費支應獎金與頒獎典禮；得獎作品於 iSunTV 專區展映，並附專業藝評導讀。</p>
          </div>
        </div>

        <div className="flex-[2] bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 flex flex-col shadow-lg text-white">
          <div className="flex items-center gap-3 mb-5">
            <Users className="w-6 h-6 text-amber-400" />
            <h3 className="text-[22px] font-black">競賽如何撐起 KPI</h3>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-amber-300 mb-1">報名單位＝場域</p>
              <p className="text-slate-300">每一個報名的學校科系、藝文團體、工作室，都計入徵案要求的場域擴散數。</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-amber-300 mb-1">巡迴工作坊＝導入輔導</p>
              <p className="text-slate-300">配合競賽於北中南東辦理 AI 創作工作坊，就是徵案的業者媒合與輔導作業。</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-amber-300 mb-1">頒獎與展映＝成果驗收</p>
              <p className="text-slate-300">競賽成果直接轉化為計畫結案的實證成效與宣導素材。</p>
            </div>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-7">
        <div className="flex items-center justify-center gap-3">
          <Theater className="w-5 h-5 text-violet-500" />
          <p className="text-lg text-slate-600">
            國藝會共同主辦的意義：<span className="font-bold text-slate-800">給這場競賽藝文界的公信力</span>，讓它不只是科技活動，而是文化事件。
          </p>
        </div>
      </div>

    </div>
  );
}
