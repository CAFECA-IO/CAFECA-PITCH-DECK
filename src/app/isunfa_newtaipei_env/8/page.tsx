'use client';

// No lucide-react imports needed

export default function iSunFASlide8() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260212 - Luphia) Background: Subtle Tech Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[60%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[20%] w-[50%] h-[50%] bg-amber-900/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-10">

          {/* Info: (20260212 - Luphia) Title Section */}
          <div className="mb-8 text-center space-y-3">
            <h2 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              數據治理大升級：人工 vs AI
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-4" />
          </div>

          {/* Comparison Table */}
          <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col justify-center gap-2 mt-2">
            
            {/* Headers */}
            <div className="grid grid-cols-[1fr_2fr_2fr] gap-4 px-2 mb-1">
              <div className="text-neutral-500 font-bold text-center text-sm tracking-widest">評估維度</div>
              <div className="text-neutral-400 font-bold text-center text-lg">傳統人工盤查</div>
              <div className="text-orange-400 font-bold text-center text-lg flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                AI 智能治理
              </div>
            </div>

            {/* Rows */}
            {[
              { dim: '覆蓋比例', manual: '針對主要排放源進行抽樣調查', ai: '透過財務憑證實現 100% 全面覆蓋' },
              { dim: '查核頻率', manual: '年度定期盤查與事後追溯', ai: '24 小時全天候即時動態更新' },
              { dim: '證據鏈', manual: '依賴實體單據與獨立試算表管理', ai: '財碳雙軌同步記帳，確保數據一致性' },
              { dim: '推動廣度', manual: '需較高預算，多為大型企業採用', ai: '低門檻無痛導入，賦能廣大中小微企業' },
              { dim: '戰略視野', manual: '以滿足法規與供應鏈基本要求為主', ai: '即時產出碳損益表，支援減碳決策與預測' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-[1fr_2fr_2fr] gap-4 items-stretch">
                {/* Dimension */}
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl flex items-center justify-center py-3 px-4 backdrop-blur-sm">
                  <span className="text-white font-bold tracking-wider">{row.dim}</span>
                </div>
                
                {/* Manual */}
                <div className="bg-neutral-900/30 border border-neutral-800/80 rounded-2xl flex items-center justify-center py-3 px-4 text-center backdrop-blur-sm transition-colors hover:bg-neutral-900/50">
                  <span className="text-neutral-400 leading-relaxed text-sm">{row.manual}</span>
                </div>
                
                {/* AI */}
                <div className="bg-orange-950/20 border border-orange-500/30 rounded-2xl flex items-center justify-center py-3 px-4 text-center shadow-[0_0_15px_rgba(249,115,22,0.05)] relative overflow-hidden group hover:border-orange-500/50 hover:bg-orange-950/40 transition-all backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-orange-200 font-medium z-10 leading-relaxed text-sm">{row.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info: (20260212 - Luphia) Footer */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-500 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>領航淨零，智算未來</div>
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
            2026 CAFECA Fintech
          </div>
        </div>

      </div>
    </div>
  );
}
