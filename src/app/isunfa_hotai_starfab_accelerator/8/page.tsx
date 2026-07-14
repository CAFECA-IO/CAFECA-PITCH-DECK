'use client';

import Image from 'next/image';
import { Smartphone, Car, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide8() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Info: (20260610 - Luphia) Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Info: (20260610 - Luphia) Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Valuation & Journey</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            精準估值與完整履歷：車主的行動管家
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-emerald-500/10 p-1 rounded-lg text-emerald-400">
              <Smartphone size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Mobile Experience</div>
              <div className="text-[11px] font-bold text-slate-200">即時掌握愛車價值</div>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Content */}
      <div className="relative z-10 flex-1 px-16 pb-10 flex items-center justify-between gap-12">
        
        {/* Info: (20260610 - Luphia) Left Side: Text Description */}
        <div className="w-[50%] flex flex-col gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-100">用完整數據換取最高二手殘值</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              透過 AI 即時辨識所有保修單據，並同步更新至車輛數位履歷。透明、受信任且不可竄改的保修紀錄，能為車主在愛車估價時爭取顯著的溢價空間。
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              <h3 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={16} /> 100% 原廠保修認證
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                車主可透過專屬 APP 隨時查看由區塊鏈技術保護的歷史工單，不必擔心紙本遺失，保證資訊的真實性。
              </p>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              <h3 className="text-sky-400 font-bold text-sm mb-2 flex items-center gap-2">
                <ArrowUpRight size={16} /> 動態 AI 殘值試算
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                結合市場行情與車輛個別的履歷健康度，提供最貼近實際行情的殘值評估，展現完整保養對車價的正面影響。
              </p>
            </div>
          </div>
        </div>

        {/* Info: (20260610 - Luphia) Right Side: Phone Mockup */}
        <div className="w-[50%] flex justify-center items-center relative scale-[0.85] transform-gpu">
          
          {/* Info: (20260610 - Luphia) Phone Body */}
          <div className="w-[300px] h-[600px] bg-slate-900 rounded-[48px] border-[12px] border-slate-800 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_inset_0_0_0_2px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col ring-2 ring-slate-900 z-10">
            
            {/* Info: (20260610 - Luphia) Side Buttons */}
            <div className="absolute -left-[14px] top-[120px] w-[2px] h-[24px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[160px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[220px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -right-[14px] top-[170px] w-[2px] h-[72px] bg-slate-700 rounded-r-sm"></div>

            {/* Info: (20260610 - Luphia) Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
              <div className="w-2.5 h-2.5 bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-inner">
                 <div className="w-1 h-1 bg-blue-900/60 rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-80"></div>
            </div>

            {/* Info: (20260610 - Luphia) Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] text-white font-medium z-20 absolute top-0 w-full bg-gradient-to-b from-black/60 to-transparent">
              <span>10:09</span>
              <div className="flex gap-1.5 items-center">
                <span className="text-[9px] font-bold">5G</span>
                <div className="flex gap-0.5 items-end h-2.5">
                  <div className="w-0.5 h-1 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2.5 bg-white/40 rounded-sm"></div>
                </div>
                <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] relative">
                  <div className="w-full h-full bg-white rounded-[1px]"></div>
                  <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-white/80 rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Info: (20260610 - Luphia) App Content */}
            <div className="flex-1 bg-slate-950 relative overflow-y-auto scrollbar-hide flex flex-col pb-8 pt-12 text-slate-200">
              
              {/* Info: (20260610 - Luphia) Car Info Header */}
              <div className="px-5 py-4 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-slate-100">Lexus RX 300 豪華版</h3>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">車況 A (優)</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                  <Car size={12} /> JTJNZ31U2JXXXXX
                </div>
              </div>

              {/* Info: (20260610 - Luphia) Valuation Card */}
              <div className="mx-4 my-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 border border-slate-700 shadow-lg">
                <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">AI 評估當前殘值</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 font-mono">TWD 1.48M</span>
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center bg-emerald-950 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                    <ArrowUpRight size={10} /> +9.6%
                  </span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-700 flex justify-between text-[8px] text-slate-400">
                  <span>無履歷均價: 1.35M</span>
                  <span className="text-emerald-400 font-bold">履歷溢價: +130,000</span>
                </div>

                {/* Info: (20260610 - Luphia) Mini Chart */}
                <div className="h-16 w-full mt-3 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                    <path d="M 0,5 Q 100,25 200,45" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
                    <path d="M 0,5 Q 100,20 200,35" fill="none" stroke="#10b981" strokeWidth="2" />
                    <circle cx="200" cy="35" r="3" fill="#10b981" />
                  </svg>
                  <div className="absolute right-0 top-3 text-[7px] text-emerald-400 font-bold">您的愛車</div>
                  <div className="absolute right-0 top-10 text-[7px] text-slate-500 font-bold">市場均線</div>
                </div>
              </div>

              {/* Info: (20260610 - Luphia) Journey Timeline */}
              <div className="px-4 pb-4 flex-1">
                <h4 className="text-[11px] font-bold text-slate-300 mb-4 flex items-center gap-2">
                  保修旅程紀錄 <span className="text-[8px] font-normal text-slate-500 font-mono">(Blockchain Verified)</span>
                </h4>
                
                <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-0 before:w-px before:bg-slate-800">
                  
                  {/* Info: (20260610 - Luphia) Event 1 */}
                  <div className="flex gap-3 relative pl-5">
                    <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-slate-950"></div>
                    <div className="flex-1 bg-slate-900 rounded-xl p-2.5 border border-slate-800">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-bold text-slate-300">2025/11/12</span>
                        <span className="text-[8px] font-mono text-slate-500">40,230 km</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold">4萬公里定保 (濱江廠)</p>
                      <div className="mt-1.5 flex">
                        <span className="text-[7px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/20 px-1 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle2 size={8} /> 已驗證
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info: (20260610 - Luphia) Event 2 */}
                  <div className="flex gap-3 relative pl-5">
                    <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-slate-950"></div>
                    <div className="flex-1 bg-slate-900 rounded-xl p-2.5 border border-slate-800">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-bold text-slate-300">2025/11/12</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold">更換前煞車皮</p>
                      <div className="mt-1.5 flex">
                        <span className="text-[7px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-500/20 px-1 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle2 size={8} /> 手寫工單辨識
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info: (20260610 - Luphia) Event 3 */}
                  <div className="flex gap-3 relative pl-5 opacity-70">
                    <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-sky-500 ring-2 ring-slate-950"></div>
                    <div className="flex-1 bg-slate-900 rounded-xl p-2.5 border border-slate-800">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[9px] font-bold text-slate-300">2024/05/20</span>
                        <span className="text-[8px] font-mono text-slate-500">25,120 km</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold">2.5萬公里定保</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Info: (20260610 - Luphia) Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/40 rounded-full z-30"></div>

          </div>

          {/* Info: (20260610 - Luphia) Decorative glows behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-sky-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        </div>

      </div>

      {/* Info: (20260610 - Luphia) Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-50">
        <div>Slide 08 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
