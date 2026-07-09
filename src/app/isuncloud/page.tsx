'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Grid, Zap } from 'lucide-react';
import Link from 'next/link';

// Slide Components
import Slide1 from '@/app/isuncloud/1/page';
import Slide2 from '@/app/isuncloud/2/page';
import Slide3 from '@/app/isuncloud/3/page';
import Slide4 from '@/app/isuncloud/4/page';
import Slide5 from '@/app/isuncloud/5/page';
import Slide6 from '@/app/isuncloud/6/page';
import Slide7 from '@/app/isuncloud/7/page';
import Slide8 from '@/app/isuncloud/8/page';
import Slide9 from '@/app/isuncloud/9/page';
import Slide10 from '@/app/isuncloud/10/page';
import Slide11 from '@/app/isuncloud/11/page';
import Slide12 from '@/app/isuncloud/12/page';
import Slide13 from '@/app/isuncloud/13/page';
import Slide14 from '@/app/isuncloud/14/page';
import Slide15 from '@/app/isuncloud/15/page';
import Slide16 from '@/app/isuncloud/16/page';
import Slide17 from '@/app/isuncloud/17/page';
import Slide18 from '@/app/isuncloud/18/page';

export default function IsunCloudSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 18;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

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
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: Slide1, 2: Slide2, 3: Slide3, 4: Slide4, 5: Slide5, 6: Slide6, 7: Slide7, 8: Slide8,
    9: Slide9, 10: Slide10, 11: Slide11, 12: Slide12, 13: Slide13, 14: Slide14, 15: Slide15, 16: Slide16, 17: Slide17, 18: Slide18
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '封面：iSunCloud AI BOX',
    2: '市場痛點：隱私與效能的矛盾',
    3: '解決方案：Hybrid AI 混合雲平台',
    4: '模型訂閱服務：SOTA 模型即時同步',
    5: '混合雲架構：在地推理，遠端強化',
    6: 'iSunCloud OS：安全與效能兼具',
    7: '強大在地算力：x86/Arm 與 CUDA',
    8: '遠端 H100 集群：無限算力擴充',
    9: '數據賦能：本地運行數據的價值',
    10: '週期性強化訓練：模型持續進化',
    11: 'AI 實作模擬：智能碳盤查助手',
    12: '個人化 AI：越用越懂您的業務',
    13: '百工百業專家模型：智能調度與進化',
    14: 'AIPP Store：AI Agent 商城',
    15: 'AI 教練：引導模型訓練與部署',
    16: '零信任安全：本地數據絕對私有',
    17: '投資回報分析：定價與價值',
    18: '行動呼籲：開啟 AI 轉型之旅',
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide(c => (c < totalSlides ? c + 1 : c));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(c => (c > 1 ? c - 1 : c));
  }, []);

  const goToSlide = (id: number) => setCurrentSlide(id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-slate-100 text-slate-800 overflow-hidden font-sans">
      {/* Header */}
      <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 bg-white/80 backdrop-blur-xl z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
            <Zap size={20} className="text-white fill-current" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-slate-800/90">iSunCloud AI BOX - Hybrid AI Platform</h1>
            <p className="text-[10px] text-slate-800/40 uppercase tracking-widest font-bold">Sales Pitch Deck v1.3.0</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
            <button onClick={prevSlide} disabled={currentSlide === 1} aria-label="Previous Slide" className="hover:text-orange-600 text-slate-400 disabled:opacity-20 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-mono w-12 text-center text-orange-600 font-bold">
              {currentSlide.toString().padStart(2, '0')} / {totalSlides}
            </span>
            <button onClick={nextSlide} disabled={currentSlide === totalSlides} aria-label="Next Slide" className="hover:text-orange-600 text-slate-400 disabled:opacity-20 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
             <Link href="/isuncloud/print" target="_blank" aria-label="Download PDF">
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-orange-600/20">
                    <Download size={14} />
                    <span>Download PDF</span>
                </button>
             </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 bg-slate-50 flex items-center justify-center p-12 relative" ref={containerRef}>
          <div
            style={{
              transform: `scale(${scale})`,
              width: 1280,
              height: 720,
              transformOrigin: 'center center'
            }}
            className="bg-white shadow-[0_0_100px_rgba(0,0,0,0.05)] flex-shrink-0 relative overflow-hidden rounded-sm ring-1 ring-slate-200"
          >
            <CurrentSlideComponent />
          </div>
        </div>

        {/* Side Navigator */}
        <div className="w-72 border-l border-slate-200 bg-white/80 backdrop-blur-xl flex flex-col flex-shrink-0">
          <div className="px-6 py-4 text-[10px] text-slate-800/40 font-bold uppercase tracking-[0.3em] flex items-center gap-2 border-b border-slate-200">
            <Grid size={12} />
            <span>Deck Navigator</span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
              <button
                key={id}
                onClick={() => goToSlide(id)}
                aria-label={`Go to slide ${id}: ${slideTitles[id]}`}
                className={`w-full text-left rounded-2xl transition-all duration-300 group overflow-hidden border ${
                  currentSlide === id 
                    ? 'bg-orange-600/10 border-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.08)]' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-800/5 uppercase tracking-widest group-hover:scale-110 transition-transform">
                      Slide {id}
                   </div>
                   <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm p-3 border-t border-slate-200">
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[10px] font-black ${currentSlide === id ? 'text-orange-600' : 'text-slate-800/20'}`}>
                          #{id.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-800/60 font-bold truncate leading-tight">
                        {slideTitles[id]}
                      </div>
                   </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
