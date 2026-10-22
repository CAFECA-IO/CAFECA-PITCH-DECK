'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';

export default function PaySlide7() {
  const leaders = [
    { name: '街口支付', members: 725.57 },
    { name: '一卡通票證', members: 723.45 },
    { name: '全支付', members: 717.1 },
    { name: '悠遊卡', members: 416.43 },
    { name: 'LINE Pay Money', members: 390.79 },
  ];
  const max = 725.57;

  return (
    <PaySlideShell
      act="ACT I · 軌道已經鋪好"
      scene="第一幕"
      pageLabel="07 / 26"
      title={<>電支正在最好的年份——<span className="text-bird-700">也正站在軌道之外</span></>}
      subtitle={<>2026 年 4 月，台灣電支使用者突破 4,000 萬、代收付連三個月創新高。成長是真的；但代理支付的第一波軌道，是從「卡」上長出來的。</>}
      footer="資料來源：金管會電子支付機構業務統計（2026 年 4 月），經媒體整理。全盈+PAY 會員數引自 2026 年 5 月總經理受訪。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_1.15fr] gap-6 pb-2">
        {/* Info: (20260923 - Luphia) 左：四個大數字 */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { v: '4,038萬', k: '電支使用者（人次）', n: '單月再增約 41 萬' },
            { v: '289.9億', k: '4 月代理收付金額', n: '年增 42.6%，連三月新高' },
            { v: '297.0億', k: '收受儲值款項', n: '帳戶裡「停著的錢」' },
            { v: '158.5億', k: '國內外小額匯兌', n: '轉帳與匯款正在變大' },
          ].map((s) => (
            <div key={s.k} className="bg-white border border-ink-200 rounded-2xl px-5 py-4 shadow-sm flex flex-col justify-center">
              <div className="text-[34px] font-black text-ink-900 leading-none tracking-tight">{s.v}</div>
              <div className="text-[13px] font-bold text-ink-700 mt-2">{s.k}</div>
              <div className="text-[12px] text-ink-400">{s.n}</div>
            </div>
          ))}
        </div>

        {/* Info: (20260923 - Luphia) 右：會員數前五名與全盈位置 */}
        <div className="bg-white border border-ink-200 rounded-2xl p-5 shadow-sm flex flex-col">
          <div className="text-[11px] font-bold tracking-widest text-ink-400 mb-3">會員數（萬人，2026.04）</div>
          <div className="flex flex-col gap-2">
            {leaders.map((l) => (
              <div key={l.name} className="flex items-center gap-3">
                <span className="w-[110px] text-[12.5px] text-ink-700 font-bold flex-shrink-0">{l.name}</span>
                <div className="flex-1 h-[18px] bg-ink-100 rounded">
                  <div className="h-full rounded bg-ink-400" style={{ width: `${(l.members / max) * 100}%` }} />
                </div>
                <span className="w-[56px] text-right text-[12px] font-mono text-ink-500">{l.members.toFixed(0)}</span>
              </div>
            ))}
            <div className="flex items-center gap-3 mt-1">
              <span className="w-[110px] text-[12.5px] text-plus-700 font-black flex-shrink-0">全盈+PAY</span>
              <div className="flex-1 h-[18px] bg-ink-100 rounded">
                <div className="h-full rounded bg-plus-500" style={{ width: `${(247 / max) * 100}%` }} />
              </div>
              <span className="w-[56px] text-right text-[12px] font-mono text-plus-700 font-bold">~247</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-dashed border-ink-200">
            <div className="text-[14px] font-black text-ink-900 leading-snug">如果比的是會員數，全盈追不上前三名。</div>
            <div className="text-[13px] text-ink-500 leading-snug mt-1">但代理人不看會員數。它看的是：能不能被授權、能不能被信任、能不能在實體世界把事情辦完。<span className="font-bold text-plus-600">比賽的規則，要換了。</span></div>
          </div>
        </div>
      </div>
    </PaySlideShell>
  );
}
