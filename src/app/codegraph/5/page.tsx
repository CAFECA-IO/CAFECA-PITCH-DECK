'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Layers, Binary, Database, Plug } from 'lucide-react';

export default function CodeGraphSlide5() {
  const layers = [
    {
      no: 'L1',
      icon: Binary,
      name: '解析層 · Parsing',
      accent: 'text-cyan-300',
      ring: 'border-cyan-400/30',
      points: [
        'tree-sitter 原生解析 20+ 語言，含 TS/JS、Python、Go、Rust、Java、C#、Swift、Kotlin、Solidity…',
        '語言由副檔名自動判定，不需逐語言設定',
        '內建 Rust kernel 加速，單檔失敗自動降級不中斷',
      ],
    },
    {
      no: 'L2',
      icon: Database,
      name: '圖譜層 · Graph Store',
      accent: 'text-violet-300',
      ring: 'border-violet-400/30',
      points: [
        '本機 SQLite（含 FTS5 全文索引），檔案／符號／邊三類資料',
        '辨識 17 種 Web 框架的路由慣例（Django、Express、Rails、Spring…）',
        '可處理跨語言橋接：Swift ↔ Objective-C、React Native bridge / TurboModules',
      ],
    },
    {
      no: 'L3',
      icon: Plug,
      name: '介面層 · MCP Server',
      accent: 'text-amber-300',
      ring: 'border-amber-400/30',
      points: [
        '以 MCP 標準把圖譜開放成工具，代理端零改動',
        '自動偵測並設定：Claude Code、Cursor、Codex CLI、Gemini CLI、opencode、Kiro、Antigravity、GitHub Copilot',
        '純本地行程，無 API key、無雲端相依',
      ],
    },
  ];

  return (
    <CgSlideShell
      chapter="ACT 2 · HOW IT WORKS"
      accent="cyan"
      pageLabel="05"
      title={<>三層架構：解析、圖譜、介面</>}
      subtitle={<>每一層都刻意做得「無聊而確定」——決定式抽取、本地儲存、標準介面。愈無聊，愈可靠。</>}
      footer="設計取捨：寧可放棄 LLM 摘要帶來的彈性，換取可重現、可稽核、零成本的結構事實。"
    >
      <div className="flex flex-col gap-3.5 flex-1">
        {layers.map((l) => (
          <div key={l.no} className={`bg-slate-900/70 border ${l.ring} rounded-2xl px-6 py-4 flex items-start gap-5 flex-1`}>
            <div className="flex flex-col items-center gap-2 w-[92px] flex-shrink-0 pt-1">
              <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center">
                <l.icon className={`w-5 h-5 ${l.accent}`} />
              </div>
              <span className={`text-[12px] font-mono font-bold tracking-widest ${l.accent}`}>{l.no}</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[18px] font-bold text-white mb-2">{l.name}</div>
              <ul className="grid grid-cols-1 gap-1 text-[13.5px] text-slate-400 leading-snug">
                {l.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 text-[13px] text-slate-500">
        <Layers className="w-4 h-4 text-slate-600 flex-shrink-0" />
        <span>三層都在同一台機器上：程式碼、索引、查詢結果都不離開本機，符合金融／醫療／政府專案的落地限制。</span>
      </div>
    </CgSlideShell>
  );
}
