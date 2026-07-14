'use client';

import { Globe, Map, Sparkles, Navigation, ArrowRight } from 'lucide-react';

export default function CafecaFaithSlide5() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260612 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-10 bottom-10 w-[600px] h-[600px] bg-green-100 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-blue-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs font-mono text-green-600 uppercase tracking-widest">Global Best Practices</span>
      </div>

      <div className="z-10 w-full max-w-6xl flex flex-col justify-center gap-8 relative px-12 pt-16">
        
        {/* Info: (20260612 - Luphia) Header Text */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
            <Globe className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">綠色典範移轉</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800">
            從全球企業綠色典範中，找出適合你公司的先進技術。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">給他企業核心生產活動，為你從相似的產業中，整理出可用的減碳路徑。</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-center h-[360px]">
           {/* Info: (20260612 - Luphia) Left: Input & Matching Process */}
           <div className="col-span-4 h-full flex flex-col justify-center space-y-6">
              <div className="bg-white border border-slate-200 shadow-md p-6 rounded-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-blue-50 rounded-lg">
                     <Sparkles className="w-5 h-5 text-blue-500" />
                   </div>
                   <h3 className="font-bold text-slate-800">核心生產活動輸入</h3>
                 </div>
                 <div className="space-y-3 text-sm text-slate-600">
                   <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                     <span>製程類型</span>
                     <span className="text-blue-600 font-mono font-semibold">精密金屬加工</span>
                   </div>
                   <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                     <span>主要能耗</span>
                     <span className="text-blue-600 font-mono font-semibold">電爐 / 空壓機</span>
                   </div>
                   <div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-100">
                     <span>規模等級</span>
                     <span className="text-blue-600 font-mono font-semibold">Tier 2 供應商</span>
                   </div>
                 </div>
              </div>

              <div className="flex justify-center">
                 <ArrowRight className="w-8 h-8 text-green-500 animate-pulse" />
              </div>
           </div>

           {/* Info: (20260612 - Luphia) Right: Global Map & Pathways Visualization */}
           <div className="col-span-8 h-full bg-white border border-slate-200 shadow-md p-6 rounded-3xl relative overflow-hidden flex items-center justify-center">
              
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                 {/* Info: (20260612 - Luphia) Map Placeholder or Deco */}
                 <Map className="absolute text-slate-200 w-[120%] h-[120%] stroke-[0.5]" />
                 
                 {/* Info: (20260612 - Luphia) Hub Nodes */}
                 <div className="relative w-full max-w-lg aspect-video">
                    {/* Info: (20260612 - Luphia) Center Node (User's Company) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center relative z-20 shadow-md backdrop-blur-sm">
                         <span className="font-bold text-blue-600 tracking-widest">YOU</span>
                       </div>
                       <span className="mt-2 text-xs font-bold text-blue-600">你的企業</span>
                    </div>

                    {/* Info: (20260612 - Luphia) Node 1: Germany */}
                    <div className="absolute top-[10%] left-[20%] flex flex-col items-center group">
                       <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center z-10 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                         <span className="text-xs">🇩🇪</span>
                       </div>
                       <div className="absolute top-12 bg-white border border-slate-200 shadow-lg p-2 rounded-lg text-[10px] w-32 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                         <div className="text-green-600 font-bold mb-1">Siemens 實踐</div>
                         <div className="text-slate-600">超高頻感應加熱技術 (節能 22%)</div>
                       </div>
                       {/* Info: (20260612 - Luphia) Connection Line */}
                       <svg className="absolute top-5 left-5 w-[150px] h-[100px] pointer-events-none -z-10" style={{ overflow: 'visible' }}>
                         <path d="M 0 0 Q 75 50 150 90" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="animate-[dashMove_3s_linear_infinite]" />
                       </svg>
                    </div>

                    {/* Info: (20260612 - Luphia) Node 2: Japan */}
                    <div className="absolute top-[20%] right-[15%] flex flex-col items-center group">
                       <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center z-10 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                         <span className="text-xs">🇯🇵</span>
                       </div>
                       <div className="absolute top-12 bg-white border border-slate-200 shadow-lg p-2 rounded-lg text-[10px] w-32 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                         <div className="text-green-600 font-bold mb-1">Toyota 實踐</div>
                         <div className="text-slate-600">廢熱回收發電系統 (循環 15%)</div>
                       </div>
                       {/* Info: (20260612 - Luphia) Connection Line */}
                       <svg className="absolute top-5 right-5 w-[140px] h-[70px] pointer-events-none -z-10" style={{ overflow: 'visible' }}>
                         <path d="M 0 0 Q -70 35 -140 60" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="animate-[dashMove_3s_linear_infinite]" />
                       </svg>
                    </div>

                    {/* Info: (20260612 - Luphia) Node 3: USA */}
                    <div className="absolute bottom-[10%] left-[30%] flex flex-col items-center group">
                       <div className="w-10 h-10 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center z-10 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                         <span className="text-xs">🇺🇸</span>
                       </div>
                       <div className="absolute top-12 bg-white border border-slate-200 shadow-lg p-2 rounded-lg text-[10px] w-36 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
                         <div className="text-green-600 font-bold mb-1">Tesla 供應鏈標準</div>
                         <div className="text-slate-600">AI 輔助空壓機排程 (節能 18%)</div>
                       </div>
                       {/* Info: (20260612 - Luphia) Connection Line */}
                       <svg className="absolute bottom-5 left-5 w-[100px] h-[80px] pointer-events-none -z-10" style={{ overflow: 'visible' }}>
                         <path d="M 0 0 Q 50 -40 90 -70" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="animate-[dashMove_3s_linear_infinite]" />
                       </svg>
                    </div>
                 </div>

                 {/* Info: (20260612 - Luphia) Top Right Label */}
                 <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                   <Navigation className="w-4 h-4 text-green-600" />
                   <span className="text-xs font-mono text-green-700 font-semibold">Pathways Synced</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes dashMove {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
