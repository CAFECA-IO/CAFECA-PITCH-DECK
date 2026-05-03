'use client';

import ISunFASlide1 from '@/app/isunfa_chiayi/1/page';
import ISunFASlide2 from '@/app/isunfa_chiayi/2/page';
import ISunFASlide3 from '@/app/isunfa_chiayi/3/page';
import ISunFASlide4 from '@/app/isunfa_chiayi/4/page';
import ISunFASlide5 from '@/app/isunfa_chiayi/5/page';
import ISunFASlide6 from '@/app/isunfa_chiayi/6/page';
import ISunFASlide7 from '@/app/isunfa_chiayi/7/page';
import ISunFASlide8 from '@/app/isunfa_chiayi/8/page';
import ISunFASlide9 from '@/app/isunfa_chiayi/9/page';
import ISunFASlide10 from '@/app/isunfa_chiayi/10/page';
import ISunFASlide11 from '@/app/isunfa_chiayi/11/page';
import ISunFASlide12 from '@/app/isunfa_chiayi/12/page';
import { toPng } from 'html-to-image';
import JSZip from 'jszip';
import { useState } from 'react';
import { Download, Loader2, X, ChevronDown } from 'lucide-react';

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

export default function ISunFAChiayiPrint() {
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
        await new Promise(resolve => setTimeout(resolve, 500));

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
            filter: (node) => {
              if (node.tagName === 'SCRIPT' || node.tagName === 'LINK') return false;
              return true;
            }
          });
          const base64 = dataUrl.split(',')[1];
          zip.file(`iSunFA_Chiayi_Slide_${(i + 1).toString().padStart(2, '0')}.png`, base64, { base64: true });
        }

        setProgress(Math.round(((i + 1) / slidePages.length) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'iSunFA_Chiayi_Slides_PNG.zip';
      a.click();
      URL.revokeObjectURL(url);

      setShowExportMenu(false);
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. See console for details.');
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  };

  return (
    <div className="print-container bg-neutral-950 min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden backdrop-blur-md bg-neutral-900/80 p-2 rounded-lg shadow-lg border border-neutral-800 items-start">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-neutral-800 text-white rounded-md text-sm font-bold shadow-md hover:bg-neutral-700 transition-colors flex items-center gap-2 h-10 border border-neutral-700"
          disabled={isExporting}
        >
          Print / PDF
        </button>

        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-bold shadow-md hover:bg-amber-700 transition-colors flex items-center gap-2 h-10 border border-amber-500"
            disabled={isExporting}
          >
            {isExporting ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
            {isExporting ? `Exporting ${progress}%` : <span>Export PNGs</span>}
            <ChevronDown size={14} className={`transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} />
          </button>

          {showExportMenu && (
            <div className="absolute top-12 right-0 w-72 bg-neutral-900 rounded-xl shadow-2xl border border-neutral-800 p-4 transition-all animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-bold text-sm">Export Options</h3>
                <button onClick={() => setShowExportMenu(false)} className="text-neutral-400 hover:text-white transition-colors" aria-label="Close export menu">
                  <X size={16} />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="page-range-input" className="block text-xs font-semibold text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Page Range
                </label>
                <input
                  type="text"
                  id="page-range-input"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g. 1-3, 5, 8-10 (Empty = All)"
                  aria-label="Page Range"
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all placeholder:text-neutral-600"
                />
                <p className="mt-2 text-[10px] text-neutral-500 leading-tight">
                  Leave empty to export all slides. Use commas for multiple ranges.
                </p>
              </div>

              <button
                onClick={handleExport}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-neutral-950 rounded-lg text-sm font-bold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
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
            background-color: black;
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
           border: 1px dashed #333;
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

      <div className="slide-page"><ISunFASlide1 /></div>
      <div className="slide-page"><ISunFASlide2 /></div>
      <div className="slide-page"><ISunFASlide3 /></div>
      <div className="slide-page"><ISunFASlide4 /></div>
      <div className="slide-page"><ISunFASlide5 /></div>
      <div className="slide-page"><ISunFASlide6 /></div>
      <div className="slide-page"><ISunFASlide7 /></div>
      <div className="slide-page"><ISunFASlide8 /></div>
      <div className="slide-page"><ISunFASlide9 /></div>
      <div className="slide-page"><ISunFASlide10 /></div>
      <div className="slide-page"><ISunFASlide11 /></div>
      <div className="slide-page"><ISunFASlide12 /></div>
    </div>
  );
}
