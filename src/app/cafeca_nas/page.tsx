'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, HardDrive, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import NasSlide1 from '@/app/cafeca_nas/1/page';
import NasSlide2 from '@/app/cafeca_nas/2/page';
import NasSlide3 from '@/app/cafeca_nas/3/page';
import NasSlide4 from '@/app/cafeca_nas/4/page';
import NasSlide5 from '@/app/cafeca_nas/5/page';
import NasSlide6 from '@/app/cafeca_nas/6/page';
import NasSlide7 from '@/app/cafeca_nas/7/page';
import NasSlide8 from '@/app/cafeca_nas/8/page';
import NasSlide9 from '@/app/cafeca_nas/9/page';
import NasSlide10 from '@/app/cafeca_nas/10/page';
import NasSlide11 from '@/app/cafeca_nas/11/page';
import NasSlide12 from '@/app/cafeca_nas/12/page';
import NasSlide13 from '@/app/cafeca_nas/13/page';
import NasSlide14 from '@/app/cafeca_nas/14/page';
import NasSlide15 from '@/app/cafeca_nas/15/page';

export default function NasSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 15;
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
    1: NasSlide1,
    2: NasSlide2,
    3: NasSlide3,
    4: NasSlide4,
    5: NasSlide5,
    6: NasSlide6,
    7: NasSlide7,
    8: NasSlide8,
    9: NasSlide9,
    10: NasSlide10,
    11: NasSlide11,
    12: NasSlide12,
    13: NasSlide13,
    14: NasSlide14,
    15: NasSlide15,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：讓公司的檔案有一個家',
    2: '一頁定義：NAS 是什麼',
    3: '第一幕：檔案住在六個不同的地方',
    4: '散落的代價：看不見的帳單',
    5: '第二幕：六個痛點各對應一個內建功能',
    6: '效果一：大檔在內網跑，速度差一個量級',
    7: '效果二：管理面的改變比速度更值錢',
    8: '效果三：順便得到的六件事',
    9: '第三幕：與其他做法的差異比較',
    10: 'NAS vs 雲端硬碟：五年各花多少',
    11: '誠實的邊界：不能做什麼、會在哪出事',
    12: '不同價位的 NAS：三個等級、三種公司',
    13: '如果要做：20 人配置與四週節奏',
    14: '第四幕：誰適合，誰先別',
    15: '總結：六句話帶走這場分享',
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
    <div className="flex flex-col h-screen bg-slate-50 text-slate-800 overflow-hidden font-sans">

      {/* Info: (20260914 - Luphia) Universal Header */}
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white/80 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-lg shadow-sm">
            <HardDrive size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 tracking-wide">公司導入 NAS 分享——檔案有一個家</h1>
            <p className="text-xs text-slate-500">v1.0.0 • 內部分享簡報</p>
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

        {/* Info: (20260914 - Luphia) Actions */}
        <div className="flex items-center gap-3">
          <Link href="/cafeca_nas/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-800">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/cafeca_nas/${currentSlide}`} target="_blank" className="hidden md:block">
            <button className="p-2 hover:bg-slate-100 rounded-md text-slate-500 hover:text-slate-700 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260914 - Luphia) Mobile View */}
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
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-100 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-orange-500 text-white shadow-lg' : 'bg-white/80 text-slate-500 border border-slate-200'}`}>
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
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          {/* Info: (20260914 - Luphia) Side Navigator */}
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
                    ? 'border-emerald-400 ring-2 ring-emerald-400/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-slate-100">
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-bold font-mono">
                      NAS
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm p-2 text-left border-t border-slate-200">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-emerald-400">#{id.toString().padStart(2, '0')}</span>
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
