'use client';

import { ShieldCheck, Scale, Bug, FileWarning, Ban, UserCheck } from 'lucide-react';

export default function IsunfaPwp2Slide17() {
  const blocks = [
    {
      id: 'law',
      icon: Scale,
      title: '法規遵循',
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
      ring: 'border-blue-200',
      bar: 'bg-blue-400',
      items: [
        '《人工智慧基本法》與行政院生成式 AI 參考指引',
        '《個人資料保護法》第 6 條敏感資料規範',
        '數位發展部《危害國家資通安全產品審查辦法》',
        '《人工智慧風險分類框架》風險評估與分級管理',
      ],
    },
    {
      id: 'sec',
      icon: Bug,
      title: '資訊安全檢驗',
      tint: 'bg-red-50',
      ink: 'text-red-600',
      ring: 'border-red-200',
      bar: 'bg-red-400',
      items: [
        '委由貴署認可之第三方資安機構檢測（至少一次）',
        '源碼掃描、弱點掃描（主機＋網站）與滲透測試',
        '涵蓋 SQL Injection、XSS 與 OWASP Top 10',
        '中、高風險弱點全數修正完畢並提出報告',
      ],
    },
    {
      id: 'ai',
      icon: UserCheck,
      title: 'AI 治理與人審',
      tint: 'bg-emerald-50',
      ink: 'text-emerald-600',
      ring: 'border-emerald-200',
      bar: 'bg-emerald-400',
      items: [
        '不使用中國或中資背景之開源模型（如 DeepSeek）',
        'AI 安全性測試規劃：目的、方法、範圍與風險改善',
        '人事與對外報告一律由主管最終決策，AI 僅供草稿與建議',
        '模型訓練微調與版本異動留存 System Log 備查',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest">Compliance &amp; Security</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span className="text-sm font-semibold text-red-600">執行規範與資安治理</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          服務對象是最脆弱的一群人，<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">資安與倫理是底線</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) 3 Compliance Blocks */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 flex-1">
        {blocks.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.id} className={`bg-white border ${b.ring} rounded-3xl shadow-sm p-6 flex flex-col relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1.5 ${b.bar}`}></div>
              <div className="flex items-center gap-3 mb-4 mt-1">
                <div className={`w-11 h-11 ${b.tint} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${b.ink}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800">{b.title}</h3>
              </div>
              <div className="w-full h-px bg-slate-100 mb-4"></div>
              <div className="space-y-3">
                {b.items.map((it) => (
                  <div key={it} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                    <span className={`${b.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260904 - Luphia) Bottom Notes */}
      <div className="z-10 px-16 py-6 grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-sm">
          <FileWarning className="w-4 h-4 text-orange-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug">
            <span className="font-bold text-slate-800">文件交付</span>：Model Card（模型資訊、用途、訓練資料概況、效能評測、已知限制與風險）與 SBOM（含第三方元件名稱、版本、授權與來源）依貴署同意之格式提交。
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-sm">
          <Ban className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug">
            <span className="font-bold text-slate-800">紅線承諾</span>：不從事侵害第三人權益之行為、不逾越核定執行範圍、不使用資安疑慮或來源不明之技術與工具；可識別之個人資料永不用於模型訓練。
          </p>
        </div>
      </div>

    </div>
  );
}
