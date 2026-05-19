'use client';

import CCASlide1 from '@/app/isunfa_cca/1/page';
import CCASlide2 from '@/app/isunfa_cca/2/page';
import CCASlide3 from '@/app/isunfa_cca/3/page';
import CCASlide4 from '@/app/isunfa_cca/4/page';
import CCASlide5 from '@/app/isunfa_cca/5/page';
import CCASlide6 from '@/app/isunfa_cca/6/page';
import CCASlide7 from '@/app/isunfa_cca/7/page';
import CCASlide8 from '@/app/isunfa_cca/8/page';
import CCASlide9 from '@/app/isunfa_cca/9/page';
import CCASlide10 from '@/app/isunfa_cca/10/page';
import CCASlide11 from '@/app/isunfa_cca/11/page';
import CCASlide12 from '@/app/isunfa_cca/12/page';
import CCASlide13 from '@/app/isunfa_cca/13/page';
import CCASlide14 from '@/app/isunfa_cca/14/page';

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

export default function CCAPrint() {
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
          zip.file(`CCA_Slide_${(i + 1).toString().padStart(2, '0')}.png`, base64, { base64: true });
        }

        setProgress(Math.round(((i + 1) / slidePages.length) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'CCA_Slides_PNG.zip';
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
    <div className="print-container bg-slate-100 min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden backdrop-blur-md bg-white/80 p-2 rounded-lg shadow-lg border border-slate-200 items-start">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-white text-slate-800 rounded-md text-sm font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2 h-10 border border-slate-200"
          disabled={isExporting}
        >
          Print / PDF
        </button>

        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md text-sm font-bold shadow-sm hover:bg-emerald-600 transition-colors flex items-center gap-2 h-10"
            disabled={isExporting}
          >
            {isExporting ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
            {isExporting ? `Exporting ${progress}%` : <span>Export PNGs</span>}
            <ChevronDown size={14} className={`transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} />
          </button>

          {showExportMenu && (
            <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 transition-all animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-slate-800 font-bold text-sm">Export Options</h3>
                <button onClick={() => setShowExportMenu(false)} className="text-slate-400 hover:text-slate-600" aria-label="Close export menu">
                  <X size={16} />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="page-range-input" className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                  Page Range
                </label>
                <input
                  type="text"
                  id="page-range-input"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g. 1-3, 5, 8-10 (Empty = All)"
                  aria-label="Page Range"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                />
                <p className="mt-2 text-[10px] text-slate-500 leading-tight">
                  Leave empty to export all slides. Use commas for multiple ranges.
                </p>
              </div>

              <button
                onClick={handleExport}
                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
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
            background-color: #ffffff;
          }
        }
        .slide-page {
           margin-bottom: 2rem;
           border: 1px dashed #e2e8f0;
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

      <div className="slide-page"><CCASlide1 /></div>
      <div className="slide-page"><CCASlide2 /></div>
      <div className="slide-page"><CCASlide3 /></div>
      <div className="slide-page"><CCASlide4 /></div>
      <div className="slide-page"><CCASlide5 /></div>
      <div className="slide-page"><CCASlide6 /></div>
      <div className="slide-page"><CCASlide7 /></div>
      <div className="slide-page"><CCASlide8 /></div>
      <div className="slide-page"><CCASlide9 /></div>
      <div className="slide-page"><CCASlide10 /></div>
      <div className="slide-page"><CCASlide11 /></div>
      <div className="slide-page"><CCASlide12 /></div>
      <div className="slide-page"><CCASlide13 /></div>
      <div className="slide-page"><CCASlide14 /></div>
    </div>
  );
}
