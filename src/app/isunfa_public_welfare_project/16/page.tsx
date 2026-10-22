'use client';

import { ShieldCheck, Scale, Ban, FileLock2, Bug, ScrollText, CheckCircle2 } from 'lucide-react';

export default function IsunfaPwpSlide16() {
  const qualifications = [
    '行業分類屬 J62 電腦程式設計、諮詢及相關服務業',
    '非本國設立及外國營利事業在臺設立之分公司',
    '非陸資投資之企業',
    '最近 3 年內未有執行政府計畫之重大違約紀錄',
    '最近 3 年內未嚴重違反環保、勞工、食安或身障權益法規',
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-200 text-slate-800 font-sans">

      {/* Info: (20260819 - Luphia) Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-[700px] h-[700px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-[700px] h-[700px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span className="text-xs font-mono text-blue-600 uppercase tracking-widest">Compliance &amp; Security</span>
      </div>

      {/* Info: (20260819 - Luphia) Header */}
      <div className="z-10 px-16 pt-[62px] pb-4">
        <h2 className="text-[36px] font-black leading-tight text-slate-800">
          執行規範遵循與{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-slate-600">資安治理承諾</span>
        </h2>
        <p className="text-[13px] text-slate-500 mt-1.5 font-medium">本案自規劃階段即依徵案須知「柒、專案規範」逐項對應，確保執行零違規。</p>
      </div>

      {/* Info: (20260819 - Luphia) Compliance Grid */}
      <div className="z-10 px-16 grid grid-cols-2 gap-5 flex-1">

        {/* Info: (20260819 - Luphia) Left Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-blue-500" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800">法規遵循</h3>
            </div>
            <ul className="space-y-1.5">
              {[
                '《人工智慧基本法》與行政院《使用生成式 AI 參考指引》',
                '數位發展部《危害國家資通安全產品審查辦法》與《人工智慧風險分類框架》',
                '《個人資料保護法》：場域資料一律去識別化，並取得工廠書面授權',
              ].map((t) => (
                <li key={t} className="flex gap-2 text-[12px] text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Ban className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800">明確排除項目</h3>
            </div>
            <ul className="space-y-1.5">
              {[
                '不使用來源自中國或具中資背景之開源模型（如 DeepSeek 等）及其介接工具',
                '不使用數位發展部公告禁用之特定高風險生成式 AI 服務',
                '不使用具資安疑慮或來源不明之技術、模型與工具',
              ].map((t) => (
                <li key={t} className="flex gap-2 text-[12px] text-slate-700 leading-relaxed">
                  <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex-1">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                <ScrollText className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800">契約與成果交付</h3>
            </div>
            <p className="text-[12px] text-slate-600 leading-relaxed">
              與「數位產業跨域軟體基盤系統建置案」得標廠商簽立合作契約；主契約簽訂後 30 日內提報協作廠商名單與雙方簽署之合作契約影本，
              內容納入本須知規定之權利歸屬框架。交付專案工作計畫書、系統測試報告書、成果驗收報告書與成果簡報各乙式。
            </p>
          </div>
        </div>

        {/* Info: (20260819 - Luphia) Right Column */}
        <div className="flex flex-col gap-4">
          <div className="bg-slate-800 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Bug className="w-4 h-4 text-orange-400" />
              </div>
              <h3 className="text-[15px] font-bold text-white">第三方資訊安全檢驗</h3>
            </div>
            <ul className="space-y-1.5">
              {[
                '委由數位產業署認可之第三方資安檢測機構辦理，專案期間至少一次，重大改版時加辦',
                '執行源碼掃描、弱點掃描（主機及網站）與滲透測試，並檢附各項檢測報告',
                '涵蓋 OWASP Top 10（含 SQL Injection、XSS 等），中、高風險弱點全數修正完畢',
                '提供安全設定指引，並於數位產業署認可之環境中執行',
              ].map((t) => (
                <li key={t} className="flex gap-2 text-[12px] text-slate-300 leading-relaxed">
                  <span className="text-orange-400 font-bold flex-shrink-0">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex-1">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                <FileLock2 className="w-4 h-4 text-indigo-500" />
              </div>
              <h3 className="text-[15px] font-bold text-slate-800">AI 安全性測試規劃</h3>
            </div>
            <p className="text-[12px] text-slate-600 leading-relaxed">
              針對 LLM 應用提出安全性測試規劃，涵蓋 Prompt Injection、資料外洩、越權工具調用與幻覺風險。
              測試報告載明測試目的、方法、範圍、結果、發現之風險事項與對應改善作法，格式經數位產業署同意後實施。
            </p>
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
              {['Model Card', 'SBOM 軟體物料清單', 'Dataset Card', 'System Log 備查（3 年）'].map((t) => (
                <div key={t} className="text-[11px] text-slate-500 flex gap-1.5">
                  <span className="text-indigo-400 font-bold">·</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Info: (20260819 - Luphia) Qualification Strip */}
      <div className="z-10 px-16 py-4">
        <div className="bg-orange-50 border border-orange-200 rounded-2xl px-5 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-orange-500" />
            <span className="text-[13px] font-bold text-slate-800 whitespace-nowrap">申請資格聲明</span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {qualifications.map((t) => (
              <div key={t} className="flex gap-1 text-[11px] text-slate-600">
                <CheckCircle2 className="w-3 h-3 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
