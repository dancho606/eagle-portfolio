import { useState } from 'react';
import { Instagram, Facebook, Volume2, VolumeX } from 'lucide-react';
import { GridCard } from './components/GridCard';
import { services, kols, ventures, caseMatch, partners, recommendations, news, mediaBadges } from './data/content';

type Tab = 'services' | 'kols' | 'caseMatch' | 'partners' | 'recommendations' | 'ventures';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('services');
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Top metallic accent */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Editorial Hero */}
        <div className="mb-24">
          <div className="flex flex-col gap-12 lg:gap-16 items-center">

            {/* Top: Signature Visual Poster (Wide banner) */}
            <div className="w-full max-w-5xl mx-auto px-4">
              <div className="relative aspect-[21/9] md:aspect-[3/1] lg:aspect-[21/7] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-zinc-800 shadow-3xl group">
                <img
                  src="/images/hero_new.jpg"
                  alt="TGE Hero Banner"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                {/* Visual Label */}
                <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[10px] tracking-[0.3em] text-amber-500 font-bold">2026 OFFICIAL BANNER</div>
                  <div className="text-xl md:text-2xl font-bold tracking-tighter mt-1 italic">雄鷹娛樂文創</div>
                </div>
              </div>
            </div>

            {/* Bottom: Dramatic Typography & Branding */}
            <div className="w-full text-center flex flex-col items-center">
              {/* Logo Section */}
              <div className="mb-10 relative inline-block group">
                <div className="absolute -inset-6 bg-gradient-to-br from-red-600/20 to-amber-500/10 blur-3xl group-hover:from-red-600/30 transition-all duration-700"></div>
                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-3xl overflow-hidden border-2 border-amber-500/20 shadow-2xl backdrop-blur-sm">
                  <img
                    src="/images/logo_v2.webp"
                    alt="Eagle Logo"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4 max-w-4xl">
                <div className="flex items-center justify-center gap-4 text-amber-500 font-bold tracking-[0.5em] text-xs md:text-sm">
                  <span className="w-8 md:w-12 h-px bg-amber-500/50"></span>
                  VISIONARY MEDIA SOLUTIONS
                  <span className="w-8 md:w-12 h-px bg-amber-500/50"></span>
                </div>

                <h1 className="text-6xl md:text-9xl font-bold leading-none tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="inline-block text-white mr-4">雄鷹</span>
                  <span className="inline-block bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">娛樂文創</span>
                </h1>

                <div className="pt-4 flex flex-wrap justify-center items-center gap-4 md:gap-6">
                  <div className="text-[10px] md:text-sm tracking-[0.3em] text-gray-400 font-medium uppercase">Tiptop Genius Entertainment</div>
                  <div className="px-4 py-1.5 border border-amber-500/30 rounded-full text-[10px] md:text-xs text-amber-500 font-bold tracking-widest uppercase bg-amber-500/5">
                    Agency Portfolio 2026
                  </div>
                </div>

                <div className="mt-10 px-4 w-full">
                  <div className="max-w-2xl mx-auto relative p-6 md:p-8 bg-zinc-900/30 backdrop-blur-md border border-zinc-800/50 rounded-2xl">
                    <p className="text-base md:text-lg leading-relaxed text-gray-300 italic" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      "擁有<span className="text-amber-400 font-semibold">十年以上整合行銷經驗</span>，累積上百件成功案例，為目前網路市場最具影響力的品牌推手之一。"
                    </p>
                  </div>
                </div>

                {/* YouTube Visual Player (Relocated below quote) */}
                <div className="mt-16 w-full max-w-4xl mx-auto px-4">
                  <div className="relative aspect-video overflow-hidden rounded-[2rem] border-4 border-zinc-800 shadow-[0_0_50px_-12px_rgba(245,158,11,0.2)] group bg-zinc-950">
                    {/* Metallic Frame Overlay */}
                    <div className="absolute inset-0 border-[4px] border-zinc-900/50 rounded-[1.8rem] pointer-events-none z-10"></div>
                    <div className="absolute inset-0 border border-amber-500/10 rounded-[1.8rem] pointer-events-none z-10"></div>

                    <video
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/images/hero_new.jpg"
                    >
                      <source src="/videos/hero-video-compressed.mp4" type="video/mp4" />
                      您的瀏覽器不支援影片播放。
                    </video>

                    {/* Mute/Unmute Toggle Button */}
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute bottom-6 right-6 z-20 p-3 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group/mute"
                      title={isMuted ? "取消靜音" : "靜音"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover/mute:scale-110 transition-transform" />
                      ) : (
                        <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-amber-500 group-hover/mute:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 w-full">
                  <a
                    href="https://www.instagram.com/hsuan.ya_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-start gap-3 px-4 sm:px-5 py-2 sm:py-2.5 border border-purple-600/20 bg-purple-600/5 hover:bg-purple-600/10 rounded-lg transition-colors duration-300 group"
                  >
                    <Instagram className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-purple-400 font-bold tracking-widest text-[10px] sm:text-sm">INSTAGRAM</span>
                  </a>
                  <a
                    href="https://www.facebook.com/tge.tiptop.genius/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-start gap-3 px-4 sm:px-5 py-2 sm:py-2.5 border border-blue-600/20 bg-blue-600/5 hover:bg-blue-600/10 rounded-lg transition-colors duration-300 group"
                  >
                    <Facebook className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-blue-400 font-bold tracking-widest text-[10px] sm:text-sm">FACEBOOK</span>
                  </a>
                  <a
                    href="https://lin.ee/jFkOyph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-start gap-3 px-4 sm:px-5 py-2 sm:py-2.5 border border-green-600/20 bg-green-600/5 hover:bg-green-600/10 rounded-lg transition-colors duration-300 group"
                  >
                    <svg className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 4.9 0 10.946c0 5.464 4.35 10.04 10.297 10.835.402.086 1.15.228 1.15.228s.229 1.402.136 2.06c0 0-.107.656-.07.8.036.143.207.243.607-.036 3.65-2.535 7.42-7.143 7.42-7.143 2.65-1.442 4.41-3.957 4.41-6.744C24 4.9 18.627 0 12 0zm-5.18 10.222c0 .243-.197.44-.44.44H4.333c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.047c.243 0 .44.197.44.44v2.666zm3.553 0c0 .243-.197.44-.44.44H7.886c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v2.666zm3.996 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v1.78h.862c-.002.3-.002.593-.002.886zm5.176 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.19c.243 0 .44.197.44.44v.667h-1.305v.333h1.305v.667h-1.305v.333h1.305v.667z" />
                    </svg>
                    <span className="text-green-400 font-bold tracking-widest text-[10px] sm:text-sm">LINE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="mb-16 px-2 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-1.5 md:gap-2 bg-zinc-950 border border-zinc-800 p-1.5 md:p-2 rounded-2xl">
              {[
                { id: 'services' as Tab, label: '專業服務' },
                { id: 'kols' as Tab, label: 'KOL陣容' },
                { id: 'caseMatch' as Tab, label: '案件媒合' },
                { id: 'partners' as Tab, label: '合作客戶' },
                { id: 'recommendations' as Tab, label: '媒體推薦' },
                { id: 'ventures' as Tab, label: '關係企業' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center justify-center py-3 md:py-4 px-2 font-bold text-xs md:text-sm lg:text-base transition-all duration-300 overflow-hidden rounded-xl ${activeTab === tab.id ? 'text-black' : 'text-gray-500 hover:text-amber-400 hover:bg-zinc-900'
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
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-24">
          {activeTab === 'services' && services.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'kols' && kols.map((kol, i) => (
            <div key={kol.name} style={{ animationDelay: `${i * 30}ms` }} className="w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={kol.name} image={kol.image} href={kol.link} lineLink={kol.line} />
            </div>
          ))}
          {activeTab === 'caseMatch' && caseMatch.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'partners' && partners.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'recommendations' && recommendations.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px] animate-[fadeIn_0.6s_ease-out_both]">
              <GridCard title={item.title} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
          {activeTab === 'ventures' && ventures.map((item, i) => (
            <div key={item.title} style={{ animationDelay: `${i * 50}ms` }} className="animate-[fadeIn_0.6s_ease-out_both] w-[calc(50%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] max-w-[300px]">
              <GridCard title={item.title} subtitle={item.subtitle} href={item.link} icon={item.icon} image={item.image} />
            </div>
          ))}
        </div>

        {/* News Flash Section - Paginated Carousel (2 items per page) */}
        <div className="mb-20 w-full px-4">
          <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-3 text-amber-500/80 font-bold tracking-[0.4em] text-[10px]">
                <span className="w-6 h-px bg-amber-500/30"></span>
                NEWS FLASH
                <span className="w-6 h-px bg-amber-500/30"></span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                新聞快訊
              </h2>
              <p className="text-xs text-zinc-500 mt-2">← 左右滑動查看更多 →</p>
            </div>

            {/* Paginated Scrolling Container */}
            <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <div className="flex gap-4">
                {news && (() => {
                  // 將新聞分組，每頁2個
                  const pages = [];
                  for (let i = 0; i < news.length; i += 2) {
                    pages.push(news.slice(i, i + 2));
                  }

                  return pages.map((pageNews, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="flex-shrink-0 w-full snap-center grid grid-cols-2 gap-3 md:gap-6"
                    >
                      {pageNews.map((item: any, i: number) => (
                        <a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
                        >
                          {/* Image Section */}
                          <div className="aspect-[4/3] w-full overflow-hidden relative">
                            <img
                              src={item.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"}
                              alt={item.title}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                          </div>

                          {/* Content Section */}
                          <div className="p-3 md:p-5 flex flex-col flex-grow relative">
                            <div className="mb-2">
                              <span className="text-[9px] md:text-[10px] text-amber-500/90 font-bold tracking-wider uppercase px-2 py-0.5 border border-amber-500/20 rounded-full bg-amber-500/5">
                                {item.source}
                              </span>
                            </div>

                            <h3 className="text-sm md:text-lg font-bold leading-snug text-gray-100 group-hover:text-amber-400 transition-colors line-clamp-3 md:line-clamp-2">
                              {item.title}
                            </h3>

                            <div className="mt-auto pt-3 flex items-center justify-end">
                              <span className="text-[9px] md:text-xs text-zinc-500 group-hover:text-amber-500/80 transition-colors flex items-center gap-1">
                                READ MORE <span className="transition-transform group-hover:translate-x-1">→</span>
                              </span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>

            <div className="w-full pt-8 border-t border-zinc-900/40">
              <img
                src={mediaBadges}
                alt="Media Partners"
                className="w-full max-w-md mx-auto opacity-30 hover:opacity-60 transition-all duration-1000 grayscale hover:grayscale-0 contrast-125"
              />
            </div>
          </div>
        </div>

        {/* Action Section */}
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://lin.ee/jFkOyph"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-start gap-3 px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-green-600/30 border border-green-800 relative overflow-hidden rounded-full w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <svg className="relative w-8 h-8 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.373 0 0 4.9 0 10.946c0 5.464 4.35 10.04 10.297 10.835.402.086 1.15.228 1.15.228s.229 1.402.136 2.06c0 0-.107.656-.07.8.036.143.207.243.607-.036 3.65-2.535 7.42-7.143 7.42-7.143 2.65-1.442 4.41-3.957 4.41-6.744C24 4.9 18.627 0 12 0zm-5.18 10.222c0 .243-.197.44-.44.44H4.333c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.047c.243 0 .44.197.44.44v2.666zm3.553 0c0 .243-.197.44-.44.44H7.886c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v2.666zm3.996 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h.885c.243 0 .44.197.44.44v1.78h.862c-.002.3-.002.593-.002.886zm5.176 0c0 .243-.197.44-.44.44h-2.19c-.243 0-.44-.197-.44-.44V7.556c0-.243.197-.44.44-.44h2.19c.243 0 .44.197.44.44v.667h-1.305v.333h1.305v.667h-1.305v.333h1.305v.667z" />
                </svg>
                <span className="relative whitespace-nowrap">LINE</span>
              </a>

              <a
                href="https://www.instagram.com/hsuan.ya_official"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-start gap-3 px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-purple-600/30 border border-purple-800 relative overflow-hidden rounded-full w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Instagram className="relative w-8 h-8 flex-shrink-0 text-white" />
                <span className="relative whitespace-nowrap">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/tge.tiptop.genius/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-start gap-3 px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-blue-600/30 border border-blue-800 relative overflow-hidden rounded-full w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Facebook className="relative w-8 h-8 flex-shrink-0 text-white" />
                <span className="relative whitespace-nowrap">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Powered By */}
      <footer className="w-full py-8 text-center relative z-10">
        <p className="text-zinc-600 text-xs tracking-wider">
          Powered by <a href="#" className="hover:text-amber-500 transition-colors duration-300">智賦AI品牌行銷-theintellibrand</a>
        </p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default App;
