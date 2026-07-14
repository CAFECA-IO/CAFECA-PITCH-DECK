'use client';

export default function Slide4() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-neutral-950 to-neutral-950"></div>
        </div>

        {/* Info: (20260527 - Luphia) Content Container */}
        <div className="z-10 text-center animate-fade-in-up flex flex-col items-center">
          <div className="inline-block px-6 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm tracking-widest mb-12 bg-amber-500/10 backdrop-blur-sm">
            01-2 | 核心理念
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold tracking-[0.1em] text-white leading-[1.4]">
            老闆們的痛，<br />我們懂
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-300 mt-12 mb-12 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          
          <p className="text-3xl text-neutral-400 tracking-widest font-light leading-relaxed">
            讓 <span className="text-amber-400 font-medium drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]">人工智能</span> 來為大家解決問題
          </p>
        </div>

        {/* Info: (20260527 - Luphia) Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-600 text-xs tracking-[0.2em] uppercase z-10 pointer-events-none">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
