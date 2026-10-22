'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import IsunfaPwp2Slide1 from '@/app/isunfa_public_welfare_project_2/1/page';
import IsunfaPwp2Slide2 from '@/app/isunfa_public_welfare_project_2/2/page';
import IsunfaPwp2Slide3 from '@/app/isunfa_public_welfare_project_2/3/page';
import IsunfaPwp2Slide4 from '@/app/isunfa_public_welfare_project_2/4/page';
import IsunfaPwp2Slide5 from '@/app/isunfa_public_welfare_project_2/5/page';
import IsunfaPwp2Slide6 from '@/app/isunfa_public_welfare_project_2/6/page';
import IsunfaPwp2Slide7 from '@/app/isunfa_public_welfare_project_2/7/page';
import IsunfaPwp2Slide8 from '@/app/isunfa_public_welfare_project_2/8/page';
import IsunfaPwp2Slide9 from '@/app/isunfa_public_welfare_project_2/9/page';
import IsunfaPwp2Slide10 from '@/app/isunfa_public_welfare_project_2/10/page';
import IsunfaPwp2Slide11 from '@/app/isunfa_public_welfare_project_2/11/page';
import IsunfaPwp2Slide12 from '@/app/isunfa_public_welfare_project_2/12/page';
import IsunfaPwp2Slide13 from '@/app/isunfa_public_welfare_project_2/13/page';
import IsunfaPwp2Slide14 from '@/app/isunfa_public_welfare_project_2/14/page';
import IsunfaPwp2Slide15 from '@/app/isunfa_public_welfare_project_2/15/page';
import IsunfaPwp2Slide16 from '@/app/isunfa_public_welfare_project_2/16/page';
import IsunfaPwp2Slide17 from '@/app/isunfa_public_welfare_project_2/17/page';
import IsunfaPwp2Slide18 from '@/app/isunfa_public_welfare_project_2/18/page';

export default function IsunfaPwp2SlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 18;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260904 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260904 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260904 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260904 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: IsunfaPwp2Slide1,
    2: IsunfaPwp2Slide2,
    3: IsunfaPwp2Slide3,
    4: IsunfaPwp2Slide4,
    5: IsunfaPwp2Slide5,
    6: IsunfaPwp2Slide6,
    7: IsunfaPwp2Slide7,
    8: IsunfaPwp2Slide8,
    9: IsunfaPwp2Slide9,
    10: IsunfaPwp2Slide10,
    11: IsunfaPwp2Slide11,
    12: IsunfaPwp2Slide12,
    13: IsunfaPwp2Slide13,
    14: IsunfaPwp2Slide14,
    15: IsunfaPwp2Slide15,
    16: IsunfaPwp2Slide16,
    17: IsunfaPwp2Slide17,
    18: IsunfaPwp2Slide18,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：愛智扶智能行政與志工輔助系統',
    2: '給唐氏症基金會的合作邀請',
    3: '提案摘要：五大審查構面',
    4: '公益服務痛點與問題定義',
    5: '計畫目標與推動模式',
    6: '核心技術架構',
    7: '模型訓練、資料治理與開源',
    8: '愛智扶四大 AI 應用服務模組',
    9: '應用情境：社工的一天',
    10: 'FAITH 模型：會計×社工雙專業',
    11: '場域規劃與生態系擴散',
    12: '工作規劃與里程碑',
    13: '專案預算分配規劃',
    14: '營運規劃與預期效益',
    15: '團隊組成與實績',
    16: '三方協作架構與權責分工',
    17: '執行規範與資安治理',
    18: '感謝聆聽與下一步',
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

  // Info: (20260904 - Luphia) Keyboard navigation
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

      {/* Info: (20260904 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800 tracking-wide">愛智扶——智能行政與志工輔助系統實證推動計畫</h1>
            <p className="text-xs text-slate-500">v1.0.0 • AI 生態系實證應用徵案（iSunFA × 唐氏症基金會）</p>
          </div>
        </Link>

        {/* Info: (20260904 - Luphia) Desktop Controls */}
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

        {/* Info: (20260904 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/isunfa_public_welfare_project_2/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-slate-50 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700 shadow-sm">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/isunfa_public_welfare_project_2/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260904 - Luphia) Mobile View */}
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

      {/* Info: (20260904 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260904 - Luphia) Preview Area */}
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

          {/* Info: (20260904 - Luphia) Side Navigator */}
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
