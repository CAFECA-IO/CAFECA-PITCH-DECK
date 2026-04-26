'use client';

import { BookX, Frown } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">

          {/* SVG Illustration using lucide-react */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>
            <div className="relative flex items-center justify-center gap-8 text-slate-400">
              <BookX size={120} strokeWidth={1} className="text-red-400 -rotate-12 drop-shadow-lg" />
              <div className="text-slate-600 font-mono text-2xl font-bold">+</div>
              <Frown size={100} strokeWidth={1.5} className="text-amber-500 rotate-6 drop-shadow-lg" />
            </div>
          </div>

          <h2 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-100 to-slate-400 drop-shadow-sm">
            這本書好硬，我不想看了
          </h2>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          03 // INTERMISSION
        </div>
      </div>
    </div>
  );
}
