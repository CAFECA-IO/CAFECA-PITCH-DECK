'use client';

export default function TaitraSlide1() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-black relative overflow-hidden shadow-2xl flex flex-col rounded-xl">
        <img 
          src="/taitra_workshop_banner.jpg" 
          alt="AI Decision Leadership Course" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}
