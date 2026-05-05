'use client';

import { Activity, Network, BarChart4, Globe2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function iSunFASlide10() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Background: Subtle Tech Glow & Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-orange-900/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full pt-10 pb-20">

          {/* Title Section */}
          <div className="mb-6 text-center space-y-2">
            <h2 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              新北城市級智能治理儀表板
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="flex-1 w-full max-w-5xl mx-auto flex gap-10 items-stretch mt-2">
            
            {/* Left Column: QR Code Display */}
            <div className="flex-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col relative overflow-hidden items-center justify-center group hover:border-orange-500/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
              
              <div className="z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <Globe2 className="text-orange-400 w-7 h-7" />
                  <span className="font-bold text-xl text-white tracking-wider">新北淨零戰情室</span>
                </div>
                
                <div className="bg-white p-4 rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.15)] group-hover:shadow-[0_0_60px_rgba(249,115,22,0.3)] transition-shadow">
                  <QRCodeSVG 
                    value="https://isuncloud.com/esg_executive_dashboard.html" 
                    size={200} 
                    level="H"
                    fgColor="#000000"
                    bgColor="#ffffff"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-orange-400 mt-4 mb-1 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  體驗線上即時展示
                </h3>
                <p className="text-neutral-400 text-xs text-center">
                  掃描 QR Code 或前往<br/>
                  <span className="text-white font-mono tracking-wider inline-block">isuncloud.com/esg_executive_dashboard.html</span>
                </p>
              </div>
            </div>

            {/* Right Column: Key Features */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              {[
                {
                  icon: <Activity className="w-7 h-7 text-orange-400" />,
                  title: '全境碳排即時監控',
                  desc: '整合工業區大數據，掌握各產業即時排放動態。'
                },
                {
                  icon: <Network className="w-7 h-7 text-orange-400" />,
                  title: '供應鏈足跡追蹤',
                  desc: '透視中小企業碳流向，建立完整綠色供應鏈地圖。'
                },
                {
                  icon: <BarChart4 className="w-7 h-7 text-orange-400" />,
                  title: '減碳決策與模擬',
                  desc: 'AI 預測碳中和路徑，為施政資源分配提供科學依據。'
                }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900/30 border border-neutral-800/80 rounded-3xl p-5 hover:bg-neutral-900/60 hover:border-orange-500/30 transition-all group backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2.5 bg-neutral-950 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>領航淨零，智算未來</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            2026 CAFECA Fintech
          </div>
        </div>

      </div>
    </div>
  );
}
