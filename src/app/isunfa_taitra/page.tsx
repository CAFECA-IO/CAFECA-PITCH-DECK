'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, MonitorPlay, Grid, Maximize2, Download } from 'lucide-react';
import Link from 'next/link';

import TaitraSlide1 from '@/app/isunfa_taitra/1/page';
import TaitraSlide2 from '@/app/isunfa_taitra/2/page';
import TaitraSlide3 from '@/app/isunfa_taitra/3/page';
import TaitraSlide4 from '@/app/isunfa_taitra/4/page';
import TaitraSlide5 from '@/app/isunfa_taitra/5/page';
import TaitraSlide6 from '@/app/isunfa_taitra/6/page';
import TaitraSlide7 from '@/app/isunfa_taitra/7/page';
import TaitraSlide8 from '@/app/isunfa_taitra/8/page';
import TaitraSlide9 from '@/app/isunfa_taitra/9/page';
import TaitraSlide10 from '@/app/isunfa_taitra/10/page';
import TaitraSlide11 from '@/app/isunfa_taitra/11/page';
import TaitraSlide12 from '@/app/isunfa_taitra/12/page';
import TaitraSlide13 from '@/app/isunfa_taitra/13/page';
import TaitraSlide14 from '@/app/isunfa_taitra/14/page';
import TaitraSlide15 from '@/app/isunfa_taitra/15/page';
import TaitraSlide16 from '@/app/isunfa_taitra/16/page';
import TaitraSlide17 from '@/app/isunfa_taitra/17/page';
import TaitraSlide18 from '@/app/isunfa_taitra/18/page';
import TaitraSlide19 from '@/app/isunfa_taitra/19/page';
import TaitraSlide20 from '@/app/isunfa_taitra/20/page';
import TaitraSlide21 from '@/app/isunfa_taitra/21/page';
import TaitraSlide22 from '@/app/isunfa_taitra/22/page';
import TaitraSlide23 from '@/app/isunfa_taitra/23/page';
import TaitraSlide24 from '@/app/isunfa_taitra/24/page';
import TaitraSlide25 from '@/app/isunfa_taitra/25/page';
import TaitraSlide26 from '@/app/isunfa_taitra/26/page';
import TaitraSlide27 from '@/app/isunfa_taitra/27/page';
import TaitraSlide28 from '@/app/isunfa_taitra/28/page';
import TaitraSlide29 from '@/app/isunfa_taitra/29/page';
import TaitraSlide30 from '@/app/isunfa_taitra/30/page';
import TaitraSlide31 from '@/app/isunfa_taitra/31/page';
import TaitraSlide32 from '@/app/isunfa_taitra/32/page';
import TaitraSlide33 from '@/app/isunfa_taitra/33/page';
import TaitraSlide34 from '@/app/isunfa_taitra/34/page';

