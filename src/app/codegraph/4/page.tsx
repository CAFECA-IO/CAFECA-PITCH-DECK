'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Maximize, Sparkles, ScrollText, XCircle } from 'lucide-react';

export default function CodeGraphSlide4() {
  const attempts = [
    {
      icon: Maximize,
      name: '把 context window 開大',
      claim: '「一百萬 token，整包丟進去就好」',
      why: '塞得進去 ≠ 找得到。訊號被雜訊稀釋，注意力下降、成本線性上升，而且大型 repo 本來就塞不完。',
    },
    {
      icon: Sparkles,
      name: '換更強的模型',
      claim: '「新一代模型自己會找」',
      why: '模型變強的是推理，不是「知道你 repo 長怎樣」。它仍然只能靠工具一次次去問檔案系統。',
    },
    {
      icon: ScrollText,
      name: '寫更好的說明文件',
      claim: '「AGENTS.md 把架構寫清楚」',
      why: '人寫的說明會過期，而且只到得了架構層級；細到「誰呼叫誰」的關係，沒有人有耐心手動維護。',
    },
  ];

  return (
    <CgSlideShell
      chapter="ACT 1 · WHY NOT JUST…"
      accent="rose"
      pageLabel="04"
      title={<>三種直覺解法，為什麼都繞不過去</>}
      subtitle={<>這三招都有用，但都沒有處理根因：<span className="text-slate-100 font-bold">代理缺的是一份隨時新鮮、機器可查詢的專案結構事實</span>。</>}
      footer="CodeGraph 補的正是這一層——不是更大的腦袋，是一張更好的地圖。"
    >
      <div className="grid grid-cols-3 gap-5 flex-1">
        {attempts.map((a) => (
          <div key={a.name} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                <a.icon className="w-5 h-5 text-slate-300" />
              </div>
              <div className="text-[17px] font-bold text-white leading-tight">{a.name}</div>
            </div>

            <div className="text-[13px] text-slate-400 italic border-l-2 border-slate-700 pl-3 mb-4 leading-snug">
              {a.claim}
            </div>

            <div className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-1" />
              <p className="text-[14.5px] text-slate-300 leading-relaxed">{a.why}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 bg-gradient-to-r from-cyan-400/[0.08] to-violet-400/[0.06] border border-cyan-400/25 rounded-2xl px-6 py-4">
        <p className="text-[16px] text-slate-200 leading-relaxed">
          <span className="font-bold text-cyan-300">重新定義問題：</span>
          代理需要的不是「更多程式碼」，而是
          <span className="font-bold text-white">「在讀任何檔案之前，就知道該讀哪幾個檔案的哪幾行」</span>。
          這是一個<span className="font-bold text-white">索引問題</span>，不是模型問題。
        </p>
      </div>
    </CgSlideShell>
  );
}
