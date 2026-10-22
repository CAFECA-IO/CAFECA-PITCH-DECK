'use client';

import { Receipt, Radar, Trash2 } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide4() {
  const lines = [
    { seq: '01', time: '09:41:52', sku: '4710011401207', name: '保久乳 200ml×24（箱）', qty: 1, price: 289, zone: 'D2-04' },
    { seq: '02', time: '09:42:16', sku: '4712425010101', name: '小泡芙 巧克力 3入', qty: 1, price: 89, zone: 'C1-08' },
    { seq: '03', time: '09:44:33', sku: '4711524001238', name: '台灣香蕉 約 1kg', qty: 1, price: 49, zone: 'F1-02' },
    { seq: '04', time: '09:47:58', sku: '4710088410207', name: '痠痛貼布 40 片', qty: 1, price: 259, zone: 'E3-01' },
    { seq: '05', time: '09:48:11', sku: '4715678900012', name: '三合一麥片 12 入', qty: 1, price: 129, zone: 'A4-06' },
  ];

  const discarded = [
    { field: '掃描時序（秒）', why: '同一張發票的品項順序，就是這個人的行走順序' },
    { field: '貨架格位代碼', why: '把 SKU 綁回三維空間座標的唯一鑰匙' },
    { field: '品項間隔時間', why: '3 分 25 秒的空檔，代表他從乳品區走到了保健區' },
    { field: '支付方式與載具', why: '現金、實體會員卡、行動支付的差異，是族群的強訊號' },
    { field: '收銀機編號', why: '搭配時間，可還原排隊與尖峰壅塞' },
  ];

  return (
    <TwinSlideShell
      chapter="破題 · 資料盤點"
      chapterColor="text-cyan-400"
      chapterDot="bg-cyan-400"
      pageLabel="04 / 22"
      compact
      title={<>但帳本裡，藏著全台<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">最完整的消費行為日誌</span></>}
      subtitle="解剖示範門市的一張發票。會計流程只取走「金額」與「稅額」，其餘欄位在過帳後就被視為冗餘資料——那才是最貴的部分。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[57] rounded-2xl border border-white/12 bg-white/[0.04] overflow-hidden flex flex-col">
          <div className="px-5 py-2.5 bg-white/[0.05] border-b border-white/10 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-cyan-400" />
            <span className="text-[13px] font-bold text-slate-200">單張交易明細（POS Line Item）</span>
            <span className="ml-auto text-[10px] font-mono text-slate-500">INV# AB-48210377 · 2026/08/24（平日上午）</span>
          </div>

          <div className="px-4 pt-2 pb-3 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-[26px_62px_1fr_28px_46px_50px] gap-x-2 text-[10px] text-slate-500 pb-1.5 border-b border-white/10">
              <span>#</span><span>時間戳</span><span>品項</span><span className="text-right">量</span><span className="text-right">金額</span><span className="text-right">格位</span>
            </div>
            {lines.map((line) => (
              <div key={line.seq} className="grid grid-cols-[26px_62px_1fr_28px_46px_50px] gap-x-2 py-[11px] text-[11.5px] border-b border-white/[0.06] items-center">
                <span className="font-mono text-slate-500">{line.seq}</span>
                <span className="font-mono text-cyan-300">{line.time}</span>
                <span className="text-slate-200 truncate">{line.name}</span>
                <span className="font-mono text-slate-400 text-right">{line.qty}</span>
                <span className="font-mono text-slate-200 text-right">{line.price}</span>
                <span className="font-mono text-emerald-300 text-right">{line.zone}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2.5 text-[12px]">
              <span className="text-slate-500">會計系統實際取用</span>
              <span className="font-mono text-white font-bold">合計 NT$ 815　稅額 39</span>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-rose-500/10 border-t border-rose-400/20 flex items-center gap-2">
            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-[11.5px] text-rose-200">上面這 5 行、30 個欄位，過完帳之後只剩下 2 個數字進了總分類帳。</span>
          </div>
        </div>

        <div className="flex-[43] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Radar className="w-4 h-4 text-emerald-400" />
              <span className="text-[14px] font-black text-white">被丟掉、但其實最有價值的欄位</span>
            </div>
            <div className="space-y-3">
              {discarded.map((row) => (
                <div key={row.field} className="flex gap-3 items-start">
                  <span className="text-[11.5px] font-bold text-emerald-300 w-[92px] flex-shrink-0 leading-snug">{row.field}</span>
                  <span className="text-[11.5px] text-slate-400 leading-snug">{row.why}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[
              { v: '2,180', k: '單店日均交易' },
              { v: '6.4', k: '平均品項/單' },
              { v: '6,110 萬', k: '12 店年品項紀錄' },
            ].map((stat) => (
              <div key={stat.k} className="rounded-xl border border-cyan-400/25 bg-cyan-400/[0.07] px-2 py-2.5 text-center">
                <div className="text-[18px] font-black text-cyan-300 leading-none">{stat.v}</div>
                <div className="text-[10px] text-slate-400 mt-1.5">{stat.k}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/[0.12] to-transparent p-5">
            <p className="text-[19px] font-black text-white leading-snug">
              會計把它當「憑證」，<br />
              <span className="text-emerald-300">我們把它當「感測器」。</span>
            </p>
            <p className="text-[12px] text-slate-400 mt-2 leading-relaxed">
              一家社區型連鎖超市門市，早就已經佈滿了每天回報 1.4 萬次的感測器——只是它們的名字叫收銀機。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
