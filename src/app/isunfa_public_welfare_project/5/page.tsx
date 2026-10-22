'use client';

import { Factory, Cloud, ScanSearch, Recycle, Leaf, Database, Github, ArrowDown } from 'lucide-react';

export default function IsunfaPwpSlide5() {
  const agents = [
    {
      id: 'agent-dpp',
      name: 'AI 履歷解析 Agent',
      en: 'Passport Parser',
      icon: ScanSearch,
      color: 'orange',
      desc: '解析材質單、BOM 表、能源單據與 XRF 光譜報告，自動生成標準化 DPP 欄位。',
    },
    {
      id: 'agent-match',
      name: '零廢副產物媒合 Agent',
      en: 'Circular Matcher',
      icon: Recycle,
      color: 'emerald',
      desc: '監測物料流向，依品質等級與地理距離推薦最佳資源循環路徑與買方。',
    },
    {
      id: 'agent-carbon',
      name: '綠色合規與碳計算 Agent',
      en: 'Compliance & CFP',
      icon: Leaf,
      color: 'blue',
      desc: '對照國際排放係數庫計算 Scope 3 減碳量，輸出符合 CBAM / ESPR 之合規文件。',
    },
  ];

  const colorMap: { [key: string]: { border: string; bg: string; text: string; dot: string } } = {
    orange: { border: 'border-orange-300', bg: 'bg-orange-50', text: 'text-orange-600', dot: 'bg-orange-400' },
    emerald: { border: 'border-emerald-300', bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-400' },
    blue: { border: 'border-blue-300', bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-400' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 -top-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[600px] h-[600px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Core Architecture</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          核心技術架構：{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">雲端 AI DPP 與零廢中介平台</span>
        </h2>
        <p className="text-sm text-slate-500 mt-2 font-medium">
          以 Agentic AI 多代理架構建構之領域型 AI 中介平台，核心物件依規定移轉數位產業署並以 Apache 2.0 開源釋出。
        </p>
      </div>

      {/* Info: (20260819 - Luphia) Architecture Diagram */}
      <div className="z-10 px-16 flex-1 flex flex-col justify-center gap-3">

        {/* Info: (20260819 - Luphia) Layer 1 - Field */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
              <Factory className="w-5 h-5 text-slate-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Layer 1 · 場域端</div>
              <div className="text-base font-bold text-slate-800">300+ 家金屬加工、扣件、模具、鑄造與表面處理工廠</div>
            </div>
          </div>
          <div className="flex gap-2">
            {['材質單 / BOM', 'XRF 光譜數據', '能源與水電單據', '廢料產出紀錄'].map((t) => (
              <span key={t} className="text-[11px] font-mono px-2.5 py-1 bg-white border border-slate-200 rounded-md text-slate-500">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <ArrowDown className="w-4 h-4" />
          <span className="text-[11px] font-mono tracking-widest">API / MCP · 批次上傳 · 去識別化</span>
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Info: (20260819 - Luphia) Layer 2 - Platform */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl px-6 py-5 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
              <Cloud className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Layer 2 · AI 中介平台（開源核心）</div>
              <div className="text-base font-bold text-white">金屬材料與永續法規領域型 LLM + RAG · Agentic Orchestration</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {agents.map((a) => {
              const c = colorMap[a.color];
              const Icon = a.icon;
              return (
                <div key={a.id} className={`bg-white rounded-xl p-4 border-t-4 ${c.border} shadow-md`}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-9 h-9 ${c.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-800 leading-tight">{a.name}</div>
                      <div className={`text-[9px] font-mono ${c.text} tracking-wider uppercase`}>{a.en}</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Info: (20260819 - Luphia) Layer 3 - Deliverable */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-indigo-200 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Database className="w-5 h-5 text-indigo-500" />
            </div>
            <div>
              <div className="text-[10px] font-black text-indigo-500 tracking-widest uppercase">Layer 3 · 資料治理</div>
              <div className="text-sm font-bold text-slate-800">金屬循環資材與 DPP 標籤資料集</div>
              <div className="text-[11px] text-slate-500">去個人化處理 · 標註規則 · 版本管理 · 品質檢核</div>
            </div>
          </div>
          <div className="bg-white border border-emerald-200 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
            <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Github className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-[10px] font-black text-emerald-600 tracking-widest uppercase">Layer 3 · 成果交付</div>
              <div className="text-sm font-bold text-slate-800">核心物件著作財產權移轉數位產業署</div>
              <div className="text-[11px] text-slate-500">Apache 2.0 / MIT 開源 · Model Card · SBOM · 資安檢測報告</div>
            </div>
          </div>
        </div>

      </div>

      <div className="h-6"></div>

    </div>
  );
}
