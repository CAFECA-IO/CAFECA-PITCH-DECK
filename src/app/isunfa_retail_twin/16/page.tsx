'use client';

import { Network, Bot, GitCompareArrows, CheckCircle2 } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide16() {
  const nodes = [
    { x: 6, y: 100, w: 70, h: 28, label: '新增車站', fill: '#312e81', stroke: '#818cf8' },
    { x: 102, y: 44, w: 70, h: 28, label: '步行可及性', fill: '#0f2f3a', stroke: '#22d3ee' },
    { x: 102, y: 156, w: 70, h: 28, label: '提袋負擔', fill: '#0f2f3a', stroke: '#22d3ee' },
    { x: 198, y: 44, w: 74, h: 28, label: '進店人次', fill: '#0d3226', stroke: '#34d399' },
    { x: 198, y: 156, w: 74, h: 28, label: '平均客單價', fill: '#3a1f13', stroke: '#fbbf24' },
    { x: 108, y: 208, w: 106, h: 26, label: '營收 × 品類結構', fill: '#1f2937', stroke: '#cbd5e1' },
  ];

  const edges = [
    { x1: 76, y1: 110, x2: 100, y2: 62, sign: '＋', sx: 76, sy: 78 },
    { x1: 76, y1: 118, x2: 100, y2: 166, sign: '＋', sx: 76, sy: 156 },
    { x1: 172, y1: 58, x2: 196, y2: 58, sign: '＋', sx: 176, sy: 50 },
    { x1: 172, y1: 170, x2: 196, y2: 170, sign: '−', sx: 176, sy: 163 },
    { x1: 228, y1: 72, x2: 196, y2: 206, sign: '', sx: 0, sy: 0 },
    { x1: 232, y1: 184, x2: 206, y2: 206, sign: '', sx: 0, sy: 0 },
  ];

  const agentTraits = [
    { k: '人物誌', v: '依第 12 頁六種分群比例抽樣' },
    { k: '預算', v: '各群客單價分佈隨機抽樣' },
    { k: '時間耐心', v: '排隊忍受上限 2–9 分鐘' },
    { k: '動線偏好', v: '目標導向 / 巡遊型 / 促銷驅動' },
    { k: '提袋能力', v: '步行、機車、汽車三種載具的提袋上限' },
    { k: '模擬粒度', v: '每步 5 秒，日均 2,760 個代理人' },
  ];

  const outputs = ['進店人次與時段分佈', '平均客單價與品類結構', '尖峰人力與收銀台需求', '毛利與坪效變化', '95% 信賴區間'];

  return (
    <TwinSlideShell
      chapter="LAYER 3 · 模擬引擎"
      chapterColor="text-indigo-400"
      chapterDot="bg-indigo-400"
      pageLabel="16 / 22"
      compact
      title={<>情境推理怎麼算：<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">因果圖 ＋ 代理人模擬 ＋ 反事實</span></>}
      subtitle="「如果…會怎樣」不是外插趨勢線就能回答的問題。相關性只能預測，因果結構才能承受介入。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="grid grid-cols-3 gap-4 flex-1">

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <Network className="w-4 h-4 text-indigo-400" />
              <span className="text-[14px] font-black text-white">① 因果圖 DAG</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug mb-1">
              先畫出機制，才知道介入哪個節點會傳導到哪裡。算的是 do(X)，不是 P(Y|X)。
            </p>
            <div className="flex-1 flex items-center justify-center">
              <svg width="286" height="244" viewBox="0 0 286 244">
                {edges.map((edge, index) => (
                  <g key={`edge-${index}`}>
                    <line x1={edge.x1} y1={edge.y1} x2={edge.x2} y2={edge.y2} stroke="rgba(148,163,184,0.5)" strokeWidth="1.2" markerEnd="url(#twinArrow)" />
                    {edge.sign && (
                      <text x={edge.sx} y={edge.sy} fill={edge.sign === '−' ? '#fb7185' : '#34d399'} fontSize="11" fontWeight="bold">{edge.sign}</text>
                    )}
                  </g>
                ))}
                <defs>
                  <marker id="twinArrow" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L6,3 z" fill="rgba(148,163,184,0.7)" />
                  </marker>
                </defs>
                {nodes.map((node) => (
                  <g key={node.label}>
                    <rect x={node.x} y={node.y} width={node.w} height={node.h} rx="6" fill={node.fill} stroke={node.stroke} strokeWidth="1.2" />
                    <text x={node.x + node.w / 2} y={node.y + node.h / 2 + 4} fill="#e2e8f0" fontSize="10.5" textAnchor="middle">{node.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span className="text-[14px] font-black text-white">② 代理人模擬 ABM</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug mb-3">
              把第二層認出的六種人變成有預算、有耐心、有動線偏好的代理人，讓他們在孿生賣場裡真的走一遍。
            </p>
            <div className="space-y-[7px] flex-1">
              {agentTraits.map((trait) => (
                <div key={trait.k} className="flex gap-2.5 items-start">
                  <span className="text-[11px] font-bold text-cyan-300 w-[58px] flex-shrink-0">{trait.k}</span>
                  <span className="text-[11px] text-slate-400 leading-snug">{trait.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2.5 border-t border-white/10 flex justify-between text-[11px]">
              <span className="text-slate-500">單次 30 天情境</span>
              <span className="font-mono font-bold text-cyan-300">4.2 分鐘算完</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <GitCompareArrows className="w-4 h-4 text-emerald-400" />
              <span className="text-[14px] font-black text-white">③ 反事實比較</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug mb-3">
              同一批代理人、同一組隨機種子，分別放進「有車站」與「沒車站」兩個世界，比較的是差額而不是絕對值。
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="rounded-lg border border-slate-500/30 bg-white/[0.04] px-2.5 py-2 text-center">
                <div className="text-[10px] text-slate-500 mb-1">世界 A</div>
                <div className="text-[11.5px] font-bold text-slate-300">維持現狀</div>
              </div>
              <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/[0.08] px-2.5 py-2 text-center">
                <div className="text-[10px] text-slate-500 mb-1">世界 B</div>
                <div className="text-[11.5px] font-bold text-emerald-300">施加介入</div>
              </div>
            </div>

            <div className="text-[10.5px] text-slate-500 mb-1.5">每次模擬輸出</div>
            <ul className="space-y-[5px] flex-1">
              {outputs.map((output) => (
                <li key={output} className="flex gap-2 text-[11px] text-slate-300 leading-snug">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-[5px] flex-shrink-0" />
                  <span>{output}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] px-5 py-3.5 flex items-center gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-[13px] font-black text-white">模型怎麼驗證</span>
          </div>
          <p className="text-[12px] text-slate-300 leading-snug flex-1">
            以 18 個月歷史資料回測，並用 2024 年環狀輕軌成圓通車前後作為自然實驗校準因果係數。任何情境輸出一律附信賴區間，不給單一數字。
          </p>
          <div className="flex gap-5 flex-shrink-0">
            {[
              { v: '6.8%', k: '客流 MAPE' },
              { v: '8.4%', k: '營收 MAPE' },
              { v: '82%', k: '品類 Top-20 命中' },
            ].map((metric) => (
              <div key={metric.k} className="text-center">
                <div className="text-[19px] font-black font-mono text-emerald-300 leading-none">{metric.v}</div>
                <div className="text-[9.5px] text-slate-500 mt-1">{metric.k}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
