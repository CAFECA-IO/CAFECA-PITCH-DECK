'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Download, Grid, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import ChrysanthemumSlide1 from '@/app/chrysanthemum_and_sword/1/page';
import ChrysanthemumSlide2 from '@/app/chrysanthemum_and_sword/2/page';
import ChrysanthemumSlide3 from '@/app/chrysanthemum_and_sword/3/page';
import ChrysanthemumSlide4 from '@/app/chrysanthemum_and_sword/4/page';
import ChrysanthemumSlide5 from '@/app/chrysanthemum_and_sword/5/page';
import ChrysanthemumSlide6 from '@/app/chrysanthemum_and_sword/6/page';
import ChrysanthemumSlide7 from '@/app/chrysanthemum_and_sword/7/page';
import ChrysanthemumSlide8 from '@/app/chrysanthemum_and_sword/8/page';
import ChrysanthemumSlide9 from '@/app/chrysanthemum_and_sword/9/page';
import ChrysanthemumSlide10 from '@/app/chrysanthemum_and_sword/10/page';
import ChrysanthemumSlide11 from '@/app/chrysanthemum_and_sword/11/page';
import ChrysanthemumSlide12 from '@/app/chrysanthemum_and_sword/12/page';
import ChrysanthemumSlide13 from '@/app/chrysanthemum_and_sword/13/page';
import ChrysanthemumSlide14 from '@/app/chrysanthemum_and_sword/14/page';
import ChrysanthemumSlide15 from '@/app/chrysanthemum_and_sword/15/page';
import ChrysanthemumSlide16 from '@/app/chrysanthemum_and_sword/16/page';
import ChrysanthemumSlide17 from '@/app/chrysanthemum_and_sword/17/page';
import ChrysanthemumSlide18 from '@/app/chrysanthemum_and_sword/18/page';
import ChrysanthemumSlide19 from '@/app/chrysanthemum_and_sword/19/page';
import ChrysanthemumSlide20 from '@/app/chrysanthemum_and_sword/20/page';
import ChrysanthemumSlide21 from '@/app/chrysanthemum_and_sword/21/page';
import ChrysanthemumSlide22 from '@/app/chrysanthemum_and_sword/22/page';
import ChrysanthemumSlide23 from '@/app/chrysanthemum_and_sword/23/page';
export default function ChrysanthemumAndSwordSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 23;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Info: (20260830 - Luphia) 行動版縮放比例
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        setScale(Math.min(scaleX, scaleY));
      }

      if (window.innerWidth < 768) {
        setMobileScale(window.innerWidth / 1280);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: ChrysanthemumSlide1,
    2: ChrysanthemumSlide2,
    3: ChrysanthemumSlide3,
    4: ChrysanthemumSlide4,
    5: ChrysanthemumSlide5,
    6: ChrysanthemumSlide6,
    7: ChrysanthemumSlide7,
    8: ChrysanthemumSlide8,
    9: ChrysanthemumSlide9,
    10: ChrysanthemumSlide10,
    11: ChrysanthemumSlide11,
    12: ChrysanthemumSlide12,
    13: ChrysanthemumSlide13,
    14: ChrysanthemumSlide14,
    15: ChrysanthemumSlide15,
    16: ChrysanthemumSlide16,
    17: ChrysanthemumSlide17,
    18: ChrysanthemumSlide18,
    19: ChrysanthemumSlide19,
    20: ChrysanthemumSlide20,
    21: ChrysanthemumSlide21,
    22: ChrysanthemumSlide22,
    23: ChrysanthemumSlide23,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：菊與刀',
    2: '破題：七千萬人的性格報告',
    3: '謎題：愛菊花的人為何佩刀',
    4: '維度一：各得其所',
    5: '維度二：恩，一出生就欠的債',
    6: '維度三：義務與義理',
    7: '案例：忠臣藏四十七浪人',
    8: '維度四：恥感與罪感',
    9: '維度五：修養與無我',
    10: '維度六：U 型人生曲線',
    11: '結果卡：菊刀型人格',
    12: '真相：這份報告是誰要的',
    13: '方法：不能去現場的田野工作者',
    14: '豪賭：天皇存廢之爭',
    15: '應驗：1945.8.15 玉音放送',
    16: '身世：戰爭報告變成名著',
    17: '迴響：在日本比在美國更紅',
    18: '扮演：照著劇本演出的民族',
    19: '故事一：取樣裡的那個外人',
    20: '故事二：玉音放送前的那一夜',
    21: '故事三：書裡缺席的那些人',
    22: '故事四：1949 年的專號',
    23: '結語：一本錯得很有價值的書',
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

  // Info: (20260830 - Luphia) 鍵盤導覽
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-stone-100 text-stone-800 overflow-hidden font-sans">

      {/* Info: (20260830 - Luphia) 頂部工具列 */}
      <div className="h-14 border-b border-orange-200 flex items-center justify-between px-4 bg-white/90 backdrop-blur-md z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-gradient-to-br from-orange-600 to-amber-400 p-1.5 rounded-lg shadow-sm">
            <BookOpen size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-stone-900 tracking-wide">菊與刀｜說書簡報</h1>
            <p className="text-xs text-stone-500">Ruth Benedict, 1946 ・ 一場說書：故事、豪賭，與它留下的東西</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-stone-400 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            aria-label="上一頁"
            className="p-2 hover:bg-orange-100 rounded-full disabled:opacity-30 transition-colors text-stone-600"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            aria-label="下一頁"
            className="p-2 hover:bg-orange-100 rounded-full disabled:opacity-30 transition-colors text-stone-600"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/chrysanthemum_and_sword/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 rounded-md text-xs font-medium transition-colors border border-orange-200 text-orange-700">
              <Download size={14} />
              <span>PDF / PNGs</span>
            </button>
          </Link>
          <Link href={`/chrysanthemum_and_sword/${currentSlide}`} target="_blank" className="hidden md:block">
            <button aria-label="全螢幕檢視本頁" className="p-2 hover:bg-orange-100 rounded-md text-stone-400 hover:text-stone-700 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

      {/* Info: (20260830 - Luphia) 行動版垂直捲動 */}
      <div
        className="md:hidden flex-1 overflow-y-auto bg-stone-100 scroll-smooth"
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
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-orange-100 animate-pulse" />}
                  </div>
                </div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-orange-600 text-white shadow-lg' : 'bg-stone-300/70 text-stone-600'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info: (20260830 - Luphia) 桌面版版面 */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 bg-stone-200 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-orange-200"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          <div className="w-64 border-l border-orange-200 bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-stone-400 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-orange-100">
              <Grid size={12} />
              <span>Navigator</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-2.5 p-4">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
                <button
                  key={id}
                  onClick={() => goToSlide(id)}
                  aria-label={slideTitles[id] || `Slide ${id}`}
                  className={`flex-shrink-0 w-full rounded-lg border transition-all duration-200 relative group overflow-hidden text-left px-3 py-2.5 ${currentSlide === id
                    ? 'border-orange-400 bg-orange-50 shadow-md'
                    : 'border-stone-200 bg-white hover:border-orange-200'
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-mono font-bold ${currentSlide === id ? 'text-orange-600' : 'text-stone-400'}`}>
                      #{id.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className={`text-[11px] font-medium leading-tight ${currentSlide === id ? 'text-stone-900' : 'text-stone-500'}`}>
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
