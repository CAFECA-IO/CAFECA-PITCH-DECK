'use client';

import { Leaf, Info, ArrowRightLeft, ShieldCheck } from 'lucide-react';

export default function TaitraSlide5() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
            What is Carbon Footprint?
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            碳足跡意義 (1/3)：什麼是產品碳足跡 (CFP)？
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            在綠色轉型的道路上，企業必須精準理解「碳足跡」的科學量化定義與計算規範。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-12 gap-8 mt-4 pb-12 items-center">
          {/* Left Block: Definition Card (7 cols) */}
          <div className="col-span-7 bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden h-fit">
            <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl font-bold flex items-center gap-3 text-emerald-400 mb-6">
              <Leaf /> 產品碳足跡 (CFP) 的科學定義
            </h3>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              指依據 **生命週期評估 (LCA)** 方法學，量化單一產品系統中所有**溫室氣體 (GHG)** 排放量與清除量的總和，並以**二氧化碳當量 (CO₂e)** 呈現的數值。
            </p>
            <div className="space-y-4">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <Info className="text-sky-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">以「二氧化碳當量 (CO₂e)」統一計量</h4>
                  <p className="text-xs text-slate-400 mt-0.5">將 CH₄ (甲烷)、N₂O (氧化亞氮) 等多種溫室氣體，依據 IPCC 公佈的全球暖化潛勢 (GWP 100) 乘數，折算為等同的 CO₂ 排放量進行加總。</p>
                </div>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                <ShieldCheck className="text-emerald-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">國際統一標準：ISO 14067:2018</h4>
                  <p className="text-xs text-slate-400 mt-0.5">全球公認最嚴謹的產品碳足跡量化標準，為企業申報、申訴與國際稽核提供唯一的共同語言與程序指引。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Boundaries (5 cols) */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <ArrowRightLeft className="text-emerald-600" /> 常見系統邊界劃分
            </h3>
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Cradle-to-Gate</span>
              <h4 className="font-bold text-slate-800 text-lg mt-2 mb-1">搖籃到大門 (B2B 中間產品)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                包含從最上游原料開採、運輸至本廠，加工生產成半成品出廠前的所有碳排。適用於供應鏈間之零組件交易。
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Cradle-to-Grave</span>
              <h4 className="font-bold text-slate-800 text-lg mt-2 mb-1">搖籃到墳墓 (B2C 終端消費品)</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                涵蓋原料、製造、運送、分銷、消費者使用，到最後的報廢、回收與處置階段。適用於銷售給大眾的終端消費品。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#05</div>
        </div>
      </div>
    </div>
  );
}
