'use client';

import Image from 'next/image';
import { Menu, MoreVertical, FileText, Image as ImageIcon, Table, Presentation, SendHorizontal } from 'lucide-react';

export default function Slide13() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ backgroundColor: '#131314' }}>
      <div className="w-[1280px] h-[720px] relative overflow-hidden shadow-2xl flex justify-between items-center px-32" style={{ backgroundColor: '#131314' }}>
        
        {/* Info: (20260527 - Luphia) SVG Gradients Definition */}
        <svg style={{ width: 0, height: 0, position: 'absolute' }}>
          <defs>
            <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="33%" stopColor="#9b72cb" />
              <stop offset="66%" stopColor="#d96570" />
              <stop offset="100%" stopColor="#f4b400" />
            </linearGradient>
          </defs>
        </svg>
 
        {/* Info: (20260527 - Luphia) Left Side: Logo */}
        <div className="flex items-center gap-6 -mt-10">
          <Image src="/gemini-logo.svg" alt="Gemini Logo" width={350} height={100} style={{ width: '350px', height: 'auto' }} priority />
        </div>

        {/* Info: (20260527 - Luphia) Right Side: Phone Mockup (Gemini App) */}
        <div className="w-[340px] h-[660px] bg-[#1E1F22] rounded-[50px] border-[12px] border-[#0F0F0F] relative shadow-2xl flex flex-col translate-y-4">
          
          {/* Info: (20260527 - Luphia) Hardware Details (Volume/Power buttons) */}
          <div className="absolute top-28 -left-[16px] w-1 h-12 bg-[#0F0F0F] rounded-l-md"></div>
          <div className="absolute top-44 -left-[16px] w-1 h-12 bg-[#0F0F0F] rounded-l-md"></div>
          <div className="absolute top-36 -right-[16px] w-1 h-16 bg-[#0F0F0F] rounded-r-md"></div>

          {/* Info: (20260527 - Luphia) Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-20 flex items-center justify-end px-3">
             <div className="w-2 h-2 bg-[#1c1c1c] rounded-full border border-neutral-800"></div>
          </div>

          {/* Info: (20260527 - Luphia) Header Navigation */}
          <div className="flex justify-between items-center px-6 pt-16 pb-2 text-[#E8EAED]">
            <button>
              <Menu size={22} />
            </button>
            <button className="flex items-center gap-2 font-sans text-lg font-medium">
              Gemini Advanced
              <span className="text-neutral-500 font-normal mt-1">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <button>
              <MoreVertical size={22} />
            </button>
          </div>

          {/* Info: (20260527 - Luphia) Main Chat Area */}
          <div className="flex flex-col items-center justify-center flex-1 pb-36">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="url(#gemini-gradient)" xmlns="http://www.w3.org/2000/svg" className="mb-4">
              <path d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z" />
            </svg>
            <h1 className="text-2xl font-sans font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] text-center">
              Hello, how can I <br /> help you today?
            </h1>
          </div>

          {/* Info: (20260527 - Luphia) Input Box Area */}
          <div className="absolute bottom-6 left-3 right-3">
            <div className="bg-[#282A2C] rounded-[28px] p-4 pb-12 relative shadow-md border border-[#3A3C3E]">
              
              {/* Info: (20260527 - Luphia) File Attachments Grid */}
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-1.5 bg-[#1E1F22] px-2.5 py-1.5 rounded-lg border border-[#3A3C3E] shadow-sm">
                  <FileText size={12} className="text-red-400" />
                  <span className="text-[10px] text-neutral-300">recipe_v2.pdf</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1E1F22] px-2.5 py-1.5 rounded-lg border border-[#3A3C3E] shadow-sm">
                  <ImageIcon size={12} className="text-blue-400" />
                  <span className="text-[10px] text-neutral-300">factory.png</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1E1F22] px-2.5 py-1.5 rounded-lg border border-[#3A3C3E] shadow-sm">
                  <FileText size={12} className="text-blue-500" />
                  <span className="text-[10px] text-neutral-300">specs.docx</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1E1F22] px-2.5 py-1.5 rounded-lg border border-[#3A3C3E] shadow-sm">
                  <Table size={12} className="text-green-500" />
                  <span className="text-[10px] text-neutral-300">carbon.xlsx</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1E1F22] px-2.5 py-1.5 rounded-lg border border-[#3A3C3E] shadow-sm">
                  <Presentation size={12} className="text-orange-500" />
                  <span className="text-[10px] text-neutral-300">intro.pptx</span>
                </div>
              </div>

              {/* Info: (20260527 - Luphia) Text Input */}
              <div className="text-[15px] text-[#E8EAED] leading-snug font-sans">
                這些是我產品的所有秘方，幫我生成數位產品護照（我要進軍全世界！）
              </div>
              
              <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center">
                <SendHorizontal size={20} className="text-[#A8C7FA]" />
              </button>
            </div>
          </div>
          
          {/* Info: (20260527 - Luphia) Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-500 rounded-full"></div>
        </div>

      </div>
    </div>
  );
}
