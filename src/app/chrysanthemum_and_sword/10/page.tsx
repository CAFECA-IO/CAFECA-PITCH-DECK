'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';

/* Info: (20260830 - Luphia) 第六把鑰匙：U 型人生曲線 */
export default function ChrysanthemumSlide10() {
  const stages = [
    {
      age: '0—6 歲',
      title: '幾乎沒有規矩',
      body: '被抱著、被背著、想吃就吃。潘乃德注意到，日本嬰兒受到的縱容程度，遠超過當時的美國家庭。',
    },
    {
      age: '7—60 歲',
      title: '世界突然收緊',
      body: '入學之後，管束一年比一年重。而使用的工具不是體罰，是一句話：「大家會笑你。」恥感就是在這裡被裝進去的。',
    },
    {
      age: '60 歲之後',
      title: '再一次被允許任性',
      body: '老人像幼兒一樣，重新獲得說真話、不守規矩、被包容的權利。曲線又升回來了。',
    },
  ];

  return (
    <KikuSlideShell
      chapter="維度 六 ・ 養成"
      chapterNote="THE U-SHAPED CURVE OF LIFE"
      title={<>日本人的一生，是一條 <span className="text-orange-600">U 型曲線</span></>}
      lead="潘乃德畫了一條圖：如果把「被允許任性的程度」當成縱軸，美國人的曲線是一路往上，而日本人的是先掉下去，再爬回來。"
      pageLabel="10 / 23"
      compact
    >
      <div className="h-full flex flex-col gap-5">
        <div className="rounded-2xl bg-white/85 border border-orange-100 px-8 py-5 shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
          <svg viewBox="0 0 1120 190" className="w-full h-[186px]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Info: (20260830 - Luphia) 座標軸 */}
            <line x1="60" y1="168" x2="1090" y2="168" stroke="#e7e5e4" strokeWidth="2" />
            <line x1="60" y1="14" x2="60" y2="168" stroke="#e7e5e4" strokeWidth="2" />
            <text x="14" y="26" fontSize="13" fill="#a8a29e" fontWeight="700">自由</text>
            <text x="14" y="166" fontSize="13" fill="#a8a29e" fontWeight="700">約束</text>

            {/* Info: (20260830 - Luphia) 美國：一路向上 */}
            <path d="M70 150 C 340 138, 700 70, 1080 30" stroke="#a8a29e" strokeWidth="3" fill="none" strokeDasharray="8 7" />
            <text x="880" y="20" fontSize="14" fill="#a8a29e" fontWeight="700">美國</text>

            {/* Info: (20260830 - Luphia) 日本：U 型 */}
            <path d="M70 34 C 250 32, 300 152, 560 152 C 820 152, 900 60, 1080 40" stroke="#ea580c" strokeWidth="5" fill="none" strokeLinecap="round" />
            <circle cx="80" cy="34" r="8" fill="#ea580c" />
            <circle cx="560" cy="152" r="8" fill="#ea580c" />
            <circle cx="1072" cy="41" r="8" fill="#ea580c" />
            <text x="76" y="20" fontSize="15" fill="#ea580c" fontWeight="800">嬰幼兒</text>
            <text x="500" y="180" fontSize="15" fill="#ea580c" fontWeight="800">學齡 → 壯年</text>
            <text x="1000" y="24" fontSize="15" fill="#ea580c" fontWeight="800">老年</text>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-5 flex-1 min-h-0">
          {stages.map((s) => (
            <div key={s.age} className="rounded-2xl bg-white/85 border border-orange-100 p-6 flex flex-col shadow-[0_18px_40px_-30px_rgba(234,88,12,0.6)]">
              <div className="text-[12px] font-mono font-bold tracking-[0.16em] text-orange-500 mb-1">{s.age}</div>
              <h3 className="text-[20px] font-black text-stone-900 mb-2.5">{s.title}</h3>
              <p className="text-[14px] leading-[1.85] text-stone-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-stone-900 text-white px-8 py-4">
          <p className="text-[17px] leading-relaxed">
            <span className="text-orange-400 font-black">潘乃德的推論：</span>
            每個日本成年人心裡，都同時住著一個曾經被無限寵愛的小孩，和一個怕被嘲笑的大人。
            這條曲線，同時解釋了他們的溫柔，和他們的殘忍。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
