'use client';

import Image from 'next/image';
import { ShieldAlert, AlertTriangle, FileWarning, Car } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide2() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Heatwave Glowing Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-red-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-10 top-10 w-[400px] h-[400px] bg-orange-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
            <span className="text-red-400 font-bold tracking-[0.2em] uppercase text-xs">車輛資產履歷 / 市場痛點</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-orange-300 leading-tight">
            中古車市場與售後服務的誠信痛點
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Dramatic Big Stats */}
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <div className="bg-slate-950/60 backdrop-blur-md border border-red-500/30 p-8 rounded-3xl relative overflow-hidden group hover:border-red-500/60 transition-all duration-300">
            <div className="absolute -right-6 -bottom-6 text-red-500/5 group-hover:scale-110 transition-transform duration-500">
              <Car size={200} />
            </div>
            
            <div className="flex items-center gap-3 text-red-400 font-bold text-sm uppercase tracking-wider mb-2">
              <AlertTriangle className="animate-bounce" size={18} />
              資訊不透明度 (Information Asymmetry)
            </div>
            
            <h2 className="text-7xl font-black text-white font-mono flex items-baseline gap-1">
              40<span className="text-4xl text-red-500">%</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              中古車交易市場中，估計有高達 40% 的車輛存在里程調表、隱匿重大事故或非原廠零件保修等不透明紀錄，阻礙交易信任。
            </p>
          </div>
        </div>

        {/* Right Side: Compliance & Economic Pressure */}
        <div className="w-1/2 space-y-6">
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-red-950/50 border border-red-500/20 text-red-400 rounded-xl">
              <FileWarning size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">原廠保養紀錄碎片化</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                車輛進出非原廠保修廠、零件更換、手寫工單等資訊無法即時串聯，車主與二手車商難以取得完整、真實的保養履歷。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex gap-4 items-start">
            <div className="p-3 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-2">車輛資產價值的折舊落差</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                缺乏公正透明的維修履歷與即時狀態評估，導致二手估值偏向保守或存在極大黑箱空間，損害車主與車商權益。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 02 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
