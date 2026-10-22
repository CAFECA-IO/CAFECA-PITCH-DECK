'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Target, FileSearch, Users, Lock, GitPullRequest, Gauge } from 'lucide-react';

export default function CodeGraphSlide10() {
  const effects = [
    { icon: Target, title: '改對地方的機率提高', desc: '有 impact 與 callers 資料，代理比較不會漏掉呼叫端，減少「改好 A、弄壞 B」的回頭工。' },
    { icon: FileSearch, title: '關係型問題變成可回答', desc: '「誰呼叫它」「這條 route 通到哪」「刪掉會怎樣」——這類問題以前只能靠人腦與經驗。' },
    { icon: GitPullRequest, title: '審查與稽核有跡可循', desc: '代理的定位依據是圖譜查詢結果，不是模糊的直覺；review 時能追溯它「為什麼認為要改這裡」。' },
    { icon: Users, title: '新人與交接的加速器', desc: 'codegraph ui 能把陌生 repo 的呼叫關係直接畫出來，人也用得上，不只餵給 AI。' },
    { icon: Lock, title: '可進入不能上雲的專案', desc: '零外部 API、零程式碼上傳，讓受法規限制的金融、醫療、政府專案也能用上代理式開發。' },
    { icon: Gauge, title: '成本從不可預測變可預測', desc: '探索成本被壓到接近固定值，導入代理的預算比較估得出來，也比較好向上說明。' },
  ];

  return (
    <CgSlideShell
      chapter="ACT 3 · BEYOND THE NUMBERS"
      accent="violet"
      pageLabel="10"
      title={<>省下的 token 只是最容易量化的那一項</>}
      subtitle={<>真正改變工作方式的，是代理從「盲目摸索」變成「先看地圖再動手」之後，連帶產生的六個效果。</>}
      footer="一句話總結：CodeGraph 買到的不是折扣，是可預測性——時間、成本、與改動範圍都變得可以估。"
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
        {effects.map((e) => (
          <div key={e.title} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col hover:border-violet-500/30">
            <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center mb-3">
              <e.icon className="w-5 h-5 text-violet-300" />
            </div>
            <div className="text-[16px] font-bold text-white leading-tight mb-2">{e.title}</div>
            <div className="text-[13px] text-slate-400 leading-relaxed">{e.desc}</div>
          </div>
        ))}
      </div>
    </CgSlideShell>
  );
}
