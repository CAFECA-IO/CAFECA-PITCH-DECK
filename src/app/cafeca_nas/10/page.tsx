'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';

export default function NasSlide10() {
  const cloud = [
    { k: '方案', v: '商用雲端硬碟，每人 2TB 共用池' },
    { k: '單價', v: '約 NT$ 450 / 人 / 月' },
    { k: '20 人', v: '約 NT$ 9,000 / 月' },
    { k: '三年', v: '約 NT$ 324,000' },
    { k: '五年', v: '約 NT$ 540,000' },
  ];

  const nas = [
    { k: '主機', v: '4 槽中階機 約 NT$ 25,000' },
    { k: '硬碟', v: '4 × 8TB NAS 碟 約 NT$ 28,000' },
    { k: '周邊', v: 'UPS + 2.5GbE 交換器 約 NT$ 8,000' },
    { k: '電費', v: '約 50W，每年約 NT$ 2,000' },
    { k: '雲端異地備份', v: '5TB 熱資料，每年約 NT$ 12,000' },
  ];

  const years = [
    { y: '第 1 年', cloud: 108, nas: 75 },
    { y: '第 3 年', cloud: 324, nas: 103 },
    { y: '第 5 年', cloud: 540, nas: 159 },
  ];

  return (
    <NasSlideShell
      chapter="ACT 3 · VS. CLOUD DRIVE"
      accent="amber"
      pageLabel="10"
      title={<>最常被問的比較：<span className="text-amber-600">NAS 和雲端硬碟，五年各花多少</span></>}
      subtitle={<>以 20 人、需要約 20TB 可用空間為前提，把「純儲存」這件事拿出來算。雲端方案通常綑綁信箱與辦公軟體，所以真實情境多半是「兩者並用、雲端降級」。</>}
      footer="NAS 五年估算已含第 4 年換一輪硬碟（NT$ 28,000）與每年雲端異地備份。所有價格為 2026 年 9 月市場行情概估，導入前請重新報價；若公司本來就要用 Google Workspace 收信，雲端這欄的邊際成本會低很多。"
      compact
    >
      <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-4 flex-1 min-h-0">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-slate-600 mb-3">A · 全部放雲端硬碟</div>
          <div className="flex-1 flex flex-col justify-around">
            {cloud.map((c) => (
              <div key={c.k} className="flex items-baseline gap-3 border-b border-slate-200 pb-1.5">
                <span className="w-[44px] flex-shrink-0 text-[11px] font-bold text-slate-500">{c.k}</span>
                <span className="text-[13px] text-slate-700 leading-snug">{c.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-amber-600 mb-3">B · NAS + 雲端異地備份</div>
          <div className="flex-1 flex flex-col justify-around">
            {nas.map((n) => (
              <div key={n.k} className="flex items-baseline gap-3 border-b border-slate-200 pb-1.5">
                <span className="w-[72px] flex-shrink-0 text-[11px] font-bold text-amber-700/80">{n.k}</span>
                <span className="text-[13px] text-slate-800 leading-snug">{n.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-slate-600 mb-3">累計支出（千元）</div>
          <div className="flex-1 flex flex-col justify-around gap-2">
            {years.map((r) => (
              <div key={r.y}>
                <div className="text-[12px] font-bold text-slate-700 mb-1.5">{r.y}</div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-slate-400" style={{ width: `${(r.cloud / 540) * 100}%` }} />
                  </div>
                  <span className="w-[56px] text-right text-[12px] font-mono text-slate-600">{r.cloud}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-amber-500" style={{ width: `${(r.nas / 540) * 100}%` }} />
                  </div>
                  <span className="w-[56px] text-right text-[12px] font-mono text-amber-600">{r.nas}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-slate-200 text-[12px] text-slate-600 leading-snug">
            五年差距約 <span className="text-slate-900 font-black">NT$ 38 萬</span>；第一年就回本。
            <span className="text-slate-500">人數愈多、檔案愈大，差距愈大。</span>
          </div>
        </div>
      </div>
    </NasSlideShell>
  );
}
