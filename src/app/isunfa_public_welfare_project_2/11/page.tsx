'use client';

import { Network, MapPin, Globe2, Users2, Building, Sparkles } from 'lucide-react';

export default function IsunfaPwp2Slide11() {
  const waves = [
    {
      id: 'w1',
      label: '第一波 · 示範場域',
      count: '10+',
      color: '#f97316',
      tint: 'bg-orange-50',
      ink: 'text-orange-600',
      desc: '唐氏症基金會全台服務據點：早療中心、日間照顧、小作所、庇護工場、社區居住',
      period: 'M2–M4',
    },
    {
      id: 'w2',
      label: '第二波 · 擴散導入',
      count: '50+',
      color: '#e11d48',
      tint: 'bg-rose-50',
      ink: 'text-rose-600',
      desc: '透過基金會姊妹組織與社福聯盟網絡，擴散至身障、老福、兒少等各類社福機構',
      period: 'M5–M6',
    },
    {
      id: 'w3',
      label: '第三波 · 生態系落地',
      count: '100+',
      color: '#2563eb',
      tint: 'bg-blue-50',
      ink: 'text-blue-600',
      desc: '聯合各縣市社會局處、聯合勸募體系與資服夥伴，達成 100 個以上社工場域導入',
      period: 'M7–M8',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Field Deployment &amp; Ecosystem</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
          <Network className="w-4 h-4 text-emerald-600" />
          <span className="text-sm font-semibold text-emerald-700">AI 場域規劃與生態系擴散</span>
        </div>
        <h2 className="text-[38px] font-black leading-tight text-slate-800">
          三波段導入：<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-blue-500">從一個基金會，到 100 個社工場域</span>
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) 3 Waves */}
      <div className="z-10 px-16 grid grid-cols-3 gap-5">
        {waves.map((w) => (
          <div key={w.id} className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: w.color }}></div>
            <div className="flex items-center justify-between mb-2 mt-1">
              <span className={`text-[11px] font-black ${w.ink} tracking-widest uppercase`}>{w.label}</span>
              <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 rounded-full px-2.5 py-1">{w.period}</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[40px] font-black leading-none" style={{ color: w.color }}>{w.count}</span>
              <span className="text-[12px] font-bold text-slate-400">場域（累計）</span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>

      {/* Info: (20260904 - Luphia) Diversity + Bonus */}
      <div className="z-10 px-16 pt-5 pb-8 flex-1 grid grid-cols-3 gap-5">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="text-[13px] font-bold text-slate-800">場域多元性（加分）</span>
          </div>
          <p className="text-[11.5px] text-slate-500 leading-relaxed">
            涵蓋北中南東不同縣市、不同服務類型（早療／日照／就業／居住）、不同組織規模（全國型基金會至地方小型協會），
            非集中於特定關係企業。
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Users2 className="w-4 h-4 text-blue-600" />
            <span className="text-[13px] font-bold text-slate-800">多方共同推動（加分）</span>
          </div>
          <p className="text-[11.5px] text-slate-500 leading-relaxed">
            規劃 5 家以上資服業者依開源成果開發垂直應用，並邀集非營利法人（社福聯盟、聯合勸募等）共同推動場域導入，
            形成公私協力擴散網絡。
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe2 className="w-4 h-4 text-indigo-600" />
            <span className="text-[13px] font-bold text-slate-800">國際輸出規劃（加分）</span>
          </div>
          <p className="text-[11.5px] text-slate-500 leading-relaxed">
            繁中社福語料為全球稀缺資產：規劃輸出港澳、星馬華語社福組織，並以英文 Model Card 參與國際
            AI for Good 開源社群。
          </p>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Bottom Strip */}
      <div className="z-10 px-16 pb-7 -mt-2">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <Building className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            <span className="font-black text-emerald-400">為何從唐氏症基金會開始？</span>
            114 年度全臺服務據點 <span className="font-black text-white">78 個</span>、全年服務
            <span className="font-black text-white">43,352 人</span>、志工參與 11,298 人次，服務型態涵蓋全生涯——
            一個基金會就是整個社福產業的縮影，實證成果可直接複製到任何社福機構。
          </p>
          <Sparkles className="w-5 h-5 text-blue-400 flex-shrink-0 ml-auto" />
        </div>
      </div>

    </div>
  );
}
