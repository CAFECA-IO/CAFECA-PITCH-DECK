'use client';

import Image from 'next/image';
import { Cloud, Building2, Recycle } from 'lucide-react';

export default function IsunfaPwpSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/4 w-[420px] h-[420px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[130px]"></div>
      </div>

      {/* Info: (20260819 - Luphia) Top Bar */}
      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <Image
          src="/isunfa_logo_color.svg"
          alt="iSunFA Logo"
          width={180}
          height={46}
          className="object-contain"
        />
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs font-bold text-orange-600 tracking-wider">數位發展部數位產業署 · AI 生態系實證應用徵案</span>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Main Title Area */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-md bg-slate-800 text-white text-xs font-bold tracking-widest">提案類別：雲端服務型</span>
          <span className="px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold tracking-widest">推動領域：公益 / 服務業</span>
        </div>

        <h1 className="text-[56px] font-black tracking-tight leading-[1.15] text-slate-800">
          AI 賦能金屬製造業<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-emerald-500">
            數位產品護照與零廢循環生態系
          </span>
          <span className="text-slate-800"> 實證推動計畫</span>
        </h1>

        <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6 mt-8">
          結合金屬中心與螺絲公會輔導網絡，協同 <span className="font-bold text-slate-700">300+ 家中小型金屬製造工廠</span> 建立 AI 數位產品護照（DPP），<br />
          串起「A 廠廢料 → B 廠再生原料」的零廢製造循環經濟生態系。
        </p>
      </div>

      {/* Info: (20260819 - Luphia) Bottom Info Strip */}
      <div className="z-10 grid grid-cols-3 gap-4 px-16 pb-9 items-stretch">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">主提案單位 · 簽約主體</div>
            <div className="text-[13px] font-bold text-slate-800">卡菲卡金融科技（股）· iSunFA</div>
            <div className="text-[11px] text-slate-500">資訊服務業者（J62）</div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <Recycle className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">聯合提案單位（2 家）</div>
            <div className="flex items-center gap-1.5 text-[13px] font-bold text-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0"></span>
              財團法人金屬工業研究發展中心
            </div>
            <div className="flex items-center gap-1.5 text-[13px] font-bold text-slate-800 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
              台灣螺絲工業同業公會
            </div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Cloud className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">申請經費 · 計畫期程</div>
            <div className="text-[13px] font-bold text-slate-800">新臺幣 3,000 萬元</div>
            <div className="text-[11px] text-slate-500">自核定公告日起 8 個月</div>
          </div>
        </div>
      </div>

    </div>
  );
}
