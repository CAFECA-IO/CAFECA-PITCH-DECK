'use client';

export default function NetZeroFactorySlide3() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-6 pb-16 z-10 ">

          <div className="mb-3">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">Core Engine: Multi-Modal AI</h2>
          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-3.5 rounded-2xl shadow-sm border border-slate-100 mb-2">
              <h4 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                The Intelligence Behind the Factory:
              </h4>
              <p className="text-slate-700 leading-relaxed text-base">By combining Machine Vision and Multi-Modal Engineering Expert Models, the system seamlessly translates raw visual and sensor data into actionable engineering parameters.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2">
              <div className="bg-white p-3.5 rounded-xl border-t-4 border-slate-300 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-3xl font-black">01</div>
                <h5 className="text-sm font-bold text-slate-500 mb-1">Step 1 (Vision)</h5>
                <p className="text-xl font-black text-sky-950 mb-1">Capture</p>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">Deep learning models identify materials, defects, and structural layouts on the production line in real-time.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border-t-4 border-emerald-300 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-3xl font-black">02</div>
                <h5 className="text-sm font-bold text-emerald-600 mb-1">Step 2 (Analysis)</h5>
                <p className="text-xl font-black text-sky-950 mb-1">Process</p>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">Multi-modal engineering models extract material compositions, processing workflows, and waste categorization.</p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border-t-4 border-emerald-500 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10 text-3xl font-black">03</div>
                <h5 className="text-sm font-bold text-emerald-700 mb-1">Step 3 (Action)</h5>
                <p className="text-xl font-black text-sky-950 mb-1">Optimize</p>
                <p className="text-slate-600 text-xs font-medium leading-relaxed">Predictive insights formulate precise recycling and material recovery routes seamlessly.</p>
              </div>
            </div>
            <div className="bg-sky-950 text-white p-3.5 rounded-xl shadow-lg border-l-8 border-emerald-500 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-emerald-400 mb-0.5">Strategic Value</h4>
                <p className="text-sky-100 text-sm">This intelligent integration transforms raw manufacturing data into a highly efficient:</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-white">Net-Zero</p>
                <p className="text-emerald-200 text-[10px] tracking-widest mt-0.5">Operational Blueprint</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#03</span>
          </div>
        </div>
      </div>
    </div>
  );
}
