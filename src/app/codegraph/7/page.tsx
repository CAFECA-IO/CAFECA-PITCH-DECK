'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Compass, Search, PhoneCall, Radar } from 'lucide-react';

export default function CodeGraphSlide7() {
  const tools = [
    { name: 'codegraph_explore', icon: Compass, desc: '主力工具。給它一個問題、符號或檔名，一次回傳相關符號原始碼、彼此的呼叫路徑、以及影響範圍摘要。', main: true },
    { name: 'codegraph_search', icon: Search, desc: '依名稱快速定位符號，取代靠關鍵字碰運氣的 grep。' },
    { name: 'codegraph_callers / callees', icon: PhoneCall, desc: '往上追誰呼叫我、往下追我呼叫誰，含跨檔案與跨語言。' },
    { name: 'codegraph_impact', icon: Radar, desc: '計算變更的 blast radius——動這裡，會波及哪些地方。' },
  ];

  return (
    <CgSlideShell
      chapter="ACT 2 · THE INTERFACE"
      accent="amber"
      pageLabel="07"
      title={<>代理實際看到的，是四個工具</>}
      subtitle={<>其中 <span className="font-mono text-amber-300">codegraph_explore</span> 是主力：官方的設計目標是「幾乎任何問題都用一次呼叫回答完」。</>}
      footer="官方揭露的 benchmark 中，七個 repo 在啟用 CodeGraph 後的檔案讀取次數皆為零——答案在第一次查詢就湊齊了。"
    >
      <div className="grid grid-cols-5 gap-5 flex-1">
        <div className="col-span-3 flex flex-col gap-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl px-5 py-3.5 border flex items-start gap-4 flex-1 ${
                t.main ? 'bg-amber-400/[0.07] border-amber-400/30' : 'bg-slate-900/60 border-slate-800'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                <t.icon className={`w-[18px] h-[18px] ${t.main ? 'text-amber-300' : 'text-slate-400'}`} />
              </div>
              <div className="min-w-0">
                <div className={`text-[14px] font-mono font-bold mb-1 ${t.main ? 'text-amber-200' : 'text-slate-200'}`}>{t.name}</div>
                <div className="text-[13px] text-slate-400 leading-snug">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-[12.5px] leading-relaxed overflow-hidden flex flex-col justify-center">
          <div className="text-[11px] font-sans font-bold tracking-widest text-slate-500 mb-3">一次典型的往返</div>
          <div className="text-slate-500">{'// 代理問'}</div>
          <div className="text-cyan-300 mb-3">codegraph_explore(<br />&nbsp;&nbsp;&quot;結帳失敗時的重試邏輯在哪&quot;<br />)</div>
          <div className="text-slate-500">{'// 一次回傳'}</div>
          <div className="text-slate-300">
            <div>├─ <span className="text-violet-300">retryCharge()</span> <span className="text-slate-600">payment/retry.ts:42</span></div>
            <div>├─ <span className="text-violet-300">createOrder()</span> <span className="text-slate-600">order/create.ts:118</span></div>
            <div>├─ call path: <span className="text-slate-500">route → createOrder → chargeCard → retryCharge</span></div>
            <div>└─ impact: <span className="text-amber-300">7 callers · 3 tests</span></div>
          </div>
          <div className="mt-3 text-emerald-300">→ 讀檔次數：0</div>
        </div>
      </div>
    </CgSlideShell>
  );
}
