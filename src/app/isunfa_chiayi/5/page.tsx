'use client';

import { Cpu, DollarSign, Wand2 } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex border border-neutral-800">
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        {/* Content Container */}
        <div className="w-full pt-12 pb-16 px-20 flex flex-col h-full relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-500 text-sm tracking-widest mb-6 w-max">
            01-1 | 成本與 AI 賦能
          </div>
          
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-5xl font-bold text-white mb-3">智慧 POS 成本高昂？</h2>
              <h3 className="text-2xl font-light text-amber-400">用 AI 重新定義導入門檻</h3>
            </div>
          </div>

          <div className="flex gap-8 flex-1 min-h-0">
            {/* Left Column - The Problem */}
            <div className="w-1/3 bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800 backdrop-blur-sm flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 flex-shrink-0">
                  <DollarSign size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">傳統痛點</h4>
              </div>
              <ul className="space-y-4 flex-1">
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5"></div>
                  <div>
                    <p className="text-lg font-medium text-neutral-200">客製化開發費時</p>
                    <p className="text-sm text-neutral-500 mt-1">動輒數十萬的初期開發與硬體綁定成本</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2.5"></div>
                  <div>
                    <p className="text-lg font-medium text-neutral-200">系統升級僵化</p>
                    <p className="text-sm text-neutral-500 mt-1">修改菜單或流程需要依賴原廠，維護成本高</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column - The AI Solution */}
            <div className="w-2/3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl p-6 border border-amber-500/20 backdrop-blur-sm flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 text-amber-500/10 translate-x-4 -translate-y-4">
                <Cpu size={120} />
              </div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Wand2 size={20} />
                </div>
                <h4 className="text-2xl font-bold text-amber-400">AI 如何簡化建置流程</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10 flex-1">
                <div className="bg-neutral-950/50 rounded-xl p-5 border border-neutral-800/50 flex flex-col justify-center">
                  <h5 className="text-xl font-bold text-white mb-2">自動化模組生成</h5>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    透過 AI 解析您的店家型態與菜單，自動匹配最佳的 UI/UX 與點餐流程模組，無需從零開始手動編寫程式碼。
                  </p>
                </div>
                <div className="bg-neutral-950/50 rounded-xl p-5 border border-neutral-800/50 flex flex-col justify-center">
                  <h5 className="text-xl font-bold text-white mb-2">硬體輕量化</h5>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    以雲端架構為核心，只要一般平板或手機即可順暢運行，徹底擺脫昂貴的專用 POS 機台綁定。
                  </p>
                </div>
                <div className="bg-neutral-950/50 rounded-xl p-5 border border-neutral-800/50 flex flex-col justify-center">
                  <h5 className="text-xl font-bold text-white mb-2">一鍵式系統更新</h5>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    AI 輔助的後台管理，讓新增品項、修改折扣、調整動線就像編輯文件一樣簡單，即時同步至所有終端。
                  </p>
                </div>
                <div className="bg-neutral-950/50 rounded-xl p-5 border border-neutral-800/50 flex flex-col justify-center">
                  <h5 className="text-xl font-bold text-white mb-2">降低隱形成本</h5>
                  <p className="text-neutral-400 font-light text-sm leading-relaxed">
                    不僅是建置成本降低，更省下了人員教育訓練、系統停機維護、以及未來擴充功能時的鉅額費用。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-16 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
