import { Database, BrainCircuit, Wrench, Layers } from 'lucide-react';

export default function CafecaFintechSlide3() {
  return (
    <div className="w-[1280px] h-[720px] bg-slate-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 text-white font-sans">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob"></div>
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="px-16 pt-8 relative z-10 flex-shrink-0">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">AI Architecture</span>
        </div>
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 leading-tight mb-1">
          費思 v0.1.0
        </h1>
        <h2 className="text-xl font-light text-slate-300 tracking-wide">
          碳會計專業多模態模型 (Carbon Accounting Multimodal Model)
        </h2>
      </div>

      <div className="flex-1 px-16 flex flex-col justify-center relative z-10 w-full max-w-5xl mx-auto pb-4 gap-4 mt-2">
        
        {/* Top Layer: Interaction & Processing */}
        <div className="flex gap-4 w-full h-32">
          <div className="flex-1 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 p-5 flex flex-col justify-between hover:bg-slate-800/80 transition-colors shadow-lg group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
            <div className="flex items-center justify-between z-10 relative">
              <h3 className="text-xl font-bold text-indigo-300">思維鏈模組</h3>
              <BrainCircuit className="text-indigo-400 w-7 h-7 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <p className="text-slate-400 text-sm font-medium z-10 relative mt-2">Chain of Thought (CoT)<br/>增強複雜推理與邏輯運算解析能力</p>
          </div>

          <div className="flex-1 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 p-5 flex flex-col justify-between hover:bg-slate-800/80 transition-colors shadow-lg group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
            <div className="flex items-center justify-between z-10 relative">
              <h3 className="text-xl font-bold text-cyan-300">工具調用模組與工具庫</h3>
              <Wrench className="text-cyan-400 w-7 h-7 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <p className="text-slate-400 text-sm font-medium z-10 relative mt-2">Tool Calling Module & Library<br/>動態擷取外部數據與自動化作業</p>
          </div>
        </div>

        {/* Middle Layer: RAG DB */}
        <div className="w-full bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 p-6 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <Database className="text-purple-400 w-5 h-5" />
            <h3 className="text-xl font-bold text-purple-300">RAG 向量知識庫 (Vector Knowledge Base)</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-3 relative z-10">
            {[
              "財務會計", "化學工程", "環境工程", "IFRS",
              "GAAP", "土木工程", "材料工程", "水利工程"
            ].map((topic, i) => (
              <div key={i} className="bg-slate-900/50 rounded-lg py-2.5 px-2 text-center border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-purple-500/50 hover:bg-slate-800 transition-colors shadow-inner flex items-center justify-center">
                <span className="truncate">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Layer: Base Model */}
        <div className="w-full bg-gradient-to-r from-blue-900/80 via-indigo-900/80 to-blue-900/80 backdrop-blur-md rounded-xl border border-blue-500/30 py-5 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
          <h3 className="text-xs text-blue-300/80 font-medium mb-1.5 tracking-[0.2em] uppercase">Foundation Model</h3>
          <div className="flex items-center gap-3">
            <Layers className="text-blue-400 w-6 h-6" />
            <h2 className="text-2xl font-black text-white tracking-wide shadow-blue-500 drop-shadow-lg">
              福爾摩沙大模型 Llama 3.1-FFM 70B
            </h2>
          </div>
        </div>

      </div>

      <div className="absolute bottom-4 w-full px-16 flex justify-between text-slate-500 text-xs tracking-widest uppercase font-medium z-10 pointer-events-none">
        <div>MODEL ARCHITECTURE</div>
        <div className="flex gap-2 items-center">
          <div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] bg-blue-500"></div>
          2026 CAFECA FINTECH
        </div>
      </div>

    </div>
  );
}
