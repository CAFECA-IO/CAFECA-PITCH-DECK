'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Grid, Maximize2, Download } from 'lucide-react';
import Link from 'next/link';

import DPPSlide1 from '@/app/isunfa_digital_product_passport/1/page';
import DPPSlide2 from '@/app/isunfa_digital_product_passport/2/page';
import DPPSlide3 from '@/app/isunfa_digital_product_passport/3/page';
import DPPSlide4 from '@/app/isunfa_digital_product_passport/4/page';
import DPPSlide5 from '@/app/isunfa_digital_product_passport/5/page';
import DPPSlide6 from '@/app/isunfa_digital_product_passport/6/page';
import DPPSlide7 from '@/app/isunfa_digital_product_passport/7/page';
import DPPSlide8 from '@/app/isunfa_digital_product_passport/8/page';
import DPPSlide9 from '@/app/isunfa_digital_product_passport/9/page';
import DPPSlide10 from '@/app/isunfa_digital_product_passport/10/page';
import DPPSlide11 from '@/app/isunfa_digital_product_passport/11/page';
import DPPSlide12 from '@/app/isunfa_digital_product_passport/12/page';
import DPPSlide13 from '@/app/isunfa_digital_product_passport/13/page';
import DPPSlide14 from '@/app/isunfa_digital_product_passport/14/page';
import DPPSlide15 from '@/app/isunfa_digital_product_passport/15/page';
import DPPSlide16 from '@/app/isunfa_digital_product_passport/16/page';
import DPPSlide17 from '@/app/isunfa_digital_product_passport/17/page';
import DPPSlide18 from '@/app/isunfa_digital_product_passport/18/page';
import DPPSlide19 from '@/app/isunfa_digital_product_passport/19/page';
import DPPSlide20 from '@/app/isunfa_digital_product_passport/20/page';
import DPPSlide21 from '@/app/isunfa_digital_product_passport/21/page';
import DPPSlide22 from '@/app/isunfa_digital_product_passport/22/page';
import DPPSlide23 from '@/app/isunfa_digital_product_passport/23/page';
import DPPSlide24 from '@/app/isunfa_digital_product_passport/24/page';

export default function DPPSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 24;
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
    1: DPPSlide1,
    2: DPPSlide2,
    3: DPPSlide3,
    4: DPPSlide4,
    5: DPPSlide5,
    6: DPPSlide6,
    7: DPPSlide7,
    8: DPPSlide8,
    9: DPPSlide9,
    10: DPPSlide10,
    11: DPPSlide11,
    12: DPPSlide12,
    13: DPPSlide13,
    14: DPPSlide14,
    15: DPPSlide15,
    16: DPPSlide16,
    17: DPPSlide17,
    18: DPPSlide18,
    19: DPPSlide19,
    20: DPPSlide20,
    21: DPPSlide21,
    22: DPPSlide22,
    23: DPPSlide23,
    24: DPPSlide24,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面與破題',
    2: '非關稅貿易壁壘',
    3: '供應鏈斷鏈危機',
    4: '商業戰略優勢',
    5: '臺灣製造業優勢',
    6: 'AI 轉化綠色溢價',
    7: '雙核驅動的本質',
    8: '深究生產履歷',
    9: '深究回收方法',
    10: '科學核算底層邏輯',
    11: '傳統痛點一: 數據孤島',
    12: '傳統痛點二: 係數匹配',
    13: '傳統痛點三: 機密風險',
    14: '傳統痛點四: 回收方法壁壘',
    15: '實戰解析: Urban Mining',
    16: 'AI 啟動自動化 DPP',
    17: 'NLP 與 OCR',
    18: '動態係數匹配',
    19: '零知識證明防護',
    20: '財務與碳帳一元化',
    21: '生產履歷一鍵生成',
    22: 'AI 編寫循環經濟指南',
    23: '數位憑證與確信',
    24: '總結: 建構綠色供應鏈',
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
    <div className="flex flex-col h-screen bg-neutral-900 text-white overflow-hidden font-sans">
      <div className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-950 z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-900/20">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-200">iSunFA DPP Presentation</h1>
            <p className="text-xs text-gray-500">v1.2.0 • 2026 iSunFA</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-gray-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            aria-label="Previous Slide" onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next Slide" onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-neutral-800 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/isunfa_digital_product_passport/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-xs font-medium transition-colors border border-neutral-700">
              <Download size={14} />
              <span>PDF</span>
            </button>
          </Link>
          <Link href={`/isunfa_digital_product_passport/${currentSlide}`} target="_blank" className="hidden md:block">
            <button aria-label="Maximize Presentation" className="p-2 hover:bg-neutral-800 rounded-md text-gray-400 hover:text-white transition-colors">
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
                  className="bg-neutral-900 shadow-xl rounded-lg"
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

      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 bg-neutral-950 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-neutral-900 shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-neutral-800 rounded-xl"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
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
                  aria-label={`Go to slide ${id}`} onClick={() => goToSlide(id)}
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-neutral-800">
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-600 text-xs font-mono">
                      SLIDE {id}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-neutral-950/90 p-2 text-left">
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
