'use client';

import { Bot, Fingerprint, Store, Check } from 'lucide-react';
import { PAY_FONT } from '@/components/slide/pay_slide_shell';

export default function PaySlide1() {
  return (
    <div
      className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col text-ink-900"
      style={{ fontFamily: PAY_FONT }}
    >
      {/* Info: (20260923 - Luphia) 官網首屏語彙：細橫線 + 空心圓、蜜桃色大圓、彩色小圓點 */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute right-[-80px] top-[120px] w-[560px] h-[560px] rounded-full bg-plus-50" />
        <div className="absolute right-[430px] top-[70px] w-[90px] h-[90px] rounded-full border border-plus-200" />
        <div className="absolute left-[-50px] bottom-[-70px] w-[200px] h-[200px] rounded-full bg-plus-50" />
        <div className="absolute right-[120px] top-[96px] w-[70px] h-[70px] rounded-full bg-plus-100" />
        <div className="absolute right-[470px] bottom-[150px] w-[12px] h-[12px] rounded-full bg-plus-500" />
        <div className="absolute right-[90px] bottom-[250px] w-[10px] h-[10px] rounded-full bg-bird-500" />
        <div className="absolute right-[400px] top-[260px] w-[8px] h-[8px] rounded-full bg-bird-300" />
      </div>

      {/* Info: (20260923 - Luphia) 右側主視覺：手機結帳頁，付款鍵已被代理人取代 */}
      <div className="absolute right-[190px] top-[132px] z-10 w-[260px] h-[500px] rounded-[40px] border-[7px] border-ink-900 bg-white shadow-2xl px-4 pt-6 pb-4 flex flex-col" aria-hidden="true">
        <div className="flex items-center justify-between mb-4 px-1">
          <span className="text-[10px] font-bold text-ink-400">22:47</span>
          <span className="text-[13px] font-black text-plus-500">結帳</span>
          <span className="w-4" />
        </div>
        {['貓飼料 7.5kg', '化毛膏', '門市取貨'].map((item, i) => (
          <div key={item} className="flex justify-between py-2.5 border-b border-dashed border-ink-200 text-[12px] text-ink-500 px-1">
            <span>{item}</span>
            <span className="font-mono">{['1,090', '190', '0'][i]}</span>
          </div>
        ))}
        <div className="flex justify-between pt-3 text-[14px] text-ink-900 font-black px-1">
          <span>合計</span>
          <span className="font-mono">NT$ 1,280</span>
        </div>
        <div className="mt-auto flex flex-col gap-2.5">
          <div className="rounded-2xl bg-plus-50 border border-plus-200 px-3 py-2.5 flex items-center gap-2">
            <Bot className="w-4 h-4 text-plus-500" />
            <span className="text-[11px] font-bold text-plus-600 leading-tight">依你的規則，已由代理人完成</span>
          </div>
          <div className="h-[48px] rounded-full border-2 border-dashed border-ink-200 flex items-center justify-center">
            <span className="text-[16px] font-black tracking-[0.4em] text-ink-300 line-through">付款</span>
          </div>
        </div>
      </div>
      <div className="absolute right-[88px] top-[300px] z-20 w-[120px] rounded-full bg-plus-500 text-white shadow-xl shadow-plus-500/30 px-4 py-2.5 flex items-center gap-2" aria-hidden="true">
        <Check className="w-4 h-4" />
        <span className="text-[12px] font-black">0 次點擊</span>
      </div>

      {/* Info: (20260923 - Luphia) 頂部標記 */}
      <div className="z-10 flex items-center justify-between px-16 pt-10">
        <div>
          <div className="text-[16px] font-black tracking-tight text-plus-500">CAFECA</div>
          <div className="text-[11px] tracking-[0.18em] text-ink-400">支付產業洞察報告</div>
        </div>
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-plus-500 text-white shadow-lg shadow-plus-500/25">
          <span className="text-[12px] font-bold tracking-wider">致 全盈+PAY 經營團隊 · 2026.09</span>
        </div>
      </div>

      {/* Info: (20260923 - Luphia) 主標題 */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16 max-w-[720px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-16 h-[2px] bg-plus-300" />
          <span className="w-3 h-3 rounded-full border-2 border-plus-300" />
          <span className="text-[13px] font-bold tracking-[0.3em] text-plus-500">A STORY IN FOUR ACTS</span>
        </div>
        <h1 className="text-[76px] font-black tracking-tight leading-[1.08] text-plus-500">
          當 AI<br />學會「付」
        </h1>
        <p className="text-[21px] text-ink-500 leading-relaxed mt-7">
          付款鍵正在消失。當沒有人再按下它，<br />
          <span className="text-ink-900 font-bold">誰還會被記住？</span>
        </p>
      </div>

      {/* Info: (20260923 - Luphia) 底部三個關鍵詞 */}
      <div className="z-10 flex gap-3 px-16 pb-10">
        {[
          { icon: Bot, value: '代理人成為新的消費者' },
          { icon: Fingerprint, value: '授權取代按鍵' },
          { icon: Store, value: '信任落在實體世界' },
        ].map((item) => (
          <div key={item.value} className="rounded-full border border-plus-200 bg-white px-5 py-2.5 flex items-center gap-2.5 shadow-sm">
            <item.icon className="w-4 h-4 text-plus-500 flex-shrink-0" />
            <span className="text-[14px] font-bold text-ink-700">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
