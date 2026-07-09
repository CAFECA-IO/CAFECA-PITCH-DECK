'use client';

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

export default function IsunCloudPrint() {
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
          zip.file(`iSunCloud_Slide_${(i + 1).toString().padStart(2, '0')}.png`, base64, { base64: true });
        }

        setProgress(Math.round(((i + 1) / slidePages.length) * 100));
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'iSunCloud_Pitch_Deck.zip';
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
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden backdrop-blur-md bg-white/90 p-2 rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 items-start">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-md text-sm font-bold shadow-sm transition-colors flex items-center gap-2 h-10"
          disabled={isExporting}
        >
          Print / PDF
        </button>

        <div className="relative">
          <button
            onClick={() => setShowExportMenu(!showExportMenu)}
            className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm font-bold shadow-md hover:bg-orange-700 transition-colors flex items-center gap-2 h-10"
            disabled={isExporting}
          >
            {isExporting ? <Loader2 className="animate-spin" size={16} /> : <Download size={16} />}
            {isExporting ? `Exporting ${progress}%` : <span>Export PNGs</span>}
            <ChevronDown size={14} className={`transition-transform duration-200 ${showExportMenu ? 'rotate-180' : ''}`} />
          </button>

          {showExportMenu && (
            <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-200 p-4 transition-all animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-gray-900 font-bold text-sm">Export Options</h3>
                <button onClick={() => setShowExportMenu(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close export menu">
                  <X size={16} />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="page-range-input" className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                  Page Range
                </label>
                <input
                  type="text"
                  id="page-range-input"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g. 1-3, 5, 8-10 (Empty = All)"
                  aria-label="Page Range"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-orange-600 focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
                />
                <p className="mt-2 text-[10px] text-gray-500 leading-tight">
                  Leave empty to export all slides. Use commas for multiple ranges.
                </p>
              </div>

              <button
                onClick={handleExport}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
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
           border: 1px solid #e2e8f0;
           background: #f8fafc;
           box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
           border-radius: 0.5rem;
           display: flex;
           justify-content: center;
           padding: 1rem;
         }
        @media print {
           .slide-page {
               margin-bottom: 0;
               border: none;
               background: transparent;
               box-shadow: none;
               padding: 0;
           }
        }
      `}} />

      <div className="slide-page"><Slide1 /></div>
      <div className="slide-page"><Slide2 /></div>
      <div className="slide-page"><Slide3 /></div>
      <div className="slide-page"><Slide4 /></div>
      <div className="slide-page"><Slide5 /></div>
      <div className="slide-page"><Slide6 /></div>
      <div className="slide-page"><Slide7 /></div>
      <div className="slide-page"><Slide8 /></div>
      <div className="slide-page"><Slide9 /></div>
      <div className="slide-page"><Slide10 /></div>
      <div className="slide-page"><Slide11 /></div>
      <div className="slide-page"><Slide12 /></div>
      <div className="slide-page"><Slide13 /></div>
      <div className="slide-page"><Slide14 /></div>
      <div className="slide-page"><Slide15 /></div>
      <div className="slide-page"><Slide16 /></div>
      <div className="slide-page"><Slide17 /></div>
      <div className="slide-page"><Slide18 /></div>
    </div>
  );
}
