import Image from 'next/image';

export default function CAFECASlide4() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden flex flex-col justify-center border border-neutral-800">

      {/* Info: (20260319 - Luphia) Background Graphic */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-cyan-500/5 via-neutral-900 to-amber-500/5 pointer-events-none"></div>

      <div className="relative z-10 px-24 h-full flex flex-col pt-16 pb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
          <span className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm">Hardware Node</span>
        </div>

        <h2 className="text-5xl font-extrabold text-white leading-tight mb-8">
          個體節點架構
          <span className="text-3xl text-slate-400 font-light ml-4">Individual Node Architecture</span>
        </h2>

        <div className="flex-1 w-full relative border border-neutral-800 rounded-[2.5rem] overflow-hidden bg-neutral-900/50 shadow-2xl flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-950">
            <Image
              src="/sinobee/sinobee_individual_architecture.jpeg"
              alt="Individual Node Architecture"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-24 right-24 flex justify-between items-center text-slate-500 text-xs font-bold tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
          Architecture Design
        </div>
        <div>iSunCloud Pitch Deck</div>
      </div>
    </div>
  );
}
