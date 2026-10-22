'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Flag } from 'lucide-react';

export default function PaySlide19() {
  const phases = [
    {
      span: '0–6 個月',
      name: '讓代理人讀得懂全盈',
      verb: '準備',
      items: [
        '對外開放代理人沙盒與支付 API（先限白名單平台）',
        '設計「授權書」資料模型：品類、上限、商家、確認門檻',
        '把既有防詐與身分認證投資，延伸成代理人身分驗證',
        '與股東玉山銀行探討 Agentic Ready 經驗與代碼化憑證銜接',
        '讓寄杯、隨買跨店取可被代理人讀取、補貨與轉贈',
      ],
    },
    {
      span: '6–18 個月',
      name: '全家場景先上線',
      verb: '證明',
      items: [
        '全家一週：寄杯、日用品、全寵家補貨 × 門市取貨',
        '移工匯款：門市現金儲值 × 多語代理 × 收款人鎖定',
        '推出 App 內「我的代理人」管理頁與一鍵暫停',
        '接入第一個外部代理平台（如 Muse 進入亞洲時）',
      ],
    },
    {
      span: '18–36 個月',
      name: '成為代理商務的在地信任層',
      verb: '收費',
      items: [
        '門市履約（取貨／退貨／核身）以 API 開放給各代理平台',
        '授權書出國：日本 PayPay 跨境、馬來西亞與印尼走廊',
        '新收入：授權管理、代理履約、風控服務費',
        '與「三年轉盈」目標同一條時間線',
      ],
    },
  ];

  return (
    <PaySlideShell
      act="ACT IV · 下一步"
      scene="第四幕"
      pageLabel="19 / 20"
      title={<>36 個月三步走：<span className="text-plus-600">和「三年轉盈」走同一條路</span></>}
      subtitle={<>不需要押上全部籌碼。第一步是讓自己「可以被代理人使用」；第二步用兩個場景證明價值；第三步才把配角的位置變成收入。</>}
      footer="路線圖為本報告之建議，時程與項目須依全盈內部資源、合作夥伴意願與主管機關規範調整。「三年轉盈」目標引自 2026 年 5 月總經理受訪。"
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-5 pb-2 relative">
        {phases.map((p, i) => (
          <div key={p.span} className={`rounded-2xl border p-5 flex flex-col ${i === 2 ? 'bg-plus-50 border-plus-400' : 'bg-white border-ink-200 shadow-sm'}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-mono tracking-[0.15em] text-ink-400">{p.span}</span>
              <span className={`text-[11px] font-black px-2 py-0.5 rounded ${i === 2 ? 'bg-plus-500 text-white' : 'bg-ink-900 text-white'}`}>{p.verb}</span>
            </div>
            <div className="text-[24px] font-black text-ink-900 leading-tight mb-5">{p.name}</div>
            <ul className="flex flex-col gap-3 flex-1">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-[15.5px] text-ink-700 leading-snug">
                  <span className={`w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0 ${i === 2 ? 'bg-plus-500' : 'bg-ink-400'}`} />
                  {it}
                </li>
              ))}
            </ul>
            {i === 2 && (
              <div className="mt-3 flex items-center gap-2 text-[13px] font-black text-plus-700">
                <Flag className="w-4 h-4" /> 損益兩平
              </div>
            )}
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
