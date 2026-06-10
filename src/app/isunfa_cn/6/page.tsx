'use client';

import Image from 'next/image';
import { Lightbulb, Database, Sparkles, TrendingDown } from 'lucide-react';

export default function IsunfaCnSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[130px]"></div>
        <div className="absolute left-10 bottom-10 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[130px]"></div>
      </div>

      {/* Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">Dynamic Optimization</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-300 leading-tight">
            绿色典范对标与净零路径优化
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
              工业工艺的每个环节，总有其他企业效率更好，碳排更少。iSunFA 能依据庞大数据库，<strong className="text-amber-400">秒级锁定各个工艺环节的绿色典范</strong>。
            </p>
            <p className="text-base text-slate-300 leading-relaxed text-justify">
              透过 AI 算法，为企业量身打造、并動态导入<strong className="text-emerald-400">最理想的净零路径</strong>，帮助企业以最低代价取得顶级市场竞争力。
            </p>
          </div>
        </div>

        {/* Right Side: Features Cards */}
        <div className="w-1/2 space-y-4">
          
          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-amber-950/50 border border-amber-500/20 text-amber-400 rounded-xl">
              <Database size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">秒级典范数据库檢索</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                收集数十万项国际指标制造业数据，即时比对自身工艺与行业最佳实践（Best Practice）的排碳落差。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">AI 動态生成减碳路径</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                考量预算、产能配置与设备生命周期，AI 算法自動规划高性价比的长短期减碳替代路径。
              </p>
            </div>
          </div>

          <div className="bg-slate-950/40 backdrop-blur-md border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-sky-950/50 border border-sky-500/20 text-sky-400 rounded-xl">
              <Lightbulb size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">低代价、高市场竞争力</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                避免盲目进行天价设备汰换，优先进行局部工艺优化或绿能采购，精准配置企业有限资源。
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 06 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
