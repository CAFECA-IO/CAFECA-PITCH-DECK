'use client';

import Image from 'next/image';
import { ShieldAlert, Cpu, Landmark, Coins } from 'lucide-react';

export default function IsunfaCnSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] bg-emerald-600 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Edge AI & Cost Efficiency</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300 leading-tight">
            地端超轻量部署：极致的高性价比
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">

        {/* Left Column: The Edge AI Metric & Business Model */}
        <div className="w-[45%] flex flex-col justify-center gap-4">
          <div className="bg-gradient-to-br from-emerald-950 to-slate-950 border border-emerald-500/30 p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 text-emerald-500/5">
              <Cpu size={120} />
            </div>

            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-wider mb-2">
              <Cpu size={14} />
              Edge Deployment Requirements
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-3">
              0.7B Tokens AI 消耗
            </h3>

            <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1.5 mb-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">运算硬体需求</span>
                <span className="font-bold text-white font-mono">20x RTX 5070 Ti</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">总体部署时間</span>
                <span className="font-bold text-emerald-400 font-mono">72 小时</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed">
              72小时内即可完成组织碳排查、产品碳足迹、数字产品护照、绿色供应链管理与净零规划！
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-[2rem] flex gap-3.5 items-start">
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <Coins size={18} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-xs mb-1">
                轻资产商业模式 (Business Model)
              </h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                提供云端订阅（加价 60%）或地端 Turn-Key 软硬一体机（硬体加价 60% 买断），公司无硬体资本垫款压力。
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Cost Comparisons with Bar Chart */}
        <div className="w-[55%] space-y-5">
          <div>
            <h3 className="text-lg font-bold text-slate-300 flex items-center gap-2 mb-1">
              <Landmark className="text-emerald-500" size={18} />
              方案营运成本极致对比 (TWD)
            </h3>
            <p className="text-xs text-slate-500">一次性建置与长期营运费用比较</p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-6 rounded-[2rem] space-y-6">

            {/* Bar 1: Custom LLM */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  传统客制化 LLM 项目 (开发+维护)
                </span>
                <span className="font-mono font-bold text-rose-400">&gt; TWD 45,000,000</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)]" style={{ width: '100%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500">巨额研发前置资金，项目定制周期 6-12 个月，具高维护成本与项目失败风险。</p>
            </div>

            {/* Bar 2: Gemini 3 Flash */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Gemini 3 Flash 云端 API (5年累计)
                </span>
                <span className="font-mono font-bold text-amber-400">TWD 7,900,000</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.4)]" style={{ width: '17.5%' }}></div>
              </div>
              <p className="text-[10px] text-slate-500">依 Token 数计费，累积呼叫成本随时間递增，且面临高敏感商业与技术数据外泄风险。</p>
            </div>

            {/* Bar 3: FAITH */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
                  FAITH 地端边缘运算 (單次分析成本)
                </span>
                <span className="font-mono font-bold text-emerald-400">TWD 16,438</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 relative">
                <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" style={{ width: '1.5%' }}></div>
              </div>
              <p className="text-[10px] text-emerald-400/80">單次工艺级分析营运成本仅需 TWD 16,438（内含 20 显示卡全速运转 72 小时之 864 度电费、极严苛设备一年折旧摊提与研发成本）。</p>
            </div>

          </div>

          {/* Secure Edge Highlight */}
          <div className="bg-emerald-950/30 border border-emerald-500/10 px-5 py-3.5 rounded-2xl flex items-start gap-4">
            <div className="p-2.5 bg-emerald-500 text-slate-950 rounded-xl">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-300 text-xs mb-0.5">零信任地端安全，兼顾法规与长效省钱</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                不仅消除高敏感生产数据上云外泄之风险，更节约了绝大部分的长期 API 支出，以自主算力实现永续经营。
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 08 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
