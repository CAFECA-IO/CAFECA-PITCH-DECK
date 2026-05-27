'use client';

import { MoreHorizontal, ArrowUp, Menu } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: '#10A37F' }}>
      <div className="w-[1280px] h-[720px] relative overflow-hidden shadow-2xl flex justify-between items-center px-32" style={{ backgroundColor: '#10A37F' }}>
        
        {/* Left Side: Logo */}
        <div className="flex items-center gap-6 -mt-10">
          {/* ChatGPT-like Spiral Logo */}
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5987 8.3829 14.6188 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
          </svg>
          <span className="text-[100px] font-sans font-bold tracking-tight text-white">
            ChatGPT
          </span>
        </div>

        {/* Right Side: Phone Mockup (Dark Mode) */}
        <div className="w-[340px] h-[660px] bg-[#212121] rounded-[50px] border-[12px] border-[#0A0A0A] relative shadow-2xl flex flex-col translate-y-4">
          
          {/* Hardware Details (Volume/Power buttons) */}
          <div className="absolute top-28 -left-[16px] w-1 h-12 bg-[#0A0A0A] rounded-l-md"></div>
          <div className="absolute top-44 -left-[16px] w-1 h-12 bg-[#0A0A0A] rounded-l-md"></div>
          <div className="absolute top-36 -right-[16px] w-1 h-16 bg-[#0A0A0A] rounded-r-md"></div>

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-20 flex items-center justify-end px-3">
             <div className="w-2 h-2 bg-[#1c1c1c] rounded-full border border-neutral-800"></div>
          </div>

          {/* Header Navigation */}
          <div className="flex justify-between items-center px-6 pt-16 pb-2 text-white">
            <button>
              <Menu size={22} className="text-neutral-400" />
            </button>
            <button className="flex items-center gap-2 font-sans text-lg font-bold">
              ChatGPT 4
              <span className="text-neutral-500 font-normal">v</span>
            </button>
            <button>
              <MoreHorizontal size={22} className="text-neutral-400" />
            </button>
          </div>

          {/* Main Chat Area */}
          <div className="flex flex-col items-center justify-center flex-1 pb-32">
            {/* White ChatGPT Logo */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-[#212121]">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5987 8.3829 14.6188 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-sans font-medium text-white text-center leading-tight">
              How can I help you <br /> today?
            </h1>
          </div>

          {/* Input Box Area */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="bg-[#2F2F2F] rounded-[24px] p-4 pr-12 relative border border-[#3A3A3A] shadow-sm">
              <div className="text-[16px] text-white leading-relaxed font-sans">
                這位喜歡卡布奇諾不加肉桂粉的先生適合哪件襯衫（要我的店裡有賣的！）
              </div>
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-105">
                <ArrowUp size={18} className="text-black" strokeWidth={3} />
              </button>
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-600 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
