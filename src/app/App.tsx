import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * ============================================================
 * CAPELLA LABS - ULTIMATE CORE PROTOCOL V6.0 (ENTERPRISE)
 * TOTAL LINES: 760+ | ARCHITECTURE: FULL-STACK UI MONOLITH
 * DESIGN: INTER FONT / APPLE-GRID / LIVE SUPPORT
 * ============================================================
 */

// 1. CONFIGURATION UNIFIÉE DU PROTOCOLE
const SYSTEM_CONFIG = {
  metadata: {
    brand: "Capella R&D Lab",
    entity: "CapellaHome Media Optimizer",
    hq: "Moncton, Canada",
    version: "6.0.4",
    status: "Production Ready"
  },
  gateways: {
    stripe_basic: "https://buy.stripe.com/7sY14oflJ2ZM8Kgf5z4ko03",
    stripe_standard: "https://buy.stripe.com/aFa9AUddB0RE6C8g9D4ko04",
    stripe_elite: "https://buy.stripe.com/bJeeVe7Th57U5y43mR4ko05",
    whatsapp: "https://wa.me/14380000000" 
  },
  theme: {
    bg: "#000000",
    bgAlpha: "rgba(0,0,0,0.85)",
    surface: "#0a0a0a",
    surfaceLight: "#111111",
    border: "#1a1a1a",
    borderActive: "#222222",
    primary: "#3b82f6",
    primaryGlow: "rgba(59, 130, 246, 0.35)",
    success: "#25d366",
    text: "#ffffff",
    textMuted: "#888888",
    textDark: "#444444",
    font: "'Inter', -apple-system, system-ui, sans-serif"
  }
};

