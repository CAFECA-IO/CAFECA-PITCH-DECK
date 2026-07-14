'use client';

import Image from 'next/image';
import { Users, Briefcase, Cpu, Factory, LineChart } from 'lucide-react';

export default function CafecaIsunfaSlide11() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260609 - Luphia) Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Info: (20260609 - Luphia) Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Core Team</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            Cross-Disciplinary Core Founders
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
              <div className="text-[11px] font-bold text-slate-200">100% Complementary Skills</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260609 - Luphia) Content */}
      <div className="relative z-10 flex-1 px-16 pb-10 flex items-center">
        <div className="grid grid-cols-2 gap-6 w-full">

          {/* Info: (20260609 - Luphia) Member 1: 張智崴 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  Luphia Chang <span className="text-emerald-400 text-xs font-semibold">Co-founder & CEO</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  Environmental Engineering & IT Background
                </span>
              </div>
              <div className="bg-emerald-950/50 p-2.5 rounded-xl text-emerald-400 border border-emerald-500/10">
                <Cpu size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              System architect codifying financial compliance and physical carbon emissions. Rich fintech experience and edge computing core tech. Participated in national-scale computing platforms in Taiwan, Oman, and China. Mentored by Prof. Tsai Chun-Hung (former NCKU EnvEng Chair). Dedicated to software-driven manufacturing green compliance.
            </p>
          </div>

          {/* Info: (20260609 - Luphia) Member 2: 梁紫涵 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  Tzuhan Liang <span className="text-sky-400 text-xs font-semibold">Co-founder & PE</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  Chemical Engineering Background
                </span>
              </div>
              <div className="bg-sky-950/50 p-2.5 rounded-xl text-sky-400 border border-sky-500/10">
                <Briefcase size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              Participated in the core development of Taiwan&apos;s national supercomputer &ldquo;Taiwania 2&rdquo;, proposing key distributed ledger and data sharing frameworks. Expert in massive industrial data parsing. Focuses on system core logic and industrial physical modeling to achieve high-fidelity reverse reasoning in FAITH.
            </p>
          </div>

          {/* Info: (20260609 - Luphia) Member 3: 張銀玲 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  Yinling Chang <span className="text-indigo-400 text-xs font-semibold">Co-founder</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  20 Years of Deep Banking Experience
                </span>
              </div>
              <div className="bg-indigo-950/50 p-2.5 rounded-xl text-indigo-400 border border-indigo-500/10">
                <LineChart size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              Master of corporate finance and loan auditing with authoritative fintech compliance experience. Deeply understands verification bottlenecks in financial audits and the stringent green compliance requirements of bank financing under global carbon taxes. Leads financial and compliance modeling.
            </p>
          </div>

          {/* Info: (20260609 - Luphia) Member 4: 張智傑 */}
          <div className="bg-slate-950/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  Jay Chang <span className="text-amber-400 text-xs font-semibold">Co-founder</span>
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
                  Heavy Industry & Structural Engineering
                </span>
              </div>
              <div className="bg-amber-950/50 p-2.5 rounded-xl text-amber-400 border border-amber-500/10">
                <Factory size={20} />
              </div>
            </div>
            <p className="text-slate-400 text-[10px] leading-relaxed text-justify">
              Deep foundation in steel structural engineering, familiar with heavy machinery processes, safety/environmental codes, and sustainable engineering. Worked on the front lines of heavy industries, translating physical factory steps into FAITH AI&apos;s carbon emission logical chains.
            </p>
          </div>

        </div>
      </div>

      {/* Info: (20260609 - Luphia) Footer */}
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
