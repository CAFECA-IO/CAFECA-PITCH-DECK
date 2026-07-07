'use client';

import { Send, User, Bot, FileText, CheckCircle2, Layout, Settings, Activity, Database, ShieldCheck, FileSpreadsheet, MessageSquare, Plus, Search, Clock, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Typewriter component for streaming text effect
const Typewriter = ({ text, speed = 20, delay = 0, onComplete }: { text: string, speed?: number, delay?: number, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, started, onComplete]);

  return <span>{displayedText}</span>;
};

export default function CafecaFaithSlide9() {
  const [step, setStep] = useState(0);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [step]);

  useEffect(() => {
    // Animation Sequence
    const sequence = [
      { step: 1, delay: 2000 },  // User replies
      { step: 2, delay: 4000, action: () => setVisibleSections(prev => [...prev, 'header']) }, // AI acknowledge & Gen Header
      { step: 3, delay: 6500 },  // AI asks for Base Year
      { step: 4, delay: 8500 },  // User replies
      { step: 5, delay: 10500, action: () => setVisibleSections(prev => [...prev, 'baseYear']) }, // AI confirms & Gen Base Year
      { step: 6, delay: 13000 }, // AI asks for Boundaries
      { step: 7, delay: 15000, action: () => setVisibleSections(prev => [...prev, 'boundaries']) }, // User replies & Gen Boundaries
      { step: 8, delay: 18000 }, // AI asks for Scope 1 & 2
      { step: 9, delay: 20000, action: () => setVisibleSections(prev => [...prev, 'emissions']) }, // User replies & Gen Emissions
      { step: 10, delay: 23000, action: () => setVisibleSections(prev => [...prev, 'summary']) }, // Final
    ];

    const timers = sequence.map(s => setTimeout(() => {
      setStep(s.step);
      if (s.action) s.action();
    }, s.delay));

    return () => timers.forEach(clearTimeout);
  }, []);

  interface IMessage {
    id: number;
    role: string;
    content: string;
    file?: string;
  }

  const messages: IMessage[] = [
    { id: 0, role: 'ai', content: '您好！我是您的 AI 碳盤查助手。為了開始今天的盤查工作，請先告訴我您要盤查的企業名稱與年度？' },
    { id: 1, role: 'user', content: '卡菲卡智慧製造股份有限公司，2025年度。' },
    { id: 2, role: 'ai', content: '收到！正在為「卡菲卡智慧製造股份有限公司」準備 2025 年度的盤查環境...\n\n系統已初步建立 ISO 14064-1:2018 框架。' },
    { id: 3, role: 'ai', content: '接下來，請選定您的基準年 (Base Year)，這將作為後續減碳目標與路徑規劃的參考起點。' },
    { id: 4, role: 'user', content: '我們選定 2023 年作為基準年。' },
    { id: 5, role: 'ai', content: '好的，基準年已設定為 2023 年。正在更新報告內容並載入相關排放因子係數庫...' },
    { id: 6, role: 'ai', content: '現在我們來鑑定組織邊界。您希望採用「財務控制權」還是「營運控制權」法？' },
    { id: 7, role: 'user', content: '我們採用營運控制權法，包含總部與三個生產據點。' },
    { id: 8, role: 'ai', content: '了解。邊界已鎖定。最後，請提供初步的能源使用數據，例如 Scope 1 的天然氣與 Scope 2 的電力使用量？' },
    { id: 9, role: 'user', content: '我已將 2025 年度的能源使用清單彙整完畢，請參考附件。', file: '2025_Energy_Data_Summary.xlsx' },
    { id: 10, role: 'ai', content: '數據已處理完畢！我已為您生成了完整的碳盤查報告草案，您可以點擊右側預覽並進行校閱。' },
  ];

  const sessions = [
    { id: 1, title: '2025 溫室氣體盤查報告', date: '今天', active: true, status: '進行中' },
    { id: 2, title: '2024 永續報告書 (ESG)', date: '2天前', active: false, status: '已完成' },
    { id: 3, title: 'CBAM 產品碳足跡計算', date: '1週前', active: false, status: '草稿' },
    { id: 4, title: '年度供應鏈碳排核閱', date: '2026/01/15', active: false, status: '已歸檔' },
  ];

  const isVisible = (section: string) => visibleSections.includes(section);

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden flex flex-col border border-slate-200 text-slate-900 font-sans shadow-2xl">
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-30 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
            <Layout size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-slate-900">人工智能碳會計師 - 費思</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">Environmental Intelligence Platform</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-emerald-600 uppercase">System Online</span>
          </div>
          <div className="h-4 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
            <Database size={12} />
            <span>數據庫版本: 2025.Q2.v1</span>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
              <User size={18} className="text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-[240px] bg-white border-r border-slate-200 flex flex-col z-20">
          <div className="p-4 border-b border-slate-100">
            <button className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-600/20 group">
              <Plus size={16} className="group-hover:rotate-90 transition-transform" />
              <span>建立新的專案</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">歷史報告會話</span>
              <Search size={12} className="text-slate-300" />
            </div>
            {sessions.map((s) => (
              <div
                key={s.id}
                className={`p-3 rounded-xl cursor-pointer transition-all border ${s.active
                  ? 'bg-orange-50 border-orange-100 shadow-sm'
                  : 'border-transparent hover:bg-slate-50'
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.active ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                    <MessageSquare size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-bold truncate ${s.active ? 'text-slate-900' : 'text-slate-600'}`}>
                      {s.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400 font-medium flex items-center gap-1">
                        <Clock size={10} /> {s.date}
                      </span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${s.status === '進行中' ? 'text-orange-600 bg-orange-100' :
                        s.status === '已完成' ? 'text-emerald-600 bg-emerald-100' : 'text-slate-400 bg-slate-100'
                        }`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-100 mt-auto bg-slate-50/50">
            <div className="flex items-center gap-3 p-2 hover:bg-white rounded-xl cursor-pointer transition-colors border border-transparent hover:border-slate-200">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                <Settings size={14} />
              </div>
              <span className="text-[11px] font-bold text-slate-600">系統偏好設定</span>
            </div>
          </div>
        </div>

        <div className="w-[380px] border-r border-slate-200 flex flex-col bg-white">
          <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar bg-slate-50/30">
            {messages.filter(m => m.id <= step).map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'ai'
                  ? 'bg-orange-600'
                  : 'bg-white border border-slate-200 text-slate-400'
                  }`}>
                  {msg.role === 'ai' ? <Bot size={20} className="text-white" /> : <User size={20} />}
                </div>
                <div className="flex flex-col gap-2 max-w-[85%]">
                  <div className={`p-4 rounded-2xl text-xs font-medium leading-relaxed ${msg.role === 'ai'
                    ? 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                    : 'bg-orange-600 text-white rounded-tr-none shadow-md shadow-orange-600/10'
                    }`}>
                    {msg.role === 'ai' && step === msg.id ? (
                      <Typewriter text={msg.content} />
                    ) : (
                      <div className="whitespace-pre-line">{msg.content}</div>
                    )}
                    {msg.file && (
                      <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/20 flex items-center gap-3 group/file cursor-pointer hover:bg-white/20 transition-all">
                        <div className="w-10 h-10 rounded-lg bg-emerald-400/20 flex items-center justify-center text-emerald-100 group-hover/file:scale-110 transition-transform">
                          <FileSpreadsheet size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-white truncate">{msg.file}</p>
                          <p className="text-[8px] text-white/60 uppercase tracking-tighter">Microsoft Excel • 24.5 KB</p>
                        </div>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </div>
                    )}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${msg.role === 'user' ? 'text-right text-slate-400' : 'text-slate-400'}`}>
                    {msg.role === 'ai' ? '費思 (Faith)' : '我'}
                  </span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative group">
              <input
                aria-label="對話輸入"
                type="text"
                placeholder="輸入您的回覆..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-5 pr-12 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all placeholder:text-slate-400 shadow-inner"
              />
              <button aria-label="傳送訊息" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-slate-100 relative overflow-hidden flex flex-col">
          <div className="h-12 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 z-20 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-2 py-1 bg-slate-100 rounded-lg border border-slate-200">
                <FileText size={14} className="text-slate-500" />
                <span className="text-[10px] font-bold text-slate-600 truncate max-w-[200px]">2025_Carbon_Report_Draft_v1.pdf</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 text-white rounded-lg text-[10px] font-bold hover:bg-orange-700 transition-all shadow-md shadow-orange-600/10">
                <Download size={14} />
                <span>匯出報告</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-12 custom-scrollbar bg-slate-100">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-[700px] mx-auto bg-white shadow-2xl rounded-sm min-h-[1000px] p-16 relative border border-slate-200 flex flex-col space-y-16"
            >
              {/* 0. Report Header - Hidden until Step 2 */}
              {isVisible('header') ? (
                <div className="flex justify-between items-start mb-12 border-b border-slate-100 pb-10 animate-in fade-in slide-in-from-top-8 duration-1000">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-600 flex items-center justify-center rounded-lg shadow-sm shadow-orange-600/10">
                        <Layout size={16} className="text-white" />
                      </div>
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em]">Section 00</span>
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-[32px] font-bold text-slate-900 tracking-tight leading-[1.2]">
                        卡菲卡智慧製造股份有限公司
                      </h1>
                      <p className="text-xl font-medium text-slate-400">
                        2025 年度碳盤查報告書 <span className="text-slate-300 font-normal ml-2">(草案)</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shrink-0 min-w-[120px]">
                    <span className="block text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Report Status</span>
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      Draft Generated
                    </span>
                  </div>
                </div>
              ) : (
                <div className="h-64 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-4 group mb-12">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
                    <FileText size={24} />
                  </div>
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">等待 AI 生成報告標題...</span>
                </div>
              )}

              <section className={`space-y-8 transition-all duration-1000 ${isVisible('baseYear') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                    基準年設定
                  </h2>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Section 01</span>
                </div>

                {isVisible('baseYear') ? (
                  <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="flex items-start justify-between mb-6">
                      <div className="space-y-1">
                        <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Selected Base Year</div>
                        <div className="text-2xl font-bold text-slate-900">2023 年度報告期間</div>
                      </div>
                      <div className="px-3 py-1 bg-white text-emerald-600 rounded-lg text-[9px] font-bold border border-emerald-100 shadow-sm">
                        Verified by AI
                      </div>
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                      根據 <span className="text-slate-900 font-bold">ISO 14064-1</span> 規範，系統已自動校對 2023 年之電力排碳係數 (0.495 kgCO2e/度) 與相關燃料排放因子。此基準年將作為 2030 減碳 30% 之計算起點。
                    </p>
                  </div>
                ) : (
                  <div className="h-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-4 group">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">正在等待用戶設定參數...</span>
                  </div>
                )}
              </section>

              <section className={`space-y-8 transition-all duration-1000 ${isVisible('boundaries') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                    組織邊界鑑定
                  </h2>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Section 02</span>
                </div>

                {isVisible('boundaries') ? (
                  <div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600">
                        <Activity size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 mb-1">鑑定方法</div>
                        <div className="text-xs font-bold text-slate-900">營運控制權法</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600">
                        <Layout size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 mb-1">設施數量</div>
                        <div className="text-xs font-bold text-slate-900">4 個據點 (HQ + 3 工廠)</div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-600/10 flex items-center justify-center text-orange-600">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 mb-1">排除範圍</div>
                        <div className="text-xs font-bold text-slate-900">外部租賃倉庫 (忽略)</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-24 bg-slate-50 border border-slate-100 rounded-3xl animate-pulse"></div>
                )}
              </section>

              <section className={`space-y-8 transition-all duration-1000 ${isVisible('emissions') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-1 h-6 bg-orange-600 rounded-full"></div>
                    溫室氣體排放量摘要
                  </h2>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em]">Section 03</span>
                </div>

                {isVisible('emissions') ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-100">
                          <tr>
                            <th className="px-6 py-4">類別 (ISO Category)</th>
                            <th className="px-6 py-4">來源說明</th>
                            <th className="px-6 py-4 text-right">排放量 (tCO2e)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-5 flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-orange-600 rounded-full"></div>
                              <span className="font-bold text-slate-900">Category 1: 直接排放</span>
                            </td>
                            <td className="px-6 py-5 text-slate-500 font-medium">天然氣燃燒、公務車</td>
                            <td className="px-6 py-5 text-right font-mono font-bold text-orange-600">85.42</td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-5 flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-orange-400 rounded-full"></div>
                              <span className="font-bold text-slate-900">Category 2: 能源間接</span>
                            </td>
                            <td className="px-6 py-5 text-slate-500 font-medium">外購電力</td>
                            <td className="px-6 py-5 text-right font-mono font-bold text-orange-400">594.00</td>
                          </tr>
                        </tbody>
                        <tfoot className="bg-slate-50/50 border-t border-slate-100">
                          <tr>
                            <td colSpan={2} className="px-6 py-4 font-black text-slate-400 text-[10px] uppercase tracking-widest">Total Gross Emissions</td>
                            <td className="px-6 py-4 text-right font-mono font-black text-slate-900 text-lg">679.42</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-slate-50 border border-slate-100 rounded-3xl animate-pulse"></div>
                )}
              </section>

              {/* Padding bottom */}
              <div className="h-32"></div>
            </motion.div>
          </div>

          {/* Floating Action Button for Report Status */}
          <div className="absolute right-10 bottom-10 z-20">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 p-4 rounded-2xl shadow-2xl flex items-center gap-5 group hover:border-orange-500/50 transition-all">
              <div className="relative">
                <Activity className="text-orange-600" size={18} />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">報告生成進度分析</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000"
                      style={{ width: `${(visibleSections.length / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-200">{Math.round((visibleSections.length / 5) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }
        @keyframes stream {
          from { width: 0; }
          to { width: 100%; }
        }
      ` }} />

      {/* Ambient background glow */}
      <div className="absolute -left-48 -top-48 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-48 -bottom-48 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
}
