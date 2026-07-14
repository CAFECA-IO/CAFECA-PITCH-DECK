'use client';

import Image from 'next/image';
import { Smartphone, ShieldCheck, Battery, Leaf, Factory, Settings } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Digital Product Passport</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            國際標準接軌：一車一專屬的數位護照
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-emerald-500/10 p-1 rounded-lg text-emerald-400">
              <Smartphone size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Mobile Passport</div>
              <div className="text-[11px] font-bold text-slate-200">隨身攜帶的車輛履歷</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="relative z-10 flex-1 px-16 pb-10 flex items-center justify-between gap-12">
        
        {/* Info: (20260610 - Luphia) Left Side: Text Description */}
        <div className="w-[50%] flex flex-col gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">完全符合歐盟 DPP 數據架構</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              為每一輛和泰出廠或經銷的車輛建立國際通用的數位身分。不只記錄保修歷史，更整合車輛出廠規格、電池健康度、碳足跡與原物料來源，接軌全球車廠 ESG 趨勢。
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-950/50 p-2 rounded-xl text-emerald-400 border border-emerald-500/10 mt-0.5">
                <Leaf size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">碳足跡與環保指標</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  記錄生產、運送至報廢的碳排放數據，協助車廠與車主掌握減碳效益。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-sky-950/50 p-2 rounded-xl text-sky-400 border border-sky-500/10 mt-0.5">
                <Battery size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">電池護照 (Battery Passport)</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  針對新能源車 (HEV/BEV)，追蹤電池健康度 (SoH) 與稀有金屬成分比例，提升回收再利用價值。
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-950/50 p-2 rounded-xl text-indigo-400 border border-indigo-500/10 mt-0.5">
                <Factory size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">供應鏈溯源與原產地證明</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  紀錄關鍵零組件的供應商資訊與產地，增加市場透明度與車輛公信力。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260610 - Luphia) Right Side: Phone Mockup */}
        <div className="w-[50%] flex justify-center items-center relative scale-[0.85] transform-gpu">
          
          {/* Info: (20260610 - Luphia) Phone Body */}
          <div className="w-[300px] h-[600px] bg-slate-900 rounded-[48px] border-[12px] border-slate-800 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_inset_0_0_0_2px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col ring-2 ring-slate-900 z-10">
            
            {/* Info: (20260610 - Luphia) Side Buttons */}
            <div className="absolute -left-[14px] top-[120px] w-[2px] h-[24px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[160px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[220px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -right-[14px] top-[170px] w-[2px] h-[72px] bg-slate-700 rounded-r-sm"></div>

            {/* Info: (20260610 - Luphia) Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
              <div className="w-2.5 h-2.5 bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-inner">
                 <div className="w-1 h-1 bg-blue-900/60 rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-80"></div>
            </div>

            {/* Info: (20260610 - Luphia) Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] text-white font-medium z-20 absolute top-0 w-full bg-gradient-to-b from-black/60 to-transparent">
              <span>10:09</span>
              <div className="flex gap-1.5 items-center">
                <span className="text-[9px] font-bold">5G</span>
                <div className="flex gap-0.5 items-end h-2.5">
                  <div className="w-0.5 h-1 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2.5 bg-white/40 rounded-sm"></div>
                </div>
                <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] relative">
                  <div className="w-full h-full bg-white rounded-[1px]"></div>
                  <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-white/80 rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Info: (20260610 - Luphia) App Content */}
            <div className="flex-1 bg-slate-950 relative overflow-y-auto scrollbar-hide flex flex-col pb-8 pt-12 text-slate-200">
              
              {/* Info: (20260610 - Luphia) Header / ID */}
              <div className="px-5 py-3 border-b border-slate-800 bg-slate-900">
                <h3 className="text-sm font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                  <ShieldCheck size={14} /> 數位產品護照
                </h3>
                <div className="text-[8px] text-slate-500 font-mono tracking-wider break-all">
                  DID:DPP:HOTAI:JTJNZ31U2JXXXXX
                </div>
              </div>

              {/* Info: (20260610 - Luphia) Vehicle Identity */}
              <div className="px-5 py-4 flex items-center gap-4 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="w-12 h-12 bg-slate-800 rounded-full border border-slate-700 flex items-center justify-center text-slate-300">
                  <Image src="/isunfa_logo.svg" alt="Toyota Logo" width={24} height={24} className="opacity-50" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-100 mb-0.5">Lexus RX 300</h4>
                  <p className="text-[9px] text-slate-400">Luxury SUV • 2021 Model</p>
                </div>
              </div>

              {/* Info: (20260610 - Luphia) DPP Cards Grid */}
              <div className="p-4 grid grid-cols-2 gap-3">
                
                {/* Info: (20260610 - Luphia) Battery Passport */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col gap-2 shadow-sm">
                  <div className="text-sky-400">
                    <Battery size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase">Battery SoH</div>
                    <div className="text-sm font-bold text-slate-200 font-mono">96.5%</div>
                  </div>
                  <div className="text-[7px] text-slate-400 mt-auto border-t border-slate-800 pt-1.5">
                    Lithium-ion • 60kWh
                  </div>
                </div>

                {/* Info: (20260610 - Luphia) Carbon Footprint */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col gap-2 shadow-sm">
                  <div className="text-emerald-400">
                    <Leaf size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] text-slate-500 font-bold uppercase">Carbon Footprint</div>
                    <div className="text-sm font-bold text-slate-200 font-mono">12.5 <span className="text-[9px]">tCO₂e</span></div>
                  </div>
                  <div className="text-[7px] text-slate-400 mt-auto border-t border-slate-800 pt-1.5">
                    Scope 1-3 Assessed
                  </div>
                </div>

                {/* Info: (20260610 - Luphia) Material Composition */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col gap-2 shadow-sm col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-indigo-400 flex items-center gap-1.5">
                      <Settings size={14} />
                      <span className="text-[9px] font-bold text-slate-300">Material Composition</span>
                    </div>
                    <span className="text-[8px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-950/50 px-1 rounded">EU Compliant</span>
                  </div>
                  
                  {/* Info: (20260610 - Luphia) Material Bars */}
                  <div className="mt-1 space-y-2">
                    <div>
                      <div className="flex justify-between text-[7px] text-slate-400 mb-1 font-bold">
                        <span>Steel & Iron</span>
                        <span>58%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-slate-500 h-full w-[58%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[7px] text-slate-400 mb-1 font-bold">
                        <span>Aluminum</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-slate-500 h-full w-[22%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[7px] text-slate-400 mb-1 font-bold">
                        <span>Plastics & Polymers</span>
                        <span>11%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-slate-500 h-full w-[11%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info: (20260610 - Luphia) Origin */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col gap-2 shadow-sm col-span-2 flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700">
                      <Factory size={12} />
                    </div>
                    <div>
                      <div className="text-[8px] text-slate-500 font-bold uppercase">Final Assembly</div>
                      <div className="text-[10px] font-bold text-slate-200">Kyushu Plant, Japan</div>
                    </div>
                  </div>
                  <div className="text-[8px] font-mono text-slate-400">
                    2021-04-12
                  </div>
                </div>

              </div>
            </div>

            {/* Info: (20260610 - Luphia) Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/40 rounded-full z-30"></div>

          </div>

          {/* Info: (20260610 - Luphia) Decorative glows behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-emerald-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        </div>

      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-50">
        <div>Slide 07 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
