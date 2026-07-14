'use client';

import { CheckCircle2, Building, MapPin } from 'lucide-react';

export default function CafecaFaithSlide12() {
  const sharedFeatures = [
    '雲端 AI 碳盤查數據自動分類導入',
    '國際/國內標準排放係數自動比對',
    '一鍵生成合規溫室氣體排放清冊草稿',
    '提供系統操作引導與標準導入範本',
  ];

  const tiers = [
    {
      name: '輕量入門級',
      price: '94,500',
      description: '提供完整的組織碳盤查導入與合規申報功能。',
      criteria: {
        area: '場域總面積 ≤ 1,000 坪',
        revenue: '年營業額 ≤ 1 億元',
      },
      tag: '微型企業',
      accentColor: 'from-teal-500 to-emerald-600',
      bgColor: 'bg-emerald-50/50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-100',
    },
    {
      name: '專業成長級',
      price: '283,500',
      description: '提供完整的組織碳盤查導入與合規申報功能。',
      criteria: {
        area: '場域總面積 1,000 - 5,000 坪',
        revenue: '年營業額 1 億 - 5 億元',
      },
      tag: '中小型企業',
      accentColor: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50/50',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-100',
      isPopular: true,
    },
    {
      name: '旗艦企業級',
      price: '567,000',
      description: '提供完整的組織碳盤查導入與合規申報功能。',
      criteria: {
        area: '場域總面積 ≥ 5,000 坪',
        revenue: '年營業額 ≥ 5 億元',
      },
      tag: '大型企業',
      accentColor: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50/50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-100',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260701 - Luphia) Background Accents */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[700px] h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[700px] h-[700px] bg-teal-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      {/* Info: (20260701 - Luphia) Header */}
      <div className="z-20 text-center mb-6 mt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-3 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest">Solutions & Pricing</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">組織碳盤查方案 (ISO 14064-1)</h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">依據場域面積與年營業額範疇，提供三種不同級距的標準化碳盤查服務，其服務內容均相同</p>
      </div>

      {/* Info: (20260701 - Luphia) Plans Grid */}
      <div className="z-20 w-full max-w-6xl grid grid-cols-3 gap-6 px-8 relative">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-6 border transition-all duration-300 relative flex flex-col group overflow-hidden ${
              tier.isPopular
                ? 'border-orange-300 shadow-xl ring-2 ring-orange-500/10 -translate-y-1 hover:shadow-2xl'
                : 'border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            {/* Info: (20260701 - Luphia) Highlight ribbon */}
            <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${tier.accentColor}`} />

            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${tier.bgColor} ${tier.textColor}`}>
                <Building className="w-6 h-6" />
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${
                tier.isPopular
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {tier.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-1">{tier.name}</h3>
            <p className="text-[11px] text-slate-400 font-medium mb-3 leading-tight min-h-[32px]">{tier.description}</p>

            {/* Info: (20260701 - Luphia) Price Section */}
            <div className="flex items-baseline gap-1 mb-4 border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-slate-400">NT$</span>
              <span className="text-3xl font-black text-slate-800 tracking-tight">{tier.price}</span>
              <span className="text-slate-400 text-xs font-medium">/ 案</span>
            </div>

            {/* Info: (20260701 - Luphia) Criteria Section */}
            <div className="mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 animate-bounce" />
                適用範疇基準
              </div>
              <div className="space-y-1 text-xs font-semibold text-slate-700">
                <div className="flex justify-between">
                  <span>場域總面積</span>
                  <span className="text-slate-900 font-bold">{tier.criteria.area}</span>
                </div>
                <div className="flex justify-between">
                  <span>年營業額範圍</span>
                  <span className="text-slate-900 font-bold">{tier.criteria.revenue}</span>
                </div>
              </div>
            </div>

            {/* Info: (20260701 - Luphia) Features List */}
            <div className="space-y-2 flex-1">
              {sharedFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[11px] leading-tight font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
