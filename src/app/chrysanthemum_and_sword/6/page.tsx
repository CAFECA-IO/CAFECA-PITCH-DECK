'use client';

import KikuSlideShell from '@/components/slide/kiku_slide_shell';
import { Infinity as InfinityIcon, Scale } from 'lucide-react';

/* Info: (20260830 - Luphia) 第三把鑰匙：義務與義理 */
export default function ChrysanthemumSlide6() {
  return (
    <KikuSlideShell
      chapter="維度 三 ・ 償還"
      chapterNote="GIMU vs GIRI"
      title={<>債要還，但還法<span className="text-orange-600">分成兩種</span></>}
      lead="潘乃德把日本人的償還義務拆成兩類。這一頁是全書的樞紐——後面所有看似瘋狂的行為，都從這張表推導出來。"
      pageLabel="06 / 23"
      compact
    >
      <div className="h-full flex flex-col">
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">

          <div className="rounded-2xl bg-white/85 border-2 border-orange-200 p-7 flex flex-col shadow-[0_18px_40px_-28px_rgba(234,88,12,0.6)]">
            <div className="flex items-center gap-3 mb-4">
              <InfinityIcon size={26} className="text-orange-500" />
              <div>
                <div className="text-[28px] font-black text-stone-900 leading-none">義務</div>
                <div className="text-[12px] tracking-[0.2em] text-stone-400 mt-1">GIMU</div>
              </div>
            </div>
            <p className="text-[16px] leading-relaxed text-stone-600 mb-5">
              對天皇的忠、對父母的孝、對工作的任。
            </p>
            <div className="space-y-3 text-[15px] leading-relaxed">
              <div className="flex gap-3"><span className="text-orange-500 font-black">・</span><span className="text-stone-700"><b>金額無限</b>：你收到的比你能還的多太多</span></div>
              <div className="flex gap-3"><span className="text-orange-500 font-black">・</span><span className="text-stone-700"><b>期限無限</b>：一輩子還，還不完是正常的</span></div>
              <div className="flex gap-3"><span className="text-orange-500 font-black">・</span><span className="text-stone-700"><b>不能拒絕</b>：你沒有簽過這份合約</span></div>
            </div>
            <p className="mt-auto pt-5 text-[15px] text-stone-500 border-t border-orange-100">
              因為還不完，所以不會有「還完了、我自由了」的一天。
            </p>
          </div>

          <div className="rounded-2xl bg-stone-900 text-white p-7 flex flex-col shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 mb-4">
              <Scale size={26} className="text-orange-400" />
              <div>
                <div className="text-[28px] font-black leading-none">義理</div>
                <div className="text-[12px] tracking-[0.2em] text-stone-500 mt-1">GIRI</div>
              </div>
            </div>
            <p className="text-[16px] leading-relaxed text-stone-400 mb-5">
              對世人、對同儕、對自己名譽的責任。
            </p>
            <div className="space-y-3 text-[15px] leading-relaxed">
              <div className="flex gap-3"><span className="text-orange-400 font-black">・</span><span className="text-stone-300"><b className="text-white">金額對等</b>：收到多少，就得還多少</span></div>
              <div className="flex gap-3"><span className="text-orange-400 font-black">・</span><span className="text-stone-300"><b className="text-white">期限緊迫</b>：拖越久，利息越重</span></div>
              <div className="flex gap-3"><span className="text-orange-400 font-black">・</span><span className="text-stone-300"><b className="text-white">包含洗刷污名</b>：被侮辱而不回應，等於欠著</span></div>
            </div>
            <p className="mt-auto pt-5 text-[15px] text-orange-300 border-t border-white/10">
              報復，在這套算法裡不是失控，是結帳。
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 text-white px-8 py-5 flex items-center gap-6">
          <span className="text-[13px] font-bold tracking-[0.25em] whitespace-nowrap opacity-90">日本諺語</span>
          <p className="text-[26px] font-black">「義理最難承受。」</p>
          <p className="text-[16px] leading-snug opacity-95">
            還不出義理的人，最後通常只剩兩條路：把場面掙回來，或者退場。
          </p>
        </div>
      </div>
    </KikuSlideShell>
  );
}
