'use client';

export default function Slide12() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800">
        
        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-neutral-950 to-neutral-950"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-neutral-950 to-neutral-950"></div>
        </div>

        <div className="z-10 text-center space-y-16 animate-fade-in-up w-full max-w-5xl">
          
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-widest text-white leading-relaxed">
              與 iSunFA 一起
              <br />
              <span className="text-amber-500 font-black text-6xl md:text-7xl mt-4 block drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                準時下班，重塑版圖
              </span>
            </h2>
          </div>
          
          <div className="w-24 h-1 bg-amber-500/50 mx-auto rounded-full"></div>

          <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 p-12 rounded-3xl shadow-2xl inline-block transform hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-light text-neutral-300 mb-8 tracking-wider">
              聯繫我們面試您的 AI 新員工
            </h3>
            <a 
              href="mailto:contact@isunfa.com" 
              className="text-4xl font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors border-b-2 border-amber-500/30 pb-2"
            >
              contact@isunfa.com
            </a>
          </div>

        </div>

        {/* Info: (20260527 - Luphia) Full Company Info Footer */}
        <div className="absolute bottom-12 w-full text-center text-neutral-500 text-sm tracking-[0.3em]">
          <p className="font-bold text-neutral-400 mb-2">卡菲卡金融科技股份有限公司</p>
          <p>統一編號: 52650861</p>
        </div>

      </div>
    </div>
  );
}
