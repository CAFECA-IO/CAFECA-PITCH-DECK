'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CafecaIsunfaSlide1 from '@/app/cafeca_isunfa/1/page';
import CafecaIsunfaSlide2 from '@/app/cafeca_isunfa/2/page';
import CafecaIsunfaSlide3 from '@/app/cafeca_isunfa/3/page';
import CafecaIsunfaSlide4 from '@/app/cafeca_isunfa/4/page';
import CafecaIsunfaSlide5 from '@/app/cafeca_isunfa/5/page';
import CafecaIsunfaSlide6 from '@/app/cafeca_isunfa/6/page';
import CafecaIsunfaSlide7 from '@/app/cafeca_isunfa/7/page';
import CafecaIsunfaSlide8 from '@/app/cafeca_isunfa/8/page';
import CafecaIsunfaSlide9 from '@/app/cafeca_isunfa/9/page';
import CafecaIsunfaSlide10 from '@/app/cafeca_isunfa/10/page';
import CafecaIsunfaSlide11 from '@/app/cafeca_isunfa/11/page';
import CafecaIsunfaSlide12 from '@/app/cafeca_isunfa/12/page';
import CafecaIsunfaSlide13 from '@/app/cafeca_isunfa/13/page';
import CafecaIsunfaSlide14 from '@/app/cafeca_isunfa/14/page';
import CafecaIsunfaSlide15 from '@/app/cafeca_isunfa/15/page';
import CafecaIsunfaSlide16 from '@/app/cafeca_isunfa/16/page';
import CafecaIsunfaSlide17 from '@/app/cafeca_isunfa/17/page';

export default function CafecaIsunfaSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 17;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260714 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260714 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260714 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260714 - Luphia) Slide Components Mapping
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
    14: CafecaIsunfaSlide14,
    15: CafecaIsunfaSlide15,
    16: CafecaIsunfaSlide16,
    17: CafecaIsunfaSlide17,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：卡菲卡 × iSunFA',
    2: 'iSunFA 是什麼',
    3: '三大碳盤查服務方案',
    4: '碳盤查為何需要 AI',
    5: '技術亮點與底層優勢',
    6: '減碳效益與收入',
    7: '導入 AI 的企業優勢',
    8: '成功案例：中國砂輪',
    9: '市場規模與生態系',
    10: '未來市場推廣計劃',
    11: '創櫃板募資計劃',
    12: '資金運用與里程碑',
    13: '卡菲卡對臺北市產業價值',
    14: '核心團隊',
    15: '團隊實績與里程碑',
    16: '為何我們是最佳選擇',
    17: '致謝',
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

  // Info: (20260714 - Luphia) Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">

      {/* Info: (20260714 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 tracking-wide">卡菲卡金融科技 · iSunFA 陽光智能碳會計</h1>
            <p className="text-xs text-slate-500">臺北市創櫃板推薦遴選簡報 • 2026</p>
          </div>
        </Link>

        {/* Info: (20260714 - Luphia) Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors text-slate-600"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors text-slate-600"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info: (20260714 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/cafeca_isunfa/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700 shadow-sm">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/cafeca_isunfa/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260714 - Luphia) Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-slate-50 scroll-smooth"
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
            const opacityClass = distance === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-95 blur-[1px] grayscale';
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
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-100 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-200/50 text-slate-500'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260714 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260714 - Luphia) Preview Area */}
          <div className="flex-1 bg-slate-50 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260714 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-slate-200 bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-200">
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
                    ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-slate-50">
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-bold font-sans">
                      iSunFA
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-2 text-left border-t border-slate-100">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-orange-500">#{id.toString().padStart(2, '0')}</span>
                      </div>
                      <div className="text-[10px] text-slate-700 font-medium truncate leading-tight">{slideTitles[id] || `Slide ${id}`}</div>
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
