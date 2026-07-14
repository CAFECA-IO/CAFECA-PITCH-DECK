'use client';

import Image from 'next/image';

export default function CafecaIsunfaSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260714 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] bg-orange-100 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
        <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-yellow-50 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Info: (20260714 - Luphia) Content Container (Left 2/3) */}
      <div className="z-10 w-2/3 h-full flex flex-col justify-center px-20 relative">

        {/* Info: (20260714 - Luphia) Context Pill */}
        <div className="inline-flex items-center gap-2 self-start mb-8 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wider">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          臺北市創櫃板推薦申請
        </div>

        {/* Info: (20260714 - Luphia) Company Brand Area */}
        <div className="mb-6">
          <Image
            src="/cafeca_logo.svg"
            alt="CAFECA Logo"
            width={180}
            height={54}
            className="object-contain"
          />
        </div>

        {/* Info: (20260714 - Luphia) Main Title Area */}
        <div className="space-y-5 text-left">
          <h1 className="text-5xl font-black tracking-tight leading-tight text-slate-800">
            卡菲卡<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">金融科技股份有限公司</span>
          </h1>

          {/* Info: (20260714 - Luphia) Core Product Callout */}
          <div className="flex items-center gap-4 pt-4 mt-2 border-l-4 border-orange-500 pl-6">
            <div>
              <p className="text-sm text-slate-400 font-bold tracking-widest uppercase mb-1">核心產品 · Core Product</p>
              <p className="text-2xl font-black text-slate-800">
                iSunFA <span className="text-orange-500">陽光智能碳會計</span>
              </p>
              <p className="text-base text-slate-500 font-medium mt-2 leading-relaxed">
                以 AI 驅動的一站式碳盤查與淨零解決方案<br />
                專為東亞精密製造業打造，提供高資安規格地端部署
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info: (20260714 - Luphia) Right 1/3 Image Area */}
      <div className="w-1/3 h-full relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.05)] bg-slate-100 border-l border-slate-200">
        <Image
          src="/cafeca_faith/cover.jpeg"
          alt="iSunFA AI Robot"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <Image
            src="/isunfa_logo_color.svg"
            alt="iSunFA Logo"
            width={120}
            height={34}
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}
