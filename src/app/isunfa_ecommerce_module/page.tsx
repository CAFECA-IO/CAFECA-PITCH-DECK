'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Blocks, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import EcModuleSlide1 from '@/app/isunfa_ecommerce_module/1/page';
import EcModuleSlide2 from '@/app/isunfa_ecommerce_module/2/page';
import EcModuleSlide3 from '@/app/isunfa_ecommerce_module/3/page';
import EcModuleSlide4 from '@/app/isunfa_ecommerce_module/4/page';
import EcModuleSlide5 from '@/app/isunfa_ecommerce_module/5/page';
import EcModuleSlide6 from '@/app/isunfa_ecommerce_module/6/page';
import EcModuleSlide7 from '@/app/isunfa_ecommerce_module/7/page';
import EcModuleSlide8 from '@/app/isunfa_ecommerce_module/8/page';
import EcModuleSlide9 from '@/app/isunfa_ecommerce_module/9/page';
import EcModuleSlide10 from '@/app/isunfa_ecommerce_module/10/page';
import EcModuleSlide11 from '@/app/isunfa_ecommerce_module/11/page';
import EcModuleSlide12 from '@/app/isunfa_ecommerce_module/12/page';
import EcModuleSlide13 from '@/app/isunfa_ecommerce_module/13/page';
import EcModuleSlide14 from '@/app/isunfa_ecommerce_module/14/page';
import EcModuleSlide15 from '@/app/isunfa_ecommerce_module/15/page';
import EcModuleSlide16 from '@/app/isunfa_ecommerce_module/16/page';
import EcModuleSlide17 from '@/app/isunfa_ecommerce_module/17/page';
import EcModuleSlide18 from '@/app/isunfa_ecommerce_module/18/page';
import EcModuleSlide19 from '@/app/isunfa_ecommerce_module/19/page';
import EcModuleSlide20 from '@/app/isunfa_ecommerce_module/20/page';
import EcModuleSlide21 from '@/app/isunfa_ecommerce_module/21/page';

export default function IsunfaEcommerceModuleSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 21;
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
    1: EcModuleSlide1,
    2: EcModuleSlide2,
    3: EcModuleSlide3,
    4: EcModuleSlide4,
    5: EcModuleSlide5,
    6: EcModuleSlide6,
    7: EcModuleSlide7,
    8: EcModuleSlide8,
    9: EcModuleSlide9,
    10: EcModuleSlide10,
    11: EcModuleSlide11,
    12: EcModuleSlide12,
    13: EcModuleSlide13,
    14: EcModuleSlide14,
    15: EcModuleSlide15,
    16: EcModuleSlide16,
    17: EcModuleSlide17,
    18: EcModuleSlide18,
    19: EcModuleSlide19,
    20: EcModuleSlide20,
    21: EcModuleSlide21,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：電商整合模組 · 一店一帳本',
    2: '三條設計公理',
    3: '模組全景架構',
    4: '多商店管理 × 獨立帳本',
    5: '商品三價體系與成本價紅線',
    6: '一鍵上架與庫存雙向同步',
    7: '多平台訂單自動歸集',
    8: '供應商管理與多供應商拆單',
    9: '供應商結算引擎',
    10: '主播 / KOL 分級分潤',
    11: '團隊直播間：自營與自由排播',
    12: '頻道與節目表（EPG）',
    13: '銷售數據分析（日週月季年）',
    14: '觀看與消費統計（雙層）',
    15: '業務帳 vs 資金帳對帳',
    16: '發票、多幣別與匯出',
    17: '統一串接規格 · 開放 API',
    18: '日誌、告警、報表體系',
    19: '三條紅線',
    20: '三階段落地路線',
    21: '結語與 Next Steps',
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
    <div className="flex flex-col h-screen bg-[#fffdfa] text-slate-700 overflow-hidden font-sans">

      {/* Info: (20260902 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-lg shadow-sm">
            <Blocks size={20} className="text-slate-900" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 tracking-wide">iSunFA 電商整合模組｜功能設計簡報</h1>
            <p className="text-xs text-slate-500">統一串接規格 · 管理各平台商店（含 Shopify）· 每間商店建立獨立帳本</p>
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

        {/* Info: (20260902 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_ecommerce_module/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-100 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isunfa_ecommerce_module/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-500 hover:text-slate-700 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260902 - Luphia) Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-[#fffdfa] scroll-smooth"
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
                  className="bg-slate-50 shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-100 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-400/70 text-slate-500'}`}>
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
          <div className="flex-1 bg-[#fffdfa] flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-slate-50 shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260902 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-slate-200 bg-slate-50 flex flex-col flex-shrink-0">
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
                    ? 'border-orange-300 bg-orange-50 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === id ? 'text-orange-600' : 'text-slate-500'}`}>
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
