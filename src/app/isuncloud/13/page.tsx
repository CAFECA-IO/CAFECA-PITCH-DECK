'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  ArrowRightLeft, 
  Stethoscope, 
  Scale, 
  Coins, 
  Factory,
  RefreshCw,
  Lock
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Slide13() {
  const [activeStep, setActiveStep] = useState(0);

  // Hardcoded particle positions to avoid impurity and effect-based state setting errors
  const particles = [
    { x: 120, y: -80 }, { x: -150, y: 120 }, { x: 80, y: 180 }, { x: -180, y: -90 },
    { x: 200, y: 40 }, { x: -50, y: -190 }, { x: 160, y: 140 }, { x: -120, y: 50 }
  ];

  // Animation sequence: 0: Initial, 1: Routing, 2: Feedback, 3: Encryption & Supercomputer, 4: Local Upgrade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const experts = [
    { icon: <Coins size={24} />, name: "金融專家", color: "text-amber-400" },
    { icon: <Stethoscope size={24} />, name: "醫療專家", color: "text-rose-400" },
    { icon: <Scale size={24} />, name: "法律專家", color: "text-orange-500" },
    { icon: <Factory size={24} />, name: "製造專家", color: "text-orange-500" }
  ];

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-orange-600 font-black tracking-widest text-xs uppercase"
            >
              Expert Model Orchestration
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight">百工百業專家模型</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              智能分發與持續進化機制。系統會自動根據請求內容調度最合適的產業專家模型，並將所有回饋轉化為模型進化的養分。
            </p>
          </div>

          <div className="space-y-8">
            {[
              { step: 1, text: "內容感知識別，自動路由至合適專家" },
              { step: 2, text: "全量回饋採集，打造持續進化的數據集" },
              { step: 3, text: "同態加密傳輸，確保數據在訓練時絕對私有" },
              { step: 4, text: "超級電腦集群迭代，本地模型即時升級" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-6 transition-all duration-500 ${activeStep === item.step ? 'opacity-100 translate-x-4' : 'opacity-30 translate-x-0'}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${activeStep === item.step ? 'bg-orange-600 text-black' : 'bg-slate-100 text-slate-500'}`}>
                  {item.step}
                </div>
                <span className={`text-lg font-bold ${activeStep === item.step ? 'text-slate-800' : 'text-slate-600'}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Animation Area */}
        <div className="relative aspect-square bg-white rounded-[4rem] border border-slate-100 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent"></div>
          
          {/* Central Orchestrator */}
          <motion.div 
            className="relative z-30 w-32 h-32 rounded-3xl bg-orange-600/10 border border-orange-500/30 flex flex-col items-center justify-center text-orange-600 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            animate={{ 
              scale: activeStep === 1 ? [1, 1.1, 1] : 1,
              borderColor: activeStep === 1 ? "rgba(16,185,129,0.8)" : "rgba(16,185,129,0.3)"
            }}
          >
             <Cpu size={40} strokeWidth={1.5} />
             <div className="text-[10px] font-black uppercase mt-2">Orchestrator</div>
          </motion.div>

          {/* Expert Models Grid */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {experts.map((e, i) => {
              const angles = [45, 135, 225, 315];
              const angle = angles[i] * (Math.PI / 180);
              const x = Math.cos(angle) * 160;
              const y = Math.sin(angle) * 160;

              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    x, y,
                    opacity: activeStep >= 1 ? 1 : 0.2,
                    scale: activeStep === 1 ? [1, 1.2, 1] : 1
                  }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center ${e.color} shadow-md shadow-slate-200/30`}>
                    {e.icon}
                    <div className="text-[8px] font-bold mt-1 text-slate-500">{e.name}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Routing Particles (Step 1) */}
          <AnimatePresence>
            {activeStep === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10"
              >
                {particles.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"
                    animate={{ 
                      x: [0, p.x],
                      y: [0, p.y],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Supercomputer & Encryption (Step 3) */}
          <AnimatePresence>
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className="absolute inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8"
              >
                <div className="relative">
                   <div className="w-32 h-32 rounded-full border-2 border-dashed border-orange-500/30 flex items-center justify-center text-orange-500">
                      <Lock size={48} />
                   </div>
                   <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t-2 border-orange-500 rounded-full"
                   />
                </div>
                <div className="text-center space-y-2">
                   <div className="text-lg font-bold text-orange-500 uppercase tracking-widest">同態加密傳輸</div>
                   <div className="flex items-center justify-center gap-4 text-slate-500">
                      <span>Local BOX</span>
                      <ArrowRightLeft size={16} />
                      <span className="text-orange-600 font-bold">H100 Supercomputer</span>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Local Upgrade Pulse (Step 4) */}
          <AnimatePresence>
            {activeStep === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                className="absolute inset-0 z-50 flex flex-col items-center justify-center"
              >
                <div className="w-full h-full absolute inset-0 bg-orange-600/10 pointer-events-none"></div>
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-64 h-64 border-4 border-orange-500 rounded-full"
                />
                <div className="relative z-10 flex flex-col items-center gap-4">
                   <RefreshCw className="text-orange-600 animate-spin" size={64} />
                   <div className="text-2xl font-black text-orange-600 uppercase tracking-tighter shadow-sm shadow-orange-100">Local Model Upgraded</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Legend */}
          <div className="absolute bottom-10 left-10 z-30">
             <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span>Orchestration Status: {activeStep === 0 ? 'IDLE' : activeStep === 1 ? 'ROUTING' : activeStep === 2 ? 'FEEDBACK' : activeStep === 3 ? 'ENCRYPTING' : 'UPGRADING'}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
