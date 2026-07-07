'use client';

import { Send, User, Bot, FileText, CheckCircle2, Layout, Settings, History, Activity, Database, ShieldCheck, FileSpreadsheet, MessageSquare, Plus, Search, Clock } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
    <div className="w-[1280px] h-[720px] bg-[#0f172a] relative overflow-hidden flex flex-col border border-slate-800 text-slate-100 font-sans shadow-2xl">

      {/* Top Navigation Bar */}
      <div className="h-14 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-6 z-30">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/20">
            <Layout size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight">人工智能碳會計師 - 費思</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">Environmental Intelligence Platform</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-emerald-400">系統在線</span>
            </div>
            <div className="h-3 w-[1px] bg-slate-700"></div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
              <Database size={12} />
              <span>數據庫版本: 2025.Q2.v1</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
              <Settings size={16} className="text-slate-400" />
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center">
              <User size={18} className="text-slate-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">

        {/* Leftmost Sidebar: Sessions List (240px) */}
        <div className="w-[240px] bg-[#020617] border-r border-slate-800/50 flex flex-col z-20">
          <div className="p-4 border-b border-slate-800/50">
            <button className="w-full py-2.5 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/20 group">
              <Plus size={16} className="group-hover:rotate-90 transition-transform" />
              <span>建立新的專案</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">歷史報告會話</span>
              <Search size={12} className="text-slate-600" />
            </div>
            {sessions.map((s) => (
              <div
                key={s.id}
                className={`p-3 rounded-xl cursor-pointer transition-all border ${s.active
                  ? 'bg-slate-800/50 border-slate-700/50 shadow-inner'
                  : 'border-transparent hover:bg-slate-800/30'
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.active ? 'bg-orange-500/20 text-orange-500' : 'bg-slate-800 text-slate-500'
                    }`}>
                    <MessageSquare size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[11px] font-bold truncate ${s.active ? 'text-slate-100' : 'text-slate-400'}`}>
                      {s.title}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-500 font-medium flex items-center gap-1">
                        <Clock size={10} /> {s.date}
                      </span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${s.status === '進行中' ? 'text-orange-500 bg-orange-500/10' :
                        s.status === '已完成' ? 'text-emerald-500 bg-emerald-500/10' : 'text-slate-500 bg-slate-800'
                        }`}>
                        {s.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-800/50 mt-auto">
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800/30 rounded-xl cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                <Settings size={14} />
              </div>
              <span className="text-[11px] font-bold text-slate-400">系統偏好設定</span>
            </div>
          </div>
        </div>

        {/* Middle: AI Chat (380px) */}
        <div className="w-[380px] border-r border-slate-800/50 flex flex-col bg-[#0f172a]">
          <div className="p-5 border-b border-slate-800 bg-slate-900/30 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-orange-500" />
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">引導式工作區</h3>
            </div>
            <div className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-[9px] font-black rounded border border-orange-500/20">
              費思在線中
            </div>
          </div>

          <div ref={chatContainerRef} className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
            {messages.filter(m => m.id <= step).map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'ai'
                  ? 'bg-gradient-to-br from-orange-500 to-orange-600'
                  : 'bg-slate-800 border border-slate-700'
                  }`}>
                  {msg.role === 'ai' ? <Bot size={20} className="text-white" /> : <User size={20} className="text-slate-300" />}
                </div>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'ai'
                  ? 'bg-slate-800/80 text-slate-200 border border-slate-700/50 rounded-tl-none shadow-xl backdrop-blur-sm'
                  : 'bg-orange-500/10 text-orange-200 border border-orange-500/30 rounded-tr-none'
                  }`}>
                  {msg.role === 'ai' && step === msg.id ? (
                    <Typewriter text={msg.content} />
                  ) : (
                    <>
                      {msg.content.split('\n').map((line, j) => (
                        <p key={j} className={j > 0 ? 'mt-2' : ''}>{line}</p>
                      ))}
                      {msg.file && (
                        <div className="mt-3 flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-700 hover:bg-slate-900 transition-colors cursor-pointer group">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                            <FileSpreadsheet size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-slate-200">{msg.file}</span>
                            <span className="text-[9px] text-slate-500 uppercase tracking-tighter">Microsoft Excel • 24.5 KB</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {step < 10 && step % 2 === 0 && (
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700">
                  <Bot size={20} className="text-slate-500" />
                </div>
                <div className="bg-slate-800/30 h-10 w-20 rounded-2xl rounded-tl-none flex items-center justify-center gap-1.5 border border-slate-800">
                  <div className="w-1.5 h-1.5 bg-orange-500/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500/60 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-slate-800 bg-slate-900/50">
            <div className="relative group">
              <input
                aria-label="對話輸入"
                type="text"
                placeholder={step % 2 === 0 ? "AI 思考中..." : "在此輸入您的回覆..."}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 px-5 pr-14 text-sm text-slate-300 focus:outline-none focus:border-orange-500/50 transition-all placeholder:text-slate-600"
                disabled
              />
              <button
                aria-label="傳送訊息"
                className={`absolute right-2 top-2 p-2 rounded-xl transition-all ${step % 2 !== 0 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-800 text-slate-600'
                  }`}>
                <Send size={18} />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-[9px] text-slate-600 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-emerald-500" /> 數據加密</span>
              <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
              <span className="flex items-center gap-1"><History size={10} /> 自動備份</span>
            </div>
          </div>
        </div>

        {/* Right Side: Report Canvas (860px) */}
        <div className="flex-1 flex flex-col bg-[#0f172a] relative">

          {/* Canvas Toolbar */}
          <div className="h-12 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/40 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                <FileText size={14} className="text-orange-500" />
                <span className="hover:text-slate-200 transition-colors cursor-pointer">GHG_Inventory_Report_2025.pdf</span>
              </div>
              <div className="h-4 w-[1px] bg-slate-800"></div>
              <div className="flex gap-2">
                <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-bold border border-emerald-500/20">LIVE EDITING</span>
                <span className="px-2.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[9px] font-bold border border-slate-700">DRAFT</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-orange-500 flex items-center justify-center text-[10px] font-bold">AI</div>
                <div className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold">U</div>
              </div>
              <div className="h-4 w-[1px] bg-slate-800"></div>
              <button className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 transition-colors">導出報告</button>
            </div>
          </div>

          <div className="flex-1 p-16 overflow-y-auto custom-scrollbar bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]">
            <div className="max-w-[700px] mx-auto space-y-16">

              {/* 1. Report Header Section */}
              {isVisible('header') ? (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-1000">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] bg-orange-500 w-16"></div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em]">Section 00</span>
                  </div>
                  <h1 className="text-5xl font-black text-white tracking-tight leading-tight">
                    卡菲卡智慧製造股份有限公司<br />
                    <span className="text-slate-500 bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600">2025 年度碳盤查報告書 (草案)</span>
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-[10px] text-orange-500 font-bold bg-orange-500/5 px-3 py-1.5 rounded-lg border border-orange-500/20">
                      <CheckCircle2 size={14} />
                      <span>ISO 14064-1:2018 框架</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                      <Database size={14} />
                      <span>GWP: AR6 (2021)</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 opacity-20">
                  <div className="h-8 bg-slate-800 w-1/3 rounded-lg animate-pulse"></div>
                  <div className="h-16 bg-slate-800 w-3/4 rounded-2xl animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-slate-800 w-24 rounded-lg animate-pulse"></div>
                    <div className="h-6 bg-slate-800 w-24 rounded-lg animate-pulse"></div>
                  </div>
                </div>
              )}

              {/* 2. Overview Section */}
              <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all group">
                  <span className="block text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 group-hover:text-orange-500 transition-colors">盤查主體</span>
                  <span className="text-lg font-bold text-slate-200">卡菲卡智慧製造股份有限公司</span>
                </div>
                <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all group">
                  <span className="block text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 group-hover:text-orange-500 transition-colors">盤查期間</span>
                  <span className="text-lg font-bold text-slate-200">2025/01/01 - 2025/12/31</span>
                </div>
              </div>

              {/* 3. Base Year Section */}
              <section className={`space-y-6 transition-all duration-1000 ${isVisible('baseYear') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                    基準年設定
                  </h2>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Section 01</span>
                </div>

                {isVisible('baseYear') ? (
                  <div className="bg-gradient-to-br from-emerald-500/10 to-transparent p-8 rounded-3xl border border-emerald-500/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-xs font-black text-emerald-500 uppercase tracking-widest mb-1">SELECTED BASE YEAR</div>
                        <div className="text-3xl font-black text-white">2023 年度</div>
                      </div>
                      <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black border border-emerald-500/30">
                        VERIFIED BY AI
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                      根據 14064-1 規範，系統已自動校對 2023 年之電力排碳係數 (0.495 kgCO2e/度) 與相關燃料排放因子。此基準年將作為 2030 減碳 30% 之計算起點。
                    </p>
                  </div>
                ) : (
                  <div className="h-32 bg-slate-900/40 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center gap-4 group">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-slate-700 rounded-full animate-bounce"></div>
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] group-hover:text-slate-500 transition-colors">正在等待用戶設定參數...</span>
                  </div>
                )}
              </section>

              {/* 4. Boundaries Section */}
              <section className={`space-y-6 transition-all duration-1000 ${isVisible('boundaries') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                    組織邊界鑑定
                  </h2>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Section 02</span>
                </div>

                {isVisible('boundaries') ? (
                  <div className="grid grid-cols-3 gap-4 animate-in fade-in slide-in-from-right-4 duration-700">
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <Activity size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-500 mb-1">鑑定方法</div>
                        <div className="text-xs font-bold text-white">營運控制權法</div>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <Layout size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-500 mb-1">設施數量</div>
                        <div className="text-xs font-bold text-white">4 個據點 (HQ + 3 工廠)</div>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-500 mb-1">排除範圍</div>
                        <div className="text-xs font-bold text-white">外部租賃倉庫 (忽略)</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-24 bg-slate-900/20 border border-slate-800 rounded-3xl animate-pulse"></div>
                )}
              </section>

              {/* 5. Emissions Summary Section */}
              <section className={`space-y-6 transition-all duration-1000 ${isVisible('emissions') ? 'opacity-100 scale-100' : 'opacity-10 scale-[0.98]'}`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                    溫室氣體排放量摘要
                  </h2>
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Section 03</span>
                </div>

                {isVisible('emissions') ? (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-900/80 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-800">
                          <tr>
                            <th className="px-6 py-4">類別 (ISO Category)</th>
                            <th className="px-6 py-4">來源說明</th>
                            <th className="px-6 py-4 text-right">排放量 (tCO2e)</th>
                          </tr>
                        </thead>
                        <tbody className="bg-slate-900/20 divide-y divide-slate-800">
                          <tr className="hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-5 flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-orange-500 rounded-full"></div>
                              <span className="font-bold">Category 1: 直接排放</span>
                            </td>
                            <td className="px-6 py-5 text-slate-400 font-medium">天然氣燃燒、公務車</td>
                            <td className="px-6 py-5 text-right font-mono font-bold text-orange-500">85.42</td>
                          </tr>
                          <tr className="hover:bg-slate-800/30 transition-colors">
                            <td className="px-6 py-5 flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-orange-400 rounded-full"></div>
                              <span className="font-bold">Category 2: 能源間接</span>
                            </td>
                            <td className="px-6 py-5 text-slate-400 font-medium">外購電力</td>
                            <td className="px-6 py-5 text-right font-mono font-bold text-orange-400">594.00</td>
                          </tr>
                        </tbody>
                        <tfoot className="bg-orange-500/10 border-t border-orange-500/20">
                          <tr>
                            <td colSpan={2} className="px-6 py-4 font-black text-orange-500 text-xs uppercase tracking-widest">Total Gross Emissions</td>
                            <td className="px-6 py-4 text-right font-mono font-black text-white text-lg">679.42</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 bg-slate-900/20 border border-slate-800 rounded-3xl animate-pulse"></div>
                )}
              </section>

              {/* 6. Final Summary Section */}
              {isVisible('summary') && (
                <div className="py-12 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <div className="bg-slate-800/20 p-8 rounded-3xl border border-slate-700/50 flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">報告草案已完成生成</h3>
                      <p className="text-sm text-slate-500">所有數據已根據 ISO 14064-1:2018 進行初步勾稽與計算。</p>
                    </div>
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-orange-500/20 hover:scale-105 transition-transform">
                      進入詳細校閱介面
                    </button>
                  </div>
                </div>
              )}

              {/* Padding bottom */}
              <div className="h-32"></div>
            </div>
          </div>

          {/* Floating Action Button for Report Status */}
          <div className="absolute right-12 bottom-12 z-20">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-4 rounded-3xl shadow-2xl flex items-center gap-6 group hover:border-orange-500/50 transition-all">
              <div className="relative">
                <Activity className="text-orange-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">報告生成進度</span>
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
