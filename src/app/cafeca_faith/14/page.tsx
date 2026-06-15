'use client';

import { Users, GraduationCap } from 'lucide-react';

export default function CafecaFaithSlide13() {
  const team = [
    {
      id: 'chiwei',
      name: '張智崴',
      role: 'Co-founder & CEO',
      background: '環境工程 / 資訊科技',
      avatarColor: 'bg-orange-100 text-orange-600 border-orange-200',
      tagColor: 'bg-orange-50 text-orange-600 border-orange-200',
      description: '將金融合規與物理碳排程式化的系統架構師，參與臺灣、阿曼、中國國家級大型運算平台建設。受成功大學環境工程學系前系主任蔡俊鴻教授指導與號召，致力於推動綠色產業生態技術。超過十年以上的開源社群深耕，致力於以有趣的方式揭露政府資料，促進民眾與政府的溝通。',
    },
    {
      id: 'tzuhan',
      name: '梁紫涵',
      role: 'Co-founder & PE',
      background: '化學工程',
      avatarColor: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      tagColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      description: '參與臺灣杉二號開發，提出關鍵區塊鏈技術架構規劃，專長於數據分析。專注於系統底層邏輯與架構設計，並致力於將複雜技術落地應用。期望透過資訊科技打造具備信任與韌性的數位基礎設施，解決真實世界的挑戰，讓社會運作更加透明與永續。',
    },
    {
      id: 'yifang',
      name: '謝宜芳',
      role: 'Growth Marketing',
      background: '視覺傳達與行銷',
      avatarColor: 'bg-blue-100 text-blue-600 border-blue-200',
      tagColor: 'bg-blue-50 text-blue-600 border-blue-200',
      description: '專長於品牌溝通、內容策略與視覺設計。擅長將碳管理、數據應用與永續轉型等複雜議題，轉化為具理解度、說服力與市場溝通性的內容形式。負責協助團隊建立清晰的品牌敘事，讓技術價值能被企業、合作夥伴與使用者更快速理解，並提升產品在市場中的信任感與辨識度。',
    },
    {
      id: 'lien',
      name: '許瓈恩',
      role: 'Software Engineer',
      background: '資訊管理',
      avatarColor: 'bg-violet-100 text-violet-600 border-violet-200',
      tagColor: 'bg-violet-50 text-violet-600 border-violet-200',
      description: '專長於系統開發與 AI 駕馭工程，致力於將複雜的底層技術化繁為簡，讓強大的人工智慧卸下高門檻，成為人人都能輕鬆對話的日常夥伴。',
    },
  ];

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative overflow-hidden shadow-2xl flex flex-col items-center justify-center border border-slate-200 text-slate-800 font-sans">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-32 -top-32 w-[600px] h-[600px] bg-amber-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
        <div className="absolute -right-32 -bottom-32 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px]"></div>
      </div>

      <div className="absolute top-10 left-12 flex items-center gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">Core Team</span>
      </div>

      {/* Header */}
      <div className="z-20 w-full px-16 mb-8 mt-6">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight flex items-center gap-3">
          <Users className="w-8 h-8 text-orange-500" />
          核心團隊
        </h2>
        <p className="text-base text-slate-500 mt-2 font-medium">跨領域工程與數據專家，致力於推動綠色產業生態技術</p>
      </div>

      {/* Grid Layout */}
      <div className="z-20 w-full px-16 grid grid-cols-2 gap-6 relative">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden">

            {/* Header Section */}
            <div className="flex items-center gap-4 mb-4">
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                  <span className="text-sm font-bold text-slate-400">{member.role}</span>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border mt-1.5 ${member.tagColor}`}>
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold">{member.background}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed flex-1 text-justify pr-2">
              {member.description}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}
