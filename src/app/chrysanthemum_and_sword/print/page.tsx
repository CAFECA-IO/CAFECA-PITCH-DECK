'use client';

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
import { toPng } from 'html-to-image';
import JSZip from 'jszip';
import { useState } from 'react';
import { Download, Loader2, X, ChevronDown } from 'lucide-react';

/* Info: (20260830 - Luphia) 解析使用者輸入的頁碼範圍，空白代表全部 */
const parsePageRange = (range: string, max: number): Set<number> => {
  const pages = new Set<number>();
  if (!range.trim()) {
    for (let i = 1; i <= max; i++) pages.add(i);
    return pages;
  }

  const parts = range.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(Number);
      if (!isNaN(start) && !isNaN(end)) {
        for (let i = start; i <= end; i++) {
          if (i >= 1 && i <= max) pages.add(i);
        }
      }
    } else {
      const num = Number(trimmed);
      if (!isNaN(num) && num >= 1 && num <= max) {
        pages.add(num);
      }
    }
  }
  return pages;
};

export default function ChrysanthemumAndSwordPrint() {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [pageRange, setPageRange] = useState('');

  const handleExport = async () => {
    setIsExporting(true);
    setProgress(0);
    const zip = new JSZip();
    const slidePages = document.querySelectorAll('.slide-page');
    const selectedPages = parsePageRange(pageRange, slidePages.length);

    try {
      for (let i = 0; i < slidePages.length; i++) {
        if (!selectedPages.has(i + 1)) continue;

        const page = slidePages[i] as HTMLElement;

        page.scrollIntoView({ behavior: 'instant', block: 'start' });
        await new Promise(resolve => setTimeout(resolve, 400));

        let target = page.querySelector('.w-\\[1280px\\]') as HTMLElement;

        if (!target) {
          const root = page.firstElementChild as HTMLElement;
          if (root) {
            for (let j = 0; j < root.children.length; j++) {
              const child = root.children[j] as HTMLElement;
              if (child.offsetWidth >= 1200) {
                target = child;
                break;
              }
            }
            if (!target) target = root;
          }
        }

        if (target) {
          const dataUrl = await toPng(target, {
            quality: 0.95,
            pixelRatio: 2,
            cacheBust: true,
            skipAutoScale: true,
            backgroundColor: '#ffffff',
            filter: (node) => {
              if (node.tagName === 'SCRIPT' || node.tagName === 'LINK') return false;
              return true;
            }
          });
          const base64 = dataUrl.split(',')[1];
          zip.file(`ChrysanthemumAndSword_Slide_${(i + 1).toString().padStart(2, '0')}.png`, base64, { base64: true });
        }

        setProgress(Math.round(((i + 1) / slidePages.length) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ChrysanthemumAndSword_Slides_PNG.zip';
      a.click();
      URL.revokeObjectURL(url);

      setShowExportMenu(false);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  };

  return (
    <div className="print-container bg-stone-200 min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden backdrop-blur-md bg-white/90 p-2 rounded-lg shadow-lg border border-orange-200 items-start">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-stone-800 text-white rounded-md text-sm font-bold shadow-md hover:bg-stone-700 transition-colors flex items-center gap-2 h-10"
          disabled={isExporting}
        >
          Print / PDF
        </button>

        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-bold shadow-md hover:bg-orange-500 transition-colors flex items-center gap-2 h-10"
            disabled={isExporting}
          >
            {isExporting ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
            {isExporting ? `Exporting ${progress}%` : <span>Export PNGs</span>}
            <ChevronDown size={14} className={`transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} />
          </button>

          {showExportMenu && (
            <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-2xl border border-orange-200 p-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-stone-900 font-bold text-sm">Export Options</h3>
                <button onClick={() => setShowExportMenu(false)} className="text-stone-400 hover:text-stone-700" aria-label="關閉匯出選單">
                  <X size={16} />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="page-range-input" className="block text-xs font-semibold text-stone-500 mb-1.5 uppercase tracking-wider">
                  Page Range
                </label>
                <input
                  type="text"
                  id="page-range-input"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g. 1-3, 5 (Empty = All)"
                  aria-label="Page Range"
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-900 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all placeholder:text-stone-400"
                />
                <p className="mt-2 text-[10px] text-stone-400 leading-tight">
                  Leave empty to export all slides. Use commas for multiple ranges.
                </p>
              </div>

              <button
                onClick={handleExport}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
              >
                <Download size={16} />
                Start Export
              </button>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          @page {
            size: 1280px 720px;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            background-color: #ffffff;
          }
          .slide-page {
            break-after: page;
            page-break-after: always;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .slide-page {
           margin-bottom: 2rem;
           border: 1px dashed #fdba74;
           display: flex;
           justify-content: center;
           padding: 1rem;
        }
        @media print {
           .slide-page {
               margin-bottom: 0;
               border: none;
               padding: 0;
           }
        }
      `}} />

      <div className="slide-page"><ChrysanthemumSlide1 /></div>
      <div className="slide-page"><ChrysanthemumSlide2 /></div>
      <div className="slide-page"><ChrysanthemumSlide3 /></div>
      <div className="slide-page"><ChrysanthemumSlide4 /></div>
      <div className="slide-page"><ChrysanthemumSlide5 /></div>
      <div className="slide-page"><ChrysanthemumSlide6 /></div>
      <div className="slide-page"><ChrysanthemumSlide7 /></div>
      <div className="slide-page"><ChrysanthemumSlide8 /></div>
      <div className="slide-page"><ChrysanthemumSlide9 /></div>
      <div className="slide-page"><ChrysanthemumSlide10 /></div>
      <div className="slide-page"><ChrysanthemumSlide11 /></div>
      <div className="slide-page"><ChrysanthemumSlide12 /></div>
      <div className="slide-page"><ChrysanthemumSlide13 /></div>
      <div className="slide-page"><ChrysanthemumSlide14 /></div>
      <div className="slide-page"><ChrysanthemumSlide15 /></div>
      <div className="slide-page"><ChrysanthemumSlide16 /></div>
      <div className="slide-page"><ChrysanthemumSlide17 /></div>
      <div className="slide-page"><ChrysanthemumSlide18 /></div>
      <div className="slide-page"><ChrysanthemumSlide19 /></div>
      <div className="slide-page"><ChrysanthemumSlide20 /></div>
      <div className="slide-page"><ChrysanthemumSlide21 /></div>
      <div className="slide-page"><ChrysanthemumSlide22 /></div>
      <div className="slide-page"><ChrysanthemumSlide23 /></div>
    </div>
  );
}
