'use client';

import { PaySceneShell } from '@/components/slide/pay_slide_shell';
import { Package, Undo2, Coins, UserCheck } from 'lucide-react';

export default function PaySlide16() {
  const hands = [
    { icon: Package, t: '取貨', d: '代理人下單後，貨需要一個 24 小時有人在的地方落地。', who: '夜間下單、隔日取件' },
    { icon: Undo2, t: '退貨與退款', d: '代理人買錯的那一刻，信任取決於「多快、多近能退」。', who: '門市收退、即時退回帳戶' },
    { icon: Coins, t: '現金進出', d: '沒有銀行帳戶或不想綁卡的人，需要一個把現金變成授權額度的入口。', who: '門市儲值、普惠金融' },
    { icon: UserCheck, t: '真人確認', d: '高風險交易需要「看得到人」的一步：臨櫃核身、代理人無法冒充。', who: '實名核驗、防詐關卡' },
  ];

  return (
    <PaySceneShell
      slug="SCENE 3 · 巷口門市　週五　07:58　—　代理人會買，但不會走路"
      pageLabel="16 / 20"
      footer="情境推演，取件數字為虛構示意；全家店數（2026.06）與門市 AI 自動訂購、人工／自助切換 POS 引自 2026.09 全家法說會。"
    >
      <div className="flex flex-col flex-1 min-h-0">
        <div className="text-[14px] text-ink-400 mb-2">全台 4,504 家全家裡的一家。店員刷開今天的取件清單：昨晚下單的 214 件裡，有 61 件，下單的「人」其實是代理人。</div>
        <h2 className="text-[34px] font-black leading-tight text-ink-900 mb-6">
          全球最聰明的 AI，也需要<span className="text-plus-500">一雙在台灣巷口的手</span>。
        </h2>

        <div className="grid grid-cols-4 gap-4 flex-1 min-h-0">
          {hands.map((h, i) => (
            <div key={h.t} className="rounded-[24px] bg-white border border-plus-100 shadow-sm p-5 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-plus-500 flex items-center justify-center shadow-md shadow-plus-500/25">
                  <h.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[28px] font-black text-plus-100">0{i + 1}</span>
              </div>
              <div className="text-[24px] font-black text-ink-900 mb-3">{h.t}</div>
              <div className="text-[16px] text-ink-500 leading-relaxed flex-1">{h.d}</div>
              <div className="mt-3 pt-3 border-t border-dashed border-plus-200 text-[13px] font-bold text-bird-700">{h.who}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-full bg-plus-500 px-8 py-3.5 flex items-center justify-between shadow-lg shadow-plus-500/25">
          <span className="text-[15px] text-white">
            門市已經用 AI 自動訂貨；下一步是<span className="font-black">顧客的代理人直接和門市的代理人對話</span>——
          </span>
          <span className="text-[15px] font-black text-white">4,504 個據點，是任何雲端平台都複製不了的護城河。</span>
        </div>
      </div>
    </PaySceneShell>
  );
}
