'use client';

import { Database, Boxes, BrainCircuit, LayoutDashboard, Lock } from 'lucide-react';
import CrmSlideShell from '@/components/slide/crm_slide_shell';

export default function RetailCrmSlide18() {
  const stack = [
    {
      icon: Database,
      layer: '資料層',
      en: 'DATA',
      tone: 'border-slate-200 bg-white',
      text: 'text-slate-900',
      dot: 'bg-orange-500',
      items: ['POS 逐筆明細 / ERP / 電子發票', '會員主檔與點數交易', '邊緣運算事件流（向量、非影像）', '公開資料 API：交通、氣象、戶政'],
    },
    {
      icon: Boxes,
      layer: '客戶層',
      en: 'CUSTOMER',
      tone: 'border-slate-200 bg-white',
      text: 'text-slate-900',
      dot: 'bg-orange-500',
      items: ['統一客戶識別（會員＋匿名客群）', '客群分群模型與價值分層', '場域體素模型與動線圖', '時間軸對齊引擎（±0.5 秒）'],
    },
    {
      icon: BrainCircuit,
      layer: '推理層',
      en: 'REASONING',
      tone: 'border-slate-200 bg-white',
      text: 'text-slate-900',
      dot: 'bg-orange-500',
      items: ['關聯規則探勘 FP-Growth', 'CLV 與流失機率預測', '代理人模擬 ABM + 反事實', 'LLM 敘事層：把數字寫成人話'],
    },
    {
      icon: LayoutDashboard,
      layer: '應用層',
      en: 'APPLICATION',
      tone: 'border-slate-200 bg-white',
      text: 'text-slate-900',
      dot: 'bg-orange-500',
      items: ['自動化客戶旅程與推播', '端架與電子標籤排程', 'iSunFA 客戶關係管理科目與月報', '情境模擬台：會議中即問即算'],
    },
  ];

  const governance = [
    { k: '影像不落地', v: '原始影像僅存於邊緣裝置循環緩衝區，30 秒覆寫，不上傳、不備份、不匯出' },
    { k: '去識別化', v: '不建立人臉特徵庫、不與會員資料連結、不做跨日跨店個人追蹤' },
    { k: '統計門檻', v: '任何輸出需群體樣本 ≥ 20 人；低於門檻自動抑制' },
    { k: '會員同意', v: '個人化推播依會員條款取得明示同意，可隨時關閉且不影響既有權益' },
    { k: '留存與稽核', v: '事件資料留存 90 天，全程留稽核軌跡；模型與參數版本皆可回溯' },
    { k: '現場告知', v: '入口與各區公告分析用途，並設置不進行行為分析的無感知通道' },
  ];

  return (
    <CrmSlideShell
      chapter="工程 · 架構與治理"
      pageLabel="18 / 20"
      compact
      title={<>技術堆疊與<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">資料治理</span></>}
      subtitle="四層堆疊，每一層都可以獨立驗收；治理規則寫進系統的預設行為，而不是寫進一份沒人讀的政策文件。"
    >
      <div className="flex flex-col h-full gap-3.5">

        <div className="grid grid-cols-4 gap-3.5 flex-1">
          {stack.map((layer) => {
            const Icon = layer.icon;
            return (
              <div key={layer.layer} className={`rounded-2xl border ${layer.tone} p-4 flex flex-col shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-5 h-5 text-orange-600" />
                  <span className="text-[9px] font-mono tracking-[0.18em] text-slate-300">{layer.en}</span>
                </div>
                <div className={`text-[19px] font-black ${layer.text} leading-none mb-3`}>{layer.layer}</div>
                <ul className="space-y-4 flex-1 flex flex-col justify-center">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[11.5px] text-slate-600 leading-snug">
                      <span className={`w-1 h-1 rounded-full ${layer.dot} mt-[6px] flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-orange-600" />
            <span className="text-[14px] font-black text-slate-900">資料治理六條</span>
            <span className="text-[10px] text-slate-400 ml-2">依個人資料保護法與 GDPR 精神設計，導入前提供完整說明文件與現場公告版型</span>
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-2.5">
            {governance.map((rule) => (
              <div key={rule.k} className="flex gap-2.5 items-start">
                <span className="text-[11.5px] font-bold text-slate-800 w-[62px] flex-shrink-0 leading-snug">{rule.k}</span>
                <span className="text-[10.5px] text-slate-500 leading-snug">{rule.v}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </CrmSlideShell>
  );
}
