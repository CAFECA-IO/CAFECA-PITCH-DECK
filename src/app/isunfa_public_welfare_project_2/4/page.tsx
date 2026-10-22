'use client';

import { AlertTriangle, Users, FileStack, Coins, TrendingDown } from 'lucide-react';

export default function IsunfaPwp2Slide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260904 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] bg-orange-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest">Problem Definition</span>
      </div>

      {/* Info: (20260904 - Luphia) Header */}
      <div className="z-10 px-16 pt-20 pb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-4">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span className="text-sm font-semibold text-red-600">公益服務痛點與問題定義</span>
        </div>
        <h2 className="text-[42px] font-black leading-tight text-slate-800">
          第一線社工，正同時被 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">三道牆</span> 夾擊
        </h2>
      </div>

      {/* Info: (20260904 - Luphia) 3 Pain Points */}
      <div className="z-10 px-16 grid grid-cols-3 gap-6 flex-1">

        {/* Info: (20260904 - Luphia) Pain 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-red-400"></div>
          <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-red-500" />
          </div>
          <span className="text-[10px] font-black text-red-500 tracking-widest uppercase mb-2">Pain 01 · 人力之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">案量遠超負荷，<br />留不住人的惡性循環</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            社福需求逐年攀升，社工人力補充卻長期趕不上。第一線社工同時肩負
            <span className="font-bold text-slate-700">數十個以上的個案</span>，
            超載導致倦怠與高流動率，交接斷層又讓服務品質進一步惡化。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-red-50 rounded-xl px-4 py-3 border border-red-100">
              <div className="text-[11px] text-red-600 font-bold">現況：人力荒 → 超載 → 流失 的惡性循環難以打破</div>
            </div>
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Pain 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-orange-400"></div>
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
            <FileStack className="w-6 h-6 text-orange-500" />
          </div>
          <span className="text-[10px] font-black text-orange-500 tracking-widest uppercase mb-2">Pain 02 · 文書之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">行政文書排擠<br />直接服務時間</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            訪視紀錄、個案報告、方案成果、補助核銷⋯⋯第一線普遍反映
            <span className="font-bold text-slate-700">近半數工時耗在文書作業</span>。
            每一小時的表單，都是從服務對象身上挪走的一小時陪伴。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-orange-50 rounded-xl px-4 py-3 border border-orange-100">
              <div className="text-[11px] text-orange-600 font-bold">現況：專業社工淪為「報表產生器」，成就感持續流失</div>
            </div>
          </div>
        </div>

        {/* Info: (20260904 - Luphia) Pain 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-7 flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow">
          <div className="absolute left-0 top-0 h-full w-1.5 bg-slate-400"></div>
          <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
            <Coins className="w-6 h-6 text-slate-500" />
          </div>
          <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-2">Pain 03 · 資源之牆</span>
          <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">小型社福組織<br />扛不起法遵與數位化</h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            公益勸募條例、專款專用、徵信公告——法遵要求比照企業，多數機構卻
            <span className="font-bold text-slate-700">連一位專職會計都聘不起</span>；
            志工排班調度更停留在紙本與群組訊息，數位轉型遙不可及。
          </p>
          <div className="mt-auto pt-5">
            <div className="bg-slate-100 rounded-xl px-4 py-3 border border-slate-200">
              <div className="text-[11px] text-slate-600 font-bold">現況：善款帳務與志工管理高度仰賴人工，透明化成本高</div>
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260904 - Luphia) Bottom Insight */}
      <div className="z-10 px-16 py-6">
        <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl px-8 py-4 shadow-lg">
          <TrendingDown className="w-5 h-5 text-orange-400 flex-shrink-0" />
          <p className="text-sm text-white font-medium">
            三道牆的共同解方，不是要求社工「再多學一套系統」，而是一個 <span className="font-black text-orange-400">聽得懂社工語言、也看得懂會計憑證的 AI 輔助系統</span>
            —— 讓文書自動生成、讓帳務自動核對、讓志工自動排上最需要的位置。
          </p>
        </div>
      </div>

    </div>
  );
}
