'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';

export default function NasSlide6() {
  const rows = [
    { path: '雲端硬碟（辦公室 300 Mbps 上傳）', mbps: 35, minutes: '約 24 分', share: 12, tint: 'bg-slate-400' },
    { path: 'Wi-Fi 6 連 NAS（實際約 600 Mbps）', mbps: 70, minutes: '約 12 分', share: 25, tint: 'bg-sky-400' },
    { path: '1GbE 有線連 NAS', mbps: 110, minutes: '約 8 分', share: 39, tint: 'bg-orange-400' },
    { path: '2.5GbE 有線連 NAS', mbps: 280, minutes: '約 3 分', share: 100, tint: 'bg-orange-500' },
  ];

  return (
    <NasSlideShell
      chapter="ACT 2 · THE EFFECT"
      accent="orange"
      pageLabel="06"
      title={<>效果一：<span className="text-orange-600">大檔在內網跑，速度差一個量級</span></>}
      subtitle={<>以一支 50 GB 的影片素材為例，從「放進共用位置」到「同事可以開始用」要多久。雲端要算上傳＋對方下載兩段；NAS 只有一段，而且對方不用下載。</>}
      footer="數字為典型實測區間的中間值：1GbE 理論 125 MB/s 實際約 110；2.5GbE 實際約 280；傳統硬碟單顆持續讀寫約 200 MB/s，RAID 多顆並行才吃得滿 2.5GbE。"
      compact
    >
      <div className="grid grid-cols-[1.4fr_1fr] gap-6 flex-1 min-h-0">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-center gap-5">
          {rows.map((r) => (
            <div key={r.path}>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-[13.5px] font-bold text-slate-800">{r.path}</span>
                <span className="text-[12px] font-mono text-slate-500">{r.mbps} MB/s</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full rounded-full ${r.tint}`} style={{ width: `${r.share}%` }} />
                </div>
                <span className="w-[72px] text-right text-[14px] font-black text-slate-900">{r.minutes}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-orange-50 border border-orange-300 rounded-2xl p-5 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-orange-600 mb-2">真正的差別不是分鐘數</div>
            <p className="text-[14.5px] text-slate-800 leading-relaxed">
              是<span className="font-bold text-slate-900">「檔案不用搬」</span>。剪輯機、設計機直接把 NAS 上的資料夾當工作目錄，
              存檔就是分享，分享就是存檔。上傳、下載、同步、解壓，這些動詞從流程裡消失。
            </p>
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-slate-600 mb-2">但要老實說</div>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              這個優勢<span className="text-slate-800 font-bold">只在辦公室內成立</span>。在家連回公司，速度上限就是辦公室的上傳頻寬——
              跟用雲端硬碟差不多，甚至更慢。全遠端團隊請直接跳到第 13 頁。
            </p>
          </div>
        </div>
      </div>
    </NasSlideShell>
  );
}
