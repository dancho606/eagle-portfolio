import { useState } from 'react'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="app">
      {/* Floating Orbs - Anthropic Style but Subtle */}
      <div className="floating-decor">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <main className="container">
        {/* Hero Section - Combined Approach */}
        <header className="hero">
          <h1 className="hero-title">
            <span className="title-char glow">占</span>
            <span className="title-char">命</span>
          </h1>
          <p className="hero-subtitle">Divine Your Destiny · 探索命運的奧秘</p>
        </header>

        {/* Section Header - UI/UX Pro Structure */}
        <section className="divination-section">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">選擇您的占卜方式</h2>
            <div className="section-line"></div>
          </div>

          {/* Cards Grid - Balanced Layout */}
          <div className="cards-grid">
            {/* BaZi Card */}
            <article
              className={`card ${hoveredCard === 'bazi' ? 'card-active' : ''}`}
              onMouseEnter={() => setHoveredCard('bazi')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">
                  {/* Custom SVG - Anthropic Style */}
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="32" stroke="currentColor" strokeWidth="2" />
                    <path d="M36 4 L36 68 M4 36 L68 36" stroke="currentColor" strokeWidth="2" />
                    <circle cx="36" cy="36" r="10" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="card-title">八字命盤</h3>
                <p className="card-label">Four Pillars of Destiny</p>
                <p className="card-description">
                  根據您的出生年月日時，推算天干地支，
                  分析五行強弱，解讀命運格局，
                  預測人生起伏與發展趨勢
                </p>
                <button className="btn-primary">
                  <span>開始占卜</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </article>

            {/* YiJing Card */}
            <article
              className={`card ${hoveredCard === 'yijing' ? 'card-active' : ''}`}
              onMouseEnter={() => setHoveredCard('yijing')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">
                  {/* Custom Hexagram - Anthropic Detail */}
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <g transform="translate(12, 12)">
                      <rect x="0" y="0" width="48" height="5" rx="2.5" fill="currentColor" />
                      <rect x="0" y="10" width="48" height="5" rx="2.5" fill="currentColor" />
                      <rect x="0" y="20" width="20" height="5" rx="2.5" fill="currentColor" />
                      <rect x="28" y="20" width="20" height="5" rx="2.5" fill="currentColor" />
                      <rect x="0" y="30" width="48" height="5" rx="2.5" fill="currentColor" />
                      <rect x="0" y="40" width="20" height="5" rx="2.5" fill="currentColor" />
                      <rect x="28" y="40" width="20" height="5" rx="2.5" fill="currentColor" />
                    </g>
                  </svg>
                </div>
                <h3 className="card-title">易經卜卦</h3>
                <p className="card-label">I Ching Divination</p>
                <p className="card-description">
                  以時間起卦，觀察陰陽變化，
                  推演六十四卦象，解讀爻辭卦辭，
                  洞察事物發展規律與吉凶趨勢
                </p>
                <button className="btn-primary">
                  <span>開始占卜</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Trust Footer - UI/UX Pro Pattern */}
        <footer className="trust-footer">
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <span>傳承千年智慧</span>
          </div>
          <div className="divider"></div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <span>科技現代呈現</span>
          </div>
          <div className="divider"></div>
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <span>專業精準解讀</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
