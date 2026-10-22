'use client';

import { TrendingUp, Server, CloudCog, Repeat, HeartHandshake, Landmark } from 'lucide-react';
import { AscDualTrack } from '@/components/slide/asc_art';

export default function AiSocialCareSlide7() {
  const impacts = [
    { id: 'i1', v: '每週 10 小時', l: '每位社工增加之直接服務時間', s: '行政文書工時減少 50%' },
    { id: 'i2', v: '10,000 人次', l: '間接受惠服務對象（以上）', s: '以每場域服務量能推估' },
    { id: 'i3', v: '12 億元', l: '全臺社福場域潛在導入產值', s: '保守以 5,000 場域計，年訂閱另約 5,040 萬' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">06 · 營運規劃與預期效益</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-orange-500 flex-shrink-0" />
          雙軌營運：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">補助結束後，服務不會跟著結束</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Dual Track */}
      <div className="z-10 px-16 grid grid-cols-2 gap-5 mb-5">
        <div className="bg-white border-2 border-orange-300 rounded-3xl px-6 py-5 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center">
              <Server className="w-4.5 h-4.5 text-orange-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-orange-500 tracking-widest uppercase">軌道一 · 一次性</div>
              <div className="text-[17px] font-black text-slate-800 leading-tight">地端買斷</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-[26px] font-black text-orange-500 leading-none">239,800</div>
              <div className="text-[10px] text-slate-400">元／場域</div>
            </div>
          </div>
          <p className="text-[11.5px] text-slate-600 leading-relaxed">
            設備 199,900 元（ASUS Ascent GX10 等同級機種）＋ 導入服務 39,900 元，
            <span className="font-bold text-slate-800">含永久使用授權</span>、後續無經常性支出。
            GX10 之 128GB 統一記憶體<span className="font-bold text-slate-800">足以承載 30B 級模型推理</span>，地端可行性已驗證。
          </p>
          <div className="mt-2.5 pt-2.5 border-t border-orange-100 text-[11px] text-slate-600 leading-snug">
            相較自聘一位行政人力之年成本約 45～60 萬元，
            <span className="font-black text-orange-600">約 5～6 個月即可回收</span>——這是市場能快速滲透的根本原因。
          </div>
        </div>

        <div className="bg-white border-2 border-emerald-300 rounded-3xl px-6 py-5 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
              <CloudCog className="w-4.5 h-4.5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">軌道二 · 經常性</div>
              <div className="text-[17px] font-black text-slate-800 leading-tight">雲端訂閱</div>
            </div>
            <div className="ml-auto text-right">
              <div className="text-[26px] font-black text-emerald-600 leading-none">840</div>
              <div className="text-[10px] text-slate-400">元／月·場域</div>
            </div>
          </div>
          <p className="text-[11.5px] text-slate-600 leading-relaxed">
            年費 10,080 元，<span className="font-bold text-slate-800">永遠保持最新版本</span>，適合規模較小、無力購置設備之地方型協會，
            降低進入門檻、擴大擴散基數。
          </p>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Sustain + Impact */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1 items-start">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Repeat className="w-4 h-4 text-slate-600" />
            <span className="text-[13px] font-black text-slate-800">永續運作機制</span>
            <AscDualTrack className="w-[86px] h-[32px] ml-auto" />
          </div>
          <p className="text-[11.5px] text-slate-500 leading-relaxed">
            計畫導入之 100 個場域<span className="font-bold text-slate-700">永久免費使用</span>本計畫版本；
            計畫期間客服與遠端技術支援、計畫結束後 3 年配合成效追蹤；
            開源釋出後任何團隊均可自行維運，不受單一廠商存續影響。
          </p>
        </div>
        <div className="col-span-2 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2.5">
            <Landmark className="w-4 h-4 text-slate-600" />
            <span className="text-[13px] font-black text-slate-800">產業效益與社會影響</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {impacts.map((im) => (
              <div key={im.id} className="border-l-2 border-orange-200 pl-3">
                <div className="text-[19px] font-black text-slate-800 leading-none">{im.v}</div>
                <div className="text-[11px] text-slate-600 font-medium leading-snug mt-1.5">{im.l}</div>
                <div className="text-[10px] text-slate-400 leading-snug mt-0.5">{im.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg">
          <HeartHandshake className="w-5 h-5 text-white flex-shrink-0" />
          <p className="text-[13.5px] text-white font-medium leading-snug">
            <span className="font-black">對我國 AI 產業的貢獻：</span>
            繁體中文的<span className="font-black">非營利會計與社福行政語料，目前沒有任何開源模型涵蓋</span>。
            本案釋出後，任何資服業者都能在這個基礎上開發社福垂直應用——我們補的是生態系缺的那一塊地基。
          </p>
        </div>
      </div>

    </div>
  );
}
