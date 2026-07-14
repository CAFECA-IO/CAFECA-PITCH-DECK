'use client';

import { Handshake, Factory, Landmark, Rocket } from 'lucide-react';

export default function CafecaIsunfaSlide12() {
  // Info: (20260714 - Luphia) Go-to-market pillars
  const pillars = [
    {
      icon: Handshake,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      title: '通路夥伴與讓利分潤',
      desc: '與碳盤查顧問、系統整合商 (SI) 以讓利分潤模式合作，低成本快速觸及終端製造業客戶，建立可規模化的銷售網路。',
    },
    {
      icon: Factory,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
      title: '產業聚落複製擴散',
      desc: '以台積電、中國砂輪等旗艦實證為樣板，鎖定金屬加工、半導體耗材、精密扣件等聚落，由標竿客戶帶動同業成群導入。',
    },
    {
      icon: Landmark,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      title: '政府與生態系槓桿',
      desc: '對接政府淨零標案、產業公協會、成大育成、台智雲超算加速器與日本 ATR KGAP+，借力生態系放大品牌聲量與信任基礎。',
    },
  ];

  const phases = [
    { tag: '近程 · 0–12 月', text: '深化臺北與大台北製造業客戶，建立顧問分潤通路，擴增算力提升交付量能。' },
    { tag: '中程 · 1–2 年', text: '擴散至東亞精密供應鏈，SaaS 訂閱規模化，品牌行銷帶動 inbound 詢問。' },
    { tag: '遠程 · 3 年+', text: '成為區域碳盤查領導品牌，並朝興櫃 / 上櫃等資本市場下一階段邁進。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-14 pb-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Rocket size={15} />
          Go-To-Market Strategy
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          未來<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">市場推廣計劃</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          以夥伴通路、聚落複製與生態系槓桿三大主軸，將實證成果轉化為規模化營收。
        </p>
      </div>

      {/* Info: (20260714 - Luphia) Strategy Pillars */}
      <div className="z-10 px-20 grid grid-cols-3 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className={`w-14 h-14 rounded-xl ${p.bg} flex items-center justify-center mb-5`}>
                <Icon className={p.color} size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Info: (20260714 - Luphia) Phased Rollout */}
      <div className="z-10 flex-1 px-20 pt-8 pb-14 flex items-center">
        <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 grid grid-cols-3 gap-6 relative">
          {phases.map((ph, i) => (
            <div key={ph.tag} className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center">{i + 1}</span>
                <span className="text-sm font-black text-orange-600">{ph.tag}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-10">{ph.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
