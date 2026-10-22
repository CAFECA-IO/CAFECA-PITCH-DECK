'use client';

import { HardDrive, Users, ShieldCheck, Gauge } from 'lucide-react';

export default function NasSlide1() {
  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col font-sans text-slate-900">

      {/* Info: (20260914 - Luphia) 點陣底紋與光暈 */}
      <div
        className="absolute inset-0 z-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-40 -top-48 w-[760px] h-[760px] rounded-full bg-orange-200/40 blur-[170px]" />
        <div className="absolute -right-48 bottom-[-220px] w-[760px] h-[760px] rounded-full bg-amber-100/60 blur-[180px]" />
      </div>

      {/* Info: (20260914 - Luphia) 右側裝飾：一台四槽 NAS 的正面 */}
      <div className="absolute right-[96px] top-[150px] z-0 w-[300px] h-[420px] rounded-[22px] border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200 shadow-2xl p-6 flex flex-col gap-4" aria-hidden="true">
        <div className="flex items-center justify-between px-1">
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
            <span className="w-2 h-2 rounded-full bg-orange-300" />
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          </div>
          <span className="text-[9px] font-mono tracking-[0.3em] text-slate-500">STATUS · LAN</span>
        </div>
        {['on', 'busy', 'on', 'on'].map((led, i) => (
          <div key={`${led}-${i}`} className="flex-1 rounded-xl border border-slate-300 bg-slate-50 flex items-center justify-between px-4">
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2, 3, 4].map((n) => (
                <span key={n} className="block w-[120px] h-[2px] bg-slate-300" />
              ))}
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[9px] font-mono text-slate-400">DISK {i + 1}</span>
              <span className={`w-2 h-2 rounded-full ${led === 'busy' ? 'bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(252,211,77,0.9)]' : 'bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)]'}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Info: (20260914 - Luphia) 頂部標記 */}
      <div className="z-10 flex items-center justify-between px-16 pt-11">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/25">
            <HardDrive className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-[15px] font-black tracking-tight text-slate-900">CAFECA</div>
            <div className="text-[11px] font-mono tracking-[0.18em] text-slate-500">INTERNAL SHARING</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[11px] font-bold text-slate-700 tracking-wider">公司導入 NAS 分享 · 2026.09</span>
        </div>
      </div>

      {/* Info: (20260914 - Luphia) 主標題 */}
      <div className="z-10 flex-1 flex flex-col justify-center px-16 max-w-[860px]">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-md bg-orange-50 border border-orange-300 text-orange-600 text-[11px] font-bold tracking-widest">檔案留在公司</span>
          <span className="px-3 py-1 rounded-md bg-sky-50 border border-sky-300 text-sky-600 text-[11px] font-bold tracking-widest">內網高速</span>
          <span className="px-3 py-1 rounded-md bg-slate-400/10 border border-slate-300 text-slate-700 text-[11px] font-bold tracking-widest">一次採購</span>
        </div>

        <h1 className="text-[54px] font-black tracking-tight leading-[1.14] text-slate-900">
          讓公司的檔案<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">有一個家</span>
          <br />
          <span className="text-slate-700 text-[34px]">解決了什麼、帶來什麼、和其他方案差在哪</span>
        </h1>

        <p className="text-[17px] text-slate-600 leading-relaxed border-l-2 border-emerald-400 pl-6 mt-8">
          NAS（Network Attached Storage，網路儲存伺服器）是一台<span className="text-slate-900 font-bold">接在公司網路上、專門負責存檔案的小主機</span>。
          <br />
          這份簡報不推銷品牌，只回答四個問題：我們現在痛在哪、它治得了什麼、跟雲端硬碟有何不同、<span className="text-orange-600 font-bold">誰該用、誰先別。</span>
        </p>
      </div>

      {/* Info: (20260914 - Luphia) 底部資訊列 */}
      <div className="z-10 grid grid-cols-3 gap-4 px-16 pb-10 max-w-[900px]">
        {[
          { icon: Users, label: '集中存放', value: '全公司一份、一個入口', note: '不再問「最新版在誰電腦」' },
          { icon: Gauge, label: '內網速度', value: '2.5GbE 約 280 MB/s', note: '50GB 影片三分鐘搬完' },
          { icon: ShieldCheck, label: '權限與快照', value: '部門資料夾 × 時光機', note: '誤刪、勒索軟體都能倒帶' },
        ].map((item) => (
          <div key={item.label} className="bg-white backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3.5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-orange-600" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-0.5">{item.label}</div>
              <div className="text-[13px] font-bold text-slate-900 truncate">{item.value}</div>
              <div className="text-[11px] text-slate-500 truncate">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
