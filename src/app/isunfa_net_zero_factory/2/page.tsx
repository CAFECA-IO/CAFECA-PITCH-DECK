'use client';

export default function NetZeroFactorySlide2() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260527 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 ">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">The Paradigm Shift: From Passive to Precise</h2>
          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="grid grid-cols-1 gap-4 mt-2">
              <div className="bg-slate-50 p-5 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-lg font-bold text-sky-950 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                  The Challenge:
                </h4>
                <p className="text-slate-700 leading-relaxed text-base">Traditional factories rely on <strong className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mx-1">&quot;passive post-processing&quot;</strong> of waste, leading to inefficiencies, high costs, and severe environmental impact. Transitioning to a true Net-Zero framework requires a fundamental shift in operations.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md border-t-4 border-emerald-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 text-7xl font-black">CORE</div>
                <h4 className="text-xl font-bold text-sky-950 mb-4 flex items-center gap-3">
                  <span className="text-emerald-500 text-xl">🎯</span> Core Proposition
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 mt-1 font-bold text-lg shadow-sm border border-emerald-200">1</div>
                    <div>
                      <h5 className="text-lg font-bold text-sky-900 mb-1">Preemptive Precision</h5>
                      <p className="text-slate-600 leading-relaxed text-base">Leveraging AI to shift operations from reactive waste management to proactive prediction and optimization before production even begins.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0 mt-1 font-bold text-lg shadow-sm border border-emerald-200">2</div>
                    <div>
                      <h5 className="text-lg font-bold text-sky-900 mb-1">The Circular Engine</h5>
                      <p className="text-slate-600 leading-relaxed text-base">Acting as the brain of the factory, AI dynamically aligns production with circular economy pathways, transforming potential waste into valuable <strong className="text-emerald-700 mx-1">resources</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#02</span>
          </div>
        </div>
      </div>
    </div>
  );
}
