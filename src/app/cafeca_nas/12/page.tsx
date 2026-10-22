'use client';

import NasSlideShell from '@/components/slide/nas_slide_shell';
import { Home, Building2, Factory } from 'lucide-react';

export default function NasSlide12() {
  const tiers = [
    {
      icon: Home,
      name: '入門級',
      price: 'NT$ 1 ~ 2.5 萬',
      priceNote: '主機 1 ~ 1.5 萬 + 2 顆硬碟',
      spec: [
        '2 槽，RAID 1 鏡像',
        'ARM 或入門 Intel、2 ~ 8GB 記憶體',
        '1GbE 或 2.5GbE 單埠',
        '可用容量約 4 ~ 8TB',
      ],
      people: '1 ~ 10 人',
      firms: '工作室、小型顧問或設計公司、SOHO、律師／會計事務所、家庭辦公室',
      when: '檔案量不大、主要是文件與照片、想先把「集中與備份」做起來。',
      tone: { text: 'text-sky-600', dot: 'bg-sky-500', border: 'border-sky-300', bg: 'bg-sky-50', chip: 'bg-sky-50 border-sky-300 text-sky-700' },
      highlight: false,
    },
    {
      icon: Building2,
      name: '中階 / 專業級',
      price: 'NT$ 4.5 ~ 9 萬',
      priceNote: '主機 2 ~ 4 萬 + 4 ~ 6 顆硬碟 + UPS',
      spec: [
        '4 ~ 6 槽，RAID 5 / 6 或混合 RAID',
        '4 核 x86、8 ~ 32GB、可選 ECC',
        '2.5GbE 雙埠，可加 10GbE 卡',
        'NVMe 快取、可接擴充櫃到 40TB+',
      ],
      people: '10 ~ 50 人',
      firms: '中小企業、行銷／影音／建築事務所、軟體與新創團隊、電商、補教機構',
      when: '有大檔（影片、設計、CAD、資料集）、需要部門權限、想跑幾個 Docker 服務。',
      tone: { text: 'text-orange-600', dot: 'bg-orange-500', border: 'border-orange-400', bg: 'bg-orange-50', chip: 'bg-orange-50 border-orange-300 text-orange-700' },
      highlight: true,
    },
    {
      icon: Factory,
      name: '企業級 / 機架式',
      price: 'NT$ 20 ~ 60 萬起',
      priceNote: '主機 8 ~ 30 萬 + 8 顆以上硬碟',
      spec: [
        '8 ~ 24 槽，RAID 6 或 RAID 60',
        'Xeon / EPYC、ECC 32GB 起、雙電源',
        '10 / 25GbE，可做雙機高可用（HA）',
        '全 SSD 選項、原廠 SLA 與到府維修',
      ],
      people: '50 ~ 300 人',
      firms: '製造業、醫療院所、金融或受監管產業、影視後製、學校與研究單位',
      when: '7×24 不能停、多部門大量併發存取、有法規稽核與資料在地要求。',
      tone: { text: 'text-violet-600', dot: 'bg-violet-500', border: 'border-violet-300', bg: 'bg-violet-50', chip: 'bg-violet-50 border-violet-300 text-violet-700' },
      highlight: false,
    },
  ];

  return (
    <NasSlideShell
      chapter="ACT 3 · PRICE TIERS"
      accent="amber"
      pageLabel="12"
      title={<>不同價位的 NAS 差在哪：<span className="text-amber-600">三個等級、三種公司</span></>}
      subtitle={<>價差主要買的不是「容量」，而是硬碟槽數、處理器、網路速度與可靠度層級。先用人數與檔案類型選等級，再在等級內挑品牌與機型。</>}
      footer="價格為 2026 年 9 月台灣市場含硬碟的概估區間，硬碟以 8TB NAS 專用碟每顆約 NT$ 6,000 ~ 8,000 計。跨級的判斷點：一旦有超過 10 人同時開大檔，或需要 RAID 5 以上的容錯，就從中階起跳。"
      compact
    >
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {tiers.map((t) => (
          <div key={t.name} className={`${t.tone.bg} border ${t.tone.border} rounded-2xl p-5 flex flex-col ${t.highlight ? 'shadow-[0_0_40px_rgba(249,115,22,0.15)]' : ''}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <t.icon className={`w-4.5 h-4.5 ${t.tone.text}`} />
                </div>
                <div className={`text-[16px] font-black ${t.tone.text}`}>{t.name}</div>
              </div>
              {t.highlight && (
                <span className="px-2 py-0.5 rounded-md bg-orange-100 border border-orange-300 text-[10px] font-bold tracking-widest text-orange-700">我們的量級</span>
              )}
            </div>

            <div className="text-[26px] font-black text-slate-900 leading-none">{t.price}</div>
            <div className="text-[11px] font-mono text-slate-500 mt-1 mb-3 pb-3 border-b border-slate-200">{t.priceNote}</div>

            <ul className="space-y-1 mb-3">
              {t.spec.map((s) => (
                <li key={s} className="flex items-start gap-2 text-[12.5px] text-slate-700 leading-snug">
                  <span className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${t.tone.dot}`} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-bold tracking-widest text-slate-500 w-[56px] flex-shrink-0">適用人數</span>
                <span className={`px-2 py-0.5 rounded-md border text-[12px] font-black ${t.tone.chip}`}>{t.people}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[10.5px] font-bold tracking-widest text-slate-500 w-[56px] flex-shrink-0 pt-0.5">企業類型</span>
                <span className="text-[12px] text-slate-800 leading-snug">{t.firms}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[10.5px] font-bold tracking-widest text-slate-500 w-[56px] flex-shrink-0 pt-0.5">選它當</span>
                <span className="text-[12px] text-slate-600 leading-snug">{t.when}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </NasSlideShell>
  );
}
