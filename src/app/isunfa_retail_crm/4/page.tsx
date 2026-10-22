'use client';

import { Receipt, Radar, Trash2 } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide4() {
  const lines = [
    { seq: '01', time: '09:41:52', name: '保久乳 200ml×24（箱）', qty: 1, price: 289, zone: 'D2-04' },
    { seq: '02', time: '09:42:16', name: '小泡芙 巧克力 3入', qty: 1, price: 89, zone: 'C1-08' },
    { seq: '03', time: '09:44:33', name: '台灣香蕉 約 1kg', qty: 1, price: 49, zone: 'F1-02' },
    { seq: '04', time: '09:47:58', name: '痠痛貼布 40 片', qty: 1, price: 259, zone: 'E3-01' },
    { seq: '05', time: '09:48:11', name: '三合一麥片 12 入', qty: 1, price: 129, zone: 'A4-06' },
  ];

  const discarded = [
    { field: '掃描時序', why: '品項的先後順序，就是這個人的購物任務順序' },
    { field: '貨架格位', why: '他今天在店裡實際去過哪幾個區、漏掉哪幾個' },
    { field: '品項間隔', why: '3 分 25 秒的空檔，代表他從乳品區走到了保健區' },
    { field: '支付方式', why: '現金、實體會員卡、行動支付，是客群的強訊號' },
    { field: '時段與收銀機', why: '他習慣什麼時段來、又刻意避開什麼時段' },
  ];

  return (
    <CrmSlideShell
      chapter="破題 · 資料盤點"
      pageLabel="04 / 20"
      compact
      title={<>你的客戶資料，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">早就已經存在了</span></>}
      subtitle="解剖一張發票。這張單子告訴你的，遠遠不只「八百一十五元」——只是過帳之後，其餘欄位都被當成冗餘資料封存了。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[57] rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
          <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
            <Receipt className="w-4 h-4 text-orange-600" />
            <span className="text-[13px] font-bold text-slate-800">單張交易明細（POS Line Item）</span>
            <span className="ml-auto text-[10px] font-mono text-slate-400">2026/09/14（平日上午）</span>
          </div>

          <div className="px-4 pt-2 pb-3 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-[26px_62px_1fr_28px_46px_50px] gap-x-2 text-[10px] text-slate-400 pb-1.5 border-b border-slate-200">
              <span>#</span><span>時間戳</span><span>品項</span><span className="text-right">量</span><span className="text-right">金額</span><span className="text-right">格位</span>
            </div>
            {lines.map((line) => (
              <div key={line.seq} className="grid grid-cols-[26px_62px_1fr_28px_46px_50px] gap-x-2 py-[11px] text-[11.5px] border-b border-slate-100 items-center">
                <span className="font-mono text-slate-400">{line.seq}</span>
                <span className="font-mono text-orange-600">{line.time}</span>
                <span className="text-slate-700 truncate">{line.name}</span>
                <span className="font-mono text-slate-500 text-right">{line.qty}</span>
                <span className="font-mono text-slate-700 text-right">{line.price}</span>
                <span className="font-mono text-slate-500 text-right">{line.zone}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2.5 text-[12px]">
              <span className="text-slate-400">會計與會員系統實際取用</span>
              <span className="font-mono text-slate-900 font-bold">合計 NT$ 815　積分 8 點</span>
            </div>
          </div>

          <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <Trash2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11.5px] text-slate-600">上面這 5 行、30 個欄位，過完帳之後只剩下 2 個數字被留下來。</span>
          </div>
        </div>

        <div className="flex-[43] flex flex-col gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Radar className="w-4 h-4 text-orange-600" />
              <span className="text-[14px] font-black text-slate-900">被丟掉，但最能認識客戶的欄位</span>
            </div>
            <div className="space-y-3">
              {discarded.map((row) => (
                <div key={row.field} className="flex gap-3 items-start">
                  <span className="text-[11.5px] font-bold text-slate-800 w-[62px] flex-shrink-0 leading-snug">{row.field}</span>
                  <span className="text-[11.5px] text-slate-500 leading-snug">{row.why}</span>
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
              <div key={stat.k} className="rounded-xl border border-orange-200 bg-orange-50 px-2 py-2.5 text-center">
                <div className="text-[18px] font-black text-orange-600 leading-none">{stat.v}</div>
                <div className="text-[10px] text-slate-500 mt-1.5">{stat.k}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-transparent p-5">
            <p className="text-[18px] font-black text-slate-900 leading-snug">
              會計把它當憑證，<br />
              會員系統把它當積分。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">我們把它當一次客戶訪談。</span>
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
