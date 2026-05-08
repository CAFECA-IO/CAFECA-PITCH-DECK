'use client';

import DPPSlide1 from '@/app/isunfa_digital_product_passport/1/page';
import DPPSlide2 from '@/app/isunfa_digital_product_passport/2/page';
import DPPSlide3 from '@/app/isunfa_digital_product_passport/3/page';
import DPPSlide4 from '@/app/isunfa_digital_product_passport/4/page';
import DPPSlide5 from '@/app/isunfa_digital_product_passport/5/page';
import DPPSlide6 from '@/app/isunfa_digital_product_passport/6/page';
import DPPSlide7 from '@/app/isunfa_digital_product_passport/7/page';
import DPPSlide8 from '@/app/isunfa_digital_product_passport/8/page';
import DPPSlide9 from '@/app/isunfa_digital_product_passport/9/page';
import DPPSlide10 from '@/app/isunfa_digital_product_passport/10/page';
import DPPSlide11 from '@/app/isunfa_digital_product_passport/11/page';
import DPPSlide12 from '@/app/isunfa_digital_product_passport/12/page';
import DPPSlide13 from '@/app/isunfa_digital_product_passport/13/page';
import DPPSlide14 from '@/app/isunfa_digital_product_passport/14/page';
import DPPSlide15 from '@/app/isunfa_digital_product_passport/15/page';
import DPPSlide16 from '@/app/isunfa_digital_product_passport/16/page';
import DPPSlide17 from '@/app/isunfa_digital_product_passport/17/page';
import DPPSlide18 from '@/app/isunfa_digital_product_passport/18/page';
import DPPSlide19 from '@/app/isunfa_digital_product_passport/19/page';
import DPPSlide20 from '@/app/isunfa_digital_product_passport/20/page';
import DPPSlide21 from '@/app/isunfa_digital_product_passport/21/page';
import DPPSlide22 from '@/app/isunfa_digital_product_passport/22/page';
import DPPSlide23 from '@/app/isunfa_digital_product_passport/23/page';
import DPPSlide24 from '@/app/isunfa_digital_product_passport/24/page';

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

export default function DPPPrint() {
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
          zip.file(`DPP_Slide_${(i + 1).toString().padStart(2, '0')}.png`, base64, { base64: true });
        }

        setProgress(Math.round(((i + 1) / slidePages.length) * 100));
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DPP_Slides_PNG.zip';
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
    <div className="print-container bg-neutral-900 min-h-screen">
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden backdrop-blur-md bg-neutral-800/80 p-2 rounded-lg shadow-lg border border-neutral-700 items-start">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-bold shadow-md hover:bg-black transition-colors flex items-center gap-2 h-10 border border-neutral-700"
          disabled={isExporting}
        >
          Print / PDF
        </button>

        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-bold shadow-md hover:bg-emerald-700 transition-colors flex items-center gap-2 h-10"
            disabled={isExporting}
          >
            {isExporting ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
            {isExporting ? `Exporting ${progress}%` : <span>Export PNGs</span>}
            <ChevronDown size={14} className={`transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} />
          </button>

          {showExportMenu && (
            <div className="absolute top-12 right-0 w-72 bg-neutral-800 rounded-xl shadow-2xl border border-neutral-700 p-4 transition-all animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-bold text-sm">Export Options</h3>
                <button onClick={() => setShowExportMenu(false)} className="text-gray-400 hover:text-white" aria-label="Close export menu">
                  <X size={16} />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="page-range-input" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Page Range
                </label>
                <input
                  type="text"
                  id="page-range-input"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g. 1-3, 5, 8-10 (Empty = All)"
                  aria-label="Page Range"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                />
                <p className="mt-2 text-[10px] text-gray-400 leading-tight">
                  Leave empty to export all slides. Use commas for multiple ranges.
                </p>
              </div>

              <button
                onClick={handleExport}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
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
            background-color: #171717; /* neutral-900 */
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
            background-color: #171717;
          }
        }
        .slide-page {
           margin-bottom: 2rem;
           border: 1px dashed #404040;
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

      <div className="slide-page"><DPPSlide1 /></div>
      <div className="slide-page"><DPPSlide2 /></div>
      <div className="slide-page"><DPPSlide3 /></div>
      <div className="slide-page"><DPPSlide4 /></div>
      <div className="slide-page"><DPPSlide5 /></div>
      <div className="slide-page"><DPPSlide6 /></div>
      <div className="slide-page"><DPPSlide7 /></div>
      <div className="slide-page"><DPPSlide8 /></div>
      <div className="slide-page"><DPPSlide9 /></div>
      <div className="slide-page"><DPPSlide10 /></div>
      <div className="slide-page"><DPPSlide11 /></div>
      <div className="slide-page"><DPPSlide12 /></div>
      <div className="slide-page"><DPPSlide13 /></div>
      <div className="slide-page"><DPPSlide14 /></div>
      <div className="slide-page"><DPPSlide15 /></div>
      <div className="slide-page"><DPPSlide16 /></div>
      <div className="slide-page"><DPPSlide17 /></div>
      <div className="slide-page"><DPPSlide18 /></div>
      <div className="slide-page"><DPPSlide19 /></div>
      <div className="slide-page"><DPPSlide20 /></div>
      <div className="slide-page"><DPPSlide21 /></div>
      <div className="slide-page"><DPPSlide22 /></div>
      <div className="slide-page"><DPPSlide23 /></div>
      <div className="slide-page"><DPPSlide24 /></div>
    </div>
  );
}
