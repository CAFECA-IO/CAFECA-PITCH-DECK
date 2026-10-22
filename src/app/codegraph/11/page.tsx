'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { ArrowRight } from 'lucide-react';

export default function CodeGraphSlide11() {
  const before = [
    'grep "refund"　→ 命中 63 處',
    '讀 refund_service.ts（1,240 行）',
    '讀 order_controller.ts（860 行）',
    'grep "issueRefund"　→ 再命中 11 處',
    '讀 3 個測試檔確認呼叫方式',
    '讀 webhook handler，發現還有一條路徑',
    '…再 8 次工具呼叫…',
    '開始改動（共 3 個檔案、41 行）',
  ];

  const after = [
    'codegraph_explore("退款流程與其呼叫端")',
    '↳ 5 個相關符號原始碼、2 條呼叫路徑、影響 9 處',
    '直接開檔改動（共 3 個檔案、41 行）',
  ];

  return (
    <CgSlideShell
      chapter="ACT 3 · A CONCRETE TASK"
      accent="cyan"
      pageLabel="11"
      title={<>同一個任務的兩種走法</>}
      subtitle={<>題目：<span className="text-slate-200 font-bold">「退款金額要加上手續費扣抵，請找出所有相關邏輯並修改」</span>。這是每天都會發生的那種任務。（以下為流程示意，非實測逐筆紀錄）</>}
      footer="注意左右兩邊「實際改動的程式碼」是一樣的——差別完全發生在動手之前的定位階段。"
    >
      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="bg-rose-500/[0.05] border border-rose-500/25 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-bold tracking-widest text-rose-300">沒有 CODEGRAPH</span>
            <span className="text-[12px] font-mono text-rose-400/80">14 次工具呼叫</span>
          </div>
          <div className="flex-1 flex flex-col justify-around py-1">
            {before.map((b, i) => (
              <div key={b} className="flex items-start gap-3 text-[13.5px] leading-snug">
                <span className="font-mono text-[11px] text-slate-600 w-5 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span className={i === before.length - 1 ? 'text-emerald-300 font-bold' : 'text-slate-400'}>{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-rose-500/20 text-[12.5px] text-slate-500">
            探索佔了整趟任務絕大部分的 token 與時間。
          </div>
        </div>

        <div className="bg-emerald-400/[0.05] border border-emerald-400/25 rounded-2xl p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[13px] font-bold tracking-widest text-emerald-300">有 CODEGRAPH</span>
            <span className="text-[12px] font-mono text-emerald-400/80">2 次工具呼叫</span>
          </div>
          <div className="flex-1 flex flex-col justify-around py-1">
            {after.map((a, i) => (
              <div key={a} className="flex items-start gap-3 text-[13.5px] leading-snug">
                <span className="font-mono text-[11px] text-slate-600 w-5 flex-shrink-0 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span className={i === after.length - 1 ? 'text-emerald-300 font-bold' : 'text-slate-300 font-mono text-[12.5px]'}>{a}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-400/20 flex items-center gap-2 text-[12.5px] text-slate-400">
            <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>省下的不只是步數，還有那 2,100 行被讀進 context 又用不到的程式碼。</span>
          </div>
        </div>
      </div>
    </CgSlideShell>
  );
}
