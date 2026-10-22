'use client';

import { ArrowRight, Calculator, FileSpreadsheet } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide14() {
  const mappings = [
    {
      signal: '空手離店 21%',
      detail: '17,620 人次／月未成交',
      account: '機會收入損失',
      basis: '保守假設 15% 為可轉換客',
      amount: '1,089',
      tone: 'text-rose-300',
    },
    {
      signal: '貨架斷貨 2.4 hr／日',
      detail: '集中在週六 17:00 後與週一補貨前',
      account: '缺貨成本 Lost Sales',
      basis: '斷貨時數 × 同時段歷史銷速 × 毛利率',
      amount: '386',
      tone: 'text-rose-300',
    },
    {
      signal: '停留 8 秒未取 12,400 次',
      detail: '集中於 3 個品類、7 段貨架',
      account: '陳列無效成本',
      basis: '無效陳列面積 × 每坪租金與人力分攤',
      amount: '512',
      tone: 'text-amber-300',
    },
    {
      signal: '排隊逾 4 分鐘放棄 480 次',
      detail: '週六 18:00–19:30 與貼標時段為主',
      account: '放棄結帳損失',
      basis: '放棄人次 × 當時購物籃已裝載金額',
      amount: '164',
      tone: 'text-amber-300',
    },
    {
      signal: '端架週轉 × 陳列面積',
      detail: '全店 18 支端架逐一評分',
      account: '陳列 ROI（正向）',
      basis: '每坪每日毛利，可直接排序汰換',
      amount: '+1,180 /坪·日',
      tone: 'text-emerald-300',
      positive: true,
    },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 2 · 回寫帳本"
      chapterColor="text-emerald-400"
      chapterDot="bg-emerald-400"
      pageLabel="14 / 22"
      compact
      title={<>關鍵的一步：把行為，<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">寫回會計科目</span></>}
      subtitle="行為資料如果只停在儀表板，三個月後就沒人看。它必須變成會計語言，才會進入預算、進入 KPI、進入董事會。"
    >
      <div className="flex gap-5 h-full">

        <div className="flex-[68] flex flex-col">
          <div className="grid grid-cols-[190px_20px_1fr_130px] gap-x-3 text-[10px] text-slate-500 pb-2 border-b border-white/10 px-1">
            <span>行為訊號（LAYER 2）</span>
            <span />
            <span>轉譯後的管理會計科目</span>
            <span className="text-right">本月估計（NT$ 千元）</span>
          </div>

          <div className="divide-y divide-white/[0.06] flex-1 flex flex-col justify-center">
            {mappings.map((row) => (
              <div key={row.account} className="grid grid-cols-[190px_20px_1fr_130px] gap-x-3 items-center py-[15px] px-1">
                <div>
                  <div className="text-[13px] font-bold text-slate-100 leading-tight">{row.signal}</div>
                  <div className="text-[10px] text-slate-500 mt-[3px]">{row.detail}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-700" />
                <div>
                  <div className="text-[13px] font-bold text-white leading-tight">{row.account}</div>
                  <div className="text-[10px] text-slate-500 mt-[3px]">{row.basis}</div>
                </div>
                <div className={`text-right text-[17px] font-black font-mono ${row.tone}`}>{row.amount}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3 rounded-xl border border-rose-400/30 bg-rose-400/[0.08] px-5 py-3.5 flex items-center justify-between">
            <div>
              <div className="text-[13px] font-black text-white">本月可被解釋的隱性損失合計</div>
              <div className="text-[10.5px] text-slate-400 mt-[3px]">不含陳列 ROI 正向項；全部為既有報表上看不到的金額</div>
            </div>
            <div className="text-right">
              <div className="text-[30px] font-black font-mono text-rose-300 leading-none">2,151</div>
              <div className="text-[10.5px] text-slate-400 mt-1.5">＝ 當月淨利 1,000 的 <span className="text-white font-bold">2.2 倍</span></div>
            </div>
          </div>
        </div>

        <div className="flex-[32] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-5 flex-1">
            <div className="flex items-center gap-2 mb-2.5">
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span className="text-[13.5px] font-black text-white">為什麼一定要回到會計</span>
            </div>
            <ul className="space-y-3 text-[12px] text-slate-300 leading-snug">
              <li>· 儀表板上的「停留秒數」沒有人負責，「缺貨成本 38.6 萬」有人負責</li>
              <li>· 有科目才有預算，有預算才有改善專案</li>
              <li>· 可以逐月比較、可以進管理報表、可以做績效考核</li>
              <li>· 可以被稽核與驗證，而不是行銷話術</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 mb-2">
              <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
              <span className="text-[13px] font-bold text-white">由 iSunFA 自動出表</span>
            </div>
            <p className="text-[11.5px] text-slate-400 leading-relaxed">
              上述科目在 iSunFA 中建立為「營運管理科目群組」，與傳票、存貨、成本中心同步，
              每月結帳後隨財務報表一起產出，不需要另外一套系統。
            </p>
          </div>

          <div className="rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.08] to-transparent px-5 py-4">
            <p className="text-[17px] font-black text-white leading-snug">
              財務會計記錄<span className="text-slate-500">已經發生的</span>；<br />
              管理會計要能解釋<span className="text-emerald-300">沒有發生的。</span>
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
