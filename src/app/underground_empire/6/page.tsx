'use client';

import { Swords, Ban, UserX, AlertTriangle } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">
          
          {/* SVG Illustration - The Bear / The Troublemaker */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center gap-6 text-slate-400">
              <UserX size={120} strokeWidth={1.5} className="text-red-500 drop-shadow-lg" />
              <div className="flex flex-col items-center justify-center relative">
                <Swords size={80} strokeWidth={1.5} className="text-amber-500 drop-shadow-lg" />
                <Ban size={100} strokeWidth={2} className="text-red-600 absolute opacity-50 -scale-x-100" />
              </div>
              <AlertTriangle size={100} strokeWidth={1.5} className="text-orange-500 drop-shadow-lg animate-pulse" />
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-5xl font-bold leading-relaxed tracking-wide text-slate-100">
              大熊是班上的問題少年，<br/>
              <span className="text-red-400">基本上不聽大米指揮，</span><br/>
              大米必須聯合大家一起<span className="text-amber-400 font-extrabold border-b-4 border-amber-500">制裁大熊</span><br/>
              <span className="text-pink-300 text-3xl">避免班級秩序崩塌</span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          06 // DRAMA: THE TROUBLEMAKER
        </div>
      </div>
    </div>
  );
}
