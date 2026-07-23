'use client';

import Image from 'next/image';
import { Rocket, UserPlus, Layers, Globe2, Cpu, TrendingUp } from 'lucide-react';

export default function IsunfaAsusSlide12() {
  const benefits = [
    { icon: Rocket, title: '市場拓展', desc: '透過 ExpertHub 觸及 ASUS 既有企業客戶群，加速 iSunFA 商業擴散。' },
    { icon: UserPlus, title: '客戶導入', desc: '沿用 EIP 帳號與組織資料，導入門檻大幅降低、上線更快。' },
    { icon: Layers, title: '產品應用延伸', desc: '自碳會計延伸至身分認證、門禁、差勤與資安等多元 EIP 情境。' },
    { icon: Globe2, title: '海外布局綜效', desc: '借力 ASUS 全球通路，共同拓展東亞製造供應鏈與中東市場。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -right-32 -top-32 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -left-32 -bottom-32 w-[600px] h-[600px] bg-slate-200 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="z-20 w-full px-16 pt-11 pb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-3 shadow-sm">
          <span className="text-xs font-bold text-orange-500 tracking-widest">06</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Partnership Value</span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight">與 ASUS 合作效益</h2>
        <p className="text-sm text-slate-500 mt-1.5 font-medium">以 ExpertHub 上架 + EIP 深度整合為模式，形成軟硬體與市場的綜效</p>
      </div>

      <div className="z-20 flex-1 grid grid-cols-12 gap-6 px-16 pb-6">
        {/* Left: hardware synergy */}
        <div className="col-span-5 bg-slate-800 rounded-2xl p-6 text-white shadow-lg flex flex-col relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-orange-400" />
            <p className="text-sm font-bold tracking-wide">硬體資源綜效</p>
          </div>
          <h3 className="text-lg font-black mb-2">ASUS Ascent GX10 × 地端 AI 推理</h3>
          <p className="text-[13px] text-slate-300 leading-relaxed">
            iSunFA 高資安地端部署可搭載 ASUS Ascent GX10 桌上型 AI 超算，於廠內完成 FAITH 模型推理，兼顧資料主權與即時性。
          </p>
          <div className="relative flex-1 mt-4 rounded-xl overflow-hidden bg-slate-700/40">
            <Image src="/images/asus_ascent_gx10.png" alt="ASUS Ascent GX10" fill className="object-contain p-2" />
          </div>
        </div>

        {/* Right: benefits */}
        <div className="col-span-7 grid grid-cols-2 gap-3">
          {benefits.map((b) => (
            <div key={b.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col hover:-translate-y-0.5 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-white text-orange-600 flex items-center justify-center mb-3 shadow-sm border border-orange-100">
                <b.icon className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800 mb-1.5">{b.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="z-20 mx-16 mb-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl px-5 py-3 flex items-center gap-3 text-white shadow-md">
        <TrendingUp className="w-5 h-5 flex-shrink-0" />
        <p className="text-[13px] font-semibold">ExpertHub 長期商業發展：以訂閱分潤共建生態，持續擴充 EIP 加值模組，深化 ASUS 企業解決方案的黏著度與續約價值。</p>
      </div>
    </div>
  );
}
