'use client';

import { ChevronLeft, MessageSquarePlus, ArrowUp } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: '#D57356' }}>
      <div className="w-[1280px] h-[720px] relative overflow-hidden shadow-2xl flex justify-between items-center px-32" style={{ backgroundColor: '#D57356' }}>
        
        {/* Info: (20260527 - Luphia) Left Side: Logo */}
        <div className="flex items-center gap-4 -mt-10">
          {/* Info: (20260527 - Luphia) Claude Asterisk Logo */}
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22 M30 15 L70 85 M15 30 L85 70 M30 85 L70 15 M15 70 L85 30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
          </svg>
          <span className="text-[110px] font-serif font-medium tracking-tight text-[#1A1A1A]">
            Claude
          </span>
        </div>

        {/* Info: (20260527 - Luphia) Right Side: Phone Mockup */}
        <div className="w-[340px] h-[660px] bg-[#FDFCFB] rounded-[50px] border-[12px] border-[#1A1A1A] relative shadow-2xl flex flex-col translate-y-4">
          
          {/* Info: (20260527 - Luphia) Hardware Details (Volume/Power buttons) */}
          <div className="absolute top-28 -left-[16px] w-1 h-12 bg-[#1A1A1A] rounded-l-md"></div>
          <div className="absolute top-44 -left-[16px] w-1 h-12 bg-[#1A1A1A] rounded-l-md"></div>
          <div className="absolute top-36 -right-[16px] w-1 h-16 bg-[#1A1A1A] rounded-r-md"></div>

          {/* Info: (20260527 - Luphia) Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-20 flex items-center justify-end px-3">
             <div className="w-2 h-2 bg-[#0a0a0a] rounded-full border border-neutral-800"></div>
          </div>

          {/* Info: (20260527 - Luphia) Header Navigation */}
          <div className="flex justify-between items-center px-6 pt-16 pb-2 text-[#5E5B58]">
            <button className="flex items-center text-[17px] font-medium">
              <ChevronLeft size={22} className="-ml-1.5" />
              Back
            </button>
            <button className="flex items-center gap-1 font-serif text-lg font-medium text-[#1A1A1A]">
              Claude <span className="text-[#888582] font-sans text-sm font-normal">Sonnet 4</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-50">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button>
              <MessageSquarePlus size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Info: (20260527 - Luphia) Main Chat Area */}
          <div className="flex flex-col items-center justify-center flex-1 pb-32">
            {/* Info: (20260527 - Luphia) Orange Asterisk */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D57356] mb-6">
              <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
            <h1 className="text-3xl font-serif text-[#1A1A1A] text-center leading-tight">
              How can I help you <br /> this morning?
            </h1>
          </div>

          {/* Info: (20260527 - Luphia) Input Box Area */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="bg-[#F3F2F0] rounded-[24px] p-4 pr-12 relative border border-[#EBEAE8] shadow-sm">
              <div className="text-[16px] text-[#1A1A1A] leading-relaxed">
                幫我建立一個網頁介面的 POS 系統（要大家都說好用！）
              </div>
              <button className="absolute bottom-3 right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <ArrowUp size={18} className="text-white" strokeWidth={3} />
              </button>
            </div>
          </div>
          
          {/* Info: (20260527 - Luphia) Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
