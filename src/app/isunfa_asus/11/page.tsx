'use client';

import { Bot, Network, FileCheck2, GitBranch, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function IsunfaAsusSlide11() {
  const caps = [
    { icon: Network, title: '組織數據同步', desc: '自動帶入企業組織架構與人員層級，依組織階層自動設定簽核流程。' },
    { icon: FileCheck2, title: 'AI 異常單據判定', desc: 'FAITH 自動判定能耗與碳排異常單據並推送待辦，減少人工審閱。' },
    { icon: GitBranch, title: '自動簽核權限', desc: '依組織關係即時判定簽核權限與代理，行政設定自動化、維護便捷。' },
    { icon: GraduationCap, title: '學習進度閉環', desc: '自動追蹤員工法遵與碳管理課程完成狀況，達成培育管理閉環。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-11 pb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">05</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Integration Highlight</span>
          </div>
          <span className="text-xs font-bold text-slate-300">整合亮點 2 / 2</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-3">AI 碳會計模型嵌入 EIP</h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">FAITH 模型化身 EIP 應用，讓組織架構、簽核與碳盤查自動協同運作</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-10">
        {/* Left concept */}
        <div className="col-span-5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-lg flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur-sm">
            <Bot className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-black mb-1">iSunFA · FAITH 模型</h3>
          <p className="text-[13px] text-orange-50 leading-relaxed mb-5">整合法規與工程知識的 AI 核心，作為 EIP 上的碳會計智能應用。</p>

          <div className="space-y-2.5 mt-auto">
            {['讀取 EIP 組織架構', 'AI 判定異常並套用簽核', '碳盤查數據回寫儀表板'].map((t, i) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">{i + 1}</div>
                <span className="text-sm font-semibold">{t}</span>
                {i < 2 && <ArrowRight className="w-3.5 h-3.5 text-orange-200 ml-auto" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right capabilities */}
        <div className="col-span-7 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 flex-1">
            {caps.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5 border border-orange-100">
                  <c.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1.5">{c.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl px-4 py-3 border border-slate-200 shadow-sm flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <p className="text-[13px] font-medium text-slate-600">效益：行政設定自動化、簽核零延遲，並讓碳管理成為 EIP 日常工作流的一部分。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
