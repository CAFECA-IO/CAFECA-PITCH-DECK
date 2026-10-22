'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';

export default function PaySlide4() {
  const forecasts = [
    { who: 'McKinsey', scope: '全球 · 代理促成營收', low: 3000, high: 5000, label: '3–5 兆美元' },
    { who: 'Edgar, Dunn & Co.（Visa 引用）', scope: '全球 · 代理式商務市場', low: 1700, high: 1700, label: '1.7 兆美元' },
    { who: 'McKinsey', scope: '美國 B2C 零售', low: 1000, high: 1000, label: '最高 1 兆美元' },
    { who: 'Bain', scope: '美國 · 占電商 15–25%', low: 300, high: 500, label: '3,000–5,000 億美元' },
    { who: 'Morgan Stanley', scope: '美國 · 占電商 10–20%', low: 190, high: 385, label: '1,900–3,850 億美元' },
  ];
  const max = 5000;

  return (
    <PaySlideShell
      act="ACT I · 軌道已經鋪好"
      scene="第一幕 · 規模"
      pageLabel="04 / 20"
      title={<>這場洗牌有多大：<span className="text-plus-500">2030 年，五分之一的線上交易由代理人決定怎麼付</span></>}
      subtitle={<>各家預測口徑不同，但方向一致：到 2030 年，美國有 10%–25% 的電商交易會由代理人完成。那不是新增的錢，而是<span className="font-bold text-ink-900">原本屬於某個錢包、某張卡的「選擇權」被轉手</span>。</>}
      footer="皆為預測：McKinsey（2025.10）、Morgan Stanley（2025.12）、Bain（2025.12）、Edgar, Dunn & Co.（經 Visa 2026 年台灣新聞稿引用）；Worldpay《Global Payments Report 2026》；Adobe Analytics（2026.06）；美國 Census（2025）。"
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1.3fr_1fr] gap-6 pb-2">
        {/* Info: (20260923 - Luphia) 左：各機構 2030 年預測（對數感的區間條，以線性比例呈現） */}
        <div className="rounded-[24px] bg-white border border-ink-200 shadow-sm p-5 flex flex-col">
          <div className="text-[12px] font-bold tracking-widest text-ink-400 mb-3">2030 年代理式商務規模預測（美元）</div>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            {forecasts.map((f) => (
              <div key={f.who + f.scope}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[13.5px] font-bold text-ink-900">{f.who}<span className="text-[12px] font-normal text-ink-400 ml-2">{f.scope}</span></span>
                  <span className="text-[14px] font-black text-plus-500">{f.label}</span>
                </div>
                <div className="h-[14px] rounded-full bg-ink-100 relative">
                  <div className="absolute inset-y-0 left-0 rounded-full bg-plus-200" style={{ width: `${(f.high / max) * 100}%` }} />
                  <div className="absolute inset-y-0 left-0 rounded-full bg-plus-500" style={{ width: `${(f.low / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11.5px] text-ink-400">深色＝低推估，淺色＝高推估。</div>
        </div>

        {/* Info: (20260923 - Luphia) 右：被轉手的是誰的地盤 */}
        <div className="flex flex-col gap-3">
          <div className="rounded-[24px] bg-plus-500 text-white px-6 py-5 shadow-lg shadow-plus-500/25">
            <div className="text-[13px] font-bold text-white/85">今天，數位錢包占全球電商交易額</div>
            <div className="text-[54px] font-black leading-none my-1">56%</div>
            <div className="text-[13px] text-white/90 leading-snug">錢包是這十年最大的贏家——也是代理人最先要「繞過」的那一層介面。</div>
          </div>
          <div className="flex-1 rounded-[24px] bg-white border border-ink-200 shadow-sm px-5 py-4 flex flex-col justify-center">
            <div className="text-[13px] font-bold text-ink-400">AI 導流到零售網站</div>
            <div className="text-[30px] font-black text-ink-900 leading-tight">+1,324%</div>
            <div className="text-[12.5px] text-ink-500 leading-snug">2024.10–2026.05 累計成長；轉換率比一般流量高 54%。</div>
          </div>
          <div className="flex-1 rounded-[24px] bg-bird-50 border border-bird-200 px-5 py-4 flex flex-col justify-center">
            <div className="text-[13px] font-bold text-bird-700">換算成一句話</div>
            <div className="text-[15px] font-black text-ink-900 leading-snug">美國 1.23 兆美元的電商裡，約每 5 筆就有 1 筆的「付款方式」不再由人挑選。</div>
          </div>
        </div>
      </div>
    </PaySlideShell>
  );
}
