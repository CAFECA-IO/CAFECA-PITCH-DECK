'use client';

import { Dumbbell, UserMinus, ShieldAlert, TrendingUp } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">

        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">

          {/* SVG Illustration - The Bullied becomes Strong */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center gap-8 text-slate-400">
              <div className="relative">
                <UserMinus size={80} strokeWidth={1.5} className="text-slate-500 drop-shadow-lg opacity-60" />
                <ShieldAlert size={40} className="text-red-400 absolute -bottom-2 -right-2 rotate-12" />
              </div>

              <TrendingUp size={60} strokeWidth={2} className="text-indigo-400 animate-pulse" />

              <div className="relative">
                <Dumbbell size={120} strokeWidth={1.5} className="text-indigo-500 drop-shadow-lg -rotate-45" />
                <div className="absolute inset-0 bg-indigo-400 blur-xl opacity-30 mix-blend-screen rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-5xl font-bold leading-relaxed tracking-wide text-slate-100">
              <span className="text-indigo-300">小南一直被小乙欺侮，</span><br />
              抗議大米不主持公道，<br />
              <span className="text-indigo-400 font-extrabold text-6xl mt-4 block">於是自己開始重訓健身，還鼓吹大家換班長。</span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          07 // DRAMA: GETTING STRONGER
        </div>
      </div>
    </div>
  );
}
