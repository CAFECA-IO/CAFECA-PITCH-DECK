'use client';

export default function NetZeroFactorySlide5() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">
        
        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
        
        <div className="flex-1 flex flex-col px-16 pt-6 pb-16 z-10 ">
          <div className="mb-3">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">Material Analysis: Raw & Waste Data</h2>
          </div>
          
          <div className="flex-1 flex flex-col relative z-10 justify-center">
            <div className="bg-slate-50 p-3.5 rounded-2xl shadow-sm border border-slate-100 mb-3">
              <h4 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                Automated Composition Breakdown
              </h4>
              <p className="text-slate-700 leading-relaxed text-base">
                Through sensor fusion and deep learning, the AI brain instantly evaluates incoming raw materials and outgoing waste streams without manual lab testing delays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div className="bg-white p-4.5 rounded-2xl shadow-md border-t-4 border-emerald-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-5xl font-black">RAW</div>
                <h4 className="text-lg font-bold text-sky-950 mb-2 flex items-center gap-3">
                  <span className="text-emerald-500 text-xl">🔍</span> Incoming Material Verification
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                  Automatically checks the exact composition of incoming resources, ensuring quality standards are met before entering the production lifecycle.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl shadow-md border-t-4 border-sky-500 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-5xl font-black">WST</div>
                <h4 className="text-lg font-bold text-sky-950 mb-2 flex items-center gap-3">
                  <span className="text-sky-500 text-xl">🧪</span> Outgoing Waste Profiling
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                  Analyzes the molecular or structural properties of generated waste, matching it against <strong className="text-sky-700">known material databases</strong> to determine its recycling potential.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 text-emerald-900 p-3.5 rounded-xl border border-emerald-200 flex items-start gap-3">
              <span className="text-xl mt-0.5 text-emerald-600">💡</span>
              <div>
                <h4 className="text-base font-bold mb-0.5">Strategic Value</h4>
                <p className="text-sm leading-relaxed">Instantly transforms unknown waste streams into structured data ready for circular economy matchmaking.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
