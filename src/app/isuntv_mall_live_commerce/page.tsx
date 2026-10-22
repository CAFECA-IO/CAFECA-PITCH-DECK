'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Radio, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import MallLiveSlide1 from '@/app/isuntv_mall_live_commerce/1/page';
import MallLiveSlide2 from '@/app/isuntv_mall_live_commerce/2/page';
import MallLiveSlide3 from '@/app/isuntv_mall_live_commerce/3/page';
import MallLiveSlide4 from '@/app/isuntv_mall_live_commerce/4/page';
import MallLiveSlide5 from '@/app/isuntv_mall_live_commerce/5/page';
import MallLiveSlide6 from '@/app/isuntv_mall_live_commerce/6/page';
import MallLiveSlide7 from '@/app/isuntv_mall_live_commerce/7/page';
import MallLiveSlide8 from '@/app/isuntv_mall_live_commerce/8/page';
import MallLiveSlide9 from '@/app/isuntv_mall_live_commerce/9/page';
import MallLiveSlide10 from '@/app/isuntv_mall_live_commerce/10/page';
import MallLiveSlide11 from '@/app/isuntv_mall_live_commerce/11/page';
import MallLiveSlide12 from '@/app/isuntv_mall_live_commerce/12/page';
import MallLiveSlide13 from '@/app/isuntv_mall_live_commerce/13/page';
import MallLiveSlide14 from '@/app/isuntv_mall_live_commerce/14/page';
import MallLiveSlide15 from '@/app/isuntv_mall_live_commerce/15/page';
import MallLiveSlide16 from '@/app/isuntv_mall_live_commerce/16/page';
import MallLiveSlide17 from '@/app/isuntv_mall_live_commerce/17/page';
import MallLiveSlide18 from '@/app/isuntv_mall_live_commerce/18/page';
import MallLiveSlide19 from '@/app/isuntv_mall_live_commerce/19/page';
import MallLiveSlide20 from '@/app/isuntv_mall_live_commerce/20/page';

export default function IsuntvMallLiveCommerceSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 20;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260902 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260902 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260902 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260902 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: MallLiveSlide1,
    2: MallLiveSlide2,
    3: MallLiveSlide3,
    4: MallLiveSlide4,
    5: MallLiveSlide5,
    6: MallLiveSlide6,
    7: MallLiveSlide7,
    8: MallLiveSlide8,
    9: MallLiveSlide9,
    10: MallLiveSlide10,
    11: MallLiveSlide11,
    12: MallLiveSlide12,
    13: MallLiveSlide13,
    14: MallLiveSlide14,
    15: MallLiveSlide15,
    16: MallLiveSlide16,
    17: MallLiveSlide17,
    18: MallLiveSlide18,
    19: MallLiveSlide19,
    20: MallLiveSlide20,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：直播電商 × 財務結算並進',
    2: '三條設計公理',
    3: '系統全景架構',
    4: '商品三價體系與成本價紅線',
    5: '一鍵上架與庫存雙向同步',
    6: '三路訂單自動歸集',
    7: '供應商管理與多供應商拆單',
    8: '供應商結算引擎',
    9: '主播分級與分潤',
    10: '團隊直播間：自營與自由排播',
    11: '頻道與節目表（EPG）',
    12: '銷售數據分析（日週月季年）',
    13: '觀看與消費統計（雙層）',
    14: '業務帳 vs 資金帳對帳',
    15: '發票、多幣別與匯出',
    16: '標準化開放 API',
    17: '日誌、告警、報表體系',
    18: '三條紅線',
    19: '三階段落地路線',
    20: '結語與 Next Steps',
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

  // Info: (20260902 - Luphia) Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-[#0c0712] text-slate-200 overflow-hidden font-sans">

      {/* Info: (20260902 - Luphia) Universal Header */}
      <div className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-[#160f28]/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-rose-500 to-violet-500 p-1.5 rounded-lg shadow-sm">
            <Radio size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide">iSunTVMall 直播電商｜功能設計簡報</h1>
            <p className="text-xs text-slate-500">直播電商 × 財務結算並進 · 財務系統為唯一數據主源頭 · Shopify 只做前台銷售</p>
          </div>
        </Link>

        {/* Info: (20260902 - Luphia) Desktop Controls */}
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

        {/* Info: (20260902 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isuntv_mall_live_commerce/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md text-xs font-medium transition-colors border border-white/10 text-slate-200">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isuntv_mall_live_commerce/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-white/10 rounded-md text-slate-500 hover:text-slate-200 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260902 - Luphia) Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-[#0c0712] scroll-smooth"
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
                  className="bg-[#160f28] shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-[#1e1733] animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-rose-500 text-white shadow-lg' : 'bg-[#2a2140]/70 text-slate-400'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260902 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260902 - Luphia) Preview Area */}
          <div className="flex-1 bg-[#0c0712] flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-[#160f28] shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-white/10"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260902 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-white/10 bg-[#160f28] flex flex-col flex-shrink-0">
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
                    ? 'border-rose-400/60 bg-rose-400/10 shadow-md'
                    : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === id ? 'text-rose-300' : 'text-slate-500'}`}>
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
