'use client';

import CgSlideShell from '@/components/slide/cg_slide_shell';
import { Eye, AlertTriangle, RefreshCw, Terminal } from 'lucide-react';

export default function CodeGraphSlide8() {
  const sync = [
    {
      icon: Eye,
      title: '原生檔案監看',
      spec: 'FSEvents / inotify / ReadDirectoryChangesW',
      desc: '你存檔後 2 秒內（debounce）增量重建受影響的節點與邊，不重掃全專案。',
    },
    {
      icon: AlertTriangle,
      title: '過期警示橫幅',
      spec: 'staleness banner',
      desc: '同步還沒完成時，工具回應會夾帶警告，讓代理知道「這份答案可能還沒跟上」。',
    },
    {
      icon: RefreshCw,
      title: '連線時對帳',
      spec: 'connect-time reconciliation',
      desc: '補抓 CodeGraph 沒開機時發生的變動——例如你 git pull 了一整個分支。',
    },
  ];

  return (
    <CgSlideShell
      chapter="ACT 2 · STAYING FRESH"
      accent="emerald"
      pageLabel="08"
      title={<>索引最大的敵人是<span className="text-emerald-300">過期</span>，所以同步做了三層</>}
      subtitle={<>「先建好索引」聽起來很美，但只要索引跟程式碼對不上，它就從資產變成負債。這是這類工具過去最常失敗的點。</>}
      footer="沒有 codegraph sync 這個步驟——刻意不讓使用者需要記得手動同步；要確認狀態就跑 codegraph status。"
    >
      <div className="grid grid-cols-3 gap-5 mb-5">
        {sync.map((s, i) => (
          <div key={s.title} className="bg-slate-900/70 border border-emerald-500/20 rounded-2xl p-5 relative">
            <div className="absolute right-4 top-3 text-[11px] font-mono text-emerald-500/50">0{i + 1}</div>
            <s.icon className="w-6 h-6 text-emerald-300 mb-3" />
            <div className="text-[16px] font-bold text-white mb-1">{s.title}</div>
            <div className="text-[11px] font-mono text-slate-500 mb-2.5">{s.spec}</div>
            <div className="text-[13px] text-slate-400 leading-snug">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-5 flex-1">
        <div className="col-span-3 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 font-mono text-[13px] leading-relaxed flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3 font-sans">
            <Terminal className="w-4 h-4 text-slate-500" />
            <span className="text-[11px] font-bold tracking-widest text-slate-500">日常操作只有這些</span>
          </div>
          <div className="text-slate-500">$ <span className="text-emerald-300">codegraph status</span> <span className="text-slate-600"># 檢查索引是否新鮮</span></div>
          <div className="text-slate-500">$ <span className="text-emerald-300">codegraph ui</span> <span className="text-slate-600"># 用瀏覽器把圖譜翻出來看</span></div>
          <div className="text-slate-500">$ <span className="text-emerald-300">codegraph install</span> <span className="text-slate-600"># 重新接上新裝的代理</span></div>
          <div className="mt-3 text-slate-600 font-sans text-[12px]">安裝不需要 Node（有自帶執行檔）；若要以函式庫方式嵌入自家工具，才需要 Node 22.5+。</div>
        </div>

        <div className="col-span-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col justify-center">
          <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">維運上要知道的兩件事</div>
          <ul className="text-[13px] text-slate-400 space-y-2.5 leading-snug list-disc pl-5 marker:text-slate-600">
            <li>大型 repo 索引期間 SQLite 的 <span className="font-mono text-slate-300">-wal</span> 檔可能膨脹到 GB 級，靜置後自動收斂。</li>
            <li>放在網路磁碟或 WSL2 的 <span className="font-mono text-slate-300">/mnt</span> 路徑下曾有鎖定問題，建議放本機磁碟。</li>
          </ul>
        </div>
      </div>
    </CgSlideShell>
  );
}
