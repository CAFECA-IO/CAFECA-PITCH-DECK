'use client';

import { AlertTriangle, Zap, Search, ActivitySquare } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-orange-100 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-red-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Anomaly Detection</span>
      </div>

      {/* Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-12 pt-16 relative">
        
        {/* Header Text */}
        <div className="space-y-4 mb-6 mt-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
            <Search className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">找出異常源頭</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            從公司每個生產活動的數據，找出異常的源頭。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">給他所有設備的電表資訊，為你找出不正常的吃電怪獸。</span>
          </h2>
        </div>

        {/* Dashboard & Insight Content */}
        <div className="w-full flex gap-6">
          
          {/* Main Dashboard Panel */}
          <div className="flex-[3] bg-white border border-slate-200 shadow-md rounded-3xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-700 flex items-center gap-2">
                <ActivitySquare className="w-5 h-5 text-blue-500" />
                全廠能耗即時監控
              </h3>
              <div className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-mono text-slate-500">
                Live Data Stream
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* Normal Meter */}
              <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between gap-4 border border-slate-100">
                <div className="w-24 text-slate-500 text-xs font-bold">A 廠房空調系統</div>
                <div className="flex-1 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-green-500"></div>
                </div>
                <div className="w-16 text-right text-sm font-mono text-green-600 font-bold">45.2 kW</div>
              </div>

              {/* Normal Meter */}
              <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between gap-4 border border-slate-100">
                <div className="w-24 text-slate-500 text-xs font-bold">B 線射出成型機</div>
                <div className="flex-1 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-blue-500"></div>
                </div>
                <div className="w-16 text-right text-sm font-mono text-blue-600 font-bold">120.5 kW</div>
              </div>

              {/* Anomaly Meter */}
              <div className="relative bg-red-50 rounded-xl p-3 flex flex-col justify-center gap-2 border-2 border-red-200 shadow-sm transform scale-[1.02]">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full animate-bounce shadow-md">
                  <AlertTriangle className="w-3 h-3" />
                </div>
                <div className="flex items-center justify-between">
                   <div className="text-red-600 text-xs font-bold">一廠：冷鍛與熱處理區</div>
                   <div className="text-[9px] text-red-600 bg-red-100 px-2 py-0.5 rounded font-bold">異常峰值 (+340%)</div>
                </div>
                <div className="flex items-center justify-between gap-4 mt-1">
                   <div className="flex-1 w-full h-2 bg-red-200 rounded-full overflow-hidden">
                     <div className="w-[95%] h-full bg-red-500 animate-pulse"></div>
                   </div>
                   <div className="w-20 text-right text-xl font-mono text-red-600 font-black animate-pulse">890.1 kW</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insight Text Panel */}
          <div className="flex-[2] bg-white border border-slate-200 shadow-md rounded-3xl p-5 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600">AI 異常洞察：金屬扣件廠</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
              發現 <span className="text-red-500 font-bold">冷鍛機空壓管路微漏</span> 與 <span className="text-red-500 font-bold">熱處理爐換線未降溫</span>，導致非生產時段持續產生隱形的吃電怪獸。
            </p>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-500">每月被偷走的電：</span>
                <span className="text-orange-600 font-mono font-bold">18,500 度 (kWh)</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-500">額外增加碳排放：</span>
                <span className="text-red-600 font-mono font-bold">+9.15 噸 CO2e</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
         <Image
           src="/cafeca_faith/robot_lasers.jpeg"
           alt="AI Anomaly Detection"
           fill
           className="object-cover"
           style={{ objectFit: 'cover' }}
         />
      </div>

    </div>
  );
}
