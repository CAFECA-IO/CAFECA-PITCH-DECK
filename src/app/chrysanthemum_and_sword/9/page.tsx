'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { Waves, Wine, Target } from 'lucide-react';

/* Info: (20260830 - Luphia) 第五把鑰匙：修養、無我、與「格」 */
export default function ChrysanthemumSlide9() {
  return (
    <KikuSlideShell
      chapter="維度 五 ・ 修養"
      chapterNote="SELF-DISCIPLINE & MUGA"
      title={<>把痛苦練成技藝，<span className="text-orange-600">直到「我」消失</span></>}
      lead="美國人聽到「自我修煉」，想到的是犧牲、是壓抑、是咬牙忍耐。潘乃德說，日本人的想法完全相反。"
      pageLabel="09 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <Target size={30} className="text-orange-500 mb-4" />
            <h3 className="text-[21px] font-black text-stone-900 mb-3">熟練者不覺得辛苦</h3>
            <p className="text-[15px] leading-[1.9] text-stone-600">
              初學的劍士靠意志力撐住。真正的高手，動作已經不需要經過「我要不要」這一關。
              日本人給這個狀態一個名字：<b className="text-orange-600">無我</b>——觀察的我不見了，只剩下正在發生的動作。
            </p>
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <Waves size={30} className="text-orange-500 mb-4" />
            <h3 className="text-[21px] font-black text-stone-900 mb-3">修養不是犧牲，是投資</h3>
            <p className="text-[15px] leading-[1.9] text-stone-600">
              冷水沖澡、徹夜行軍、禪堂久坐。潘乃德注意到，日本人談這些事時語氣裡沒有悲壯，
              比較像在講<b className="text-orange-600">「把生鏽的地方磨掉」</b>。
              吃苦不是還債，是保養。
            </p>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <Wine size={30} className="text-orange-400 mb-4" />
            <h3 className="text-[21px] font-black mb-3">而且他們不反對享樂</h3>
            <p className="text-[15px] leading-[1.9] text-stone-300">
              這是最讓美國人意外的一點。泡澡、飲酒、睡覺、性——在日本的道德體系裡，
              這些都是<b className="text-orange-300">好東西，不是罪</b>。
              沒有原罪，沒有肉體與靈魂的戰爭。
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-5">
          <div className="text-[13px] font-bold tracking-[0.25em] mb-2 opacity-90">那麼，錯在哪裡？</div>
          <p className="text-[19px] leading-relaxed font-medium">
            錯不在慾望，錯在<span className="font-black">錯位</span>。享樂有它自己的抽屜，人生大事有另一個抽屜。
            一個男人可以放心去喝酒，只要他沒有讓喝酒這件事，跑進「義理」那個抽屜裡。
            <span className="block mt-2 text-[16px] opacity-95">日本人不是禁慾——他們是把每件事都分好格子的收納狂。</span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
