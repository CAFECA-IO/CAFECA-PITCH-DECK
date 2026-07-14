'use client';

import { FileText, Leaf, Recycle, Globe, ArrowRight } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-[#050505] relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Info: (20260527 - Luphia) Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        {/* Info: (20260527 - Luphia) Left Side: Text Content */}
        <div className="w-[50%] pt-16 pl-20 pr-10 flex flex-col h-full relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-green-500/30 text-green-400 text-sm tracking-widest mb-8 w-max bg-green-500/10 backdrop-blur-sm">
            03-1 | 一鍵生成產品護照
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            精雕細琢的百年工法，<br />
            <span className="text-green-400">AI 都懂！</span>
          </h2>
          
          <p className="text-xl text-neutral-300 font-light leading-relaxed mb-12">
            只需上傳您的任何規格書、製程文件或材料履歷，AI 就能快速吸收並整理成符合歐盟規範的「數位產品護照 (DPP)」。
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0 mt-1">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">文件自動解析</h4>
                <p className="text-neutral-400 font-light">無痛轉換繁雜的紙本或 PDF 製程文件，精準抓取成分與材料來源。</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0 mt-1">
                <Leaf size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">環保指標量化</h4>
                <p className="text-neutral-400 font-light">自動運算碳足跡、可回收性，以及再生原料的精確使用比例。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Right Side: Visual Flow */}
        <div className="w-[50%] p-16 flex flex-col justify-center relative z-10">
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative">
            
            {/* Info: (20260527 - Luphia) Input Documents */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex flex-col items-center">
                <FileText className="text-neutral-400 mb-2" size={32} />
                <span className="text-xs text-neutral-500">材料清單</span>
              </div>
              <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex flex-col items-center transform -translate-y-4">
                <FileText className="text-neutral-400 mb-2" size={32} />
                <span className="text-xs text-neutral-500">工廠製程</span>
              </div>
              <div className="bg-neutral-800 p-4 rounded-xl border border-neutral-700 flex flex-col items-center">
                <FileText className="text-neutral-400 mb-2" size={32} />
                <span className="text-xs text-neutral-500">檢驗報告</span>
              </div>
            </div>

            {/* Info: (20260527 - Luphia) AI Processing Arrow */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                <ArrowRight className="text-green-400" size={24} />
              </div>
            </div>

            {/* Info: (20260527 - Luphia) Output DPP */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/10 border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Globe size={100} />
              </div>
              <h4 className="text-2xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <Globe size={24} />
                數位產品護照 (DPP)
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 mb-1">碳足跡 (CO2e)</div>
                  <div className="text-xl font-mono text-white">1.2 kg</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 mb-1">再生原料比例</div>
                  <div className="text-xl font-mono text-white">45%</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 mb-1">可回收性</div>
                  <div className="text-xl font-mono text-white flex items-center gap-2">
                    100% <Recycle size={14} className="text-green-400"/>
                  </div>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-xs text-neutral-400 mb-1">產地來源</div>
                  <div className="text-xl font-mono text-white">台灣</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Info: (20260527 - Luphia) Footer Info */}
        <div className="absolute bottom-6 left-20 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
