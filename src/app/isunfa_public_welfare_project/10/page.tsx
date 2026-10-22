'use client';

import { MapPin, Users, Globe, Building2, Megaphone, Layers } from 'lucide-react';

// Info: (20260819 - Luphia) Validated 3-slot categorical palette (worst adjacent CVD ΔE 25.2 deutan)
const clusters = [
  {
    id: 'south', region: '南部', role: '主力導入聚落', hex: '#10b981',
    areas: '高雄岡山扣件聚落 / 台南和順工業區', types: '扣件、鑄造、表面處理',
    tint: 'bg-emerald-50', ink: 'text-emerald-600', ring: 'border-emerald-200',
    short: '南', mx: 51, my: 235, r: 11,
  },
  {
    id: 'central', region: '中部', role: '延伸擴散', hex: '#f97316',
    areas: '台中精密機械園區 / 彰化和美', types: '工具機零組件、鍛造、熱處理',
    tint: 'bg-orange-50', ink: 'text-orange-600', ring: 'border-orange-200',
    short: '中', mx: 78, my: 112, r: 7,
  },
  {
    id: 'north', region: '北部', role: '延伸擴散', hex: '#3b82f6',
    areas: '新北五股 / 桃園觀音、大園', types: '精密加工、模具、板金',
    tint: 'bg-blue-50', ink: 'text-blue-600', ring: 'border-blue-200',
    short: '北', mx: 112, my: 42, r: 7,
  },
];

// Info: (20260819 - Luphia) Cumulative field rollout — single series, one hue, direct-labelled caps
const CADENCE = [
  { id: 'm5', m: 'M5', n: 60 },
  { id: 'm6', m: 'M6', n: 150 },
  { id: 'm7', m: 'M7', n: 240 },
  { id: 'm8', m: 'M8', n: 300 },
];
const CADENCE_MAX = 300;

const TAIWAN_PATH =
  // Info: (20260819 - Luphia) Schematic outline plotted from real coastal extremes (lon 120.0–122.0E, lat 21.9–25.3N)
  'M 138 13 L 170 38 L 152 60 L 160 78 C 152 100, 146 116, 143 130 ' +
  'C 136 160, 130 190, 127 208 C 116 235, 102 262, 93 275 L 90 315 L 79 300 L 78 290 ' +
  'C 66 275, 55 262, 48 253 C 41 238, 37 226, 37 213 C 34 190, 32 162, 33 141 ' +
  'C 43 130, 56 116, 65 106 C 74 92, 85 72, 93 57 L 103 37 L 117 28 L 128 23 Z';

