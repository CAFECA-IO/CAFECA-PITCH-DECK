'use client';

import Image from 'next/image';
import { Activity, Globe, Leaf } from 'lucide-react';

export default function CafecaIsunfaSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Info: (20260609 - Luphia) Background Emerald Glowing Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">The Global Equation</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-300 leading-tight">
            氣候物理的絕對常數
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Info: (20260609 - Luphia) Left Side: Formula Card */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="bg-slate-950/60 backdrop-blur-md border border-emerald-500/20 p-10 rounded-[2rem] text-center relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Globe size={200} />
            </div>
            
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">
              物理性減碳轉換常數
            </div>
            
            {/* Info: (20260609 - Luphia) The Big Equation */}
            <div className="space-y-4">
              <div className="text-6xl font-black text-emerald-400 font-mono tracking-tight">
                -2.2 兆噸 CO₂e
              </div>
              <div className="text-2xl text-slate-400 font-light">=</div>
              <div className="text-5xl font-extrabold text-white font-mono flex items-center justify-center gap-2">
                -1<span className="text-3xl text-emerald-500">°C</span> 平均氣溫
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mt-6 leading-relaxed">
              地球平均溫度每降低 1 度，背後需要全球產業鏈實質減排 2.2 兆噸二氧化碳當量。這是一場毫無投機空間的硬核競賽。
            </p>
          </div>
        </div>

        {/* Info: (20260609 - Luphia) Right Side: What this means for Industry */}
        <div className="w-1/2 space-y-6">
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">不可迴避的絕對額度</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                2.2 兆噸是物理界限。各國政府將此常數拆解至各類製造產業，使得碳配額（Allowance）與碳稅指標成為企業財務報表的「第二資產負債表」。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">精準度即是企業利潤</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                誤差 1% 意味著百萬元的關稅計罰或配額流失。企業需要極致精準、製程級的碳足跡數據，而非模糊的估算數據。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260609 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 03 / 12</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
