'use client';

import React from 'react';
import {
  Lock, RefreshCw, ArrowUpRight, ArrowDownLeft, CheckCircle2, AlertTriangle,
  Radio, ShoppingBag, Heart, Send, Search, Bell, FileSpreadsheet,
  CalendarClock, Tv, Eye, Plus,
} from 'lucide-react';

/**
 * Info: (20260902 - Luphia) mall_mockups.tsx
 * - iSunTVMall 直播電商簡報用的情境截圖元件庫：以程式繪製擬真 UI mockup
 * - 包含瀏覽器框 / 手機框，以及各關鍵功能畫面（商品三價、訂單歸集、結算單、對帳、主播分潤、報表）
 */

/* Info: (20260902 - Luphia) 瀏覽器截圖外框 */
export function MockBrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/15 bg-[#151024] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
      <div className="h-8 px-3 flex items-center gap-2 bg-[#1e1733] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-black/30 border border-white/10 flex items-center px-2.5 gap-1.5">
          <Lock className="w-2.5 h-2.5 text-emerald-400" />
          <span className="text-[10px] font-mono text-slate-400 truncate">{url}</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

/* Info: (20260902 - Luphia) 手機截圖外框 */
export function MockPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[28px] border-[6px] border-[#241c3a] bg-black overflow-hidden shadow-[0_24px_70px_-20px_rgba(0,0,0,0.9)] relative">
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-3.5 rounded-full bg-black z-20 border border-white/10" />
      {children}
    </div>
  );
}

