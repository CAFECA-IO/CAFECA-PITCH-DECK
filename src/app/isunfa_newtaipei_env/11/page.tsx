'use client';

export default function iSunFASlide11() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) Background: Subtle Tech Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16 justify-center text-center">
          <div className="mb-12 space-y-8">
            <h2 className="text-5xl font-bold tracking-tight text-white mb-6">
              實現
            </h2>
            <div className="flex justify-center gap-8 text-5xl font-extrabold text-orange-400 drop-shadow-md">
              <span>「查得快」</span>
              <span>「看得到」</span>
              <span>「推得動」</span>
            </div>
          </div>

          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto my-12" />

          <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-white leading-relaxed drop-shadow-lg">
            讓新北市成為全球<br/>
            <span className="text-6xl text-orange-400 mt-4 inline-block drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]">AI 淨零治理的示範城市</span>
          </p>
        </div>

        {/* Info: (20260212 - Luphia) Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>領航淨零，智算未來</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            2026 CAFECA Fintech
          </div>
        </div>

      </div>
    </div>
  );
}
