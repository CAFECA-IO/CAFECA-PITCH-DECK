'use client';

export default function NetZeroFactorySlide8() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 ">

          <div className="mb-4">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">Implementation Strategy: Ecosystem</h2>
          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-4.5 rounded-2xl shadow-sm border border-slate-100 mb-4">
              <h4 className="text-lg font-bold text-sky-950 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-800 rounded-full inline-block"></span>
                The Dual-Engine Advantage:
              </h4>
              <p className="text-slate-700 leading-relaxed text-base">Deploying state-of-the-art AI infrastructure combined with secure data governance to power the Net-Zero ecosystem.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4.5 rounded-2xl shadow-lg border-t-8 border-sky-800 relative">
                <h4 className="text-lg font-bold text-sky-950 mb-2 mt-1">Sovereign AI Cloud</h4>
                <h5 className="text-sm font-bold text-sky-700 mb-2.5 pb-2.5 border-b border-slate-100">Data Security & Sovereignty</h5>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Utilizing national-level computing power to ensure all sensitive factory data remains <strong className="text-sky-900">100% localized</strong> and protected from external breaches.
                </p>
              </div>

              <div className="bg-white p-4.5 rounded-2xl shadow-lg border-t-8 border-emerald-500 relative">
                <h4 className="text-lg font-bold text-sky-950 mb-2 mt-1">Advanced AI Analytics</h4>
                <h5 className="text-sm font-bold text-emerald-700 mb-2.5 pb-2.5 border-b border-slate-100">Zero-Knowledge Validation</h5>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Employing financial-grade <strong className="text-emerald-700">AI and Zero-Knowledge Proof</strong> technologies. This ensures rapid data verification and multi-dimensional analysis without exposing corporate trade secrets.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#08</span>
          </div>
        </div>
      </div>
    </div>
  );
}
