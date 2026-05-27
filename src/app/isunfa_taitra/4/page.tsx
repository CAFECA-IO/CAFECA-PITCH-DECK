'use client';

import { Factory, Globe, ShieldAlert, FileWarning } from 'lucide-react';

export default function TaitraSlide3() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-rose-600 font-bold tracking-[0.2em] text-sm uppercase bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
            Global Trade Barriers
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            背景痛點 (1/2)：國際 CBAM 關稅與出口綠色壁壘
          </h2>
          <p className="text-slate-500 mt-2 text-lg max-w-3xl">
            歐盟碳邊境調整機制 (CBAM) 正式啟動，全球貿易進入「碳有價化」時代，碳足跡成為新型貿易壁壘。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-2 gap-12 mt-4 pb-12 items-center">
          {/* Left Column: Context */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <Globe className="text-rose-500" /> 歐盟 CBAM 與全球綠色關稅
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              自 2026 年起，鋼鐵、水泥、鋁、肥料及電力等高碳排產品，在進口至歐盟時，必須申報其實際碳足跡並購買 CBAM 憑證，這將使無準備的企業面臨鉅額的進口關稅成本。
            </p>
            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
              <h4 className="font-bold text-rose-800 flex items-center gap-2 mb-1.5">
                <ShieldAlert size={20} /> 出口致命傷
              </h4>
              <p className="text-sm text-rose-700">「無法申報即無法進口」。若企業無法提供符合 ISO 標準的查證碳足跡，產品將直接被歐盟海關拒之門外，面臨實質停業危機。</p>
            </div>
          </div>

          {/* Right Column: Pain Points */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
                <Factory size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">供應鏈轉嫁壓力</h4>
                <p className="text-sm text-slate-600 leading-relaxed">跨國品牌巨頭（如 BMW, Apple）為降低範疇三排放，直接將歐盟關稅壓力向下轉嫁，限期要求所有供應鏈廠商出示產品級碳盤查報告。</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
              <div className="p-3 bg-rose-100 rounded-lg text-rose-600">
                <FileWarning size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">高昂的碳關稅計罰</h4>
                <p className="text-sm text-slate-600 leading-relaxed">如果無法提供經第三方查證的初級碳排數據，歐盟將以「出口國最差百分之十製程」的懲罰性碳係數計算關稅，徹底喪失價格競爭力。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#03</div>
        </div>
      </div>
    </div>
  );
}
