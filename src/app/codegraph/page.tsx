'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Network, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import CodeGraphSlide1 from '@/app/codegraph/1/page';
import CodeGraphSlide2 from '@/app/codegraph/2/page';
import CodeGraphSlide3 from '@/app/codegraph/3/page';
import CodeGraphSlide4 from '@/app/codegraph/4/page';
import CodeGraphSlide5 from '@/app/codegraph/5/page';
import CodeGraphSlide6 from '@/app/codegraph/6/page';
import CodeGraphSlide7 from '@/app/codegraph/7/page';
import CodeGraphSlide8 from '@/app/codegraph/8/page';
import CodeGraphSlide9 from '@/app/codegraph/9/page';
import CodeGraphSlide10 from '@/app/codegraph/10/page';
import CodeGraphSlide11 from '@/app/codegraph/11/page';
import CodeGraphSlide12 from '@/app/codegraph/12/page';
import CodeGraphSlide13 from '@/app/codegraph/13/page';
import CodeGraphSlide14 from '@/app/codegraph/14/page';
import CodeGraphSlide15 from '@/app/codegraph/15/page';
import CodeGraphSlide16 from '@/app/codegraph/16/page';

export default function CodeGraphSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 16;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260914 - Luphia) Dynamic scaling logic for mobile preview
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      // Info: (20260914 - Luphia) Desktop Preview Scaling Calc
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

      // Info: (20260914 - Luphia) Mobile List Scaling Calc
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

  // Info: (20260914 - Luphia) Slide Components Mapping
  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: CodeGraphSlide1,
    2: CodeGraphSlide2,
    3: CodeGraphSlide3,
    4: CodeGraphSlide4,
    5: CodeGraphSlide5,
    6: CodeGraphSlide6,
    7: CodeGraphSlide7,
    8: CodeGraphSlide8,
    9: CodeGraphSlide9,
    10: CodeGraphSlide10,
    11: CodeGraphSlide11,
    12: CodeGraphSlide12,
    13: CodeGraphSlide13,
    14: CodeGraphSlide14,
    15: CodeGraphSlide15,
    16: CodeGraphSlide16,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：CodeGraph 程式碼知識圖譜',
    2: '一頁定義：CodeGraph 是什麼',
    3: '第一幕：代理每次都從零認識你的專案',
    4: '三種直覺解法為何都繞不過去',
    5: '第二幕：三層架構——解析、圖譜、介面',
    6: '圖譜裡存的不是文字，是關係',
    7: '代理看到的四個工具',
    8: '索引最大的敵人是過期：三層同步',
    9: '第三幕：官方 benchmark 四個數字',
    10: '省下的 token 只是最容易量化的那項',
    11: '同一個任務的兩種走法',
    12: '第四幕：為什麼十年前沒有出現',
    13: '與傳統做法的差異比較',
    14: '誠實的邊界：它不能做什麼',
    15: '第五幕：誰該裝，誰可以先不用',
    16: '總結：六句話帶走這場簡報',
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

  // Info: (20260914 - Luphia) Keyboard navigation
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

      {/* Info: (20260914 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-cyan-400 to-violet-500 p-1.5 rounded-lg shadow-sm">
            <Network size={20} className="text-slate-900" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide">CodeGraph——讓 AI 別再逐檔翻書的程式碼知識圖譜</h1>
            <p className="text-xs text-slate-500">v1.0.0 • 技術導入評估簡報</p>
          </div>
        </Link>

        {/* Info: (20260914 - Luphia) Desktop Controls */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition-colors text-slate-400"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-slate-800 rounded-full disabled:opacity-30 transition-colors text-slate-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Info: (20260914 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/codegraph/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-md text-xs font-medium transition-colors border border-slate-700 text-slate-200">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/codegraph/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-800 rounded-md text-slate-500 hover:text-slate-300 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260914 - Luphia) Mobile View */}
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
                  className="bg-slate-950 shadow-xl rounded-lg"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-900 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-cyan-400 text-slate-900 shadow-lg' : 'bg-slate-800/60 text-slate-500'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260914 - Luphia) Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Info: (20260914 - Luphia) Preview Area */}
          <div className="flex-1 bg-slate-950 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-slate-950 shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-800"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260914 - Luphia) Side Navigator */}
          <div className="w-64 border-l border-slate-800 bg-slate-900 flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-800">
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
                    ? 'border-cyan-400 ring-2 ring-cyan-400/20 shadow-md'
                    : 'border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-slate-950">
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600 text-xs font-bold font-mono">
                      CodeGraph
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur-sm p-2 text-left border-t border-slate-800">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-cyan-400">#{id.toString().padStart(2, '0')}</span>
                      </div>
                      <div className="text-[10px] text-slate-300 font-medium truncate leading-tight">{slideTitles[id] || `Slide ${id}`}</div>
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
