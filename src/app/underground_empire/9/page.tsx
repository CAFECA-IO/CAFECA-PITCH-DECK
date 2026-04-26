'use client';

import { Crown, Frown, MessageCircle, Trash2, CloudLightning } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">
          
          {/* SVG Illustration - Dami's Panic */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center text-slate-400">
              
              <div className="relative flex flex-col items-center">
                <CloudLightning size={60} strokeWidth={1.5} className="text-purple-400 absolute -top-12 -left-12 animate-pulse" />
                <Crown size={60} strokeWidth={2} className="text-amber-500 mb-[-15px] -rotate-12 z-10 drop-shadow-lg" />
                <Frown size={120} strokeWidth={1.5} className="text-slate-300 drop-shadow-lg" />
              </div>
              
              <div className="relative ml-8 -mt-16">
                <MessageCircle size={150} strokeWidth={1} className="text-slate-600 drop-shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center -mt-2">
                  <Trash2 size={50} strokeWidth={1.5} className="text-red-400" />
                  <span className="absolute -bottom-1 text-4xl font-bold text-red-500 block">X</span>
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-5xl font-bold leading-relaxed tracking-wide text-slate-100">
              大米心想，<span className="text-purple-400 font-extrabold text-6xl">不行！</span><br/>
              我不要去掃廁所，我不能不當班長，<br/>
              <span className="text-amber-300 border-b-4 border-amber-500 inline-block mt-4">但是該怎麼辦呢？</span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          09 // DRAMA: PANIC & PLOTTING
        </div>
      </div>
    </div>
  );
}
