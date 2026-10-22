'use client';

import { AppWindow, UserCog, FileText, Wallet, Megaphone } from 'lucide-react';

export default function IsunfaPwp2Slide8() {
  const modules = [
    {
      id: 'm1',
      icon: UserCog,
      title: '人事智能管理',
      subtitle: 'HR Copilot',
      points: ['員工與志工整合人事資料庫', '排班、出勤與教育訓練時數管理', '薪資勞健保試算與人事法遵提醒'],
      tint: 'bg-orange-50',
      ink: 'text-orange-600',
      ring: 'border-orange-200',
      bar: 'bg-orange-400',
    },
    {
      id: 'm2',
      icon: FileText,
      title: '智能行政中樞',
      subtitle: 'Admin Copilot',
      points: ['公文 / 補助申請書 AI 草擬', '會議、活動與文件智能管理', '方案成果報告自動彙整'],
      tint: 'bg-amber-50',
      ink: 'text-amber-600',
      ring: 'border-amber-200',
      bar: 'bg-amber-400',
    },
    {
      id: 'm3',
      icon: Wallet,
      title: '會計與財產管理',
      subtitle: 'Ledger & Assets',
      points: ['憑證 AI 判讀自動入帳（iSunFA 核心）', '專款專用勾稽與勸募徵信報表', '固定資產與捐贈物資 AI 盤點'],
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
      ring: 'border-blue-200',
      bar: 'bg-blue-400',
    },
    {
      id: 'm4',
      icon: Megaphone,
      title: 'ESG 影響力報告',
      subtitle: 'Impact Reporter',
      points: ['服務數據彙整與影響力量化', 'ESG／年度影響力報告自動生成', '讓社會大眾看見基金會的正面影響力'],
      tint: 'bg-emerald-50',
      ink: 'text-emerald-600',
      ring: 'border-emerald-200',
      bar: 'bg-emerald-400',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">AI Application</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-4">
          <AppWindow className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-semibold text-indigo-600">AI 應用系統開發規劃</span>
        </div>
        <h2 className="text-[40px] font-black leading-tight text-slate-800">
          「愛智扶」<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">四大 AI 應用服務模組</span>
        </h2>
        <p className="text-[13px] text-slate-500 mt-2 font-medium">聚焦社福機構後台四大管理需求：人事、行政、會計（含財產盤點）與 ESG 影響力；模組化架構＋標準化介面（API / MCP），可獨立導入、按需組合。</p>
      </div>

      {/* Info: (20260908 - Luphia) 4 Modules */}
      <div className="z-10 px-16 grid grid-cols-4 gap-4 flex-1">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.id} className={`bg-white border ${m.ring} rounded-2xl shadow-sm p-5 flex flex-col relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${m.bar}`}></div>
              <div className={`w-11 h-11 ${m.tint} rounded-xl flex items-center justify-center mb-3 mt-1`}>
                <Icon className={`w-5 h-5 ${m.ink}`} />
              </div>
              <h3 className="text-[16px] font-bold text-slate-800 leading-snug">{m.title}</h3>
              <div className={`text-[10px] font-mono font-bold ${m.ink} tracking-wide mb-3`}>{m.subtitle}</div>
              <div className="w-full h-px bg-slate-100 mb-3"></div>
              <ul className="space-y-2">
                {m.points.map((p) => (
                  <li key={p} className="text-[11px] text-slate-500 leading-relaxed flex gap-1.5">
                    <span className={`${m.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Info: (20260904 - Luphia) Bottom Note */}
      <div className="z-10 px-16 py-6">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3.5 shadow-sm">
          <p className="text-[12px] text-slate-600">
            <span className="font-bold text-slate-800">產品化路徑</span>：四大模組均以 iSunFA 既有 SaaS 產品架構為基底延伸開發，計畫結束後以
            <span className="font-black text-indigo-500"> 地端買斷（永久使用）＋ 雲端訂閱（永遠最新） </span>雙軌模式常態營運，確保成果不隨計畫結束而消失。
          </p>
        </div>
      </div>

    </div>
  );
}