/* Info: (20260902 - Luphia) 後台側欄 + 內容的通用版型 */
function AdminChrome({ active, children }: { active: string; children: React.ReactNode }) {
  const menu = ['總覽', '商品管理', '訂單歸集', '供應商', '主播分潤', '直播營運', '數據分析', '財務對帳', '報表中心'];
  return (
    <div className="flex bg-[#120d20] text-slate-200">
      <div className="w-[118px] border-r border-white/10 py-2.5 px-2 flex flex-col gap-0.5 bg-[#160f28]">
        <div className="flex items-center gap-1.5 px-2 pb-2 mb-1 border-b border-white/10">
          <span className="w-4 h-4 rounded bg-gradient-to-br from-rose-500 to-violet-500 flex items-center justify-center text-[8px] font-black text-white">iM</span>
          <span className="text-[9px] font-bold text-white tracking-wide">iSunTVMall</span>
        </div>
        {menu.map((m) => (
          <div
            key={m}
            className={`px-2 py-1 rounded text-[9px] font-medium ${m === active ? 'bg-rose-500/20 text-rose-300 border border-rose-400/30' : 'text-slate-500'}`}
          >
            {m}
          </div>
        ))}
      </div>
      <div className="flex-1 min-w-0">
        <div className="h-7 px-3 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Search className="w-2.5 h-2.5" />
            <span className="text-[8px]">搜尋 SKU / 訂單 / 供應商…</span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-2.5 h-2.5 text-slate-500" />
            <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：商品三價維護畫面 */
export function MockProductPricing() {
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/products/SKU-TW-8801">
      <AdminChrome active="商品管理">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 to-orange-500" />
              <div>
                <div className="text-[11px] font-bold text-white">膠原蛋白胜肽飲 30 入</div>
                <div className="text-[8px] font-mono text-slate-500">SKU-TW-8801 · 供應商：優鮮生技</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[8px] font-bold text-emerald-300">已上架 Shopify</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <div className="text-[8px] text-slate-500 mb-0.5">零售價</div>
              <div className="text-[15px] font-black text-white">NT$ 2,180</div>
              <div className="text-[7px] text-slate-500 mt-0.5">官網商城顯示</div>
            </div>
            <div className="rounded-lg border border-rose-400/40 bg-rose-500/10 p-2">
              <div className="text-[8px] text-rose-300 mb-0.5">直播價</div>
              <div className="text-[15px] font-black text-rose-200">NT$ 1,380</div>
              <div className="text-[7px] text-rose-300/70 mt-0.5">直播間限時顯示</div>
            </div>
            <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-2 relative">
              <div className="flex items-center gap-1 text-[8px] text-amber-300 mb-0.5"><Lock className="w-2 h-2" />工廠結算成本價</div>
              <div className="text-[15px] font-black text-amber-200">NT$ 645</div>
              <div className="text-[7px] text-amber-300/80 mt-0.5 font-bold">僅內部留存 · 禁止同步 Shopify</div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
            <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
              <RefreshCw className="w-2.5 h-2.5 text-fuchsia-400" />
              庫存 1,240 件 · 與 Shopify 雙向同步中（上次同步 12 秒前）
            </div>
            <div className="px-2 py-1 rounded bg-gradient-to-r from-rose-500 to-fuchsia-500 text-[8px] font-bold text-white">一鍵推送至 Shopify</div>
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：訂單自動歸集列表 */
export function MockOrderInbox() {
  const rows = [
    { id: '#TV-25417', src: '商城訂單', srcColor: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30', item: '膠原蛋白胜肽飲 ×2', state: '已付款', stateColor: 'text-emerald-300', amt: 'NT$ 2,760' },
    { id: '#LV-09883', src: '直播訂單', srcColor: 'bg-rose-500/15 text-rose-300 border-rose-400/30', item: '氣炸烤箱 14L ×1（買一送一）', state: '已發貨', stateColor: 'text-sky-300', amt: 'NT$ 3,990' },
    { id: '#MO-77102', src: '第三方平台', srcColor: 'bg-violet-500/15 text-violet-300 border-violet-400/30', item: '魚油軟膠囊 ×3', state: '部分退款', stateColor: 'text-amber-300', amt: 'NT$ 1,890' },
    { id: '#LV-09884', src: '直播訂單', srcColor: 'bg-rose-500/15 text-rose-300 border-rose-400/30', item: '沖牙機 ×1', state: '拒付爭議', stateColor: 'text-red-400', amt: 'NT$ 2,490' },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/orders?source=all">
      <AdminChrome active="訂單歸集">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-white">今日歸集 1,382 筆 · Webhook 即時回傳</div>
            <div className="flex items-center gap-1 text-[8px] text-emerald-300"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />同步正常 · 延遲 0.8s</div>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[70px_64px_1fr_56px_62px] px-2 py-1 bg-white/[0.05] text-[8px] text-slate-500 font-bold">
              <span>單號</span><span>來源</span><span>品項</span><span>狀態</span><span className="text-right">金額</span>
            </div>
            {rows.map((r) => (
              <div key={r.id} className="grid grid-cols-[70px_64px_1fr_56px_62px] px-2 py-1.5 border-t border-white/5 items-center">
                <span className="text-[8px] font-mono text-slate-300">{r.id}</span>
                <span><span className={`px-1.5 py-0.5 rounded-full border text-[7px] font-bold ${r.srcColor}`}>{r.src}</span></span>
                <span className="text-[8px] text-slate-300 truncate pr-1">{r.item}</span>
                <span className={`text-[8px] font-bold ${r.stateColor}`}>{r.state}</span>
                <span className="text-[8px] font-mono text-slate-200 text-right">{r.amt}</span>
              </div>
            ))}
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：供應商結算單 */
export function MockSupplierBill() {
  const lines = [
    { label: '銷售金額（已過凍結期 7 天）', value: 'NT$ 1,842,300', sign: '' },
    { label: '退款金額', value: '− NT$ 96,410', sign: 'text-amber-300' },
    { label: '平台扣點 8%', value: '− NT$ 139,671', sign: 'text-amber-300' },
    { label: '品質罰損（2 件客訴）', value: '− NT$ 6,200', sign: 'text-red-400' },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/suppliers/S-017/settlement/2026-08">
      <AdminChrome active="供應商">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-[11px] font-bold text-white">優鮮生技 · 2026/08 結算單</div>
              <div className="text-[8px] text-slate-500">結算週期：月結 · 凍結天數 N=7 · 銀行帳戶 ****-8842</div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[8px] font-bold text-sky-300">待打款</span>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-2">
            {lines.map((l) => (
              <div key={l.label} className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/5 last:border-0">
                <span className="text-[8px] text-slate-400">{l.label}</span>
                <span className={`text-[9px] font-mono font-bold ${l.sign || 'text-slate-200'}`}>{l.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-2.5 py-2 bg-emerald-500/10 border-t border-emerald-400/30">
              <span className="text-[9px] font-bold text-emerald-300">實際應付金額</span>
              <span className="text-[13px] font-mono font-black text-emerald-200">NT$ 1,600,019</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center">
            {[['累計應付', '12.4M'], ['已付', '9.8M'], ['待付', '1.6M'], ['未結餘額', '1.0M']].map(([k, v]) => (
              <div key={k} className="rounded-md border border-white/10 bg-white/[0.03] py-1">
                <div className="text-[7px] text-slate-500">{k}</div>
                <div className="text-[10px] font-mono font-bold text-slate-200">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：主播分潤設定 */
export function MockAnchorConfig() {
  const anchors = [
    { name: '小葵 Aoi', tag: '內部正式', tagColor: 'bg-rose-500/15 text-rose-300 border-rose-400/30', region: '台灣', rate: '12%', ship: '含運費補貼', gmv: 'NT$ 4.2M' },
    { name: 'Momoka', tag: '外部達人', tagColor: 'bg-violet-500/15 text-violet-300 border-violet-400/30', region: '日本', rate: '18%', ship: '運費另計', gmv: '¥ 9.6M' },
    { name: 'Grace L.', tag: '外部達人', tagColor: 'bg-violet-500/15 text-violet-300 border-violet-400/30', region: '馬來西亞', rate: '15%', ship: '含運費補貼', gmv: 'RM 380K' },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/anchors/commission">
      <AdminChrome active="主播分潤">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-white">主播佣金 + 運費規則 · 依人 / 依地區自由設置</div>
            <div className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-[8px] text-slate-300">批量管理：3 國 5 地區</div>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[1fr_58px_46px_46px_66px_58px] px-2 py-1 bg-white/[0.05] text-[8px] text-slate-500 font-bold">
              <span>主播</span><span>類型</span><span>地區</span><span>佣金</span><span>運費規則</span><span className="text-right">本月 GMV</span>
            </div>
            {anchors.map((a) => (
              <div key={a.name} className="grid grid-cols-[1fr_58px_46px_46px_66px_58px] px-2 py-1.5 border-t border-white/5 items-center">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-fuchsia-400 to-rose-500" />
                  <span className="text-[9px] font-bold text-slate-200">{a.name}</span>
                </span>
                <span><span className={`px-1.5 py-0.5 rounded-full border text-[7px] font-bold ${a.tagColor}`}>{a.tag}</span></span>
                <span className="text-[8px] text-slate-400">{a.region}</span>
                <span className="text-[9px] font-mono font-bold text-rose-300">{a.rate}</span>
                <span className="text-[8px] text-slate-400">{a.ship}</span>
                <span className="text-[8px] font-mono text-slate-200 text-right">{a.gmv}</span>
              </div>
            ))}
          </div>
          <div className="mt-1.5 text-[8px] text-slate-500">＊佣金比例與運費補貼各自獨立設定 — 因各主播備貨比例不同，系統不套用單一公式</div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：業務帳 vs 資金帳對帳 */
export function MockRecon() {
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/finance/reconciliation/payout-2026-08-W4">
      <AdminChrome active="財務對帳">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-white">Shopify Payout 對帳 · 2026/08 第 4 週</div>
            <span className="flex items-center gap-1 text-[8px] font-bold text-amber-300"><AlertTriangle className="w-2.5 h-2.5" />1 筆差異待處理</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="rounded-lg border border-cyan-400/30 bg-cyan-500/[0.06] p-2">
              <div className="flex items-center gap-1 text-[8px] font-bold text-cyan-300 mb-1"><ArrowUpRight className="w-2.5 h-2.5" />業務帳（系統訂單）</div>
              <div className="text-[14px] font-mono font-black text-white">NT$ 3,204,180</div>
              <div className="text-[7px] text-slate-500 mt-0.5">訂單 1,382 筆 − 退款 41 筆 − 手續費</div>
            </div>
            <div className="rounded-lg border border-emerald-400/30 bg-emerald-500/[0.06] p-2">
              <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-300 mb-1"><ArrowDownLeft className="w-2.5 h-2.5" />資金帳（Payout 實收）</div>
              <div className="text-[14px] font-mono font-black text-white">NT$ 3,201,690</div>
              <div className="text-[7px] text-slate-500 mt-0.5">Shopify Payout 報表自動抓取</div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            {[
              { step: '結算單產生', done: true }, { step: '對帳確認', done: true }, { step: '審核', done: true },
              { step: '待打款', done: false, now: true }, { step: '上傳憑證', done: false }, { step: '已結清', done: false },
            ].map((s, i, arr) => (
              <span key={s.step} className={`inline-flex items-center ${i < arr.length - 1 ? '' : ''}`}>
                <span className={`inline-flex items-center gap-1 px-2 py-1.5 text-[8px] font-bold ${s.done ? 'text-emerald-300' : s.now ? 'text-white bg-rose-500/20' : 'text-slate-600'}`}>
                  {s.done ? <CheckCircle2 className="w-2.5 h-2.5" /> : <span className={`w-2 h-2 rounded-full border ${s.now ? 'border-rose-300 bg-rose-400' : 'border-slate-600'}`} />}
                  {s.step}
                </span>
                {i < arr.length - 1 && <span className="text-slate-700 text-[8px]">›</span>}
              </span>
            ))}
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：報表中心儀表板 */
export function MockReportCenter() {
  const bars = [42, 58, 47, 66, 81, 74, 92];
  const reports = ['供應商銷售報表', 'SKU 進銷存報表', '渠道營收報表', '主播佣金報表', '三方分潤報表', '財務應付彙總'];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/reports">
      <AdminChrome active="報表中心">
        <div className="p-3">
          <div className="flex gap-2 mb-2">
            <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <div className="text-[8px] text-slate-500 mb-1">週渠道營收（NT$M）</div>
              <div className="flex items-end gap-1 h-10">
                {bars.map((b, i) => (
                  <div key={`bar-${b}-${String(i)}`} className="flex-1 rounded-sm bg-gradient-to-t from-rose-500/60 to-fuchsia-400/80" style={{ height: `${b}%` }} />
                ))}
              </div>
            </div>
            <div className="w-[128px] flex flex-col gap-1.5">
              <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="text-[7px] text-slate-500">本月 GMV</div>
                <div className="text-[12px] font-mono font-black text-white">NT$ 12.8M</div>
              </div>
              <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] p-2">
                <div className="text-[7px] text-slate-500">異常告警</div>
                <div className="text-[12px] font-mono font-black text-amber-300">3 則</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {reports.map((r) => (
              <div key={r} className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
                <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                <span className="text-[8px] text-slate-300">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：直播間手機畫面 */
export function MockLiveRoom({ scale = 1 }: { scale?: number }) {
  const chats = [
    { name: '呆萌小英', text: '這價格真的可以！' },
    { name: 'Kevin_88', text: '主播試吃一下～' },
    { name: '阿香', text: '已下單 +1 🔥' },
  ];
  return (
    <div style={{ width: 232 * scale }}>
      <MockPhoneFrame>
        <div className="w-[220px] h-[440px] relative bg-gradient-to-b from-[#3d1030] via-[#2a0f3a] to-[#120a24]">
          {/* Info: (20260902 - Luphia) 直播主視覺區 */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-rose-400 to-fuchsia-500 opacity-90 blur-[2px]" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#1c1030] border-2 border-white/20 flex items-center justify-center">
            <span className="text-[26px]">🎤</span>
          </div>

          <div className="absolute top-3 left-2 right-2 flex items-center justify-between z-10">
            <div className="flex items-center gap-1 bg-black/40 rounded-full pl-0.5 pr-1.5 py-0.5">
              <span className="w-4 h-4 rounded-full bg-gradient-to-br from-fuchsia-400 to-rose-500" />
              <span className="text-[8px] font-bold text-white">小葵 Aoi</span>
              <span className="px-1 rounded-full bg-rose-500 text-[6px] font-bold text-white">關注</span>
            </div>
            <div className="flex items-center gap-1 bg-black/40 rounded-full px-1.5 py-0.5">
              <Radio className="w-2 h-2 text-rose-400" />
              <span className="text-[7px] font-bold text-rose-300">LIVE</span>
              <span className="text-[7px] text-slate-300">12,483</span>
            </div>
          </div>

          {/* Info: (20260902 - Luphia) 彈幕區 */}
          <div className="absolute bottom-[86px] left-2 right-14 flex flex-col gap-1">
            {chats.map((c) => (
              <div key={c.name} className="self-start max-w-full bg-black/45 rounded-full px-2 py-0.5">
                <span className="text-[7px] font-bold text-amber-300">{c.name}：</span>
                <span className="text-[7px] text-white">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Info: (20260902 - Luphia) 商品卡：顯示直播價 */}
          <div className="absolute bottom-8 left-2 right-2 rounded-xl bg-black/60 border border-white/15 p-1.5 flex items-center gap-1.5 backdrop-blur">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-bold text-white truncate">膠原蛋白胜肽飲 30 入</div>
              <div className="flex items-baseline gap-1">
                <span className="text-[10px] font-black text-rose-400">$1,380</span>
                <span className="text-[7px] text-slate-500 line-through">$2,180</span>
                <span className="px-1 rounded bg-amber-400/20 text-[6px] font-bold text-amber-300">買一送一</span>
              </div>
            </div>
            <div className="px-2 py-1 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 flex items-center gap-0.5">
              <ShoppingBag className="w-2.5 h-2.5 text-white" />
              <span className="text-[8px] font-black text-white">搶購</span>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5">
            <div className="flex-1 bg-white/10 rounded-full px-2 py-1 text-[7px] text-slate-400">說點什麼…</div>
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <Send className="w-3 h-3 text-slate-300" />
          </div>
        </div>
      </MockPhoneFrame>
    </div>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：一鍵推送 Shopify 對話框 */
export function MockPushDialog() {
  const fields = [
    { name: '商品名稱 / 規格', on: true },
    { name: '圖文描述', on: true },
    { name: '零售價', on: true },
    { name: '直播價', on: true },
    { name: '庫存數量', on: true },
    { name: '工廠結算成本價', on: false, locked: true },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/products/push-to-shopify">
      <div className="p-3 bg-[#120d20]">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] font-bold text-white">一鍵推送至 Shopify（iSUN TVmall 官網商城）</div>
          <span className="text-[8px] text-slate-500">已選 24 個 SKU</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-2">
          {fields.map((f) => (
            <div key={f.name} className={`flex items-center justify-between rounded-md border px-2 py-1.5 ${f.locked ? 'border-amber-400/40 bg-amber-500/10' : 'border-white/10 bg-white/[0.03]'}`}>
              <span className={`text-[8px] ${f.locked ? 'text-amber-300 font-bold' : 'text-slate-300'}`}>{f.name}</span>
              {f.locked ? (
                <span className="flex items-center gap-1 text-[7px] font-bold text-amber-300"><Lock className="w-2 h-2" />系統攔截</span>
              ) : (
                <span className={`w-6 h-3 rounded-full relative ${f.on ? 'bg-emerald-500/60' : 'bg-slate-700'}`}>
                  <span className={`absolute top-0.5 w-2 h-2 rounded-full bg-white ${f.on ? 'right-0.5' : 'left-0.5'}`} />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-slate-500">推送後直播間即可上架販售，無需重複建品</span>
          <span className="px-2.5 py-1 rounded bg-gradient-to-r from-rose-500 to-fuchsia-500 text-[8px] font-bold text-white">開始推送</span>
        </div>
      </div>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：發票與多幣別面板 */
export function MockInvoicePanel() {
  const rows = [
    { no: 'AB-33810246', order: '#TV-25417', amt: 'NT$ 2,760', diff: '一致', ok: true },
    { no: 'AB-33810247', order: '#LV-09883', amt: 'NT$ 3,990', diff: '一致', ok: true },
    { no: 'AB-33810251', order: '#MO-77102', amt: 'NT$ 1,890', diff: '差額 -630', ok: false },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/finance/invoices">
      <AdminChrome active="財務對帳">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[10px] font-bold text-white">發票管理 · 自動開立 / 比對</div>
            <div className="flex gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-[7px] text-slate-300">NT$ / USD / JPY / MYR</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-400/30 text-[7px] font-bold text-emerald-300">匯出 Excel</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden mb-2">
            <div className="grid grid-cols-[86px_64px_60px_1fr] px-2 py-1 bg-white/[0.05] text-[8px] text-slate-500 font-bold">
              <span>發票號碼</span><span>訂單</span><span>金額</span><span>比對結果</span>
            </div>
            {rows.map((r) => (
              <div key={r.no} className="grid grid-cols-[86px_64px_60px_1fr] px-2 py-1.5 border-t border-white/5 items-center">
                <span className="text-[8px] font-mono text-slate-300">{r.no}</span>
                <span className="text-[8px] font-mono text-slate-400">{r.order}</span>
                <span className="text-[8px] font-mono text-slate-200">{r.amt}</span>
                <span className={`text-[8px] font-bold ${r.ok ? 'text-emerald-300' : 'text-amber-300'}`}>{r.ok ? '✓ 開票金額 = 結算金額' : `⚠ ${r.diff} · 已列入異常日誌`}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-2 py-1.5">
            <span className="text-[8px] text-slate-400">JPY 訂單匯兌損益：本月 <span className="text-red-400 font-mono font-bold">− NT$ 4,210</span> 已自動入帳</span>
            <span className="text-[7px] text-slate-500">依台銀收盤匯率自動記錄</span>
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：團隊直播間管理（自由上下架 + 自由排播） */
export function MockTeamStudio() {
  const goods = [
    { name: '膠原蛋白胜肽飲 30 入', sku: 'SKU-TW-8801', on: true },
    { name: '氣炸烤箱 14L', sku: 'SKU-TW-6602', on: true },
    { name: '沖牙機', sku: 'SKU-TW-3105', on: false },
    { name: '魚油軟膠囊', sku: 'SKU-TW-2210', on: true },
  ];
  const slots = [
    { day: '週四 09/03', time: '20:00–22:00', ch: '綜合購物台', state: '已登錄', ok: true },
    { day: '週五 09/04', time: '21:00–23:00', ch: '美妝保養台', state: '審核中', ok: false },
    { day: '週日 09/06', time: '14:00–16:00', ch: '3C 家電台', state: '已登錄', ok: true },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/studio/sunny-select">
      <AdminChrome active="直播營運">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
              <div>
                <div className="text-[11px] font-bold text-white">陽光嚴選 Sunny Select（註冊團隊）</div>
                <div className="text-[8px] text-slate-500">我的直播間 · 團隊自主營運 · 3 位主播</div>
              </div>
            </div>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/15 border border-rose-400/30 text-[8px] font-bold text-rose-300">
              <Radio className="w-2 h-2" />直播間營運中
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 overflow-hidden">
              <div className="px-2 py-1 bg-white/[0.05] text-[8px] text-slate-400 font-bold flex items-center justify-between">
                <span>貨架商品 · 自由上下架</span>
                <span className="flex items-center gap-0.5 text-rose-300"><Plus className="w-2 h-2" />選品</span>
              </div>
              {goods.map((g) => (
                <div key={g.sku} className="flex items-center justify-between px-2 py-1.5 border-t border-white/5">
                  <div>
                    <div className="text-[8.5px] font-bold text-slate-200">{g.name}</div>
                    <div className="text-[7px] font-mono text-slate-500">{g.sku}</div>
                  </div>
                  <span className={`flex items-center gap-1 text-[7px] font-bold ${g.on ? 'text-emerald-300' : 'text-slate-500'}`}>
                    {g.on ? '上架中' : '已下架'}
                    <span className={`w-6 h-3 rounded-full relative ${g.on ? 'bg-emerald-500/60' : 'bg-slate-700'}`}>
                      <span className={`absolute top-0.5 w-2 h-2 rounded-full bg-white ${g.on ? 'right-0.5' : 'left-0.5'}`} />
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-white/10 overflow-hidden flex flex-col">
              <div className="px-2 py-1 bg-white/[0.05] text-[8px] text-slate-400 font-bold flex items-center justify-between">
                <span>本週排播 · 自由排定時段</span>
                <span className="flex items-center gap-0.5 text-rose-300"><CalendarClock className="w-2 h-2" />排定直播</span>
              </div>
              {slots.map((s) => (
                <div key={s.day} className="flex items-center justify-between px-2 py-1.5 border-t border-white/5">
                  <div>
                    <div className="text-[8.5px] font-bold text-slate-200">{s.day} <span className="font-mono text-rose-300">{s.time}</span></div>
                    <div className="text-[7px] text-slate-500">登錄頻道：{s.ch}</div>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded-full border text-[7px] font-bold ${s.ok ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300' : 'bg-amber-500/15 border-amber-400/30 text-amber-300'}`}>{s.state}</span>
                </div>
              ))}
              <div className="mt-auto px-2 py-1 text-[7px] text-slate-500 border-t border-white/5">＊排播送出後即向頻道節目表登錄該時段</div>
            </div>
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：頻道節目表（EPG · 每時段僅一檔） */
export function MockChannelEPG() {
  const times = ['19:00', '20:00', '21:00', '22:00'];
  const rows = [
    {
      ch: '綜合購物台',
      cells: [
        { name: '週五瘋搶購', team: '陽光嚴選', live: false },
        { name: '生鮮直送夜', team: '好食光', live: true },
        { name: '生鮮直送夜', team: '好食光', live: true, cont: true },
        { name: '開放登錄', empty: true },
      ],
    },
    {
      ch: '美妝保養台',
      cells: [
        { name: '開放登錄', empty: true },
        { name: '晚間保養課', team: 'Glow Lab', live: false },
        { name: '大牌美妝夜', team: 'Momoka 組', live: false },
        { name: '大牌美妝夜', team: 'Momoka 組', live: false, cont: true },
      ],
    },
    {
      ch: '3C 家電台',
      cells: [
        { name: '家電開箱日', team: '家電聯合', live: false },
        { name: '家電開箱日', team: '家電聯合', live: false, cont: true },
        { name: '開放登錄', empty: true },
        { name: '深夜 3C 場', team: 'TechGo', live: false },
      ],
    },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/channels/schedule?date=2026-09-04">
      <AdminChrome active="直播營運">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Tv className="w-3 h-3 text-fuchsia-300" />
              <span className="text-[10px] font-bold text-white">頻道節目表 · 2026/09/04（五）</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-[7px] font-bold text-violet-300">規則：每時段僅可登錄一檔節目</span>
          </div>
          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="grid grid-cols-[74px_1fr_1fr_1fr_1fr] bg-white/[0.05]">
              <div className="px-2 py-1 text-[8px] text-slate-500 font-bold">頻道</div>
              {times.map((t) => (
                <div key={t} className="px-2 py-1 text-[8px] font-mono text-slate-400 border-l border-white/5">{t}</div>
              ))}
            </div>
            {rows.map((r) => (
              <div key={r.ch} className="grid grid-cols-[74px_1fr_1fr_1fr_1fr] border-t border-white/5">
                <div className="px-2 py-2 text-[8.5px] font-bold text-slate-200 flex items-center">{r.ch}</div>
                {r.cells.map((c, ci) => (
                  <div key={`${r.ch}-${times[ci]}`} className={`px-1.5 py-1.5 border-l border-white/5 ${c.cont ? 'opacity-45' : ''}`}>
                    {c.empty ? (
                      <div className="h-full min-h-[26px] rounded border border-dashed border-slate-600 flex items-center justify-center text-[7px] text-slate-500">＋ 開放登錄</div>
                    ) : (
                      <div className={`rounded px-1.5 py-1 border ${c.live ? 'bg-rose-500/15 border-rose-400/40' : 'bg-white/[0.05] border-white/10'}`}>
                        <div className="flex items-center gap-1">
                          {c.live && !c.cont && <span className="px-1 rounded-sm bg-rose-500 text-[6px] font-black text-white">LIVE</span>}
                          <span className="text-[7.5px] font-bold text-slate-100 truncate">{c.name}</span>
                        </div>
                        <div className="text-[6.5px] text-slate-500">{c.cont ? '（節目進行中）' : `直播間：${c.team}`}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-1.5 text-[7.5px] text-slate-500">＊節目表對全平台公開：用戶依時段轉台，如同電視台頻道</div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：期間銷售分析（日/週/月/季/年 + 自訂區間） */
export function MockSalesAnalytics() {
  const periods = ['日', '週', '月', '季', '年'];
  const days = [
    { d: '11/09', v: 34, gmv: '3.4M' },
    { d: '11/10', v: 52, gmv: '5.2M' },
    { d: '11/11', v: 100, gmv: '12.6M', peak: true },
    { d: '11/12', v: 61, gmv: '6.1M' },
    { d: '11/13', v: 43, gmv: '4.3M' },
  ];
  const rooms = [
    { name: '陽光嚴選', v: 92, gmv: 'NT$ 11.2M' },
    { name: '好食光', v: 68, gmv: 'NT$ 8.3M' },
    { name: 'Glow Lab', v: 51, gmv: 'NT$ 6.2M' },
    { name: 'TechGo', v: 34, gmv: 'NT$ 3.9M' },
  ];
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/analytics/sales?range=2026-11-09_2026-11-13">
      <AdminChrome active="數據分析">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              {periods.map((p) => (
                <span key={p} className="px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-[8px] text-slate-400">{p}</span>
              ))}
              <span className="px-2 py-0.5 rounded border border-rose-400/40 bg-rose-500/15 text-[8px] font-bold text-rose-300">自訂區間</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-400/30 text-[8px] font-mono font-bold text-amber-300">2026/11/09 – 11/13 · 雙 11 檔期</span>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] text-slate-500 font-bold">檔期每日 GMV</span>
                <span className="text-[7px] text-slate-500">合計 NT$ 31.6M · 較前檔期 +48%</span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {days.map((d) => (
                  <div key={d.d} className="flex-1 flex flex-col items-center gap-0.5">
                    <span className={`text-[6.5px] font-mono ${d.peak ? 'text-amber-300 font-bold' : 'text-slate-500'}`}>{d.gmv}</span>
                    <div
                      className={`w-full rounded-sm ${d.peak ? 'bg-gradient-to-t from-amber-500/80 to-rose-400' : 'bg-gradient-to-t from-rose-500/50 to-fuchsia-400/70'}`}
                      style={{ height: `${d.v * 0.44}px` }}
                    />
                    <span className={`text-[6.5px] font-mono ${d.peak ? 'text-amber-300 font-bold' : 'text-slate-500'}`}>{d.d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
              <div className="text-[8px] text-slate-500 font-bold mb-1.5">直播間排行（同區間）</div>
              <div className="flex flex-col gap-1.5">
                {rooms.map((r) => (
                  <div key={r.name}>
                    <div className="flex items-center justify-between text-[7.5px] mb-0.5">
                      <span className="font-bold text-slate-200">{r.name}</span>
                      <span className="font-mono text-slate-400">{r.gmv}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-400" style={{ width: `${r.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}

/* Info: (20260902 - Luphia) 情境截圖：觀看用戶與消費統計（直播間 × 頻道雙層） */
export function MockAudienceStats() {
  const roomRows = [
    { name: '陽光嚴選', view: '48.2K', online: '3,120', cvr: '6.8%', gmv: 'NT$ 4.2M' },
    { name: '好食光', view: '35.6K', online: '2,410', cvr: '5.1%', gmv: 'NT$ 2.9M' },
    { name: 'Glow Lab', view: '21.9K', online: '1,540', cvr: '4.4%', gmv: 'NT$ 1.8M' },
  ];
  const chRows = [
    { name: '綜合購物台', view: '96.4K', online: '6,830', cvr: '5.9%', gmv: 'NT$ 7.4M' },
    { name: '美妝保養台', view: '52.1K', online: '3,660', cvr: '4.8%', gmv: 'NT$ 3.6M' },
    { name: '3C 家電台', view: '38.7K', online: '2,270', cvr: '3.9%', gmv: 'NT$ 2.8M' },
  ];
  const header = (
    <div className="grid grid-cols-[1fr_44px_44px_40px_54px] px-2 py-1 bg-white/[0.05] text-[7px] text-slate-500 font-bold">
      <span>名稱</span><span>觀看人次</span><span>平均在線</span><span>轉換率</span><span className="text-right">消費金額</span>
    </div>
  );
  const renderRows = (rows: typeof roomRows) => rows.map((r) => (
    <div key={r.name} className="grid grid-cols-[1fr_44px_44px_40px_54px] px-2 py-1.5 border-t border-white/5 items-center">
      <span className="text-[8px] font-bold text-slate-200">{r.name}</span>
      <span className="text-[7.5px] font-mono text-slate-300">{r.view}</span>
      <span className="text-[7.5px] font-mono text-slate-300">{r.online}</span>
      <span className="text-[7.5px] font-mono text-emerald-300">{r.cvr}</span>
      <span className="text-[7.5px] font-mono text-slate-200 text-right">{r.gmv}</span>
    </div>
  ));
  return (
    <MockBrowserFrame url="mall.isun.tv/admin/analytics/audience?date=2026-09-01">
      <AdminChrome active="數據分析">
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Eye className="w-3 h-3 text-cyan-300" />
              <span className="text-[10px] font-bold text-white">觀看 × 消費統計 · 2026/09/01</span>
            </div>
            <span className="text-[7.5px] text-slate-500">觀看行為與訂單以 SKU / 直播間 / 頻道三鍵關聯</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-rose-400/25 overflow-hidden">
              <div className="px-2 py-1 bg-rose-500/10 text-[8px] font-bold text-rose-300 flex items-center gap-1"><Radio className="w-2 h-2" />直播間層</div>
              {header}
              {renderRows(roomRows)}
            </div>
            <div className="rounded-lg border border-violet-400/25 overflow-hidden">
              <div className="px-2 py-1 bg-violet-500/10 text-[8px] font-bold text-violet-300 flex items-center gap-1"><Tv className="w-2 h-2" />頻道層</div>
              {header}
              {renderRows(chRows)}
            </div>
          </div>
        </div>
      </AdminChrome>
    </MockBrowserFrame>
  );
}
