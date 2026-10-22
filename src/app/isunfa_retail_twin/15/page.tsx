'use client';

import { Users2, TrainFront, Factory, GraduationCap, CloudSun, Flame, Store, Building2 } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide15() {
  const rings = [
    { r: 58, label: '200 m' },
    { r: 102, label: '400 m' },
    { r: 150, label: '800 m' },
    { r: 196, label: '1.5 km' },
  ];

  const markers: { x: number; y: number; color: string; label: string }[] = [
    { x: 268, y: 154, color: '#22d3ee', label: '輕軌 A' },
    { x: 118, y: 292, color: '#22d3ee', label: '輕軌 B' },
    { x: 316, y: 268, color: '#818cf8', label: '捷運' },
    { x: 148, y: 148, color: '#34d399', label: '國小' },
    { x: 258, y: 268, color: '#34d399', label: '國中' },
    { x: 262, y: 202, color: '#fbbf24', label: '市場' },
    { x: 74, y: 176, color: '#f87171', label: '工業區' },
    { x: 300, y: 96, color: '#fb7185', label: '競業超市' },
    { x: 174, y: 358, color: '#f59e0b', label: '夜市' },
  ];

  const ringFacts = [
    { d: '200 m', body: '住宅 1,240 戶 · 日均通過 6,800 人次 · 步行 3 分鐘可達' },
    { d: '400 m', body: '住宅 2,180 戶 · 國小 1 所 · 幼兒園 3 家' },
    { d: '800 m', body: '國中小 4 所 · 公有市場 1 座 · 公車站牌 9' },
    { d: '1.5 km', body: '捷運站 1 · 輕軌站 2 · 競業超市 3 家 · 夜市 1 處' },
  ];

  const layers = [
    { icon: Users2, name: '人口與家戶結構', src: '內政部戶政司 · 高雄市民政局' },
    { icon: TrainFront, name: '大眾運輸與車流', src: 'TDX 運輸資料流通服務 · 站別進出量' },
    { icon: Factory, name: '就業與輪班週期', src: '工業區廠商名錄 · 三班制班表推估' },
    { icon: GraduationCap, name: '學校行事曆', src: '各級學校開學／段考／寒暑假' },
    { icon: CloudSun, name: '氣象與體感溫度', src: '中央氣象署逐時觀測與預報 · 颱風警報' },
    { icon: Flame, name: '民俗與節慶週期', src: '農曆 · 初二十六做牙 · 宮廟遶境行事' },
    { icon: Store, name: '競業與商圈動態', src: '競業座標與營業時間 · 夜市營業日' },
    { icon: Building2, name: '房市與人口遷徙', src: '實價登錄 · 新建案交屋期程 · 遷入遷出' },
  ];

  return (
    <TwinSlideShell
      chapter="LAYER 3 · 環境孿生"
      chapterColor="text-indigo-400"
      chapterDot="bg-indigo-400"
      pageLabel="15 / 22"
      compact
      title={<>第三層：把這座賣場，<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">放回高雄這座城市裡</span></>}
      subtitle="社區型門市不是一個封閉系統。它的客流由輕軌班距、工廠交接班、學校開學日與農曆初二十六共同決定——這些資料，八成以上是公開的。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[42] flex items-center justify-center">
          <svg width="466" height="466" viewBox="0 0 418 418">
            <defs>
              <radialGradient id="twinRingGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="209" cy="209" r="200" fill="url(#twinRingGlow)" />

            {rings.map((ring) => (
              <g key={ring.label}>
                <circle cx="209" cy="209" r={ring.r} fill="none" stroke="rgba(148,163,184,0.28)" strokeWidth="1" strokeDasharray="4 5" />
                <text x="213" y={209 - ring.r + 13} fill="#64748b" fontSize="10" fontFamily="monospace">{ring.label}</text>
              </g>
            ))}

            <line x1="9" y1="209" x2="409" y2="209" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
            <line x1="209" y1="9" x2="209" y2="409" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />

            {markers.map((marker) => (
              <g key={marker.label}>
                <line x1="209" y1="209" x2={marker.x} y2={marker.y} stroke={marker.color} strokeWidth="0.8" strokeOpacity="0.28" />
                <rect x={marker.x - 4.5} y={marker.y - 4.5} width="9" height="9" fill={marker.color} stroke="#070b14" strokeWidth="1.2" />
                <text x={marker.x + 9} y={marker.y + 4} fill="#cbd5e1" fontSize="10.5">{marker.label}</text>
              </g>
            ))}

            <rect x="196" y="196" width="26" height="26" fill="#34d399" stroke="#070b14" strokeWidth="2" />
            <rect x="201" y="201" width="16" height="16" fill="#065f46" />
            <text x="209" y="248" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">示範賣場</text>
          </svg>
        </div>

        <div className="flex-[58] flex flex-col gap-3.5 h-full">
          <div className="grid grid-cols-2 gap-2.5 flex-shrink-0">
            {ringFacts.map((fact) => (
              <div key={fact.d} className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5">
                <div className="text-[11.5px] font-mono font-bold text-indigo-300">{fact.d}</div>
                <p className="text-[11px] text-slate-400 leading-snug mt-1">{fact.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex-1">
            <div className="text-[13.5px] font-black text-white mb-3">八層外部資料，以及它們的來源</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.name} className="flex gap-2.5 items-start">
                    <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-[2px]" />
                    <div className="min-w-0">
                      <div className="text-[12px] font-bold text-slate-100 leading-tight">{layer.name}</div>
                      <div className="text-[9.5px] text-slate-500 leading-tight mt-[2px]">{layer.src}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-400/[0.12] to-transparent px-5 py-3.5">
            <p className="text-[13.5px] text-slate-200 leading-relaxed">
              <span className="text-white font-bold">關鍵不在資料多，而在對齊。</span>
              把外部資料接到與 POS、行為事件同一條時間軸上，賣場才第一次擁有「因為外面發生了什麼，所以裡面變成這樣」的能力。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
