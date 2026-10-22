'use client';

import { MonitorPlay, Store, Globe, Webhook, FileOutput, Database, ArrowDown, ArrowUp } from 'lucide-react';
import MallSlideShell from '@/components/slide/mall_slide_shell';

export default function MallLiveSlide3() {
  const fronts = [
    { icon: MonitorPlay, name: '直播間', desc: '直播價 · 搶購 · 活動' },
    { icon: Store, name: 'iSUN TVmall 官網商城', desc: 'Shopify · 零售價' },
    { icon: Globe, name: '第三方電商平台', desc: 'API 對接 · 全流程資料' },
  ];

  const cores = [
    { name: '商品中心', desc: '三價體系 · SKU 主檔' },
    { name: '訂單中心', desc: '三類訂單歸集' },
    { name: '庫存中心', desc: '雙向同步' },
    { name: '供應商結算', desc: '拆單 · 凍結 · 應付' },
    { name: '主播分潤', desc: '分級 · 佣金 + 運費' },
    { name: '財務對帳', desc: '業務帳 vs 資金帳' },
  ];

  const outputs = ['標準報表 ×6', '自動發票', 'Excel / 會計軟體', '開放 API', '日誌 + 告警'];

  return (
    <MallSlideShell
      chapter="CH 01 · 設計總綱"
      title={<span>系統全景：<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">前台多路開花，後台一處收斂</span></span>}
      pageLabel="03 / 20"
      compact
    >
      <div className="h-full flex flex-col gap-2.5">

        {/* Info: (20260902 - Luphia) 前台層 */}
        <div className="grid grid-cols-3 gap-3">
          {fronts.map((f) => (
            <div key={f.name} className="rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/[0.07] px-4 py-2.5 flex items-center gap-3">
              <f.icon className="w-6 h-6 text-fuchsia-300 flex-shrink-0" />
              <div>
                <div className="text-[15px] font-bold text-white leading-tight">{f.name}</div>
                <div className="text-[11px] text-slate-400">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info: (20260902 - Luphia) 同步層 */}
        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-1.5 flex items-center justify-center gap-6">
            <span className="flex items-center gap-1.5 text-[12px] text-slate-300"><ArrowDown className="w-3.5 h-3.5 text-emerald-400" />Webhook：訂單 / 付款 / 發貨 / 退款 / 拒付 / 手續費</span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-300"><ArrowUp className="w-3.5 h-3.5 text-rose-400" />推送：商品 / 規格 / 圖文 / 雙價 / 庫存</span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-300"><Webhook className="w-3.5 h-3.5 text-violet-400" />全程留痕 · 可查 · 可對帳 · 可回溯</span>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 中樞層 */}
        <div className="flex-1 rounded-2xl border border-rose-400/40 bg-gradient-to-br from-rose-500/[0.08] to-violet-500/[0.08] p-4 min-h-0 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-rose-300" />
            <span className="text-[16px] font-black text-white">財務結算系統（唯一數據主源頭）</span>
            <span className="ml-auto text-[11px] font-mono tracking-widest text-rose-300/80">SINGLE SOURCE OF TRUTH</span>
          </div>
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2.5 min-h-0">
            {cores.map((c) => (
              <div key={c.name} className="rounded-xl border border-white/12 bg-[#170f28]/80 px-4 flex flex-col justify-center">
                <div className="text-[16px] font-bold text-white leading-tight mb-1">{c.name}</div>
                <div className="text-[12px] text-slate-400 leading-snug">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 輸出層 */}
        <div className="flex items-center gap-2.5">
          <FileOutput className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          {outputs.map((o) => (
            <span key={o} className="flex-1 text-center px-3 py-2 rounded-lg border border-emerald-400/25 bg-emerald-500/[0.06] text-[12.5px] font-bold text-emerald-200">
              {o}
            </span>
          ))}
        </div>

      </div>
    </MallSlideShell>
  );
}
