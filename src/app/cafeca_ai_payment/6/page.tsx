'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { KeyRound, ScrollText, BadgeCheck, ArrowRight } from 'lucide-react';

export default function PaySlide6() {
  const keys = [
    {
      icon: KeyRound,
      name: '代碼化憑證',
      en: 'Agentic Token',
      old: '卡號／帳號',
      q: '錢從哪裡付？',
      body: '代理人拿到的不是卡號，而是一枚綁定「這個代理人、這家商家、這個額度」的代碼，用完即失效。',
      who: '卡組織、發卡行、ACP 的共享支付代碼',
    },
    {
      icon: ScrollText,
      name: '授權書',
      en: 'Mandate / Verifiable Intent',
      old: '按下付款鍵',
      q: '主人真的同意嗎？',
      body: '主人事先簽下的規則——品類、上限、商家、何時要再問我——被寫成可驗證的紀錄，爭議時拿得出來。',
      who: 'Google AP2 的 mandate、Mastercard 的可驗證意圖',
    },
    {
      icon: BadgeCheck,
      name: '代理人身分',
      en: 'Know Your Agent',
      old: '驗證碼／OTP',
      q: '來的是誰的代理人？',
      body: '商家要能分辨「可信代理人」與「惡意機器人」——後者已占全球網路流量約 37%。',
      who: 'Visa Trusted Agent Protocol',
    },
  ];

  return (
    <PaySlideShell
      act="ACT I · 軌道已經鋪好"
      scene="第一幕"
      pageLabel="06 / 20"
      title={<>三把新鑰匙，取代了<span className="text-plus-600">「一根手指」</span></>}
      subtitle={<>過去一筆交易的信任，建立在「本人親手按下去」。代理人沒有手指，於是產業用三件東西重建信任。誰握有這三把鑰匙，誰就握有下一個十年的交易。</>}
      footer="惡意機器人占比引自 Visa《2026 五大支付趨勢》台灣新聞稿（2026.03）；協定名稱依各家公開規格。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-3 gap-5 pb-2">
        {keys.map((k, i) => (
          <div key={k.name} className={`rounded-2xl border p-5 flex flex-col ${i === 1 ? 'bg-plus-50 border-plus-300' : 'bg-white border-ink-200 shadow-sm'}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-plus-500' : 'bg-ink-900'}`}>
                <k.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[20px] font-black text-ink-900 leading-tight">{k.name}</div>
                <div className="text-[11px] font-mono text-ink-400">{k.en}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] mb-3">
              <span className="px-2 py-0.5 rounded bg-ink-100 text-ink-400 line-through">{k.old}</span>
              <ArrowRight className="w-3.5 h-3.5 text-ink-400" />
              <span className="font-bold text-ink-900">{k.q}</span>
            </div>
            <p className="text-[16px] text-ink-700 leading-relaxed flex-1">{k.body}</p>
            <div className="pt-3 border-t border-dashed border-ink-300 text-[11.5px] text-ink-400">
              <span className="font-bold text-ink-500">目前在做的人：</span>{k.who}
            </div>
          </div>
        ))}
      </div>
      <div className="pb-1 text-[14px] text-ink-700">
        <span className="font-black text-plus-600">伏筆：</span>第一把鑰匙屬於卡組織；第三把屬於平台。<span className="font-black">中間那把「授權書」——記錄一個人的規則與習慣——目前還沒有主人。</span>
      </div>
    </PaySlideShell>
  );
}
