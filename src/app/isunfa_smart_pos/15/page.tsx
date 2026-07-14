'use client';

import { Music, Radio, Waves, Sparkles } from 'lucide-react';

export default function Slide12() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-[#0a0510] relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] -translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4"></div>
        </div>

        {/* Info: (20260527 - Luphia) Left Side: Visual Elements (AI DJ) */}
        <div className="w-[45%] h-full relative z-10 flex flex-col justify-center items-center border-r border-purple-500/10 bg-black/40">
          
          <div className="relative w-72 h-72">
            {/* Info: (20260527 - Luphia) Spinning Record / Abstract Music Core */}
            <div className="absolute inset-0 border-2 border-dashed border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-pink-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 bg-gradient-to-tr from-purple-900/50 to-pink-900/30 rounded-full backdrop-blur-sm border border-purple-500/40 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <Music size={64} className="text-purple-300 animate-pulse" />
            </div>

            {/* Info: (20260527 - Luphia) Floating Audio Waves */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-1 bg-purple-500/50 rounded-full w-${i*4} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 items-end">
              {[5, 4, 3, 2, 1].map((i) => (
                <div key={i} className={`h-1 bg-pink-500/50 rounded-full w-${i*4} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-neutral-900/80 px-6 py-3 rounded-full border border-purple-500/30 flex items-center gap-3 backdrop-blur-md">
            <Radio size={20} className="text-purple-400" />
            <span className="text-purple-200 font-mono tracking-widest text-sm">LIVE GENERATION</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Right Side: Text Content */}
        <div className="w-[55%] p-16 flex flex-col justify-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 text-purple-300 text-sm tracking-widest mb-8 w-max bg-purple-900/20 backdrop-blur-sm">
            04-1 | 專屬音樂生成
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            讓 AI 成為您的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">24 小時駐點音樂師</span>
          </h2>
          
          <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12">
            不再煩惱版權問題，也無須費時編排歌單。只要指定您想要的氛圍與風格，AI 就能為您的品牌無限生成即時專屬音樂。
          </p>

          <div className="space-y-6">
            <div className="bg-neutral-900/50 border border-purple-900/50 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-lg font-bold text-purple-300 mb-2 flex items-center gap-2">
                <Sparkles size={18} /> 風格指令範例
              </h4>
              <p className="text-neutral-400 font-mono text-sm leading-relaxed mb-4 italic">
                &quot;為午後的日系服飾店生成節奏輕快、帶有木吉他元素的 Lo-Fi 輕音樂，讓顧客感到放鬆且願意駐足停留...&quot;
              </p>
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <Waves size={16} className="text-pink-400/70" />
                  即時演算生成中
                </div>
                <div className="text-purple-400/70 font-mono text-sm">∞ 播放時長</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Footer Info */}
        <div className="absolute bottom-6 right-16 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
