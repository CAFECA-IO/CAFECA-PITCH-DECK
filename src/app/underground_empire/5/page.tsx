'use client';

import { Crown, User, Star, PartyPopper } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-10 animate-fade-in-up">
          
          {/* SVG Illustration - Spirited Little Prince */}
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex flex-col items-center text-slate-400">
              <Crown size={80} strokeWidth={2} className="text-amber-400 -mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] rotate-[15deg]" />
              <User size={120} strokeWidth={1.5} className="text-slate-300 drop-shadow-lg" />
              <Star size={40} className="text-yellow-500 absolute top-4 -right-12 animate-pulse" />
              <PartyPopper size={40} className="text-orange-400 absolute bottom-4 -left-16 -scale-x-100 rotate-12" />
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-5xl font-bold leading-relaxed tracking-wide text-slate-100">
              大米是班上的班長，<br/>
              <span className="text-amber-400">因為維持班上秩序很辛苦，</span><br/>
              所以不用參加教室打掃，<br/>
              <span className="text-pink-300 text-4xl">偶爾拿班費買些小零食吃吃喝喝大家也睜一隻眼閉一隻眼</span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          05 // DRAMA: THE CLASS PRESIDENT
        </div>
      </div>
    </div>
  );
}
