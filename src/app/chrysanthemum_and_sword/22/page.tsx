'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';

/* Info: (20260830 - Luphia) 故事四：1949 年的專號，與變成鏡子的那本書 */
export default function ChrysanthemumSlide22() {
  const critics = [
    { name: '和辻哲郎 ・ 柳田國男', say: '她讀的是武士階層的道德教本，不是庶民的日子。用倫理手冊推論一個民族，方向就錯了。' },
    { name: '川島武宜', say: '樣本從哪裡來？戰俘、二世、被審查過的電影。從這裡歸納出來的，是特例，不是通則。' },
    { name: '南博', say: '恥與罪在任何社會裡都同時存在，差別只在配方比例。把它切成兩種文化，是把程度差異寫成了本質差異。' },
  ];

  return (
    <KikuSlideShell
      chapter="第四幕 ・ 故事四"
      chapterNote="TOKYO, SPRING 1949"
      title={<>日本學者為它開了一整期雜誌，<span className="text-orange-600">結論是：取樣錯了</span></>}
      lead="1949 年，日本的《民族學研究》做了一期專號，把當時最重要的幾位學者集合起來討論這本書。他們的意見出奇一致：這份報告，取樣有問題。"
      pageLabel="22 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="grid grid-cols-[1fr_320px] gap-6 flex-1 min-h-0">

          <div className="flex flex-col gap-3.5">
            {critics.map((c) => (
              <div key={c.name} className="flex-1 rounded-2xl bg-white/85 border border-orange-100 px-6 py-4 flex flex-col justify-center shadow-[0_16px_36px_-30px_rgba(234,88,12,0.6)]">
                <div className="text-[15px] font-black text-orange-600 mb-1.5">{c.name}</div>
                <p className="text-[15px] leading-[1.8] text-stone-700">{c.say}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-6 flex flex-col">
            <div className="text-[12px] font-bold tracking-[0.22em] text-orange-400 mb-3">被告席上沒有人</div>
            <div className="text-[46px] font-black leading-none">1948</div>
            <p className="text-[14.5px] leading-[1.85] text-stone-300 mt-3">
              專號出刊的前一年，潘乃德因心臟病去世，六十一歲。
              她一生沒有踏上過日本，也沒有機會回應上面任何一條批評。
            </p>
            <p className="mt-auto pt-4 text-[15px] leading-relaxed text-orange-300 font-bold border-t border-white/10">
              於是這場辯論從一開始就只有一邊在說話——而另一邊，已經印了幾十刷。
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-5">
          <p className="text-[18px] leading-relaxed">
            <span className="text-orange-400 font-black">而這四頁的批評，一條也沒有阻止第 18 頁那件事發生。</span>
            劇本照演，詞照用，鏡子照照。三十年後薩伊德談「東方主義」時說的正是這個迴圈：
            <span className="font-bold">西方定義東方，然後東方照著那個定義認識自己。</span>
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
