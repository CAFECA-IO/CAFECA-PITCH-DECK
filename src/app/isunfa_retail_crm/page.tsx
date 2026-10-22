'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Users, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import RetailCrmSlide1 from '@/app/isunfa_retail_crm/1/page';
import RetailCrmSlide2 from '@/app/isunfa_retail_crm/2/page';
import RetailCrmSlide3 from '@/app/isunfa_retail_crm/3/page';
import RetailCrmSlide4 from '@/app/isunfa_retail_crm/4/page';
import RetailCrmSlide5 from '@/app/isunfa_retail_crm/5/page';
import RetailCrmSlide6 from '@/app/isunfa_retail_crm/6/page';
import RetailCrmSlide7 from '@/app/isunfa_retail_crm/7/page';
import RetailCrmSlide8 from '@/app/isunfa_retail_crm/8/page';
import RetailCrmSlide9 from '@/app/isunfa_retail_crm/9/page';
import RetailCrmSlide10 from '@/app/isunfa_retail_crm/10/page';
import RetailCrmSlide11 from '@/app/isunfa_retail_crm/11/page';
import RetailCrmSlide12 from '@/app/isunfa_retail_crm/12/page';
import RetailCrmSlide13 from '@/app/isunfa_retail_crm/13/page';
import RetailCrmSlide14 from '@/app/isunfa_retail_crm/14/page';
import RetailCrmSlide15 from '@/app/isunfa_retail_crm/15/page';
import RetailCrmSlide16 from '@/app/isunfa_retail_crm/16/page';
import RetailCrmSlide17 from '@/app/isunfa_retail_crm/17/page';
import RetailCrmSlide18 from '@/app/isunfa_retail_crm/18/page';
import RetailCrmSlide19 from '@/app/isunfa_retail_crm/19/page';
import RetailCrmSlide20 from '@/app/isunfa_retail_crm/20/page';

export default function IsunfaRetailCrmSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260916 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260916 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260916 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260916 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: RetailCrmSlide1,
    2: RetailCrmSlide2,
    3: RetailCrmSlide3,
    4: RetailCrmSlide4,
    5: RetailCrmSlide5,
    6: RetailCrmSlide6,
    7: RetailCrmSlide7,
    8: RetailCrmSlide8,
    9: RetailCrmSlide9,
    10: RetailCrmSlide10,
    11: RetailCrmSlide11,
    12: RetailCrmSlide12,
    13: RetailCrmSlide13,
    14: RetailCrmSlide14,
    15: RetailCrmSlide15,
    16: RetailCrmSlide16,
    17: RetailCrmSlide17,
    18: RetailCrmSlide18,
    19: RetailCrmSlide19,
    20: RetailCrmSlide20,
  };


  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：零售場域智能 CRM',
    2: '破題：最早的 CRM 是一個老闆',
    3: '零售 CRM 的三個斷點',
    4: '你的客戶資料早就存在',
    5: '認識客戶的三層架構',
    6: 'L1：還原客戶走過的路',
    7: 'L1：六種零售客群',
    8: 'L1：客群的購物組合',
    9: 'L1：一條規則拆出一個客戶',
    10: 'L2：場域感知與隱私治理',
    11: 'L2：店內行為地圖',
    12: 'L2：貨架前的 8 秒',
    13: '客戶價值分層與 CLV',
    14: '五條自動化客戶旅程',
    15: '線上推播 × 線下端架',
    16: 'L3：情境模擬（車站）',
    17: '把客戶關係寫回會計科目',
    18: '技術堆疊與資料治理',
    19: '導入路線與需要的三件事',
    20: '結語：擴大四個維度 + QR',
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

  // Info: (20260916 - Luphia) Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-slate-100 text-slate-800 overflow-hidden font-sans">

      {/* Info: (20260916 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white/90 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-600 to-amber-500 p-1.5 rounded-lg shadow-sm">
            <Users size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 tracking-wide">iSunFA 零售場域智能客戶關係管理</h1>
            <p className="text-xs text-slate-500">交易明細 → 客群輪廓 → 場域行為 → 自動經營 · isunfa.com</p>
          </div>
        </Link>

        {/* Info: (20260916 - Luphia) Desktop Controls */}
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

        {/* Info: (20260916 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_retail_crm/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700 shadow-sm">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isunfa_retail_crm/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260916 - Luphia) Mobile View */}
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
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-200 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-orange-600 text-white shadow-lg' : 'bg-slate-300/70 text-slate-600'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260916 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260916 - Luphia) Preview Area */}
          <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260916 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-slate-200 bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-200">
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
                    ? 'border-orange-400 bg-orange-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === id ? 'text-orange-600' : 'text-slate-400'}`}>
                      #{id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium leading-tight ${currentSlide === id ? 'text-slate-900' : 'text-slate-500'}`}>
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
