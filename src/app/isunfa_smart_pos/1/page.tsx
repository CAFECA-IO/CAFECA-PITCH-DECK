'use client';

export default function Slide1() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800">

        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/40 via-neutral-900 to-neutral-950"></div>
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-[spin_60s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#d9770611_100%)]"></div>
        </div>

        {/* Info: (20260527 - Luphia) Content */}
        <div className="z-10 text-center space-y-12 animate-fade-in-up flex flex-col items-center">
          
          <div className="mb-4">
            <span className="text-amber-500 font-bold tracking-[0.3em] text-lg border border-amber-500/30 px-8 py-3 rounded-full uppercase bg-amber-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              iSunFA.com 陽光智能會計
            </span>
          </div>

          <h1 className="text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 drop-shadow-2xl py-4">
            重新定義
          </h1>
          
          <h2 className="text-4xl font-light text-amber-100 tracking-[0.2em]">
            智慧零售與風格選物體驗
          </h2>

        </div>

        {/* Info: (20260527 - Luphia) Footer Subtitle */}
        <div className="absolute bottom-16 w-full text-center">
          <div className="inline-block px-12 py-4 bg-gradient-to-r from-transparent via-neutral-800/80 to-transparent border-t border-b border-amber-900/30">
            <p className="text-2xl font-light text-neutral-300 tracking-[0.15em]">
              從進銷存到無人結帳，打造未來風格選物店
            </p>
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-xs tracking-[0.2em] uppercase">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
