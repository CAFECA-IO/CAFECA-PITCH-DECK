'use client';

import { Cpu, Database, Network, Globe2, FileText } from 'lucide-react';
import Image from 'next/image';

export default function CafecaFaithSlide10() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">
      
      {/* Info: (20260701 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-1/4 top-10 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute left-10 bottom-10 w-[400px] h-[400px] bg-orange-50 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">AI Core Knowledge Base</span>
      </div>

      {/* Info: (20260701 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-16 relative">
        
        {/* Info: (20260701 - Luphia) Header Text */}
        <div className="space-y-6 mb-12 mt-4 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100">
            <Cpu className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">專家模型核心</span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-slate-800">
            整合 <span className="text-orange-500">1995 至 2025</span> 全球公開產業資訊<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">與跨領域工程專業知識，訓練而成的人工智能。</span>
          </h2>
        </div>

        {/* Info: (20260701 - Luphia) Core Model Visualization Layout */}
        <div className="w-full flex gap-10 items-center">
           <div className="grid grid-cols-2 gap-4 flex-1">
             <div className="bg-white/80 p-5 rounded-2xl border border-orange-100 shadow-sm flex items-start gap-4">
                <Database className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="font-bold text-slate-800">全球專利與文獻</h3>
                  <p className="text-xs text-slate-500 mt-1">超過 30 年的跨國技術文獻、工程專利與綠色製程規格標準。</p>
                </div>
             </div>
             <div className="bg-white/80 p-5 rounded-2xl border border-orange-100 shadow-sm flex items-start gap-4">
                <Network className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="font-bold text-slate-800">跨領域數據圖譜</h3>
                  <p className="text-xs text-slate-500 mt-1">串聯材料科學、熱力學與自動化工程的知識圖譜，精準推理。</p>
                </div>
             </div>
             <div className="bg-white/80 p-5 rounded-2xl border border-orange-100 shadow-sm flex items-start gap-4">
                <Globe2 className="w-8 h-8 text-orange-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800">多國語言與法規適配</h3>
                  <p className="text-xs text-slate-500 mt-1">內建多國環保法規與碳排放審計標準，無縫接軌國際。</p>
                </div>
             </div>
             <div className="bg-white/80 p-5 rounded-2xl border border-orange-100 shadow-sm flex items-start gap-4">
                <FileText className="w-8 h-8 text-orange-500 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800">全球 ESG 與財務報告</h3>
                  <p className="text-xs text-slate-500 mt-1">深度學習歷年全球上市企業 ESG 永續報告與財務審計報告，掌握真實轉型路徑。</p>
                </div>
             </div>
           </div>
        </div>

      </div>

      {/* Info: (20260701 - Luphia) Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
        <Image
          src="/cafeca_faith/robot_core.jpeg"
          alt="AI Core Robot"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}
