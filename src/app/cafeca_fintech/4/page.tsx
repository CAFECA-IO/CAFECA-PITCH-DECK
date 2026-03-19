import { Activity, Leaf, ShieldCheck, Wind } from 'lucide-react';

export default function CafecaFintechSlide4() {
  const companies = [
    { rank: 1, name: '中華電信', grade: 'B', score: 68 },
    { rank: 2, name: '東和鋼鐵', grade: 'C', score: 55 },
    { rank: 3, name: '台灣積體電路製造', grade: 'D', score: 45 },
    { rank: 4, name: '統一超商', grade: 'E', score: 38 },
    { rank: 5, name: '遠東新世紀', grade: 'E', score: 32 },
    { rank: 6, name: '亞洲水泥', grade: 'E', score: 30 },
    { rank: 7, name: '中國鋼鐵', grade: 'F', score: 20 },
    { rank: 8, name: '台灣電力公司', grade: 'F', score: 18.5 },
    { rank: 9, name: '台塑石化', grade: 'F', score: 10 },
    { rank: 10, name: '麥寮汽電', grade: 'F', score: 10 },
  ];

  const getRankColor = (grade: string) => {
    switch (grade) {
      case 'A':
      case 'B':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'C':
        return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'D':
        return 'text-amber-500 bg-amber-50 border-amber-200';
      case 'E':
        return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'F':
        return 'text-rose-500 bg-rose-50 border-rose-200';
      default:
        return 'text-slate-400 bg-slate-50 border-slate-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 60) return 'text-emerald-600 font-bold';
    if (score >= 50) return 'text-sky-600 font-bold';
    if (score >= 40) return 'text-amber-500 font-bold';
    if (score >= 30) return 'text-orange-500 font-bold';
    return 'text-rose-500 font-bold';
  };

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex overflow-hidden">
      {/* Info: (20260318 - Luphia) Left Sidebar - Summary */}
      <div className="w-[35%] h-full bg-white border-r border-emerald-100 p-10 flex flex-col relative z-10 shadow-lg">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider mb-8 border border-emerald-200">
            <Leaf size={14} />
            CARBON HEALTH CHECK
          </div>

          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
            <span className="text-emerald-600">IRSC:</span>
            <br />
            Carbon Footprint <br />
            Check
          </h2>

          <div className="space-y-6">

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col gap-4">
              <div className="font-bold text-emerald-800 text-lg flex items-center gap-2">
                <Activity size={20} />
                健檢指標說明
              </div>
              <ul className="text-sm text-emerald-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">&ge;80</span>
                  <span>(S) 投入研發大量未來淨零減碳科技。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">70-79</span>
                  <span>(A) 導入跨界技術實現大量減碳。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600">60-69</span>
                  <span>(B) 完成所有減碳基礎措施。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-sky-600">50-59</span>
                  <span>(C) 具備基礎減碳作為，仍有部分遺漏。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-500">40-49</span>
                  <span>(D) 減碳基礎措施落實度不足。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-500">30-39</span>
                  <span>(E) 缺乏有效減碳作為。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-500">&lt;30</span>
                  <span>(F) 幾乎無實質減碳措施。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-slate-400 text-[10px] font-mono border-t border-slate-100 pt-6 flex items-center gap-2">
          <ShieldCheck size={12} className="text-emerald-500" />
          CAFECA FINTECH • CARBON FOOTPRINT CHECK
        </div>
      </div>

      {/* Info: (20260318 - Luphia) Right Content - Ranking Table */}
      <div className="flex-1 h-full bg-gradient-to-br from-emerald-50/50 to-slate-100 p-10 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 p-12 opacity-[0.03] pointer-events-none text-emerald-900">
          <Wind size={450} />
        </div>

        <div className="relative z-10 bg-white shadow-xl shadow-emerald-900/5 rounded-2xl border border-emerald-100 overflow-hidden flex flex-col h-[600px]">
          {/* Info: (20260318 - Luphia) Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-emerald-950 text-emerald-50 font-semibold text-sm tracking-wide">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-5">Company</div>
            <div className="col-span-2 text-center">Grade</div>
            <div className="col-span-3 text-right">Score</div>
          </div>

          {/* Info: (20260318 - Luphia) Table Body */}
          <div className="flex-1 flex flex-col divide-y divide-emerald-50">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex-1 grid grid-cols-12 gap-4 px-8 items-center bg-white hover:bg-emerald-50/50 transition-colors"
              >
                {/* Info: (20260318 - Luphia) Rank */}
                <div className="col-span-2 text-center font-bold text-slate-400 text-lg font-mono">
                  #{company.rank.toString().padStart(2, '0')}
                </div>

                {/* Info: (20260318 - Luphia) Company Name */}
                <div className="col-span-5 font-bold text-slate-800 text-xl tracking-wide">
                  {company.name}
                </div>

                {/* Info: (20260318 - Luphia) Grade */}
                <div className="col-span-2 flex justify-center">
                  <span className={`px-4 py-1 rounded-lg text-lg font-black border ${getRankColor(company.grade)}`}>
                    {company.grade}
                  </span>
                </div>

                {/* Info: (20260318 - Luphia) Score */}
                <div className={`col-span-3 text-right text-2xl font-mono tracking-tight ${getScoreColor(company.score)}`}>
                  {company.score}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
