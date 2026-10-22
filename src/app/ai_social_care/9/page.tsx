'use client';

import { Wallet, CalendarRange, Flag } from 'lucide-react';
import { AscBudgetDonut } from '@/components/slide/asc_art';

export default function AiSocialCareSlide9() {
  const budget = [
    {
      id: 'b1', name: 'AI 模型訓練或 AI 中介平台', amt: '1,200 萬', pct: 40, color: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600',
      items: ['直接薪資 433 萬（42 人月）', '管理費用 283 萬', '語料蒐集、去識別化與標註 240 萬', '模型調校（H100 雲端租用）150 萬', '文件、開源與資安檢驗 90 萬'],
    },
    {
      id: 'b2', name: 'AI 應用系統開發', amt: '600 萬', pct: 20, color: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600',
      items: ['直接薪資 211 萬（23 人月）', '管理費用 138 萬', '系統整合與 API／MCP 介接 100 萬', '無障礙設計與使用性測試 60 萬', '測試部署與資安檢驗 80 萬'],
    },
    {
      id: 'b3', name: 'AI 生態系場域擴散', amt: '1,200 萬', pct: 40, color: '#10b981', tint: 'bg-emerald-50', ink: 'text-emerald-600',
      items: ['直接薪資 155 萬（26 人月）', '管理費用 102 萬', '場域導入作業與差旅 403 萬', '機構媒合與輔導 200 萬', '宣導、教育訓練與維運 340 萬'],
    },
  ];

  const phases = [
    { id: 'p1', m: 'M1–M2', t: '需求訪談與語料建置', ms: 'M2　專案工作計畫書', c: '#f97316' },
    { id: 'p2', m: 'M3–M4', t: '模型微調與中介平台開發', ms: 'M4　AI 中介平台 Alpha 版上線', c: '#f43f5e' },
    { id: 'p3', m: 'M5–M6', t: '四大模組開發・資安檢測・場域導入啟動', ms: 'M6　系統測試報告書', c: '#6366f1' },
    { id: 'p4', m: 'M7–M8', t: '場域導入衝刺・開源釋出・模型再訓練', ms: 'M8　成果驗收報告書、FAITH v2.0.0 釋出', c: '#10b981' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">08 · 預算編列與執行期程</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5 flex items-end justify-between">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Wallet className="w-8 h-8 text-orange-500 flex-shrink-0" />
          3,000 萬元，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">40 / 20 / 40</span>
          <AscBudgetDonut className="w-[72px] h-[72px] ml-2" />
        </h2>
        <div className="text-right pb-1">
          <div className="text-[10px] text-slate-400 tracking-widest uppercase">人力成本編列基準</div>
          <div className="text-[12.5px] font-black text-slate-700">服務成本加公費法　直接薪資計價基準（62 中類）</div>
          <div className="text-[10.5px] text-slate-500 mt-0.5">地端設備由本公司自籌，不列入計畫預算</div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Budget Cards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5 mb-6">
        {budget.map((b) => (
          <div key={b.id} className="bg-white border border-slate-200 rounded-3xl px-6 py-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: b.color }}></div>
            <div className="flex items-start justify-between mb-3 mt-1">
              <div className="text-[13.5px] font-black text-slate-800 leading-snug pr-2">{b.name}</div>
              <div className={`text-[11px] font-black ${b.ink} ${b.tint} rounded-full px-2.5 py-1 flex-shrink-0`}>{b.pct}%</div>
            </div>
            <div className="text-[30px] font-black leading-none mb-3" style={{ color: b.color }}>{b.amt}</div>
            <ul className="space-y-1">
              {b.items.map((it) => (
                <li key={it} className="text-[11px] text-slate-500 leading-snug flex gap-1.5">
                  <span className="text-slate-300 flex-shrink-0">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Info: (20261005 - Luphia) Timeline */}
      <div className="z-10 px-16 flex-1">
        <div className="flex items-center gap-2 mb-3">
          <CalendarRange className="w-4 h-4 text-slate-600" />
          <span className="text-[14px] font-black text-slate-800">8 個月執行期程與里程碑交付</span>
        </div>
        <div className="flex gap-3">
          {phases.map((p) => (
            <div key={p.id} className="flex-1">
              <div className="h-2 rounded-full mb-2.5" style={{ background: p.c }}></div>
              <div className="text-[11px] font-mono font-black text-slate-400 tracking-widest mb-1">{p.m}</div>
              <div className="text-[12.5px] font-bold text-slate-700 leading-snug">{p.t}</div>
              <div className="mt-2 flex items-start gap-1.5">
                <Flag className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: p.c }} />
                <span className="text-[10.5px] text-slate-500 leading-snug">{p.ms}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-slate-900 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-lg">
          <Flag className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-[13.5px] text-white font-medium leading-snug">
            <span className="font-black text-orange-400">期程設計的關鍵：</span>
            最後一個月以全部推廣場域回流之營運資料執行模型再訓練，發布
            <span className="font-black text-white"> FAITH v2.0.0</span> 並完成開源釋出——
            交付給貴署的不是訓練室裡的模型，而是<span className="font-black text-white">已經在 100 個真實場域跑過一輪的模型</span>。
          </p>
        </div>
      </div>

    </div>
  );
}
