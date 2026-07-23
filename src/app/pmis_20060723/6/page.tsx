'use client';

import {
  Sparkles,
  MapPin,
  Layers,
  Map,
  BarChart3,
  ShieldAlert,
  Shapes,
  Database,
} from 'lucide-react';

export default function Pmis20060723Slide6() {
  // Info: (20260723 - Luphia) Government open-data map sources integrated on OSM basemap
  const sources = [
    {
      icon: MapPin,
      accent: 'from-orange-500 to-amber-500',
      tint: 'text-orange-600',
      title: 'TGOS MAP API',
      features: ['地址定位服務', '通用電子地圖底圖'],
    },
    {
      icon: Layers,
      accent: 'from-emerald-500 to-teal-500',
      tint: 'text-emerald-600',
      title: '國土測繪圖資服務雲',
      features: ['土壤液化潛勢、地質敏感、活動斷層', '學校範圍、避難收容所、消防栓', '正射影像、地籍等 WMTS'],
    },
    {
      icon: BarChart3,
      accent: 'from-blue-500 to-indigo-500',
      tint: 'text-blue-600',
      title: '內政部統計地圖',
      features: ['村里社經統計面量'],
    },
  ];

  // Info: (20260723 - Luphia) Capability rows
  const caps = [
    {
      icon: Layers,
      tint: 'text-indigo-600',
      title: '圖層開關',
      desc: '左側面板逐項切換、調整透明度與堆疊順序。',
    },
    {
      icon: ShieldAlert,
      tint: 'text-orange-600',
      title: '工地周邊風險判讀',
      desc: '以工地座標為中心，自動標示是否位於土壤液化／地質敏感／斷層帶、是否鄰近學校／醫院／避難所，並列出周邊敏感點與距離。',
    },
    {
      icon: Shapes,
      tint: 'text-emerald-600',
      title: '自訂圖徵',
      desc: '地標（點）／路線（線，如便道、管線）／範圍（面，如施工圍籬、警戒區），可連結缺失（PMIS-07）與環安衛稽核（PMIS-05），並匯出 GeoJSON / KML。',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260723 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260723 - Luphia) Header */}
      <div className="z-10 px-16 pt-10 pb-4 text-center">
        <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          GIS &amp; Site Risk
        </div>
        <h2 className="text-4xl font-black tracking-tight text-slate-800 leading-tight">
          政府圖資上工地，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">周邊風險一眼掌握</span>
        </h2>
        <p className="text-base text-slate-500 font-medium mt-2 max-w-4xl mx-auto">
          底圖採 OpenStreetMap 白底，套疊臺灣政府開放圖資（PMIS-12）。
        </p>
      </div>

      {/* Info: (20260723 - Luphia) Body */}
      <div className="z-10 flex-1 px-16 flex flex-col gap-4">

        {/* Info: (20260723 - Luphia) Three government data sources */}
        <div className="grid grid-cols-3 gap-4">
          {sources.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.accent}`}></div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${s.tint}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-black text-slate-800 leading-tight">{s.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-[11px] text-slate-600 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.tint.replace('text', 'bg')}`}></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info: (20260723 - Luphia) Capability rows */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          {caps.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className={c.tint} />
                  <span className="text-sm font-black text-slate-800">{c.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260723 - Luphia) Offline cache footer */}
      <div className="z-10 px-16 py-4 flex items-center justify-center gap-8 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <Database size={18} className="text-orange-500" />
          <span className="font-bold">圖磚磁碟快取</span>
        </div>
        <div className="w-px h-6 bg-slate-200"></div>
        <div className="flex items-center gap-2 text-slate-600">
          <Map size={18} className="text-orange-500" />
          <span className="font-bold">向量圖資離線 seed</span>
          <span className="text-slate-400">降低對外部服務即時依賴</span>
        </div>
      </div>
    </div>
  );
}
