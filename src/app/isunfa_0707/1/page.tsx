'use client';

import Image from 'next/image';

export default function CafecaFaithSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260707 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Info: (20260707 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-20 relative">

        {/* Info: (20260707 - Luphia) Brand Area */}
        <div className="mb-12">
          <Image
            src="/isunfa_logo_color.svg"
            alt="iSunFA Logo"
            width={200}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Info: (20260707 - Luphia) Main Title Area */}
        <div className="space-y-6 text-left">
          <h1 className="text-6xl font-black tracking-tight leading-tight text-slate-800">
            從記帳到計碳<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              用 AI 迎戰 IFRS 與 CBAM
            </span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium tracking-wider leading-relaxed border-l-4 border-orange-500 pl-6 mt-8">
            企業永續與 AI 雙軸轉型
          </p>
        </div>
      </div>

      {/* Info: (20260707 - Luphia) Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
        <Image
          src="/cafeca_faith/cover.jpeg"
          alt="Faith AI Robot"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}
