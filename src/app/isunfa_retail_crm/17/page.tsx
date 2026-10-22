'use client';

import { ArrowRight, Calculator, FileSpreadsheet } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide17() {
  const mappings = [
    { signal: '空手離店 21%', detail: '17,620 人次／月未成交', account: '機會收入損失', basis: '保守假設 15% 為可轉換客', amount: '1,089', tone: 'text-slate-900' },
    { signal: '貨架斷貨 2.4 hr／日', detail: '集中在週六 17:00 後與週一補貨前', account: '缺貨成本 Lost Sales', basis: '斷貨時數 × 同時段銷速 × 毛利率', amount: '386', tone: 'text-slate-900' },
    { signal: '停留 8 秒未取 12,400 次', detail: '集中於 3 個品類、7 段貨架', account: '陳列無效成本', basis: '無效陳列面積 × 每坪租金與人力分攤', amount: '512', tone: 'text-slate-900' },
    { signal: '沉睡會員 28%', detail: '90 天未回訪、CLV 快速衰減', account: '客戶流失準備', basis: '流失機率 × 剩餘 CLV', amount: '724', tone: 'text-slate-900' },
    { signal: '客群 × 端架週轉', detail: '全店 18 支端架逐一評分', account: '陳列 ROI（正向）', basis: '每坪每日毛利，可直接排序汰換', amount: '+1,180 /坪·日', tone: 'text-orange-600' },
  ];

  return (
    <CrmSlideShell
      chapter="回到會計 · 客戶的財務意義"
      pageLabel="17 / 20"
      compact
      title={<>關鍵的一步：把客戶關係，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">寫回會計科目</span></>}
      subtitle="CRM 的成效如果只停在行銷儀表板，三個月後就沒人看。它必須變成會計語言，才會進入預算、進入 KPI、進入董事會。"
    >
      <div className="flex gap-5 h-full">

        <div className="flex-[68] flex flex-col">
          <div className="grid grid-cols-[190px_20px_1fr_130px] gap-x-3 text-[10px] text-slate-400 pb-2 border-b border-slate-200 px-1">
            <span>客戶行為訊號</span>
            <span />
            <span>轉譯後的管理會計科目</span>
            <span className="text-right">本月估計（NT$ 千元）</span>
          </div>

          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-center">
            {mappings.map((row) => (
              <div key={row.account} className="grid grid-cols-[190px_20px_1fr_130px] gap-x-3 items-center py-[15px] px-1">
                <div>
                  <div className="text-[13px] font-bold text-slate-800 leading-tight">{row.signal}</div>
                  <div className="text-[10px] text-slate-400 mt-[3px]">{row.detail}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300" />
                <div>
                  <div className="text-[13px] font-bold text-slate-900 leading-tight">{row.account}</div>
                  <div className="text-[10px] text-slate-400 mt-[3px]">{row.basis}</div>
                </div>
                <div className={`text-right text-[17px] font-black font-mono ${row.tone}`}>{row.amount}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3 rounded-xl border border-orange-200 bg-orange-50/50 px-5 py-3.5 flex items-center justify-between">
            <div>
              <div className="text-[13px] font-black text-slate-900">本月可被解釋的隱性損失合計</div>
              <div className="text-[10.5px] text-slate-500 mt-[3px]">不含陳列 ROI 正向項；全部為既有報表上看不到的金額</div>
            </div>
            <div className="text-right">
              <div className="text-[30px] font-black font-mono text-orange-600 leading-none">2,711</div>
              <div className="text-[10.5px] text-slate-500 mt-1.5">＝ 當月淨利 1,000 的 <span className="text-slate-900 font-bold">2.7 倍</span></div>
            </div>
          </div>
        </div>

        <div className="flex-[32] flex flex-col gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
              <Calculator className="w-4 h-4 text-slate-500" />
              <span className="text-[13.5px] font-black text-slate-900">為什麼 CRM 要回到會計</span>
            </div>
            <ul className="space-y-3 text-[12px] text-slate-600 leading-snug">
              <li>· 行銷儀表板上的「回訪率」沒有人負責，「客戶流失準備 72 萬」有人負責</li>
              <li>· 有科目才有預算，有預算才有行銷專案</li>
              <li>· 可以逐月比較、進管理報表、做績效考核</li>
              <li>· 可以被稽核與驗證，而不是行銷話術</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileSpreadsheet className="w-4 h-4 text-slate-500" />
              <span className="text-[13px] font-bold text-slate-900">由 iSunFA 自動出表</span>
            </div>
            <p className="text-[11.5px] text-slate-500 leading-relaxed">
              上述科目在 iSunFA 中建立為「客戶關係管理科目群組」，與傳票、存貨、成本中心同步，
              每月結帳後隨財務報表一起產出，不需要另外一套系統。
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 px-5 py-4">
            <p className="text-[17px] font-black text-slate-900 leading-snug">
              財務會計記錄<span className="text-slate-400">已經成交的客人</span>；<br />
              CRM 要能解釋<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">還沒成交的那一群。</span>
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
