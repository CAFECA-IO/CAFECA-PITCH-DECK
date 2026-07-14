'use client';

import { Target, ShieldCheck, Cpu, Globe2, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function CafecaIsunfaSlide9() {
  const mapData = [
    { country: '日本 (Japan)', count: '25,000', top: '22%', left: '63%', color: 'bg-cyan-400' },
    { country: '韓國 (Korea)', count: '15,000', top: '12%', left: '59%', color: 'bg-cyan-400' },
    { country: '臺灣 (Taiwan)', count: '12,000', top: '45%', left: '54%', color: 'bg-cyan-400' },
    { country: '越南 (Vietnam)', count: '8,000', top: '52%', left: '42%', color: 'bg-cyan-400' },
    { country: '菲律賓 (Philippines)', count: '4,000', top: '53%', left: '62%', color: 'bg-cyan-400' },
    { country: '馬來西亞 (Malaysia)', count: '5,000', top: '69%', left: '35%', color: 'bg-cyan-400' },
    { country: '印尼 (Indonesia)', count: '6,500', top: '84%', left: '46%', color: 'bg-cyan-400' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260615 - Luphia) Background Stylings */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-slate-800 animate-pulse"></span>
        <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">Market Size & Ecosystem</span>
      </div>

      {/* Info: (20260615 - Luphia) Left Column - Content (w-2/5) */}
      <div className="z-10 w-[500px] h-full flex flex-col justify-center px-16 relative bg-white/80 backdrop-blur-xl border-r border-slate-200 shadow-xl">

        {/* Info: (20260615 - Luphia) Section 1: Market Size */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            <Globe2 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-700">東亞製造業供應鏈</span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-800 tracking-tight">
            市場規模<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-5xl">
              &gt; 312.7 億 TWD <span className="text-2xl text-slate-500">/ 年</span>
            </span>
          </h2>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-4">
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              排除中國市場，僅東亞與東協的核心製造業每年環境工程商機已超過 312.7 億新台幣。iSunFA 的地端超輕量部署極適合這類注重商業隱私的精密供應鏈企業。
            </p>
          </div>
        </div>

        {/* Info: (20260615 - Luphia) Section 2: Ecosystem */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100">
            <Building2 className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold text-orange-700">生態合作與戰略資源</span>
          </div>

          <div className="grid grid-cols-1 gap-3 mt-4">
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <Cpu className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-600 leading-relaxed font-medium">台智雲超算加速器</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <Target className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-600 leading-relaxed font-medium">成大創新育成中心、日本 ATR KGAP+</p>
            </div>
            <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-600 leading-relaxed font-medium">透過讓利分潤與多家系統整合商合作</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260615 - Luphia) Right Column - Map Visualization (w-3/5) */}
      <div className="w-[780px] h-full relative z-10 flex items-center justify-center">

        <div className="w-full h-full relative overflow-hidden bg-black">

          <Image
            src="/cafeca_faith/map_bg.png"
            alt="East Asia Map Background"
            fill
            className="object-cover opacity-90"
            style={{ objectFit: 'cover' }}
          />

          {/* Info: (20260615 - Luphia) Map Connectivity Lines (Decorative) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ zIndex: 1 }}>
            {/* Info: (20260615 - Luphia) Just a few random connecting curves to suggest network */}
            <path d="M 380 200 Q 420 300 400 350 T 150 450" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 580 120 Q 500 250 400 350 T 480 500" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M 400 350 Q 300 500 280 650" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

          {/* Info: (20260615 - Luphia) Total Count Display */}
          <div className="absolute bottom-8 right-8 bg-slate-800 text-white p-5 rounded-2xl shadow-xl z-20">
            <div className="text-xs text-slate-400 font-bold tracking-wider mb-1">合計 (東亞製造業)</div>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              75,500 <span className="text-lg text-slate-300">家</span>
            </div>
          </div>

          {/* Info: (20260615 - Luphia) Map Nodes */}
          <div className="relative w-full h-full z-10">
            {mapData.map((node, i) => (
              <div
                key={i}
                className="absolute flex items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-default group"
                style={{ top: node.top, left: node.left }}
              >
                {/* Info: (20260615 - Luphia) Pin Dot */}
                <div className="relative">
                  <div className={`absolute inset-0 ${node.color} opacity-40 rounded-full animate-ping scale-150`}></div>
                  <div className={`relative w-3 h-3 ${node.color} rounded-full border border-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-10`}>
                  </div>
                </div>

                {/* Info: (20260615 - Luphia) Label */}
                <div className="absolute top-4 left-4 bg-slate-900 border border-slate-700 shadow-xl px-3 py-1.5 rounded-lg whitespace-nowrap group-hover:border-cyan-500 transition-all pointer-events-none">
                  <div className="font-bold text-slate-100 text-sm leading-tight drop-shadow-md">{node.country}</div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5 drop-shadow-sm">{node.count} 家</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
