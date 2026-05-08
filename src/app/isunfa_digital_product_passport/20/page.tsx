'use client';

export default function DPPSlide20() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">
        
        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-amber-400 font-bold tracking-[0.2em] text-sm uppercase">The Ultimate Weapon</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide">iSunFA 核心革命：財務帳與碳帳「一元化」</h2>
          </div>
          
          <div className="flex-1 flex items-center justify-between gap-12">
            <div className="w-1/2 space-y-8">
              <div className="bg-neutral-800/40 p-8 rounded-2xl border border-neutral-700/50 hover:border-amber-500/30 transition-colors">
                <h3 className="text-2xl text-amber-400 font-semibold mb-4">碳盤查不需要另起爐灶</h3>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  當財務部門使用 iSunFA 輸入單據作帳時，AI 已在背景同步完成該筆交易的碳足跡核算。
                </p>
              </div>
              <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-8 rounded-2xl border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <p className="text-3xl text-white font-bold tracking-wider text-center">
                  「記完帳，碳盤查也做完了。」
                </p>
              </div>
            </div>
            
            <div className="w-1/2 h-full flex items-center justify-center relative">
              {/* Funnel Visualization Mock */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50" />
              <div className="flex flex-col items-center w-full max-w-md">
                <div className="flex justify-between w-full mb-4">
                  <div className="bg-blue-900/40 border border-blue-500/50 text-blue-200 px-6 py-3 rounded-lg w-40 text-center font-medium shadow-lg shadow-blue-900/20">財務單據</div>
                  <div className="bg-emerald-900/40 border border-emerald-500/50 text-emerald-200 px-6 py-3 rounded-lg w-40 text-center font-medium shadow-lg shadow-emerald-900/20">營運數據</div>
                </div>
                <div className="w-64 h-32 border-l-4 border-r-4 border-b-4 border-amber-500/50 rounded-b-full flex items-end justify-center pb-4 relative overflow-hidden bg-neutral-800/30 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/20" />
                  <span className="text-amber-400 font-bold z-10 text-xl tracking-widest">iSunFA AI</span>
                </div>
                <div className="w-2 h-16 bg-gradient-to-b from-amber-500/50 to-emerald-500/80 my-2" />
                <div className="bg-gradient-to-br from-emerald-800 to-teal-900 border border-emerald-400 text-white px-8 py-4 rounded-xl w-full text-center font-bold text-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  一元化碳帳 (DPP 基礎)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
