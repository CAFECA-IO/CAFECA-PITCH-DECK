'use client';

import { Cpu, Zap, ShieldAlert } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col">
        
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-950/20 to-transparent pointer-events-none"></div>

        <div className="z-10 flex flex-col h-full">
          <div className="mb-12">
            <span className="text-red-500 font-mono text-sm tracking-widest mb-2 block">CURRENT EVENTS 2026</span>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 mb-4">
              2026: AI 算力與晶片封鎖
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-transparent"></div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-16 mt-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="p-8 bg-slate-950/60 rounded-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Cpu size={120} />
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                  <Zap className="text-amber-500" /> AGI 競賽的咽喉點
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  2026年，生成式 AI 與 AGI (通用人工智慧) 的競爭進入白熱化。算力即國力，誰能掌握最先進的 GPU 集群與封裝技術，誰就能主導未來的經濟與軍事。
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <ShieldAlert size={20} /> 地下帝國的具體操作
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-slate-300 items-start">
                    <span className="text-red-500 mt-1">▸</span>
                    <span><strong>長臂管轄：</strong> 擴大外國直接產品規則 (FDPR)，不僅限制實體清單，更限制任何使用美國軟體設計的 AI 晶片代工。</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 items-start">
                    <span className="text-red-500 mt-1">▸</span>
                    <span><strong>雲端算力封鎖：</strong> 2026年新規限制中資企業租用海外 AWS、Azure 或 GCP 的高階算力服務，封堵「雲端繞道」的漏洞。</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 items-start">
                    <span className="text-red-500 mt-1">▸</span>
                    <span><strong>設備供應鏈阻斷：</strong> 聯手荷蘭、日本，將極紫外光 (EUV) 與新一代高數值孔徑 (High-NA) 曝光機的出口管制升級至絕對禁運。</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              {/* Abstract visualization of a locked chip node */}
              <div className="w-full aspect-square max-w-md relative">
                <div className="absolute inset-0 border-2 border-slate-800 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-4 border-2 border-red-900/50 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute inset-8 border border-slate-700 rounded-full"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-slate-900 border-2 border-red-500 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.2)] flex items-center justify-center relative z-10">
                    <Cpu size={64} className="text-red-400" />
                    <div className="absolute -bottom-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                      CHOKED
                    </div>
                  </div>
                </div>

                {/* Nodes */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute w-4 h-4 bg-slate-700 rounded-full"
                    style={{
                      top: `${50 + 45 * Math.sin(i * Math.PI / 3)}%`,
                      left: `${50 + 45 * Math.cos(i * Math.PI / 3)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="w-full h-full bg-red-500 rounded-full animate-ping opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          03 // CHIP WAR & COMPUTE
        </div>
      </div>
    </div>
  );
}
