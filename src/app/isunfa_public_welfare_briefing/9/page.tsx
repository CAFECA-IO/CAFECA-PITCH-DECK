'use client';

import { ClipboardList, GraduationCap, Rocket, LifeBuoy } from 'lucide-react';

export default function IsunfaPwbSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-sm font-bold text-orange-500 tracking-widest">你要做什麼</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-9">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          參加要花多少工夫？<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">四個步驟</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex-1 relative">
        <div className="absolute top-[46px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-orange-300 to-emerald-300 rounded-full"></div>
        <div className="grid grid-cols-4 gap-6 relative">
          {[
            { id: 'a', n: '1', icon: ClipboardList, t: '報名', time: '10 分鐘', d: '填一張報名表，交給公會或線上填寫。' },
            { id: 'b', n: '2', icon: GraduationCap, t: '參加教育訓練', time: '半天', d: '公會辦的實機工作坊，帶著筆電來就好。' },
            { id: 'c', n: '3', icon: Rocket, t: '上傳資料、產出護照', time: '1～2 天', d: '把現有的材質單、BOM、電費單上傳，系統自動產出。' },
            { id: 'd', n: '4', icon: LifeBuoy, t: '持續使用與輔導', time: '計畫期間', d: '有問題有專人協助；之後每批貨都能重複產出。' },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="flex flex-col items-center text-center">
                <div className="w-[92px] h-[92px] rounded-full bg-white border-4 border-orange-400 flex items-center justify-center shadow-md relative mb-5">
                  <span className="absolute -top-2 -right-1 bg-orange-500 text-white text-sm font-black rounded-full w-8 h-8 flex items-center justify-center shadow">{s.n}</span>
                  <Icon className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-[26px] font-black text-slate-800 mb-1.5">{s.t}</h3>
                <div className="inline-block text-[14px] font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-3">約 {s.time}</div>
                <p className="text-[15px] text-slate-500 leading-relaxed px-1">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="z-10 px-16 pt-2">
        <div className="grid grid-cols-3 gap-5">
          {[
            { id: 'r1', t: '不用停產', d: '全程不影響生產線作業' },
            { id: 'r2', t: '不用改流程', d: '沿用你現有的單據與表格' },
            { id: 'r3', t: '不用專職人力', d: '一位熟悉出貨資料的同仁即可' },
          ].map((r) => (
            <div key={r.id} className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-center">
              <div className="text-[20px] font-black text-slate-800 mb-1">{r.t}</div>
              <div className="text-[14px] text-slate-500">{r.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="z-10 px-16 py-7">
        <div className="bg-emerald-500 rounded-3xl px-9 py-6 flex items-center justify-between shadow-lg">
          <p className="text-[22px] text-white font-black">
            全程免費。不用買設備、不用裝軟體，有網路和瀏覽器就能用。
          </p>
          <div className="text-right flex-shrink-0 ml-8">
            <div className="text-[13px] text-white/80 font-bold tracking-wider">計畫補助名額</div>
            <div className="text-[34px] font-black text-white leading-none">300 家</div>
          </div>
        </div>
      </div>

    </div>
  );
}
