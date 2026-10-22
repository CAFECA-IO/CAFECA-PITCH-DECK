'use client';

import { Store, Globe, MonitorPlay, FileOutput, Database, ArrowDown, ArrowUp, Webhook } from 'lucide-react';
import FaSlideShell from '@/components/slide/fa_slide_shell';

export default function EcModuleSlide3() {
  const fronts = [
    { icon: Store, name: 'Shopify 商店', desc: '官網商城 · Webhook 即時' },
    { icon: Globe, name: '第三方平台商店', desc: '蝦皮 / momo / TikTok Shop / 樂天' },
    { icon: MonitorPlay, name: '直播電商前台', desc: '直播間 · 頻道節目表' },
  ];

  const cores = [
    { name: '商店中心', desc: '多店管理 · 一店一帳本' },
    { name: '商品中心', desc: '三價體系 · SKU 主檔' },
    { name: '訂單中心', desc: '多平台歸集' },
    { name: '庫存中心', desc: '雙向同步' },
    { name: '結算分潤', desc: '供應商 · 主播 / KOL' },
    { name: '帳本對帳', desc: '業務帳 vs 資金帳' },
  ];

  const outputs = ['獨立帳本 × N 店', '標準報表 ×6', '自動發票', 'Excel / 會計軟體', '開放 API'];

  return (
    <FaSlideShell
      chapter="CH 01 · 設計總綱"
      title={<span>模組全景：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">一份規格接所有平台，一處收斂進帳本</span></span>}
      pageLabel="03 / 21"
      compact
    >
      <div className="h-full flex flex-col gap-2.5">

        {/* Info: (20260902 - Luphia) 前台層 */}
        <div className="grid grid-cols-3 gap-3">
          {fronts.map((f) => (
            <div key={f.name} className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 flex items-center gap-3">
              <f.icon className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <div className="text-[15px] font-bold text-slate-900 leading-tight">{f.name}</div>
                <div className="text-[11px] text-slate-500">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Info: (20260902 - Luphia) 統一串接規格層 */}
        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-lg border border-orange-300 bg-orange-50 px-4 py-1.5 flex items-center justify-center gap-6">
            <span className="text-[12px] font-black text-orange-600 tracking-widest">統一串接規格</span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-600"><ArrowDown className="w-3.5 h-3.5 text-emerald-600" />拉取：訂單 / 付款 / 物流 / 售後 / 金流報表</span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-600"><ArrowUp className="w-3.5 h-3.5 text-orange-600" />推送：商品 / 規格 / 價格 / 庫存</span>
            <span className="flex items-center gap-1.5 text-[12px] text-slate-600"><Webhook className="w-3.5 h-3.5 text-sky-600" />全程留痕 · 可查 · 可對帳 · 可回溯</span>
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 中樞層 */}
        <div className="flex-1 rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50 to-sky-50 p-4 min-h-0 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-orange-600" />
            <span className="text-[16px] font-black text-slate-900">iSunFA 電商整合模組（唯一數據主源頭）</span>
            <span className="ml-auto text-[11px] font-mono tracking-widest text-orange-600">SINGLE SOURCE OF TRUTH</span>
          </div>
          <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2.5 min-h-0">
            {cores.map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 bg-white px-4 flex flex-col justify-center">
                <div className="text-[16px] font-bold text-slate-900 leading-tight mb-1">{c.name}</div>
                <div className="text-[12px] text-slate-500 leading-snug">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260902 - Luphia) 輸出層 */}
        <div className="flex items-center gap-2.5">
          <FileOutput className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          {outputs.map((o) => (
            <span key={o} className="flex-1 text-center px-3 py-2 rounded-lg border border-emerald-300 bg-emerald-50 text-[12.5px] font-bold text-emerald-700">
              {o}
            </span>
          ))}
        </div>

      </div>
    </FaSlideShell>
  );
}
