'use client';

import {
  Sparkles,
  Bot,
  MessageSquare,
  Upload,
  ReceiptText,
  FileText,
  Camera,
  ShieldCheck,
} from 'lucide-react';

export default function Pmis20060723Slide7() {
  // Info: (20260723 - Luphia) Three module-specific AI capabilities
  const abilities = [
    {
      icon: ReceiptText,
      accent: 'from-emerald-500 to-teal-500',
      tint: 'text-emerald-600',
      badge: 'PMIS-08',
      title: '財務憑證自動轉會計傳票',
      features: [
        '擷取日期／收支方向／科目／金額／對象',
        '自動回填傳票欄位',
        '人工確認後入帳',
      ],
    },
    {
      icon: FileText,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      badge: 'PMIS-11',
      title: '工程報告自動生成',
      features: [
        '依系統紀錄生成日／週／月／季／年報',
        '含圖表 Markdown',
        'AI 摘要建議',
      ],
    },
    {
      icon: Camera,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      badge: 'PMIS-05',
      title: '工地影像判讀',
      features: [
        '上傳照片辨識工安疑慮',
        '辨識品質疑慮',
        '給出改善建議',
      ],
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260723 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260723 - Luphia) Header */}
      <div className="z-10 px-16 pt-10 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          Faith AI Assistant
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          費思 AI，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">把重複抄錄升級為即時洞察</span>
        </h2>
        <p className="text-base text-slate-500 font-medium mt-2 max-w-4xl mx-auto">
          常駐右下角浮動助理，貫穿各模組。
        </p>
      </div>

      {/* Info: (20260723 - Luphia) Body */}
      <div className="z-10 flex-1 px-16 flex flex-col gap-4">

        {/* Info: (20260723 - Luphia) Floating assistant intro */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white flex-shrink-0 shadow-md">
            <Bot size={26} />
          </div>
          <div className="flex items-center gap-6 flex-1">
            <div className="flex items-center gap-2.5">
              <MessageSquare size={18} className="text-orange-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">
                <span className="font-black text-slate-800">對話問答</span>：預警／缺失／送審／進度
              </span>
            </div>
            <div className="w-px h-6 bg-slate-200"></div>
            <div className="flex items-center gap-2.5">
              <Upload size={18} className="text-orange-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">
                <span className="font-black text-slate-800">拖曳或上傳任意檔案</span>（PDF／影像／文件）交由 AI 判讀
              </span>
            </div>
          </div>
        </div>

        {/* Info: (20260723 - Luphia) Three module-specific capabilities */}
        <div className="grid grid-cols-3 gap-5 flex-1">
          {abilities.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className={`h-1.5 w-full bg-gradient-to-r ${a.accent}`}></div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${a.tint}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">{a.badge}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 mb-4 leading-tight">{a.title}</h3>
                  <ul className="space-y-2.5">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.tint.replace('text', 'bg')}`}></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260723 - Luphia) Human-in-the-loop governance footer */}
      <div className="z-10 px-16 py-4 flex items-center justify-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-sm">
          <ShieldCheck size={16} className="text-orange-500" />
          <span className="text-slate-700">
            <span className="font-black text-orange-600">人在迴路</span>：AI 僅提供建議／草稿，核定與數位簽章保留給監造人員；產出標註「AI 生成」、可稽核可回溯。
          </span>
        </div>
      </div>
    </div>
  );
}
