'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';

export default function PaySlide3() {
  const events = [
    { date: '2025.04.29', who: 'Mastercard', what: '發表 Agent Pay，以「代理人代碼」讓驗證過的 AI 代理人替消費者付款', tw: false },
    { date: '2025.04.30', who: 'Visa', what: '隔一天發表 Intelligent Commerce，開放代理人使用代碼化憑證', tw: false },
    { date: '2025.09', who: 'Google', what: 'AP2 代理支付協定，60+ 家首發夥伴（含卡組織、PayPal、Coinbase）', tw: false },
    { date: '2025.09', who: 'OpenAI × Stripe', what: 'ACP 代理商務協定開源；推出限定商家、單次使用的共享支付代碼', tw: false },
    { date: '2025.10.14', who: 'Visa', what: 'Trusted Agent Protocol（TAP）：讓商家辨識「這是可信的代理人」', tw: false },
    { date: '2026.04.08', who: 'Visa', what: 'Intelligent Commerce Connect：一個入口同時接多種代理協定', tw: false },
    { date: '2026.06.10', who: 'Visa × OpenAI', what: '宣布把代碼化憑證、即時授權與使用者自訂護欄整進 OpenAI 產品', tw: false },
    { date: '2026.06.16', who: '台灣大 × Visa', what: '台灣首個 AI 代理商務試點，myfone 網路門市為首發場域', tw: true },
    { date: '2026', who: 'Visa Agentic Ready', what: '台灣 9 家發卡銀行參與首波封閉沙盒測試（含玉山銀行）', tw: true },
    { date: '2026.08', who: '銀行公會', what: '召開 AI 代理商務與智慧支付風控實務交流，銀行定調「積極且審慎」', tw: true },
    { date: '2026.09.08', who: 'Meta', what: '發表個人代理人 Muse：美國先上線、進駐 WhatsApp，以 Stripe Link 一次性虛擬卡付款', tw: false },
    { date: '2026.09.22', who: 'Shopify × Meta', what: 'Muse 接上 Shop Pay，可直接在 Shopify 商店替使用者結帳', tw: false },
  ];

  return (
    <PaySlideShell
      act="ACT I · 軌道已經鋪好"
      scene="第一幕"
      pageLabel="03 / 20"
      title={<>這不是預言：<span className="text-plus-600">17 個月內，軌道已經鋪到台灣</span></>}
      subtitle={<>2025 年春天兩大卡組織相隔一天出手，一年半後，台灣的發卡銀行已經在沙盒裡測試「不是人按的交易」；兩週前，每天有 36 億人使用其 App 的 Meta 也帶著代理人進場。</>}
      footer="資料來源：Mastercard、Visa 新聞稿；Google AP2、OpenAI／Stripe ACP 公開規格；經濟日報、DIGITIMES、工商時報 2026 年 6–8 月報導；TechCrunch、PYMNTS 2026 年 9 月報導。"
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-6 grid-flow-col gap-x-8 gap-y-2 pb-2">
        {events.map((e) => (
          <div
            key={e.date + e.who}
            className={`flex items-start gap-4 rounded-[18px] px-4 py-2 border ${e.tw ? 'bg-plus-50 border-plus-300' : 'bg-white border-ink-200 shadow-sm'}`}
          >
            <span className={`text-[12px] font-mono w-[82px] flex-shrink-0 pt-0.5 ${e.tw ? 'text-plus-600 font-bold' : 'text-ink-400'}`}>{e.date}</span>
            <div className="min-w-0">
              <div className="text-[14px] font-black text-ink-900 leading-tight">{e.who}</div>
              <div className="text-[12.5px] text-ink-500 leading-snug">{e.what}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 pb-1">
        <span className="w-3 h-3 rounded bg-plus-50 border border-plus-300" />
        <span className="text-[12px] text-ink-500">綠色 = 已發生在台灣。請注意名單上的角色：卡組織、發卡銀行、電信、AI 平台——</span>
        <span className="text-[12px] font-black text-bird-700">還沒有電子支付機構。</span>
      </div>
    </PaySlideShell>
  );
}
