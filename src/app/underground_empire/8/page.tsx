'use client';

import { BookOpen, TrendingUp, Crown, HelpCircle } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl border border-slate-800 p-16 flex flex-col items-center justify-center">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center space-y-12 animate-fade-in-up">
          
          {/* SVG Illustration - The Hard Worker / Ambition */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="relative flex items-center justify-center gap-8 text-slate-400">
              <div className="relative">
                <BookOpen size={100} strokeWidth={1.5} className="text-emerald-500 drop-shadow-lg" />
                <TrendingUp size={40} strokeWidth={2} className="text-emerald-300 absolute -right-4 -top-4 animate-pulse" />
              </div>
              
              <div className="text-slate-600 font-mono text-3xl mx-4">→</div>
              
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  <Crown size={100} strokeWidth={1.5} className="text-amber-500 drop-shadow-lg opacity-80" />
                  <HelpCircle size={50} strokeWidth={2} className="text-pink-400 absolute -top-8 -right-8 rotate-12" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto bg-slate-800/40 p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <h2 className="text-5xl font-bold leading-relaxed tracking-wide text-slate-100">
              <span className="text-emerald-400">小夫原本成績很差，</span><br/>
              苦讀許久後成績突飛猛進，<br/>
              <span className="text-amber-300 font-extrabold text-5xl mt-4 block">大家都在猜他是不是想當班長。</span>
            </h2>
          </div>

        </div>

        <div className="absolute bottom-8 right-16 text-slate-600 text-sm font-mono">
          08 // DRAMA: THE AMBITIOUS STUDENT
        </div>
      </div>
    </div>
  );
}
