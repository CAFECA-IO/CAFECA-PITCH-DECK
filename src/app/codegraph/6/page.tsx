'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';

export default function CodeGraphSlide6() {
  const nodes = [
    { key: 'File', desc: '檔案與其所在模組', color: '#67e8f9' },
    { key: 'Symbol', desc: '函式、類別、型別、常數', color: '#c4b5fd' },
    { key: 'Route', desc: '框架路由端點', color: '#fcd34d' },
  ];

  const edges = [
    { key: 'calls', desc: 'A 呼叫 B（含動態派發的可能路徑）' },
    { key: 'imports', desc: '模組相依方向' },
    { key: 'references', desc: '型別／符號被引用的位置' },
    { key: 'defines', desc: '檔案定義了哪些符號' },
    { key: 'routes-to', desc: 'HTTP 端點對應到哪個處理函式' },
  ];

  return (
    <CgSlideShell
      chapter="ACT 2 · WHAT IS IN THE GRAPH"
      accent="violet"
      pageLabel="06"
      title={<>圖譜裡存的不是文字，是<span className="text-violet-300">關係</span></>}
      subtitle={<>全文檢索只能回答「哪裡出現過這個字」。圖譜能回答「這段程式碼跟誰有關、關係是什麼方向」。</>}
      footer="所有邊都由 AST 推導而來，因此可重現、可解釋，也不會出現模型幻覺出的假關係。"
    >
      <div className="grid grid-cols-5 gap-5 flex-1">

        {/* Info: (20260914 - Luphia) 左：示意圖 */}
        <div className="col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 flex items-center justify-center">
          <svg width="380" height="300" viewBox="0 0 380 300" aria-label="程式碼知識圖譜示意">
            <defs>
              <marker id="cg-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0 L7,3 L0,6 z" fill="rgba(148,163,184,0.7)" />
              </marker>
            </defs>
            <g stroke="rgba(148,163,184,0.45)" strokeWidth="1.4" markerEnd="url(#cg-arrow)" fill="none">
              <line x1="94" y1="60" x2="166" y2="128" />
              <line x1="286" y1="60" x2="214" y2="128" />
              <line x1="190" y1="168" x2="110" y2="228" />
              <line x1="190" y1="168" x2="270" y2="228" />
            </g>

            <g fontFamily="ui-monospace, monospace" fontSize="11" textAnchor="middle">
              <rect x="24" y="38" width="140" height="34" rx="9" fill="#0b1220" stroke="#fcd34d" strokeWidth="1.5" />
              <text x="94" y="60" fill="#fcd34d">POST /api/orders</text>

              <rect x="216" y="38" width="140" height="34" rx="9" fill="#0b1220" stroke="#67e8f9" strokeWidth="1.5" />
              <text x="286" y="60" fill="#67e8f9">checkout.ts</text>

              <rect x="118" y="130" width="144" height="34" rx="9" fill="#0b1220" stroke="#c4b5fd" strokeWidth="2" />
              <text x="190" y="152" fill="#c4b5fd">createOrder()</text>

              <rect x="40" y="230" width="140" height="34" rx="9" fill="#0b1220" stroke="#c4b5fd" strokeWidth="1.5" />
              <text x="110" y="252" fill="#c4b5fd">chargeCard()</text>

              <rect x="200" y="230" width="140" height="34" rx="9" fill="#0b1220" stroke="#c4b5fd" strokeWidth="1.5" />
              <text x="270" y="252" fill="#c4b5fd">writeLedger()</text>
            </g>

            <g fontFamily="ui-sans-serif, system-ui" fontSize="10" fill="rgba(148,163,184,0.8)">
              <text x="112" y="98">routes-to</text>
              <text x="248" y="98">defines</text>
              <text x="112" y="205">calls</text>
              <text x="248" y="205">calls</text>
            </g>
          </svg>
        </div>

        {/* Info: (20260914 - Luphia) 右：節點與邊定義 */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">節點 NODES</div>
            <div className="grid grid-cols-3 gap-3">
              {nodes.map((n) => (
                <div key={n.key} className="rounded-xl bg-slate-950/60 border border-slate-800 px-3 py-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: n.color }} />
                    <span className="text-[14px] font-mono font-bold text-white">{n.key}</span>
                  </div>
                  <div className="text-[12px] text-slate-500 leading-snug">{n.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex-1 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">邊 EDGES · 有方向</div>
            <div className="space-y-2">
              {edges.map((e) => (
                <div key={e.key} className="flex items-center gap-3">
                  <span className="text-[13px] font-mono text-violet-300 w-[104px] flex-shrink-0">{e.key}</span>
                  <span className="text-[13.5px] text-slate-400">{e.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CgSlideShell>
  );
}
