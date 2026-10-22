'use client';

import { Sunrise, ArrowRight, Frown, Smile, Clock } from 'lucide-react';

export default function IsunfaPwp2Slide9() {
  const before = [
    { id: 'b1', time: '09:00', task: '手抄昨日訪視筆記，整理成個案紀錄', type: 'paper' },
    { id: 'b2', time: '11:00', task: '整理補助核銷憑證、貼傳票', type: 'paper' },
    { id: 'b3', time: '13:30', task: '外出訪視 1 案（含交通）', type: 'care' },
    { id: 'b4', time: '16:00', task: '回辦公室補打紀錄、填 KPI 報表', type: 'paper' },
    { id: 'b5', time: '18:30', task: '加班趕方案成果報告', type: 'paper' },
  ];
  const after = [
    { id: 'a1', time: '09:00', task: '出勤排班與核銷簽核（AI 已備妥草稿）', type: 'ai' },
    { id: 'a2', time: '09:30', task: '外出訪視 2 案', type: 'care' },
    { id: 'a3', time: '14:00', task: '整理訪視紀錄（行政報表不再排擠專業紀錄）', type: 'care' },
    { id: 'a4', time: '15:30', task: '帶團體活動／個案研討', type: 'care' },
    { id: 'a5', time: '17:30', task: '成果報表與徵信資料 AI 產出，確認後下班', type: 'ai' },
  ];

  const typeStyle: { [key: string]: string } = {
    paper: 'bg-red-50 border-red-100 text-red-700',
    care: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    ai: 'bg-blue-50 border-blue-100 text-blue-700',
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
        <span className="text-xs font-mono text-rose-500 uppercase tracking-widest">Use Case Scenario</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-4">
          <Sunrise className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-semibold text-rose-600">應用情境</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          社工的一天：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-emerald-500">從報表產生器，回到專業陪伴者</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) Before / After */}
      <div className="z-10 px-16 flex-1 grid grid-cols-[1fr_56px_1fr] gap-2 items-stretch">

        {/* Info: (20260904 - Luphia) Before */}
        <div className="bg-white border border-red-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-red-400"></div>
          <div className="flex items-center justify-between mb-4 mt-1">
            <div className="flex items-center gap-2">
              <Frown className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-bold text-slate-800">導入前</h3>
            </div>
            <span className="text-[11px] font-bold text-red-500 bg-red-50 border border-red-100 rounded-full px-3 py-1">直接服務僅 1 案／日</span>
          </div>
          <div className="space-y-2.5">
            {before.map((b) => (
              <div key={b.id} className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-bold text-slate-400 w-11 flex-shrink-0">{b.time}</span>
                <div className={`flex-1 border rounded-xl px-4 py-2 text-[12px] font-medium ${typeStyle[b.type]}`}>{b.task}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Arrow */}
        <div className="flex items-center justify-center">
          <div className="w-11 h-11 bg-slate-800 rounded-full flex items-center justify-center shadow-lg">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Info: (20260904 - Luphia) After */}
        <div className="bg-white border border-emerald-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-400"></div>
          <div className="flex items-center justify-between mb-4 mt-1">
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold text-slate-800">導入「愛智扶」後</h3>
            </div>
            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">直接服務 3 案＋團體活動／日</span>
          </div>
          <div className="space-y-2.5">
            {after.map((a) => (
              <div key={a.id} className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-bold text-slate-400 w-11 flex-shrink-0">{a.time}</span>
                <div className={`flex-1 border rounded-xl px-4 py-2 text-[12px] font-medium ${typeStyle[a.type]}`}>{a.task}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Legend + Bottom Insight */}
      <div className="z-10 px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          {[
            { label: '文書行政', cls: 'bg-red-400' },
            { label: '直接服務', cls: 'bg-emerald-400' },
            { label: 'AI 協作（人審把關）', cls: 'bg-blue-400' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-sm ${l.cls}`}></span>
              <span className="text-[11px] font-bold text-slate-500">{l.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-slate-800 rounded-2xl px-6 py-3 shadow-lg">
          <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <p className="text-[13px] text-white font-medium">
            文書工時預期由每日過半降至 <span className="font-black text-emerald-400">2 小時以內</span>，加班趕報告成為歷史。
          </p>
        </div>
      </div>

    </div>
  );
}
