'use client';

export default function NetZeroFactorySlide7() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260527 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-4 pb-16 z-10 ">

          <div className="mb-2">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-2 tracking-wide leading-tight">Big Data Integration: Localized Solutions</h2>
          </div>


          <div className="flex-1 flex flex-col relative z-10 justify-center">

            <div className="bg-slate-50 p-3 rounded-2xl shadow-sm border border-slate-100 mb-2">
              <h4 className="text-base font-bold text-sky-950 mb-1 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-sky-800 rounded-full inline-block"></span>
                Actionable Eco-Database:
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm">Aggregating local big data to establish a rigorous, objective evaluation system for sustainable practices, effectively eliminating &quot;greenwashing&quot;.</p>
            </div>

            <h4 className="text-base font-bold text-emerald-700 mb-2 flex items-center gap-2">
              <span className="p-1 bg-emerald-100 text-emerald-600 rounded-lg text-sm">📋</span>
              Data-Driven Scoring (100-Point Scale):
            </h4>

            <div className="space-y-1.5 mb-2">
              <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-600"></div>
                <div className="w-16 text-center shrink-0">
                  <div className="text-2xl font-black text-amber-600">60</div>
                  <div className="text-[10px] font-bold text-slate-500">pts</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-sky-950 mb-0.5 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-[10px]">Bronze</span>
                    Compliance Base
                  </h5>
                  <p className="text-slate-600 text-xs">Digital BOM & ISO 14067 verification. Ensuring basic compliance for global market entry.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-400"></div>
                <div className="w-16 text-center shrink-0">
                  <div className="text-2xl font-black text-slate-500">20</div>
                  <div className="text-[10px] font-bold text-slate-500">pts</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-sky-950 mb-0.5 flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-[10px]">Silver/Gold</span>
                    Real Carbon Reduction
                  </h5>
                  <p className="text-slate-600 text-xs">Verified usage of recycled raw materials and renewable energy certificates.</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-4 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-sky-300"></div>
                <div className="w-16 text-center shrink-0">
                  <div className="text-2xl font-black text-sky-500">20</div>
                  <div className="text-[10px] font-bold text-slate-500">pts</div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-sky-950 mb-0.5 flex items-center gap-2">
                    <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full text-[10px]">Platinum</span>
                    Strategic Circularity
                  </h5>
                  <p className="text-slate-600 text-xs">Closed-loop product design and extraction of strategic materials tracked via AI.</p>
                </div>
              </div>
            </div>

            <div className="bg-rose-50 text-rose-900 p-2.5 rounded-xl border border-rose-200 flex items-center gap-3">
              <span className="text-lg text-rose-600 shrink-0">🚨</span>
              <div>
                <h4 className="text-xs font-bold mb-0.5">Anti-Fraud Mechanism</h4>
                <p className="text-xs">AI automatically validates data. Without concrete third-party documents, the system <strong className="text-rose-700">rejects</strong> the score.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#07</span>
          </div>
        </div>
      </div>
    </div>
  );
}
