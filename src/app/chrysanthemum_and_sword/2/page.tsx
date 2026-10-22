'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { ChrysanthemumMark } from '@/components/slide/kiku_katana_art';

/* Info: (20260830 - Luphia) 破題：一份七千萬人的性格報告 */
export default function ChrysanthemumSlide2() {
  const dimensions = [
    { n: '一', k: '你要的是自由，還是位置？' },
    { n: '二', k: '別人幫你，是溫暖還是負擔？' },
    { n: '三', k: '欠人的，要還多少、還多久？' },
    { n: '四', k: '做錯事，你怕天知道還是怕人知道？' },
    { n: '五', k: '吃苦是犧牲，還是保養？' },
    { n: '六', k: '人一生的自由，是越來越多嗎？' },
  ];

  const meta = [
    ['受測對象', '日本人'],
    ['樣本數', '約 7,000 萬'],
    ['施測地點', '未曾前往'],
    ['報告長度', '十三章，一本書'],
  ];

  return (
    <KikuSlideShell
      chapter="第一幕 ・ 破題"
      chapterNote="A PERSONALITY REPORT FOR 70 MILLION PEOPLE"
      title={<>MBTI 用四個字母說完一個人。<span className="text-orange-600">這本書用六個維度，說完了一個民族。</span></>}
      lead="《菊與刀》做的事，本質上就是一份性格測驗報告——只是受測者不是你，是七千萬個日本人。它交出的答案乾淨、完整、好記，好記到今天還在賣。"
      pageLabel="02 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-[400px_1fr] gap-6 flex-1 min-h-0">

          <div className="rounded-2xl bg-white border-2 border-orange-200 p-6 flex flex-col shadow-[0_20px_50px_-28px_rgba(234,88,12,0.7)]">
            <div className="text-[11px] font-mono font-bold tracking-[0.24em] text-orange-500">PERSONALITY REPORT</div>
            <div className="text-[30px] font-black text-stone-900 leading-tight mt-1">國民性格分析</div>
            <div className="h-[2px] bg-orange-200 my-4" />
            <div className="space-y-3 text-[15px]">
              {meta.map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline">
                  <span className="text-stone-400 font-bold">{k}</span>
                  <span className="text-stone-800 font-black text-[17px]">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 flex items-end justify-between">
              <div>
                <div className="text-[11px] tracking-[0.2em] text-stone-400 font-bold">ISSUED</div>
                <div className="text-[22px] font-black text-orange-600">1946</div>
              </div>
              <div className="w-[86px] h-[86px] rounded-full border-[3px] border-orange-400 flex items-center justify-center rotate-[-12deg]">
                <ChrysanthemumMark size={54} className="text-orange-500/80" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-7 flex flex-col shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)]">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-5">報告上的六個維度</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
              {dimensions.map((d) => (
                <div key={d.n} className="flex items-center gap-4 border-b border-orange-100 pb-3">
                  <span className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-black text-[16px] flex items-center justify-center flex-shrink-0">
                    {d.n}
                  </span>
                  <span className="text-[16px] font-bold text-stone-700 leading-snug">{d.k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </KikuSlideShell>
  );
}
