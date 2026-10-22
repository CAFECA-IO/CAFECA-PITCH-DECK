'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { DistantFieldScene } from '@/components/slide/kiku_scenes';
import { Ban, Users, Film, FileText, Mic, BookMarked } from 'lucide-react';

/* Info: (20260830 - Luphia) 研究困境：遙距文化研究 */
export default function ChrysanthemumSlide13() {
  const forbidden = [
    '住進當地，至少兩年',
    '學會當地語言，直接對話',
    '參加婚喪嫁娶，親身觀察',
  ];

  const materials = [
    { icon: Users, label: '拘留營裡的日裔美國人', note: '珍珠港後被關進美國西部集中營的移民與二代' },
    { icon: FileText, label: '戰俘審訊紀錄', note: '少數願意開口、且活著被俘的士兵' },
    { icon: BookMarked, label: '小說與士兵日記', note: '繳獲自戰場的私人書寫' },
    { icon: Film, label: '日本電影', note: '戰前輸出到美國的劇情片' },
    { icon: Mic, label: '宣傳廣播文字稿', note: '短波監聽的官方口徑' },
  ];

  return (
    <KikuSlideShell
      chapter="第二幕 ・ 方法"
      chapterNote="STUDY OF CULTURE AT A DISTANCE"
      title={<>一個<span className="text-orange-600">不能去現場</span>的田野工作者</>}
      lead="人類學這門學問的全部信用，來自「我在那裡待過」。而潘乃德的研究對象，正在對她的國家開火。她不會日語、從未踏上日本。"
      pageLabel="13 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[330px_1fr] gap-5 flex-1 min-h-0">

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Ban size={18} className="text-orange-400" />
              <span className="text-[13px] font-bold tracking-[0.25em] text-orange-400">她做不到的事</span>
            </div>
            <div className="space-y-3.5">
              {forbidden.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-2 w-5 h-[2px] bg-orange-500 flex-shrink-0" />
                  <span className="text-[15px] leading-relaxed text-stone-300 line-through decoration-orange-500/70 decoration-2">
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-auto pt-5 text-[14.5px] leading-relaxed text-stone-400 border-t border-white/10">
              於是她發明了一套做法，並且大方地給它取了名字：
              <span className="block mt-2 text-orange-300 font-bold text-[17px]">遙距文化研究</span>
            </p>
          </div>

          <div className="grid grid-rows-[168px_1fr] gap-5 min-h-0">
            <div className="rounded-2xl overflow-hidden border border-orange-100 bg-white shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)] relative">
              <DistantFieldScene className="w-full h-full" />
              <div className="absolute left-5 top-4 max-w-[300px]">
                <div className="text-[11px] font-mono font-bold tracking-[0.18em] text-orange-600">RELOCATION CAMP</div>
                <div className="text-[17px] font-black text-stone-900 leading-snug mt-0.5">她的田野，是幾疊紙<br />和一群被關起來的人</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/85 border border-orange-100 shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)] p-6 flex flex-col min-h-0">
              <div className="text-[13px] font-bold tracking-[0.25em] text-orange-600 mb-4">她真正握有的材料</div>
              <div className="grid grid-cols-3 gap-x-5 gap-y-3.5 flex-1">
                {materials.map((m) => (
                  <div key={m.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <m.icon size={17} />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-stone-800 leading-snug">{m.label}</div>
                      <div className="text-[12.5px] text-stone-500 leading-snug mt-0.5">{m.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-4">
          <p className="text-[17px] leading-relaxed">
            <span className="font-black">你剛剛看到的那份報告，就是從這堆東西裡拼出來的。</span>
            六個維度、一張結果卡、一個乾淨俐落的「菊刀型」——全部來自戰俘、二世、審查過的電影，和一疊翻譯稿。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
