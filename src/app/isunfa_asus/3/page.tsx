'use client';

import { Factory, Landmark, CircleDollarSign, Cpu, CheckCircle2, Cloud, Server, Copy, Share2, Handshake } from 'lucide-react';

export default function IsunfaAsusSlide3() {
  const industries = [
    { icon: Cpu, label: '半導體耗材與精密製造' },
    { icon: Factory, label: '製造業供應鏈' },
    { icon: Landmark, label: '政府與公部門' },
    { icon: CircleDollarSign, label: '金融與證券' },
  ];

  const maturity = [
    { icon: Cloud, title: '雲端訂閱', price: 'NT$ 29,400 / 年', note: '快速上線、輕量導入' },
    { icon: Server, title: '地端買斷（高資安）', price: 'NT$ 303,660 起', note: '高機密製造業首選' },
    { icon: CheckCircle2, title: '一站式合規', price: 'ISO / IFRS', note: '碳盤查、足跡、DPP 全涵蓋' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-32 -bottom-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-12 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-4 shadow-sm">
          <span className="text-xs font-bold text-orange-500 tracking-widest">02</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Taiwan Market Status</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">台灣市場發展現況</h2>
        <p className="text-base text-slate-500 mt-2 font-medium">產品已商業化上線，並在製造業與公部門完成實證導入</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-8">
        {/* Left: industries */}
        <div className="col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-5 flex flex-col">
          <p className="text-sm font-bold text-slate-700 mb-3">主要應用產業</p>
          <div className="grid grid-cols-1 gap-2.5 flex-1">
            {industries.map((i) => (
              <div key={i.label} className="bg-white rounded-xl px-4 py-3 border border-slate-200 flex items-center gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <i.icon className="w-4 h-4" strokeWidth={1.8} />
                </div>
                <span className="text-sm font-semibold text-slate-700">{i.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: maturity */}
        <div className="col-span-8 flex flex-col gap-4">
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-700 mb-2">產品成熟度｜已商業化的三種導入模式</p>
            <div className="grid grid-cols-3 gap-3 h-full">
              {maturity.map((m) => (
                <div key={m.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-2.5">
                    <m.icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{m.title}</h3>
                  <p className="text-lg font-black text-orange-500 mt-1 leading-tight">{m.price}</p>
                  <p className="text-[12px] text-slate-500 mt-auto pt-2">{m.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Replicability */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Copy className="w-4 h-4" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">可複製性</p>
                <p className="text-[12px] text-slate-600 leading-relaxed mt-0.5">模組化 SaaS 與標準化 ISO/IFRS 流程，跨產業快速複製部署。</p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-orange-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Share2 className="w-4 h-4" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">可擴散性</p>
                <p className="text-[12px] text-slate-600 leading-relaxed mt-0.5">以讓利分潤與多家系統整合商合作，透過通路槓桿快速擴散。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-20 mx-16 mb-6 bg-slate-800 rounded-xl px-5 py-3 flex items-center gap-3 text-white">
        <Handshake className="w-5 h-5 text-orange-400 flex-shrink-0" />
        <p className="text-[13px] font-medium text-slate-200">已導入客戶包含 <span className="font-bold text-white">中國砂輪 KINIK、台積電（PoC）</span>，並有 <span className="font-bold text-white">新北市政府、金管會、好好證券</span> 等公部門與金融實證基礎。</p>
      </div>
    </div>
  );
}
