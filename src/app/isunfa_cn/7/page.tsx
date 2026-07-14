'use client';

import Image from 'next/image';
import { CheckCircle2, Factory, ShieldCheck, ClipboardCheck, ArrowUpRight, BarChart4 } from 'lucide-react';

export default function IsunfaCnSlide7() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute right-1/4 bottom-10 w-[500px] h-[500px] bg-emerald-600 rounded-full filter blur-[140px]"></div>
        <div className="absolute left-10 top-10 w-[400px] h-[400px] bg-sky-500 rounded-full filter blur-[120px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="px-16 pt-12 relative z-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">All-In-One Compliance</span>
          </div>
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            五大支柱：一气呵成的合规平台
          </h1>
          <p className="text-slate-400 text-xs mt-2 font-semibold tracking-wider">
            本地部署 <span className="text-emerald-400 font-bold">20 片 RTX 5070 Ti</span>，最快 <span className="text-sky-400 font-bold">72 小时</span> 即可完成所有合规与分析。
          </p>
        </div>
        <div className="opacity-80 mt-1">
          <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="flex-1 px-16 flex items-center justify-center relative z-10 py-4">
        <div className="grid grid-cols-5 gap-6 w-full max-w-6xl">

          {/* Info: (20260610 - Luphia) Card 1: 组织碳盘查 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <Factory size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">组织碳盘查</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                自動整合多个厂区的排放源数据，产出符合 ISO 14064-1 国际标准的组织温室气体申报报告。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14064-1 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Card 2: 产品碳足迹 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ClipboardCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">产品碳足迹</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                以工艺反向推理技术，计算出單一产品在生命周期内的碳排放，符合 ISO 14067 查证规范。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              ISO 14067 <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Card 3: 数字产品护照 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">数字产品护照</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                产出符合欧盟规范的数字产品护照 (DPP)，即时回报产品碳履历，保障产品顺利通过边境关税審查。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              EU DPP Compliant <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Card 4: 绿色供应链 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <BarChart4 size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">绿色供应链管理</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                動态追踪并稽核下游供应商的实质碳排数据，降低企业的范畴三 (Scope 3) 供应链碳风险。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Scope 3 Management <ArrowUpRight size={10} />
            </div>
          </div>

          {/* Info: (20260610 - Luphia) Card 5: 净零碳排规划 */}
          <div className="bg-slate-950/60 backdrop-blur-md border border-slate-800 p-6 rounded-3xl flex flex-col justify-between h-[320px] hover:border-emerald-500/30 hover:bg-slate-950 transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-100">净零碳排规划</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                結合多维数据分析与绿色路径规划，動态模拟最佳设备升级与减量投资路径。
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
              Net-Zero Path <ArrowUpRight size={10} />
            </div>
          </div>

        </div>
      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>Slide 07 / 11</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
