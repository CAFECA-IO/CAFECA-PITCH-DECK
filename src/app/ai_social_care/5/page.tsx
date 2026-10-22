'use client';

import { MessageSquare, MousePointerClick, Bot, BellRing, Boxes, GitFork, Accessibility } from 'lucide-react';
import { AscAgentLoop } from '@/components/slide/asc_art';

export default function AiSocialCareSlide5() {
  const steps = [
    { id: 's1', icon: MousePointerClick, t: '一個簡單動作', d: '社工在對話框說一句話，或按一個按鈕', color: '#f97316', tint: 'bg-orange-50', ink: 'text-orange-600' },
    { id: 's2', icon: Bot, t: 'AI 自己做事', d: '代理人拆解任務、查法規、算數字、產文件', color: '#6366f1', tint: 'bg-indigo-50', ink: 'text-indigo-600' },
    { id: 's3', icon: BellRing, t: '完成後回報', d: '結果送回同一個對話框，確認後才送出', color: '#10b981', tint: 'bg-emerald-50', ink: 'text-emerald-600' },
  ];

  const chat = [
    { id: 'c1', who: 'user', text: '幫我把這個月的志工時數結算一下' },
    { id: 'c2', who: 'ai', text: '好的，我來處理 👌　預計 3 分鐘，完成後通知您' },
    { id: 'c3', who: 'ai', text: '完成了！11,298 小時、127 位志工，有 3 筆時數異常已標記。要我產出核銷報表嗎？' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">04 · AI 應用系統開發規劃與產品化能力</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <h2 className="text-[38px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-orange-500 flex-shrink-0" />
          介面像 LINE 一樣，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">不需要教育訓練就會用</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Main */}
      <div className="z-10 px-16 grid grid-cols-5 gap-6 flex-1">

        {/* Info: (20261005 - Luphia) Chat Mockup */}
        <div className="col-span-2 bg-slate-100 rounded-3xl p-4 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[12px] font-bold text-slate-700">愛智扶 · 行政助理</span>
          </div>
          <div className="flex flex-col gap-2.5 flex-1">
            {chat.map((c) => (
              <div key={c.id} className={`flex ${c.who === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[11.5px] leading-relaxed shadow-sm ${
                  c.who === 'user'
                    ? 'bg-orange-500 text-white rounded-br-sm'
                    : 'bg-white text-slate-700 rounded-bl-sm border border-slate-200'
                }`}>
                  {c.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-white rounded-full px-4 py-2.5 border border-slate-200 text-[11px] text-slate-400">
            輸入訊息…
          </div>
        </div>

        {/* Info: (20261005 - Luphia) Three Steps */}
        <div className="col-span-3 flex flex-col gap-3.5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm flex items-center gap-5 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1.5" style={{ background: s.color }}></div>
                <div className={`w-12 h-12 ${s.tint} rounded-2xl flex items-center justify-center flex-shrink-0 ml-1`}>
                  <Icon className={`w-6 h-6 ${s.ink}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[10px] font-mono font-black text-slate-300">0{i + 1}</span>
                    <span className="text-[18px] font-black text-slate-800">{s.t}</span>
                  </div>
                  <div className="text-[12.5px] text-slate-500 leading-snug mt-0.5">{s.d}</div>
                </div>
              </div>
            );
          })}

          <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 flex items-center gap-4">
            <AscAgentLoop className="w-[62px] h-[62px] flex-shrink-0" />
            <div className="flex items-center gap-3">
              <Accessibility className="w-5 h-5 text-slate-500 flex-shrink-0" />
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                三個步驟構成一次完整對話。服務對象含身心障礙者，介面依
                <span className="font-bold text-slate-800"> WCAG 2.1 AA</span> 設計，並於實際場域進行三輪使用性測試。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Bonus Strip */}
      <div className="z-10 px-16 py-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl px-6 py-3.5 flex items-center gap-3.5 shadow-lg">
            <Boxes className="w-5 h-5 text-white flex-shrink-0" />
            <div>
              <div className="text-[9px] font-black text-indigo-200 tracking-widest uppercase">加分項目</div>
              <div className="text-[12.5px] text-white font-medium leading-snug">模組化架構與標準化介面，原生支援 Agentic AI 整合</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-6 py-3.5 flex items-center gap-3.5 shadow-lg">
            <GitFork className="w-5 h-5 text-orange-400 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase">加分項目</div>
              <div className="text-[12.5px] text-white font-medium leading-snug">完整應用與核心部件皆以 MIT 授權開源釋出</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
