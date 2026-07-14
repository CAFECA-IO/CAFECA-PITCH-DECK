'use client';

export default function NetZeroFactorySlide9() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Info: (20260527 - Luphia) Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 justify-center">

          <div className="mt-6 text-center z-10 relative">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">iSunFA Net-Zero Factory</span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-sky-950 leading-[1.2] mt-4">
              Vision & Commitment: Driving Sustainable Manufacturing
            </h1>

          </div>


          <div className="flex flex-col relative z-10 justify-center">

            <div className="bg-sky-950 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden mt-4 max-w-5xl mx-auto">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <p className="text-sky-100 leading-relaxed text-base font-light mb-4 pb-4 border-b border-sky-800/50">
                  We are equipped with the most advanced AI technology, ready to be the strongest backbone for driving green transformation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-sky-800/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 font-bold text-sm">1</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      By combining manufacturing data, financial-grade AI technology, and a sovereign cloud platform, we will empower the industry to transition from a &quot;passive waste producer&quot; to an <strong className="text-emerald-400 mx-1.5 text-base">&quot;active leader in circular resources&quot;</strong>.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-emerald-900/50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-400 font-bold text-sm">2</span>
                    </div>
                    <p className="text-white text-base leading-relaxed font-medium">
                      Establishing a <strong className="text-emerald-400">Net-Zero Standard</strong> that guides the local supply chain across global green trade barriers, capturing the most valuable sustainable orders worldwide!
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#09</span>
          </div>
        </div>
      </div>
    </div>
  );
}
