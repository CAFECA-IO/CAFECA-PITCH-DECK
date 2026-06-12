'use client';

import { Recycle, Factory, ArrowRight, Box, ShieldCheck } from 'lucide-react';

export default function CafecaFaithSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 bottom-1/4 w-[600px] h-[600px] bg-green-100 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-10 top-10 w-[400px] h-[400px] bg-emerald-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-mono text-green-600 uppercase tracking-widest">Circular Economy Pathfinder</span>
      </div>

      <div className="z-10 w-full max-w-6xl flex flex-col justify-center gap-8 relative px-12 pt-16">
        
        {/* Header Text */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
            <Recycle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">循環經濟路徑</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            從供應鏈數據中，找出循環經濟路徑。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">給他廢棄物清單，為你找出廢棄物的循環經濟價值，可提煉的廠商，需要該再生原料的下游工廠。</span>
          </h2>
        </div>

        {/* Circular Flow Diagram */}
        <div className="w-full bg-white border border-slate-200 shadow-md rounded-3xl p-8 relative overflow-hidden">
           
           <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.03)_25%,transparent_25%,transparent_50%,rgba(16,185,129,0.03)_50%,rgba(16,185,129,0.03)_75%,transparent_75%,transparent)] bg-[length:24px_24px]"></div>

           <div className="relative flex justify-between items-center z-10 w-full max-w-5xl mx-auto">
             
             {/* Step 1: Input Waste */}
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center relative shadow-sm group-hover:-translate-y-2 transition-transform">
                  <Box className="w-10 h-10 text-slate-500" />
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                    成本
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-800">廢棄物清單</h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono font-semibold">氫氟酸廢水 / 含氟污泥</p>
                </div>
             </div>

             {/* Arrow 1 */}
             <div className="flex-1 flex justify-center items-center px-4 relative">
                <div className="h-0.5 w-full bg-slate-200 relative">
                  <div className="absolute top-1/2 left-0 h-1 w-1/2 bg-gradient-to-r from-slate-200 to-green-400 -translate-y-1/2 animate-[progress_2s_ease-in-out_infinite]"></div>
                </div>
                <ArrowRight className="w-6 h-6 text-green-500 absolute bg-white p-0.5 rounded-full shadow-sm border border-slate-100" />
                <div className="absolute -top-6 text-[10px] text-green-600 font-bold bg-green-50 border border-green-100 px-2 py-1 rounded-full shadow-sm">AI 分析媒合</div>
             </div>

             {/* Step 2: Refining */}
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-2xl bg-white border-2 border-green-400 flex items-center justify-center relative shadow-md group-hover:-translate-y-2 transition-transform">
                  <Factory className="w-10 h-10 text-green-500" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-800">可提煉廠商</h3>
                  <p className="text-xs text-green-600 mt-1 font-mono font-bold">匹配度: 94%</p>
                </div>
             </div>

             {/* Arrow 2 */}
             <div className="flex-1 flex justify-center items-center px-4 relative">
                <div className="h-0.5 w-full bg-slate-200 relative">
                  <div className="absolute top-1/2 left-0 h-1 w-1/2 bg-gradient-to-r from-green-400 to-emerald-500 -translate-y-1/2 animate-[progress_2s_ease-in-out_infinite_0.5s]"></div>
                </div>
                <ArrowRight className="w-6 h-6 text-emerald-500 absolute bg-white p-0.5 rounded-full shadow-sm border border-slate-100" />
                <div className="absolute -top-6 text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full shadow-sm">再生原料輸出</div>
             </div>

             {/* Step 3: Reuse */}
             <div className="flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-2xl bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center relative shadow-lg group-hover:-translate-y-2 transition-transform">
                  <ShieldCheck className="w-10 h-10 text-emerald-600" />
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                    收益
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-slate-800">下游應用工廠</h3>
                  <p className="text-xs text-emerald-600 mt-1 font-mono font-bold">鋼鐵廠 (助熔劑：人造螢石)</p>
                </div>
             </div>

           </div>

           {/* ROI Banner */}
           <div className="mt-8 bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-200 relative z-10 shadow-sm">
             <div className="flex items-center gap-3">
               <Recycle className="w-6 h-6 text-green-600" />
               <div>
                 <div className="text-sm font-bold text-slate-800">將廢棄物處置成本，轉化為循環經濟收入。</div>
                 <div className="text-xs text-slate-500">平均可降低 30% 廢棄物處理費，並創造額外原料收益。</div>
               </div>
             </div>
             <div className="text-right">
               <div className="text-2xl font-mono font-bold text-green-600">+ 15%</div>
               <div className="text-[10px] text-slate-500 uppercase font-bold">潛在資源回收利潤率</div>
             </div>
           </div>

        </div>

      </div>
      
      <style>{`
        @keyframes progress {
          0% { left: 0; width: 0%; opacity: 1; }
          50% { left: 0; width: 100%; opacity: 1; }
          100% { left: 100%; width: 0%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
