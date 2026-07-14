'use client';

import {
  LineChart,
  ShieldCheck,
  Building,
  Cpu,
  Factory,
  Recycle,
  Award,
  Workflow
} from 'lucide-react';

export default function CafecaIsunfaSlide8() {
  const experiences = [
    {
      year: '2017 - 2020',
      title: '新北市政府溫室氣體追蹤',
      description: '導入萬級物聯網與邊緣運算裝置，實現全市級溫室氣體即時追蹤系統，奠定巨量環境數據處理基礎。',
      icon: LineChart,
    },
    {
      year: '2018 - 2021',
      title: '金融監理沙盒實證 (好好證券)',
      description: '具備深厚合規與資安底蘊，協助企業通過金管會金融監理沙盒實證，厚植創新業務之競爭力。',
      icon: ShieldCheck,
    },
    {
      year: '2019',
      title: '金管會檢查局數位孿生專案',
      description: '建構數位孿生實驗環境，強化政策之情境模擬與回測驗證，展現頂尖的模型模擬與演算技術。',
      icon: Building,
    },
    {
      year: '2020 - 2021',
      title: '參與國家高速網路中心專案',
      description: '參與建構國家級人工智能大數據算力平台「臺灣杉二號」，積累處理超級電腦算力與系統架構經驗。',
      icon: Cpu,
    },
    {
      year: '2020 - 2022',
      title: '台積電 (TSMC) 碳盤查實證',
      description: '開發物流碳足跡工具，協助台積電進行全年度運輸碳盤查，累積大型企業碳盤查經驗。',
      icon: Factory,
    },
    {
      year: '2025 - 2026',
      title: '中國砂輪 (KINIK) 碳盤查實證',
      description: '透過 Green AI 技術實現全自動化碳盤查，結合製程溯源技術，精準發掘污泥廢棄物中的再生價值。',
      icon: Recycle,
    },
    {
      year: '2026',
      title: '經濟部與 NVIDIA Taipei-1',
      description: '獲選第四批次算力執行單位，取得國際頂尖超級電腦算力資源，進一步深化費思模型推理運算與工具調用能力。',
      icon: Award,
    },
    {
      year: '2022 - Now',
      title: '費思永續智能核心引擎',
      description: '收斂過去大型系統與 AI 落地經驗，開創以費思為核心的碳盤查智能機器人，賦能企業實現綠色典範移轉。',
      icon: Workflow,
    }
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-gray-100 text-gray-900 font-sans">

      {/* Info: (20260629 - Luphia) Background Gradients from isunfa.com style */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff8c00] to-[#ffda44] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff8c00] to-[#ffda44] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
      </div>

      {/* Info: (20260629 - Luphia) Header */}
      <div className="z-20 w-full px-16 flex justify-between items-end mb-10 mt-4 border-b border-orange-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-50 ring-1 ring-orange-200 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-widest">Experience & Milestones</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 tracking-tight">
            團隊重要經歷與實績
          </h2>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-sm font-medium mb-1">關鍵里程碑</p>
          <p className="text-xl font-bold text-gray-800">2017 – 2026</p>
        </div>
      </div>

      {/* Info: (20260629 - Luphia) Grid Layout 4x2 */}
      <div className="z-20 w-full grid grid-cols-4 gap-6 px-16 mb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden">

            {/* Info: (20260629 - Luphia) Subtle highlight gradient on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-orange-500 font-mono tracking-wider">{exp.year}</span>
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-100 transition-all">
                <exp.icon className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-[15px] font-bold text-gray-800 mb-3 leading-snug min-h-[46px] flex items-start">{exp.title}</h3>

            <p className="text-gray-500 text-[13px] leading-relaxed flex-1">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
