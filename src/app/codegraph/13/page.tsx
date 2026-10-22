'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';

export default function CodeGraphSlide13() {
  const rows = [
    {
      way: 'grep / ripgrep',
      answers: '哪裡出現過這串文字',
      user: '人與代理',
      limit: '沒有語意與方向性；關鍵字取錯就全盤皆錯，回傳大量雜訊',
    },
    {
      way: 'ctags / 符號索引',
      answers: '這個名字定義在哪',
      user: '編輯器',
      limit: '只有定義，沒有呼叫關係與影響範圍；輸出格式不是給代理吃的',
    },
    {
      way: 'LSP / IDE 智能',
      answers: '跳定義、找引用、重構',
      user: '坐在螢幕前的人',
      limit: '為互動式操作設計，一次一個問題；代理難以批次取得全域關係',
    },
    {
      way: '向量檢索 RAG',
      answers: '哪段程式碼「語意相近」',
      user: '代理',
      limit: '相似不等於相關；無法保證找齊呼叫端，且切塊與嵌入本身就有成本與漂移',
    },
    {
      way: '雲端程式碼搜尋',
      answers: '跨 repo 的搜尋與導覽',
      user: '團隊',
      limit: '需要上傳程式碼、需要維運，對受法規限制的專案是硬門檻',
    },
    {
      way: 'CodeGraph',
      answers: '誰呼叫誰、改了會炸到哪',
      user: '代理（人也能看）',
      limit: '仍受靜態分析極限：動態派發、反射、執行期 DI 容器抓不全',
      highlight: true,
    },
  ];

  return (
    <CgSlideShell
      chapter="ACT 4 · VS. THE OLD WAYS"
      accent="amber"
      pageLabel="13"
      title={<>和傳統做法的差異：<span className="text-amber-300">回答的問題類型不同</span></>}
      subtitle={<>這不是「誰比較快」的比較。每一種做法都在回答不同的問題——CodeGraph 補的是「關係」這一格，而那正好是代理最缺、也最貴的一格。</>}
      footer="務實建議：CodeGraph 不取代 grep。官方與社群的共識用法是——用圖譜決定去哪裡看，用檔案、測試與執行結果判斷什麼是真的。"
      compact
    >
      <div className="flex-1 rounded-2xl border border-slate-800 overflow-hidden flex flex-col">
        <div className="grid grid-cols-[200px_230px_150px_1fr] bg-slate-900/90 border-b border-slate-800 text-[11px] font-bold tracking-widest text-slate-500">
          <div className="px-5 py-3">做法</div>
          <div className="px-5 py-3">主要回答的問題</div>
          <div className="px-5 py-3">設計給誰用</div>
          <div className="px-5 py-3">關鍵侷限</div>
        </div>

        {rows.map((r) => (
          <div
            key={r.way}
            className={`grid grid-cols-[200px_230px_150px_1fr] border-b border-slate-800/70 last:border-b-0 flex-1 items-center ${
              r.highlight ? 'bg-amber-400/[0.07]' : 'bg-slate-900/30'
            }`}
          >
            <div className={`px-5 py-3.5 text-[14px] font-bold ${r.highlight ? 'text-amber-200' : 'text-slate-200'}`}>
              {r.way}
            </div>
            <div className="px-5 py-3.5 text-[13.5px] text-slate-300 leading-snug">{r.answers}</div>
            <div className="px-5 py-3.5 text-[13.5px] text-slate-400 leading-snug">{r.user}</div>
            <div className={`px-5 py-3.5 text-[13px] leading-snug ${r.highlight ? 'text-amber-100/70' : 'text-slate-500'}`}>
              {r.limit}
            </div>
          </div>
        ))}
      </div>
    </CgSlideShell>
  );
}
