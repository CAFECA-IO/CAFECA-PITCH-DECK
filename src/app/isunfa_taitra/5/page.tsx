'use client';

import { Coins, UserCheck, ShieldAlert, Award } from 'lucide-react';

export default function TaitraSlide4() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-amber-600 font-bold tracking-[0.2em] text-sm uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
            Domestic Policy & Bidding
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            背景痛點 (2/2)：國內碳費徵收與供應鏈淨零壓力
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            台灣氣候變遷因應法正式推動碳費徵收，從鋼鐵、石化到電子大廠，企業在內外夾擊下面臨無痛減碳與稅收的雙重考驗。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Left Column: Context */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Coins className="text-amber-500" /> 國內碳費正式開徵
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              環境部公告碳費徵收標準，納管排放大戶並逐步向下推行。這項法規意味著「碳排即成本」，企業生產的每一噸二氧化碳，都將在資產負債表上產生實質的財務支出。
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-1.5">
                <ShieldAlert size={20} /> 中小企業被動受波及
              </h4>
              <p className="text-sm text-amber-700">即使不是首波課徵大戶，但大廠為了自身減碳要求，會將碳排配額指標強制分攤至所有上游供應鏈，中小製造業避無可避。</p>
            </div>
          </div>

          {/* Right Column: Pain Points */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                <UserCheck size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">大廠訂單篩選機制</h4>
                <p className="text-sm text-slate-600 leading-relaxed">護國神山等晶圓半導體龍頭已明確要求其供應商：未在規定期限內完成 ISO 14067 產品碳盤查者，將在供應商考核中扣分甚至直接剔除競標資格。</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg h-fit">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">綠色金融與貸款利差</h4>
                <p className="text-sm text-slate-600 leading-relaxed">ESG 指標直接影響銀行融資額度與融資利率。拿不出可靠碳足跡證明書的企業，將面臨融資困難，資金成本增加 1%-2% 以上。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#04</div>
        </div>
      </div>
    </div>
  );
}
