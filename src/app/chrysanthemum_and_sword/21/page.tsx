'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { EmptyRoomScene } from '@/components/slide/kiku_scenes';

/* Info: (20260830 - Luphia) 故事三：書裡沒有被日本統治過的人 */
export default function ChrysanthemumSlide21() {
  return (
    <KikuSlideShell
      chapter="第四幕 ・ 故事三"
      chapterNote="TOKYO, NOVEMBER 1946"
      title={<>書裡有七千萬個日本人，<span className="text-orange-600">卻沒有一個被日本統治的人</span></>}
      lead="1946 年 11 月《菊與刀》上市。就在幾條街外，遠東國際軍事法庭從那年五月起，已經開庭半年。"
      pageLabel="21 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[380px_1fr_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)] relative">
            <EmptyRoomScene className="w-full h-full" />
            <div className="absolute left-5 top-4 max-w-[250px]">
              <div className="text-[11px] font-mono font-bold tracking-[0.18em] text-orange-600">THE MISSING SEATS</div>
              <p className="text-[16px] font-black text-stone-900 leading-snug mt-0.5">
                書中的日本，沒有殖民地，也沒有戰場之外的受害者。
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-4">整本書幾乎不出現的字</div>
            <div className="flex flex-wrap gap-2 mb-5">
              {['朝鮮', '台灣', '南京', '滿洲', '慰安婦', '強制勞動', '細菌戰', '佔領區飢荒'].map((w) => (
                <span key={w} className="px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-[14px] font-bold text-stone-400 line-through decoration-orange-400 decoration-2">
                  {w}
                </span>
              ))}
            </div>
            <p className="text-[15px] leading-[1.9] text-stone-600 mt-auto">
              她花了整本書解釋日本人<b className="text-stone-800">為什麼會服從、為什麼會死戰</b>，
              卻幾乎沒有解釋他們<b className="text-orange-600">對別人做了什麼</b>。
            </p>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-400 mb-4">一個具體的例子</div>
            <p className="text-[15px] leading-[1.9] text-stone-300">
              戰爭期間，數以萬計的朝鮮人與台灣人以日本兵、軍屬的身分被徵召。
              戰後，其中三百多人被盟軍以 BC 級戰犯起訴，數十人被處死——
              許多是在南洋看管戰俘營的最基層監視員。
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-stone-300">
              1952 年舊金山和約生效後，日本認定他們已經不具日本國籍，
              於是在撫恤與補償上，他們也不算日本人。
            </p>
            <p className="mt-auto pt-4 text-[16px] leading-relaxed text-orange-300 font-bold border-t border-white/10">
              戰時要他們當日本人，審判時算他們是日本人，賠償時他們不是日本人。
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-4">
          <p className="text-[17.5px] leading-relaxed">
            <span className="font-black">當一切都被解釋成「他們的文化邏輯就是如此」，責任就沒有落點了。</span>
            加害者變成文化的執行者，而文化不會被起訴。
            把暴行解釋成文化，離把暴行原諒成文化，只有一步。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
