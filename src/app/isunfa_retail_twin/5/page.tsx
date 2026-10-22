'use client';

import { Database, Camera, Globe2, ArrowDown } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide5() {
  const layers = [
    {
      tag: 'LAYER 1',
      name: '帳本孿生',
      en: 'Ledger Twin',
      icon: Database,
      accent: 'emerald',
      input: 'POS 逐筆明細　商品主檔　貨架配置圖',
      answer: ['哪些品項會被同一個人一起買', '每一格貨架的實際坪效與交叉貢獻', '一天之中賣場如何被使用'],
      cost: '零硬體 · 30 天',
    },
    {
      tag: 'LAYER 2',
      name: '感知孿生',
      en: 'Perception Twin',
      icon: Camera,
      accent: 'cyan',
      input: '＋ 既有監視器（邊緣運算、影像不落地）',
      answer: ['進店卻沒買的人在哪裡放棄', '貨架前的猶豫、比價與挫折', '缺貨、排隊與無效走動的真實成本'],
      cost: '複用監視器 · 60 天',
    },
    {
      tag: 'LAYER 3',
      name: '環境孿生',
      en: 'Environment Twin',
      icon: Globe2,
      accent: 'indigo',
      input: '＋ 人口、交通、氣象、班表、學曆、民俗、競業',
      answer: ['如果旁邊蓋了一座車站會怎樣', '如果導入機器人店員會怎樣', '颱風週、競業進駐、電價調漲怎麼撐'],
      cost: '公開資料為主 · 90 天',
    },
  ];

  const accentMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
    emerald: { border: 'border-emerald-400/30', bg: 'bg-emerald-400/[0.07]', text: 'text-emerald-300', dot: 'bg-emerald-400' },
    cyan: { border: 'border-cyan-400/30', bg: 'bg-cyan-400/[0.07]', text: 'text-cyan-300', dot: 'bg-cyan-400' },
    indigo: { border: 'border-indigo-400/30', bg: 'bg-indigo-400/[0.07]', text: 'text-indigo-300', dot: 'bg-indigo-400' },
  };

  return (
    <TwinSlideShell
      chapter="技術主張 · ROADMAP"
      chapterColor="text-white"
      chapterDot="bg-white"
      pageLabel="05 / 22"
      compact
      title={<>技術主張：把二維帳本，<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">重建成三維場域</span></>}
      subtitle="數位孿生不是把賣場做成一個好看的 3D 模型，而是讓這個模型能被提問、能被介入、能回答「如果」。我們分三層蓋。"
    >
      <div className="flex flex-col h-full">

        <div className="grid grid-cols-3 gap-5 flex-1">
          {layers.map((layer) => {
            const tone = accentMap[layer.accent];
            const Icon = layer.icon;
            return (
              <div key={layer.tag} className={`rounded-2xl border ${tone.border} ${tone.bg} p-5 flex flex-col`}>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10.5px] font-mono font-bold tracking-[0.2em] ${tone.text}`}>{layer.tag}</span>
                  <Icon className={`w-5 h-5 ${tone.text}`} />
                </div>

                <div className="text-[26px] font-black text-white leading-none">{layer.name}</div>
                <div className="text-[11px] font-mono text-slate-500 mt-1.5 tracking-wider">{layer.en}</div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10.5px] text-slate-500 mb-1.5 tracking-wider">資料輸入</div>
                  <p className="text-[12.5px] text-slate-300 leading-snug">{layer.input}</p>
                </div>

                <div className="mt-3.5 flex-1">
                  <div className="text-[10.5px] text-slate-500 mb-2 tracking-wider">這一層才回答得了的問題</div>
                  <ul className="space-y-1.5">
                    {layer.answer.map((text) => (
                      <li key={text} className="flex gap-2 text-[12.5px] text-slate-200 leading-snug">
                        <span className={`w-1.5 h-1.5 rounded-full ${tone.dot} mt-[6px] flex-shrink-0`} />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10.5px] text-slate-500">導入成本</span>
                  <span className={`text-[12px] font-bold ${tone.text}`}>{layer.cost}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 flex items-center gap-5">
          <ArrowDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
          <p className="text-[14px] text-slate-300 leading-relaxed">
            <span className="text-white font-bold">三層是遞進、不是三選一。</span>
            每一層都能獨立產出可用的營運答案；但只有疊到第三層，賣場才會從「被記錄的過去」，變成「可被模擬的未來」。
            <span className="text-slate-500">　接下來，我們一層一層蓋給你看。</span>
          </p>
        </div>

      </div>
    </TwinSlideShell>
  );
}
