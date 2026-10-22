'use client';

import { Layers, Server, Brain, Boxes, UserCog, FileText, Calculator, Sparkles, ArrowDown } from 'lucide-react';
import { AscRobot } from '@/components/slide/asc_art';

export default function AiSocialCareSlide3() {
  const modules = [
    { id: 'm1', robot: 'hr' as const, icon: UserCog, name: '人事智能管理', agent: '人事代理', desc: '排班、差勤、志工時數', color: 'text-orange-600', tint: 'bg-orange-50', brd: 'border-orange-200', ex: '「這個月的志工時數結算一下」' },
    { id: 'm2', robot: 'admin' as const, icon: FileText, name: '智能行政中樞', agent: '行政代理', desc: '公文、補助、核銷文書', color: 'text-rose-600', tint: 'bg-rose-50', brd: 'border-rose-200', ex: '「產出 10 月份的核銷報告」' },
    { id: 'm3', robot: 'ledger' as const, icon: Calculator, name: '會計與財產管理', agent: '帳務代理', desc: '分錄、財報、財產盤點', color: 'text-blue-600', tint: 'bg-blue-50', brd: 'border-blue-200', ex: '「把這疊憑證入帳」' },
    { id: 'm4', robot: 'impact' as const, icon: Sparkles, name: 'ESG 影響力報告', agent: '影響力代理', desc: '服務成效量化與對外溝通', color: 'text-emerald-600', tint: 'bg-emerald-50', brd: 'border-emerald-200', ex: '「寫一份今年的影響力報告」' },
  ];

  const kpis = [
    { id: 'k1', v: '1 式', l: '開源領域型 AI 模型' },
    { id: 'k2', v: '1 式', l: '開源 AI 中介平台' },
    { id: 'k3', v: '4 項', l: 'AI 應用服務模組' },
    { id: 'k4', v: '5 家', l: '導入資服業者' },
    { id: 'k5', v: '100+', l: '場域擴散數' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20261005 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-16 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">02 · 解決方案總覽</span>
      </div>

      {/* Info: (20261005 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-4">
        <h2 className="text-[40px] font-black leading-tight text-slate-900 flex items-center gap-3">
          <Layers className="w-9 h-9 text-orange-500 flex-shrink-0" />
          三層架構，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">四個會自己做事的代理人</span>
        </h2>
      </div>

      {/* Info: (20261005 - Luphia) Three Layers */}
      <div className="z-10 px-16 flex gap-4 items-stretch mb-3">
        <div className="flex-1 bg-white border-2 border-slate-800 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <Boxes className="w-6 h-6 text-slate-800 flex-shrink-0" />
          <div>
            <div className="text-[9px] font-black text-slate-400 tracking-widest uppercase">Layer 3 · 中介平台</div>
            <div className="text-[15px] font-black text-slate-800 leading-tight">Agentic 中介平台</div>
            <div className="text-[10.5px] text-slate-500 leading-snug">四個 AI 代理人協同調度，開源釋出</div>
          </div>
        </div>
        <div className="flex-1 bg-white border-2 border-orange-500 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <Brain className="w-6 h-6 text-orange-500 flex-shrink-0" />
          <div>
            <div className="text-[9px] font-black text-orange-400 tracking-widest uppercase">Layer 2 · 領域模型</div>
            <div className="text-[15px] font-black text-slate-800 leading-tight">費思 FAITH 領域型模型</div>
            <div className="text-[10.5px] text-slate-500 leading-snug">會計 × 社福雙專業，開源釋出</div>
          </div>
        </div>
        <div className="flex-1 bg-white border-2 border-blue-500 rounded-2xl px-5 py-3.5 shadow-sm flex items-center gap-3">
          <Server className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <div className="text-[9px] font-black text-blue-400 tracking-widest uppercase">Layer 1 · 部署</div>
            <div className="text-[15px] font-black text-slate-800 leading-tight">地端 / 雲地混合部署</div>
            <div className="text-[10.5px] text-slate-500 leading-snug">敏感資料不出場域，設備自籌</div>
          </div>
        </div>
      </div>

      <div className="z-10 flex justify-center -my-0.5">
        <ArrowDown className="w-5 h-5 text-slate-300" />
      </div>

      {/* Info: (20261005 - Luphia) Four Modules */}
      <div className="z-10 px-16 grid grid-cols-4 gap-4 flex-1 mt-1 items-start">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.id} className={`bg-white border ${m.brd} rounded-2xl px-5 py-4 shadow-sm flex flex-col`}>
              <div className="flex items-center justify-between mb-2">
                <div className={`w-10 h-10 ${m.tint} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <AscRobot kind={m.robot} className="w-[46px] h-[46px]" />
              </div>
              <div className="text-[15px] font-black text-slate-800 leading-tight">{m.name}</div>
              <div className="text-[11.5px] text-slate-500 leading-snug mt-1">{m.desc}</div>
              <div className={`mt-3 text-[10px] font-black ${m.color} ${m.tint} rounded-md px-2 py-1 self-start tracking-wide`}>{m.agent}</div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-1">社工只要說</div>
                <div className="text-[11px] text-slate-600 leading-snug">{m.ex}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info: (20261005 - Luphia) KPI Strip */}
      <div className="z-10 px-16 py-6">
        <div className="bg-slate-900 rounded-2xl px-7 py-4 flex items-center gap-7 shadow-lg">
          <span className="text-[12px] font-black text-white flex-shrink-0 leading-tight">關鍵<br />績效指標</span>
          <div className="flex-1 grid grid-cols-5 gap-4">
            {kpis.map((k) => (
              <div key={k.id} className="border-l border-slate-700 pl-4">
                <div className="text-[20px] font-black text-orange-400 leading-none">{k.v}</div>
                <div className="text-[10px] text-slate-300 leading-snug mt-1.5">{k.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
