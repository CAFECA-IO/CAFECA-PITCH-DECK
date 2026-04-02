'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CAFECASlide1 from '@/app/isuncloud/1/page';
import CAFECASlide2 from '@/app/isuncloud/2/page';
import CAFECASlide3 from '@/app/isuncloud/3/page';
import CAFECASlide4 from '@/app/isuncloud/4/page';
import CAFECASlide5 from '@/app/isuncloud/5/page';
import CAFECASlide6 from '@/app/isuncloud/6/page';
import CAFECASlide7 from '@/app/isuncloud/7/page';
import CAFECASlide8 from '@/app/isuncloud/8/page';
import CAFECASlide9 from '@/app/isuncloud/9/page';
import CAFECASlide10 from '@/app/isuncloud/10/page';
import CAFECASlide11 from '@/app/isuncloud/11/page';
import CAFECASlide12 from '@/app/isuncloud/12/page';
import CAFECASlide13 from '@/app/isuncloud/13/page';

export default function CAFECASlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 13;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }
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

  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: CAFECASlide1,
    2: CAFECASlide2,
    3: CAFECASlide3,
    4: CAFECASlide4,
    5: CAFECASlide5,
    6: CAFECASlide6,
    7: CAFECASlide7,
    8: CAFECASlide8,
    9: CAFECASlide9,
    10: CAFECASlide10,
    11: CAFECASlide11,
    12: CAFECASlide12,
    13: CAFECASlide13,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: 'Title: CAFECA',
    2: 'The Problem',
    3: 'The CAFECA Solution',
    4: '個體節點架構',
    5: 'Hybrid-Decentralized Architecture',
    6: '串列全球的閒置算力實現各種可能',
    7: '系統集群架構',
    8: 'Swarm Agents',
    9: 'Nectar Store',
    10: 'Business Model - HaaS',
    11: 'Key Use Cases',
    12: 'Why CAFECA?',
    13: 'Vision & Call to Action',
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
      {/* Info: (20260319 - Luphia) Header */}
      <div className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-900 z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-amber-500 p-1.5 rounded-lg border border-amber-400/30">
            <MonitorPlay size={20} className="text-amber-950" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-200">iSunCloud Pitch Deck</h1>
            <p className="text-xs text-gray-500">v1.0.0 • 2026 iSunCloud</p>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors hover:text-amber-400"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors hover:text-amber-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/isuncloud/print" target="_blank" className="hidden md:block" aria-label="Print or Export PDF">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-xs font-medium transition-colors border border-neutral-700 text-gray-200 hover:text-amber-400 hover:border-amber-400/30">
              <Download size={14} />
              <span>PDF</span>
            </button>
          </Link>
          <Link href={`/isuncloud/${currentSlide}`} target="_blank" className="hidden md:block" aria-label="Open slide in new tab">
            <button className="p-2 hover:bg-neutral-800 rounded-md text-gray-400 hover:text-amber-400 transition-colors" aria-label="Maximize slide">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

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
          if (safeIndex !== currentSlide) setCurrentSlide(safeIndex);
        }}
      >
        <div className="flex flex-col items-center gap-4 py-[35vh] min-h-screen">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => {
            const distance = Math.abs(id - currentSlide);
            const shouldRender = distance <= 1;
            const opacityClass = distance === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-[2px] grayscale';
            const Component = SlideComponents[id];
            return (
              <div key={id} className={`w-full relative overflow-hidden transition-all duration-500 ease-out ${opacityClass}`} style={{ height: 720 * mobileScale }}>
                <div style={{ transform: `scale(${mobileScale})`, transformOrigin: 'top left', width: 1280, height: 720 }} className="bg-white shadow-xl rounded-lg border border-neutral-800">
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-neutral-800/50 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-amber-500 text-amber-950 shadow-lg font-bold' : 'bg-black/50 text-gray-400'}`}>
                  <span className="text-[10px]">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 bg-neutral-950 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div style={{ transform: `scale(${scale})`, width: 1280, height: 720, transformOrigin: 'center center' }} className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-neutral-800">
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>
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
                  aria-label={`Go to slide ${id}`}
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'}`}
                >
                  <div className="absolute inset-0 bg-white">
                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300 text-xs font-mono uppercase">
                      CAFECA
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-neutral-900/90 p-2 text-left">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-amber-500">#{id.toString().padStart(2, '0')}</span>
                      </div>
                      <div className="text-[10px] text-gray-300 font-medium truncate leading-tight">{slideTitles[id]}</div>
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
