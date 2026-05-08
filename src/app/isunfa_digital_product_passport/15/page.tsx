'use client';

export default function DPPSlide15() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-[1280px] h-[720px] bg-neutral-900 relative overflow-hidden shadow-2xl flex flex-col border border-gray-800 rounded-xl">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="flex-1 flex flex-col p-16 z-10">
          <div className="mb-12">
            <span className="text-amber-400 font-bold tracking-[0.2em] text-sm uppercase">Case Study: End-of-Life</span>
            <h2 className="text-5xl font-bold text-white mt-4 tracking-wide leading-tight">實戰解析：工具機拆解與 Urban Mining (城市採礦)</h2>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="bg-neutral-800/40 border border-neutral-700 p-8 rounded-2xl shadow-xl hover:border-amber-500/50 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />
                <div className="text-4xl text-amber-500 font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
                <h3 className="text-2xl text-amber-400 font-bold mb-4">拆解指引</h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  針對大型工具機，需明確標示馬達模組、伺服控制器與鑄鐵底座的<span className="text-amber-200 font-medium">無損拆解順序</span>，並嚴格隔離有害物質（如潤滑油、冷卻液），以符合 WEEE 規範。
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-neutral-800/40 border border-neutral-700 p-8 rounded-2xl shadow-xl hover:border-cyan-500/50 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
                <div className="text-4xl text-cyan-500 font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
                <h3 className="text-2xl text-cyan-400 font-bold mb-4">精煉還原</h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  拆解後的稀土元素與貴金屬，需交由專業靶材與精煉廠（如 <span className="text-cyan-200 font-medium">光洋科、佳龍科技</span> 等）進行冶煉，還原為工業級純度的可用原料。
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-neutral-800/40 border border-neutral-700 p-8 rounded-2xl shadow-xl hover:border-emerald-500/50 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
                <div className="text-4xl text-emerald-500 font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">03</div>
                <h3 className="text-2xl text-emerald-400 font-bold mb-4">城市礦山基礎</h3>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  這些詳盡的回收數據與逆向物流流程，正是建構 <span className="text-emerald-200 font-medium">Urban Mining（城市採礦）</span> 的關鍵，讓廢棄物重新成為下一代產品的零組件。
                </p>
              </div>
            </div>

            {/* Visual connector / Context */}
            <div className="mt-12 bg-neutral-800/60 border border-neutral-700 rounded-xl p-6 flex items-center justify-between shadow-inner">
              <div className="text-gray-400 font-medium tracking-wider">End-of-Life 階段不僅是處置，更是資源再生的起點</div>
              <div className="px-4 py-2 bg-gradient-to-r from-amber-600 to-emerald-600 rounded-md text-white font-bold text-sm tracking-widest shadow-lg shadow-emerald-900/20">
                CIRCULAR ECONOMY
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 w-full px-16 flex justify-between text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
          <div>iSunFA DPP Solutions</div>
          <div className="flex gap-2 items-center">
            <span className="font-mono">#15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
