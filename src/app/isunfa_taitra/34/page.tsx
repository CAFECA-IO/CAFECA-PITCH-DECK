'use client';

import Image from 'next/image';

export default function TaitraSlide34() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-black relative overflow-hidden shadow-2xl flex flex-col rounded-xl">
        <Image 
          src="/taitra_workshop_banner.jpg" 
          alt="AI Decision Leadership Course" 
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
}
