'use client';

import { RefreshCw, EyeOff, LayoutGrid } from 'lucide-react';

export default function TaitraSlide16() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-slate-800 rounded-xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="px-16 pt-16 z-10">
          <span className="text-rose-400 font-bold tracking-[0.2em] text-sm uppercase bg-rose-950 px-4 py-1.5 rounded-full border border-rose-900/50">
            Step 1: Real-world Challenges
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-4">
            步驟一(中)困難：手寫憑證、折損模糊單據的識別瓶頸
          </h2>
          <p className="text-slate-400 mt-2 text-lg">
            紙本發票與手寫單據在實務環境中存在極大物理缺陷，這是自動化系統最難攻克的第一里路。
          </p>
        </div>

        <div className="flex-1 px-16 z-10 grid grid-cols-3 gap-8 mt-4 pb-12 items-center">
          {/* Info: (20260527 - Luphia) Card 1: Physical Damage */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-500" />
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <EyeOff className="text-rose-400" /> 1. 物理污損與低解析度
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                發票在傳遞過程中常會折損、沾染油污或褪色。此外，低階掃描器或手機拍攝常伴隨震動模糊、光影不均及解析度不足，導致文字黏連。
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">OCR 致命傷</span>
              <p className="text-xs text-rose-300">「8」容易被誤認為「0」或「3」，這在財務會計上會產生極其嚴重的差錯。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 2: Layout Distortion */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500" />
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <LayoutGrid className="text-amber-400" /> 2. 非標準表格與錯位
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                各式憑證排版千差萬別，有些表格無邊框，有些欄位緊密堆疊。傳統 OCR 當遇到欄位重疊、跨欄標題或長文字折行時，表格結構會徹底坍塌。
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">對齊障礙</span>
              <p className="text-xs text-amber-300">AI 容易把 A 行的品項名稱配對到 B 行的單價，導致解析出的明細牛頭不對馬嘴。</p>
            </div>
          </div>

          {/* Info: (20260527 - Luphia) Card 3: Context Loss */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden h-[340px] flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500" />
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <RefreshCw className="text-indigo-400" /> 3. 語意顆粒度過粗
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                實務上許多發票僅打印「耗材一批」、「工程款」，而缺乏詳細的物料規格。傳統 AI 在缺乏上下文關聯的情況下，完全無法進行後續碳係數映射。
              </p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">資訊斷層</span>
              <p className="text-xs text-indigo-300">缺乏「規格數量」與「單位」，碳盤查計算便失去了核心的活動數據（Activity Data）。</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-500 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>TAITRA</div>
          <div className="font-mono">#16</div>
        </div>
      </div>
    </div>
  );
}
