import { useState } from 'react'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="app">
      {/* Floating decorative elements */}
      <div className="floating-decor">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Main Hero Section */}
      <main className="hero">
        <div className="hero-content">
          {/* Dramatic Title */}
          <div className="title-wrapper">
            <h1 className="hero-title">
              <span className="title-divination">占</span>
              <span className="title-main">命</span>
            </h1>
            <div className="title-subtitle">
              Divine Your Destiny
            </div>
          </div>

          {/* Tagline with decorative borders */}
          <div className="tagline-container">
            <div className="decorative-line left"></div>
            <p className="tagline">探索命運的奧秘 · 窺視未來的軌跡</p>
            <div className="decorative-line right"></div>
          </div>

          {/* Divination Cards - Asymmetric Layout */}
          <div className="divination-grid">
            {/* BaZi Card */}
            <div 
              className={`divination-card bazi ${hoveredCard === 'bazi' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard('bazi')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">
                  <div className="bagua-symbol">☰</div>
                </div>
                <h2 className="card-title">八字命盤</h2>
                <p className="card-subtitle">Four Pillars of Destiny</p>
                <div className="card-description">
                  透過生辰八字，解析天干地支，
                  洞察五行平衡，預見命運起伏
                </div>
                <div className="card-cta">
                  <span className="cta-text">開始占卜</span>
                  <span className="cta-arrow">→</span>
                </div>
              </div>
            </div>

            {/* YiJing Card */}
            <div 
              className={`divination-card yijing ${hoveredCard === 'yijing' ? 'active' : ''}`}
              onMouseEnter={() => setHoveredCard('yijing')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-icon">
                  <div className="yijing-symbol">
                    <div className="hexagram">
                      <div className="line solid"></div>
                      <div className="line broken"><span></span><span></span></div>
                      <div className="line solid"></div>
                      <div className="line solid"></div>
                      <div className="line broken"><span></span><span></span></div>
                      <div className="line solid"></div>
                    </div>
                  </div>
                </div>
                <h2 className="card-title">易經卜卦</h2>
                <p className="card-subtitle">I Ching Divination</p>
                <div className="card-description">
                  問天地玄機，觀陰陽變化，
                  循六十四卦，悟人生智慧
                </div>
                <div className="card-cta">
                  <span className="cta-text">開始占卜</span>
                  <span className="cta-arrow">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="footer-note">
            <div className="note-dot"></div>
            <span>傳承千年智慧，結合現代科技</span>
            <div className="note-dot"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
