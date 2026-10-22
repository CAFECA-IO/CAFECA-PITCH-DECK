'use client';

import { Crown, TrendingUp, Target, ArrowRight } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide13() {
  const tiers = [
    { name: '核心客', en: 'VIP', members: '8%', revenue: 34, visits: '6.2 次/月', basket: 'NT$520', clv: '38,700', color: 'bg-orange-600', text: 'text-orange-700', strategy: '守', desc: '優先補貨保障、專屬時段服務，一個都不能掉' },
    { name: '成長客', en: 'GROWING', members: '17%', revenue: 27, visits: '3.4 次/月', basket: 'NT$445', clv: '18,200', color: 'bg-orange-500', text: 'text-orange-600', strategy: '推', desc: '跨品類引導，把他往核心客推進' },
    { name: '一般客', en: 'REGULAR', members: '34%', revenue: 26, visits: '1.6 次/月', basket: 'NT$385', clv: '7,400', color: 'bg-orange-300', text: 'text-orange-500', strategy: '頻', desc: '提高到店頻次，而不是硬拉客單價' },
    { name: '沉睡客', en: 'DORMANT', members: '28%', revenue: 11, visits: '90 天未回訪', basket: 'NT$340', clv: '2,100', color: 'bg-slate-400', text: 'text-slate-600', strategy: '喚', desc: '用他自己的常購品喚回，不要發通用券' },
    { name: '流失客', en: 'CHURNED', members: '13%', revenue: 2, visits: '180 天未回訪', basket: '—', clv: '400', color: 'bg-slate-300', text: 'text-slate-500', strategy: '放', desc: '停止投放，把預算移到成長客身上' },
  ];

  return (
    <CrmSlideShell
      chapter="客戶經營 · 價值分層"
      pageLabel="13 / 20"
      compact
      title={<>把客人分成五層，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">每一層用不同的力氣</span></>}
      subtitle="RFM 只用交易資料分層，誤差大；加進場域行為（走道覆蓋率、停留、猶豫、非會員時段到店）之後，12 個月 CLV 的預測才真正可用。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[68] rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
          <div className="grid grid-cols-[112px_64px_1fr_92px_78px_86px] gap-x-3 text-[10px] text-slate-400 px-5 py-2.5 bg-slate-50 border-b border-slate-200">
            <span>價值分層</span>
            <span className="text-right">會員占比</span>
            <span className="pl-2">營收貢獻</span>
            <span className="text-right">到店頻次</span>
            <span className="text-right">平均客單</span>
            <span className="text-right">12 月 CLV</span>
          </div>

          <div className="flex-1 flex flex-col justify-center divide-y divide-slate-100">
            {tiers.map((tier) => (
              <div key={tier.name} className="grid grid-cols-[112px_64px_1fr_92px_78px_86px] gap-x-3 items-center px-5 py-[17px]">
                <div>
                  <div className="text-[15px] font-black text-slate-900 leading-tight">{tier.name}</div>
                  <div className="text-[8.5px] font-mono tracking-[0.16em] text-slate-300 mt-[2px]">{tier.en}</div>
                </div>
                <span className="text-[13px] font-mono font-bold text-slate-700 text-right">{tier.members}</span>
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex-1 h-[9px] rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full ${tier.color}`} style={{ width: `${(tier.revenue / 34) * 100}%` }} />
                  </div>
                  <span className={`text-[12px] font-mono font-bold ${tier.text} w-[30px] text-right`}>{tier.revenue}%</span>
                </div>
                <span className="text-[11.5px] text-slate-500 text-right">{tier.visits}</span>
                <span className="text-[11.5px] font-mono text-slate-600 text-right">{tier.basket}</span>
                <span className={`text-[13.5px] font-mono font-black ${tier.text} text-right`}>{tier.clv}</span>
              </div>
            ))}
          </div>

          <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <Crown className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-[11.5px] text-slate-700">
              最上面的 <span className="font-mono font-bold">8%</span> 會員，撐起 <span className="font-mono font-bold">34%</span> 的營收；最下面的 <span className="font-mono font-bold">41%</span>，加起來只有 <span className="font-mono font-bold">13%</span>。
            </span>
          </div>
        </div>

        <div className="flex-[32] flex flex-col gap-3.5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
            <div className="flex items-center gap-2 mb-3.5">
              <Target className="w-4 h-4 text-slate-500" />
              <span className="text-[14px] font-black text-slate-900">一層一個動作</span>
            </div>
            <div className="space-y-3">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex gap-3 items-start">
                  <span className={`w-6 h-6 rounded-lg ${tier.color} text-white text-[12px] font-black flex items-center justify-center flex-shrink-0`}>
                    {tier.strategy}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12px] font-bold text-slate-800 leading-tight">{tier.name}</div>
                    <p className="text-[10.5px] text-slate-500 leading-snug mt-[2px]">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-[13px] font-black text-slate-900">加入場域行為之後</span>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 mb-1.5">12 個月 CLV 預測誤差</div>
              <div className="flex items-baseline gap-3">
                <span className="text-[17px] font-mono font-bold text-slate-400">±31%</span>
                <ArrowRight className="w-4 h-4 text-slate-300 self-center" />
                <span className="text-[26px] font-mono font-black text-orange-600 leading-none">±14%</span>
              </div>
            </div>
            <p className="text-[10.5px] text-slate-500 leading-snug mt-3">
              新增特徵：走道覆蓋率、貨架停留秒數、猶豫指數、未刷卡時段到店頻率。
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
