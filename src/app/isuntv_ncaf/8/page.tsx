'use client';

import { Blocks, BookOpenText, ShieldCheck, GitFork } from 'lucide-react';

export default function IsuntvNcafSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260823 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/3 -top-1/4 w-[700px] h-[700px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-1/4 bottom-0 w-[600px] h-[600px] bg-violet-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-14 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse"></span>
        <span className="text-sm font-bold text-slate-600 tracking-widest">開源核心</span>
      </div>

      <div className="z-10 px-16 pt-24 pb-8">
        <h2 className="text-[44px] font-black leading-tight text-slate-800">
          技術核心：<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-600">交付政府、開源全民的公共財</span>
        </h2>
      </div>

      <div className="z-10 px-16 flex items-stretch gap-5 flex-1">

        <div className="flex-1 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-7 flex flex-col shadow-lg text-white">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
            <Blocks className="w-7 h-7 text-amber-300" />
          </div>
          <h3 className="text-[24px] font-black mb-3">AI 影音創作中介平台</h3>
          <div className="space-y-2.5 text-[15px] text-slate-300 leading-relaxed">
            <p>· <span className="font-bold text-white">Agentic 編排層</span>：腳本→分鏡→生成→混音的多代理協作流程</p>
            <p>· <span className="font-bold text-white">標準化介面</span>：API 與 MCP 介接，任何資服業者都能接入開發自己的應用</p>
            <p>· <span className="font-bold text-white">模組化架構</span>：生成引擎可抽換，不被單一模型供應商綁定</p>
          </div>
        </div>

        <div className="flex-1 bg-gradient-to-br from-violet-700 to-violet-900 rounded-3xl p-7 flex flex-col shadow-lg text-white">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-4">
            <BookOpenText className="w-7 h-7 text-amber-300" />
          </div>
          <h3 className="text-[24px] font-black mb-3">藝文領域評論模型</h3>
          <div className="space-y-2.5 text-[15px] text-violet-200 leading-relaxed">
            <p>· 以<span className="font-bold text-white">合法授權的藝文評論語料</span>微調，來源與授權全程可稽核</p>
            <p>· 支援評論草稿輔助、背景考據、多語轉譯</p>
            <p>· 附完整 <span className="font-bold text-white">Model Card</span>：用途、限制、風險全揭露</p>
          </div>
        </div>

      </div>

      <div className="z-10 px-16 py-8 grid grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
          <GitFork className="w-6 h-6 text-emerald-500 flex-shrink-0" />
          <p className="text-[14px] text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">開源義務由 CAFECA 承擔：</span>成果依規定移轉數產署並以開源授權（Apache 2.0 / MIT）釋出，附 SBOM 軟體物料清單。
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
          <p className="text-[14px] text-slate-600 leading-relaxed">
            <span className="font-bold text-slate-800">資安與合規由 CAFECA 承擔：</span>第三方資安檢測、OWASP 弱點掃描、生成式 AI 指引遵循——國藝會零技術義務。
          </p>
        </div>
      </div>

    </div>
  );
}
