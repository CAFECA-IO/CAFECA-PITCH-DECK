'use client';

import Image from 'next/image';

export default function Slide6() {
  const nutritionFacts = [
    { label: '熱量', value: '320', unit: 'kcal' },
    { label: '蛋白質', value: '8', unit: 'g' },
    { label: '脂肪', value: '14', unit: 'g' },
    { label: '飽和脂肪', value: '6', unit: 'g' },
    { label: '反式脂肪', value: '0', unit: 'g' },
    { label: '碳水化合物', value: '42', unit: 'g' },
    { label: '糖', value: '12', unit: 'g' },
    { label: '鈉', value: '150', unit: 'mg' },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-950 relative overflow-hidden shadow-2xl border border-neutral-800">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/isunfa_chiayi/isunfa_chiayi_gourmet_food_1777801620297.png" 
            alt="Gourmet Food" 
            fill 
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
        </div>

        {/* Right Side: Content */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] p-16 flex flex-col justify-center z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-green-500/50 text-green-400 text-sm tracking-widest mb-6 w-max bg-neutral-900/80 backdrop-blur-md">
            03 | 營養分析師
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-md">智能營養分析師</h2>
          <h3 className="text-2xl font-light text-green-200 mb-12 drop-shadow-md">為產品的健康把關</h3>

          {/* Nutrition Floating Labels */}
          <div className="grid grid-cols-2 gap-4">
            {nutritionFacts.map((fact, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-900/70 backdrop-blur-md border border-neutral-700 p-4 rounded-xl flex justify-between items-center transform hover:-translate-y-1 transition-transform duration-300 shadow-lg"
              >
                <span className="text-neutral-300 font-medium">{fact.label}</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">{fact.value}</span>
                  <span className="text-sm text-green-400 ml-1">{fact.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 right-16 text-white/40 text-xs tracking-[0.2em] uppercase z-20">
          卡菲卡金融科技股份有限公司 (52650861)
        </div>

      </div>
    </div>
  );
}
