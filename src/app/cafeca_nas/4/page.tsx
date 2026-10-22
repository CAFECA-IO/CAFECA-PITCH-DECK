'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';

export default function NasSlide4() {
  const costs = [
    {
      label: '找檔案的時間',
      figure: '每人每天 20 分鐘',
      basis: '20 人 × 20 分 × 22 天 ≈ 每月 147 小時',
      note: '相當於每月白白多養一位全職同事，只負責「找東西」。',
      tint: 'text-amber-600',
      border: 'border-amber-300',
      bg: 'bg-amber-50',
    },
    {
      label: '重做與版本錯誤',
      figure: '每季 1 ~ 2 次',
      basis: '拿到舊版去改、改完才發現別人也改了',
      note: '每次重做半天到兩天；更糟的是把錯誤版本寄給客戶。',
      tint: 'text-rose-600',
      border: 'border-rose-300',
      bg: 'bg-rose-50',
    },
    {
      label: '一次資料遺失',
      figure: '無法用錢還原',
      basis: '筆電損毀、勒索軟體、誤刪、離職帶走',
      note: '不是每年都發生，但發生一次就足以抹掉多年省下來的所有成本。',
      tint: 'text-violet-600',
      border: 'border-violet-300',
      bg: 'bg-violet-50',
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 1 · THE PAIN"
      accent="rose"
      pageLabel="04"
      title={<>散落的代價：<span className="text-rose-600">看不見帳單，不代表沒有在付</span></>}
      subtitle={<>沒有集中儲存的公司不是省了錢，而是把成本攤在每個人的每一天裡。下面三筆是保守估算，用來建立量級感，不是精確會計。</>}
      footer="估算假設：20 人團隊、平均月薪換算時薪約 NT$ 300。「找檔案 20 分鐘」來自多份知識工作者調查的常見區間（每天 15 ~ 30 分鐘），取偏低值。"
      compact
    >
      <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
        {costs.map((c) => (
          <div key={c.label} className={`${c.bg} border ${c.border} rounded-2xl p-6 flex flex-col`}>
            <div className="text-[11px] font-bold tracking-widest text-slate-600 mb-3">{c.label}</div>
            <div className={`text-[30px] font-black leading-tight ${c.tint} mb-3`}>{c.figure}</div>
            <div className="text-[12.5px] font-mono text-slate-500 leading-snug mb-4 pb-4 border-b border-slate-200">{c.basis}</div>
            <p className="text-[14px] text-slate-700 leading-relaxed">{c.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-6">
        <div className="text-[11px] font-bold tracking-widest text-rose-600 flex-shrink-0">一句話結論</div>
        <p className="text-[15.5px] text-slate-800 leading-snug">
          光是第一項「找檔案」，一年就是<span className="font-black text-slate-900 mx-1">約 1,700 小時、逾 NT$ 50 萬</span>的隱形支出——
          而一台 4 槽 NAS 含硬碟，<span className="font-bold text-slate-900">大約是一個月的份</span>。
        </p>
      </div>
    </NasSlideShell>
  );
}
