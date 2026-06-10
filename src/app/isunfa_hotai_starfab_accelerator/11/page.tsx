'use client';

import Image from 'next/image';
import { MapPin, Landmark, TrendingUp, Network } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide11() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Market Opportunity / TAM</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            臺灣與東亞中古車與售後服務市場規模
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Left Side: Total Market Value & Partnership Ecosystem */}
        <div className="w-2/5 flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-6 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 text-emerald-500/5 group-hover:scale-110 transition-transform duration-500">
              <Landmark size={150} />
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <TrendingUp size={16} />
              Total Addressable Market (TAM)
            </div>
            
            <h2 className="text-4xl font-black text-white font-mono flex items-baseline gap-1 mt-3">
              &gt; 150 <span className="text-lg text-emerald-400 font-sans">億 TWD / 年</span>
            </h2>
            
            <p className="text-xs text-slate-400 leading-relaxed mt-4">
              台灣中古車交易量每年逾 70 萬輛，售後保修與零組件市場規模收藏超過 150 億台幣。數位產品護照的導入能大幅提升車況透明度，直接對接和泰集團旗下中古車認證與保修體系。
            </p>
          </div>
 
          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-[2rem] flex gap-3.5 items-start">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <Network size={18} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-xs mb-1">
                生態合作與通路戰略
              </h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                整合和泰集團內部資源，結合 TOYOTA、LEXUS 原廠保修資料庫、和運租車/iRent 龐大車隊資產管理，並延伸至第三方中古車商及零組件供應鏈。
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Countries Breakdown Grid */}
        <div className="w-3/5 grid grid-cols-2 gap-4">
          
          {[
            { segment: '和泰認證中古車', label: '全車系導入', color: 'text-amber-400' },
            { segment: 'TOYOTA/LEXUS 保修廠', label: '原廠資料即時串接', color: 'text-sky-400' },
            { segment: '和運租車/iRent 車隊', label: '數萬輛資產精準折舊', color: 'text-emerald-400' },
            { segment: '第三方中古車商', label: '防篡改誠信履歷', color: 'text-teal-400' },
            { segment: '中古客車交易', label: '車況規格化對標', color: 'text-indigo-400' },
            { segment: '外廠保修廠聯盟', label: '工單自動化辨識', color: 'text-rose-400' },
            { segment: '汽車金融與保險', label: '保值率精準定價', color: 'text-orange-400' },
            { segment: '合計 (車輛護照覆蓋)', label: '百萬輛級生態潛力', color: 'text-white font-extrabold' }
          ].map((item, i) => (
            <div key={i} className={`bg-slate-950/60 border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:border-slate-700 transition-colors`}>
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-semibold text-slate-200">{item.segment}</span>
              </div>
              <span className={`text-xs font-sans font-bold ${item.color}`}>
                {item.label}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 11 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
