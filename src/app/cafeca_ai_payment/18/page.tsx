'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { ShoppingCart, Skull, UserX, Database } from 'lucide-react';

export default function PaySlide18() {
  const cases = [
    {
      icon: ShoppingCart,
      q: '代理人買錯了，誰負責？',
      story: '主人說「補貓砂」，代理人買了 20 包。',
      need: '授權書要能證明「規則說了什麼」，爭議才分得清是代理人越權、還是規則寫得太寬。',
      role: '授權紀錄保管者、爭議受理窗口',
    },
    {
      icon: Skull,
      q: '代理人被騙了呢？',
      story: '惡意商家在頁面裡藏字，誘導代理人加購。',
      need: '商家白名單、價格異常偵測、超出品類即停——把防詐從「提醒人」改成「約束代理人」。',
      role: '商家端風控、交易前攔截',
    },
    {
      icon: UserX,
      q: '來的根本不是她的代理人？',
      story: '有人偽造代理人身分，拿著偷來的授權刷額度。',
      need: '代理人身分要綁定裝置與實名帳戶，高風險動作回到真人確認，門市可作為核身據點。',
      role: 'Know Your Agent、實名核驗',
    },
    {
      icon: Database,
      q: '代理人知道太多了？',
      story: '為了補貨，它知道了你幾點回家、貓生了什麼病。',
      need: '最小必要揭露：代理平台只拿到「這筆可以付」，而不是整本消費史。',
      role: '資料治理、個資最小化',
    },
  ];

  return (
    <PaySlideShell
      act="ACT IV · 下一步"
      scene="第四幕 · 暗處"
      accent="plus"
      pageLabel="18 / 20"
      title={<>每個好故事都有反派：<span className="text-plus-600">四個還沒有標準答案的問題</span></>}
      subtitle={<>銀行公會今年 8 月的交流會，把焦點放在身分驗證、責任歸屬與爭議處理——這正是代理支付最需要「在地、受監理的一方」出面的地方。風險不是阻力，是入場券。</>}
      footer="規範框架：電子支付機構管理條例、個人資料保護法、金管會《金融業運用人工智慧（AI）指引》；銀行公會交流內容引自工商時報 2026.08.13。具體適法性須個案評估。"
      compact
    >
      <div className="flex-1 min-h-0 grid grid-cols-4 gap-4 pb-2">
        {cases.map((c) => (
          <div key={c.q} className="bg-white border border-ink-200 rounded-2xl p-5 flex flex-col shadow-sm">
            <c.icon className="w-6 h-6 text-plus-500 mb-3" />
            <div className="text-[20px] font-black text-ink-900 leading-snug mb-3">{c.q}</div>
            <div className="text-[14px] italic text-ink-400 leading-snug mb-4 border-l-2 border-plus-200 pl-3">{c.story}</div>
            <div className="text-[15px] text-ink-700 leading-relaxed flex-1">{c.need}</div>
            <div className="mt-3 pt-3 border-t border-dashed border-ink-300">
              <div className="text-[10px] font-bold tracking-widest text-ink-400 mb-0.5">電支業者可扮演</div>
              <div className="text-[14px] font-bold text-plus-600">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </PaySlideShell>
  );
}
