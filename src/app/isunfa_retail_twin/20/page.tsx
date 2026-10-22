'use client';

import { Database, Boxes, BrainCircuit, LayoutDashboard, Lock } from 'lucide-react';
import TwinSlideShell from '@/components/slide/twin_slide_shell';

export default function IsunfaRetailTwinSlide20() {
  const stack = [
    {
      icon: Database,
      layer: '資料層',
      en: 'DATA',
      tone: 'border-slate-400/30 bg-white/[0.04]',
      text: 'text-slate-200',
      items: ['POS 逐筆明細 / ERP / 電子發票', '商品主檔與貨架配置圖 Planogram', '邊緣運算事件流（向量、非影像）', '公開資料 API：交通、氣象、戶政'],
    },
    {
      icon: Boxes,
      layer: '孿生層',
      en: 'TWIN',
      tone: 'border-cyan-400/30 bg-cyan-400/[0.06]',
      text: 'text-cyan-300',
      items: ['貨架關係圖 Planogram Graph', '場域體素模型（1 格 = 1 公尺，約 200 坪門市）', '代理人池與人物誌參數', '時間軸對齊引擎（±0.5 秒）'],
    },
    {
      icon: BrainCircuit,
      layer: '推理層',
      en: 'REASONING',
      tone: 'border-indigo-400/30 bg-indigo-400/[0.06]',
      text: 'text-indigo-300',
      items: ['關聯規則探勘 FP-Growth', '因果圖 DAG 與介入估計', '代理人模擬 ABM + 反事實', 'LLM 敘事層：把數字寫成人話'],
    },
    {
      icon: LayoutDashboard,
      layer: '應用層',
      en: 'APPLICATION',
      tone: 'border-emerald-400/30 bg-emerald-400/[0.06]',
      text: 'text-emerald-300',
      items: ['iSunFA 管理會計科目與月報', '營運儀表板：熱區、缺貨、陳列 ROI', '情境模擬台：會議中即問即算', '行動建議清單與追蹤'],
    },
  ];

  const governance = [
    { k: '影像不落地', v: '原始影像僅存於邊緣裝置循環緩衝區，30 秒覆寫，不上傳、不備份、不匯出' },
    { k: '去識別化', v: '不建立人臉特徵庫、不與會員資料連結、不做跨日跨店個人追蹤' },
    { k: '統計門檻', v: '任何輸出需群體樣本 ≥ 20 人；低於門檻自動抑制' },
    { k: '留存與稽核', v: '事件資料留存 90 天，全程留稽核軌跡；模型版本、資料版本與參數皆可回溯' },
    { k: '模型透明', v: '每個上線模型附 Model Card：訓練資料範圍、已知限制、不確定性與適用邊界' },
    { k: '現場告知', v: '入口與各區公告分析用途，並設置不進行行為分析的無感知通道' },
  ];

  return (
    <TwinSlideShell
      chapter="工程 · 架構與治理"
      chapterColor="text-white"
      chapterDot="bg-white"
      pageLabel="20 / 22"
      compact
      title={<>技術堆疊與<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">資料治理</span></>}
      subtitle="四層堆疊，每一層都可以獨立驗收；治理規則寫進系統的預設行為，而不是寫進一份沒人讀的政策文件。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="grid grid-cols-4 gap-3.5 flex-1">
          {stack.map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.layer} className={`rounded-2xl border ${layer.tone} p-4 flex flex-col`}>
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-5 h-5 ${layer.text}`} />
                  <span className="text-[9px] font-mono tracking-[0.18em] text-slate-600">{layer.en}</span>
                </div>
                <div className={`text-[19px] font-black ${layer.text} leading-none mb-3`}>{layer.layer}</div>
                <ul className="space-y-4 flex-1 flex flex-col justify-center">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[11.5px] text-slate-300 leading-snug">
                      <span className="w-1 h-1 rounded-full bg-slate-500 mt-[6px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.05] px-5 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-[14px] font-black text-white">資料治理六條</span>
            <span className="text-[10px] text-slate-500 ml-2">依個人資料保護法與 GDPR 精神設計，導入前提供完整說明文件與現場公告版型</span>
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-2.5">
            {governance.map((rule) => (
              <div key={rule.k} className="flex gap-2.5 items-start">
                <span className="text-[11.5px] font-bold text-emerald-300 w-[62px] flex-shrink-0 leading-snug">{rule.k}</span>
                <span className="text-[10.5px] text-slate-400 leading-snug">{rule.v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </TwinSlideShell>
  );
}
