'use client';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Slide7() {
  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 flex items-center justify-center p-24 relative overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">頂級在地算力</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              專為邊緣運算優化的硬體配置，確保 7/24 的穩定輸出。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex items-center gap-8 group hover:bg-orange-600/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                <Cpu size={32} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">x86 / Arm 雙架構支援</h3>
                <p className="text-sm text-slate-500">彈性適配各種企業環境與邊緣設備。</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex items-center gap-8 group hover:bg-orange-600/5 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">CUDA 平台加速</h3>
                <p className="text-sm text-slate-500">深度整合 NVIDIA GPU，優化推理速度與能耗比。</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-orange-600/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="relative z-10 w-full p-12">
            <Image 
              src="/isuncloud/hero.png" 
              alt="Hardware" 
              width={1024}
              height={1024}
              className="w-full h-auto drop-shadow-[0_40px_40px_rgba(0,0,0,0.08)]" 
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
