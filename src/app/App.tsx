import React, { useState, useEffect, useRef } from 'react';

/**
 * ============================================================================
 * CAPELLA LABS - CORE PROTOCOL V15 (OPTIMIZED MONOLITH)
 * * STATUS: Production Ready
 * * FIXES: No syntax errors, zIndex corrected, City mentions removed.
 * * DESIGN: High-density grid alignment, Terminal-first support.
 * ============================================================================
 */

// --- GLOBAL SYSTEM CONFIG ---
const SYSTEM = {
  id: "CAPELLA LABS",
  legal: "2026 CapellaHome Media Optimizer",
  version: "BUILD: 10.0.1-STABLE",
  network: "Global Edge Network Nodes",
  links: {
    starter: "https://buy.stripe.com/7sY14oflJ2ZM8Kgf5z4ko03",
    standard: "https://buy.stripe.com/aFa9AUddB0RE6C8g9D4ko04",
    elite: "https://buy.stripe.com/bJeeVe7Th57U5y43mR4ko05"
  }
};

// --- STYLES ENGINE (PIXEL-PERFECT & OPTIMIZED) ---
const CapellaStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { 
      background: #000; 
      color: #fff; 
      font-family: 'Inter', sans-serif; 
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Core Layout Units */
    .master-container { max-width: 1440px; margin: 0 auto; padding: 0 40px; }

    /* Nav Sync */
    .nav-bar {
      position: fixed; top: 0; left: 0; width: 100%; height: 90px;
      background: rgba(0,0,0,0.85); backdrop-filter: blur(25px);
      border-bottom: 1px solid #111; z-index: 900;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 5%;
    }

    /* Pricing Grid Sync */
    .protocol-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 30px; margin-top: 100px;
    }

    @media (max-width: 1024px) { .protocol-grid { grid-template-columns: 1fr; } }

    /* Card Architecture */
    .card {
      background: #050505; border: 1px solid #111;
      border-radius: 32px; padding: 60px 45px;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative; overflow: hidden;
    }

    .card:hover {
      border-color: #3b82f6; transform: translateY(-10px);
      box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 40px rgba(59, 130, 246, 0.2);
    }

    .card.featured {
      border: 1px solid #3b82f6;
      box-shadow: inset 0 0 40px rgba(59,130,246,0.05);
    }

    /* Status Badge */
    .badge-pop {
      position: absolute; top: 30px; right: 30px;
      background: #3b82f6; color: white; padding: 6px 16px;
      border-radius: 100px; font-size: 10px; font-weight: 900;
      letter-spacing: 0.5px; text-transform: uppercase;
    }

    /* Typography */
    .hero-text {
      font-size: clamp(60px, 10vw, 130px); font-weight: 900;
      line-height: 0.85; letter-spacing: -6px; text-transform: uppercase;
    }

    .btn-capella {
      display: block; width: 100%; padding: 22px;
      background: #fff; color: #000; text-align: center;
      text-decoration: none; border-radius: 16px;
      font-weight: 800; font-size: 13px; transition: 0.4s;
    }

    .btn-capella:hover { background: #3b82f6; color: #fff; }

    /* Live Sync Indicator */
    .live-node { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 900; }
    .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; }

    /* Technical Fillers (Background Grid) */
    .tech-bg {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(#111 1px, transparent 1px);
      background-size: 40px 40px; z-index: -1; opacity: 0.5;
    }
  `}</style>
);

// --- TERMINAL COMPONENT (CMD LOGIC) ---
const TerminalSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 10000 }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: 64, height: 64, background: '#3b82f6', borderRadius: 20, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.4)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </button>
      {isOpen && (
        <div style={{ position: 'absolute', bottom: 85, right: 0, width: 380, height: 480, background: '#050505', border: '1px solid #222', borderRadius: 24, overflow: 'hidden', fontFamily: 'JetBrains Mono', boxShadow: '0 50px 100px rgba(0,0,0,0.9)' }}>
          <div style={{ padding: '15px 20px', background: '#0a0a0a', borderBottom: '1px solid #111', fontSize: 10, color: '#444', display: 'flex', justifyContent: 'space-between' }}>
            <span>PROTOCOL_SUPPORT_V12</span>
            <span style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)}>✕</span>
          </div>
          <div style={{ padding: 25, color: '#00ff66', fontSize: 13, lineHeight: 1.6 }}>
            {">"} INITIALIZING SECURITY HANDSHAKE...<br/>
            {">"} GLOBAL_NETWORK_STABLE<br/>
            {">"} WELCOME TO CAPELLA LABS R&D<br/>
            {">"} HOW CAN WE ASSIST YOUR DEPLOYMENT?
          </div>
        </div>
      )}
    </div>
  );
};

export default function CapellaProduction() {
  return (
    <>
      <CapellaStyles />
      <div className="tech-bg" />
      
      {/* NAVBAR */}
      <nav className="nav-bar">
        <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-1.5px' }}>
          CAPELLA <span style={{ color: '#3b82f6' }}>LABS</span>
        </div>
        <div style={{ display: 'flex', gap: 45, fontSize: 11, fontWeight: 800, color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span>Protocol</span><span>R&D</span><span>Pricing</span><span>Nodes</span>
        </div>
        <div className="live-node">
          <div className="dot" /> SYSTEM_LIVE
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 220, paddingBottom: 150, textAlign: 'center' }}>
        <div className="master-container">
          <div style={{ display: 'inline-block', padding: '10px 25px', border: '1px solid #111', borderRadius: 100, fontSize: 10, fontWeight: 900, color: '#555', letterSpacing: '2px', marginBottom: 40 }}>
            CORE_V12_OPERATIONAL
          </div>
          <h1 className="hero-text">
            NEXT-GEN <br /> <span style={{ color: '#3b82f6' }}>LABORATORY</span>
          </h1>
          <p style={{ color: '#888', fontSize: 20, maxWidth: 800, margin: '50px auto 70px', fontWeight: 500, lineHeight: 1.5 }}>
            Enterprise-grade media optimization protocol. Engineered for absolute stability, built for extreme performance.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <a href="#pricing" className="btn-capella" style={{ width: 'auto', padding: '24px 70px' }}>INITIALIZE SETUP</a>
            <button style={{ background: 'transparent', border: '1px solid #222', color: '#fff', padding: '24px 70px', borderRadius: 16, fontWeight: 800, cursor: 'pointer' }}>Documentation</button>
          </div>
        </div>
      </section>

      {/* PRICING GRID */}
      <section id="pricing" style={{ padding: '120px 0' }}>
        <div className="master-container">
          <div style={{ textAlign: 'center', marginBottom: 100 }}>
            <h2 style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-3px' }}>Select <span style={{ color: '#3b82f6' }}>Protocol</span></h2>
            <p style={{ color: '#444', fontWeight: 700, fontSize: 18, marginTop: 15 }}>Global infrastructure deployment tiers.</p>
          </div>

          <div className="protocol-grid">
            {/* CARD 01 */}
            <div className="card">
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Starter Node</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 50 }}>
                <span style={{ fontSize: 68, fontWeight: 900 }}>$15</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / month</span>
              </div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, #111, transparent)', marginBottom: 40 }} />
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 15, lineHeight: 2.8, marginBottom: 50 }}>
                <li>✓ 1 Month Unlimited Access</li>
                <li>✓ Native 4K Video Stream</li>
                <li>✓ Standard Support Node</li>
                <li>✓ Single Core Capacity</li>
                <li>✓ Global Distributed Network</li>
              </ul>
              <a href={SYSTEM.links.starter} className="btn-capella">ACTIVATE STARTER →</a>
            </div>

            {/* CARD 02 (Featured) */}
            <div className="card featured">
              <div className="badge-pop">Most Deployed</div>
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Standard Pack</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 50 }}>
                <span style={{ fontSize: 68, fontWeight: 900 }}>$60</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / 6 months</span>
              </div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, #111, transparent)', marginBottom: 40 }} />
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 15, lineHeight: 2.8, marginBottom: 50 }}>
                <li>✓ 6 Months Protocol Access</li>
                <li>✓ Native 8K High-Fidelity</li>
                <li>✓ 24/7 VIP Concierge</li>
                <li>✓ Multi-Core Priority</li>
                <li>✓ Maximum Stability Core</li>
              </ul>
              <a href={SYSTEM.links.standard} className="btn-capella" style={{ background: '#3b82f6', color: '#fff' }}>ACTIVATE STANDARD →</a>
            </div>

            {/* CARD 03 */}
            <div className="card">
              <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Elite Lab</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 50 }}>
                <span style={{ fontSize: 68, fontWeight: 900 }}>$89</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / year</span>
              </div>
              <div style={{ height: 1, background: 'linear-gradient(90deg, #111, transparent)', marginBottom: 40 }} />
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 15, lineHeight: 2.8, marginBottom: 50 }}>
                <li>✓ 12 Months + 1 Bonus</li>
                <li>✓ Elite Enterprise Core</li>
                <li>✓ Instant Automated Deploy</li>
                <li>✓ Direct R&D Channel</li>
                <li>✓ Early Beta Access</li>
              </ul>
              <a href={SYSTEM.links.elite} className="btn-capella">ACTIVATE ELITE →</a>
            </div>
          </div>
        </div>
      </section>

      {/* R&D DETAILS (Remplissage) */}
      <section style={{ padding: '150px 0', borderTop: '1px solid #111' }}>
        <div className="master-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 120 }}>
            <div>
              <div style={{ color: '#3b82f6', fontSize: 10, fontWeight: 900, marginBottom: 20 }}>01 // INFRASTRUCTURE</div>
              <h4 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 30 }}>Native 8K Stream Optimization.</h4>
              <p style={{ color: '#666', fontSize: 19, lineHeight: 1.7 }}>Our proprietary compression engine reduces latency by 40% without compromising visual fidelity. Deployed across our encrypted global edge network.</p>
            </div>
            <div>
              <div style={{ color: '#3b82f6', fontSize: 10, fontWeight: 900, marginBottom: 20 }}>02 // SECURITY</div>
              <h4 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 30 }}>Military-Grade Encryption.</h4>
              <p style={{ color: '#666', fontSize: 19, lineHeight: 1.7 }}>All data packets are processed via AES-256-GCM hardware-accelerated nodes, ensuring total privacy and integrity for all lab members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '100px 0 60px', borderTop: '1px solid #111', color: '#333', fontSize: 12, fontWeight: 800 }}>
        <div className="master-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>© {SYSTEM.legal}</div>
          <div style={{ letterSpacing: '1px' }}>{SYSTEM.version}</div>
          <div style={{ display: 'flex', gap: 40 }}>
            <span>{SYSTEM.network}</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>

      <TerminalSupport />
    </>
  );
}
