'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import IsunfaCnSlide1 from '@/app/isunfa_cn/1/page';
import IsunfaCnSlide2 from '@/app/isunfa_cn/2/page';
import IsunfaCnSlide3 from '@/app/isunfa_cn/3/page';
import IsunfaCnSlide4 from '@/app/isunfa_cn/4/page';
import IsunfaCnSlide5 from '@/app/isunfa_cn/5/page';
import IsunfaCnSlide6 from '@/app/isunfa_cn/6/page';
import IsunfaCnSlide7 from '@/app/isunfa_cn/7/page';
import IsunfaCnSlide8 from '@/app/isunfa_cn/8/page';
import IsunfaCnSlide9 from '@/app/isunfa_cn/9/page';
import IsunfaCnSlide10 from '@/app/isunfa_cn/10/page';
import IsunfaCnSlide11 from '@/app/isunfa_cn/11/page';

export default function IsunfaCnSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 11;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260610 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260610 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260610 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260610 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: IsunfaCnSlide1,
    2: IsunfaCnSlide2,
    3: IsunfaCnSlide3,
    4: IsunfaCnSlide4,
    5: IsunfaCnSlide5,
    6: IsunfaCnSlide6,
    7: IsunfaCnSlide7,
    8: IsunfaCnSlide8,
    9: IsunfaCnSlide9,
    10: IsunfaCnSlide10,
    11: IsunfaCnSlide11,
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
    11: 'The Negentropy Law',
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

  // Info: (20260610 - Luphia) Keyboard navigation
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

      {/* Info: (20260610 - Luphia) Universal Header */}
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

        {/* Info: (20260610 - Luphia) Desktop Controls */}
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

        {/* Info: (20260610 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_cn/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-xs font-medium transition-colors border border-neutral-700 text-gray-200">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isunfa_cn/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-neutral-800 rounded-md text-gray-400 hover:text-white transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260610 - Luphia) Mobile View */}
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

      {/* Info: (20260610 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260610 - Luphia) Preview Area */}
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

          {/* Info: (20260610 - Luphia) Side Navigator */}
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