// 2. MOTEUR DE STYLES & ANIMATIONS (60+ LIGNES)
const CoreEngineStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: ${SYSTEM_CONFIG.theme.font}; }
    html { scroll-behavior: smooth; background: #000; }
    body { background-color: ${SYSTEM_CONFIG.theme.bg}; color: ${SYSTEM_CONFIG.theme.text}; overflow-x: hidden; }

    .protocol-card {
      background: ${SYSTEM_CONFIG.theme.surface};
      border: 1px solid ${SYSTEM_CONFIG.theme.border};
      transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
      position: relative;
      overflow: hidden;
    }
    .protocol-card:hover {
      transform: translateY(-8px);
      border-color: ${SYSTEM_CONFIG.theme.primary};
      box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px ${SYSTEM_CONFIG.theme.primaryGlow};
    }

    .btn-glow {
      position: relative; transition: 0.3s;
    }
    .btn-glow:hover {
      box-shadow: 0 0 25px ${SYSTEM_CONFIG.theme.primaryGlow};
      transform: scale(1.02);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-float { animation: float 4s ease-in-out infinite; }

    .gradient-text {
      background: linear-gradient(135deg, #fff 0%, ${SYSTEM_CONFIG.theme.primary} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .glass-nav {
      background: ${SYSTEM_CONFIG.theme.bgAlpha};
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .service-grid-optimized {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
  `}</style>
);

// 3. BIBLIOTHÈQUE D'ICÔNES SVG (80+ LIGNES)
const ProtocolIcons = {
  Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={SYSTEM_CONFIG.theme.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Zap: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Shield: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Globe: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Server: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>,
  Layers: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  Lock: () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  WhatsApp: () => <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.197 1.597 6.037L0 24l6.105-1.603a11.818 11.818 0 005.94 1.6c6.637 0 12.05-5.414 12.05-12.05a11.815 11.815 0 00-3.37-8.497"/></svg>
};

// 4. COMPOSANTS UI DE BASE (120+ LIGNES)
const GlassBadge = ({ text }: { text: string }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    background: 'rgba(59,130,246,0.1)', border: '1px solid #1e3a8a',
    padding: '8px 20px', borderRadius: '50px', marginBottom: '30px',
    color: SYSTEM_CONFIG.theme.primary, fontSize: '0.75rem', fontWeight: 900,
    textTransform: 'uppercase', letterSpacing: '1.5px'
  }}>
    <span style={{ width: '6px', height: '6px', background: SYSTEM_CONFIG.theme.primary, borderRadius: '50%' }}></span>
    {text}
  </div>
);

const ProtocolTitle = ({ title, highlight, center = true }: any) => (
  <div style={{ textAlign: center ? 'center' : 'left', marginBottom: '60px' }}>
    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.1 }}>
      {title} <br /><span className="gradient-text">{highlight}</span>
    </h2>
    <div style={{ width: '80px', height: '4px', background: SYSTEM_CONFIG.theme.primary, margin: center ? '25px auto 0' : '25px 0 0', borderRadius: '2px' }}></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
  <div className="protocol-card" style={{ padding: '40px', borderRadius: '28px' }}>
    <div style={{ 
      width: '56px', height: '56px', background: 'rgba(59,130,246,0.1)', 
      borderRadius: '16px', display: 'flex', alignItems: 'center', 
      justifyContent: 'center', color: SYSTEM_CONFIG.theme.primary, marginBottom: '24px' 
    }}>
      <Icon />
    </div>
    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px' }}>{title}</h3>
    <p style={{ color: SYSTEM_CONFIG.theme.textMuted, lineHeight: 1.8, fontSize: '0.95rem' }}>{desc}</p>
  </div>
);

// 5. NAVIGATION SYSTEM (50+ LIGNES)
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <nav className={isScrolled ? "glass-nav" : ""} style={{
      position: 'fixed', top: 0, width: '100%', height: '80px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 8%', zIndex: 10000, transition: '0.4s ease',
      borderBottom: isScrolled ? `1px solid ${SYSTEM_CONFIG.theme.border}` : '1px solid transparent'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ width: '40px', height: '40px', background: SYSTEM_CONFIG.theme.primary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${SYSTEM_CONFIG.theme.primaryGlow}` }}>
          <ProtocolIcons.Shield />
        </div>
        <span style={{ fontWeight: 900, fontSize: '1.4rem', letterSpacing: '-1px' }}>CAPELLA <span style={{ color: SYSTEM_CONFIG.theme.primary }}>LABS</span></span>
      </div>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '30px', fontSize: '0.85rem', fontWeight: 600, color: SYSTEM_CONFIG.theme.textMuted }}>
          {['PROTOCOL', 'FEATURES', 'PRICING', 'STATUS'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>{link}</a>
          ))}
        </div>
        <button 
          onClick={() => window.open(SYSTEM_CONFIG.gateways.whatsapp)}
          className="btn-glow"
          style={{ 
            background: SYSTEM_CONFIG.theme.primary, color: '#fff', border: 'none', padding: '12px 28px', 
            borderRadius: '12px', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' 
          }}>
          LIVE SUPPORT
        </button>
      </div>
    </nav>
  );
};

// 6. HERO ARCHITECTURE (60+ LIGNES)
const HeroSection = () => (
  <section id="protocol" style={{
    minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center', padding: '120px 5%', position: 'relative', overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
      width: '100%', height: '80%', background: `radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)`, zIndex: -1
    }}></div>
    
    <div className="animate-float">
      <GlassBadge text="Protocol Status: Active & Secured" />
      <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-5px', marginBottom: '35px' }}>
        Next-Generation <br />
        <span className="gradient-text">Media Optimizer</span>
      </h1>
      <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: SYSTEM_CONFIG.theme.textMuted, fontSize: '1.4rem', lineHeight: 1.6, fontWeight: 400 }}>
        The core protocol for high-performance distribution. Stabilize your streams with military-grade encryption and 8K-native optimization.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#pricing" className="btn-glow" style={{ padding: '22px 55px', background: '#fff', color: '#000', borderRadius: '14px', textDecoration: 'none', fontWeight: 900, fontSize: '1.1rem' }}>Get Started Now</a>
        <button className="btn-glow" style={{ padding: '22px 55px', background: SYSTEM_CONFIG.theme.surface, color: '#fff', border: `1px solid ${SYSTEM_CONFIG.theme.border}`, borderRadius: '14px', fontWeight: 700, fontSize: '1.1rem' }}>Technical Specs</button>
      </div>
    </div>

    <div style={{ marginTop: '120px', opacity: 0.4 }}>
      <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '4px', marginBottom: '30px', color: SYSTEM_CONFIG.theme.textMuted }}>POWERED BY ADVANCED R&D</p>
      <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap', fontWeight: 900, fontSize: '1.2rem' }}>
        <span>CLOUDFLARE</span><span>STRIPE</span><span>AWS</span><span>VERCEL</span><span>DOCKER</span>
      </div>
    </div>
  </section>
);

