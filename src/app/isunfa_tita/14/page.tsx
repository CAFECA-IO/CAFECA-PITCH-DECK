'use client';

import { QRCodeSVG } from 'qrcode.react';
import { ArrowRight, Gift, Sparkles, Building2 } from 'lucide-react';

export default function TITASlide14() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 rounded-xl">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-100 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-100 to-transparent rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

        <div className="flex-1 flex px-24 z-10 items-center justify-between pb-12">

          {/* Left Content Area */}
          <div className="w-1/2 flex flex-col gap-8">
            <div>
              <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-6 py-2 rounded-full border border-emerald-100 shadow-sm inline-block mb-8">
                Exclusive Offer
              </span>
              <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">
                即刻啟動您的<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">AI 碳會計轉型</span>
              </h2>
            </div>

            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              立即掃描右方 QR Code，<br />
              體驗專屬的 AI 財報與碳盤查服務。
            </p>

            <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl inline-block mt-4 w-fit shadow-sm">
              <div className="flex items-center gap-3 text-sky-700 font-bold mb-2">
                <Gift className="w-5 h-5" />
                <span>專屬推薦碼</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-mono text-4xl font-black tracking-widest text-sky-900 bg-white px-4 py-2 rounded-lg border border-sky-100 shadow-inner">
                  TITA2026
                </span>
              </div>
              <p className="text-sm text-sky-600 mt-3 font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 憑推薦碼註冊享經濟部國際貿易署專案免費輔導資源
              </p>
            </div>
          </div>

          {/* Right Content Area (QR Code) */}
          <div className="w-1/2 flex justify-center items-center">
            <div className="relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              <div className="relative bg-white p-12 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col items-center transform transition-transform hover:-translate-y-2 duration-300">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-slate-50 rounded-xl mb-4 border border-slate-100 shadow-sm">
                    <Building2 className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">陽光智能會計</h3>
                  <p className="text-slate-500 mt-1 font-mono text-sm">https://isunfa.com</p>
                </div>

                <div className="p-4 bg-white rounded-2xl shadow-inner border border-slate-100">
                  <QRCodeSVG
                    value="https://isunfa.com"
                    size={280}
                    level="H"
                    includeMargin={false}
                    className="text-slate-900"
                  />
                </div>

                <div className="mt-8 flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-6 py-3 rounded-full">
                  <span>立即掃描體驗</span>
                  <ArrowRight className="w-5 h-5 animate-bounce-x" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA 國際貿易署</div>
          <div className="font-mono">#14</div>
        </div>

        {/* Add custom keyframes for the horizontal bounce animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes bounce-x {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25%); }
          }
          .animate-bounce-x {
            animation: bounce-x 1s infinite;
          }
        `}} />
      </div>
    </div>
  );
}
