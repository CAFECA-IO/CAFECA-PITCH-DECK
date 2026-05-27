'use client';

export default function Slide9() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-[#050505] relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800">

        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-[#050505] to-[#050505]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        {/* Formula Section */}
        <div className="z-10 text-center px-12 mb-16 relative flex flex-col items-center">
          <div className="inline-block px-6 py-2 rounded-full border border-amber-500/30 text-amber-300 text-sm tracking-widest mb-10 bg-amber-900/20 backdrop-blur-md">
            新時代時間方程式
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 via-orange-400/20 to-amber-500/20 blur-2xl rounded-full"></div>
            <h2 className="text-6xl md:text-7xl font-mono font-bold tracking-tight text-white drop-shadow-2xl relative">
              <span className="text-amber-400">T<sub className="text-4xl">style</sub></span> = 24<span className="text-4xl text-neutral-400">H</span> - (<span className="text-red-400">T<sub className="text-4xl">admin</sub></span> ÷ <span className="text-emerald-400 font-black tracking-widest drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">AI</span>)
            </h2>
          </div>
        </div>

        {/* Highlight Result */}
        <div className="z-10 mt-12 bg-neutral-900/80 backdrop-blur-xl border border-amber-500/30 rounded-full px-16 py-8 shadow-[0_0_40px_rgba(245,158,11,0.2)] flex items-center gap-6 transform hover:scale-105 transition-transform duration-500 cursor-default">
          <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
          <h3 className="text-[40px] font-bold text-neutral-100 tracking-wider">
            把 <span className="text-6xl text-amber-400 mx-2 font-black drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">60%</span> 時間還給你，專注打造在地品牌
          </h3>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-600 text-xs tracking-[0.2em] uppercase z-10 pointer-events-none">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
