'use client';

import { Timer, HeartCrack, Sparkles, ShieldAlert } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide13() {
  const phases = [
    { t: '0.0–1.5s', label: '接近', body: '減速、頭部轉向貨架', pct: 19, color: 'bg-slate-400' },
    { t: '1.5–3.8s', label: '掃描', body: '視線橫掃，尚未伸手', pct: 29, color: 'bg-cyan-400' },
    { t: '3.8–5.1s', label: '拿起', body: '手部進入貨架平面', pct: 16, color: 'bg-emerald-400' },
    { t: '5.1–7.2s', label: '比價', body: '翻轉商品、目光在兩品之間往返', pct: 26, color: 'bg-amber-400' },
    { t: '7.2–8.0s', label: '放回', body: '商品回架，身體轉離', pct: 10, color: 'bg-rose-400' },
  ];

  const indices = [
    { icon: Timer, name: '猶豫指數 HI', formula: '比價時長 ÷ 貨架前總時長', value: '0.71', note: '洗髮精貨架，全店最高', tone: 'text-amber-300', ring: 'border-amber-400/30' },
    { icon: HeartCrack, name: '挫折指數 FI', formula: '折返次數 × 尋找時長 × 未成交', value: '0.58', note: '調味料區，找不到指定規格', tone: 'text-rose-300', ring: 'border-rose-400/30' },
    { icon: Sparkles, name: '驚喜指數 SI', formula: '非計畫停留 × 直接取走率', value: '0.34', note: '端架貼標鮮食，計畫外購買最強', tone: 'text-emerald-300', ring: 'border-emerald-400/30' },
  ];

  const guardrails = [
    '不辨識個人身分，不建立人臉特徵庫，不與會員資料連結',
    '不推論族裔、宗教、健康狀況、政治傾向等敏感屬性',
    '所有指標以群體統計輸出，樣本數 < 20 人不產生結果',
    '情緒訊號僅用於「貨架與陳列診斷」，不用於個人化定價',
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 2 · 情感分析"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="13 / 22"
      compact
      title={<>貨架前的 8 秒：從「有沒有買」，<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">到「有沒有猶豫」</span></>}
      subtitle="一次未成交的停留，平均只有 8 秒。把這 8 秒拆成五個階段，就能看出商品是輸在價格、輸在包裝，還是輸在根本沒被看見。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[13.5px] font-black text-white">未成交停留的五階段（N = 12,400 次，去識別化群體統計）</span>
            <span className="text-[10px] font-mono text-slate-500">AVG DWELL 8.0s</span>
          </div>
          <div className="flex gap-1 h-[10px] rounded-full overflow-hidden bg-white/[0.06] mb-3">
            {phases.map((phase) => (
              <div key={phase.label} className={`${phase.color} h-full`} style={{ width: `${phase.pct}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-3">
            {phases.map((phase) => (
              <div key={phase.label}>
                <div className="flex items-baseline gap-2">
                  <span className="text-[14px] font-black text-white">{phase.label}</span>
                  <span className="text-[9.5px] font-mono text-slate-500">{phase.t}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3.5 flex-1">

          <div className="flex-[52] flex flex-col gap-3">
            {indices.map((index) => {
              const Icon = index.icon;
              return (
                <div key={index.name} className={`rounded-xl border ${index.ring} bg-white/[0.035] px-4 py-3 flex items-center gap-4 flex-1`}>
                  <Icon className={`w-5 h-5 ${index.tone} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-black text-white leading-tight">{index.name}</div>
                    <div className="text-[10.5px] font-mono text-slate-500 mt-[3px]">{index.formula}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className={`text-[22px] font-black font-mono leading-none ${index.tone}`}>{index.value}</div>
                    <div className="text-[9.5px] text-slate-500 mt-1">{index.note}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex-[48] flex flex-col gap-3">
            <div className="rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-400/[0.10] to-transparent px-4 py-3 flex flex-col justify-center">
              <div className="text-[12.5px] font-black text-amber-300 mb-1.5">案例：洗髮精貨架</div>
              <p className="text-[11.5px] text-slate-300 leading-snug">
                拿起後放回率 <span className="font-mono font-bold text-white">43%</span>，猶豫全部集中在比價階段。
                診斷結果不是價格太貴，而是<span className="text-white font-bold">價格帶斷層</span>——架上只有 NT$159 與 NT$399，中間是空的。
                補進 NT$259 品項後，放回率降至 <span className="font-mono font-bold text-emerald-300">19%</span>，該貨架毛利 +22%。
              </p>
            </div>

            <div className="rounded-xl border border-rose-400/30 bg-rose-400/[0.06] px-4 py-3 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span className="text-[12.5px] font-black text-white">倫理紅線：這四件事我們不做</span>
              </div>
              <ul className="space-y-3">
                {guardrails.map((rule) => (
                  <li key={rule} className="flex gap-2 text-[11px] text-slate-300 leading-snug">
                    <span className="text-rose-400 mt-[1px]">×</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </TwinSlideShell>
  );
}
