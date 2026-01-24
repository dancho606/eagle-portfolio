import { useState } from 'react';
import { GridCard } from './components/GridCard';
import { services, kols, ventures, caseMatch } from './data/content';

type Tab = 'services' | 'kols' | 'caseMatch' | 'ventures';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('services');

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Top metallic accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Editorial Hero */}
        <div className="mb-32">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left: Dramatic Typography & Branding */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Logo Section */}
              <div className="mb-12 relative inline-block group">
                <div className="absolute -inset-6 bg-gradient-to-br from-red-600/20 to-amber-500/10 blur-3xl group-hover:from-red-600/30 transition-all duration-700"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-amber-500/20 shadow-2xl backdrop-blur-sm">
                  <img
                    src="/images/logo_v2.webp"
                    alt="Eagle Logo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-amber-500 font-bold tracking-[0.5em] text-xs md:text-sm">
                  <span className="w-12 h-px bg-amber-500/50"></span>
                  VISIONARY MEDIA SOLUTIONS
                </div>

                <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="block text-white">雄鷹</span>
                  <span className="block bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">娛樂文創</span>
                </h1>

                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <div className="text-sm tracking-[0.3em] text-gray-400 font-medium">TIPTOP GENIUS ENTERTAINMENT</div>
                  <div className="px-4 py-1.5 border border-amber-500/30 rounded-full text-[10px] md:text-xs text-amber-500 font-bold tracking-widest uppercase bg-amber-500/5">
                    Agency Portfolio 2026
                  </div>
                </div>

                <div className="mt-12 max-w-xl">
                  <div className="relative p-8 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-2xl">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-amber-500/30 -translate-x-2 -translate-y-2"></div>
                    <p className="text-lg leading-relaxed text-gray-300 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      "擁有<span className="text-amber-400 font-semibold">十年以上整合行銷經驗</span>，累積上百件成功案例，為目前網路市場最具影響力的品牌推手之一。"
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-amber-600/20 bg-amber-600/5 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="text-amber-400 font-bold tracking-wider text-sm">@TIP.TOP.TGE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Signature Visual Poster */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2.5rem] border border-zinc-800 shadow-3xl group">
                <img
                  src="/images/hero_v2.webp"
                  alt="CEO Visual Poster"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                {/* Visual Label */}
                <div className="absolute bottom-10 right-10 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[10px] tracking-[0.3em] text-amber-500 font-bold">EXECUTIVE SELECTION</div>
                  <div className="text-2xl font-bold tracking-tighter mt-1 italic">LEONARD LIANG</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Selection */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 bg-zinc-950 border border-zinc-800 p-1.5 rounded-xl">
              {[
                { id: 'services' as Tab, label: '專業服務' },
                { id: 'kols' as Tab, label: 'KOL陣容' },
                { id: 'caseMatch' as Tab, label: '案件媒合' },
                { id: 'ventures' as Tab, label: '關係企業' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative min-w-[120px] flex-1 py-4 px-4 font-bold text-base transition-all duration-300 overflow-hidden whitespace-nowrap rounded-lg ${activeTab === tab.id ? 'text-black' : 'text-gray-500 hover:text-amber-400 hover:bg-zinc-900'
                    }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 animate-pulse"></div>
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
          {activeTab === 'services' && services.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'kols' && kols.map((kol, i) => (
            <div key={kol.name} style={{ animationDelay: `${i * 30}ms` }} className="animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={kol.name} image={kol.image} href={kol.link} lineLink={kol.line} />
            </div>
          ))}
          {activeTab === 'caseMatch' && caseMatch.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'ventures' && ventures.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} subtitle={item.subtitle} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
        </div>

        {/* Action Section with LINE Button */}
        <div className="text-center max-w-3xl mx-auto relative px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-amber-600/10 blur-3xl"></div>

          <div className="relative p-8 md:p-16 bg-zinc-950 border-2 border-amber-600/30 rounded-3xl">
            <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-amber-500 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-amber-500 rounded-br-3xl"></div>

            <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent inline-block">
                讓我們一起打造影響力
              </span>
            </h2>

            <a
              href="https://lin.ee/jFkOyph"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-green-600/30 border border-green-800 relative overflow-hidden rounded-full w-full sm:w-auto max-w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <svg className="relative w-8 h-8 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 4.9 0 10.946c0 5.464 4.35 10.04 10.297 10.835.402.086 1.15.228 1.15.228s.229 1.402.136 2.06c0 0-.107.656-.07.8.036.143.207.243.607-.036 3.65-2.535 7.42-7.143 7.42-7.143 2.65-1.442 4.41-3.957 4.41-6.744C24 4.9 18.627 0 12 0zm-5.18 10.222c0 .243-.197.44-.44.44H4.333c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.047c.243 0 .44.197.44.44v2.666zm3.553 0c0 .243-.197.44-.44.44H7.886c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v2.666zm3.996 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v1.78h.862c-.002.3-.002.593-.002.886zm5.176 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.19c.243 0 .44.197.44.44v.667h-1.305v.333h1.305v.667h-1.305v.333h1.305v.667z" />
              </svg>

              <span className="relative whitespace-nowrap">LINE 官方帳號</span>
              <span className="relative text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default App;
