import Image from 'next/image';

export default function CAFECASlide6() {
  return (
    <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden flex flex-col justify-center border border-neutral-800">

      {/* Info: Background Graphic */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] bg-gradient-to-r from-cyan-500/5 via-neutral-900 to-amber-500/5 pointer-events-none"></div>

      <div className="relative z-10 px-24 h-full flex flex-row items-center pt-16 pb-16 gap-16">

        {/* Left Side: Title & Info */}
        <div className="w-[480px] flex-shrink-0 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
            <span className="text-cyan-500 font-bold tracking-[0.2em] uppercase text-sm">Global Swarm</span>
          </div>

          <h2 className="text-[3.25rem] font-extrabold text-white leading-tight mb-8 tracking-tight">
            串列全球的閒置算力<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-300">實現各種可能</span>
          </h2>

          <div className="w-24 h-1 border-b border-neutral-700/50 mb-8"></div>

          <p className="text-lg text-slate-400 font-light leading-relaxed">
            透過混合群集網路技術，無縫連接分散在世界各地的邊緣運算節點與主流雲端資源，突破硬體上限，釋放前所未有的無限擴展力。
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 h-full relative min-w-0 flex items-center justify-center p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md shadow-2xl">
          <div className="relative w-full h-full">
            <Image
              src="/sinobee/combine.png"
              alt="Swarm Architecture"
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
          Idle Compute Power
        </div>
        <div>iSunCloud Pitch Deck</div>
      </div>
    </div>
  );
}
