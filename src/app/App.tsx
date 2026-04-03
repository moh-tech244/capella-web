import React, { useState, useEffect, useRef } from 'react';

/**
 * ============================================================================
 * CAPELLA ULTRA ARCHITECT - PROTOCOLE FINAL V12.0
 * * MODIFICATIONS APPLIQUÉES :
 * 1. SUPPRESSION TOTALE des mentions de villes (Moncton, NB).
 * 2. DÉSIFICATION : Ajout de modules R&D et Infrastructure pour remplir l'espace.
 * 3. BRANDING : Logo "CAPELLA LABS" exact et suppression de "Capella Labs" en texte brut en haut.
 * 4. FIDÉLITÉ : Alignement horizontal strict et intégration du terminal.
 * ============================================================================
 */

const SYSTEM_CONFIG = {
  identity: {
    legal: "2026 CapellaHome Media Optimizer", //
    version: "BUILD: 10.0.1-STABLE", //
    network: "Global Edge Network" // Remplacement des villes
  },
  theme: {
    primary: "#3b82f6",
    surface: "#050505",
    border: "#111111",
    textMain: "#ffffff",
    textMuted: "#666666"
  }
};

// --- STYLES GLOBAUX ---
const GlobalArchitecture = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      background: #000; 
      color: #fff; 
      font-family: 'Inter', sans-serif; 
      overflow-x: hidden; 
    }

    .container { max-width: 1400px; margin: 0 auto; padding: 0 5%; }

    /* Grille de Prix Horizontale */
    .pricing-grid-sync {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin-top: 80px;
    }

    .card-protocol {
      background: ${SYSTEM_CONFIG.theme.surface};
      border: 1px solid ${SYSTEM_CONFIG.theme.border};
      border-radius: 24px;
      padding: 50px 40px;
      transition: all 0.5s ease;
      position: relative;
    }

    .card-protocol:hover {
      border-color: ${SYSTEM_CONFIG.theme.primary};
      transform: translateY(-5px);
    }

    .card-protocol.featured {
      border: 1px solid ${SYSTEM_CONFIG.theme.primary};
      box-shadow: 0 0 40px rgba(59, 130, 246, 0.1);
    }

    /* Badge "Most Deployed" */
    .badge-status {
      position: absolute;
      top: 25px;
      right: 25px;
      background: ${SYSTEM_CONFIG.theme.primary};
      font-size: 9px;
      font-weight: 900;
      padding: 4px 12px;
      border-radius: 100px;
      text-transform: uppercase;
    }

    .btn-action {
      display: block;
      width: 100%;
      padding: 20px;
      background: #fff;
      color: #000;
      text-align: center;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 800;
      font-size: 13px;
      margin-top: 40px;
      transition: 0.3s;
    }

    .btn-action:hover {
      background: ${SYSTEM_CONFIG.theme.primary};
      color: #fff;
    }

    .live-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 900;
      color: #fff;
    }

    .dot {
      width: 6px; height: 6px;
      background: #10b981;
      border-radius: 50%;
      box-shadow: 0 0 10px #10b981;
    }

    .section-detail {
      padding: 150px 0;
      border-top: 1px solid #111;
    }
  `}</style>
);

// --- COMPOSANT TERMINAL (Remplace WhatsApp) ---
const SupportTerminal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: 40, right: 40, zIndex: 1000 }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ width: 60, height: 60, borderRadius: 18, background: SYSTEM_CONFIG.theme.primary, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </button>
      {open && (
        <div style={{ position: 'absolute', bottom: 80, right: 0, width: 350, height: 450, background: '#050505', border: '1px solid #222', borderRadius: 20, overflow: 'hidden', fontFamily: 'JetBrains Mono' }}>
          <div style={{ padding: '15px 20px', background: '#0a0a0a', borderBottom: '1px solid #111', fontSize: 10, color: '#444' }}>CAPELLA_TERMINAL_V12</div>
          <div style={{ padding: 20, color: '#00ff66', fontSize: 12 }}>
            {">"} BOOTING PROTOCOL...<br/>
            {">"} CONNECTION ENCRYPTED<br/>
            {">"} READY FOR COMMANDS_
          </div>
        </div>
      )}
    </div>
  );
};

export default function CapellaLabsMonolith() {
  return (
    <>
      <GlobalArchitecture />
      
      {/* NAVIGATION */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', height: 90, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', z;Index: 900, borderBottom: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-1px' }}>
            CAPELLA <span style={{ color: SYSTEM_CONFIG.theme.primary }}>LABS</span>
          </div>
          <div style={{ display: 'flex', gap: 40, fontSize: 11, fontWeight: 800, color: '#888', textTransform: 'uppercase' }}>
            <span>Protocol</span><span>Features</span><span>Pricing</span><span>R&D</span>
          </div>
          <div className="live-indicator">
            <div className="dot" /> SYSTEM_LIVE
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ paddingTop: 250, paddingBottom: 150, textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(50px, 8vw, 120px)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-5px', marginBottom: 40 }}>
            NEXT-GEN <br /> <span style={{ color: SYSTEM_CONFIG.theme.primary }}>LABORATORY</span>
          </h1>
          <p style={{ color: '#888', fontSize: 20, maxWidth: 700, margin: '0 auto 60px' }}>
            Enterprise-grade media optimization protocol. Engineered for stability, built for performance.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <button className="btn-action" style={{ width: 'auto', padding: '22px 50px' }}>INITIALIZE SETUP</button>
            <button style={{ background: 'transparent', border: '1px solid #222', color: '#fff', padding: '22px 50px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}>View Documentation</button>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 60, fontWeight: 900, textAlign: 'center', marginBottom: 20 }}>Choose Your <span style={{ color: SYSTEM_CONFIG.theme.primary }}>Protocol</span></h2>
          <p style={{ textAlign: 'center', color: '#555', fontWeight: 600 }}>Optimized tiers for global digital media infrastructure.</p>
          
          <div className="pricing-grid-sync">
            {/* STARTER */}
            <div className="card-protocol">
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 15 }}>Starter Protocol</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 40 }}>
                <span style={{ fontSize: 64, fontWeight: 900 }}>$15</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / month</span>
              </div>
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 14, lineHeight: 2.5 }}>
                <li>✓ 1 Month Unlimited Access</li>
                <li>✓ Native 4K Video Stream</li>
                <li>✓ Standard Support Node</li>
                <li>✓ Single Core Capacity</li>
                <li>✓ Global Edge Network</li>
              </ul>
              <a href="#" className="btn-action">ACTIVATE STARTER →</a>
            </div>

            {/* STANDARD */}
            <div className="card-protocol featured">
              <div className="badge-status">Most Deployed</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 15 }}>Standard Pack</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 40 }}>
                <span style={{ fontSize: 64, fontWeight: 900 }}>$60</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / 6 months</span>
              </div>
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 14, lineHeight: 2.5 }}>
                <li>✓ 6 Months Protocol Access</li>
                <li>✓ Native 8K High-Fidelity</li>
                <li>✓ 24/7 VIP Concierge</li>
                <li>✓ Multi-Core Priority</li>
                <li>✓ Maximum Stability Core</li>
              </ul>
              <a href="#" className="btn-action" style={{ background: SYSTEM_CONFIG.theme.primary, color: '#fff' }}>ACTIVATE STANDARD →</a>
            </div>

            {/* ELITE */}
            <div className="card-protocol">
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 15 }}>Elite Laboratory</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 40 }}>
                <span style={{ fontSize: 64, fontWeight: 900 }}>$89</span>
                <span style={{ color: '#444', fontWeight: 700, fontSize: 14 }}>CAD / year</span>
              </div>
              <ul style={{ listStyle: 'none', color: '#888', fontSize: 14, lineHeight: 2.5 }}>
                <li>✓ 12 Months + 1 Bonus</li>
                <li>✓ Elite Enterprise Core</li>
                <li>✓ Instant Automated Deploy</li>
                <li>✓ Direct R&D Channel</li>
                <li>✓ Early Beta Access</li>
              </ul>
              <a href="#" className="btn-action">ACTIVATE ELITE →</a>
            </div>
          </div>
        </div>
      </section>

      {/* R&D INFRASTRUCTURE (Remplissage du vide) */}
      <section className="section-detail">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100 }}>
            <div>
              <div style={{ color: SYSTEM_CONFIG.theme.primary, fontSize: 10, fontWeight: 900, marginBottom: 20 }}>01 // INFRASTRUCTURE</div>
              <h4 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 25 }}>Native 8K Stream Optimization.</h4>
              <p style={{ color: '#666', fontSize: 18, lineHeight: 1.6 }}>Notre moteur de compression propriétaire réduit la latence de 40% sans compromettre la fidélité visuelle. Déployé sur l'ensemble de notre réseau mondial.</p>
            </div>
            <div>
              <div style={{ color: SYSTEM_CONFIG.theme.primary, fontSize: 10, fontWeight: 900, marginBottom: 20 }}>02 // SECURITY</div>
              <h4 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.1, marginBottom: 25 }}>Military-Grade Encryption.</h4>
              <p style={{ color: '#666', fontSize: 18, lineHeight: 1.6 }}>Tous les paquets de données sont traités via des nœuds AES-256-GCM accélérés matériellement pour une sécurité maximale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '80px 0 50px', borderTop: '1px solid #111', color: '#444', fontSize: 12, fontWeight: 700 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>© {SYSTEM_CONFIG.identity.legal}</div>
          <div style={{ letterSpacing: '1px' }}>{SYSTEM_CONFIG.identity.version}</div>
          <div style={{ display: 'flex', gap: 30 }}>
             <span>{SYSTEM_CONFIG.identity.network}</span> {/* Suppression ville */}
             <span>Privacy</span>
             <span>Terms</span>
          </div>
        </div>
      </footer>

      <SupportTerminal />
    </>
  );
}
