'use client';

import Image from 'next/image';
import { Building2, HeartHandshake, Server } from 'lucide-react';

export default function IsunfaPwp2Slide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[140px]"></div>
        <div className="absolute right-0 -bottom-40 w-[700px] h-[700px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/4 w-[420px] h-[420px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[130px]"></div>
      </div>

      {/* Info: (20260904 - Luphia) Top Bar */}
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

      {/* Info: (20260904 - Luphia) Main Title Area */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-md bg-slate-800 text-white text-xs font-bold tracking-widest">提案類別：地端部署型（雲地混合）</span>
          <span className="px-3 py-1 rounded-md bg-rose-600 text-white text-xs font-bold tracking-widest">推動領域：公益</span>
        </div>

        <h1 className="text-[56px] font-black tracking-tight leading-[1.15] text-slate-800">
          愛智扶<span className="text-3xl font-bold text-slate-400 tracking-normal ml-3 align-middle">AI SocialCare</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-400 to-blue-500">
            智能行政與志工輔助系統
          </span>
          <span className="text-slate-800"> 實證推動計畫</span>
        </h1>

        <p className="text-xl text-slate-500 font-medium leading-relaxed border-l-4 border-orange-500 pl-6 mt-8">
          協同財團法人中華民國唐氏症基金會，以結合會計與社福雙專業的 <span className="font-bold text-slate-700">FAITH 領域型模型</span>，<br />
          讓 AI 接手文書與帳務，把 <span className="font-bold text-slate-700">100 個社工場域</span> 的時間還給每一位需要陪伴的人。
        </p>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Info Strip */}
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
          <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">聯合提案單位</div>
            <div className="text-[13px] font-bold text-slate-800">財團法人中華民國唐氏症基金會</div>
            <div className="text-[11px] text-slate-500">全台服務據點 · 逾 25 年身心障礙服務經驗</div>
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Server className="w-5 h-5 text-blue-500" />
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
