'use client';

import { Lock, EyeOff, FileSignature, Server, ShieldCheck } from 'lucide-react';

export default function IsunfaPwbSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260820 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></span>
        <span className="text-sm font-bold text-slate-600 tracking-widest">你一定會問的</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[46px] font-black leading-tight text-slate-800">
          「我的資料會不會<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600">外流給同業</span>？」
        </h2>
        <p className="text-[19px] text-slate-500 mt-3">這是最常被問到的問題，我們正面回答。</p>
      </div>

      <div className="z-10 px-16 grid grid-cols-2 gap-6 flex-1">
        {[
          { id: 's1', icon: FileSignature, t: '先簽授權書，你說了算', d: '任何資料進系統前，都要你簽署書面授權。你不簽，我們不碰。授權範圍限於本計畫，不做其他用途。' },
          { id: 's2', icon: EyeOff, t: '客戶名稱與價格一律遮蔽', d: '進入系統的資料會先去識別化——你的客戶是誰、賣多少錢，這些欄位一律遮掉，只留材質、成分這類技術特徵。' },
          { id: 's3', icon: Lock, t: '你的護照只有你看得到', d: '產出的 DPP 屬於你的工廠，要不要給客戶、給哪個客戶，由你決定。同業看不到你的資料。' },
          { id: 's4', icon: Server, t: '系統經第三方資安檢測', d: '平台由政府認可的第三方資安機構執行源碼掃描、弱點掃描與滲透測試，中高風險弱點修正完畢才上線。' },
        ].map((x) => {
          const Icon = x.icon;
          return (
            <div key={x.id} className="bg-white border-2 border-slate-200 rounded-3xl p-8 flex gap-5 shadow-sm">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-7 h-7 text-slate-600" />
              </div>
              <div>
                <h3 className="text-[24px] font-black text-slate-800 mb-2.5 leading-snug">{x.t}</h3>
                <p className="text-[16px] text-slate-500 leading-relaxed">{x.d}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="z-10 px-16 py-7">
        <div className="bg-white border-2 border-emerald-200 rounded-3xl px-9 py-5 flex items-center gap-5">
          <ShieldCheck className="w-8 h-8 text-emerald-600 flex-shrink-0" />
          <p className="text-[18px] text-slate-600 leading-relaxed">
            檢測數據的判讀標準由<span className="font-bold text-slate-800">金屬中心</span>把關，
            場域推動由<span className="font-bold text-slate-800">公會</span>統籌——不是單一廠商說了算。
          </p>
        </div>
      </div>

    </div>
  );
}
