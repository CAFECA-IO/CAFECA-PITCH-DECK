'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Layers, 
  Database, 
  Activity, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  ArrowRight,
  ClipboardCheck,
  Cpu,
  BarChart3,
  Server
} from 'lucide-react';

export default function ISO14067Page() {
  const [activeTab, setActiveTab] = useState<'compile' | 'verify' | 'matrix'>('compile');

  const compilationSteps = [
    {
      step: '步驟 1',
      title: '目的與範圍界定 (Goal & Scope Definition)',
      desc: '這是碳足跡盤查的基石，必須明確界定「為誰盤查」與「盤查邊界」。',
      icon: Layers,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      items: [
        { label: '界定功能單位 (Functional Unit)', detail: '必須是可量化的單位，例如「生產 1 公噸特定規格的再生鋼材」或「使用 1 小時的智慧 POS 服務」。所有數據均需以此單位為基準進行折算。' },
        { label: '確立系統邊界 (System Boundary)', detail: '可選擇「搖籃到大門」(Cradle-to-Gate) 或「搖籃到墳墓」(Cradle-to-Grave)。必須繪製產品生命週期流程圖，標示納入及排除的過程。' },
        { label: '界定排除準則 (Cut-off Criteria)', detail: 'ISO 14067 允許排除對碳足跡影響微小（通常為質量與能量 < 1%）的輸入/輸出，但必須在報告中透明揭露並給予合理解釋。' }
      ]
    },
    {
      step: '步驟 2',
      title: '生命週期清查分析 (LCI - Inventory)',
      desc: '收集各單元過程的輸入與輸出數據，包含能源、原物料及排放物。',
      icon: Database,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      items: [
        { label: '優先收集初級數據 (Primary Data)', detail: '針對企業控制範圍內的單元過程（如廠內用電量、直接原物料消耗），必須收集一手的初級數據，時間跨度通常需涵蓋連續 12 個月。' },
        { label: '合理引用次級數據 (Secondary Data)', detail: '對於無法直接獲取的供應鏈數據（如原物料開採碳排），應合理引用權威資料庫（如 Ecoinvent）或政府公告的碳排係數，並說明資料來源的代表性（地理、時間與技術代表性）。' },
        { label: '分配原則 (Allocation)', detail: '若製程產生副產品（如煉鋼廠產生的爐石），必須說明碳足跡的分配方法。ISO 14067 規定分配順序：優先使用物理關係（質量/能量），其次為經濟價值分配。' }
      ]
    },
    {
      step: '步驟 3',
      title: '影響評估與解釋 (LCIA & Interpretation)',
      desc: '將清查數據轉換為氣候變遷潛勢，並進行不確定性分析與敏感度評估。',
      icon: BarChart3,
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      items: [
        { label: '計算全球暖化潛勢 (GWP 100)', detail: '必須採用最新聯合國政府間氣候變化專門委員會 (IPCC) 公布的 100 年全球暖化潛勢係數，將各種溫室氣體（CO2, CH4, N2O 等）折算為二氧化碳當量 (CO2e)。' },
        { label: '敏感度與不確定性分析', detail: '針對假設條件（如分配方法、替代能源係數）進行敏感度測試，評估其對最終碳足跡結果的影響，並對數據進行不確定性評估，提升報告可信度。' }
      ]
    },
    {
      step: '步驟 4',
      title: '報告編撰與溫室氣體聲明',
      desc: '撰寫透明、無誤導性且結構完整的正式碳足跡報告。',
      icon: FileText,
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      items: [
        { label: '必備資訊揭露', detail: '報告應包含：功能單位、系統邊界、數據清單、使用的計算工具與係數庫、土地利用變化 (LUC) 碳排放（若有）、化石碳與生物碳的區分，以及任何被排除的單元過程。' },
        { label: '限制與避險聲明', detail: '必須明確聲明此碳足跡報告是否可用於 B2C 的比較性宣稱。若無特定產品類別規則 (PCR) 支撐，通常不可直接用於公開的品牌間比較。' }
      ]
    }
  ];

  const verificationSteps = [
    {
      phase: '階段 1',
      title: '合約與策略分析 (Strategic Analysis)',
      desc: '驗證機構評估申請案，確認驗證範圍，並進行風險性評估。',
      icon: Search,
      color: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      checks: [
        { item: '查驗查證範圍 (Scope) 與邊界是否與 ISO 14067 申請項目一致。', goal: '確保沒有刻意隱瞞高污染製程（Cherry-picking）。' },
        { item: '確認是否已取得適用的產品類別規則 (PCR)。', goal: '若有行業 PCR，則必須強制遵循以維持比較基礎的客觀性。' }
      ]
    },
    {
      phase: '階段 2',
      title: '風險評估與查證計畫 (Risk Assessment)',
      desc: '擬定查證計畫，針對可能發生重大錯失 (Material Misstatement) 的環節加強稽核。',
      icon: Activity,
      color: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      checks: [
        { item: '分析企業日常營運數據收集系統之可靠度。', goal: '若為人工 Excel 記錄則列為高風險；若串接如 iSunFA 等 ERP/AI 系統則列為低風險。' },
        { item: '核對數據流向，擬定抽樣計畫 (Sampling Plan)。', goal: '針對高碳排的原物料與主要製程進行 100% 複查，其餘次要數據進行比例抽樣。' }
      ]
    },
    {
      phase: '階段 3',
      title: '現場/線上審查與審計軌跡追蹤 (Execution)',
      desc: '查證員進行文件審查與現場訪視，執行審計軌跡 (Audit Trail) 的反向追蹤。',
      icon: ClipboardCheck,
      color: 'text-teal-400 border-teal-500/30 bg-teal-500/10',
      checks: [
        { item: '反向追蹤原始憑證 (Vouchers & Invoices)。', goal: '查證清單中的「用電量 100,000 度」是否能百分之百對應到台電電費單，以及其電單月份是否與盤查區間吻合。' },
        { item: '確認碳排係數庫 (Emission Factors) 的適用性。', goal: '核對所引用的環境部或 Ecoinvent 係數版本是否為最新，且其技術與地理代表性是否合適。' },
        { item: '檢查分配計算式是否確實執行。', goal: '核實副產品的質量或經濟價值分配計算無誤，且無重複計算 (Double Counting)。' }
      ]
    },
    {
      phase: '階段 4',
      title: '決策與查證聲明書核發 (Declaration)',
      desc: '由獨立的技術審查人進行最终審查，確認無誤後核發查證聲明書。',
      icon: ShieldCheck,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      checks: [
        { item: '確認實質性錯失 (Materiality Limit) 未超標（通常限制為總量之 5% 內）。', goal: '若數據誤差 > 5%，則報告不予通過，須重新盤查。' },
        { item: '核發 ISO 14067 查證聲明書與合理保證/有限保證 (Level of Assurance) 宣告。', goal: '取得國際第三方機構的正式背書，宣告產品碳足跡報告合規。' }
      ]
    }
  ];

  const complianceMatrix = [
    { section: 'ISO 14067 條款', title: '標準規範核心要求', status: 'iSunFA 智慧合規解決方案', tip: '如何透過技術加速合規' },
    { section: 'Clause 6.3', title: '系統邊界必須包含所有對碳足跡有重大貢獻的單元過程，並有明確的排除理由。', status: 'AI 自動流程圖與邊界生成，針對微量排除進行質量分析並輸出合規佐證。', tip: '自動化邊界界定' },
    { section: 'Clause 6.4', title: '優先使用來自現場量測或運行紀錄的初級數據 (Primary Data)。', status: '直連企業 ERP 與產線物聯網感測器，動態捕獲高達 90% 以上的初級活動數據。', tip: '初級數據直連' },
    { section: 'Clause 6.5', title: '分配 (Allocation) 方法必須遵循 ISO 優先順序，副產品碳排分配計算透明。', status: '內建質量比、能量比及經濟價值分配演算模型，一鍵切換敏感度對比分析。', tip: '智能分配模型' },
    { section: 'Clause 8.1', title: '產品碳足跡研究報告 (CFP Study Report) 應保持透明，並包含充足的技術細節以利第三方查證。', status: '自動生成包含完整審計軌跡的 ISO 14067 標準報告，所有數值均可回溯至原始電子憑證。', tip: '一鍵輸出合規報告' }
  ];

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
      
      {/* Premium Header Grid */}
      <div className="relative overflow-hidden border-b border-slate-800 bg-slate-900/40 backdrop-blur-md">
        {/* Glow Elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4">
                <BookOpen size={12} />
                ISO 14067 產品碳足跡國際標準
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                建構與驗證合規的<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
                  產品碳足跡報告 (CFP)
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-400 max-w-3xl font-light leading-relaxed">
                本文件深入剖析 ISO 14067:2018 國際標準之量化指南。包含如何為您的產品編製符合國際綠色供應鏈採購要求的碳足跡盤查報告，以及如何順利通過第三方公正機構的合規驗證。
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-center gap-4 min-w-[280px] shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">標準版本</div>
                  <div className="text-sm font-bold text-white">ISO 14067:2018</div>
                </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400">
                  <Cpu size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500">技術賦能</div>
                  <div className="text-sm font-bold text-white">iSunFA AI 動態碳核算</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex border-b border-slate-800 mt-16 gap-8">
            <button 
              onClick={() => setActiveTab('compile')}
              className={`pb-4 text-base font-medium relative transition-colors ${activeTab === 'compile' ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              1. 碳足跡報告撰寫指南
              {activeTab === 'compile' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400" />}
            </button>
            <button 
              onClick={() => setActiveTab('verify')}
              className={`pb-4 text-base font-medium relative transition-colors ${activeTab === 'verify' ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              2. 第三方查證與驗證合規
              {activeTab === 'verify' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400" />}
            </button>
            <button 
              onClick={() => setActiveTab('matrix')}
              className={`pb-4 text-base font-medium relative transition-colors ${activeTab === 'matrix' ? 'text-purple-400' : 'text-slate-400 hover:text-slate-200'}`}
            >
              ISO 14067 合規條款對照表
              {activeTab === 'matrix' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Tab 1: Compile Guide */}
        {activeTab === 'compile' && (
          <div className="space-y-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <FileText className="text-emerald-400" />
                如何撰寫一份合規的產品碳足跡報告
              </h2>
              <p className="text-slate-400 leading-relaxed font-light">
                產品碳足跡 (Carbon Footprint of Product, CFP) 是指產品生命週期中溫室氣體排放與清除的總和。編撰合規報告時，必須嚴格落實 ISO 14067 規定的四大步驟，並以透明、可追溯為最核心原則。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {compilationSteps.map((s, idx) => {
                const IconComponent = s.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all shadow-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold border ${s.color}`}>
                          {s.step}
                        </span>
                        <div className={`p-2.5 rounded-lg border ${s.color}`}>
                          <IconComponent size={20} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-sm text-slate-400 mb-6 font-light">{s.desc}</p>
                      
                      <div className="space-y-4">
                        {s.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                            <h4 className="text-emerald-400 text-sm font-semibold mb-1 flex items-center gap-2">
                              <CheckCircle2 size={14} />
                              {item.label}
                            </h4>
                            <p className="text-xs text-slate-400 leading-relaxed font-light">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note box */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 flex gap-4 items-start">
              <AlertCircle className="text-indigo-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-indigo-300 font-bold mb-1">合規性關鍵提醒：切勿刻意「粉飾邊界」</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  在確立系統邊界時，有些企業為了降低最終碳足跡，刻意將物流過程或某些高污染加工製程排除。ISO 14067 規定，凡是被排除的單元過程，必須具備充足數據證明其質量與排放佔比小於排除閥值 (通常為 1%)，且不可對碳足跡結論產生結構性影響。否則，報告將在查證階段面臨重大退件風險。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Verify Guide */}
        {activeTab === 'verify' && (
          <div className="space-y-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <ShieldCheck className="text-indigo-400" />
                如何驗證產品碳足跡報告是否合規
              </h2>
              <p className="text-slate-400 leading-relaxed font-light">
                查證 (Verification) 是一項系統化、獨立且文件化的評估過程。企業所撰寫的碳足跡報告必須經由合格第三方查證機構（如 SGS, BSI, TÜV 等具備 ISO 17029 與 14065 認證的單位）進行實地或線上稽核，確認數據無誤、無重大錯失且完全符合 ISO 14067 要求後，方能取得正式聲明書。
              </p>
            </div>

            <div className="space-y-8">
              {verificationSteps.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-850 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start hover:border-slate-800 transition-all">
                    <div className="flex md:flex-col items-center justify-between md:justify-start gap-4 w-full md:w-48 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
                      <div className={`p-3 rounded-xl border ${v.color} hidden md:flex`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="text-left md:text-center w-full">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${v.color}`}>
                          {v.phase}
                        </span>
                        <h3 className="text-base font-bold text-white mt-2">{v.title}</h3>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 w-full">
                      <p className="text-xs text-slate-500 italic mb-2">{v.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {v.checks.map((check, checkIdx) => (
                          <div key={checkIdx} className="bg-slate-950/60 p-4 rounded-xl border border-slate-850 flex flex-col justify-between">
                            <div>
                              <div className="text-xs font-bold text-indigo-300 mb-2">查核重點：</div>
                              <p className="text-sm text-slate-300 leading-relaxed font-light">{check.item}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-slate-800/80">
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">查證官目的：</div>
                              <p className="text-xs text-emerald-400 mt-1 font-light">{check.goal}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note box */}
            <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 flex gap-4 items-start">
              <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-emerald-300 font-bold mb-1">合規性核心：建立審計軌跡 (Audit Trail)</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  第三方查證官最常遭遇的缺失是「數據無憑無據」。合規報告中宣稱的每一項活動數據（如原物料進貨噸數、用電度數、製程耗氣量），在查證現場都必須能對應到實體或電子原始憑證。透過 **iSunFA** 技術，所有財務入帳數據均會於區塊鏈上錨定其雜湊值 (Hash)，並反向連結至碳盤查清冊，能為查證官提供一鍵溯源的「黃金審計軌跡」，使查證過程從數週縮短至幾天。
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Matrix */}
        {activeTab === 'matrix' && (
          <div className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-4">
                <Layers className="text-purple-400" />
                ISO 14067 核心合規條款對照與智慧解決方案
              </h2>
              <p className="text-slate-400 leading-relaxed font-light">
                此矩陣將 ISO 14067:2018 的關鍵合規要求與當前最新的 AI/綠色金融科技系統功能進行對照，幫助企業在自動化流程中直接落實標準規範。
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
              <table className="min-w-full divide-y divide-slate-800 text-left">
                <thead className="bg-slate-950">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-36">ISO 14067 條款</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-96">標準規範核心要求</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">iSunFA 智慧合規解決方案</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-40">技術標籤</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/40">
                  {complianceMatrix.slice(1).map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-emerald-400 font-bold whitespace-nowrap">{row.section}</td>
                      <td className="px-6 py-4 text-sm text-slate-350 leading-relaxed font-light">{row.title}</td>
                      <td className="px-6 py-4 text-sm text-slate-200 font-normal leading-relaxed">{row.status}</td>
                      <td className="px-6 py-4 text-sm whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-400 border border-slate-700">
                          <Server size={10} className="text-indigo-400" />
                          {row.tip}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">需要編製一份合規的碳足跡報告？</h3>
                <p className="text-sm text-slate-400 font-light">
                  iSunFA 能為您提供自動化碳盤查、動態數據匹配與一鍵報告生成服務。
                </p>
              </div>
              <button 
                onClick={() => setActiveTab('compile')}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:scale-102"
              >
                立即開始編製指南
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Footer copyright */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs tracking-wider">
          <div className="uppercase">
            卡菲卡金融科技股份有限公司 (52650861) © 2026 CAFECA Fintech. All rights reserved.
          </div>
          <div className="font-mono">
            ISO 14067 COMPLIANCE & VERIFICATION DOCUMENT
          </div>
        </div>
      </footer>

    </div>
  );
}