export default function TaitraSlideBrowser() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 34;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [mobileScale, setMobileScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1280;
        const targetHeight = 720;
        const scaleX = width / targetWidth;
        const scaleY = height / targetHeight;
        const newScale = Math.min(scaleX, scaleY);
        setScale(newScale);
      }

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

  const SlideComponents: { [key: number]: React.ComponentType } = {
    1: TaitraSlide1,
    2: TaitraSlide2,
    3: TaitraSlide3,
    4: TaitraSlide4,
    5: TaitraSlide5,
    6: TaitraSlide6,
    7: TaitraSlide7,
    8: TaitraSlide8,
    9: TaitraSlide9,
    10: TaitraSlide10,
    11: TaitraSlide11,
    12: TaitraSlide12,
    13: TaitraSlide13,
    14: TaitraSlide14,
    15: TaitraSlide15,
    16: TaitraSlide16,
    17: TaitraSlide17,
    18: TaitraSlide18,
    19: TaitraSlide19,
    20: TaitraSlide20,
    21: TaitraSlide21,
    22: TaitraSlide22,
    23: TaitraSlide23,
    24: TaitraSlide24,
    25: TaitraSlide25,
    26: TaitraSlide26,
    27: TaitraSlide27,
    28: TaitraSlide28,
    29: TaitraSlide29,
    30: TaitraSlide30,
    31: TaitraSlide31,
    32: TaitraSlide32,
    33: TaitraSlide33,
    34: TaitraSlide34,
  };

  const CurrentSlideComponent = SlideComponents[currentSlide];

  const slideTitles: { [key: number]: string } = {
    1: '從記帳到記碳－迎戰碳費與 CBAM 的 AI 突圍術',
    2: '課程收穫：你將學到什麼',
    3: '背景痛點 (1/2)：國際 CBAM 關稅與出口綠色壁壘',
    4: '背景痛點 (2/2)：國內碳費徵收與供應鏈淨零壓力',
    5: 'AI 適配能力：從資料整理到質性分析',
    6: '碳足跡意義 (1/3)：什麼是產品碳足跡 (CFP)？',
    7: '碳足跡意義 (2/3)：供應鏈綠色通行證與訂單優勢',
    8: '碳足跡意義 (3/3)：生命週期評估 (LCA) 對企業的價值',
    9: 'ISO 14067 步驟 (1/4)：目的與範圍界定 (Goal & Scope)',
    10: 'ISO 14067 步驟 (2/4)：生命週期清查分析 (LCI)',
    11: 'ISO 14067 步驟 (3/4)：生命週期影響評估與解釋 (LCIA)',
    12: 'ISO 14067 步驟 (4/4)：碳足跡報告書撰寫與第三方查證',
    13: '核心解法：財務與碳排雙軌並進的 AI 引擎',
    14: '財碳轉型挑戰：AI 導入實務所面臨的三大鴻溝',
    15: '克服幻覺的底座：駕馭工程 (Harness Engineering)',
    16: '步驟一實作：多模態 AI 憑證自動解析與 OCR Prompt',
    17: '步驟一困難：手寫憑證、折損模糊單據的識別瓶頸',
    18: '步驟一幻覺：數值與單位虛構問題及其物理防禦',
    19: '步驟一檢核：結構化知識注入與借貸平衡自評 Prompt',
    20: '步驟一複核：信心度評估與微型任務重做機制',
    21: '步驟二實作：RAG 向量檢索與碳係數自動配對 Prompt',
    22: '步驟二困難：多語意同義詞轉換與巨量資料庫檢索限制',
    23: '步驟二幻覺：綠色漂洗 (低估碳係數) 問題與防護',
    24: '步驟二檢核：碳係數配對信心度評估與人機協同 (HITL)',
    25: '步驟三實作：一鍵生成符合 ISO 14067 報告書 Prompt',
    26: '步驟三困難：長文本報告前後文不一致與格式跑版問題',
    27: '步驟三幻覺：指標衝突、數據漏列與重複計算防範',
    28: '步驟三檢核：跨表單程式化勾稽稽核與 5% 實質偏差驗證',
    29: '步驟三複核：碳足跡計算邏輯與證據鏈審計軌跡',
    30: '終極產出：接軌國際的數位產品護照 (DPP) 自動生成',
    31: '願景與結語：AI 賦能，化碳焦慮為綠色競爭力',
    32: '專屬推薦與 CTA：立即體驗 iSunFA AI 碳會計服務',
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white z-20 flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-emerald-500 p-1.5 rounded-lg shadow-sm">
            <MonitorPlay size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-sky-950">iSunFA</h1>
            <p className="text-xs text-slate-500">v1.0.0 • 2026 iSunFA</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 mr-2">
            {currentSlide} / {totalSlides}
          </span>
          <button
            aria-label="Previous Slide"
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next Slide"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 hover:bg-slate-100 rounded-full disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/isunfa_taitra/print" target="_blank" className="hidden md:block">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-xs font-medium transition-colors border border-slate-200 text-slate-700">
              <Download size={14} />
              <span>PDF</span>
            </button>
          </Link>
          <Link href={`/isunfa_taitra/${currentSlide}`} target="_blank" className="hidden md:block">
            <button aria-label="Maximize Presentation" className="p-2 hover:bg-slate-100 rounded-md text-slate-400 hover:text-slate-600 transition-colors">
              <Maximize2 size={18} />
            </button>
          </Link>
        </div>
      </div>

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
            const opacityClass = distance === 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95 blur-[1px]';
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
                  className="bg-white shadow-xl rounded-lg border border-slate-200"
                >
                  <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                    {shouldRender ? <Component /> : <div className="w-full h-full bg-slate-100 animate-pulse" />}
                  </div>
                </div>

                <div className={`absolute top-2 right-2 px-2 py-1 rounded-full z-10 pointer-events-none transition-opacity duration-300 ${distance === 0 ? 'bg-emerald-500 text-white shadow-md' : 'bg-white/80 text-slate-500 backdrop-blur-sm border border-slate-200'}`}>
                  <span className="text-[10px] font-bold">{id}</span>
                  <span className="text-[8px] opacity-80">/{totalSlides}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex flex-1 overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 bg-slate-100 flex items-center justify-center p-8 relative overflow-hidden" ref={containerRef}>
            <div
              style={{
                transform: `scale(${scale})`,
                width: 1280,
                height: 720,
                transformOrigin: 'center center'
              }}
              className="bg-white shadow-2xl flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200 rounded-xl"
            >
              <div className="w-full h-full [&>div]:!min-h-0 [&>div]:!h-full [&>div]:!bg-transparent [&>div]:!p-0">
                <CurrentSlideComponent />
              </div>
            </div>
          </div>

          <div className="w-64 border-l border-slate-200 bg-white flex flex-col flex-shrink-0">
            <div className="px-4 py-3 text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-100">
              <Grid size={12} />
              <span>Navigator</span>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 scrollbar-hide">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((id) => (
                <button
                  key={id}
                  aria-label={`Go to slide ${id}`}
                  onClick={() => goToSlide(id)}
                  className={`flex-shrink-0 w-full aspect-video rounded-lg border-2 transition-all duration-200 relative group overflow-hidden ${currentSlide === id
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="absolute inset-0 bg-slate-50">
                    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-mono">
                      SLIDE {id}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 p-2 text-left border-t border-slate-100 backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] font-bold text-emerald-600">#{id.toString().padStart(2, '0')}</span>
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
