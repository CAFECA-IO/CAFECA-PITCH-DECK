'use client';

import { GraduationCap, HeartCrack, Flame } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">
          
          {/* SVG Illustration using lucide-react */}
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center gap-6 text-slate-400">
              <GraduationCap size={100} strokeWidth={1.5} className="text-pink-400 -rotate-12 drop-shadow-lg" />
              <Flame size={80} strokeWidth={1.5} className="text-amber-500 animate-pulse drop-shadow-lg" />
              <HeartCrack size={100} strokeWidth={1.5} className="text-red-500 rotate-12 drop-shadow-lg" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-400 drop-shadow-sm">
              不要走！我們換個狗血校園劇來說明
            </h2>
            <p className="text-2xl text-pink-400/80 font-medium tracking-wide">
              (用簡單的方式，看懂全球經濟武器化)
            </p>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          04 // CAMPUS DRAMA
        </div>
      </div>
    </div>
  );
}
