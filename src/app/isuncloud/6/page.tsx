'use client';
import { motion } from 'framer-motion';
import { Monitor, ShieldCheck, Zap, Terminal } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-orange-600 font-black tracking-widest text-xs uppercase"
            >
              The AI Operating System
            </motion.div>
            <h2 className="text-6xl font-bold tracking-tight">iSunCloud OS v1.0.0</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              專為 AI 運算量身打造。基於 Ubuntu 24.04 深度優化，提供極致的算力調度與安全性。
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Monitor size={20} />, text: "相容於 Ubuntu 24.04 AI 作業系統" },
              { icon: <ShieldCheck size={20} />, text: "內建軍規級在地數據隔離機制" },
              { icon: <Zap size={20} />, text: "深度優化 CUDA 與 TensorRT 加速" },
              { icon: <Terminal size={20} />, text: "一鍵部署 AIPP Store 全球模型" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-2xl border border-slate-100"
              >
                <div className="text-orange-600">{item.icon}</div>
                <span className="font-bold text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-100 rounded-[2.5rem] border border-slate-200 p-2 shadow-md shadow-slate-200/50 overflow-hidden aspect-video relative group"
        >
          <div className="bg-white rounded-[2.2rem] h-full p-8 font-mono text-xs text-slate-600 space-y-2 overflow-hidden">
            <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-orange-600/50"></div>
              <span className="ml-2 text-[10px] uppercase tracking-widest font-bold">iSunCloud Terminal</span>
            </div>
            <div className="text-orange-600/70">isuncloud@box:~$ systemctl status isun-ai-engine</div>
            <div className="text-slate-500">● isun-ai-engine.service - iSunCloud AI Inference Engine</div>
            <div>   Loaded: loaded (/lib/systemd/system/isun-ai-engine.service; enabled)</div>
            <div className="text-orange-500">   Active: active (running) since Wed 2026-07-08 10:00:00 UTC</div>
            <div>   Main PID: 1234 (python3)</div>
            <div>   Tasks: 45 (limit: 4915)</div>
            <div>   Memory: 12.4G (limit: 64.0G)</div>
            <div className="text-orange-500 animate-pulse mt-4">[INFO] Synchronizing with TWS H100 Cluster...</div>
            <div className="text-orange-500 animate-pulse">[INFO] Periodic Reinforcement Training: ACTIVE</div>
            <div className="text-orange-500/50">[SUCCESS] Hybrid Bridge Connected.</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
