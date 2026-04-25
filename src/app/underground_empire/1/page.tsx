'use client';

export default function Slide1() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-800">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-900 to-slate-800 opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"></div>

        <div className="z-10 text-center space-y-8 animate-fade-in-up">
          <div className="mb-12">
            <span className="text-red-500 font-bold tracking-[0.25em] text-sm md:text-base border border-red-900/50 px-6 py-2 rounded-full uppercase bg-slate-950/50 backdrop-blur-sm shadow-sm">
              Underground Empire
            </span>
          </div>

          <h1 className="text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500 leading-[1.1] drop-shadow-sm pb-4 mx-auto max-w-7xl">
            地下帝國
            <br />
            <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800 mt-6 block">
              2026年 全球經濟武器化與地緣政治
            </span>
          </h1>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mt-8 font-light tracking-wide leading-relaxed">
            探討「地下帝國」理論如何應驗於 2026 年的 AI 晶片戰、央行數位貨幣 (CBDC) 佈局，以及海底電纜的資訊咽喉控制。
          </p>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>GEOPOLITICS 2026</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
            Book Review & Current Events
          </div>
        </div>
      </div>
    </div>
  );
}
