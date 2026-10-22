'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { BookOpen, Globe, GraduationCap } from 'lucide-react';

/* Info: (20260830 - Luphia) 戰後迴響：它贏得徹底 */
export default function ChrysanthemumSlide17() {
  const stats = [
    { n: '1948', l: '日譯本上市', d: '《菊と刀》在戰敗國成為現象級暢銷書' },
    { n: '30+', l: '語言版本', d: '從冷戰一路賣到今天，從未絕版' },
    { n: '2.3M+', l: '日文版累計銷量', d: '長銷七十餘年的社會科學經典' },
  ];

  return (
    <KikuSlideShell
      chapter="第三幕 ・ 迴響"
      chapterNote="THE STRANGEST AFTERLIFE"
      title={<>最弔詭的事：這本書在日本，<span className="text-orange-600">賣得比在美國好</span></>}
      lead="一份為了打敗日本而寫的情報分析，在戰敗兩年後被日本人自己翻譯、自己閱讀、自己引用，成為戰後日本認識自己的第一本書。"
      pageLabel="17 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <BookOpen size={28} className="text-orange-500 mb-4" />
            <h3 className="text-[20px] font-black text-stone-900 mb-3">在日本：戰敗者的自我說明書</h3>
            <p className="text-[14.5px] leading-[1.9] text-stone-600">
              戰敗讓日本人也在問同一個問題——我們到底是什麼樣的人、為什麼會走到這裡？
              而市面上唯一一本把這個問題從頭整理過的書，是敵國寫的。
              <span className="block mt-2 font-bold text-stone-800">他們一邊覺得刺耳，一邊一版再版。</span>
            </p>
          </div>

          <div className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
            <Globe size={28} className="text-orange-500 mb-4" />
            <h3 className="text-[20px] font-black text-stone-900 mb-3">在美國：變成一整套方法</h3>
            <p className="text-[14.5px] leading-[1.9] text-stone-600">
              冷戰開始後，「用文化性格解釋一個國家會怎麼行動」成為區域研究的主流。
              從蘇聯到中東，一個又一個「國民性」被生產出來。
              <span className="block mt-2 font-bold text-stone-800">這本書提供的不只是結論，是一個可以複製的模板。</span>
            </p>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <GraduationCap size={28} className="text-orange-400 mb-4" />
            <h3 className="text-[20px] font-black mb-3">連罵它的人，也得先讀它</h3>
            <p className="text-[14.5px] leading-[1.9] text-stone-300">
              日本學界從 1949 年起就沒停過反駁，但每一次反駁，都得先把它的框架複述一遍才能開始拆。
              結果是：批評不但沒有削弱它，反而替它做了七十年的宣傳。
              <span className="block mt-2 text-orange-300 font-bold">它成了那種「你可以不同意，但不能不提」的書。</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-4 items-stretch">
          {stats.map((s) => (
            <div key={s.n} className="rounded-xl bg-orange-50 border border-orange-200 px-5 py-3">
              <div className="text-[26px] font-black text-orange-600 leading-none">{s.n}</div>
              <div className="text-[14px] font-bold text-stone-800 mt-1">{s.l}</div>
              <div className="text-[12px] text-stone-500 leading-snug">{s.d}</div>
            </div>
          ))}
          <div className="rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 flex items-center max-w-[420px]">
            <p className="text-[16px] leading-snug font-bold">
              但它不只是被讀完而已。
              <span className="block font-medium text-[14.5px] opacity-95 mt-1">
                很快地，日本人開始拿它來說明自己——然後，開始照著它活。
              </span>
            </p>
          </div>
        </div>
      </div>
    </KikuSlideShell>
  );
}
