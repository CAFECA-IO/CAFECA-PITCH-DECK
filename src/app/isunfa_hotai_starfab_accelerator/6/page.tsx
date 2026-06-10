'use client';

import Image from 'next/image';
import { Smartphone, Scan, CheckCircle, RefreshCw } from 'lucide-react';

export default function IsunfaHotaiStarfabAcceleratorSlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-[#060c15] via-[#0b1424] to-[#04080f] relative overflow-hidden shadow-2xl flex flex-col justify-between border border-slate-900/80 text-white font-sans">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[150px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sky-500 rounded-full filter blur-[150px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 w-full px-16 pt-10 pb-2 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs">Mobile Scanner</span>
          </div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-300 leading-tight">
            隨手即掃：前線保修廠的行動憑證入口
          </h1>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="opacity-80">
            <Image src="/isunfa_logo.svg" alt="iSunFA Logo" width={100} height={28} style={{ width: '100px', height: 'auto' }} />
          </div>
          <div className="bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-inner">
            <div className="bg-emerald-500/10 p-1 rounded-lg text-emerald-400">
              <Smartphone size={14} />
            </div>
            <div>
              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Device Interface</div>
              <div className="text-[11px] font-bold text-slate-200">零學習成本極速體驗</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-16 pb-10 flex items-center justify-between gap-12">
        
        {/* Left Side: Product Details */}
        <div className="w-[50%] flex flex-col gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-100">零負擔的無紙化第一步</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              現場技師只需使用平板或手機拍照上傳，AI 模型即刻在地端或雲端啟動影像除噪、字體對齊與欄位勾稽，將手寫紙張轉為護照數據。
            </p>
          </div>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-950/50 p-2 rounded-xl text-emerald-400 border border-emerald-500/10 mt-0.5">
                <Scan size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">多模態邊緣影像除噪</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  自動修正折痕、油污、反光及低光源陰影，即便在保修廠惡劣的光線下，也能確保文字辨識準確無誤。
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="bg-sky-950/50 p-2 rounded-xl text-sky-400 border border-sky-500/10 mt-0.5">
                <CheckCircle size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">手寫筆跡即時識別勾稽</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  專有手寫體 OCR 微調模型，可精準辨識技師在工單上的手寫簽名、檢修備註與手動零件異動項目。
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="bg-indigo-950/50 p-2 rounded-xl text-indigo-400 border border-indigo-500/10 mt-0.5">
                <RefreshCw size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-200 text-sm">秒級車況 Passport 同步</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                  拍照後 3 秒內自動將結構化資料關聯至車身唯一的 VIN 碼，省去繁雜的傳統系統人工登打輸入。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Viewfinder Mockup */}
        <div className="w-[50%] flex justify-center items-center relative scale-[0.85] transform-gpu">
          
          {/* Phone Body */}
          <div className="w-[300px] h-[600px] bg-slate-900 rounded-[48px] border-[12px] border-slate-800 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),_inset_0_0_0_2px_rgba(255,255,255,0.1)] overflow-visible flex flex-col ring-2 ring-slate-900 z-10">
            
            {/* Side Buttons */}
            <div className="absolute -left-[14px] top-[120px] w-[2px] h-[24px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[160px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -left-[14px] top-[220px] w-[2px] h-[48px] bg-slate-700 rounded-l-sm"></div>
            <div className="absolute -right-[14px] top-[170px] w-[2px] h-[72px] bg-slate-700 rounded-r-sm"></div>

            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 flex items-center justify-between px-2 shadow-sm">
              <div className="w-2.5 h-2.5 bg-[#1a1a2e] rounded-full flex items-center justify-center shadow-inner">
                 <div className="w-1 h-1 bg-blue-900/60 rounded-full"></div>
              </div>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse opacity-80"></div>
            </div>

            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[11px] text-white font-medium z-20 absolute top-0 w-full bg-gradient-to-b from-black/60 to-transparent">
              <span>10:09</span>
              <div className="flex gap-1.5 items-center">
                <span className="text-[9px] font-bold">5G</span>
                <div className="flex gap-0.5 items-end h-2.5">
                  <div className="w-0.5 h-1 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2 bg-white rounded-sm"></div>
                  <div className="w-0.5 h-2.5 bg-white/40 rounded-sm"></div>
                </div>
                <div className="w-5 h-2.5 border border-white/80 rounded-[3px] p-[1px] relative">
                  <div className="w-full h-full bg-white rounded-[1px]"></div>
                  <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-white/80 rounded-r-sm"></div>
                </div>
              </div>
            </div>

            {/* Camera Viewfinder Area */}
            <div className="flex-1 bg-slate-800 rounded-[36px] relative overflow-hidden flex flex-col justify-between">
              
              {/* Blurred Background to simulate camera feed */}
              <div className="absolute inset-0 z-0 bg-slate-700">
                 {/* Desk background */}
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 0%, transparent 100%)' }}></div>
                 {/* Document on desk */}
                 <div className="absolute top-[15%] left-[5%] right-[5%] bottom-[15%] bg-slate-100 rounded-sm shadow-2xl rotate-2 transform-gpu">
                    {/* Mock document content */}
                    <div className="p-4 flex flex-col gap-3">
                      <div className="flex justify-between items-end border-b-2 border-slate-300 pb-2">
                         <div className="w-24 h-4 bg-slate-300 rounded"></div>
                         <div className="w-16 h-3 bg-slate-200 rounded"></div>
                      </div>
                      <div className="w-32 h-3 bg-slate-200 rounded"></div>
                      <div className="w-24 h-3 bg-slate-200 rounded"></div>
                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between">
                          <div className="w-48 h-2 bg-slate-300 rounded"></div>
                          <div className="w-10 h-2 bg-slate-200 rounded"></div>
                        </div>
                        <div className="flex justify-between">
                          <div className="w-40 h-2 bg-slate-300 rounded"></div>
                          <div className="w-12 h-2 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                      <div className="mt-auto border-t-2 border-slate-300 pt-2 flex justify-between">
                         <div className="w-12 h-3 bg-slate-300 rounded"></div>
                         <div className="w-16 h-3 bg-slate-400 rounded"></div>
                      </div>
                    </div>
                 </div>
                 {/* Dark overlay for UI contrast */}
                 <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Viewfinder UI */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between pb-8 pt-16">
                
                {/* Top Controls */}
                <div className="flex justify-between px-6 text-white">
                  <div className="p-2.5 bg-black/60 rounded-full">
                    <RefreshCw size={18} />
                  </div>
                  <div className="p-2.5 bg-emerald-500/30 text-emerald-400 rounded-full border border-emerald-500/30">
                    <Scan size={18} />
                  </div>
                </div>

                {/* Focus Box */}
                <div className="flex-1 my-6 mx-6 relative">
                  {/* Scanner Corners */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-[4px] border-l-[4px] border-emerald-400 rounded-tl-[12px] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-[4px] border-r-[4px] border-emerald-400 rounded-tr-[12px] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-[4px] border-l-[4px] border-emerald-400 rounded-bl-[12px] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[4px] border-r-[4px] border-emerald-400 rounded-br-[12px] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>

                  {/* Scanning Line */}
                  <div className="absolute left-2 right-2 h-[2px] bg-emerald-400 top-1/2 -translate-y-1/2 shadow-[0_0_15px_#10b981] animate-[pulse_2s_ease-in-out_infinite]"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/90 text-white text-[11px] py-2 px-4 rounded-full whitespace-nowrap font-medium shadow-lg border border-white/10">
                    對齊工單邊緣以自動擷取
                  </div>
                </div>

                {/* Overlay Card / Result */}
                <div className="mx-4 mb-6 bg-white p-3.5 rounded-2xl border border-white/50 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] transform transition-transform hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-2.5 border-b border-slate-200 pb-2">
                    <div>
                      <div className="text-[10px] text-slate-500 font-medium mb-0.5">Toyota 濱江服務廠</div>
                      <div className="text-xs font-bold text-slate-800">維修工單識別成功</div>
                    </div>
                    <div className="bg-emerald-100 text-emerald-700 px-1.5 py-1 rounded-md text-[9px] font-bold flex items-center gap-1 border border-emerald-200 shadow-sm">
                      <CheckCircle size={10} className="text-emerald-600" />
                      100% 匹配
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] items-center">
                      <span className="text-slate-500">VIN 碼</span>
                      <span className="font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">JTJNZ31U2JXXXXX</span>
                    </div>
                    <div className="flex justify-between text-[11px] items-center">
                      <span className="text-slate-500">總金額</span>
                      <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">TWD 4,850</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Camera Controls */}
                <div className="flex justify-around items-center px-6 mt-auto pb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 overflow-hidden border-2 border-slate-600 shadow-inner flex items-center justify-center p-0.5">
                    <div className="w-full h-full bg-slate-700 rounded-lg"></div>
                  </div>
                  {/* Capture Button */}
                  <div className="w-20 h-20 rounded-full border-[4px] border-white flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-white/30">
                    <div className="w-[66px] h-[66px] bg-white rounded-full transition-transform hover:scale-95 active:scale-90 shadow-inner"></div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center text-white border border-white/20">
                    <RefreshCw size={20} />
                  </div>
                </div>

              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/60 rounded-full z-30"></div>

          </div>

          {/* Decorative glows behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-emerald-500/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-50">
        <div>Slide 06 / 17</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          2026 HOTAI MOTOR x iSunFA
        </div>
      </div>

    </div>
  );
}
