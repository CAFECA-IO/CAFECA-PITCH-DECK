'use client';

import { Timer, HeartCrack, Sparkles, ShieldAlert } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide12() {
  const phases = [
    { t: '0.0–1.5s', label: '接近', body: '減速、頭部轉向貨架', pct: 19, color: 'bg-slate-200' },
    { t: '1.5–3.8s', label: '掃描', body: '視線橫掃，尚未伸手', pct: 29, color: 'bg-slate-300' },
    { t: '3.8–5.1s', label: '拿起', body: '手部進入貨架平面', pct: 16, color: 'bg-slate-400' },
    { t: '5.1–7.2s', label: '比價', body: '翻轉商品、目光往返', pct: 26, color: 'bg-slate-500' },
    { t: '7.2–8.0s', label: '放回', body: '商品回架，身體轉離', pct: 10, color: 'bg-orange-500' },
  ];

  const indices = [
    { icon: Timer, name: '猶豫指數 HI', formula: '比價時長 ÷ 貨架前總時長', value: '0.71', note: '洗髮精貨架，全店最高', tone: 'text-orange-600', ring: 'border-slate-200', bg: 'bg-white' },
    { icon: HeartCrack, name: '挫折指數 FI', formula: '折返次數 × 尋找時長 × 未成交', value: '0.58', note: '調味料區，找不到指定規格', tone: 'text-orange-600', ring: 'border-slate-200', bg: 'bg-white' },
    { icon: Sparkles, name: '驚喜指數 SI', formula: '非計畫停留 × 直接取走率', value: '0.34', note: '端架貼標鮮食，計畫外購買最強', tone: 'text-orange-600', ring: 'border-slate-200', bg: 'bg-white' },
  ];

  const guardrails = [
    '不辨識個人身分，不建立人臉特徵庫，不與會員資料連結',
    '不推論族裔、宗教、健康狀況、政治傾向等敏感屬性',
    '所有指標以群體統計輸出，樣本數 < 20 人不產生結果',
    '情緒訊號僅用於「貨架與陳列診斷」，不用於個人化定價',
  ];

  return (
    <CrmSlideShell
      chapter="LAYER 2 · 未成交訊號"
      pageLabel="12 / 20"
      compact
      title={<>貨架前的 8 秒：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">最接近成交的一次失敗</span></>}
      subtitle="一次未成交的停留，平均只有 8 秒。把這 8 秒拆成五個階段，就能看出商品是輸在價格、輸在包裝，還是輸在根本沒被看見。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13.5px] font-black text-slate-900">未成交停留的五階段（N = 12,400 次，去識別化群體統計）</span>
            <span className="text-[10px] font-mono text-slate-400">AVG DWELL 8.0s</span>
          </div>
          <div className="flex gap-1 h-[10px] rounded-full overflow-hidden bg-slate-100 mb-3">
            {phases.map((phase) => (
              <div key={phase.label} className={`${phase.color} h-full`} style={{ width: `${phase.pct}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3">
            {phases.map((phase) => (
              <div key={phase.label}>
                <div className="flex items-baseline gap-2">
                  <span className="text-[14px] font-black text-slate-900">{phase.label}</span>
                  <span className="text-[9.5px] font-mono text-slate-400">{phase.t}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug mt-1">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3.5 flex-1">

          <div className="flex-[52] flex flex-col gap-3">
            {indices.map((index) => {
              const Icon = index.icon;
              return (
                <div key={index.name} className={`rounded-xl border ${index.ring} ${index.bg} px-4 py-3 flex items-center gap-4 flex-1 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${index.tone} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-black text-slate-900 leading-tight">{index.name}</div>
                    <div className="text-[10.5px] font-mono text-slate-400 mt-[3px]">{index.formula}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-[22px] font-black font-mono leading-none ${index.tone}`}>{index.value}</div>
                    <div className="text-[9.5px] text-slate-400 mt-1">{index.note}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-[48] flex flex-col gap-3">
            <div className="rounded-xl border border-orange-200 bg-orange-50/50 px-4 py-3 flex flex-col justify-center">
              <div className="text-[12.5px] font-black text-orange-700 mb-1.5">案例：洗髮精貨架</div>
              <p className="text-[11.5px] text-slate-600 leading-snug">
                拿起後放回率 <span className="font-mono font-bold text-slate-900">43%</span>，猶豫全部集中在比價階段。
                診斷結果不是價格太貴，而是<span className="text-slate-900 font-bold">價格帶斷層</span>——架上只有 NT$159 與 NT$399，中間是空的。
                補進 NT$259 品項後，放回率降至 <span className="font-mono font-bold text-slate-900">19%</span>，該貨架毛利 +22%。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-slate-500" />
                <span className="text-[12.5px] font-black text-slate-900">倫理紅線：這四件事我們不做</span>
              </div>
              <ul className="space-y-3">
                {guardrails.map((rule) => (
                  <li key={rule} className="flex gap-2 text-[11px] text-slate-600 leading-snug">
                    <span className="text-slate-400 mt-[1px]">×</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </CrmSlideShell>
  );
}
