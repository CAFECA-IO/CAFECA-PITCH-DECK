'use client';

import { Building, Layers, Award, CheckCircle2, Cloud, Server, Sparkles } from 'lucide-react';

export default function CafecaIsunfaSlide3() {
  // Info: (20260714 - Luphia) Three certifiable carbon service lines offered by iSunFA
  const solutions = [
    {
      icon: Building,
      accent: 'from-emerald-500 to-teal-500',
      tint: 'text-emerald-600',
      badge: 'ISO 14064-1',
      title: '組織碳盤查方案',
      features: [
        '雲端 AI 碳盤查數據自動分類導入',
        '國際 / 國內標準排放係數自動比對',
        '一鍵生成合規溫室氣體排放清冊',
      ],
    },
    {
      icon: Layers,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      badge: 'ISO 14067',
      title: '產品碳足跡方案',
      features: [
        '產品生命週期 (Cradle-to-Gate) 碳排放計算',
        '物料清單 (BOM) 配比與製程係數對接',
        '自動生成第三方查證數據稽核佐證包',
      ],
    },
    {
      icon: Award,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      badge: '環境部申請',
      title: '碳足跡標章方案',
      features: [
        '碳標章 / 減碳標章申請書件全程輔導',
        '對接第三方公正查驗機構與現場稽核',
        'AI 專家模型推演製程，最佳化減碳路徑',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-14 pb-5 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Solutions &amp; Coverage
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          三大碳盤查服務方案，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">一站式合規</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          從組織、產品到官方標章，涵蓋企業因應 CBAM 與 IFRS 的完整合規需求。
        </p>
      </div>

      {/* Info: (20260714 - Luphia) Solution Cards */}
      <div className="z-10 flex-1 px-20 grid grid-cols-3 gap-6">
        {solutions.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className={`h-1.5 w-full bg-gradient-to-r ${s.accent}`}></div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center ${s.tint}`}>
                    <Icon size={28} />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{s.badge}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-5">{s.title}</h3>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={17} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260714 - Luphia) Deployment Model Footer */}
      <div className="z-10 px-20 py-6 flex items-center justify-center gap-8 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <Cloud size={18} className="text-orange-500" />
          <span className="font-bold">雲端訂閱</span>
          <span className="text-slate-400">NT$ 29,400 / 年</span>
        </div>
        <div className="w-px h-6 bg-slate-200"></div>
        <div className="flex items-center gap-2 text-slate-600">
          <Server size={18} className="text-orange-500" />
          <span className="font-bold">地端買斷（高資安）</span>
          <span className="text-slate-400">NT$ 303,660 起</span>
        </div>
      </div>
    </div>
  );
}
