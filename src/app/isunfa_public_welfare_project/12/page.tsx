'use client';

import { Wallet, Cpu, AppWindow, Network } from 'lucide-react';

// Info: (20260819 - Luphia) Same validated 3-slot palette as the slide 11 Gantt — one hue per workstream, deck-wide
const budget = [
  {
    id: 'b1',
    no: '一',
    icon: Cpu,
    hex: '#6366f1',
    tint: 'bg-indigo-50',
    ink: 'text-indigo-600',
    ring: 'border-indigo-200',
    title: 'AI 模型訓練或 AI 中介平台',
    amount: '1,200',
    pct: 40,
    note: '建議占提案總經費約 40%',
    items: [
      'AI 模型／中介平台開發與訓練人力',
      '訓練資料蒐集與處理、標註作業',
      '模型調校與優化（Fine-tuning / RAG）',
      'Model Card、SBOM 與開源釋出作業',
      '資訊安全檢驗費用',
    ],
  },
  {
    id: 'b2',
    no: '二',
    icon: AppWindow,
    hex: '#f97316',
    tint: 'bg-orange-50',
    ink: 'text-orange-600',
    ring: 'border-orange-200',
    title: 'AI 應用系統開發',
    amount: '600',
    pct: 20,
    note: '建議占提案總經費約 20%',
    items: [
      'DPP 生成器與媒合系統開發人力',
      '系統整合與 API／MCP 介接作業',
      '前後端開發與使用者介面設計',
      '測試驗證與部署作業',
      '應用系統資訊安全檢驗',
    ],
  },
  {
    id: 'b3',
    no: '三',
    icon: Network,
    hex: '#14b8a6',
    tint: 'bg-teal-50',
    ink: 'text-teal-600',
    ring: 'border-teal-200',
    title: 'AI 生態系場域擴散',
    amount: '1,200',
    pct: 40,
    note: '建議不超過提案總經費 40%',
    items: [
      '場域導入與部署作業',
      '業者媒合與輔導作業（兩家聯合提案單位協同執行）',
      '北中南推廣活動與宣導會辦理',
      '教育訓練與技術文件在地化',
      '後續服務營運與維護',
    ],
  },
];

export default function IsunfaPwpSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-teal-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">Budget Allocation</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[68px] pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[36px] font-black leading-tight text-slate-800">專案預算分配規劃</h2>
          <p className="text-[13px] text-slate-500 mt-1.5 font-medium">依徵案須知附件三之建議比例編列，確保核心技術研發資源之充足性。</p>
        </div>
        <div className="bg-slate-800 rounded-2xl px-7 py-3.5 shadow-lg text-right flex-shrink-0">
          <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-0.5">申請補助總額</div>
          <div className="flex items-baseline gap-2 justify-end">
            <Wallet className="w-5 h-5 text-orange-400" />
            <span className="text-3xl font-black text-white">3,000</span>
            <span className="text-sm text-slate-300 font-bold">萬元</span>
          </div>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) 100% stacked bar — part-to-whole, direct-labelled inside each segment */}
      <div className="z-10 px-16 pb-5">
        <div className="flex w-full h-[52px] rounded-[6px] overflow-hidden bg-slate-50 gap-[2px]">
          {budget.map((b) => (
            <div
              key={b.id}
              className="h-full flex flex-col justify-center px-4"
              style={{ width: `${b.pct}%`, background: b.hex }}
            >
              <div className="text-[11px] font-bold text-white/85 leading-none">預算項目 {b.no} · {b.title}</div>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-lg font-black text-white leading-none">{b.amount} 萬元</span>
                <span className="text-[12px] font-black text-white/80 leading-none">（{b.pct}%）</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Budget Detail Cards */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1 items-center">
        {budget.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.id} className={`bg-white border ${b.ring} rounded-3xl p-7 shadow-sm flex flex-col relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: b.hex }}></div>

              <div className="flex items-center gap-3 mb-3 mt-1">
                <div className={`w-11 h-11 ${b.tint} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${b.ink}`} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 tracking-widest">預算項目 {b.no}</div>
                  <h3 className="text-[15px] font-bold text-slate-800 leading-tight">{b.title}</h3>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 mb-3 pb-3 border-b border-slate-100">{b.note}</div>

              <div className="space-y-2.5">
                {b.items.map((it) => (
                  <div key={it} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                    <span className={`${b.ink} font-bold flex-shrink-0`}>·</span>
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20260819 - Luphia) Bottom Note */}
      <div className="z-10 px-16 py-5">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3.5 shadow-sm">
          <p className="text-[12px] text-slate-600">
            <span className="font-bold text-slate-800">效益成本</span>：平均每家工廠導入成本約
            <span className="font-black text-orange-500"> 4 萬元</span>，遠低於市場委外碳盤查顧問費（30～80 萬元／次），
            公益性與資源使用效率兼具。
          </p>
        </div>
      </div>

    </div>
  );
}
