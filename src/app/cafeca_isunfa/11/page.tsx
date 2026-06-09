'use client';

import Image from 'next/image';
import { Users, Briefcase, Cpu, Factory, LineChart } from 'lucide-react';

export default function CafecaIsunfaSlide11() {
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
            跨領域核心創辦團隊
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
              <div className="text-[11px] font-bold text-slate-200">100% 技術與產業互補</div>
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
                  張智崴 <span className="text-emerald-400 text-xs font-semibold">Co-founder & CEO</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  環境工程 / 資訊科技背景
                </span>
              </div>
              <div className="bg-emerald-950/50 p-2.5 rounded-xl text-emerald-400 border border-emerald-500/10">
                <Cpu size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed text-justify">
              將金融合規與物理碳排代碼化的系統架構師，具備豐富金融科技實戰經驗與邊緣運算核心技術，參與臺灣、阿曼、中國國家級大型運算平台建設。受成大環工學系前系主任蔡俊鴻教授指導，致力以軟體實現製造業綠色合規。
            </p>
          </div>

          {/* Member 2: 梁紫涵 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  梁紫涵 <span className="text-sky-400 text-xs font-semibold">Co-founder & PE</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  化學工程背景
                </span>
              </div>
              <div className="bg-sky-950/50 p-2.5 rounded-xl text-sky-400 border border-sky-500/10">
                <Briefcase size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed text-justify">
              曾參與國家級超級電腦「臺灣杉二號」核心開發，提出關鍵分散式帳本與數據共享架構，專長於大量工業數據模型解析。專注於系統底層邏輯與工業物理建模，實現 FAITH 核心反向推理之高擬真性。
            </p>
          </div>

          {/* Member 3: 張銀玲 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  張銀玲 <span className="text-indigo-400 text-xs font-semibold">Co-founder</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  20 年深厚銀行資歷
                </span>
              </div>
              <div className="bg-indigo-950/50 p-2.5 rounded-xl text-indigo-400 border border-indigo-500/10">
                <LineChart size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed text-justify">
              精通企業財務及融資審核流程，具備權威性金融合規實務經驗。深刻了解企業在財務帳目審計上的核查瓶頸，以及全球碳稅浪潮下銀行融資放款對「綠色合規」的硬性指標，主導產品財務與合規模型設計。
            </p>
          </div>

          {/* Member 4: 張智傑 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  張智傑 <span className="text-amber-400 text-xs font-semibold">Co-founder</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  重工業與結構工程背景
                </span>
              </div>
              <div className="bg-amber-950/50 p-2.5 rounded-xl text-amber-400 border border-amber-500/10">
                <Factory size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed text-justify">
              擁有深厚鋼鐵結構工程底蘊，熟稔重型機械製程、現場工安環保法規與永續工程學。在重工業與製造業前線，親自參與高碳排產業運作，將真實工廠製程對應至 FAITH AI 之碳排放邏輯鏈。
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium">
        <div>Slide 11 / 13</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 iSunFA
        </div>
      </div>

    </div>
  );
}
