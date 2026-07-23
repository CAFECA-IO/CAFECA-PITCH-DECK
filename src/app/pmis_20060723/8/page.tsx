'use client';

import {
  Sparkles,
  UserCog,
  SlidersHorizontal,
  Eye,
  Pencil,
  Server,
  MonitorSmartphone,
  FilePlus2,
  CheckCircle2,
} from 'lucide-react';

export default function Pmis20060723Slide8() {
  // Info: (20260723 - Luphia) Two orthogonal permission tracks
  const tracks = [
    {
      icon: UserCog,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      badge: 'AccountRole',
      title: '角色',
      role: '負責「系統身分與專案可視範圍」',
      features: [
        'ADMIN — 不受限',
        'MANAGER — 可檢視全部專案',
        'MEMBER — 僅檢視被指派專案',
      ],
    },
    {
      icon: SlidersHorizontal,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      badge: 'Position',
      title: '職位',
      role: '「能操作哪些模組、能否編輯」的唯一來源',
      features: [
        '各模組操作權限：無',
        '各模組操作權限：檢視',
        '各模組操作權限：可編輯',
      ],
    },
  ];

  // Info: (20260723 - Luphia) Unified create-record flow steps
  const flow = ['橘色「新建」鈕', '畫面置中表單對話框', '支援拖曳上傳', '固定取消／儲存', '未儲存離開跳確認'];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260723 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260723 - Luphia) Header */}
      <div className="z-10 px-16 pt-10 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Access Control &amp; UX
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          角色 × 職位雙軌權限，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">前後端雙重把關</span>
        </h2>
        <p className="text-base text-slate-500 font-medium mt-2 max-w-4xl mx-auto">
          角色與職位分工、互不重疊，搭配全系統一致的操作體驗。
        </p>
      </div>

      {/* Info: (20260723 - Luphia) Body */}
      <div className="z-10 flex-1 px-16 flex flex-col gap-4">

        {/* Info: (20260723 - Luphia) Two permission tracks */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className={`h-1.5 w-full bg-gradient-to-r ${t.accent}`}></div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${t.tint}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-black text-slate-800">{t.title}</h3>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{t.badge}</span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold mb-3">{t.role}</p>
                  <ul className="space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 className={`flex-shrink-0 mt-0.5 ${t.tint}`} size={17} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info: (20260723 - Luphia) View vs edit — front & back double check */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 grid grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <MonitorSmartphone size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <Eye size={14} className="text-slate-400" />
                <span className="text-sm font-black text-slate-800">前端把關</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">隱藏新建／編輯／刪除控制項。</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Server size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <Pencil size={14} className="text-slate-400" />
                <span className="text-sm font-black text-slate-800">後端把關</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">每個寫入動作再驗證可編輯權限，繞過前端也改不了資料。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260723 - Luphia) Unified CreateRecordDialog flow footer */}
      <div className="z-10 px-16 py-4">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-black text-orange-600">
            <FilePlus2 size={16} />
            統一新建（CreateRecordDialog）
          </span>
          {flow.map((step) => (
            <span key={step} className="inline-flex items-center gap-2">
              <span className="text-slate-300">→</span>
              <span className="text-xs text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1">{step}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
