import { Activity, Zap, ShieldCheck } from 'lucide-react';
import QRCode from 'react-qr-code';

export default function CafecaFintechSlide3() {
  const companies = [
    { rank: 1, name: '台灣積體電路製造', grade: 'S', score: 83.6 },
    { rank: 2, name: '中華電信', grade: 'A', score: 79.75 },
    { rank: 3, name: '統一超商', grade: 'A', score: 77.8 },
    { rank: 4, name: '遠東新世紀', grade: 'A', score: 74.25 },
    { rank: 5, name: '東和鋼鐵', grade: 'B', score: 67.7 },
    { rank: 6, name: '中國鋼鐵', grade: 'B', score: 64.8 },
    { rank: 7, name: '台塑石化', grade: 'B', score: 63.4 },
    { rank: 8, name: '亞洲水泥', grade: 'B', score: 61.6 },
    { rank: 9, name: '台灣電力公司', grade: 'B', score: 60.5 },
    { rank: 10, name: '麥寮汽電', grade: 'C', score: 52.9 },
  ];

  const getRankColor = (grade: string) => {
    switch (grade) {
      case 'S':
        return 'text-amber-500 bg-amber-50 border-amber-200';
      case 'A':
        return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'B':
        return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'C':
        return 'text-slate-500 bg-slate-100 border-slate-200';
      default:
        return 'text-slate-400 bg-slate-50 border-slate-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-amber-500 font-bold';
    if (score >= 70) return 'text-emerald-600 font-bold';
    if (score >= 60) return 'text-sky-600 font-bold';
    return 'text-slate-500 font-bold';
  };

  return (
    <div className="w-[1280px] h-[720px] bg-slate-50 relative flex overflow-hidden">
      {/* Info: (20260318 - Luphia) Left Sidebar - Summary */}
      <div className="w-[35%] h-full bg-white border-r border-slate-200 p-10 flex flex-col relative z-10 shadow-lg">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold tracking-wider mb-8">
            <Activity size={14} />
            INVESTMENT PROSPECT
          </div>

          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-8">
            <span className="text-sky-600">IRSC:</span>
            <br />
            Investment <br />
            Prospect Analysis
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-4 text-center">
              <div className="font-bold text-slate-800 text-lg">掃描查看完整分析報告</div>
              <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <QRCode
                  value="https://irsc.isunfa.com/report/8d42b994-c1d0-44db-b68c-7f0133eaab1e"
                  size={160}
                  level="H"
                />
              </div>
              <div className="text-sm font-mono text-slate-500 mt-2">REPORT ID: 8D42B994</div>
            </div>
          </div>
        </div>

        <div className="text-slate-400 text-[10px] font-mono border-t border-slate-100 pt-6 flex items-center gap-2">
          <ShieldCheck size={12} className="text-sky-500" />
          CAFECA FINTECH • IRSC ANALYSIS REPORT
        </div>
      </div>

      {/* Info: (20260318 - Luphia) Right Content - Ranking Table */}
      <div className="flex-1 h-full bg-gradient-to-br from-slate-50 to-slate-100/50 p-10 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
          <Zap size={400} />
        </div>

        <div className="relative z-10 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col h-[600px]">
          {/* Info: (20260318 - Luphia) Table Header */}
          <div className="grid grid-cols-12 gap-4 px-8 py-5 bg-slate-900 text-white font-semibold text-sm tracking-wide">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-5">Company</div>
            <div className="col-span-2 text-center">Grade</div>
            <div className="col-span-3 text-right">Score</div>
          </div>

          {/* Info: (20260318 - Luphia) Table Body */}
          <div className="flex-1 flex flex-col divide-y divide-slate-100">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="flex-1 grid grid-cols-12 gap-4 px-8 items-center bg-white hover:bg-slate-50/80 transition-colors"
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
                  {company.score.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
