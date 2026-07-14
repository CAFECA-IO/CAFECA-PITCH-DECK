'use client';

import Image from 'next/image';
import { ShieldAlert, Calendar, Clock, Rocket } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide12() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Implementation & Dedicated System</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            3 個月穩健上線方案：打造和泰專屬車輛護照系統
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">

        {/* Info: (20260610 - Luphia) Left Column: The Edge AI Metric & Business Model */}
        <div className="w-[45%] flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-emerald-500/5">
              <Calendar size={120} />
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider mb-2">
              <Calendar size={14} />
              Dedicated Rollout Schedule
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              專屬系統私有化部署
            </h3>

            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5 mb-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">時程規劃</span>
                <span className="font-bold text-white font-mono">12 週 (3 個月)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">部署環境</span>
                <span className="font-bold text-emerald-400 font-mono">地端一體機或企業雲專網</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed">
              免去長期公有雲 API 授權費用，將大模型與車況推理引擎完整打包至和泰專屬環境，兼顧隱私與零授權費支出。
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-[2rem] flex gap-3.5 items-start">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <Rocket size={18} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-xs mb-1">
                輕資產軟硬一體機交付
              </h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                提供免研發前置資金的 Turn-key 軟硬體整合方案，完成數據整合即插即用，縮短集團內部專案立案與採購流程。
              </p>
            </div>
          </div>
        </div>

        {/* Info: (20260610 - Luphia) Right Card: Cost Comparisons with Gantt Chart */}
        <div className="w-[55%] space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2 mb-1">
              <Clock className="text-emerald-500" size={18} />
              3 個月關鍵時程與里程碑 (Week 1-12)
            </h3>
            <p className="text-xs text-slate-500">以 12 週為核心的穩健開發與落地驗證計畫</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-6 rounded-[2rem] overflow-hidden relative">
            {/* Info: (20260610 - Luphia) Grid Lines Background */}
            <div className="absolute top-14 bottom-6 left-[30%] right-6 flex">
              <div className="flex-1 border-l border-slate-800/50"></div>
              <div className="flex-1 border-l border-slate-800/50"></div>
              <div className="flex-1 border-l border-slate-800/50"></div>
              <div className="border-l border-slate-800/50"></div>
            </div>

            {/* Info: (20260610 - Luphia) Header */}
            <div className="flex text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-5 border-b border-slate-800 pb-2 relative z-10">
              <div className="w-[30%]">執行階段 (Phases)</div>
              <div className="flex-1 flex text-center">
                <div className="flex-1">Month 1</div>
                <div className="flex-1">Month 2</div>
                <div className="flex-1">Month 3</div>
              </div>
            </div>

            {/* Info: (20260610 - Luphia) Rows */}
            <div className="space-y-6 relative z-10">
              
              {/* Info: (20260610 - Luphia) Row 1 */}
              <div className="flex items-center">
                <div className="w-[30%] pr-4">
                  <h4 className="text-[11px] font-bold text-slate-200">數據對接與清洗</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5">工單規格確立與清洗</p>
                </div>
                <div className="flex-1 relative h-7 bg-slate-900/50 rounded-lg">
                  <div className="absolute left-0 top-0 bottom-0 w-[41%] bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg flex items-center px-3 shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                    <span className="text-[9px] text-white font-bold tracking-wider">Week 1-5</span>
                  </div>
                </div>
              </div>

              {/* Info: (20260610 - Luphia) Row 2 */}
              <div className="flex items-center">
                <div className="w-[30%] pr-4">
                  <h4 className="text-[11px] font-bold text-slate-200">AI 模型訓練微調</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5">OCR與車況殘值估算</p>
                </div>
                <div className="flex-1 relative h-7 bg-slate-900/50 rounded-lg">
                  <div className="absolute left-[33%] top-0 bottom-0 w-[42%] bg-gradient-to-r from-sky-600 to-sky-500 rounded-lg flex items-center px-3 shadow-[0_0_12px_rgba(14,165,233,0.3)]">
                    <span className="text-[9px] text-white font-bold tracking-wider">Week 4-9</span>
                  </div>
                </div>
              </div>

              {/* Info: (20260610 - Luphia) Row 3 */}
              <div className="flex items-center">
                <div className="w-[30%] pr-4">
                  <h4 className="text-[11px] font-bold text-slate-200">系統上線與驗證</h4>
                  <p className="text-[9px] text-slate-500 mt-0.5">護照看板與 POC 測試</p>
                </div>
                <div className="flex-1 relative h-7 bg-slate-900/50 rounded-lg">
                  <div className="absolute left-[66%] top-0 bottom-0 w-[34%] bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-lg flex items-center px-3 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    <span className="text-[9px] text-white font-bold tracking-wider">Week 8-12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Secure Edge Highlight */}
          <div className="bg-emerald-950/30 border border-emerald-500/10 px-5 py-3.5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 bg-emerald-500 text-slate-950 rounded-xl">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 text-xs mb-0.5">穩健上線、實質保值：領先同業的數位資產護城河</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                以 3 個月為期的完善計畫實現系統上線，啟用 AI 智能護照看板，為和泰認證中古車與售後保修體系築起技術防護壁壘。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 12 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
