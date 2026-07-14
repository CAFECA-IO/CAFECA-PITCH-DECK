'use client'

import React from 'react';
import { Zap, ShieldCheck, BarChart4 } from 'lucide-react';

export default function iSunFASlide6() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) Background Gloomier but with Emerald hints for solution */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[40%] h-[40%] bg-orange-900/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-amber-900/10 blur-[100px] rounded-full" />
          {/* Info: (20260212 - Luphia) Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16 justify-center">

          {/* Info: (20260505 - Luphia) Title Section */}
          <div className="mb-16 text-center space-y-4">
            <h2 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              財報即碳盤查報告
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-6" />
            <p className="text-4xl text-orange-400 font-bold mt-8 tracking-wide">
              自動化無痛轉換
            </p>
          </div>

          {/* Info: (20260505 - Luphia) Content Visualization */}
          <div className="flex items-center justify-center gap-8 flex-1 w-full max-w-4xl mx-auto">
            
            {/* Info: (20260505 - Luphia) Step 1 */}
            <div className="flex-1 bg-neutral-900/60 border border-neutral-700 p-8 rounded-3xl text-center shadow-lg relative">
              <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <BarChart4 className="text-gray-300 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">企業財務報表</h3>
              <p className="text-neutral-400 text-sm">既有單據、憑證、記帳資料</p>
            </div>

            {/* Info: (20260505 - Luphia) Arrow & AI */}
            <div className="flex flex-col items-center justify-center relative">
              <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full" />
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(249,115,22,0.4)] animate-pulse">
                <Zap className="text-white w-12 h-12" />
              </div>
              <p className="text-orange-300 font-bold mt-4 z-10 bg-black/50 px-4 py-1 rounded-full text-sm">費思 AI 自動解析</p>
            </div>

            {/* Info: (20260505 - Luphia) Step 2 */}
            <div className="flex-1 bg-orange-950/30 border border-orange-500/50 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full" />
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-orange-500/30">
                <ShieldCheck className="text-orange-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-orange-100">合規碳盤查報告</h3>
              <p className="text-orange-300/80 text-sm">符合國際規範、即時產出</p>
            </div>

          </div>
        </div>

        {/* Info: (20260212 - Luphia) Footer */}
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
