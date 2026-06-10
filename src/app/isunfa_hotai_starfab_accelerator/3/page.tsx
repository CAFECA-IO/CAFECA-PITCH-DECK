'use client';

import Image from 'next/image';
import { DollarSign, Car } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Emerald Glowing Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">The Asset Value Equation</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-300 leading-tight">
            車輛資產價值的真實方程式
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Formula Card */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="bg-slate-950/60 backdrop-blur-md border border-emerald-500/20 p-10 rounded-[2rem] text-center relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Car size={200} />
            </div>
            
            <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">
              數位產品護照增值模型
            </div>
            
            {/* The Big Equation */}
            <div className="space-y-4">
              <div className="text-6xl font-black text-emerald-400 font-mono tracking-tight">
                -30% 折舊誤差
              </div>
              <div className="text-2xl text-slate-400 font-light">對比</div>
              <div className="text-5xl font-extrabold text-white font-mono flex items-center justify-center gap-2">
                100% 透明履歷
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mt-6 leading-relaxed">
              車輛若缺乏完整履歷，二手市場折舊估值誤差可達 30%。透過建立 100% 透明的數位產品護照，將每一分保修價值轉化為保值依據。
            </p>
          </div>
        </div>

        {/* Right Side: What this means for Industry */}
        <div className="w-1/2 space-y-6">
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Car size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">不可或缺的唯一履歷</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                從出廠、每次定期保養到零件更換，車上獨一無二的識別碼 (VIN) 串接起完整保修記錄，是車輛價值的數位鋼印。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl">
              <DollarSign size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">數據即是車輛剩餘價值</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                數位履歷的完整度直接轉化為市場交易的定價溢價率。真實數據消除買賣雙方的不信任，讓車輛在二手市場獲得應有價值。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 03 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
