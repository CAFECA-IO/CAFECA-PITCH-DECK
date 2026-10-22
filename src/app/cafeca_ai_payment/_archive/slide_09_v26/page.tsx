'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { LayoutGrid, MousePointerClick, Gift, Megaphone, Heart } from 'lucide-react';

export default function PaySlide9() {
  const losses = [
    { icon: MousePointerClick, k: 'App 開啟次數', v: '代理人走 API，不開 App。MAU 仍在，但「人」不來了。', tag: '流量' },
    { icon: LayoutGrid, k: '首頁版位', v: '沒有人看首頁，版位與導購分潤跟著失去價值。', tag: '廣告' },
    { icon: Gift, k: '「選擇的那一刻」', v: '滿額回饋靠的是結帳前那一秒的心動；代理人沒有心動，只有規則。', tag: '回饋' },
    { icon: Megaphone, k: '品牌露出', v: '付款頁上的 Logo 從每天看見，變成月底帳單上的一行字。', tag: '記憶' },
    { icon: Heart, k: '習慣綁定', v: '「我都用這個付」的慣性，換成「代理人都選最划算的」。', tag: '黏著' },
  ];

  return (
    <PaySlideShell
      act="ACT II · 誰會輸"
      scene="第二幕"
      accent="bird"
      pageLabel="09 / 26"
      title={<>付款鍵消失時，<span className="text-bird-700">跟著消失的五樣東西</span></>}
      subtitle={<>掃碼錢包這十年的商業模式，幾乎都長在「使用者打開 App 的那幾秒」上。代理人不會打開 App。</>}
      footer="影響為本報告之推論，非對任何業者營運數據的評估。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-5 gap-4 pb-2">
        {losses.map((l, i) => (
          <div key={l.k} className="relative bg-white border border-ink-200 rounded-2xl p-5 flex flex-col shadow-sm overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-bird-300" style={{ opacity: 1 - i * 0.15 }} />
            <span className="text-[10px] font-mono tracking-[0.25em] text-bird-700 mb-3">{l.tag}</span>
            <l.icon className="w-9 h-9 text-ink-400 mb-5" />
            <div className="text-[21px] font-black text-ink-900 leading-tight mb-3">{l.k}</div>
            <div className="text-[15px] text-ink-500 leading-relaxed">{l.v}</div>
            <div className="mt-auto pt-4 text-[34px] font-black text-ink-200 leading-none">0{i + 1}</div>
          </div>
        ))}
      </div>
      <div className="pb-1 flex items-center gap-4">
        <div className="h-px flex-1 bg-ink-300" />
        <span className="text-[15px] font-black text-ink-900">介面不再是護城河。<span className="text-bird-700">能讓代理人「非你不可」的東西，才是。</span></span>
        <div className="h-px flex-1 bg-ink-300" />
      </div>
    </PaySlideShell>
  );
}
