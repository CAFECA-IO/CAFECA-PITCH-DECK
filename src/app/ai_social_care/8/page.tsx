'use client';

import { Gift, Blocks, Cpu, Users2, Landmark, ShieldCheck } from 'lucide-react';
import { AscComputeMesh } from '@/components/slide/asc_art';

export default function AiSocialCareSlide8() {
  const benefits = [
    {
      id: 'b1', icon: Users2, color: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600',
      t: '對社福場域',
      items: ['100 個場域零費用導入並永久使用', '每位社工每週釋出 10 小時直接服務時間', '小型協會以 840 元／月取得過去負擔不起的行政量能'],
    },
    {
      id: 'b2', icon: Landmark, color: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600',
      t: '對 AI 產業',
      items: ['補上公益／非營利領域型模型的空白', '5 家以上資服業者據以開發垂直應用', '繁中社福語料成為可輸出的國家級數位資產'],
    },
    {
      id: 'b3', icon: ShieldCheck, color: '#10b981', tint: 'bg-emerald-50', ink: 'text-emerald-600',
      t: '對治理示範',
      items: ['在最敏感的資料場域示範可信賴 AI 架構', '地端部署＋去識別化＋人審把關之治理模式', '可直接援用於醫療、教育等高敏感領域'],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">07 · 計畫效益與算力共享延伸</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Gift className="w-8 h-8 text-orange-500 flex-shrink-0" />
          三個層次的效益，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-500">加上一張會長大的算力網</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Three Benefit Groups */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 mb-5">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.id} className="bg-white border border-slate-200 rounded-3xl px-5 py-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: b.color }}></div>
              <div className="flex items-center gap-2.5 mb-2.5 mt-1">
                <div className={`w-9 h-9 ${b.tint} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-4.5 h-4.5 ${b.ink}`} />
                </div>
                <span className="text-[16px] font-black text-slate-800">{b.t}</span>
              </div>
              <ul className="space-y-1.5">
                {b.items.map((it) => (
                  <li key={it} className="text-[11.5px] text-slate-500 leading-snug flex gap-1.5">
                    <span className="flex-shrink-0 mt-[5px] w-1 h-1 rounded-full" style={{ background: b.color }}></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) iSunCloud 地端算力共享網路 */}
      <div className="z-10 px-16 flex-1">
        <div className="h-full bg-slate-50 border border-slate-200 rounded-3xl px-6 py-4 flex items-center gap-6">

          <AscComputeMesh className="w-[196px] h-[152px] flex-shrink-0" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 mb-2">
              <Blocks className="w-5 h-5 text-indigo-600" />
              <span className="text-[19px] font-black text-slate-900">iSunCloud 地端算力共享網路</span>
              <span className="text-[9.5px] font-black text-white bg-indigo-500 rounded-full px-2.5 py-1 tracking-widest">延伸效益</span>
            </div>
            <p className="text-[12.5px] text-slate-600 leading-relaxed mb-3">
              每個導入場域的地端節點，平日只用到一部分算力。本案將這些節點以
              <span className="font-bold text-slate-800">區塊鏈記帳串成一張共享網路</span>——
              當某個場域遇到月底結算、年度財報等尖峰負載而
              <span className="font-bold text-orange-600">本機算力不足時，可即時向網路租借鄰近節點的閒置算力</span>，
              用量與費用上鏈記錄、可稽核、可結算。
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'f1', icon: Cpu, t: '不必為尖峰買設備', d: '以共享取代超額配置，降低每場域硬體門檻' },
                { id: 'f2', icon: Blocks, t: '用量上鏈可稽核', d: '非營利單位對外徵信所需之透明度天然具備' },
                { id: 'f3', icon: Users2, t: '場域越多越便宜', d: '節點數成長使閒置算力池擴大，邊際成本遞減' },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.id} className="bg-white border border-slate-200 rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span className="text-[11.5px] font-black text-slate-800 leading-tight">{f.t}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 leading-snug">{f.d}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 px-16 py-5">
        <p className="text-[11px] text-slate-400 leading-snug">
          註：iSunCloud 為本公司既有之算力資源共享鏈技術，本案以其作為地端部署之尖峰負載備援機制；該機制不屬本案核心物件，不影響 FAITH 模型與中介平台之開源釋出與著作財產權移轉。
        </p>
      </div>

    </div>
  );
}
