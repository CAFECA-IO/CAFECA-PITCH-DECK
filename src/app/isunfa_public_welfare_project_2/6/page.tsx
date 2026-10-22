'use client';

import { Cpu, Server, Workflow, Plug, ShieldCheck, Brain, Database } from 'lucide-react';

export default function IsunfaPwp2Slide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Core Technology</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4">
          <Cpu className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-semibold text-blue-600">核心技術規劃</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          三層架構：<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">地端隱私 × 領域模型 × 智能編排</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) 3-Layer Architecture */}
      <div className="z-10 px-16 flex-1 flex flex-col gap-3">

        {/* Info: (20260904 - Luphia) Layer 3: Agentic Platform */}
        <div className="bg-white border border-indigo-200 rounded-2xl shadow-sm px-6 py-4 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-400"></div>
          <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Workflow className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="w-[300px] flex-shrink-0">
            <div className="text-[10px] font-black text-indigo-500 tracking-widest uppercase">Layer 3 · AI 中介平台（MIT 開源）</div>
            <h3 className="text-lg font-bold text-slate-800">Agentic 多代理編排平台</h3>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-2">
            {['人事代理（HR Agent）', '行政代理（Admin Agent）', '帳務代理（Ledger Agent）', '影響力代理（Impact Agent）'].map((t) => (
              <div key={t} className="bg-indigo-50/60 border border-indigo-100 rounded-lg px-3 py-2 text-[11px] font-bold text-indigo-700 text-center leading-tight">{t}</div>
            ))}
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Layer 2: FAITH Model */}
        <div className="bg-white border border-blue-200 rounded-2xl shadow-sm px-6 py-4 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-400"></div>
          <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-blue-600" />
          </div>
          <div className="w-[300px] flex-shrink-0">
            <div className="text-[10px] font-black text-blue-500 tracking-widest uppercase">Layer 2 · 領域型 AI 模型（MIT 開源）</div>
            <h3 className="text-lg font-bold text-slate-800">FAITH 會計 × 社福雙專業模型</h3>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-2">
            {['非營利會計 / 公益勸募法遵微調', '社福與勞動人事法規 RAG', 'ESG 影響力報告結構化生成', '憑證、文件與資產影像解析'].map((t) => (
              <div key={t} className="bg-blue-50/60 border border-blue-100 rounded-lg px-3 py-2 text-[11px] font-bold text-blue-700 text-center leading-tight">{t}</div>
            ))}
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Layer 1: On-Prem */}
        <div className="bg-white border border-teal-200 rounded-2xl shadow-sm px-6 py-4 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-teal-400"></div>
          <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <Server className="w-5 h-5 text-teal-600" />
          </div>
          <div className="w-[300px] flex-shrink-0">
            <div className="text-[10px] font-black text-teal-600 tracking-widest uppercase">Layer 1 · 地端部署層（雲地混合）</div>
            <h3 className="text-lg font-bold text-slate-800">敏感資料不出機構</h3>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-2">
            {['場域端推理節點（設備自籌）', '人事薪資與財務資料地端加密', '去識別化閘道（回流訓練）', '雲端僅承載非敏感行政負載'].map((t) => (
              <div key={t} className="bg-teal-50/60 border border-teal-100 rounded-lg px-3 py-2 text-[11px] font-bold text-teal-700 text-center leading-tight">{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom: Integration & Security */}
      <div className="z-10 px-16 py-6 grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <Plug className="w-4 h-4 text-indigo-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug"><span className="font-bold text-slate-800">標準化介接</span>：API / MCP 雙介面，與 iSunFA 帳務核心及社福資訊系統無縫整合</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <Database className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug"><span className="font-bold text-slate-800">模型基礎</span>：以合規開源基礎模型微調（不使用中資背景模型），訓練語料逾 20M Tokens</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-teal-500 flex-shrink-0" />
          <p className="text-[11.5px] text-slate-600 leading-snug"><span className="font-bold text-slate-800">人審機制</span>：AI 只產草稿，帳務由會計、人事與對外報告由主管最終簽核（Human-in-the-loop）</p>
        </div>
      </div>

    </div>
  );
}
