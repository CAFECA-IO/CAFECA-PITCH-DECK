'use client';

import { ShieldCheck, Sparkles, LineChart, Calculator } from 'lucide-react';

export default function Slide8() {
  const brains = [
    { 
      title: '秒速對帳腦', 
      desc: '自動核對多元支付與現金', 
      icon: Calculator, 
      color: 'from-blue-500 to-cyan-400', 
      textColor: 'text-cyan-400', 
      glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]' 
    },
    { 
      title: '即時損益腦', 
      desc: '打烊瞬間產出今日財報', 
      icon: LineChart, 
      color: 'from-purple-500 to-pink-400', 
      textColor: 'text-pink-400', 
      glow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.15)]' 
    },
    { 
      title: '資金預測腦', 
      desc: 'AI 智慧推算下期備料資金', 
      icon: Sparkles, 
      color: 'from-amber-500 to-orange-400', 
      textColor: 'text-amber-400', 
      glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]' 
    },
    { 
      title: '合規歸檔腦', 
      desc: '進銷存發票區塊鏈防竄改', 
      icon: ShieldCheck, 
      color: 'from-emerald-500 to-teal-400', 
      textColor: 'text-emerald-400', 
      glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]' 
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-neutral-800">
        
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>

        {/* Info: (20260527 - Luphia) Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Info: (20260527 - Luphia) Header */}
        <div className="z-10 text-center mb-16 px-12 mt-4">
          <div className="inline-block px-6 py-2 rounded-full border border-blue-500/30 text-blue-300 text-sm tracking-widest mb-6 bg-blue-900/20 backdrop-blur-md">
            05 | 專屬智能會計師
          </div>
          <h2 className="text-6xl md:text-7xl font-bold tracking-[0.05em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            終結深夜算帳的惡夢
          </h2>
          <h3 className="text-2xl font-light text-blue-200/90 tracking-[0.2em] leading-relaxed">
            客人走了，你也該下班了
            <span className="block mt-4 text-lg text-blue-300/60 tracking-[0.3em] uppercase">
              打烊即自動結算 • 把時間還給生活
            </span>
          </h3>
        </div>

        {/* Info: (20260527 - Luphia) Four Brains Grid */}
        <div className="z-10 grid grid-cols-4 gap-6 px-16 w-full max-w-[1200px]">
          {brains.map((brain, idx) => {
            const Icon = brain.icon;
            return (
              <div 
                key={idx} 
                className={`group relative bg-neutral-900/80 backdrop-blur-sm border border-neutral-800/80 rounded-3xl p-8 flex flex-col items-center hover:border-neutral-700 transition-all duration-500 overflow-hidden ${brain.glow} hover:-translate-y-2 cursor-default`}
              >
                {/* Info: (20260527 - Luphia) Background Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${brain.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}></div>
                
                {/* Info: (20260527 - Luphia) Icon Circle */}
                <div className="w-20 h-20 mb-8 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-700 shadow-inner">
                  <div className={`absolute inset-0 bg-gradient-to-br ${brain.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <Icon size={36} className={`${brain.textColor} relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-md`} strokeWidth={1.5} />
                </div>
                
                <h4 className="text-2xl font-bold text-neutral-100 mb-4 tracking-wider group-hover:text-white transition-colors">{brain.title}</h4>
                
                {/* Info: (20260527 - Luphia) Animated Divider */}
                <div className="w-8 h-[2px] rounded-full bg-neutral-800 mb-5 group-hover:w-16 transition-all duration-500 relative overflow-hidden">
                   <div className={`absolute inset-0 bg-gradient-to-r ${brain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                <p className="text-neutral-400 font-light text-center tracking-widest leading-relaxed text-[15px] group-hover:text-neutral-300 transition-colors whitespace-nowrap">{brain.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Info: (20260503 - Luphia) Footer Info */}
        <div className="absolute bottom-6 w-full px-16 flex justify-between text-neutral-600 text-xs tracking-[0.2em] uppercase z-10 pointer-events-none">
          <div>卡菲卡金融科技股份有限公司 (52650861)</div>
          <div>contact@isunfa.com</div>
        </div>

      </div>
    </div>
  );
}
