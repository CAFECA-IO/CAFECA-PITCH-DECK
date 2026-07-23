'use client';

import { Globe2, Server, Handshake, Languages, LifeBuoy, FlaskConical, MapPin } from 'lucide-react';

export default function IsunfaAsusSlide4() {
  const experience = [
    { icon: Server, title: '阿曼國家級運算平台', desc: '核心成員參與中東阿曼國家級大型運算平台建設，具跨國大型系統交付經驗。' },
    { icon: Handshake, title: '日本 ATR KGAP+', desc: '與日本 ATR KGAP+ 國際加速器合作，銜接日本製造業與研發生態資源。' },
    { icon: Globe2, title: '國際法規對接', desc: '產品符合 EU DPP、CBAM 等國際永續合規標準，直接服務跨國供應鏈客戶。' },
  ];

  const capacity = [
    { icon: MapPin, title: '目標市場規劃', desc: '以東亞精密製造供應鏈（日本、東南亞）為主軸，中東為延伸市場。' },
    { icon: Languages, title: '在地化服務', desc: '多語系介面與在地法規係數庫，符合各國碳盤查與資安要求。' },
    { icon: LifeBuoy, title: '技術支援能力', desc: '地端部署 + 遠端維運雙軌，具國家級算力平台維運經驗支撐。' },
    { icon: FlaskConical, title: 'PoC 準備程度', desc: '已有台積電、中國砂輪實證方法論，可快速移植為海外展示與 PoC。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-12 pb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-4 shadow-sm">
          <span className="text-xs font-bold text-orange-500 tracking-widest">03</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Overseas Capacity & Plan</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">海外市場營運計畫與能量</h2>
        <p className="text-base text-slate-500 mt-2 font-medium">具備跨國系統交付經驗與國際合作網絡，可與 ASUS 海外布局形成綜效</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-6">
        {/* Left: past experience */}
        <div className="col-span-5 flex flex-col gap-3">
          <p className="text-sm font-bold text-slate-700">過去海外經驗</p>
          {experience.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-start gap-3 flex-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <e.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800">{e.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed mt-1">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: operating capacity */}
        <div className="col-span-7 flex flex-col gap-3">
          <p className="text-sm font-bold text-slate-700">海外營運能量與計畫</p>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {capacity.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5 border border-orange-100">
                  <c.icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{c.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-20 mx-16 mb-6 bg-white rounded-xl px-5 py-3 border border-slate-200 shadow-sm flex items-center gap-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">戰略資源</span>
        <div className="flex flex-wrap gap-2">
          {['台智雲超算加速器', '成大創新育成中心', '日本 ATR KGAP+', 'NVIDIA Taipei-1'].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
