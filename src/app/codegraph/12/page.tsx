'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';

export default function CodeGraphSlide12() {
  const timeline = [
    { year: '~2018', title: 'tree-sitter 成熟', desc: '增量式、容錯的多語言解析器出現，讓「一套程式碼解析幾十種語言、而且邊打字邊更新」第一次變得實際。', tone: 'cyan' },
    { year: '2016+', title: 'LSP 建立了共識', desc: '編輯器與語言伺服器的分離，證明「結構資訊可以標準化地被外部程式消費」。但它服務的對象是人與 IDE。', tone: 'slate' },
    { year: '2024', title: 'MCP 出現', desc: '在此之前，沒有一個通用管道能把外部資料源接到各家 AI 代理上。每接一家就要寫一次整合，這是最關鍵的缺口。', tone: 'violet' },
    { year: '2025-26', title: '代理式編碼普及', desc: '需求端成形：當 AI 開始自己在 repo 裡跑幾十次工具呼叫，探索效率才第一次變成一筆看得見的帳單。', tone: 'amber' },
    { year: '現在', title: '成本壓力兌現', desc: 'token 帳單、等待時間、改錯檔的返工——三者同時痛到值得為它多裝一個工具。動機到位，工具才會被做出來、被採用。', tone: 'emerald' },
  ];

  const toneMap: Record<string, { dot: string; text: string; border: string }> = {
    cyan: { dot: 'bg-cyan-400', text: 'text-cyan-300', border: 'border-cyan-400/30' },
    slate: { dot: 'bg-slate-500', text: 'text-slate-400', border: 'border-slate-700' },
    violet: { dot: 'bg-violet-400', text: 'text-violet-300', border: 'border-violet-400/30' },
    amber: { dot: 'bg-amber-400', text: 'text-amber-300', border: 'border-amber-400/30' },
    emerald: { dot: 'bg-emerald-400', text: 'text-emerald-300', border: 'border-emerald-400/30' },
  };

  return (
    <CgSlideShell
      chapter="ACT 4 · WHY NOT EARLIER"
      accent="violet"
      pageLabel="12"
      title={<>為什麼這種東西<span className="text-violet-300">十年前沒有出現</span></>}
      subtitle={<>「把程式碼變成圖」這個想法一點都不新——ctags 從 1980 年代就在做。真正卡住的是另外五件事，它們最近三年才同時到齊。</>}
      footer="結論：CodeGraph 不是一個天才發明，而是一個「條件終於齊了」的產物。這也是為什麼它能在幾個月內累積七萬顆星。"
    >
      <div className="relative flex-1 flex items-stretch">
        <div className="absolute left-0 right-0 top-[46px] h-px bg-gradient-to-r from-cyan-400/40 via-violet-400/40 to-emerald-400/40" />

        <div className="grid grid-cols-5 gap-4 w-full">
          {timeline.map((t) => {
            const tone = toneMap[t.tone];
            return (
              <div key={t.title} className="flex flex-col">
                <div className={`text-[13px] font-mono font-bold tracking-widest mb-3 ${tone.text}`}>{t.year}</div>
                <div className="relative h-4 mb-3">
                  <span className={`absolute left-0 top-0 w-3.5 h-3.5 rounded-full ${tone.dot} ring-4 ring-[#080b12]`} />
                </div>
                <div className={`bg-slate-900/70 border ${tone.border} rounded-2xl p-4 flex-1 flex flex-col justify-center`}>
                  <div className="text-[16px] font-bold text-white leading-tight mb-2">{t.title}</div>
                  <div className="text-[13px] text-slate-400 leading-relaxed">{t.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-4">
        <p className="text-[15px] text-slate-300 leading-relaxed">
          <span className="font-bold text-white">還有一個常被忽略的前提：消費者換人了。</span>
          過去的程式碼索引（ctags、LSP、雲端 code search）都是<span className="text-slate-100">做給人看的</span>——重點在跳轉與畫面。
          代理需要的是<span className="text-violet-300 font-bold">壓縮過、可一次吞下、帶有影響範圍的結構化答案</span>，那是完全不同的產品設計題。
        </p>
      </div>
    </CgSlideShell>
  );
}
