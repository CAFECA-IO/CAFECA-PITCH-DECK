'use client';

import { Database, Camera, Globe2, ArrowDown } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide5() {
  const layers = [
    {
      tag: 'LAYER 1',
      name: '交易層',
      en: 'Transaction',
      icon: Database,
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
      dot: 'bg-orange-500',
      input: 'POS 逐筆明細　會員主檔　商品主檔　貨架配置圖',
      answer: ['自動分群：這座賣場裡有哪幾種客人', '商品關聯：他們還會一起買什麼', '購買週期：什麼時候該再聯絡他'],
      cost: '零硬體 · 30 天',
    },
    {
      tag: 'LAYER 2',
      name: '場域層',
      en: 'Perception',
      icon: Camera,
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
      dot: 'bg-orange-500',
      input: '＋ 既有監視器（邊緣運算、影像不落地）',
      answer: ['沒刷卡的那 48%，屬於哪一群', '他在貨架前猶豫了什麼、最後放回什麼', '哪些客人進來了卻空手離開'],
      cost: '複用監視器 · 60 天',
    },
    {
      tag: 'LAYER 3',
      name: '環境層',
      en: 'Environment',
      icon: Globe2,
      text: 'text-orange-600',
      ring: 'border-slate-200',
      bg: 'bg-white',
      dot: 'bg-orange-500',
      input: '＋ 人口、交通、氣象、班表、學曆、民俗、競業',
      answer: ['客群結構會怎麼變（車站、新建案、競業）', '什麼時候該提前備貨、提前發券', '哪一個客群正在流失、往哪裡流'],
      cost: '公開資料為主 · 90 天',
    },
  ];

  return (
    <CrmSlideShell
      chapter="產品架構 · ROADMAP"
      pageLabel="05 / 20"
      compact
      title={<>認識客戶，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">分三層蓋</span></>}
      subtitle="不是先買一套龐大的 CRM 再想辦法填資料，而是從你已經有的交易明細開始，一層一層把客戶的樣子疊出來。"
    >
      <div className="flex flex-col h-full">

        <div className="grid grid-cols-3 gap-5 flex-1">
          {layers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.tag} className={`rounded-2xl border ${layer.ring} ${layer.bg} p-5 flex flex-col shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10.5px] font-mono font-bold tracking-[0.2em] text-slate-400">{layer.tag}</span>
                  <Icon className={`w-5 h-5 ${layer.text}`} />
                </div>

                <div className="text-[26px] font-black text-slate-900 leading-none">{layer.name}</div>
                <div className="text-[11px] font-mono text-slate-400 mt-1.5 tracking-wider">{layer.en}</div>

                <div className="mt-4 pt-3 border-t border-slate-200">
                  <div className="text-[10.5px] text-slate-400 mb-1.5 tracking-wider">資料輸入</div>
                  <p className="text-[12.5px] text-slate-600 leading-snug">{layer.input}</p>
                </div>

                <div className="mt-3.5 flex-1">
                  <div className="text-[10.5px] text-slate-400 mb-2 tracking-wider">這一層才回答得了的問題</div>
                  <ul className="space-y-1.5">
                    {layer.answer.map((text) => (
                      <li key={text} className="flex gap-2 text-[12.5px] text-slate-700 leading-snug">
                        <span className={`w-1.5 h-1.5 rounded-full ${layer.dot} mt-[6px] flex-shrink-0`} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10.5px] text-slate-400">導入成本</span>
                  <span className={`text-[12px] font-bold ${layer.text}`}>{layer.cost}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 flex items-center gap-5 shadow-sm">
          <ArrowDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <p className="text-[14px] text-slate-600 leading-relaxed">
            <span className="text-slate-900 font-bold">三層是遞進，不是三選一。</span>
            第一層三十天就能產出可執行的客群策略；疊到第三層，CRM 才從「記錄過去的客人」，變成「預測明天的客人」。
          </p>
        </div>

      </div>
    </CrmSlideShell>
  );
}
