'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Boxes, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import RetailTwinSlide1 from '@/app/isunfa_retail_twin/1/page';
import RetailTwinSlide2 from '@/app/isunfa_retail_twin/2/page';
import RetailTwinSlide3 from '@/app/isunfa_retail_twin/3/page';
import RetailTwinSlide4 from '@/app/isunfa_retail_twin/4/page';
import RetailTwinSlide5 from '@/app/isunfa_retail_twin/5/page';
import RetailTwinSlide6 from '@/app/isunfa_retail_twin/6/page';
import RetailTwinSlide7 from '@/app/isunfa_retail_twin/7/page';
import RetailTwinSlide8 from '@/app/isunfa_retail_twin/8/page';
import RetailTwinSlide9 from '@/app/isunfa_retail_twin/9/page';
import RetailTwinSlide10 from '@/app/isunfa_retail_twin/10/page';
import RetailTwinSlide11 from '@/app/isunfa_retail_twin/11/page';
import RetailTwinSlide12 from '@/app/isunfa_retail_twin/12/page';
import RetailTwinSlide13 from '@/app/isunfa_retail_twin/13/page';
import RetailTwinSlide14 from '@/app/isunfa_retail_twin/14/page';
import RetailTwinSlide15 from '@/app/isunfa_retail_twin/15/page';
import RetailTwinSlide16 from '@/app/isunfa_retail_twin/16/page';
import RetailTwinSlide17 from '@/app/isunfa_retail_twin/17/page';
import RetailTwinSlide18 from '@/app/isunfa_retail_twin/18/page';
import RetailTwinSlide19 from '@/app/isunfa_retail_twin/19/page';
import RetailTwinSlide20 from '@/app/isunfa_retail_twin/20/page';
import RetailTwinSlide21 from '@/app/isunfa_retail_twin/21/page';
import RetailTwinSlide22 from '@/app/isunfa_retail_twin/22/page';

export default function IsunfaRetailTwinSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 22;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260826 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260826 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260826 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260826 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: RetailTwinSlide1,
    2: RetailTwinSlide2,
    3: RetailTwinSlide3,
    4: RetailTwinSlide4,
    5: RetailTwinSlide5,
    6: RetailTwinSlide6,
    7: RetailTwinSlide7,
    8: RetailTwinSlide8,
    9: RetailTwinSlide9,
    10: RetailTwinSlide10,
    11: RetailTwinSlide11,
    12: RetailTwinSlide12,
    13: RetailTwinSlide13,
    14: RetailTwinSlide14,
    15: RetailTwinSlide15,
    16: RetailTwinSlide16,
    17: RetailTwinSlide17,
    18: RetailTwinSlide18,
    19: RetailTwinSlide19,
    20: RetailTwinSlide20,
    21: RetailTwinSlide21,
    22: RetailTwinSlide22,
  };


  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：大型賣場數位孿生',
    2: '從「勺子咖啡店」說起',
    3: '破題：會計報表有什麼用？',
    4: '帳本裡的消費行為日誌',
    5: '技術主張與三層路線圖',
    6: 'L1：用交易明細長出賣場',
    7: 'L1：保久乳與痠痛貼布',
    8: 'L1：保久乳 × 痠痛貼布推理鏈',
    9: 'L1 天花板：帳本的四個盲區',
    10: 'L2：感知層架構與治理',
    11: 'L2：同一座賣場，這次有人',
    12: 'L2：六種高雄消費風格',
    13: 'L2：貨架前的 8 秒與情感分析',
    14: 'L2：把行為寫回會計科目',
    15: 'L3：周邊區域數據層',
    16: 'L3：模擬引擎與驗證',
    17: '情境 A：如果旁邊蓋了車站',
    18: '情境 B：如果導入機器人店員',
    19: '情境 C：颱風週與競業壓力測試',
    20: '技術堆疊與資料治理',
    21: '導入路線與我們需要的三件事',
    22: '結語：AI 擴大思考的維度',
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

  // Info: (20260826 - Luphia) Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">

      {/* Info: (20260826 - Luphia) Universal Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-slate-900/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-1.5 rounded-lg shadow-sm">
            <Boxes size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide">大型賣場數位孿生｜技術簡報</h1>
            <p className="text-xs text-slate-500">CAFECA × iSunFA · 帳本孿生 → 感知孿生 → 環境孿生 · 分析樣本：國內某全國性連鎖超市（高雄）</p>
          </div>
        </Link>

        {/* Info: (20260826 - Luphia) Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors text-slate-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-white/10 rounded-full disabled:opacity-30 transition-colors text-slate-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info: (20260826 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_retail_twin/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md text-xs font-medium transition-colors border border-white/10 text-slate-200">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isunfa_retail_twin/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-white/10 rounded-md text-slate-500 hover:text-slate-200 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260826 - Luphia) Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-slate-950 scroll-smooth"
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
                  className="bg-slate-900 shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-800 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-700/50 text-slate-400'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260826 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260826 - Luphia) Preview Area */}
          <div className="flex-1 bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-slate-900 shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-white/10"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260826 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-white/10 bg-slate-900 flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-white/10">
              <Grid size={12} />
              <span>Navigator</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-3 p-4">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
                <button
                  key={id}
                  onClick={() => goToSlide(id)}
                  aria-label={slideTitles[id] || `Slide ${id}`}
                  className={`flex-shrink-0 w-full rounded-lg border transition-all duration-200 relative group overflow-hidden text-left px-3 py-2.5 ${currentSlide === id
                    ? 'border-emerald-400/60 bg-emerald-400/10 shadow-md'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === id ? 'text-emerald-300' : 'text-slate-500'}`}>
                      #{id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium leading-tight ${currentSlide === id ? 'text-white' : 'text-slate-400'}`}>
                    {slideTitles[id] || `Slide ${id}`}
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
