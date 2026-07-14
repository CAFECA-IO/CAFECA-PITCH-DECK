'use client';

import Image from 'next/image';
import { Settings, Factory, ShieldAlert, Cpu } from 'lucide-react';

export default function IsunfaCnSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">
      
      {/* Info: (20260610 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute right-10 top-10 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute left-1/4 bottom-10 w-[400px] h-[400px] bg-red-600 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
            <span className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs">The Enterprise Dilemma</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 leading-tight">
            制造业最核心痛点：极致复杂的工艺
          </h1>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-between relative z-10 gap-10">
        
        {/* Info: (20260610 - Luphia) Left: The Question */}
        <div className="w-2/5 space-y-6">
          <div className="bg-gradient-to-br from-amber-950/60 to-red-950/40 border border-amber-500/30 p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <h2 className="text-3xl font-black text-white leading-snug mb-4">
              每間企业活動各異，<br />
              有成百上千个工艺活動，<br />
              <span className="text-amber-400">到底该怎么减？</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              传统碳盘查顾问依赖人工填表、抽样估算，无法触及底层工艺的真实排碳。面对极具复杂度与多样性的重工业，顾问模式完全失靈。
            </p>
          </div>
        </div>

        {/* Info: (20260610 - Luphia) Right: The Grid of Complexity */}
        <div className="w-3/5 grid grid-cols-2 gap-4">
          
          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-amber-500 rounded-xl">
              <Factory size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">化学反应与熔炼</h4>
              <p className="text-xs text-slate-400">钢铁、金属与石化等工艺的直接排放，高温控制极难抽样估算。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-sky-500 rounded-xl">
              <Settings size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">机械加工与動力装配</h4>
              <p className="text-xs text-slate-400">多段切削、冲压与点焊等動态能耗，受现场排班影响剧烈波動。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-emerald-500 rounded-xl">
              <Cpu size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">洁净室与高精密工艺</h4>
              <p className="text-xs text-slate-400">极端温湿度控制、化学气体清洗，間接碳排计算耗时繁复。</p>
            </div>
          </div>

          <div className="bg-slate-950/50 border border-slate-800 p-5 rounded-2xl flex gap-4 items-center">
            <div className="p-3 bg-slate-900 border border-slate-800 text-red-500 rounded-xl">
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 className="font-bold text-slate-200 text-base mb-1">范畴三供应链回溯</h4>
              <p className="text-xs text-slate-400">上游原材料来源成千上万，手動收集供应商数据堪称不可能任务。</p>
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10">
        <div>Slide 04 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
