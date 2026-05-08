'use client';

export default function DPPSlide1() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-gray-800 rounded-xl">

        {/* Background Gradients - Emerald/Cyan Theme for ESG */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500 to-cyan-400 opacity-20"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />

        <div className="z-10 text-center space-y-8 animate-fade-in-up px-16">
          <div className="mb-8">
            <span className="text-emerald-400 font-bold tracking-[0.25em] text-sm border border-emerald-500/30 px-6 py-2 rounded-full uppercase bg-emerald-900/30 backdrop-blur-md shadow-lg shadow-emerald-900/20">
              iSunFA
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 via-cyan-200 to-teal-500 leading-[1.2] pb-4">
            全球供應鏈重組下的通關密碼
            <br />
            <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300 mt-6 block">
              AI 驅動數位產品護照 (DPP)
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mt-8 font-light tracking-wide max-w-4xl mx-auto border-t border-gray-800 pt-8">
            從碳盤查到循環經濟，化解 CBAM 貿易壁壘的終極指南
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            2026 CAFECA Fintech
          </div>
        </div>
      </div>
    </div>
  );
}
