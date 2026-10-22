'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Search, FileText, RotateCcw, Flame } from 'lucide-react';

export default function CodeGraphSlide3() {
  const loop = [
    { step: '01', icon: Search, text: 'grep 關鍵字', detail: '回傳 40 個命中，八成是雜訊' },
    { step: '02', icon: FileText, text: '挑幾個檔案讀進來', detail: '每個檔案幾百到幾千 token' },
    { step: '03', icon: RotateCcw, text: '發現不對，換關鍵字再來', detail: '重複 5～20 輪' },
    { step: '04', icon: Flame, text: 'context 塞滿才開始動手', detail: '真正的修改往往只有 20 行' },
  ];

  return (
    <CgSlideShell
      chapter="ACT 1 · THE PROBLEM"
      accent="rose"
      pageLabel="03"
      title={<>問題不在模型不夠聰明，<span className="text-rose-300">在它每次都從零認識你的專案</span></>}
      subtitle={<>編碼代理沒有專案記憶。每開一個 session，它就重跑一次同樣的「探索迴圈」——而這段探索，才是真正燒錢燒時間的地方。</>}
      footer="關鍵觀察：代理花在「找到要改哪裡」的成本，遠高於「把它改好」。"
    >
      <div className="grid grid-cols-4 gap-4 mb-6">
        {loop.map((item) => (
          <div key={item.step} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute right-3 top-2 text-[36px] font-black text-slate-800/80 font-mono leading-none">{item.step}</div>
            <item.icon className="w-6 h-6 text-rose-300 mb-3" />
            <div className="text-[16px] font-bold text-white leading-tight mb-1.5">{item.text}</div>
            <div className="text-[12.5px] text-slate-500 leading-snug">{item.detail}</div>
          </div>
        ))}
      </div>

      <div className="flex-1 grid grid-cols-5 gap-4">
        <div className="col-span-3 bg-rose-500/[0.06] border border-rose-500/25 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-rose-300 mb-3">這個迴圈的四種代價</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] text-slate-300 leading-snug">
            <div><span className="text-white font-bold">錢</span>：探索用掉的 token 常是修改的數倍</div>
            <div><span className="text-white font-bold">時間</span>：十幾次工具往返，人在旁邊乾等</div>
            <div><span className="text-white font-bold">正確性</span>：漏看呼叫端，改了 A 弄壞 B</div>
            <div><span className="text-white font-bold">注意力</span>：context 被雜訊佔滿，指令被稀釋</div>
          </div>
        </div>
        <div className="col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">而且有些問題，翻檔案根本答不出來</div>
          <ul className="text-[14px] text-slate-300 space-y-2 leading-snug list-disc pl-5 marker:text-rose-400">
            <li>「這個函式全專案有誰在呼叫？」</li>
            <li>「我改這個型別，會炸到哪些地方？」</li>
            <li>「這條 API route 最後走到哪個 service？」</li>
          </ul>
        </div>
      </div>
    </CgSlideShell>
  );
}
