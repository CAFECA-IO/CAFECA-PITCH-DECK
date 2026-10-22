'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CafecaTcSlide1 from '@/app/cafeca_teacher_copilot/1/page';
import CafecaTcSlide2 from '@/app/cafeca_teacher_copilot/2/page';
import CafecaTcSlide3 from '@/app/cafeca_teacher_copilot/3/page';
import CafecaTcSlide4 from '@/app/cafeca_teacher_copilot/4/page';
import CafecaTcSlide5 from '@/app/cafeca_teacher_copilot/5/page';
import CafecaTcSlide6 from '@/app/cafeca_teacher_copilot/6/page';
import CafecaTcSlide7 from '@/app/cafeca_teacher_copilot/7/page';
import CafecaTcSlide8 from '@/app/cafeca_teacher_copilot/8/page';
import CafecaTcSlide9 from '@/app/cafeca_teacher_copilot/9/page';
import CafecaTcSlide10 from '@/app/cafeca_teacher_copilot/10/page';
import CafecaTcSlide11 from '@/app/cafeca_teacher_copilot/11/page';
import CafecaTcSlide12 from '@/app/cafeca_teacher_copilot/12/page';

export default function CafecaTcSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260905 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260905 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260905 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260905 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: CafecaTcSlide1,
    2: CafecaTcSlide2,
    3: CafecaTcSlide3,
    4: CafecaTcSlide4,
    5: CafecaTcSlide5,
    6: CafecaTcSlide6,
    7: CafecaTcSlide7,
    8: CafecaTcSlide8,
    9: CafecaTcSlide9,
    10: CafecaTcSlide10,
    11: CafecaTcSlide11,
    12: CafecaTcSlide12,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：紅墨 RedInk——以遊戲化完成教育改革',
    2: '開場：百工百業 AI——政府建基盤、開源全民免費',
    3: '教育的三核心 vs 制度的錯位',
    4: '為什麼是遊戲：機制天生長在三核心上',
    5: '紅墨的世界：一頁世界觀',
    6: '三核心 × 遊戲機制',
    7: '應用情境：一個委託任務的一週旅程',
    8: 'AI 小幫手：老師的副手 × 學生的學伴',
    9: '引擎：紅墨 AI 產線',
    10: '四條不可讓步的設計底線',
    11: '請求：教育哲學的共同設計者',
    12: '未來：試點 → 共同提案 → 100 示範場域',
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

  // Info: (20260905 - Luphia) Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-[#F8F2E1] text-[#2C2C2C] overflow-hidden font-sans">

      {/* Info: (20260905 - Luphia) Universal Header */}
      <div className="h-14 border-b border-[#E6DCC3] flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-[#D61313] to-[#D5A316] p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-[#2C2C2C] tracking-wide">紅墨 RedInk——以遊戲化完成一次教育改革</h1>
            <p className="text-xs text-[#6F6259]">v4.0.0 • 以遊戲化完成教育改革 • 10 分鐘分享版</p>
          </div>
        </Link>

        {/* Info: (20260905 - Luphia) Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-[#6F6259] mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-[#F1E9D3] rounded-full disabled:opacity-30 transition-colors text-[#574C45]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-[#F1E9D3] rounded-full disabled:opacity-30 transition-colors text-[#574C45]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info: (20260905 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/cafeca_teacher_copilot/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-[#F8F2E1] rounded-md text-xs font-medium transition-colors border border-[#E6DCC3] text-[#4A403B] shadow-sm">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/cafeca_teacher_copilot/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-[#F1E9D3] rounded-md text-[#998A76] hover:text-[#574C45] transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260905 - Luphia) Mobile View */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-[#F8F2E1] scroll-smooth"
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
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-[#F1E9D3] animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-[#D61313] text-white shadow-lg' : 'bg-[#E6DCC3]/50 text-[#6F6259]'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260905 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260905 - Luphia) Preview Area */}
          <div className="flex-1 bg-[#F8F2E1] flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-[#E6DCC3]"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260905 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-[#E6DCC3] bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-[#6F6259] font-bold uppercase tracking-wider flex items-center gap-2 border-b border-[#E6DCC3]">
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
                    ? 'border-[#D61313] ring-2 ring-[#D61313]/20 shadow-md'
                    : 'border-[#E6DCC3] hover:border-[#CFC3A9] opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-[#F8F2E1]">
                    <div className="w-full h-full flex items-center justify-center bg-[#F1E9D3] text-[#998A76] text-xs font-bold font-sans">
                      紅墨
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-sm p-2 text-left border-t border-[#F1E9D3]">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-[#C01212]">#{id.toString().padStart(2, '0')}</span>
                      </div>
                      <div className="text-[10px] text-[#4A403B] font-medium truncate leading-tight">{slideTitles[id] || `Slide ${id}`}</div>
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
