'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';

export default function PaySlide8() {
  const rows = [
    {
      c: '美國',
      ecom: '1.23 兆美元',
      ecomNote: '占零售 16.4%',
      rails: '信用卡＋PayPal、Apple Pay 等錢包',
      agent: 'Muse、ChatGPT×Visa 已上線；Shop Pay、PayPal 接入 Muse',
      stake: '1,900–3,850 億美元',
      stakeNote: 'Morgan Stanley 2030 預測',
      heat: 3,
      focus: false,
    },
    {
      c: '日本',
      ecom: '26.1 兆日圓',
      ecomNote: 'B2C 電商（2024）',
      rails: '無現金 58.0%：信用卡占 82.7%、條碼 10.2%；PayPay 7,500 萬用戶',
      agent: 'Visa Agentic Ready：三菱 UFJ NICOS、樂天卡等 5 家發卡',
      stake: '2.6–5.2 兆日圓',
      stakeNote: '情境估算',
      heat: 2,
      focus: true,
    },
    {
      c: '馬來西亞',
      ecom: '200 億美元',
      ecomNote: '+21%，東南亞成長最快',
      rails: 'DuitNow QR 年 30 億筆（倍增）；每人每年 538 筆電子支付',
      agent: '2026.03 Mastercard × CIMB、RHB 完成首筆上線代理交易',
      stake: '20–40 億美元',
      stakeNote: '情境估算',
      heat: 2,
      focus: true,
    },
    {
      c: '印尼',
      ecom: '710 億美元',
      ecomNote: '數位支付 GTV 5,380 億美元',
      rails: 'QRIS 6,700 萬用戶、4,546 萬商家；上半年交易量翻倍',
      agent: '尚無公開試點；80% 網路用戶每天用 AI 工具',
      stake: '71–142 億美元',
      stakeNote: '情境估算',
      heat: 3,
      focus: true,
    },
    {
      c: '台灣',
      ecom: '6,716 億元',
      ecomNote: '零售網路銷售，占 13.9%',
      rails: '行動支付普及 89.9%；電支 4,038 萬人次',
      agent: '台灣大 × Visa 首個試點；9 家發卡銀行入沙盒',
      stake: '672–1,343 億元',
      stakeNote: '情境估算',
      heat: 2,
      focus: false,
    },
  ];

  return (
    <PaySlideShell
      act="ACT II · 誰會輸"
      scene="第二幕 · 洗牌地圖"
      accent="bird"
      pageLabel="08 / 20"
      title={<>各國的牌桌上，<span className="text-plus-500">有多少交易的「付款選擇權」要換手</span></>}
      subtitle={<>把各國 2025 年電商規模，套上 Morgan Stanley 對美國的 10%–20% 代理占比，就能粗估每張牌桌上被重新分配的份額。三個橘色標記的國家，是全盈最該盯的市場——巧合的是，三國街角都有 FamilyMart。</>}
      footer="電商與支付數據：美國 Census、日本 METI（2024 電商／2025 無現金）、PayPay、e-Conomy SEA 2025、BNM／PayNet、Bank Indonesia（2026.07）、經濟部統計處、資策會 MIC。情境估算＝2025 電商規模 × 10–20%，未計成長，非預測。"
      compact
    >
      <div className="flex-1 min-h-0 flex flex-col gap-1.5 pb-2">
        <div className="grid grid-cols-[110px_170px_1.2fr_1.2fr_170px_70px] gap-3 px-4 text-[11px] font-bold tracking-widest text-ink-400">
          <span>國家</span><span>電商規模</span><span>現在誰在收錢</span><span>代理支付進度</span><span>要換手的份額</span><span className="text-right">壓力</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.c}
            className={`flex-1 grid grid-cols-[110px_170px_1.2fr_1.2fr_170px_70px] gap-3 items-center rounded-[18px] px-4 border ${r.focus ? 'bg-plus-50 border-plus-300' : 'bg-white border-ink-200 shadow-sm'}`}
          >
            <span className="flex items-center gap-2">
              {r.focus && <span className="w-2.5 h-2.5 rounded-full bg-plus-500" />}
              <span className="text-[17px] font-black text-ink-900">{r.c}</span>
            </span>
            <span>
              <span className="block text-[15px] font-black text-ink-900">{r.ecom}</span>
              <span className="block text-[11px] text-ink-400">{r.ecomNote}</span>
            </span>
            <span className="text-[12.5px] text-ink-700 leading-snug">{r.rails}</span>
            <span className="text-[12.5px] text-ink-700 leading-snug">{r.agent}</span>
            <span>
              <span className="block text-[15px] font-black text-plus-500">{r.stake}</span>
              <span className="block text-[11px] text-ink-400">{r.stakeNote}</span>
            </span>
            <span className="flex justify-end gap-1">
              {[1, 2, 3].map((n) => (
                <span key={n} className={`w-2.5 h-2.5 rounded-full ${n <= r.heat ? 'bg-plus-500' : 'bg-ink-200'}`} />
              ))}
            </span>
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
