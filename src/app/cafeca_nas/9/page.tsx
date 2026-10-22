'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';

export default function NasSlide9() {
  const rows = [
    {
      way: '個人電腦 + 外接硬碟',
      good: '零學習、最便宜',
      cost: '一次性、極低',
      limit: '單點故障、無權限、無版本；分享靠人工搬運，離職即失聯',
    },
    {
      way: 'LINE / Slack 傳檔',
      good: '當下最快',
      cost: '含在通訊軟體內',
      limit: '檔案會過期被洗掉；不是儲存方案，只是運輸工具',
    },
    {
      way: '雲端硬碟（Google Drive / OneDrive / Dropbox）',
      good: '隨處可用、協作與共編最強、免維護',
      cost: '按人數月費，永遠付',
      limit: '大檔受頻寬限制；資料在第三方；帳號綁人，人走要搬；容量到頂就升級方案',
    },
    {
      way: 'Windows / Linux 檔案伺服器',
      good: '彈性最大、可深度整合 AD',
      cost: '硬體 + 授權 + 人力',
      limit: '需要 IT 專人維運與更新；沒有圖形化備份／快照就得自己拼',
    },
    {
      way: '公有雲物件儲存（S3 / B2）',
      good: '容量無上限、冷存極便宜',
      cost: '按容量與流量計費',
      limit: '不是給人日常「開檔案」用的；下載出流量要錢；需工程整合',
    },
    {
      way: 'NAS',
      good: '內網高速、權限／快照／備份內建、圖形介面',
      cost: '一次採購 + 電費',
      limit: '要有人負責；優勢限於辦公室內；仍需異地備份；有初期規劃成本',
      highlight: true,
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 3 · VS. ALTERNATIVES"
      accent="amber"
      pageLabel="09"
      title={<>第三幕：和其他做法的差異——<span className="text-amber-600">每個方案回答的問題不同</span></>}
      subtitle={<>沒有一個方案全贏。雲端硬碟贏在「協作與隨處可用」，NAS 贏在「大檔、內網、資料留在公司、成本不隨人數長」。多數公司最後是兩者並用。</>}
      footer="務實建議：文件與試算表的即時共編留在雲端硬碟；素材、專案成品、備份與敏感資料放 NAS。用 NAS 取代的是「隨身碟、個人電腦與通訊軟體」，不是取代 Google Docs。"
      compact
    >
      <div className="flex-1 rounded-2xl border border-slate-200 overflow-hidden flex flex-col">
        <div className="grid grid-cols-[250px_250px_170px_1fr] bg-slate-50 border-b border-slate-200 text-[11px] font-bold tracking-widest text-slate-500">
          <div className="px-5 py-3">做法</div>
          <div className="px-5 py-3">強在哪</div>
          <div className="px-5 py-3">成本型態</div>
          <div className="px-5 py-3">關鍵侷限</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.way}
            className={`grid grid-cols-[250px_250px_170px_1fr] border-b border-slate-200 last:border-b-0 flex-1 items-center ${
              r.highlight ? 'bg-amber-50' : 'bg-white'
            }`}
          >
            <div className={`px-5 py-3 text-[13.5px] font-bold leading-snug ${r.highlight ? 'text-amber-700' : 'text-slate-800'}`}>
              {r.way}
            </div>
            <div className="px-5 py-3 text-[13px] text-slate-700 leading-snug">{r.good}</div>
            <div className="px-5 py-3 text-[13px] text-slate-600 leading-snug">{r.cost}</div>
            <div className={`px-5 py-3 text-[12.5px] leading-snug ${r.highlight ? 'text-amber-800/80' : 'text-slate-500'}`}>
              {r.limit}
            </div>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
