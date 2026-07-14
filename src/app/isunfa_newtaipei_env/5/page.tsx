'use client';

import { Clock, Zap, FileText, CheckCircle2 } from 'lucide-react';

export default function iSunFASlide5() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800 text-white">

        {/* Info: (20260505 - Luphia) Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>

        <div className="z-10 w-full max-w-6xl px-12 flex flex-col h-full py-16">

          {/* Info: (20260505 - Luphia) Title Section */}
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
              極速合規：20 分鐘產出報告
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mt-6" />
          </div>

          <div className="flex-1 w-full max-w-5xl mx-auto flex gap-12 items-center justify-center mt-4">

            {/* Info: (20260505 - Luphia) Speed Comparison Block */}
            <div className="flex-1 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col items-center justify-center relative overflow-hidden group hover:border-orange-500/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />

              <div className="relative mb-6">
                <div className="w-32 h-32 bg-orange-950/50 rounded-full flex items-center justify-center border-4 border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)] group-hover:border-orange-500/80 transition-colors">
                  <Clock className="w-16 h-16 text-orange-400" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500/50">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-amber-200 tracking-tighter mb-2 drop-shadow-lg">
                  20<span className="text-4xl text-orange-300 ml-2 font-bold tracking-widest">MINS</span>
                </div>
                <p className="text-neutral-400 text-lg tracking-widest">從報告生成到驗證產出</p>
              </div>

              {/* Info: (20260505 - Luphia) Comparison Line */}
              <div className="w-full bg-neutral-950/50 rounded-2xl p-4 flex justify-between items-center border border-neutral-800/50">
                <div className="text-center flex-1 border-r border-neutral-800/50">
                  <p className="text-neutral-500 text-xs mb-1">傳統人工盤查</p>
                  <p className="text-white font-bold text-lg">3-6 個月</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-orange-500/80 text-xs mb-1">AI 智能盤查</p>
                  <p className="text-orange-400 font-bold text-lg text-shadow-glow">極速 20 分鐘</p>
                </div>
              </div>
            </div>

            {/* Info: (20260505 - Luphia) Key Outcomes */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {[
                {
                  icon: <FileText className="w-6 h-6 text-orange-400" />,
                  title: '一鍵生成標準報告',
                  desc: '系統自動編製符合 ISO 14064-1 規範之溫室氣體盤查報告與清冊。'
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-orange-400" />,
                  title: '數位軌跡完整留存',
                  desc: '自動建立從原始憑證到排放數據的數位雙向證據鏈，稽核無死角。'
                },
                {
                  icon: <Zap className="w-6 h-6 text-orange-400" />,
                  title: '省下 95% 溝通成本',
                  desc: '告別曠日廢時的跨部門資料收集與確認，大幅降低隱形成本。'
                }
              ].map((item, i) => (
                <div key={i} className="bg-neutral-900/30 border border-neutral-800/80 rounded-2xl p-5 hover:bg-neutral-900/60 hover:border-orange-500/30 transition-all group backdrop-blur-sm flex items-start gap-4">
                  <div className="p-3 bg-neutral-950 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.1)] shrink-0">
                    {item.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors mb-2">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Info: (20260505 - Luphia) Footer */}
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
