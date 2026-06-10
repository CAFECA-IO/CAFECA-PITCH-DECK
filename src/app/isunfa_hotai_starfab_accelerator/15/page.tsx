'use client';

import Image from 'next/image';
import { Users, Briefcase, Cpu, Factory, LineChart } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide15() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Core Team</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            跨領域核心創辦人
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-emerald-500/10 p-1 rounded-lg text-emerald-400">
              <Users size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Structure</div>
              <div className="text-[11px] font-bold text-slate-200">100% 互補型學經背景</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-16 pb-10 flex items-center">
        <div className="grid grid-cols-2 gap-6 w-full">

          {/* Member 1: 張智崴 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  張智崴 <span className="text-emerald-400 text-xs font-semibold">共同創辦人 & CEO</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  環工與資訊科技學經背景
                </span>
              </div>
              <div className="bg-emerald-950/50 p-2.5 rounded-xl text-emerald-400 border border-emerald-500/10">
                <Cpu size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              系統架構師，將財務合規與物理狀態預測進行程式碼化。擁有豐富的金融科技經驗與邊緣運算核心技術，曾參與台灣、阿曼及中國之國家級計算平台。師承蔡俊鴻教授（前成功大學環工系主任），致力於以軟體與 AI 驅動車輛全生命週期數位產品護照平台的開發與落地。
            </p>
          </div>

          {/* Member 2: 梁紫涵 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  梁紫涵 <span className="text-sky-400 text-xs font-semibold">共同創辦人 & PE</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  化學工程學經背景
                </span>
              </div>
              <div className="bg-sky-950/50 p-2.5 rounded-xl text-sky-400 border border-sky-500/10">
                <Briefcase size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              曾參與台灣國家級超級電腦「台灣杉二號」核心開發，提出關鍵的分散式帳本與數據共享框架。專精於海量工業數據解析，專注於系統核心邏輯與車輛物理折舊模型，實現高度精確的推理估值技術。
            </p>
          </div>

          {/* Member 3: 張銀玲 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  張銀玲 <span className="text-indigo-400 text-xs font-semibold">共同創辦人</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  20 年深厚金融銀行經驗
                </span>
              </div>
              <div className="bg-indigo-950/50 p-2.5 rounded-xl text-indigo-400 border border-indigo-500/10">
                <LineChart size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              企業金融與授信審計專家，擁有權威的金融科技合規經驗。深諳金融審計中的驗證瓶頸，以及全球綠色金融與車輛資產融資、保險定價的嚴格合規要求，主導財務與合規模型建立。
            </p>
          </div>

          {/* Member 4: 張智傑 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  張智傑 <span className="text-amber-400 text-xs font-semibold">共同創辦人</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  重工業與結構工程
                </span>
              </div>
              <div className="bg-amber-950/50 p-2.5 rounded-xl text-amber-400 border border-amber-500/10">
                <Factory size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              深厚的鋼鐵結構工程背景，熟悉重型機械與車輛物理結構、安全/環保規範及永續工程。曾服務於重工業前線，將實體工廠與保修廠的物理步驟轉化為數位護照 AI 的邏輯分析鏈。
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium">
        <div>Slide 15 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
