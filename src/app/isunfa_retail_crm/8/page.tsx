'use client';

import { GitBranch, Milk, Grid2x2Check } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide8() {
  const rules = [
    { combo: '長米 5kg ＋ 椰奶 ＋ 辣椒醬', when: '週日 13:00–18:00', support: '1.2%', confidence: '35.4%', lift: 10.6, color: 'bg-orange-300', who: '週日移工採購團' },
    { combo: '金紙 ＋ 麻油 ＋ 米酒', when: '農曆初二、十六', support: '2.3%', confidence: '46.1%', lift: 9.8, color: 'bg-orange-300', who: '在地做牙家庭' },
    { combo: '運動飲料 ＋ 冰棒 ＋ 棉紗手套', when: '平日 06:30–07:30', support: '0.6%', confidence: '27.8%', lift: 8.1, color: 'bg-orange-300', who: '出工前的工班' },
    { combo: '保久乳（箱）＋ 痠痛貼布 ＋ 香蕉', when: '平日 09:30–11:30', support: '1.1%', confidence: '24.6%', lift: 7.4, color: 'bg-orange-600', who: '隔代教養長輩', star: true },
    { combo: '貼標即期鮮食 ＋ 冷凍蔬菜 ＋ 保鮮盒', when: '19:30–21:00', support: '2.8%', confidence: '41.2%', lift: 6.3, color: 'bg-orange-300', who: '即期折扣獵人' },
    { combo: '微波便當 ＋ 提神飲料 ＋ 隔日御飯糰', when: '打烊前 22:00–23:00', support: '3.4%', confidence: '52.3%', lift: 5.6, color: 'bg-orange-300', who: '三班制輪班族' },
  ];

  const maxLift = 11.5;

  return (
    <CrmSlideShell
      chapter="LAYER 1 · 商品關聯"
      pageLabel="08 / 20"
      compact
      title={<>每一個客群，<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">都有自己的購物組合</span></>}
      subtitle="高雄 12 家門市、18 個月、9,170 萬筆品項跑 FP-Growth 關聯規則探勘。六條全部由演算法找出，並自動對回上一頁的客群。"
    >
      <div className="flex gap-6 h-full">

        <div className="flex-[72] flex flex-col">
          <div className="grid grid-cols-[1fr_92px_108px_50px_54px_118px] gap-x-3 text-[10px] text-slate-400 pb-2 border-b border-slate-200 px-1">
            <span>共現組合（Itemset）</span>
            <span>時段／情境</span>
            <span>對應客群</span>
            <span className="text-right">支持度</span>
            <span className="text-right">信賴度</span>
            <span className="pl-2">提升度 Lift</span>
          </div>

          <div className="divide-y divide-slate-100 flex-1 flex flex-col justify-center">
            {rules.map((rule) => (
              <div
                key={rule.combo}
                className={`grid grid-cols-[1fr_92px_108px_50px_54px_118px] gap-x-3 items-center py-[15px] px-1 ${rule.star ? 'bg-orange-50 rounded-lg' : ''}`}
              >
                <div className={`text-[13.5px] leading-tight ${rule.star ? 'font-black text-orange-700' : 'font-bold text-slate-800'}`}>
                  {rule.combo}
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">{rule.when}</span>
                <span className={`text-[11.5px] font-bold leading-tight ${rule.star ? 'text-orange-600' : 'text-slate-600'}`}>{rule.who}</span>
                <span className="text-[11.5px] font-mono text-slate-500 text-right">{rule.support}</span>
                <span className="text-[11.5px] font-mono text-slate-500 text-right">{rule.confidence}</span>
                <div className="flex items-center gap-2 pl-2">
                  <div className="flex-1 h-[7px] rounded-full bg-slate-100 overflow-hidden">
                    <div className={`h-full rounded-full ${rule.color}`} style={{ width: `${(rule.lift / maxLift) * 100}%` }} />
                  </div>
                  <span className="text-[12px] font-mono font-bold text-slate-900 w-[30px] text-right">{rule.lift.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3 flex items-center gap-2 text-[10.5px] text-slate-400">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Lift &gt; 1 表示共現機率高於獨立事件；Lift 10.6 代表這組商品同時出現的機會，是隨機情況下的 10.6 倍。</span>
          </div>
        </div>

        <div className="flex-[28] flex flex-col gap-3.5 h-full">
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-transparent p-5">
            <div className="flex items-center gap-2 mb-2.5">
              <Milk className="w-4 h-4 text-orange-600" />
              <Grid2x2Check className="w-4 h-4 text-orange-600" />
            </div>
            <p className="text-[16px] font-black text-slate-900 leading-snug">
              銷售排行榜看得到「保久乳賣得好」，<span className="text-orange-600">看不到誰在買、又順手買了什麼。</span>
            </p>
            <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">
              值錢的洞察不在單一品類的榜單上，而在課與課之間的縫隙裡。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 flex-1 shadow-sm">
            <div className="text-[13px] font-bold text-slate-900 mb-3">為什麼既有報表看不到？</div>
            <ul className="space-y-3 text-[12px] text-slate-500 leading-snug">
              <li>· 損益按<span className="text-slate-800">課別</span>切，乳品課與保健課永遠不在同一張表上</li>
              <li>· 兩者各自的銷售排名都不突出，進不了管理報表</li>
              <li>· 集中在兩小時之內，被日結、月結平均掉了</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
            <p className="text-[13px] text-slate-800 leading-relaxed font-bold">
              這六條規則，就是六份現成的行銷提案。
            </p>
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
