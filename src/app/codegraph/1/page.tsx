'use client';

import { Network, Cpu, ShieldCheck, GitBranch } from 'lucide-react';

export default function CodeGraphSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-[#080b12] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      {/* Info: (20260914 - Luphia) 背景光暈與格線 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[760px] h-[760px] rounded-full bg-cyan-500/15 blur-[170px]" />
        <div className="absolute -right-48 bottom-[-220px] w-[760px] h-[760px] rounded-full bg-violet-600/15 blur-[180px]" />
      </div>

      {/* Info: (20260914 - Luphia) 右側裝飾用的圖譜 */}
      <svg className="absolute right-[-40px] top-[70px] z-0 opacity-70" width="560" height="560" viewBox="0 0 560 560" aria-hidden="true">
        <g stroke="rgba(103,232,249,0.25)" strokeWidth="1.2" fill="none">
          <path d="M280 90 L150 200 M280 90 L410 190 M150 200 L120 360 M410 190 L450 350 M150 200 L280 300 M410 190 L280 300 M280 300 L230 450 M280 300 L360 460 M120 360 L230 450 M450 350 L360 460" />
        </g>
        {[
          [280, 90, 9],
          [150, 200, 7],
          [410, 190, 7],
          [280, 300, 11],
          [120, 360, 6],
          [450, 350, 6],
          [230, 450, 7],
          [360, 460, 7],
        ].map(([cx, cy, r]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r={r + 8} fill="rgba(103,232,249,0.06)" />
            <circle cx={cx} cy={cy} r={r} fill="#0b1220" stroke="rgba(103,232,249,0.65)" strokeWidth="1.6" />
          </g>
        ))}
      </svg>

      {/* Info: (20260914 - Luphia) 頂部標記 */}
      <div className="z-10 flex items-center justify-between px-16 pt-11">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Network className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <div className="text-[15px] font-black tracking-tight text-white">CodeGraph</div>
            <div className="text-[11px] font-mono tracking-[0.18em] text-slate-500">CODE KNOWLEDGE GRAPH</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-300 tracking-wider">技術導入評估簡報 · 2026.09</span>
        </div>
      </div>

      {/* Info: (20260914 - Luphia) 主標題 */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16 max-w-[880px]">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold tracking-widest">100% 本地執行</span>
          <span className="px-3 py-1 rounded-md bg-violet-400/10 border border-violet-400/30 text-violet-300 text-[11px] font-bold tracking-widest">MIT 開源</span>
          <span className="px-3 py-1 rounded-md bg-slate-400/10 border border-slate-500/40 text-slate-300 text-[11px] font-bold tracking-widest">MCP 介面</span>
        </div>

        <h1 className="text-[54px] font-black tracking-tight leading-[1.14] text-white">
          讓 AI 別再<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">逐檔翻書</span>
          <br />
          <span className="text-slate-300 text-[38px]">CodeGraph：程式碼知識圖譜，代理的導航層</span>
        </h1>

        <p className="text-[17px] text-slate-400 leading-relaxed border-l-2 border-cyan-400 pl-6 mt-8">
          把整個 repo 先解析成一張<span className="text-slate-100 font-bold">可查詢的符號與呼叫關係圖</span>，
          存在本機 SQLite，透過 MCP 交給編碼代理。
          <br />
          代理不再靠一次次 grep 與讀檔拼湊全貌——<span className="text-cyan-300 font-bold">它直接查圖。</span>
        </p>
      </div>

      {/* Info: (20260914 - Luphia) 底部資訊列 */}
      <div className="z-10 grid grid-cols-3 gap-4 px-16 pb-10">
        {[
          { icon: Cpu, label: '解析引擎', value: 'tree-sitter × 20+ 語言', note: '從 AST 決定式抽取，非 LLM 摘要' },
          { icon: GitBranch, label: '圖譜內容', value: 'symbol / call / import / route', note: '含跨語言橋接與框架路由' },
          { icon: ShieldCheck, label: '隱私邊界', value: '零外部 API、零雲端', note: '程式碼不離開你的機器' },
        ].map((item) => (
          <div key={item.label} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl px-5 py-3.5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-cyan-300" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-0.5">{item.label}</div>
              <div className="text-[13px] font-bold text-white truncate">{item.value}</div>
              <div className="text-[11px] text-slate-500 truncate">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
