'use client';

import { Activity, Cpu, PlayCircle, Layers } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260612 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full mix-blend-multiply filter blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] bg-yellow-50/80 rounded-full mix-blend-multiply filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">Digital Twin Simulation</span>
      </div>

      {/* Info: (20260612 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-16 pt-16 relative">
        
        {/* Info: (20260612 - Luphia) Header Text */}
        <div className="space-y-4 mb-8 mt-2 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
            <Layers className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">反向模擬製程</span>
          </div>
          
          <h2 className="text-4xl font-black leading-tight text-slate-800 max-w-2xl">
            為你的企業拆解分析後，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">反向模擬每年發生的成千上萬，包含製程在內的企業活動</span>
          </h2>
        </div>

        {/* Info: (20260612 - Luphia) Central Visualization within Left 2/3 */}
        <div className="relative w-full max-w-3xl h-[320px] bg-white border border-slate-200 shadow-md rounded-3xl p-8 flex items-center justify-between">
          
          {/* Info: (20260612 - Luphia) Left: Input Data stream */}
          <div className="flex flex-col gap-5 z-10 w-40">
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-sm">
              <Activity className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold text-slate-700">企業生產數據</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-sm">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-700">廠房能耗數據</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200 shadow-sm">
              <Activity className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold text-slate-700">供應鏈物料流</span>
            </div>
          </div>

          {/* Info: (20260612 - Luphia) Center: AI Simulation Engine */}
          <div className="relative flex-1 h-full flex items-center justify-center">
            {/* Info: (20260612 - Luphia) Animated Data Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
               <svg className="w-full h-24" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M0 50 Q 75 0, 150 50 T 300 50" stroke="url(#paint0_linear)" strokeWidth="3" strokeDasharray="6 6" className="animate-[dashMove_2s_linear_infinite]" />
                 <path d="M0 50 Q 75 100, 150 50 T 300 50" stroke="url(#paint1_linear)" strokeWidth="3" strokeDasharray="6 6" className="animate-[dashMove_3s_linear_infinite_reverse]" />
                 <defs>
                   <linearGradient id="paint0_linear" x1="0" y1="50" x2="300" y2="50" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#f97316" stopOpacity="0"/>
                     <stop offset="0.5" stopColor="#f97316"/>
                     <stop offset="1" stopColor="#f97316" stopOpacity="0"/>
                   </linearGradient>
                   <linearGradient id="paint1_linear" x1="0" y1="50" x2="300" y2="50" gradientUnits="userSpaceOnUse">
                     <stop stopColor="#fbbf24" stopOpacity="0"/>
                     <stop offset="0.5" stopColor="#fbbf24"/>
                     <stop offset="1" stopColor="#fbbf24" stopOpacity="0"/>
                   </linearGradient>
                 </defs>
               </svg>
            </div>
            
            <div className="relative z-10 w-40 h-40 bg-white rounded-full border-2 border-orange-200 shadow-lg flex flex-col items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-orange-50/50 group-hover:bg-orange-100/50 transition-colors"></div>
              <Cpu className="w-10 h-10 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-slate-800">數位孿生</span>
              <span className="text-[9px] text-orange-500 mt-1 font-mono">Digital Twin Engine</span>
            </div>
          </div>

          {/* Info: (20260612 - Luphia) Right: Output/Simulation Indicator */}
          <div className="flex flex-col gap-4 z-10 relative items-center w-32">
             <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shadow-sm">
                <PlayCircle className="w-8 h-8 text-orange-500" />
             </div>
             <div className="text-center">
                <div className="text-xs font-bold text-slate-700">模擬製程分析</div>
                <div className="text-[10px] text-slate-400 mt-1 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                  Processing...
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Info: (20260612 - Luphia) Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
         <Image
           src="/cafeca_faith/robot_vision.jpeg"
           alt="AI Simulation View"
           fill
           className="object-cover"
           style={{ objectFit: 'cover' }}
         />
         <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-700 tracking-wider">AI VISION ACTIVE</span>
         </div>
      </div>

    </div>
  );
}
