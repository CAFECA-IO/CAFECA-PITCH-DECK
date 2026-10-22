'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { ArrowDown } from 'lucide-react';

export default function PaySlide11() {
  const layers = [
    {
      name: '介面層',
      en: 'WHO THE USER TALKS TO',
      players: 'AI 助理、作業系統、超級 App、電商平台',
      fate: '被 AI 平台吸走',
      note: '對話框取代首頁；全球只會剩少數幾個入口。',
      tone: 'bg-ink-100 border-ink-300',
      fateTone: 'text-ink-500',
    },
    {
      name: '錢包即介面',
      en: 'THE SQUEEZED MIDDLE',
      players: '以 App、掃碼、回饋為核心的錢包',
      fate: '被擠壓',
      note: '上面失去使用者的眼睛，下面沒有卡組織的網路規模。',
      tone: 'bg-bird-50 border-bird-300 border-dashed',
      fateTone: 'text-bird-700',
    },
    {
      name: '網路與代碼層',
      en: 'RAILS & TOKENS',
      players: 'Visa、Mastercard、發卡銀行、清算機構',
      fate: '被強化',
      note: '代碼化憑證讓既有卡網路更值錢，並以規格定義誰能上車。',
      tone: 'bg-ink-100 border-ink-300',
      fateTone: 'text-ink-500',
    },
    {
      name: '在地信任層',
      en: 'LOCAL TRUST & LAST MILE',
      players: '實名身分、授權書、實體履約、退款與爭議、在地法遵',
      fate: '空位，等人來坐',
      note: '全球平台做不到的：知道「這個人、在這條巷子、這個規則」。',
      tone: 'bg-plus-50 border-plus-400',
      fateTone: 'text-plus-600',
    },
  ];

  return (
    <PaySlideShell
      act="ACT II · 誰會輸"
      scene="第二幕"
      accent="bird"
      pageLabel="11 / 26"
      title={<>價值正在重新分配：<span className="text-bird-700">中間被擠壓，底下空出一個位子</span></>}
      subtitle={<>代理人不會讓支付消失，而是把支付拆成四層。上面兩層是全球戰爭，第三層是卡組織的主場——第四層，只有在地的人坐得上去。</>}
      footer="分層架構為本報告之產業分析框架。"
      compact
    >
      <div className="flex-1 min-h-0 flex flex-col gap-2 pb-2">
        {layers.map((l, i) => (
          <div key={l.name} className="flex-1 min-h-0 flex flex-col">
            <div className={`flex-1 rounded-2xl border-2 px-6 py-3 grid grid-cols-[230px_1fr_200px] gap-6 items-center ${l.tone}`}>
              <div>
                <div className="text-[23px] font-black text-ink-900 leading-tight">{l.name}</div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-ink-400">{l.en}</div>
              </div>
              <div>
                <div className="text-[15.5px] font-bold text-ink-900">{l.players}</div>
                <div className="text-[14px] text-ink-500 mt-0.5">{l.note}</div>
              </div>
              <div className={`text-[19px] font-black text-right ${l.fateTone}`}>{l.fate}</div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center -my-1 relative z-10">
                <ArrowDown className="w-3.5 h-3.5 text-ink-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
