'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { WatchingEyesScene } from '@/components/slide/kiku_scenes';
import { Eye, Church, Quote } from 'lucide-react';

/* Info: (20260830 - Luphia) 第四把鑰匙：恥感文化與罪感文化 */
export default function ChrysanthemumSlide8() {
  return (
    <KikuSlideShell
      chapter="維度 四 ・ 內建的裁判"
      chapterNote="GUILT CULTURE vs SHAME CULTURE"
      title={<>你心裡的那個裁判，<span className="text-orange-600">住在裡面還是外面？</span></>}
      lead="這是《菊與刀》流傳最廣的一組概念，也是後來被引用最多的一頁。"
      pageLabel="08 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[1fr_248px_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-stone-200 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-stone-200 flex items-center justify-center text-stone-600">
                <Church size={22} />
              </div>
              <div>
                <div className="text-[24px] font-black text-stone-800 leading-none">罪感文化</div>
                <div className="text-[11px] tracking-[0.2em] text-stone-400 mt-1">GUILT ・ 西方</div>
              </div>
            </div>
            <p className="text-[16px] leading-[1.9] text-stone-600">
              裁判住在你心裡。做錯了事，就算全世界都不知道，你半夜也會醒過來。
            </p>
            <div className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-stone-700">
              <div>・ 標準是<b>絕對的</b>：對就是對，錯就是錯</div>
              <div>・ 有<b>出口</b>：告解、認罪、道歉、贖罪</div>
              <div>・ 卸下之後，你可以重新做人</div>
            </div>
            <p className="mt-auto pt-4 text-[14px] text-stone-500 border-t border-stone-200">
              代價：你隨身帶著一個永遠在看的上帝。
            </p>
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-3 flex items-center justify-center shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <WatchingEyesScene className="w-full h-full" />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-orange-600 to-amber-500 text-white p-6 flex flex-col shadow-[0_20px_50px_-25px_rgba(234,88,12,0.9)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <Eye size={22} />
              </div>
              <div>
                <div className="text-[24px] font-black leading-none">恥感文化</div>
                <div className="text-[11px] tracking-[0.2em] text-white/80 mt-1">SHAME ・ 日本</div>
              </div>
            </div>
            <p className="text-[16px] leading-[1.9] text-white/95">
              裁判是一群觀眾。做錯了事，只要沒有人看見，它就還沒有真正發生。
            </p>
            <div className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-white/95">
              <div>・ 標準是<b>相對的</b>：取決於誰在場、在哪個場合</div>
              <div>・ 沒有出口：<b>沒有告解，沒有赦免</b></div>
              <div>・ 一旦被看見，唯一的清理方式是行動</div>
            </div>
            <p className="mt-auto pt-4 text-[14px] text-white/85 border-t border-white/25">
              代價：你隨身帶著一整個社會的眼睛。
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-4 flex items-start gap-5">
          <Quote size={22} className="text-orange-400 mt-1 flex-shrink-0" />
          <div>
            <div className="text-[12px] font-bold tracking-[0.25em] text-orange-400 mb-1.5">戰俘營裡最常出現的一句話</div>
            <p className="text-[19px] leading-snug font-medium">
              「我已經死了。請不要通知我的家人。」
              <span className="block mt-1.5 text-[15px] text-stone-400 font-normal">
                在恥感的算法裡，被俘不是不幸，是把名字弄髒了。而弄髒的名字，會寄回故鄉，掛在還活著的家人身上。
              </span>
            </p>
          </div>
        </div>
      </div>
    </KikuSlideShell>
  );
}
