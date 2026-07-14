'use client';

import { Factory, Trophy, Users, Globe2, Building2 } from 'lucide-react';

export default function CafecaIsunfaSlide13() {
  // Info: (20260714 - Luphia) Benefits that recommending CAFECA delivers back to Taipei City
  const benefits = [
    {
      icon: Factory,
      color: 'orange',
      title: '帶動在地製造業淨零轉型',
      desc: '協助大台北精密製造業因應 CBAM 碳關稅與 IFRS 永續揭露，守住外銷訂單與競爭力，同步降低城市整體碳排放。',
    },
    {
      icon: Trophy,
      color: 'emerald',
      title: '打造創櫃板綠色科技標竿',
      desc: '扶植具自主技術的在地深科技新創成功登板，形成可對外宣傳的成功案例，強化臺北招商引資與新創生態能見度。',
    },
    {
      icon: Users,
      color: 'blue',
      title: '創造高值綠色就業與人才',
      desc: '募資擴編將帶來 AI、環境工程與碳盤查顧問等高值職缺，為臺北留才並吸引跨領域人才進駐。',
    },
    {
      icon: Globe2,
      color: 'purple',
      title: '城市 ESG 政績與國際能見度',
      desc: '技術可延伸應用於市屬單位與公部門碳盤查，形塑臺北淨零城市品牌，提升國際永續形象與話語權。',
    },
  ];

  const colorMap: { [key: string]: { bg: string; text: string } } = {
    orange: { bg: 'bg-orange-50', text: 'text-orange-500' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-500' },
  };

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[110px]"></div>
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      {/* Info: (20260714 - Luphia) Header */}
      <div className="z-10 px-20 pt-14 pb-6 text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <Building2 size={15} />
          Value to Taipei City
        </div>
        <h2 className="text-5xl font-black tracking-tight text-slate-800 leading-tight">
          一次推薦，帶動<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">城市淨零與產業升級</span>
        </h2>
        <p className="text-lg text-slate-500 font-medium mt-3 max-w-4xl mx-auto">
          推薦卡菲卡登錄創櫃板，不只是扶植一家新創，更是臺北市淨零政策的關鍵槓桿。
        </p>
      </div>

      {/* Info: (20260714 - Luphia) Benefit Cards (2x2) */}
      <div className="z-10 flex-1 px-20 pb-16 grid grid-cols-2 grid-rows-2 gap-6">
        {benefits.map((b) => {
          const c = colorMap[b.color];
          const Icon = b.icon;
          return (
            <div key={b.title} className="flex items-start gap-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={c.text} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
