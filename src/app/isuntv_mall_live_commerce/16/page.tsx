'use client';

import { ArrowDownToLine, ArrowUpFromLine, ShieldCheck, ScrollText } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';

export default function MallLiveSlide16() {
  const pulls = ['訂單', '付款', '物流', '售後資料'];
  const pushes = ['商品', '庫存', '結算資料'];
  const guards = [
    { icon: ShieldCheck, name: '權限 / 鑒權', desc: 'API Key + 角色範圍，第三方只拿得到被授權的資料' },
    { icon: ShieldCheck, name: '限流', desc: '防止外部平台高頻拉取拖垮結算主系統' },
    { icon: ScrollText, name: '完整請求日誌 + 異常記錄', desc: '每一次呼叫留痕，出問題可回放' },
  ];

  return (
    <MallSlideShell
      chapter="CH 08 · 開放能力"
      title={<span>標準化開放 API：<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">接得上所有成熟電商平台</span></span>}
      subtitle="系統標準化開放 API（需求 #31），今天接 Shopify，明天接蝦皮、momo、TikTok Shop——中樞不動，前台隨市場換。"
      pageLabel="16 / 20"
      compact
    >
      <div className="h-full grid grid-cols-2 gap-6 content-center">

        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/[0.06] p-6">
          <div className="flex items-center gap-3 mb-4">
            <ArrowDownToLine className="w-8 h-8 text-cyan-300" />
            <div>
              <div className="text-[20px] font-black text-white">可外部拉取（需求 #32）</div>
              <div className="text-[12px] text-slate-400 font-mono tracking-wider">INBOUND · PULL</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {pulls.map((p) => (
              <span key={p} className="px-4 py-2 rounded-lg bg-white/[0.06] border border-white/12 text-[15px] font-bold text-slate-200">{p}</span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-rose-400/30 bg-rose-500/[0.06] p-6">
          <div className="flex items-center gap-3 mb-4">
            <ArrowUpFromLine className="w-8 h-8 text-rose-300" />
            <div>
              <div className="text-[20px] font-black text-white">可對外推送（需求 #33）</div>
              <div className="text-[12px] text-slate-400 font-mono tracking-wider">OUTBOUND · PUSH</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {pushes.map((p) => (
              <span key={p} className="px-4 py-2 rounded-lg bg-white/[0.06] border border-white/12 text-[15px] font-bold text-slate-200">{p}</span>
            ))}
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-4">
          {guards.map((g) => (
            <div key={g.name} className="rounded-xl border border-violet-400/25 bg-violet-500/[0.06] px-5 py-4 flex items-start gap-3">
              <g.icon className="w-6 h-6 text-violet-300 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[15.5px] font-black text-white mb-1">{g.name}</div>
                <div className="text-[12.5px] text-slate-400 leading-relaxed">{g.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </MallSlideShell>
  );
}
