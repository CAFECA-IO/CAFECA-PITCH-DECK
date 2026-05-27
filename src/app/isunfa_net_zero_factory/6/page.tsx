'use client';

import { Factory, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

interface INodePosition {
  x: number;
  y: number;
  label?: string;
  sub?: string;
}

const nodes: Record<string, INodePosition> = {
  F1: { x: 350, y: 50, label: "Factory F1", sub: "ORIGIN" },
  R1: { x: 534, y: 94, label: "Refinery R1" },
  F2: { x: 610, y: 200, label: "Factory F2", sub: "NODE" },
  R2: { x: 534, y: 306, label: "Refinery R2" },
  F3: { x: 350, y: 350, label: "Factory F3", sub: "NODE" },
  R3: { x: 166, y: 306, label: "Refinery R3" },
  F4: { x: 90, y: 200, label: "Factory F4", sub: "ENDPOINT" },
  F5: { x: 166, y: 94, label: "Factory F5", sub: "ENDPOINT" },
  CT: { x: 350, y: 200 }
};

interface IFlowLineProps {
  start: INodePosition;
  end: INodePosition;
  type: 'material' | 'waste';
}

const FlowLine = ({ start, end, type }: IFlowLineProps) => {
  const isMaterial = type === 'material';
  const strokeColor = isMaterial ? '#34d399' : '#cbd5e1';
  const textColor = isMaterial ? '#10b981' : '#94a3b8';
  const label = isMaterial ? 'Material' : 'Waste';
  const marker = isMaterial ? 'url(#arrow-mat)' : 'url(#arrow-waste)';
  
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  let angle = Math.atan2(dy, dx) * 180 / Math.PI;
  if (angle > 90 || angle <= -90) {
    angle += 180;
  }

  return (
    <g>
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={strokeColor} strokeWidth="3" markerEnd={marker} />
      <text 
        x={(start.x + end.x) / 2} 
        y={(start.y + end.y) / 2 - 8} 
        fontSize="10" 
        fill={textColor} 
        textAnchor="middle" 
        fontWeight="700" 
        letterSpacing="0.05em"
        transform={`rotate(${angle} ${(start.x + end.x) / 2} ${(start.y + end.y) / 2})`}
      >
        {label}
      </text>
    </g>
  );
};

interface ICTLineProps {
  end: INodePosition;
}

const CTLine = ({ end }: ICTLineProps) => {
  const ct = nodes.CT;
  if (!ct) return null;
  return (
    <line x1={ct.x} y1={ct.y} x2={end.x} y2={end.y} stroke="#fcd34d" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrow-ct)" opacity="0.8" />
  );
};

const renderFactory = (node: INodePosition, isEndpoint = false) => (
  <div key={node.label} className="absolute group z-10" style={{ left: node.x - 28, top: node.y - 28, width: 56, height: 56 }}>
    <div className={`w-full h-full rounded-full flex items-center justify-center border-2 mb-1 shadow-sm transition-all relative z-10
      ${isEndpoint ? 'bg-slate-900 border-slate-700 text-teal-400 group-hover:scale-110' : 'bg-white border-slate-200 text-slate-600 group-hover:border-sky-300 group-hover:text-sky-600'}`}>
      {isEndpoint ? <Layers size={24} /> : <Factory size={24} />}
    </div>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[100px] text-center pointer-events-none z-20">
      <span className={`text-[9px] font-bold tracking-wider px-1.5 rounded inline-block mb-0.5 ${isEndpoint ? 'text-teal-400 bg-slate-800' : 'text-sky-600 bg-sky-50'}`}>{node.sub}</span>
      <h5 className="text-[11px] font-bold text-slate-800 leading-tight bg-white/60 backdrop-blur-sm rounded">{node.label}</h5>
    </div>
  </div>
);

const renderRefinery = (node: INodePosition) => (
  <div key={node.label} className="absolute group z-10" style={{ left: node.x - 28, top: node.y - 28, width: 56, height: 56 }}>
    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] z-20 border-2 border-white translate-x-1 -translate-y-1" />
    <div className="w-full h-full bg-emerald-50 border-2 border-emerald-300 rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:rotate-45 transition-transform relative z-10">
      <RefreshCw size={24} />
    </div>
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[100px] text-center pointer-events-none z-20">
      <span className="text-[9px] font-bold tracking-wider text-emerald-600 bg-emerald-100 px-1.5 rounded inline-block mb-0.5">REFINERY</span>
      <h5 className="text-[11px] font-bold text-slate-800 leading-tight bg-white/60 backdrop-blur-sm rounded">{node.label}</h5>
    </div>
  </div>
);

