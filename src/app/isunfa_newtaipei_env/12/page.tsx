export default function iSunFASlide12() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260505 - Luphia) Background: Subtle Tech Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-orange-900/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-orange-900/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16 justify-center text-center">
          <div className="mb-16 space-y-8">
            <h2 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-amber-300 drop-shadow-md">
              攜手共創淨零新北
            </h2>
            <p className="text-4xl font-bold text-white mt-8 tracking-wide">
              期待與環保局展開深度合作
            </p>
          </div>

          <div className="h-1 w-32 bg-orange-600 rounded-full mx-auto my-12" />

          <div className="flex justify-center gap-16 mt-8">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-4 group-hover:border-orange-500 transition-colors">
                <span className="text-orange-400 font-bold text-xl">W</span>
              </div>
              <p className="text-xl text-neutral-400 group-hover:text-white transition-colors">www.isunfa.com</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-4 group-hover:border-orange-500 transition-colors">
                <span className="text-orange-400 font-bold text-xl">@</span>
              </div>
              <p className="text-xl text-neutral-400 group-hover:text-white transition-colors">contact@isunfa.com</p>
            </div>
          </div>
        </div>

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
