'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Grid, Maximize2, Download } from 'lucide-react';
import Link from 'next/link';

import TITASlide1 from '@/app/isunfa_tita/1/page';
import TITASlide2 from '@/app/isunfa_tita/2/page';
import TITASlide3 from '@/app/isunfa_tita/3/page';
import TITASlide4 from '@/app/isunfa_tita/4/page';
import TITASlide5 from '@/app/isunfa_tita/5/page';
import TITASlide6 from '@/app/isunfa_tita/6/page';
import TITASlide7 from '@/app/isunfa_tita/7/page';
import TITASlide8 from '@/app/isunfa_tita/8/page';
import TITASlide9 from '@/app/isunfa_tita/9/page';
import TITASlide10 from '@/app/isunfa_tita/10/page';
import TITASlide11 from '@/app/isunfa_tita/11/page';
import TITASlide12 from '@/app/isunfa_tita/12/page';
import TITASlide13 from '@/app/isunfa_tita/13/page';
import TITASlide14 from '@/app/isunfa_tita/14/page';

export default function TITASlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 14;
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
    1: TITASlide1,
    2: TITASlide2,
    3: TITASlide3,
    4: TITASlide4,
    5: TITASlide5,
    6: TITASlide6,
    7: TITASlide7,
    8: TITASlide8,
    9: TITASlide9,
    10: TITASlide10,
    11: TITASlide11,
    12: TITASlide12,
    13: TITASlide13,
    14: TITASlide14,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '從記帳到記碳－迎戰碳費與 CBAM 的 AI 突圍術',
    2: '挑戰與痛點 —— CBAM 與國內碳費的雙重夾擊',
    3: '核心解法 —— 財務與碳排雙軌並進的 AI 引擎',
    4: 'AI 財碳雙軌轉型：核心任務與潛在挑戰',
    5: '克服幻覺 —— 導入駕馭工程 (Harness Engineering)',
    6: '步驟一：AI 自動記帳與憑證辨識',
    7: '步驟一檢核：結構化知識注入與自我評估',
    8: '步驟二：碳係數精準配對',
    9: '步驟二檢核：碳係數精準度自我評估',
    10: '步驟三：一鍵生成財報與碳盤查審計報告',
    11: '步驟三檢核：報告完整性與平衡邏輯自評',
    12: '終極產出 —— 打造接軌國際的數位產品護照 (DPP)',
    13: '願景與結語 —— AI 賦能，化碳焦慮為綠色競爭力',
    14: '專屬推薦 —— 立即體驗 AI 碳會計服務',
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
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-emerald-500 p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-sky-950">iSunFA 國際貿易署</h1>
            <p className="text-xs text-slate-500">v1.0.0 • 2026 iSunFA</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/isunfa_tita/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700">
              <Download size={14} />
              <span>PDF</span>
            </button>
          </Link>
          <Link href={`/isunfa_tita/${currentSlide}`} target="_blank" className="hidden md:block">
            <button aria-label="Maximize Presentation" className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      <div
        className="md:hidden flex-1 overflow-y-auto bg-slate-100 scroll-smooth"
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
            const opacityClass = distance === 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95 blur-[1px]';
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
                  className="bg-white shadow-xl rounded-lg border border-slate-200"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-100 animate-pulse" />}
                  </div>
                </div>

                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-emerald-500 text-white shadow-md' : 'bg-white/80 text-slate-500 backdrop-blur-sm border border-slate-200'}`}>
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
          <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200 rounded-xl"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          <div className="w-64 border-l border-slate-200 bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-100">
              <Grid size={12} />
              <span>Navigator</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 scrollbar-hide">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
                <button
                  key={id}
                  aria-label={`Go to slide ${id}`}
                  onClick={() => goToSlide(id)}
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-slate-50">
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-mono">
                      SLIDE {id}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 p-2 text-left border-t border-slate-100 backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-emerald-600">#{id.toString().padStart(2, '0')}</span>
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