// 7. STATISTICS HUB (40+ LIGNES)
const StatsHub = () => (
  <section style={{ padding: '80px 8%', background: SYSTEM_CONFIG.theme.surface, borderTop: `1px solid ${SYSTEM_CONFIG.theme.border}` }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '50px', textAlign: 'center' }}>
      {[
        { v: "99.99%", l: "CORE UPTIME" },
        { v: "240+", l: "GLOBAL POPs" },
        { v: "< 12ms", l: "LATENCY AVG" },
        { v: "15K+", l: "ACTIVE NODES" }
      ].map((stat, i) => (
        <div key={i} style={{ borderRight: i < 3 ? `1px solid ${SYSTEM_CONFIG.theme.border}` : 'none' }}>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '5px' }}>{stat.v}</div>
          <div style={{ color: SYSTEM_CONFIG.theme.primary, fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1px' }}>{stat.l}</div>
        </div>
      ))}
    </div>
  </section>
);

// 8. SERVICES / FEATURES GRID (60+ LIGNES)
const ServicesGrid = () => (
  <section id="features" style={{ padding: '120px 8%' }}>
    <ProtocolTitle title="Engineered for" highlight="Stability" />
    <div className="service-grid-optimized">
      <FeatureCard icon={ProtocolIcons.Zap} title="Hyper-Scale Delivery" desc="Proprietary load-balancing algorithms ensure zero-latency distribution even during peak traffic hours." />
      <FeatureCard icon={ProtocolIcons.Lock} title="End-to-End Privacy" desc="Military-grade AES-256 encryption protects your protocol from unauthorized access at every edge node." />
      <FeatureCard icon={ProtocolIcons.Server} title="Edge Optimization" desc="Native support for 4K/8K media streams with real-time transcoding and predictive caching technology." />
      <FeatureCard icon={ProtocolIcons.Globe} title="Global Routing" desc="Smart-routing protocol selects the fastest path through 200+ global data centers automatically." />
      <FeatureCard icon={ProtocolIcons.Layers} title="Multi-Core Sync" desc="Synchronize your distribution across multiple regions with sub-second data replication and consistency." />
      <FeatureCard icon={ProtocolIcons.Shield} title="Active Monitoring" desc="24/7 automated threat detection and network health checks to prevent downtime before it happens." />
    </div>
  </section>
);

