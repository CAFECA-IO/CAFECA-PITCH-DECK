'use client';

import Image from 'next/image';
import { Lightbulb, Database, Sparkles, TrendingDown } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide9() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[130px] animate-pulse"></div>
        <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[130px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">動態剩餘價值優化</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 leading-tight">
            即時車況登錄與淨值路徑優化
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Summary Callout */}
        <div className="w-1/2 flex flex-col justify-center space-y-6">
          <div className="bg-slate-950/60 backdrop-blur-md border border-amber-500/20 p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-amber-500">
              <TrendingDown size={120} />
            </div>
            
            <p className="text-lg text-slate-200 leading-relaxed text-justify mb-4">
              每一輛車每次維修或保養，都<strong className="text-amber-400">即時更新資訊至數位產品護照</strong>。車主隨時能掌握車況發生過的大小事，拒絕任何隱瞞與竄改。
            </p>
            <p className="text-base text-slate-300 leading-relaxed text-justify">
              透過 AI 演算法，對車輛折舊狀態進行即時、客觀評估，並動態導入<strong className="text-emerald-400">最優化維護與保值路徑</strong>，幫助車主與企業極大化車輛資產的剩餘價值。
            </p>
          </div>
        </div>

        {/* Right Side: Features Cards */}
        <div className="w-1/2 space-y-4">
          
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl flex-shrink-0">
              <Database size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">秒級車況登錄檢索</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                整合手寫工單 OCR 與車載 VIN 識別，技師上傳即可秒級同步車況。車主與服務廠隨時可進行零延遲檢索。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl flex-shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">AI 動態折舊評估</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                基於里程、保修軌跡與零件更換狀態，AI 折舊模型即時預測車輛二手殘值與物理損耗，給予最適折舊估算。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl flex-shrink-0">
              <Lightbulb size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">長效高淨值管理</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                為車主與車隊管理者規劃預防性保養與精準零組件更換建議，有效減緩折舊速度，維持資產的高淨值水準。
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 09 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
