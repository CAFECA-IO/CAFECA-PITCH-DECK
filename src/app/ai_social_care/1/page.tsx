'use client';

import { HeartHandshake, Building2, Server, Calendar, Target } from 'lucide-react';
import { AscCareNetwork } from '@/components/slide/asc_art';

export default function AiSocialCareSlide1() {
  const facts = [
    { id: 'f1', icon: Server, label: '提案類別', value: '地端部署型' },
    { id: 'f2', icon: Target, label: '場域擴散', value: '100+ 個場域' },
    { id: 'f3', icon: Calendar, label: '計畫期程', value: '8 個月' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[720px] h-[720px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[160px]"></div>
        <div className="absolute -right-32 -bottom-40 w-[640px] h-[640px] bg-rose-100 rounded-full mix-blend-multiply filter blur-[160px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">AI 生態系實證應用徵案 · 提案簡報</span>
      </div>

      {/* Info: (20261005 - Luphia) 裝飾插圖：照護網絡 */}
      <div className="absolute right-20 top-40 z-0 w-[300px] h-[300px] opacity-60 pointer-events-none">
        <AscCareNetwork className="w-full h-full" />
      </div>

      <div className="absolute top-10 right-16 z-20 text-right">
        <div className="text-[11px] font-mono text-slate-400 tracking-widest">115.10.06　評選會</div>
      </div>

      {/* Info: (20261005 - Luphia) Hero */}
      <div className="z-10 px-16 pt-32 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-lg">
            <HeartHandshake className="w-6 h-6 text-white" />
          </div>
          <div className="text-[13px] font-black text-orange-500 tracking-[0.2em] uppercase">AI SocialCare</div>
        </div>

        <h1 className="text-[76px] font-black leading-[1.05] text-slate-900 tracking-tight">
          愛<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">智</span>扶
        </h1>
        <p className="text-[26px] font-bold text-slate-700 mt-3 leading-snug">
          社福機構智能行政與志工輔助系統實證推動計畫
        </p>
        <p className="text-[15px] text-slate-500 mt-4 max-w-[760px] leading-relaxed">
          以會計 × 社福雙專業領域模型「費思（FAITH）」為核心，讓社工把時間還給服務對象。
        </p>
      </div>

      {/* Info: (20261005 - Luphia) Proposers */}
      <div className="z-10 px-16 grid grid-cols-2 gap-4 mb-5">
        <div className="bg-white/80 backdrop-blur border border-orange-200 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Building2 className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <div className="text-[10px] font-black text-orange-600 tracking-widest uppercase">主提案單位 · 簽約主體</div>
            <div className="text-[15px] font-bold text-slate-800">卡菲卡金融科技股份有限公司（iSunFA）</div>
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur border border-rose-200 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <HeartHandshake className="w-5 h-5 text-rose-500" />
          </div>
          <div>
            <div className="text-[10px] font-black text-rose-500 tracking-widest uppercase">聯合提案單位 · MOU 已簽訂</div>
            <div className="text-[15px] font-bold text-slate-800">財團法人中華民國唐氏症基金會</div>
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bottom Facts */}
      <div className="z-10 px-16 pb-10">
        <div className="bg-slate-900 rounded-2xl px-8 py-4 flex items-center gap-10 shadow-lg">
          {facts.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.id} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-[9px] text-slate-400 tracking-widest uppercase">{f.label}</div>
                  <div className="text-[15px] font-black text-white leading-tight">{f.value}</div>
                </div>
              </div>
            );
          })}
          <div className="ml-auto text-right">
            <div className="text-[9px] text-slate-400 tracking-widest uppercase">計畫預算</div>
            <div className="text-[15px] font-black text-orange-400 leading-tight">新臺幣 3,000 萬元</div>
          </div>
        </div>
      </div>

    </div>
  );
}
