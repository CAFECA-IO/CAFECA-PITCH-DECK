'use client';

import { TrendingDown, Clock, Recycle, BadgeDollarSign, ShieldCheck, Globe, Sprout } from 'lucide-react';

export default function IsunfaAsusSlide7() {
  const metrics = [
    { icon: Clock, value: '~90%', label: '碳盤查作業工時降低', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: TrendingDown, value: '15%', label: '碳排放當量可望減少*', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: Recycle, value: '4,000萬+', label: '循環經濟創造價值（NTD）', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const values = [
    { icon: BadgeDollarSign, title: '大幅降低合規成本', desc: '自動化取代人工彙整與外部顧問，顯著壓縮盤查與報告成本。' },
    { icon: ShieldCheck, title: '消除漂綠合規風險', desc: '區塊鏈存證與可審計數據，杜絕漂綠爭議與稽核風險。' },
    { icon: Globe, title: '爭取國際供應鏈訂單', desc: '符合 CBAM／DPP 與品牌客戶要求，取得綠色供應資格。' },
    { icon: Sprout, title: '實現綠色營運獲利', desc: '從異常設備汰換到循環經濟，將減碳轉化為實質收益。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-32 -bottom-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-12 pb-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-orange-500 tracking-widest">04</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Efficiency & Management Value</span>
          </div>
          <span className="text-xs font-bold text-slate-300">3 / 3</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mt-4">效率提升與管理價值</h2>
        <p className="text-base text-slate-500 mt-2 font-medium">把「合規負擔」轉化為「營運資產」，同時提升效率與管理韌性</p>
      </div>

      {/* Metrics */}
      <div className="z-20 grid grid-cols-3 gap-5 px-16 mt-2">
        {metrics.map((m) => (
          <div key={m.label} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center flex-shrink-0`}>
              <m.icon className="w-7 h-7" strokeWidth={1.6} />
            </div>
            <div>
              <p className={`text-3xl font-black leading-none ${m.color}`}>{m.value}</p>
              <p className="text-[13px] text-slate-500 font-medium mt-1.5">{m.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="z-20 flex-1 px-16 pt-6 pb-10">
        <p className="text-sm font-bold text-slate-700 mb-3">四大管理價值</p>
        <div className="grid grid-cols-4 gap-4 h-[calc(100%-2rem)]">
          {values.map((v) => (
            <div key={v.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col hover:-translate-y-0.5 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-white text-orange-600 flex items-center justify-center mb-3 shadow-sm border border-orange-100">
                <v.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800 mb-2 leading-snug">{v.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="z-20 px-16 pb-5 text-[11px] text-slate-400">* 數據依製造產業類型與工廠實際狀況而有所不同。</p>
    </div>
  );
}
