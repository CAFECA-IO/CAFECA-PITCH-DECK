'use client';

import { Smartphone, Store, ArrowRight, FlaskConical } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide15() {
  const inputs = [
    { k: '客群', v: '六種分群 × 價值分層', tone: 'text-orange-600', bg: 'bg-slate-50', ring: 'border-slate-200' },
    { k: '商品', v: '關聯規則 × 購買週期', tone: 'text-orange-600', bg: 'bg-slate-50', ring: 'border-slate-200' },
    { k: '情境', v: '時段 × 天氣 × 民俗 × 節慶', tone: 'text-orange-600', bg: 'bg-slate-50', ring: 'border-slate-200' },
  ];

  const online = [
    { c: 'APP 首頁版位', d: '依當下時段與客群動態換版' },
    { c: '推播與 LINE', d: '旅程觸發時自動發送' },
    { c: '電子報', d: '每週依客群輪替商品組合' },
    { c: '線上商城搜尋排序', d: '同一套客群權重' },
  ];

  const offline = [
    { c: '端架排程', d: '每週自動產生各門市端架配置建議' },
    { c: '貨架電子標籤', d: '時段折扣與大字標價自動切換' },
    { c: '收銀機小票', d: '依購物籃即時印出下次可用券' },
    { c: '店內廣播時段', d: '對應客群尖峰自動排播' },
  ];

  const ab = [
    { k: '推薦命中率', before: '6.2%', after: '19.8%' },
    { k: '連帶加購率', before: '基準', after: '+14.3%' },
    { k: '行銷券成本', before: '基準', after: '−38%' },
  ];

  return (
    <CrmSlideShell
      chapter="客戶經營 · 推薦與陳列"
      pageLabel="15 / 20"
      compact
      title={<>同一套客群，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">同時排線上推播與線下端架</span></>}
      subtitle="一般 CRM 只能把洞察送到手機上。場域 CRM 因為知道客人實際走過哪裡，可以把同一個決策，直接排進貨架。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="flex items-center gap-4">
          {inputs.map((input, index) => (
            <div key={input.k} className="flex items-center gap-4 flex-1">
              <div className={`flex-1 rounded-xl border ${input.ring} ${input.bg} px-4 py-3`}>
                <div className={`text-[13px] font-black ${input.tone}`}>{input.k}</div>
                <div className="text-[11.5px] text-slate-600 mt-1">{input.v}</div>
              </div>
              {index < inputs.length - 1 && <span className="text-[16px] font-black text-slate-300">×</span>}
            </div>
          ))}
          <ArrowRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
          <div className="rounded-xl border border-slate-900 bg-slate-900 px-5 py-3 flex-shrink-0">
            <div className="text-[13px] font-black text-white">推薦排程引擎</div>
            <div className="text-[11px] text-slate-300 mt-1">每週自動產出</div>
          </div>
        </div>

        <div className="flex gap-4 flex-1">
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-5 h-5 text-slate-500" />
              <span className="text-[16px] font-black text-slate-900">線上通路</span>
            </div>
            <div className="space-y-3.5 flex-1 flex flex-col justify-center">
              {online.map((row) => (
                <div key={row.c} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-[7px] flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-bold text-slate-800 leading-tight">{row.c}</div>
                    <p className="text-[11.5px] text-slate-500 leading-snug mt-[3px]">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 rounded-2xl border border-orange-200 bg-orange-50/50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-5 h-5 text-orange-600" />
              <span className="text-[16px] font-black text-slate-900">線下通路</span>
              <span className="ml-auto text-[10px] font-bold text-orange-600">場域 CRM 才做得到</span>
            </div>
            <div className="space-y-3.5 flex-1 flex flex-col justify-center">
              {offline.map((row) => (
                <div key={row.c} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-[7px] flex-shrink-0" />
                  <div>
                    <div className="text-[13px] font-bold text-slate-800 leading-tight">{row.c}</div>
                    <p className="text-[11.5px] text-slate-500 leading-snug mt-[3px]">{row.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[268px] flex-shrink-0 rounded-2xl border border-slate-200 bg-white p-5 flex flex-col shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FlaskConical className="w-5 h-5 text-slate-500" />
              <span className="text-[16px] font-black text-slate-900">A/B 實測</span>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {ab.map((row) => (
                <div key={row.k}>
                  <div className="text-[11px] text-slate-500 mb-1.5">{row.k}</div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[14px] font-mono text-slate-400">{row.before}</span>
                    <ArrowRight className="w-3 h-3 text-slate-300" />
                    <span className="text-[22px] font-mono font-black text-orange-600 leading-none">{row.after}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 leading-snug mt-3 pt-3 border-t border-slate-200">
              12 家門市分流測試 8 週，對照組維持原有全店統一檔期。
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
