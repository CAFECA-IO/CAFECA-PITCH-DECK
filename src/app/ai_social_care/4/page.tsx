'use client';

import { Cpu, Database, GitBranch, Plug, ShieldCheck, GitFork, UserCheck, Target } from 'lucide-react';
import { AscDataPipeline } from '@/components/slide/asc_art';

export default function AiSocialCareSlide4() {
  const datasets = [
    { id: 'd1', n: '非營利會計語料', s: '會計準則、勸募條例、財報與核銷範本' },
    { id: 'd2', n: '社福與人事法規庫', s: '社福法規、勞動法令、申報規範（RAG 索引）' },
    { id: 'd3', n: '行政文書範本語料', s: '公文、補助申請、ESG 報告結構（基金會授權）' },
    { id: 'd4', n: '去識別化流程數據', s: '僅取格式與流程樣態，個資一律去除' },
  ];

  const methods = [
    { id: 'me1', icon: GitBranch, t: 'Fine-tuning', d: '租用 H100 雲端算力進行領域指令微調' },
    { id: 'me2', icon: Database, t: 'RAG', d: '法規即時檢索，條文更新不必重訓模型' },
    { id: 'me3', icon: Cpu, t: 'Orchestration', d: '四代理人任務拆解、工具調用與結果彙整' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">03 · 核心技術規劃與技術可行性</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-16 pb-3">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-orange-500 flex-shrink-0" />
          費思 FAITH：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-500">已商轉的引擎，不是從零開始</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Main Grid */}
      <div className="z-10 px-16 grid grid-cols-2 gap-5 flex-1 min-h-0">

        {/* Info: (20261005 - Luphia) Left: Data */}
        <div className="bg-white border border-slate-200 rounded-3xl px-6 py-4 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-orange-500" />
              <span className="text-[14px] font-black text-slate-800">訓練資料規劃與治理</span>
            </div>
            <span className="text-[11px] font-mono font-black text-white bg-orange-500 rounded-full px-3 py-1">逾 20M Tokens</span>
          </div>

          <div className="space-y-1.5 mb-3">
            {datasets.map((d) => (
              <div key={d.id} className="bg-slate-50 rounded-xl px-3.5 py-2">
                <div className="text-[12px] font-bold text-slate-800 leading-tight">{d.n}</div>
                <div className="text-[10.5px] text-slate-500 leading-snug">{d.s}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-2.5 mt-auto">
            <p className="text-[11.5px] text-slate-600 leading-relaxed">
              機構端文書範本經聯合提案單位書面授權；
              <span className="font-bold text-rose-600">服務對象之可識別個資一律不納入訓練</span>，已明訂於 MOU 第六條。
            </p>
          </div>
        </div>

        {/* Info: (20261005 - Luphia) Right: Methods + Serving */}
        <div className="flex flex-col gap-3">
          <div className="bg-white border border-slate-200 rounded-3xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
              <GitBranch className="w-4 h-4 text-indigo-500" />
              <span className="text-[14px] font-black text-slate-800">開發與優化作法</span>
              <span className="ml-auto text-[10px] font-black text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full px-2.5 py-1">
                基底模型　Muse Glimmer 30B
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {methods.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id} className="bg-indigo-50/60 border border-indigo-100 rounded-xl px-3 py-2.5">
                    <Icon className="w-4 h-4 text-indigo-600 mb-1.5" />
                    <div className="text-[12px] font-black text-slate-800 leading-tight">{m.t}</div>
                    <div className="text-[10px] text-slate-500 leading-snug mt-0.5">{m.d}</div>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-slate-100 pt-2.5 space-y-1.5">
              <div className="flex gap-2">
                <UserCheck className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-snug">
                  <span className="font-bold text-slate-800">Human-in-the-loop</span>：AI 僅產草稿並標註信心值與依據來源，
                  帳務須會計簽核、對外報告須主管簽核——<span className="font-bold text-rose-600">輔助專業，永不取代專業判斷</span>。
                </p>
              </div>
              <div className="flex gap-2">
                <Target className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 leading-snug">
                  <span className="font-bold text-slate-800">評測門檻</span>：分錄正確率、法遵引用正確率、文書可用率，
                  每次迭代須通過門檻方可釋出，結果揭露於 Model Card。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Plug className="w-4 h-4 text-emerald-600" />
              <span className="text-[14px] font-black text-slate-800">系統整合與服務化</span>
            </div>
            <p className="text-[11.5px] text-slate-600 leading-relaxed">
              中介平台對外提供 <span className="font-bold text-slate-800">標準化 API 與 MCP 介面</span>，
              其他資服業者不必理解模型內部，即可直接調用四大代理人能力開發垂直應用——
              這是「導入 5 家資服業者」KPI 能夠達成的技術前提。
            </p>
          </div>

        </div>
      </div>

      {/* Info: (20261005 - Luphia) FAITH 訓練管線（整頁寬） */}
      <div className="z-10 px-16 pt-3">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-2 shadow-sm">
          <AscDataPipeline className="w-full h-[88px]" />
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 py-4">
        <div className="bg-slate-900 rounded-2xl px-7 py-3 flex items-center gap-7 shadow-lg">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <GitFork className="w-5 h-5 text-orange-400" />
            <span className="text-[13px] font-black text-white">MIT 授權全數開源</span>
          </div>
          <div className="text-[11.5px] text-slate-300 leading-snug border-l border-slate-700 pl-7">
            模型權重、範例程式、資料集與中介平台<span className="font-bold text-white">全數開源釋出</span>，著作財產權移轉數位產業署；
            提交完整 <span className="font-bold text-white">Model Card 與 SBOM</span>，並委由第三方機構執行源碼掃描、弱點掃描與滲透測試。
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0 border-l border-slate-700 pl-7 ml-auto">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-[11.5px] text-slate-300 leading-snug">基底模型採 Meta <span className="font-bold text-white">Muse Glimmer 30B（Apache 2.0）</span><br />非中資來源，授權相容於核心物件移轉與 MIT 釋出</span>
          </div>
        </div>
      </div>

    </div>
  );
}
