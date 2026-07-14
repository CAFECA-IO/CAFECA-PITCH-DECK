'use client';

import { Award, Handshake, Users, BadgePercent } from 'lucide-react';

export default function TaitraSlide6() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Supply Chain Passport
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            碳足跡意義 (2/3)：供應鏈綠色通行證與訂單優勢
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            碳足跡已不僅是環保倡議，更是全球供應鏈體系中決定勝負的新型「商業准入證」。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Left Column: Supply Chain Passport */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Handshake className="text-sky-500" /> 國際大廠的剛性綠色招標
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              從半導體代工廠到全球消費性電子品牌，領頭羊大廠均承諾了 **RE100 (100% 綠電)** 及 **Net-Zero (淨零碳排)** 目標。為了降低自身「範疇三」間接排放，他們將綠色採購列為核心指標。
            </p>
            <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-sky-800 flex items-center gap-2 mb-1.5">
                <Users size={20} /> 比拼的起跑線
              </h4>
              <p className="text-sm text-sky-700">當產品質量、價格與交期相當時，擁有 ISO 14067 合規碳足跡證明書的供應商將獲得優先採購權；無碳足跡證明的企業將失去參標資格。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Right Column: Commercial Advantages */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">獲取優質訂單與溢價能力</h4>
                <p className="text-sm text-slate-600 leading-relaxed">碳盤查數據是與跨國大廠簽署長期戰略合約的基石，甚至能因產品碳係數低於同業，獲取「綠色溢價」，擺脫傳統價格惡性競爭。</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                <BadgePercent size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">搶佔綠色商譽與新市場</h4>
                <p className="text-sm text-slate-600 leading-relaxed">率先宣告低碳產品碳足跡，能快速在歐美市場建立「低碳先驅」的卓越商譽，進軍對 ESG 要求極高的政府公共採購市場。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#06</div>
        </div>
      </div>
    </div>
  );
}
