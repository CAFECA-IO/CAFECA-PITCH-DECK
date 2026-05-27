'use client';

import { QRCodeSVG } from 'qrcode.react';

export default function Slide10() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-amber-500 relative overflow-hidden shadow-2xl flex border border-amber-600">
        
        {/* Left Side: Solid Dark Block */}
        <div className="w-[45%] bg-neutral-950 p-20 flex flex-col justify-center text-white relative z-10">
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-neutral-950 transform rotate-45"></div>
          
          <h2 className="text-4xl font-light mb-4 text-neutral-400">專屬推薦碼</h2>
          <div className="text-7xl font-black tracking-widest text-amber-500 mb-12 drop-shadow-md">
            ICHIAYI<br/>2026
          </div>
          
          <p className="text-xl font-light text-neutral-300 leading-relaxed max-w-sm">
            立即掃描右方 QR Code，<br/>啟動您的智能店鋪轉型計畫，<br/>獲取嘉義限定方案。
          </p>
        </div>

        {/* Right Side: QR Code Area */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-amber-500 to-amber-600"></div>
          
          <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <QRCodeSVG 
              value="https://isunfa.com" 
              size={360} 
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={false}
            />
          </div>
          
          <p className="relative z-10 mt-12 text-2xl font-bold text-amber-950 tracking-widest bg-white/30 px-8 py-3 rounded-full backdrop-blur-sm">
            https://isunfa.com
          </p>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-16 text-neutral-500 text-xs tracking-[0.2em] uppercase z-20">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
