'use client';

import { Network, Terminal, ArrowRight } from 'lucide-react';

export default function CodeGraphSlide16() {
  const takeaways = [
    { no: '01', text: '代理最貴的成本不是生成，是「找到要改哪裡」。' },
    { no: '02', text: 'CodeGraph 把 repo 預先變成本地圖譜，用一次查詢取代十幾次翻找。' },
    { no: '03', text: '官方 benchmark：工具呼叫 −88%、時間 −53%、token −62%、成本 −44%。' },
    { no: '04', text: '過去沒有，是因為 tree-sitter、MCP 與代理式編碼的普及缺一不可。' },
    { no: '05', text: '它補的是「關係」這一格，不取代 grep、長 context 或你自己讀程式碼。' },
    { no: '06', text: '大型、多語言、重度用代理的團隊裝；小專案與輕度使用者先別。' },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-[#080b12] relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-100">

      <div
        className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.14) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 top-[-200px] w-[720px] h-[720px] rounded-full bg-cyan-500/12 blur-[170px]" />
        <div className="absolute -right-44 bottom-[-240px] w-[720px] h-[720px] rounded-full bg-violet-600/12 blur-[180px]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[3px] z-20 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />

      <div className="z-10 px-16 pt-11 pb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-[13px] font-bold tracking-[0.28em] text-cyan-300">SUMMARY</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight tracking-tight text-white">
          六句話帶走這場簡報
        </h2>
      </div>

      <div className="z-10 flex-1 px-16 grid grid-cols-2 gap-x-8 gap-y-4 content-evenly">
        {takeaways.map((t) => (
          <div key={t.no} className="flex items-start gap-4 bg-slate-900/50 border border-slate-800 rounded-xl px-5 py-4">
            <span className="text-[15px] font-mono font-black text-cyan-400/70 flex-shrink-0 pt-0.5">{t.no}</span>
            <span className="text-[14.5px] text-slate-300 leading-snug">{t.text}</span>
          </div>
        ))}
      </div>

      <div className="z-10 px-16 pb-10 pt-5 grid grid-cols-5 gap-5 items-stretch">
        <div className="col-span-3 bg-gradient-to-r from-cyan-400/10 to-violet-400/[0.07] border border-cyan-400/30 rounded-2xl px-6 py-5 flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center flex-shrink-0">
            <Network className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-widest text-cyan-300 mb-1">最後一句</div>
            <p className="text-[16px] text-slate-100 leading-snug font-bold">
              給 AI 一張地圖，比給它一雙更快的腿有用。
            </p>
            <p className="text-[13px] text-slate-400 leading-snug mt-1">
              但地圖不會替你走路——動手前，還是要打開那個檔案。
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-slate-950/70 border border-slate-800 rounded-2xl px-5 py-4 font-mono">
          <div className="flex items-center gap-2 mb-2.5 font-sans">
            <Terminal className="w-4 h-4 text-slate-500" />
            <span className="text-[11px] font-bold tracking-widest text-slate-500">試一週的成本</span>
          </div>
          <div className="text-[13px] text-slate-400 leading-relaxed">
            <div>$ <span className="text-emerald-300">codegraph install</span></div>
            <div>$ <span className="text-emerald-300">codegraph init</span></div>
          </div>
          <div className="flex items-center gap-1.5 mt-2.5 text-[12px] text-slate-500 font-sans">
            <ArrowRight className="w-3.5 h-3.5" />
            <span>MIT 授權 · 100% 本地 · 隨時移除</span>
          </div>
        </div>
      </div>
    </div>
  );
}