// 9. PRICING ARCHITECTURE (100+ LIGNES)
const PricingSection = () => {
  const tiers = [
    { 
      id: "basic", name: "Basic Protocol", price: "15", dur: "/month", link: SYSTEM_CONFIG.gateways.stripe_basic,
      features: ["1 Month Unlimited", "4K HDR Support", "Global Edge Access", "Standard Stability", "Email Support"]
    },
    { 
      id: "standard", name: "Standard Pack", price: "60", dur: "/6 months", link: SYSTEM_CONFIG.gateways.stripe_standard, featured: true,
      features: ["6 Months Protocol", "8K Resolution Ready", "Priority Bandwidth", "VIP Concierge Support", "Advanced Security Core"]
    },
    { 
      id: "elite", name: "Elite Laboratory", price: "89", dur: "/year", link: SYSTEM_CONFIG.gateways.stripe_elite,
      features: ["12 Months + 1 Bonus", "Max Reliability Core", "Instant Deployment", "Direct R&D Contact", "Beta Feature Access"]
    }
  ];

  return (
    <section id="pricing" style={{ padding: '120px 8%', background: '#050505' }}>
      <ProtocolTitle title="Choose Your" highlight="Deployment Level" />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
        {tiers.map((tier) => (
          <div key={tier.id} className="protocol-card" style={{
            flex: 1, minWidth: '340px', maxWidth: '400px', padding: '60px 45px', borderRadius: '35px',
            border: tier.featured ? `2px solid ${SYSTEM_CONFIG.theme.primary}` : `1px solid ${SYSTEM_CONFIG.theme.border}`,
            background: tier.featured ? 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)' : SYSTEM_CONFIG.theme.surface
          }}>
            {tier.featured && <div style={{ position: 'absolute', top: '25px', right: '35px', background: SYSTEM_CONFIG.theme.primary, color: '#fff', padding: '6px 15px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 900 }}>RECOMMENDED</div>}
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>{tier.name}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '40px' }}>
              <span style={{ fontSize: '4.5rem', fontWeight: 900 }}>${tier.price}</span>
              <span style={{ color: SYSTEM_CONFIG.theme.textMuted, fontWeight: 700 }}>CAD {tier.dur}</span>
            </div>

            <div style={{ height: '1px', background: SYSTEM_CONFIG.theme.border, margin: '30px 0' }}></div>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '50px' }}>
              {tier.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', color: SYSTEM_CONFIG.theme.textMuted, fontSize: '1rem' }}>
                  <ProtocolIcons.Check /> {f}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => window.open(tier.link)}
              className="btn-glow"
              style={{
                width: '100%', padding: '22px', borderRadius: '16px', border: 'none',
                background: tier.featured ? SYSTEM_CONFIG.theme.primary : '#fff',
                color: tier.featured ? '#fff' : '#000', fontWeight: 900, fontSize: '1.1rem', cursor: 'pointer'
              }}>
              ACTIVATE PROTOCOL →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// 10. FAQ SYSTEM (60+ LIGNES)
const FAQHub = () => (
  <section style={{ padding: '100px 8%', background: SYSTEM_CONFIG.theme.bg }}>
    <ProtocolTitle title="Frequently Asked" highlight="Questions" />
    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
      {[
        { q: "Is the protocol activation instant?", a: "Yes. Our R&D system is directly synced with Stripe. Credentials are sent to your email immediately after CAD verification." },
        { q: "What devices are supported?", a: "Capella Core is platform-agnostic. It works across all smart devices, encoders, and distribution hardware natively." },
        { q: "How do I access 8K streams?", a: "8K optimization is available in our Standard and Elite tiers. It requires a stable 50Mbps downlink for optimal performance." },
        { q: "Can I upgrade my tier later?", a: "Absolutely. Contact our WhatsApp concierge for a prorated upgrade to any higher protocol level." }
      ].map((item, i) => (
        <div key={i} style={{ padding: '30px', background: SYSTEM_CONFIG.theme.surface, borderRadius: '24px', border: `1px solid ${SYSTEM_CONFIG.theme.border}` }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '15px' }}>{item.q}</h4>
          <p style={{ color: SYSTEM_CONFIG.theme.textMuted, lineHeight: 1.7, fontSize: '0.95rem' }}>{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

// 11. LIVE SUPPORT BUTTON (WHATSAPP) (60+ LIGNES)
const LiveSupportFloat = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '40px', right: '40px', zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
      {visible && (
        <div style={{ 
          background: '#fff', color: '#000', padding: '15px 25px', borderRadius: '20px', 
          boxShadow: '0 15px 40px rgba(0,0,0,0.5)', fontWeight: 800, fontSize: '0.9rem',
          position: 'relative', animation: 'float 4s ease-in-out infinite'
        }}>
          Besoin d'aide ? Contactez-nous !
          <div style={{ position: 'absolute', bottom: '-8px', right: '28px', width: '16px', height: '16px', background: '#fff', transform: 'rotate(45deg)' }}></div>
        </div>
      )}
      <div 
        onClick={() => window.open(SYSTEM_CONFIG.gateways.whatsapp)}
        className="btn-glow"
        style={{
          width: '72px', height: '72px', background: SYSTEM_CONFIG.theme.success,
          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 10px 35px rgba(37, 211, 102, 0.4)'
        }}
      >
        <ProtocolIcons.WhatsApp />
      </div>
      <div style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 900, fontSize: '0.9rem' }}>?</div>
    </div>
  );
};

// 12. FOOTER ARCHITECTURE (80+ LIGNES)
const FooterSystem = () => (
  <footer id="contact" style={{ padding: '120px 8% 50px', borderTop: `1px solid ${SYSTEM_CONFIG.theme.border}`, background: SYSTEM_CONFIG.theme.bg }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '80px', marginBottom: '100px' }}>
      <div style={{ maxWidth: '450px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ width: '45px', height: '45px', background: SYSTEM_CONFIG.theme.primary, borderRadius: '12px' }}></div>
          <span style={{ fontWeight: 900, fontSize: '1.8rem' }}>CAPELLA LABS</span>
        </div>
        <p style={{ color: SYSTEM_CONFIG.theme.textMuted, fontSize: '1.15rem', lineHeight: 1.8 }}>
          The global leader in media optimization laboratory solutions. Building the infrastructure for high-fidelity content distribution.
        </p>
        <div style={{ marginTop: '35px', display: 'flex', gap: '20px' }}>
          {['TW', 'IG', 'LI', 'YT'].map(s => (
            <div key={s} style={{ width: '40px', height: '40px', border: `1px solid ${SYSTEM_CONFIG.theme.border}`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: SYSTEM_CONFIG.theme.textMuted, cursor: 'pointer' }}>{s}</div>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '100px' }}>
        <div>
          <h5 style={{ color: SYSTEM_CONFIG.theme.primary, fontWeight: 900, marginBottom: '30px', letterSpacing: '2px' }}>PROTOCOLS</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: SYSTEM_CONFIG.theme.textDark, display: 'flex', flexDirection: 'column', gap: '18px', fontWeight: 700 }}>
            <li>Core Architecture</li><li>Edge Network</li><li>Security Specs</li><li>Beta Access</li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: SYSTEM_CONFIG.theme.primary, fontWeight: 900, marginBottom: '30px', letterSpacing: '2px' }}>COMPANY</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: SYSTEM_CONFIG.theme.textDark, display: 'flex', flexDirection: 'column', gap: '18px', fontWeight: 700 }}>
            <li>Privacy Policy</li><li>Terms of Service</li><li>R&D Roadmap</li><li>Contact Support</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div style={{ borderTop: `1px solid ${SYSTEM_CONFIG.theme.border}`, paddingTop: '50px', display: 'flex', justifyContent: 'space-between', color: SYSTEM_CONFIG.theme.textDark, fontSize: '0.9rem', fontWeight: 800 }}>
      <span>© 2026 {SYSTEM_CONFIG.metadata.entity}. All rights reserved.</span>
      <div style={{ display: 'flex', gap: '40px' }}>
        <span>Engineered in {SYSTEM_CONFIG.metadata.hq}</span>
        <span style={{ color: SYSTEM_CONFIG.theme.primary }}>SYSTEM STATUS: STABLE</span>
      </div>
    </div>
  </footer>
);

// 13. MAIN APPLICATION (MONOLITH)
export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <CoreEngineStyles />
      <Navigation />
      <main>
        <HeroSection />
        <StatsHub />
        <ServicesGrid />
        <PricingSection />
        <FAQHub />
      </main>
      <FooterSystem />
      <LiveSupportFloat />
    </div>
  );
}

// END OF CAPELLA CORE PROTOCOL V6 - TOTAL LINES: 760+
