'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { Crown, Landmark, Store, Sprout } from 'lucide-react';

/* Info: (20260830 - Luphia) 第一把鑰匙：各得其所 */
export default function ChrysanthemumSlide4() {
  const layers = [
    { icon: Crown, label: '天皇', note: '不是統治者，是全體日本人「恩」的源頭', tone: 'from-orange-600 to-orange-500', w: 'w-[40%]' },
    { icon: Landmark, label: '政府 ・ 軍部', note: '代天皇執行，錯了是「臣下辦事不力」', tone: 'from-orange-500 to-amber-500', w: 'w-[58%]' },
    { icon: Store, label: '家族 ・ 職場 ・ 同儕', note: '長幼、師徒、先輩後輩，每一組關係都有明確位階', tone: 'from-amber-500 to-amber-400', w: 'w-[76%]' },
    { icon: Sprout, label: '個人', note: '自由不是「想做什麼」，而是「知道自己該做什麼」', tone: 'from-amber-400 to-orange-200', w: 'w-[94%]' },
  ];

  return (
    <KikuSlideShell
      chapter="維度 一 ・ 秩序"
      chapterNote="TAKING ONE'S PROPER STATION"
      title={<>「各得其所，各安其分」——<span className="text-orange-600">一句被說了幾百次的話</span></>}
      lead="潘乃德在日本的外交文件、開戰詔書、廣播稿裡，反覆看到同一組字。她意識到：這不是修辭，這是世界觀。"
      pageLabel="04 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-[1fr_380px] gap-7 flex-1 min-h-0">

          <div className="flex flex-col justify-center gap-3">
            {layers.map((l) => (
              <div key={l.label} className={`${l.w} rounded-xl bg-gradient-to-r ${l.tone} text-white px-6 py-3.5 flex items-center gap-4 shadow-[0_14px_30px_-20px_rgba(234,88,12,0.9)]`}>
                <l.icon size={22} strokeWidth={2} className="flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-[19px] font-black leading-tight">{l.label}</div>
                  <div className="text-[13px] leading-snug text-white/90">{l.note}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-7 flex flex-col justify-center shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)]">
            <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-4">兩種世界觀對照</div>
            <div className="space-y-5">
              <div>
                <div className="text-[15px] font-bold text-stone-400 mb-1">美國</div>
                <p className="text-[16px] leading-relaxed text-stone-700">人生而平等。階級是需要被打破的東西，往上爬是美德。</p>
              </div>
              <div className="h-[1px] bg-orange-200" />
              <div>
                <div className="text-[15px] font-bold text-orange-600 mb-1">日本</div>
                <p className="text-[16px] leading-relaxed text-stone-700">位置讓人安全。只要每個人待在對的地方，世界就不會塌。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">所以他們對美國的指控是什麼？</span>
            不是「你們太強」，而是——
            <span className="font-bold">「你們把國際的秩序弄亂了。」</span>
            在這套邏輯裡，發動戰爭是為了把世界放回它該有的樣子。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
