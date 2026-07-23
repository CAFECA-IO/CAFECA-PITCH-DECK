'use client';

import { Sparkles, AlertTriangle, ArrowRight, Boxes, BrainCircuit, ShieldCheck } from 'lucide-react';

export default function Pmis20060723Slide2() {
  const pains = [
    '紙本抄錄與人工彙整耗時，事後才發現進度落後',
    '查驗、缺失、送審、環安衛分散多處，難以追溯關聯',
    '文件與照片散落各地，履約期限與改善期限靠人盯',
  ];

  const answers = [
    { icon: Boxes, title: '單一整合平台', desc: '14 模組涵蓋履約、進度、品質、環安、財務、永續與文件，資料一次到位、互相連動。' },
    { icon: BrainCircuit, title: '費思 AI 輔助', desc: '憑證轉傳票、報告自動生成、工地影像判讀，把重複作業升級為即時洞察。' },
    { icon: ShieldCheck, title: '事前預警管控', desc: '進度 S-Curve、周邊風險判讀、逾期預警，把「事後記錄」變成「事前管理」。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="z-10 px-20 pt-14 pb-5 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          What is PMIS
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          監造單位的<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">數位副駕駛</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          協助監造單位於公共工程各階段完成資訊化支援，提升執行效率、履約管控力與管理透明度。
        </p>
      </div>

      <div className="z-10 flex-1 px-20 grid grid-cols-[1fr_auto_1.4fr] gap-8 items-center">

        {/* Info: (20260723 - Luphia) Pain points */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7 h-full flex flex-col">
          <div className="flex items-center gap-2 text-slate-500 font-bold mb-5">
            <AlertTriangle size={20} className="text-amber-500" />
            <span className="text-lg">傳統監造的痛點</span>
          </div>
          <ul className="space-y-4">
            {pains.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-600 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center text-orange-400">
          <ArrowRight size={40} />
        </div>

        {/* Info: (20260723 - Luphia) Answers */}
        <div className="grid grid-cols-1 gap-4">
          {answers.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800 mb-1">{a.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="z-10 px-20 py-6 text-center">
        <p className="text-sm text-slate-500 font-medium">
          目前系統共 <span className="font-black text-orange-500">14 個功能模組</span>，並導入費思 AI 助理輔助文件判讀、憑證轉傳票、報告生成與工地影像分析。
        </p>
      </div>
    </div>
  );
}
