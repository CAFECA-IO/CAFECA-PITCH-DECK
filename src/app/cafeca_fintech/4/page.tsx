'use client';

import { QRCodeSVG } from 'qrcode.react';
import { Bot, Wallet, Scale, PieChart, Activity, QrCode, Leaf } from 'lucide-react';

export default function CafecaFintechSlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-gray-200">

      {/* Info: (20260510 - Luphia) Background Gradients */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[70rem] -translate-x-1/2 bg-gradient-to-tr from-[#0284c7] to-[#0ea5e9] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="w-full flex-1 flex flex-col px-16 py-8 z-10">
        <div className="mb-4">
          <span className="text-sky-600 font-bold tracking-[0.2em] text-sm border border-sky-200 px-4 py-1.5 rounded-full uppercase bg-sky-50 shadow-sm">
            iSunFA Core Product
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-5 tracking-wide leading-tight">
            人工智能碳會計服務
          </h2>
        </div>

        <div className="flex-1 flex gap-10 items-center justify-between mt-4 mb-4">

          <div className="w-1/3 flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border-4 border-sky-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <QRCodeSVG
                value="https://isunfa.com"
                size={220}
                bgColor={"#ffffff"}
                fgColor={"#0369a1"}
                level={"H"}
                includeMargin={false}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-6 bg-slate-800 text-white px-6 py-2 rounded-full font-mono text-lg tracking-wider shadow-md">
              isunfa.com
            </div>
            <p className="mt-4 text-slate-500 font-medium text-sm tracking-wide">立即掃描體驗專屬服務</p>
          </div>

          <div className="w-2/3 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-sky-900 to-sky-700 p-6 rounded-3xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black pointer-events-none">AI</div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3 relative z-10">
                <span className="bg-sky-500 p-2 rounded-xl shadow-inner text-white"><Bot size={24} strokeWidth={2.5} /></span>
                自動化會計審計與碳盤查
              </h3>
              <p className="text-sky-100 text-base leading-relaxed relative z-10">
                透過核心 AI 引擎「費思」，我們實現了<strong className="text-white mx-1 text-lg border-b border-sky-400">自動化會計審計服務</strong>與<strong className="text-white mx-1 text-lg border-b border-sky-400">碳盤查服務</strong>，徹底顛覆傳統人工作業，大幅降低企業合規的門檻與龐大時間成本。
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-md border border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-sky-500 rounded-full inline-block"></span>
                全方位企業永續加值服務
              </h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-sky-600 group-hover:scale-110 group-hover:text-sky-500 transition-all"><Wallet size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-sky-800 transition-colors">財務管理建議</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-sky-600 group-hover:scale-110 group-hover:text-sky-500 transition-all"><Scale size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-sky-800 transition-colors">財務合規建議</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-sky-600 group-hover:scale-110 group-hover:text-sky-500 transition-all"><PieChart size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-sky-800 transition-colors">企業評級分析</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-sky-600 group-hover:scale-110 group-hover:text-sky-500 transition-all"><Activity size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-sky-800 transition-colors">碳健檢報告</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-sky-600 group-hover:scale-110 group-hover:text-sky-500 transition-all"><QrCode size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-sky-800 transition-colors">數位產品護照</span>
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 bg-sky-50/50 rounded-xl border border-sky-100 hover:bg-sky-100/50 transition-colors group">
                  <div className="bg-white w-10 h-10 flex items-center justify-center rounded-lg shadow-sm text-emerald-600 group-hover:scale-110 group-hover:text-emerald-500 transition-all"><Leaf size={20} strokeWidth={2.5} /></div>
                  <span className="font-bold text-slate-700 text-sm group-hover:text-emerald-700 transition-colors">淨零碳排規劃</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Info: (20260510 - Luphia) Footer */}
      <div className="absolute bottom-4 w-full px-16 flex justify-between text-gray-400 text-xs tracking-widest uppercase font-medium">
        <div>Confidential</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div >
  );
}
