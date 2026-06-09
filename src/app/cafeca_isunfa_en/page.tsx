'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CafecaIsunfaSlide1 from '@/app/cafeca_isunfa_en/1/page';
import CafecaIsunfaSlide2 from '@/app/cafeca_isunfa_en/2/page';
import CafecaIsunfaSlide3 from '@/app/cafeca_isunfa_en/3/page';
import CafecaIsunfaSlide4 from '@/app/cafeca_isunfa_en/4/page';
import CafecaIsunfaSlide5 from '@/app/cafeca_isunfa_en/5/page';
import CafecaIsunfaSlide6 from '@/app/cafeca_isunfa_en/6/page';
import CafecaIsunfaSlide7 from '@/app/cafeca_isunfa_en/7/page';
import CafecaIsunfaSlide8 from '@/app/cafeca_isunfa_en/8/page';
import CafecaIsunfaSlide9 from '@/app/cafeca_isunfa_en/9/page';
import CafecaIsunfaSlide10 from '@/app/cafeca_isunfa_en/10/page';
import CafecaIsunfaSlide11 from '@/app/cafeca_isunfa_en/11/page';
import CafecaIsunfaSlide12 from '@/app/cafeca_isunfa_en/12/page';
import CafecaIsunfaSlide13 from '@/app/cafeca_isunfa_en/13/page';

export default function CafecaIsunfaSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 13;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: Mobile List Scaling Calc
      if (window.innerWidth < 768) {
        const w = window.innerWidth;
        const targetW = 1280;
        setMobileScale(w / targetW);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Info: Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: CafecaIsunfaSlide1,
    2: CafecaIsunfaSlide2,
    3: CafecaIsunfaSlide3,
    4: CafecaIsunfaSlide4,
    5: CafecaIsunfaSlide5,
    6: CafecaIsunfaSlide6,
    7: CafecaIsunfaSlide7,
    8: CafecaIsunfaSlide8,
    9: CafecaIsunfaSlide9,
    10: CafecaIsunfaSlide10,
    11: CafecaIsunfaSlide11,
    12: CafecaIsunfaSlide12,
    13: CafecaIsunfaSlide13,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: 'Cover: iSunFA',
    2: 'Climate Crisis',
    3: 'The Carbon Equation',
    4: 'Manufacturing Complexity',
    5: 'AI Carbon Inference',
    6: 'Dynamic Optimization',
    7: '5 Compliance Pillars',
    8: 'Edge AI Efficiency',
    9: 'Target Market / TAM',
    10: 'Technical Moat',
    11: 'Core Team',
    12: 'Fundraising & Plan',
    13: 'The Negentropy Law',
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide(c => (c < totalSlides ? c + 1 : c));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(c => (c > 1 ? c - 1 : c));
  }, []);

  const goToSlide = (id: number) => {
    setCurrentSlide(id);
  };

  // Info: Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white overflow-hidden">

      {/* Info: Universal Header */}
      <div className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-900 z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-emerald-600 p-1.5 rounded-lg">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-200">iSunFA Presentation</h1>
            <p className="text-xs text-gray-500">v1.0.0 • 2026 iSunFA CDIB Pitch</p>
          </div>
        </Link>

        {/* Info: Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info: Actions */}
        <div className="flex items-center gap-3">
          <Link href="/cafeca_isunfa_en/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-xs font-medium transition-colors border border-neutral-700 text-gray-200">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/cafeca_isunfa_en/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-neutral-800 rounded-md text-gray-400 hover:text-white transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-neutral-900 scroll-smooth"
        onScroll={(e) => {
          const target = e.currentTarget;
          const paddingOffset = target.clientHeight * 0.35;
          const slideHeight = (720 * mobileScale) + 16;
          const scrollCenter = target.scrollTop + (target.clientHeight / 2);
          const relativePosition = scrollCenter - paddingOffset;
          const index = Math.floor(relativePosition / slideHeight) + 1;
          const safeIndex = Math.max(1, Math.min(totalSlides, index));

          if (safeIndex !== currentSlide) {
            setCurrentSlide(safeIndex);
          }
        }}
      >
        <div className="flex flex-col items-center gap-4 py-[35vh] min-h-screen">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => {
            const distance = Math.abs(id - currentSlide);
            const shouldRender = distance <= 1;
            const opacityClass = distance === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-[2px] grayscale';
            const Component = SlideComponents[id];

            return (
              <div key={id} className={`w-full relative overflow-hidden transition-all duration-500 ease-out ${opacityClass}`}
                style={{ height: 720 * mobileScale }}>
                <div
                  style={{
                    transform: `scale(${mobileScale})`,
                    transformOrigin: 'top left',
                    width: 1280,
                    height: 720
                  }}
                  className="bg-white shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-neutral-800/50 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-emerald-600 text-white shadow-lg' : 'bg-black/50 text-gray-400'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Preview Area */}
          <div className="flex-1 bg-neutral-950 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-neutral-800"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Side Navigator */}
          <div className="w-64 border-l border-neutral-800 bg-neutral-900 flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-neutral-800">
              <Grid size={12} />
              <span>Navigator</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 scrollbar-hide">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
                <button
                  key={id}
                  onClick={() => goToSlide(id)}
                  aria-label={slideTitles[id] || `Slide ${id}`}
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-white">
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 text-xs font-bold font-sans">
                      iSunFA
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-neutral-900/90 p-2 text-left">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-emerald-500">#{id.toString().padStart(2, '0')}</span>
                      </div>
                      <div className="text-[10px] text-gray-300 font-medium truncate leading-tight">{slideTitles[id] || `Slide ${id}`}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
