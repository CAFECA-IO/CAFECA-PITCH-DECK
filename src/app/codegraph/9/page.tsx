'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Wrench, Timer, Coins, Boxes } from 'lucide-react';

export default function CodeGraphSlide9() {
  const metrics = [
    { icon: Wrench, label: '工具呼叫次數', before: '17.7 次', after: '2.25 次', delta: '−88%', tint: 'text-cyan-300', bar: 87 },
    { icon: Timer, label: '完成時間', before: '1 分 47 秒', after: '49 秒', delta: '−53%', tint: 'text-violet-300', bar: 53 },
    { icon: Boxes, label: 'Token 用量', before: '427k', after: '161k', delta: '−62%', tint: 'text-amber-300', bar: 62 },
    { icon: Coins, label: '單次任務成本', before: '$0.87', after: '$0.48', delta: '−44%', tint: 'text-emerald-300', bar: 44 },
  ];

  return (
    <CgSlideShell
      chapter="ACT 3 · THE RESULT"
      accent="emerald"
      pageLabel="09"
      title={<>官方 benchmark：<span className="text-emerald-300">同一題，代理少繞了八成的路</span></>}
      subtitle={<>七個開源專案、七種語言，每題執行四次取中位數，比較同一個代理在「有／沒有 CodeGraph」下完成相同任務的表現。</>}
      footer="數據來源：CodeGraph 官方 repo 揭露之 2026 年 8 月 benchmark。實際幅度依 repo 大小、語言與題型而異，導入前建議自行以真實任務複測。"
    >
      <div className="grid grid-cols-4 gap-4 mb-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <m.icon className={`w-4 h-4 ${m.tint}`} />
              <span className="text-[13px] font-bold text-slate-300">{m.label}</span>
            </div>

            <div className={`text-[42px] font-black leading-none mb-3 ${m.tint}`}>{m.delta}</div>

            <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
              <div className={`h-full rounded-full bg-current ${m.tint}`} style={{ width: `${m.bar}%` }} />
            </div>

            <div className="flex items-center justify-between text-[12px]">
              <span className="text-slate-500">無：<span className="line-through">{m.before}</span></span>
              <span className="text-white font-bold">有：{m.after}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 flex-1">
        <div className="col-span-2 bg-emerald-400/[0.06] border border-emerald-400/25 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-emerald-300 mb-2">最值得注意的一個數字</div>
          <p className="text-[17px] text-slate-200 leading-relaxed">
            七個 repo 的檔案讀取次數都是 <span className="text-[26px] font-black text-white align-middle mx-1">0</span>。
            代理不是「讀少一點」，而是<span className="font-bold text-white">完全不需要靠翻檔案來定位</span>——
            它先問圖譜要座標，再直接下手。
          </p>
        </div>
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">換算成團隊尺度</div>
          <p className="text-[13.5px] text-slate-400 leading-relaxed">
            十人團隊、每人每天 20 次代理任務：時間省下的不只是 API 帳單，
            更是<span className="text-slate-200 font-bold">每次等待從近兩分鐘縮到不到一分鐘</span>——
            那是心流會不會斷掉的差別。
          </p>
        </div>
      </div>
    </CgSlideShell>
  );
}