export default function NetZeroFactorySlide6() {

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 font-sans">
      <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col border border-slate-100 rounded-xl">

        {/* Subtle Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="flex-1 flex flex-col px-16 pt-8 pb-16 z-10 justify-between">

          <div className="mb-2">
            <span className="text-emerald-600 font-bold tracking-[0.2em] text-sm uppercase bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">iSunFA Net-Zero Factory</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-sky-950 mt-3 tracking-wide leading-tight">Continuous Symbiosis: Star Ecosystem</h2>
          </div>

          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-1 z-20">
            <h4 className="text-base font-bold text-sky-950 mb-0.5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-sky-800 rounded-full inline-block"></span>
              Multi-Tier Circular Topology (F1 → F5)
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              Waste is efficiently upcycled across an interconnected orbital ring of refineries (R1-R3) and factories (F1-F5), fully validated by the central Certifier CT hub.
            </p>
          </div>

          <div className="flex-1 w-full relative flex items-center justify-center my-2">
            
            <div className="relative w-[700px] h-[400px]">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <marker id="arrow-waste" markerWidth="12" markerHeight="12" refX="44" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                    <path d="M 0 0 L 12 6 L 0 12 z" fill="#94a3b8" />
                  </marker>
                  <marker id="arrow-mat" markerWidth="12" markerHeight="12" refX="44" refY="6" orient="auto" markerUnits="userSpaceOnUse">
                    <path d="M 0 0 L 12 6 L 0 12 z" fill="#10b981" />
                  </marker>
                  <marker id="arrow-ct" markerWidth="10" markerHeight="10" refX="42" refY="5" orient="auto" markerUnits="userSpaceOnUse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
                  </marker>
                </defs>

                {/* CT Lines */}
                <CTLine end={nodes.R1} />
                <CTLine end={nodes.R2} />
                <CTLine end={nodes.R3} />

                {/* Perimeter Flow Lines */}
                <FlowLine start={nodes.F1} end={nodes.R1} type="waste" />
                <FlowLine start={nodes.R1} end={nodes.F2} type="material" />
                <FlowLine start={nodes.F2} end={nodes.R2} type="waste" />
                <FlowLine start={nodes.R2} end={nodes.F3} type="material" />
                <FlowLine start={nodes.F3} end={nodes.R3} type="waste" />
                <FlowLine start={nodes.R3} end={nodes.F4} type="material" />
                <FlowLine start={nodes.R3} end={nodes.F5} type="material" />
              </svg>

              {/* Central CT Node */}
              <div className="absolute group z-30" style={{ left: nodes.CT.x - 40, top: nodes.CT.y - 40, width: 80, height: 80 }}>
                <div className="w-full h-full bg-amber-500 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-amber-100 group-hover:scale-105 transition-transform relative z-10">
                  <ShieldCheck size={36} className="stroke-[2]" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[180px] text-center bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-amber-200 pointer-events-none">
                  <div className="text-[10px] font-bold text-amber-600 tracking-wider mb-0.5">GLOBAL TRUST HUB</div>
                  <h5 className="text-sm font-bold text-slate-800 leading-tight">Certifier CT</h5>
                  <p className="text-[10px] text-slate-500 leading-tight mt-1">End-to-end certification of secondary raw materials.</p>
                </div>
              </div>

              {/* Render Nodes */}
              {renderFactory(nodes.F1)}
              {renderRefinery(nodes.R1)}
              {renderFactory(nodes.F2)}
              {renderRefinery(nodes.R2)}
              {renderFactory(nodes.F3)}
              {renderRefinery(nodes.R3)}
              {renderFactory(nodes.F4, true)}
              {renderFactory(nodes.F5, true)}
              
            </div>

          </div>

          {/* Bottom Trust Note */}
          <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-250 flex items-center gap-3 z-20">
            <span className="text-xl shrink-0">🛡️</span>
            <div className="flex-1">
              <p className="text-xs leading-relaxed font-medium">
                <strong>Star-Topology Ecosystem:</strong> By orbiting manufacturing sectors around the Certifier CT hub, the AI brain orchestrates an unbroken circular flow from Factory F1 down to F5, drastically maximizing raw resource independence.
              </p>
            </div>
          </div>

        </div>

        <div className="absolute bottom-6 left-0 right-0 px-16 flex justify-between text-slate-400 text-[10px] tracking-[0.2em] uppercase font-medium z-10">
          <div>iSunFA Net-Zero Factory</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#06</span>
          </div>
        </div>
      </div>
    </div>
  );
}
