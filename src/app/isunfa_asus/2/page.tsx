'use client';

import { Building2, CalendarClock, Leaf, PieChart, ShieldCheck, Cpu, Layers, Trophy } from 'lucide-react';

export default function IsunfaAsusSlide2() {
  const facts = [
    { icon: CalendarClock, label: '成立時間', value: '2017.04.18' },
    { icon: Leaf, label: '核心聚焦', value: '綠色金融科技' },
    { icon: PieChart, label: '股本結構', value: '額定 500 萬股 / 已發行 30 萬股' },
    { icon: Building2, label: '服務產業', value: '精密製造 · 半導體 · 金融 · 公部門' },
  ];

  const edges = [
    { icon: ShieldCheck, title: '零信任安全架構', desc: '融合同態加密、區塊鏈與 AI，非同業純表單 SaaS 可比，支援高資安地端買斷。' },
    { icon: Layers, title: '可審計合規', desc: '符合 ISO 14064 / 14067 與 IFRS 可審計性，數據不可篡改，直接對接國際供應鏈。' },
    { icon: Cpu, title: '國家級算力實績', desc: '台灣杉二號、NVIDIA Taipei-1 算力經驗，具處理海量異質數據的系統底蘊。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      {/* Header */}
      <div className="z-20 w-full px-16 pt-12 pb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
          <span className="text-xs font-bold text-orange-500 tracking-widest">01</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Company Background</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">廠商背景與定位</h2>
        <p className="text-base text-slate-500 mt-2 font-medium">卡菲卡金融科技，以密碼學與 AI 打造企業級數位信任基礎設施</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-10">
        {/* Left: facts */}
        <div className="col-span-5 grid grid-cols-1 gap-3">
          {facts.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100">
                <f.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{f.label}</p>
                <p className="text-base font-bold text-slate-800 leading-tight mt-0.5">{f.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: edges + case */}
        <div className="col-span-7 flex flex-col gap-4">
          <div>
            <p className="text-sm font-bold text-slate-700 mb-2">差異化優勢</p>
            <div className="grid grid-cols-3 gap-3">
              {edges.map((e) => (
                <div key={e.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-2.5">
                    <e.icon className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1.5">{e.title}</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-5 text-white shadow-lg flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5" />
              <p className="text-sm font-bold tracking-wide">代表成功案例 · 中國砂輪 KINIK（2025–2026）</p>
            </div>
            <p className="text-[13px] text-orange-50 leading-relaxed mb-3">
              以 Green AI 實現全自動化碳盤查，結合製程溯源精準發掘污泥廢棄物再生價值，並協助台積電完成全年度物流碳盤查。
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/15 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                <p className="text-2xl font-black leading-none">-2,500<span className="text-sm font-bold ml-1">噸 CO₂e</span></p>
                <p className="text-[11px] text-orange-50 mt-1">ESG 報告減碳量</p>
              </div>
              <div className="bg-white/15 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                <p className="text-2xl font-black leading-none">4,000<span className="text-sm font-bold ml-1">萬 +</span></p>
                <p className="text-[11px] text-orange-50 mt-1">循環經濟創造價值（NTD）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
