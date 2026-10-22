'use client';

import PaySlideShell from '@/components/slide/pay_slide_shell';
import { Quote } from 'lucide-react';

export default function PaySlide12() {
  return (
    <PaySlideShell
      act="ACT III · 最強配角"
      scene="第三幕 · 轉折"
      pageLabel="12 / 20"
      title={<>其實，全盈早就寫好了這一幕的台詞</>}
      footer="引自全盈+PAY 總經理劉美玲 2026 年 5 月受訪（經理人月刊、工商時報）；右欄為本報告之詮釋。"
    >
      <div className="flex-1 min-h-0 grid grid-cols-[1fr_1fr] gap-8 pb-2">
        <div className="relative rounded-[32px] bg-plus-500 text-white shadow-xl shadow-plus-500/25 px-10 py-9 flex flex-col justify-center overflow-hidden">
          <Quote className="absolute top-6 left-6 w-16 h-16 text-white/25" />
          <div className="text-[14px] font-mono tracking-[0.25em] text-white/80 mb-5">2026 年 5 月</div>
          <div className="text-[48px] font-black leading-[1.15]">
            不只做錢包，<br />
            要當<span className="text-bird-100">「最強配角」</span>。
          </div>
          <div className="text-[15px] text-white/90 mt-6 leading-relaxed">
            串聯 200 多個品牌、48 萬個支付據點，<br />
            不當孤立的錢包 App，而當串起生態圈的那一方。
          </div>
          <div className="text-[13px] text-white/75 mt-6">— 全盈+PAY 總經理 劉美玲（意旨整理）</div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-[15px] text-ink-500 leading-relaxed">
            這句話說出口時，是一個關於<span className="font-bold text-ink-900">生態圈合作</span>的策略。放進代理時代，它會變成一個關於<span className="font-bold text-plus-600">生存</span>的答案：
          </div>
          {[
            { k: '主角換人了', v: '從消費者本人，變成替他辦事的 AI 代理人。主角永遠是別人的——這不是劣勢，是前提。' },
            { k: '配角看不見，但不能缺', v: '好的配角不搶鏡頭，卻讓主角的每場戲都演得下去：驗身分、守規則、交貨、退款。' },
            { k: '「最強」的定義', v: '不是回饋最多，而是「代理人要在台灣把一件事辦完，繞不過你」。' },
          ].map((c, i) => (
            <div key={c.k} className={`flex-1 rounded-2xl px-6 py-4 border flex flex-col justify-center ${i === 2 ? 'bg-plus-50 border-plus-300' : 'bg-white border-ink-200 shadow-sm'}`}>
              <div className={`text-[17px] font-black mb-1 ${i === 2 ? 'text-plus-700' : 'text-ink-900'}`}>{c.k}</div>
              <div className="text-[13.5px] text-ink-500 leading-snug">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </PaySlideShell>
  );
}
