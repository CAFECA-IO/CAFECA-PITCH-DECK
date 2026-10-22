'use client';

import { Recycle, Sparkles } from 'lucide-react';

export default function IsunfaPwpSlide8() {
  const chains = [
    {
      id: 'machining',
      industry: '金屬機加工 / 扣件',
      color: 'orange',
      waste: ['鐵 / 鋼 / 鋁合金切削屑', '沖壓廢下腳料', '廢棄金屬模具'],
      ai: 'AI 智慧光譜／成分解析：動態鑑定合金成分（6000／7000 系鋁、304／316 鋼）並標註雜質率',
      recycled: ['綠色再生鋁錠 / 鋼胚', '3D 列印金屬粉末', '粉末冶金用再生顆粒'],
      buyer: '汽車零組件廠、綠色供應鏈品牌廠',
    },
    {
      id: 'plating',
      industry: '金屬表面處理 / 電鍍',
      color: 'blue',
      waste: ['電鍍廢水污泥', '廢酸洗液 / 廢鹼液', '含金屬濃縮廢液'],
      ai: 'AI 化驗數據預測與分析：評估銅、鎳、鉻等有價金屬濃度與提純可行性',
      recycled: ['工業級金屬鹽類（硫酸鎳、硫酸銅）', '電池前驅物原料'],
      buyer: '化學品製造商、電池正極材料廠',
    },
    {
      id: 'casting',
      industry: '鑄造與熱處理',
      color: 'emerald',
      waste: ['廢鑄砂（系統砂）', '爐渣 / 脫硫渣', '廢耐火磚'],
      ai: 'AI 粒徑與化學結構比對：檢測莫氏硬度、抗壓性與有害物質殘留量',
      recycled: ['再生鑄砂', '地質聚合綠色水泥', '營建再生骨材'],
      buyer: '鑄造廠（內部循環）、綠建材製造商',
    },
    {
      id: 'fluid',
      industry: '廠務與加工輔助',
      color: 'indigo',
      waste: ['廢切削油 / 水性切削液', '廢清洗劑 / 溶劑'],
      ai: 'AI 油質光譜動態監測：即時分析黏度、酸價、金屬微粒濃度與雜菌率',
      recycled: ['高純度再生切削油', '工業級再生潤滑油'],
      buyer: '製造業工廠（廠內回收再利用）',
    },
    {
      id: 'fluorspar',
      industry: '跨業旗艦鏈：含氟廢棄物',
      color: 'violet',
      waste: ['半導體 / 面板 / 太陽能含氟廢水污泥', '磷肥副產物氟矽酸'],
      ai: 'AI 純度與雜質模型：預測 CaF₂ 含量（65%~85%）與造粒配方最適黏結劑比例',
      recycled: ['人造螢石（合成 CaF₂）塊料', '煉鋼助熔劑'],
      buyer: '鋼鐵廠、電弧爐煉鋼業者',
    },
  ];

  const colorMap: { [key: string]: { bar: string; chip: string; text: string } } = {
    orange: { bar: 'bg-orange-400', chip: 'bg-orange-50 border-orange-200', text: 'text-orange-600' },
    blue: { bar: 'bg-blue-400', chip: 'bg-blue-50 border-blue-200', text: 'text-blue-600' },
    emerald: { bar: 'bg-emerald-400', chip: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-600' },
    indigo: { bar: 'bg-indigo-400', chip: 'bg-indigo-50 border-indigo-200', text: 'text-indigo-600' },
    violet: { bar: 'bg-violet-400', chip: 'bg-violet-50 border-violet-200', text: 'text-violet-600' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-9 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest">Circular Value Chains</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-12 pt-16 pb-4 flex items-end justify-between">
        <div>
          <h2 className="text-[34px] font-black leading-tight text-slate-800">
            五大高價值循環鏈：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-500">重點回收廢棄物 → 再生原料</span>
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 shadow-sm">
          <Recycle className="w-4 h-4 text-emerald-600" />
          <span className="text-[11px] font-bold text-emerald-700">全數以 AI DPP 標註品質等級與減碳量</span>
        </div>
      </div>

      {/* Info: (20260819 - Luphia) Table */}
      <div className="z-10 px-12 flex-1">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">

          {/* Info: (20260819 - Luphia) Table Header */}
          <div className="grid grid-cols-[150px_1fr_1fr_1fr_150px] bg-slate-800 text-white text-[11px] font-bold tracking-wider">
            <div className="px-3 py-2.5">產業類別</div>
            <div className="px-3 py-2.5 border-l border-slate-600">重點回收廢棄物</div>
            <div className="px-3 py-2.5 border-l border-slate-600">AI 檢測與品質分級</div>
            <div className="px-3 py-2.5 border-l border-slate-600">轉化之再生原料</div>
            <div className="px-3 py-2.5 border-l border-slate-600">應用場域 / 買方</div>
          </div>

          {/* Info: (20260819 - Luphia) Table Rows */}
          {chains.map((c) => {
            const m = colorMap[c.color];
            return (
              <div key={c.id} className="grid grid-cols-[150px_1fr_1fr_1fr_150px] border-b border-slate-100 last:border-b-0 flex-1">
                <div className={`px-3 py-2.5 flex items-center gap-2 border-r ${m.chip}`}>
                  <div className={`w-1 h-8 rounded-full ${m.bar} flex-shrink-0`}></div>
                  <span className="text-[12px] font-bold text-slate-800 leading-tight">{c.industry}</span>
                </div>
                <div className="px-3 py-2.5 border-l border-slate-100">
                  <ul className="space-y-0.5">
                    {c.waste.map((w) => (
                      <li key={w} className="text-[11px] text-slate-600 leading-snug">· {w}</li>
                    ))}
                  </ul>
                </div>
                <div className="px-3 py-2.5 border-l border-slate-100 flex items-center">
                  <p className="text-[11px] leading-snug text-slate-600">
                    <span className={`font-bold ${m.text}`}>{c.ai.split('：')[0]}</span>
                    <br />{c.ai.split('：')[1]}
                  </p>
                </div>
                <div className="px-3 py-2.5 border-l border-slate-100">
                  <ul className="space-y-0.5">
                    {c.recycled.map((r) => (
                      <li key={r} className="text-[11px] text-slate-700 font-medium leading-snug">▸ {r}</li>
                    ))}
                  </ul>
                </div>
                <div className="px-3 py-2.5 border-l border-slate-100 flex items-center">
                  <span className="text-[11px] text-slate-600 leading-snug">{c.buyer}</span>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Info: (20260819 - Luphia) Bottom Note */}
      <div className="z-10 px-12 py-4">
        <div className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-xl px-5 py-3">
          <Sparkles className="w-4 h-4 text-violet-500 flex-shrink-0" />
          <p className="text-[12px] text-slate-600 leading-relaxed">
            <span className="font-bold text-violet-700">旗艦跨業案例</span>：半導體含氟污泥（CaF₂ 65%~85%）經 AI 純度鑑定與造粒配方推薦（水玻璃／膨潤土黏結、NaCl 調節熔點強度），
            轉化為 <span className="font-bold text-slate-800">人造螢石助熔劑</span> 供鋼鐵廠使用 —— 將高科技業廢棄物與傳統金屬業原料需求串接為同一條 DPP 履歷鏈。
          </p>
        </div>
      </div>

    </div>
  );
}
