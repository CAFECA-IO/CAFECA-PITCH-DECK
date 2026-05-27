'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Grid, Maximize2, Download } from 'lucide-react';
import Link from 'next/link';

// Import all 12 slides
import ISunFASlide1 from '@/app/isunfa_smart_pos/1/page';
import ISunFASlide2 from '@/app/isunfa_smart_pos/2/page';
import ISunFASlide3 from '@/app/isunfa_smart_pos/3/page';
import ISunFASlide4 from '@/app/isunfa_smart_pos/4/page';
import ISunFASlide5 from '@/app/isunfa_smart_pos/5/page';
import ISunFASlide6 from '@/app/isunfa_smart_pos/6/page';
import ISunFASlide7 from '@/app/isunfa_smart_pos/7/page';
import ISunFASlide8 from '@/app/isunfa_smart_pos/8/page';
import ISunFASlide9 from '@/app/isunfa_smart_pos/9/page';
import ISunFASlide10 from '@/app/isunfa_smart_pos/10/page';
import ISunFASlide11 from '@/app/isunfa_smart_pos/11/page';
import ISunFASlide12 from '@/app/isunfa_smart_pos/12/page';
import ISunFASlide13 from '@/app/isunfa_smart_pos/13/page';
import ISunFASlide14 from '@/app/isunfa_smart_pos/14/page';
import ISunFASlide15 from '@/app/isunfa_smart_pos/15/page';
import ISunFASlide16 from '@/app/isunfa_smart_pos/16/page';
import ISunFASlide17 from '@/app/isunfa_smart_pos/17/page';
import ISunFASlide18 from '@/app/isunfa_smart_pos/18/page';
import ISunFASlide19 from '@/app/isunfa_smart_pos/19/page';
import ISunFASlide20 from '@/app/isunfa_smart_pos/20/page';

export default function ISunFAPOSSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Desktop Preview Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Mobile List Calc
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
    1: ISunFASlide1,
    2: ISunFASlide2,
    3: ISunFASlide3,
    4: ISunFASlide4,
    5: ISunFASlide5,
    6: ISunFASlide6,
    7: ISunFASlide7,
    8: ISunFASlide8,
    9: ISunFASlide9,
    10: ISunFASlide10,
    11: ISunFASlide11,
    12: ISunFASlide12,
    13: ISunFASlide13,
    14: ISunFASlide14,
    15: ISunFASlide15,
    16: ISunFASlide16,
    17: ISunFASlide17,
    18: ISunFASlide18,
    19: ISunFASlide19,
    20: ISunFASlide20,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '重新定義',
    2: '惡夢才剛開始',
    3: '五大惡夢',
    4: '老闆們的痛點',
    5: '全能數位店長',
    6: '智慧 POS 建立成本',
    7: 'Claude 搜尋',
    8: '專屬智能導購員',
    9: '當客戶手機成為入口',
    10: 'ChatGPT 詢問',
    11: '智能產品分析師',
    12: '一鍵生成產品護照',
    13: 'Gemini 上傳',
    14: '店內氛圍設計師',
    15: '專屬音樂生成',
    16: '專屬智能會計師',
    17: '營業數據自動結算',
    18: '隱形成本公式',
    19: '專屬推薦碼',
    20: '聯繫我們',
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

      {/* Universal Header */}
      <div className="h-14 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-900 z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-amber-600 p-1.5 rounded-lg">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-200">iSunFA POS Deck</h1>
            <p className="text-xs text-gray-500">v1.0.0 • 2026 iSunFA</p>
          </div>
        </Link>

        {/* Desktop Controls - Hidden on Mobile */}
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

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_smart_pos/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-md text-xs font-medium transition-colors border border-neutral-700">
              <Download size={14} />
              <span>PDF</span>
            </button>
          </Link>
          <Link href={`/isunfa_smart_pos/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-neutral-800 rounded-md text-gray-400 hover:text-white transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Vertical Scroll View */}
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

            const opacityClass = distance === 0 ? 'opacity-100 scale-100' :
              'opacity-40 scale-95 blur-[2px] grayscale';

            const Component = SlideComponents[id];

            return (
              <div key={id} className={`w-full relative overflow-hidden transition-all duration-500 ease-out ${opacityClass}`}
                style={{ height: 720 * mobileScale }}>

                {/* Scale Wrapper */}
                <div
                  style={{
                    transform: `scale(${mobileScale})`,
                    transformOrigin: 'top left',
                    width: 1280,
                    height: 720
                  }}
                  className="bg-neutral-950 shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-neutral-800/50 animate-pulse" />}
                  </div>
                </div>

                {/* Overlay Page Number for Mobile */}
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-amber-600 text-white shadow-lg' : 'bg-black/50 text-gray-400'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">

        {/* Main Layout: Content (Left) + Navigator (Right) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Preview Area */}
          <div className="flex-1 bg-[#050505] flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            {/* Scaled Content Wrapper */}
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-neutral-950 shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-neutral-800"
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
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id
                    ? 'border-amber-500 ring-2 ring-amber-500/20'
                    : 'border-neutral-800 hover:border-neutral-700 opacity-60 hover:opacity-100'
                    }`}
                >
                  {/* Mini Preview Mock */}
                  <div className="absolute inset-0 bg-neutral-950">
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-600 text-xs font-mono">
                      SLIDE {id}
                    </div>
                    {/* Overlay Title */}
                    <div className="absolute bottom-0 inset-x-0 bg-neutral-900/90 p-2 text-left">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-amber-500">#{id.toString().padStart(2, '0')}</span>
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