export default function IsunfaPwpSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Field Deployment &amp; Diffusion</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[66px] pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[36px] font-black leading-tight text-slate-800">
            場域規劃與生態系擴散：{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-500">金屬中心協同動員</span>
          </h2>
          <p className="text-[13px] text-slate-500 mt-1.5 font-medium">
            以<span className="font-bold text-emerald-700">南部扣件聚落</span>為主力導入基地，再沿金屬中心與螺絲公會輔導網絡向中、北部聚落延伸擴散。
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-4xl font-black text-orange-500 leading-none">300<span className="text-2xl">+</span></div>
          <div className="text-[11px] text-slate-500 font-bold tracking-wider">場域擴散數（達雲端型上限標準）</div>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Map + Cluster list + Rollout column chart */}
      <div className="z-10 px-16 flex gap-5 h-[262px]">

        {/* Info: (20260819 - Luphia) Taiwan schematic — emphasis on the southern anchor cluster */}
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm flex-shrink-0 flex flex-col" style={{ width: 186 }}>
          <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">聚落分佈</span>
          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 200 330" width="128" height="211" role="img" aria-label="臺灣金屬產業聚落分佈示意圖">
              <path d={TAIWAN_PATH} fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
              {clusters.map((c) => (
                <g key={c.id}>
                  <circle cx={c.mx} cy={c.my} r={c.r + 3} fill="#ffffff" />
                  <circle cx={c.mx} cy={c.my} r={c.r} fill={c.hex} />
                  <text x={c.mx + c.r + 8} y={c.my + 6} fontSize="17" fontWeight="700" fill="#475569">{c.short}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Cluster detail cards */}
        <div className="flex-1 flex flex-col gap-3">
          {clusters.map((c) => (
            <div key={c.id} className={`bg-white border ${c.ring} rounded-2xl px-5 py-3 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center`}>
              <div className="absolute left-0 top-0 h-full w-1.5" style={{ background: c.hex }}></div>
              <div className="flex items-center justify-between mb-1.5 ml-1">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${c.ink}`} />
                  <span className="text-[15px] font-bold text-slate-800">{c.region}金屬產業聚落</span>
                </div>
                <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${c.tint} ${c.ink}`}>{c.role}</span>
              </div>
              <div className="text-[12px] text-slate-600 leading-relaxed ml-1">{c.areas}</div>
              <div className="flex items-center gap-1.5 mt-1.5 ml-1">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0`} style={{ background: c.hex }}></span>
                <span className="text-[11px] font-bold text-slate-500">{c.types}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info: (20260819 - Luphia) Cumulative rollout column chart */}
        <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-sm flex-shrink-0 flex flex-col" style={{ width: 250 }}>
          <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">場域導入節奏</span>
          <span className="text-[11px] text-slate-500 mb-2">累計完成導入家數</span>
          <div className="flex-1 flex items-end justify-between gap-3 pb-1 border-b border-slate-200">
            {CADENCE.map((d) => (
              <div key={d.id} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-[12px] font-black text-slate-700 tabular-nums mb-1">
                  {d.n}{d.n === CADENCE_MAX ? '+' : ''}
                </span>
                <div
                  className="w-full max-w-[24px] rounded-t-[4px] bg-orange-500"
                  style={{ height: `${(d.n / CADENCE_MAX) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between gap-3 mt-1.5">
            {CADENCE.map((d) => (
              <span key={d.id} className="flex-1 text-center text-[10px] font-mono font-bold text-slate-400 tabular-nums">{d.m}</span>
            ))}
          </div>
        </div>

      </div>

      {/* Info: (20260819 - Luphia) 4 Bonus Points */}
      <div className="z-10 px-16 pt-5 grid grid-cols-4 gap-4 flex-1 items-start">

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
            <Megaphone className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-2">輔導網絡動員</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            由金屬中心與螺絲公會以法人身分發函會員廠、組織 12 場次區域宣導會與實機工作坊，
            提供既有輔導人力進駐協助資料盤點。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-3">
            <Layers className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-2">場域多元性（加分）</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            以扣件聚落之微型至中型獨立業者為主體，涵蓋鍛造、鑄造、熱處理、精密加工、表面處理等
            <span className="font-bold text-slate-700">不同製程與企業規模</span>，非集中於特定關係企業。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-2">多家非營利法人共推（加分）</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <span className="font-bold text-slate-700">金屬中心（財團法人）與螺絲公會（社團法人）</span>共同聯合提案推動場域導入；
            開源後另串聯系統整合／ERP 業者擴散至其既有客戶群。
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-3">
            <Globe className="w-5 h-5 text-indigo-500" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 mb-2">國際輸出規劃（加分）</h3>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            以<span className="font-bold text-slate-700">再生原料國內完成循環</span>為優先；DPP 格式對接歐盟 ESPR／CBAM，
            第二階段循開源途徑推廣至日、韓等<span className="font-bold text-slate-700">東亞精密製造供應鏈</span>。
          </p>
        </div>

      </div>

      {/* Info: (20260819 - Luphia) Bottom Partner Bar — both joint proposers */}
      <div className="z-10 px-16 py-3">
        <div className="bg-white border border-slate-200 rounded-2xl px-6 py-3 flex items-center gap-5 shadow-sm">
          <Building2 className="w-5 h-5 text-slate-500 flex-shrink-0" />
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-1.5"></span>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">聯合提案單位 1｜財團法人金屬工業研究發展中心</span>：
                完整之材料檢測實驗室與金屬產業會員網絡，為檢測數據品質與跨製程場域招募之支柱。
              </p>
            </div>
            <div className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5"></span>
              <p className="text-[11.5px] text-slate-600 leading-relaxed">
                <span className="font-bold text-slate-800">聯合提案單位 2｜台灣螺絲工業同業公會</span>：
                岡山扣件聚落之同業公會，直接動員南部主力場域會員廠並彙整買方合規需求。
              </p>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 flex-shrink-0 leading-tight text-right">兩家均檢附<br />合作意向書 MOU</span>
        </div>
      </div>

    </div>
  );
}
