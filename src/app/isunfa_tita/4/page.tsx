'use client';

import { FileSearch, Leaf, FileCheck2, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function TITASlide4() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-100 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10 text-center">
          <span className="text-slate-600 font-bold tracking-[0.2em] text-sm uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">AI Implementation Challenges</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-4">
            AI 財碳雙軌轉型：核心任務與潛在挑戰
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-3xl mx-auto">
            在全面導入 AI 自動化記帳與記碳的過程中，企業必須面對哪些「AI 幻覺」與實務上的挑戰？
          </p>
        </div>

        <div className="flex-1 px-16 z-10 mt-12 flex gap-6 pb-16">
          
          {/* Step 1 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-sky-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                <FileSearch size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">步驟一：自動記帳與辨識</h3>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  <h4>重點任務 (Key Task)</h4>
                </div>
                <p className="text-sm text-slate-600">自動擷取多樣化格式的憑證與發票明細，並將消費項目精準映射至對應的會計科目。</p>
              </div>
              
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex-1">
                <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold">
                  <AlertTriangle className="text-rose-500 w-5 h-5" />
                  <h4>注意事項與困難 (Precautions)</h4>
                </div>
                <p className="text-sm text-rose-700 leading-relaxed">
                  通用 AI 缺乏深度的 <strong>IFRS / GAAP 會計準則</strong>與在地稅法知識，面對模糊字眼時容易憑空猜測 (幻覺)，導致<strong>借貸不平衡</strong>與<strong>科目分類錯誤</strong>，產生嚴重的財稅風險。
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">步驟二：碳係數精準配對</h3>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  <h4>重點任務 (Key Task)</h4>
                </div>
                <p className="text-sm text-slate-600">將採購品項與活動數據，自動對應至環境部或國際 (如 Ecoinvent) 的碳排係數庫，計算碳足跡。</p>
              </div>
              
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex-1">
                <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold">
                  <AlertTriangle className="text-rose-500 w-5 h-5" />
                  <h4>注意事項與困難 (Precautions)</h4>
                </div>
                <p className="text-sm text-rose-700 leading-relaxed">
                  將數萬筆係數庫一次餵給 AI 會撐爆 Token 上限導致<strong>注意力渙散 (Lost in the middle)</strong>；更危險的是 AI 極易配對到錯誤的<strong>系統邊界</strong>，引發不合規的「綠色漂洗 (Greenwashing)」。
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                <FileCheck2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">步驟三：生成財報與碳盤查</h3>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                  <h4>重點任務 (Key Task)</h4>
                </div>
                <p className="text-sm text-slate-600">一鍵產出符合 ISO 14064-1 規範之盤查清冊、聲明書，以及完整的財務報表。</p>
              </div>
              
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex-1">
                <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold">
                  <AlertTriangle className="text-rose-500 w-5 h-5" />
                  <h4>注意事項與困難 (Precautions)</h4>
                </div>
                <p className="text-sm text-rose-700 leading-relaxed">
                  跨表單的複雜計算容易產生<strong>漏列或重複計算 (Double Counting)</strong>，且一般 AI 生成的結果往往缺乏可被第三方確信機構 (如 BSI, SGS) 承認的<strong>防篡改審計軌跡 (Audit Trail)</strong>。
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 國際貿易署</div>
          <div className="font-mono">#04</div>
        </div>
      </div>
    </div>
  );
}
