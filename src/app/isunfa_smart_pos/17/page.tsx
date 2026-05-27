'use client';

import { Calculator, BarChart3, Receipt, Wallet, ArrowUpRight } from 'lucide-react';

export default function Slide14() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl flex flex-col border border-neutral-800">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
        </div>

        {/* Header Section */}
        <div className="w-full pt-16 px-20 relative z-10 flex justify-between items-end">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm tracking-widest mb-6 w-max bg-blue-500/10 backdrop-blur-sm">
              05-1 | 營業數據自動結算
            </div>
            <h2 className="text-5xl font-bold text-white mb-3">打烊瞬間，對帳完成</h2>
            <h3 className="text-2xl font-light text-blue-300">AI 即時產出今日財報與營收洞察</h3>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 px-6 py-4 rounded-2xl border border-neutral-800 backdrop-blur-md">
            <Calculator size={32} className="text-blue-500" />
            <div>
              <div className="text-xs text-neutral-500 font-mono tracking-wider">今日預估對帳省下時間</div>
              <div className="text-2xl font-bold text-blue-400">2.5 <span className="text-sm font-light">小時</span></div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full px-20 pb-16 pt-12 relative z-10 flex gap-8">
          
          {/* Left Column: Descriptions */}
          <div className="w-[45%] flex flex-col justify-center space-y-8">
            <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm hover:border-blue-500/40 transition-colors group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Wallet size={20} />
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">多元支付自動核對</h4>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed pl-14">
                打破現金、信用卡、Line Pay、街口等支付壁壘，系統自動抓取各平台帳務明細，無需人工逐筆核對，杜絕漏帳與錯帳。
              </p>
            </div>
            
            <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-500/40 transition-colors group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <BarChart3 size={20} />
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">即時毛利與進貨推算</h4>
              </div>
              <p className="text-neutral-400 font-light leading-relaxed pl-14">
                扣除當日耗損與庫存成本，AI 即時算出真實淨利。並根據歷史銷售曲線，自動推算下一期的進貨資金需求，優化現金流。
              </p>
            </div>
          </div>

          {/* Right Column: Dashboard Visual */}
          <div className="w-[55%] bg-black/40 border border-blue-900/30 rounded-3xl p-8 relative flex flex-col justify-center">
            <div className="absolute top-4 right-6 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
              <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
            </div>
            
            <h4 className="text-sm font-mono text-neutral-500 mb-6 tracking-widest flex items-center gap-2">
              <Receipt size={16} /> iSunFA AI FINANCIAL DASHBOARD
            </h4>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <div className="text-sm text-neutral-500 mb-2">今日總營收</div>
                <div className="text-3xl font-mono text-white flex items-end gap-2">
                  $128,450
                  <span className="text-sm text-green-400 flex items-center pb-1"><ArrowUpRight size={14}/> 12%</span>
                </div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <div className="text-sm text-neutral-500 mb-2">預估淨毛利</div>
                <div className="text-3xl font-mono text-cyan-400 flex items-end gap-2">
                  $48,160
                  <span className="text-sm text-green-400 flex items-center pb-1"><ArrowUpRight size={14}/> 5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/20 to-neutral-900 border border-blue-500/20 rounded-xl p-5 flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-neutral-400">支付來源分析</div>
                <div className="text-xs text-blue-400 border border-blue-500/30 px-2 py-1 rounded-md">無帳差</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-xs text-neutral-500">信用卡</div>
                  <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[45%]"></div></div>
                  <div className="w-12 text-right text-xs font-mono text-neutral-300">45%</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-xs text-neutral-500">行動支付</div>
                  <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-cyan-400 w-[35%]"></div></div>
                  <div className="w-12 text-right text-xs font-mono text-neutral-300">35%</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-xs text-neutral-500">現金</div>
                  <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-neutral-500 w-[20%]"></div></div>
                  <div className="w-12 text-right text-xs font-mono text-neutral-300">20%</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 right-20 text-neutral-600 text-xs tracking-[0.2em] uppercase z-20 pointer-events-none">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
