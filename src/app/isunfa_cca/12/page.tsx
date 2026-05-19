'use client';

import { QrCode, Globe2, Cpu, BarChart3 } from 'lucide-react';

export default function CCASlide12() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        {/* Background Maps/Globes concept */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        
        <div className="px-16 pt-16 z-10 text-center">
          <span className="text-blue-400 font-bold tracking-[0.2em] text-sm uppercase">Ultimate Output</span>
          <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">
            終極產出：打造透明、可溯源的數位產品護照與碳履歷
          </h2>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto">
            滿足環境部與國際規範要求，將透明、可信任的綠色數據，轉化為具備完整審計軌跡的數位碳履歷。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 flex items-center gap-12 mt-8 pb-12">
          
          {/* Mobile Phone Mockup for DPP */}
          <div className="w-1/3 flex justify-center">
            <div className="w-[280px] h-[540px] bg-white rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl flex flex-col overflow-hidden relative">
              <div className="absolute top-0 w-full h-6 bg-slate-800 rounded-b-2xl" />
              
              <div className="bg-emerald-600 p-6 pt-10 text-white text-center">
                <QrCode size={48} className="mx-auto mb-4" />
                <h4 className="font-bold text-lg">Product Passport</h4>
                <p className="text-xs opacity-80 mt-1">ID: TW-2026-X89B</p>
              </div>
              
              <div className="p-4 space-y-4 bg-slate-50 flex-1">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-xs text-slate-500 mb-1">Carbon Footprint (ISO 14067)</p>
                  <p className="text-xl font-bold text-slate-800">12.4 kg CO₂e/unit</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-xs text-slate-500 mb-1">Recycled Material Rate</p>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[45%]"></div>
                  </div>
                  <p className="text-xs font-bold text-emerald-600 mt-1">45% Certified</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="text-xs text-slate-500 mb-1">Audit Trail</p>
                  <p className="text-[10px] font-mono text-slate-400">Blockchain Verified ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <Globe2 className="text-blue-400 mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-white mb-2">暢通無阻的碳費申報與查驗</h3>
              <p className="text-slate-400 text-sm">直接產出符合氣候變遷署格式要求的盤查數據與審計軌跡，大幅降低與第三方查驗機構溝通的摩擦成本。</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <Cpu className="text-purple-400 mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-white mb-2">供應鏈數據串聯</h3>
              <p className="text-slate-400 text-sm">打破資訊孤島。品牌廠可直接讀取供應商的 DPP 數據，快速加總形成終端產品的完整生命週期碳排。</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 col-span-2 flex items-center gap-6">
              <div className="p-4 bg-emerald-500/20 rounded-full">
                <BarChart3 className="text-emerald-400 w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">賺取「綠色溢價 (Green Premium)」</h3>
                <p className="text-slate-400 text-sm">透明可信的碳資訊不再只是合規成本，而是提升企業在綠色供應鏈中的競爭力、爭取更高定價的綠色資產。</p>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 氣候變遷署</div>
          <div className="font-mono">#12</div>
        </div>
      </div>
    </div>
  );
}
