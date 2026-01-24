import { useState } from 'react'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="app">
      <main className="container">
        {/* Hero Section */}
        <header className="hero">
          <h1 className="hero-title">
            占 卜 天 機
          </h1>
          <p className="hero-subtitle">探索命運的奧秘，窺視未來的軌跡</p>
        </header>

        {/* Divination Options */}
        <section className="divination-section">
          <div className="section-header">
            <div className="section-line"></div>
            <h2 className="section-title">選擇您的占卜方式</h2>
            <div className="section-line"></div>
          </div>

          <div className="cards-grid">
            {/* BaZi Card */}
            <article
              className={`card ${hoveredCard === 'bazi' ? 'card-hover' : ''}`}
              onMouseEnter={() => setHoveredCard('bazi')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-header">
                <div className="card-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" />
                    <path d="M32 4 L32 60 M4 32 L60 32" stroke="currentColor" strokeWidth="2" />
                    <circle cx="32" cy="32" r="8" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="card-title">八字命盤</h3>
                <p className="card-label">Four Pillars of Destiny</p>
              </div>

              <div className="card-body">
                <p className="card-description">
                  根據您的出生年月日時，推算天干地支，
                  分析五行強弱，解讀命運格局，
                  預測人生起伏與發展趨勢。
                </p>
              </div>

              <div className="card-footer">
                <button className="btn-primary">
                  <span>開始占卜</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </article>

            {/* YiJing Card */}
            <article
              className={`card ${hoveredCard === 'yijing' ? 'card-hover' : ''}`}
              onMouseEnter={() => setHoveredCard('yijing')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-header">
                <div className="card-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="4" rx="2" fill="currentColor" />
                    <rect x="8" y="22" width="48" height="4" rx="2" fill="currentColor" />
                    <rect x="8" y="32" width="20" height="4" rx="2" fill="currentColor" />
                    <rect x="36" y="32" width="20" height="4" rx="2" fill="currentColor" />
                    <rect x="8" y="42" width="48" height="4" rx="2" fill="currentColor" />
                    <rect x="8" y="52" width="20" height="4" rx="2" fill="currentColor" />
                    <rect x="36" y="52" width="20" height="4" rx="2" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="card-title">易經卜卦</h3>
                <p className="card-label">I Ching Divination</p>
              </div>

              <div className="card-body">
                <p className="card-description">
                  以時間起卦，觀察陰陽變化，
                  推演六十四卦象，解讀爻辭卦辭，
                  洞察事物發展規律與吉凶趨勢。
                </p>
              </div>

              <div className="card-footer">
                <button className="btn-primary">
                  <span>開始占卜</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Trust Elements */}
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
