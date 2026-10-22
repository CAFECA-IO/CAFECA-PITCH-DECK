'use client';

import { GitBranch, Milk, Grid2x2Check } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide7() {
  const rules = [
    {
      combo: '長米 5kg ＋ 椰奶 ＋ 辣椒醬',
      when: '週日 13:00–18:00',
      support: '1.2%',
      confidence: '35.4%',
      lift: 10.6,
      color: 'bg-amber-400',
      note: '同行 3–5 人、單筆金額低但同時段爆量',
    },
    {
      combo: '金紙 ＋ 麻油 ＋ 米酒',
      when: '農曆初二、十六',
      support: '2.3%',
      confidence: '46.1%',
      lift: 9.8,
      color: 'bg-rose-400',
      note: '南部做牙文化，週期規律到可以提前備貨',
    },
    {
      combo: '運動飲料 ＋ 冰棒 ＋ 棉紗手套',
      when: '平日 06:30–07:30',
      support: '0.6%',
      confidence: '27.8%',
      lift: 8.1,
      color: 'bg-lime-400',
      note: '出工前的工班採購，開店第一個小時就結束',
    },
    {
      combo: '保久乳（箱）＋ 痠痛貼布 ＋ 香蕉',
      when: '平日 09:30–11:30',
      support: '1.1%',
      confidence: '24.6%',
      lift: 7.4,
      color: 'bg-cyan-400',
      note: '本頁最反直覺的一條，下一頁完整拆解',
      star: true,
    },
    {
      combo: '貼標即期鮮食 ＋ 冷凍蔬菜 ＋ 保鮮盒',
      when: '19:30–21:00',
      support: '2.8%',
      confidence: '41.2%',
      lift: 6.3,
      color: 'bg-emerald-400',
      note: '折扣時段的固定班底，會等貼標才進場',
    },
    {
      combo: '微波便當 ＋ 提神飲料 ＋ 隔日御飯糰',
      when: '打烊前 22:00–23:00',
      support: '3.4%',
      confidence: '52.3%',
      lift: 5.6,
      color: 'bg-indigo-400',
      note: '三班制輪班族趕在關門前一次購足',
    },
  ];

  const maxLift = 11.5;

  return (
    <TwinSlideShell
      chapter="LAYER 1 · 關聯推理"
      chapterColor="text-emerald-400"
      chapterDot="bg-emerald-400"
      pageLabel="07 / 22"
      compact
      title={<>「保久乳與痠痛貼布」：<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">門市自己長出來的六條規則</span></>}
      subtitle="僅使用第一層資料（高雄 12 家門市、18 個月 POS 明細、9,170 萬筆品項）跑 FP-Growth 關聯規則探勘。以下六條，全部是演算法找出來、而非人先假設的。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[72] flex flex-col">
          <div className="grid grid-cols-[1fr_92px_50px_54px_128px] gap-x-3 text-[10px] text-slate-500 pb-2 border-b border-white/10 px-1">
            <span>共現組合（Itemset）</span>
            <span>時段／情境</span>
            <span className="text-right">支持度</span>
            <span className="text-right">信賴度</span>
            <span className="pl-2">提升度 Lift</span>
          </div>

          <div className="divide-y divide-white/[0.06] flex-1 flex flex-col justify-center">
            {rules.map((rule) => (
              <div
                key={rule.combo}
                className={`grid grid-cols-[1fr_92px_50px_54px_128px] gap-x-3 items-center py-[15px] px-1 ${rule.star ? 'bg-cyan-400/[0.08] rounded-lg' : ''}`}
              >
                <div>
                  <div className={`text-[13.5px] leading-tight ${rule.star ? 'font-black text-cyan-200' : 'font-bold text-slate-100'}`}>
                    {rule.combo}
                  </div>
                  <div className="text-[10.5px] text-slate-500 mt-[3px]">{rule.note}</div>
                </div>
                <span className="text-[11px] text-slate-400 leading-tight">{rule.when}</span>
                <span className="text-[11.5px] font-mono text-slate-300 text-right">{rule.support}</span>
                <span className="text-[11.5px] font-mono text-slate-300 text-right">{rule.confidence}</span>
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex-1 h-[7px] rounded-full bg-white/[0.08] overflow-hidden">
                    <div className={`h-full rounded-full ${rule.color}`} style={{ width: `${(rule.lift / maxLift) * 100}%` }} />
                  </div>
                  <span className="text-[12px] font-mono font-bold text-white w-[30px] text-right">{rule.lift.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3 flex items-center gap-2 text-[10.5px] text-slate-500">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Lift &gt; 1 表示共現機率高於獨立事件；Lift 10.6 代表這組商品同時出現的機會，是隨機情況下的 10.6 倍。</span>
          </div>
        </div>

        <div className="flex-[28] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/[0.12] to-transparent p-5">
            <div className="flex items-center gap-2 mb-2.5">
              <Milk className="w-4 h-4 text-amber-400" />
              <Grid2x2Check className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-[16px] font-black text-white leading-snug">
              排行榜看得到「保久乳賣得好」，<span className="text-amber-300">看不到誰在買、又順手買了什麼。</span>
            </p>
            <p className="text-[12px] text-slate-400 mt-2 leading-relaxed">
              值錢的洞察不在單一品類的榜單上，而在課與課之間的縫隙裡——那正好是損益表被切開的地方。
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex-1">
            <div className="text-[13px] font-bold text-white mb-3">為什麼報表看不到這些？</div>
            <ul className="space-y-3 text-[12px] text-slate-400 leading-snug">
              <li>· 損益按<span className="text-slate-200">課別</span>切，乳品課與保健課永遠不會被放在同一張表上</li>
              <li>· 兩者各自的銷售排名都不突出，進不了管理報表</li>
              <li>· 集中在兩小時之內，被日結、月結平均掉了</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-3.5">
            <p className="text-[13px] text-emerald-200 leading-relaxed font-bold">
              這六條規則，沒有一條出現在任何一張既有的管理報表上。
            </p>
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
