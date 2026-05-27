'use client';

export default function NetZeroFactorySlide1() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-12 pb-16 z-10 justify-center">

          <div className="mt-8 mb-6 text-center z-10 relative">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm">iSunFA Net-Zero Factory</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-950 leading-[1.2] mt-6">
              AI Tech Brain for<br />Net-Zero Factory
            </h1>
            <p className="text-lg text-slate-600 mt-4 font-medium max-w-4xl mx-auto">The Core Engine Driving the Circular Economy</p>
          </div>


          <div className="flex flex-col relative z-10 justify-center">

            <div className="space-y-3 text-center mt-6">
              <p className="text-lg text-sky-900 font-medium tracking-widest">Presented by: CAFECA</p>
              <p className="text-base text-emerald-700 font-medium tracking-wide">Powered by: Machine Vision & Multi-Modal Engineering Expert Models</p>
            </div>

          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#01</span>
          </div>
        </div>
      </div>
    </div>
  );
}
