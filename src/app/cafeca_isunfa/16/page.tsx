'use client';

import { Cpu, Award, Globe2, MapPin, Sparkles } from 'lucide-react';

export default function CafecaIsunfaSlide16() {
  // Info: (20260714 - Luphia) Differentiators that make CAFECA the strongest pick for Taipei's GISA recommendation
  const highlights = [
    {
      icon: Cpu,
      color: 'orange',
      title: '自主底層技術 × 國家級算力',
      desc: '自研同態加密、區塊鏈存證與 FAITH 專家模型；團隊參與臺灣杉二號、獲選經濟部 × NVIDIA Taipei-1 算力執行單位，硬實力領先同業。',
    },
    {
      icon: Award,
      color: 'emerald',
      title: '已具企業級實證成果',
      desc: '完成台積電運輸碳盤查、中國砂輪 (KINIK) 全自動碳盤查，單案減碳 2,500 噸 CO₂e、循環經濟創造 4,000 萬元以上價值，非紙上談兵。',
    },
    {
      icon: Globe2,
      color: 'blue',
      title: '剛性且龐大的市場需求',
      desc: 'CBAM 碳關稅與 IFRS S1/S2 為法規強制；僅東亞精密製造業每年碳盤查商機逾 312.7 億元、涵蓋 75,500 家企業，成長確定性高。',
    },
    {
      icon: MapPin,
      color: 'purple',
      title: '深厚在地連結與跨域團隊',
      desc: '曾建置新北市全市溫室氣體追蹤、通過金管會金融監理沙盒、獲成大育成與蔡俊鴻教授號召；團隊橫跨金融合規、環境工程與 AI。',
    },
  ];

  const colorMap: { [key: string]: { bg: string; text: string; ring: string } } = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-500', ring: 'group-hover:ring-orange-200' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500', ring: 'group-hover:ring-emerald-200' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-500', ring: 'group-hover:ring-blue-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-500', ring: 'group-hover:ring-purple-200' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-16 pb-6 text-center">
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Sparkles size={15} />
          卡菲卡的推薦亮點
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          為何卡菲卡是<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">最佳選擇</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-4 max-w-4xl mx-auto leading-relaxed">
          技術硬實力、企業級實證、確定性市場與在地連結。
        </p>
      </div>

      {/* Info: (20260714 - Luphia) Highlight Cards */}
      <div className="z-10 flex-1 px-20 pb-16 grid grid-cols-4 gap-6">
        {highlights.map((h) => {
          const c = colorMap[h.color];
          const Icon = h.icon;
          return (
            <div
              key={h.title}
              className={`group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ring-1 ring-transparent ${c.ring}`}
            >
              <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center mb-5`}>
                <Icon className={c.text} size={28} />
              </div>
              <h3 className="text-lg font-black text-slate-800 leading-snug mb-3">{h.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
