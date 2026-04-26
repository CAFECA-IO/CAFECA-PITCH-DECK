'use client';

import { Lightbulb, Ban, Dumbbell, UtensilsCrossed, Users, BookOpen } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">
          
          {/* SVG Illustration - The Master Plan (Sanctions) */}
          <div className="relative w-full max-w-2xl flex justify-center items-center">
            
            {/* Center Idea */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
              <Lightbulb size={100} strokeWidth={1.5} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] animate-pulse" />
            </div>

            {/* Three Sanctions */}
            <div className="absolute inset-0 flex justify-between items-center px-12 z-10">
              {/* Ban Gym */}
              <div className="relative group">
                <Dumbbell size={60} className="text-indigo-400" />
                <Ban size={80} strokeWidth={2} className="text-red-500 absolute -top-2 -left-2 opacity-80" />
              </div>
              
              {/* Ban Lunch */}
              <div className="relative group -mt-32">
                <UtensilsCrossed size={60} className="text-amber-600" />
                <Ban size={80} strokeWidth={2} className="text-red-500 absolute -top-2 -left-2 opacity-80" />
              </div>

              {/* Ban Tutoring */}
              <div className="relative group">
                <BookOpen size={60} className="text-emerald-500" />
                <Ban size={80} strokeWidth={2} className="text-red-500 absolute -top-2 -left-2 opacity-80" />
              </div>
            </div>
            
            {/* Isolation Group */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-slate-500 flex items-center gap-2">
              <Users size={40} />
              <span className="font-bold text-red-500">ISOLATION</span>
            </div>

          </div>

          <div className="space-y-6 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl mt-12">
            <h2 className="text-4xl font-bold leading-relaxed tracking-wide text-slate-100">
              <span className="text-yellow-400 text-5xl">有了！</span><br/>
              我要禁止小南健身，<br/>
              罰大熊不能吃營養午餐，<br/>
              最後罰小夫不准去上補習班，<br/>
              <span className="text-red-400 font-extrabold mt-4 block border-t border-slate-700 pt-4">
                然後成立小團體叫大家一起孤立他們。
              </span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          10 // DRAMA: THE MASTER PLAN (SANCTIONS)
        </div>
      </div>
    </div>
  );
}
