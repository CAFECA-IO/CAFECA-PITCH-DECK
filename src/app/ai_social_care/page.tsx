'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import AiSocialCareSlide1 from '@/app/ai_social_care/1/page';
import AiSocialCareSlide2 from '@/app/ai_social_care/2/page';
import AiSocialCareSlide3 from '@/app/ai_social_care/3/page';
import AiSocialCareSlide4 from '@/app/ai_social_care/4/page';
import AiSocialCareSlide5 from '@/app/ai_social_care/5/page';
import AiSocialCareSlide6 from '@/app/ai_social_care/6/page';
import AiSocialCareSlide7 from '@/app/ai_social_care/7/page';
import AiSocialCareSlide8 from '@/app/ai_social_care/8/page';
import AiSocialCareSlide9 from '@/app/ai_social_care/9/page';
import AiSocialCareSlide10 from '@/app/ai_social_care/10/page';
import AiSocialCareSlide11 from '@/app/ai_social_care/11/page';
import AiSocialCareSlide12 from '@/app/ai_social_care/12/page';
import AiSocialCareSlide13 from '@/app/ai_social_care/13/page';

export default function AiSocialCareSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 13;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20261005 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20261005 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20261005 - Luphia) Mobile List Scaling Calc
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

  // Info: (20261005 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: AiSocialCareSlide1,
    2: AiSocialCareSlide2,
    3: AiSocialCareSlide3,
    4: AiSocialCareSlide4,
    5: AiSocialCareSlide5,
    6: AiSocialCareSlide6,
    7: AiSocialCareSlide7,
    8: AiSocialCareSlide8,
    9: AiSocialCareSlide9,
    10: AiSocialCareSlide10,
    11: AiSocialCareSlide11,
    12: AiSocialCareSlide12,
    13: AiSocialCareSlide13,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：愛智扶 AI SocialCare',
    2: '需求訪談與問題定義',
    3: '解決方案總覽：三層架構與四代理人',
    4: '核心技術規劃與技術可行性',
    5: 'AI 應用系統開發與產品化能力',
    6: 'AI 場域規劃與生態系擴散能力',
    7: '營運規劃與預期效益',
    8: '計畫效益與 iSunCloud 算力共享網路',
    9: '預算編列與執行期程',
    10: '計畫執行甘特圖',
    11: '預算分配細項表',
    12: '團隊組成分工與過往實績',
    13: '結語：讓社工把時間還給需要他的人',
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

  // Info: (20261005 - Luphia) Keyboard navigation
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

      {/* Info: (20261005 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 tracking-wide">愛智扶 AI SocialCare — 數位產業署評選會簡報</h1>
            <p className="text-xs text-slate-500">13 頁 • 115.10.06 評選會（iSunFA × 唐氏症基金會）</p>
          </div>
        </Link>

        {/* Info: (20261005 - Luphia) Desktop Controls */}
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

        {/* Info: (20261005 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/ai_social_care/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700 shadow-sm">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/ai_social_care/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20261005 - Luphia) Mobile View */}
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

      {/* Info: (20261005 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20261005 - Luphia) Preview Area */}
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

          {/* Info: (20261005 - Luphia) Side Navigator */}
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
                      愛智扶
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
