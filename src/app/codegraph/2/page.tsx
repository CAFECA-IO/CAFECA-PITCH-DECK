'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { FolderTree, Binary, Database, Plug, Bot, ArrowRight } from 'lucide-react';

export default function CodeGraphSlide2() {
  const pipeline = [
    { icon: FolderTree, title: '你的 Repo', desc: '任意規模、多語言混合', tint: 'text-slate-300' },
    { icon: Binary, title: 'tree-sitter 解析', desc: '從 AST 抽出符號與關係', tint: 'text-cyan-300' },
    { icon: Database, title: '本地 SQLite 圖譜', desc: '節點＋邊＋全文索引', tint: 'text-violet-300' },
    { icon: Plug, title: 'MCP Server', desc: '把圖譜開放成工具', tint: 'text-amber-300' },
    { icon: Bot, title: '編碼代理', desc: 'Claude Code / Cursor / Codex…', tint: 'text-emerald-300' },
  ];

  return (
    <CgSlideShell
      chapter="ONE-PAGE DEFINITION"
      accent="cyan"
      pageLabel="02"
      title={<>一頁講完：CodeGraph 是什麼</>}
      subtitle={<>它不是模型、不是外掛編輯器、也不是雲端服務。它是一個<span className="text-slate-100 font-bold">跑在你本機的索引器</span>，把程式碼變成 AI 查得動的結構化資料。</>}
      footer="定位：不取代長 context 或 grep，而是幫代理決定「哪些東西值得進入 context」。"
    >
      <div className="flex items-center justify-between gap-2 mb-7">
        {pipeline.map((step, i) => (
          <div key={step.title} className="flex items-center gap-2 flex-1">
            <div className="flex-1 bg-slate-900/70 border border-slate-800 rounded-2xl px-4 py-4 h-[150px] flex flex-col justify-center">
              <step.icon className={`w-6 h-6 mb-2 ${step.tint}`} />
              <div className="text-[15px] font-bold text-white leading-tight">{step.title}</div>
              <div className="text-[12px] text-slate-500 leading-snug mt-1">{step.desc}</div>
            </div>
            {i < pipeline.length - 1 && <ArrowRight className="w-5 h-5 text-slate-700 flex-shrink-0" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        <div className="bg-cyan-400/[0.06] border border-cyan-400/25 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-cyan-300 mb-2">一句話</div>
          <p className="text-[16px] text-slate-200 leading-relaxed">
            預先建好一張<span className="font-bold text-white">程式碼知識圖譜</span>，
            讓代理用「一次查詢」取得原本要翻二十個檔案才拼得出來的答案。
          </p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-2">三個關鍵字</div>
          <ul className="text-[14.5px] text-slate-300 space-y-3 leading-snug">
            <li><span className="font-mono text-cyan-300">pre-indexed</span> — 先建好，不是臨時掃描</li>
            <li><span className="font-mono text-violet-300">local-first</span> — 無 API key、無上傳</li>
            <li><span className="font-mono text-amber-300">deterministic</span> — 由 AST 推導，不靠 LLM 摘要</li>
          </ul>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 font-mono flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-2 font-sans">上手只有兩步</div>
          <div className="text-[13px] leading-relaxed">
            <div className="text-slate-500">$ <span className="text-emerald-300">codegraph install</span></div>
            <div className="text-slate-600 text-[11px] mb-2 pl-3">自動偵測並接上你已安裝的代理</div>
            <div className="text-slate-500">$ <span className="text-emerald-300">codegraph init</span></div>
            <div className="text-slate-600 text-[11px] pl-3">建立專案索引，之後自動同步</div>
          </div>
        </div>
      </div>
    </CgSlideShell>
  );
}
