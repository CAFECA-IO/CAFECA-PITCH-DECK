'use client';

import { LogIn, FileCheck2, CreditCard, GraduationCap, RefreshCw, ArrowRight, Factory } from 'lucide-react';

export default function IsunfaAsusSlide9() {
  const steps = [
    { icon: LogIn, step: '01', title: '登入即進入工作台', desc: '產線經理以 CAFECA 數位身分免密碼登入 EIP，App Launcher 直達 iSunFA 碳會計模組。' },
    { icon: FileCheck2, step: '02', title: 'AI 異常單據自動簽核', desc: 'FAITH 將 AI 判定的能耗／碳排異常單據推送待辦，系統依組織架構自動判定簽核權限。' },
    { icon: CreditCard, step: '03', title: '感應即啟動機台／取件', desc: '同仁以晶片識別證感應啟動特定機台或取件，每筆操作即時上鏈存證。' },
    { icon: GraduationCap, step: '04', title: '培訓未達標自動限縮', desc: '公安／法遵培訓進度未達標，AI 自動提醒並暫時限縮其操作預約權限。' },
    { icon: RefreshCw, step: '05', title: '數據回寫閉環', desc: '簽核、感應與盤查數據回寫，形成可審計的碳管理與資安自動化循環。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-10 pb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">05</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Manufacturing Scenario</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Factory className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold">製造業與工廠管理 · 一日流程</span>
          </div>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-3">落地情境：智慧製造的自動化一日</h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">將 AI 碳盤查、簽核、門禁與培訓，收斂為一條 EIP 上的自動化管理循環</p>
      </div>

      <div className="z-20 flex-1 flex items-stretch px-14 pb-6 gap-1">
        {steps.map((s, idx) => (
          <div key={s.step} className="flex items-stretch flex-1">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col flex-1 relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm">
                  <s.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <span className="text-2xl font-black text-slate-200">{s.step}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 leading-snug mb-2">{s.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex items-center px-0.5">
                <ArrowRight className="w-4 h-4 text-orange-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="z-20 mx-16 mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl px-5 py-3 flex items-center gap-3 text-white shadow-md">
        <RefreshCw className="w-5 h-5 flex-shrink-0" />
        <p className="text-[13px] font-semibold">結果：管理與資安達成自動化循環 — 減少人工簽核、降低誤操作風險，並讓每筆碳排與門禁紀錄皆可稽核。</p>
      </div>
    </div>
  );
}
