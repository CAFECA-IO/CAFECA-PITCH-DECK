'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Bot } from 'lucide-react';

export default function PaySlide7() {
  const rows = [
    { m: '錢包 A', fee: '0.0%', reward: '3.0%', ok: '99.1%', refund: 'T+7', pickup: '—', mandate: '—', score: 71 },
    { m: '錢包 B', fee: '0.0%', reward: '5.0%*', ok: '98.4%', refund: 'T+10', pickup: '—', mandate: '—', score: 74 },
    { m: '信用卡 C', fee: '0.0%', reward: '2.0%', ok: '99.6%', refund: 'T+3', pickup: '—', mandate: '卡組織', score: 82 },
    { m: '錢包 D', fee: '0.0%', reward: '1.5%', ok: '99.5%', refund: '即時', pickup: '門市', mandate: '自有', score: 91 },
  ];

  return (
    <PaySlideShell
      act="ACT II · 誰會輸"
      scene="第二幕"
      accent="bird"
      pageLabel="07 / 20"
      title={<>在代理人眼裡，你的錢包<span className="text-bird-700">只是表格裡的一列</span></>}
      subtitle={<>人會被 5% 回饋打動；代理人會把 5% 旁邊那顆星號讀完——上限、門檻、退款速度、成功率，全部換算成一個分數。補貼換用戶的戰爭，在代理時代會被算得更快、更透明。</>}
      footer="虛構的決策示意：欄位與權重為本報告假設，用以說明代理人的「選路」邏輯。* 5.0% 回饋附每月上限與指定通路。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_320px] gap-6 pb-2">
        <div className="rounded-[24px] border border-ink-300 bg-ink-900 text-ink-200 p-5 flex flex-col font-mono shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-4 h-4 text-plus-400" />
            <span className="text-[12px] text-plus-400">agent.route_payment(order=#A4471, NT$1,280, category=pet)</span>
          </div>
          <div className="grid grid-cols-[110px_repeat(6,1fr)_70px] gap-2 text-[11px] text-ink-400 pb-2 border-b border-white/10">
            <span>支付路徑</span><span>手續費</span><span>回饋</span><span>成功率</span><span>退款</span><span>實體履約</span><span>授權紀錄</span><span className="text-right">分數</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.m}
              className={`grid grid-cols-[110px_repeat(6,1fr)_70px] gap-2 text-[13px] py-3 border-b border-white/10 ${r.score === 91 ? 'text-plus-300' : ''}`}
            >
              <span className="font-bold">{r.m}</span>
              <span>{r.fee}</span>
              <span>{r.reward}</span>
              <span>{r.ok}</span>
              <span>{r.refund}</span>
              <span>{r.pickup}</span>
              <span>{r.mandate}</span>
              <span className="text-right font-bold">{r.score}</span>
            </div>
          ))}
          <div className="mt-auto pt-4 text-[12px] text-ink-400">
            &gt; selected: <span className="text-plus-300">錢包 D</span> · reason: 可即時退款、可門市取貨、授權規則可稽核
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex-1 bg-white border border-ink-200 rounded-2xl px-5 py-4 shadow-sm">
            <div className="text-[13px] font-bold text-ink-400 mb-1">回饋最高的 B</div>
            <div className="text-[15px] font-black text-ink-900 leading-snug">輸在星號與退款天數。</div>
            <div className="text-[12.5px] text-ink-500 leading-snug mt-1">人不讀細則；代理人每一筆都讀。</div>
          </div>
          <div className="flex-1 bg-plus-50 border border-plus-300 rounded-2xl px-5 py-4">
            <div className="text-[13px] font-bold text-plus-600 mb-1">回饋最低的 D</div>
            <div className="text-[15px] font-black text-ink-900 leading-snug">贏在兩件補貼買不到的事。</div>
            <div className="text-[12.5px] text-ink-700 leading-snug mt-1">一，能在實體世界把貨交出去、把錢退回來；二，握有主人的授權紀錄。</div>
          </div>
          <div className="flex-1 bg-white border border-bird-300 rounded-2xl px-5 py-4">
            <div className="text-[13px] font-bold text-bird-700 mb-1">啟示</div>
            <div className="text-[14px] font-black text-ink-900 leading-snug">把預算從「讓人心動」，移到「讓代理人放心」。</div>
          </div>
        </div>
      </div>
    </PaySlideShell>
  );
}
