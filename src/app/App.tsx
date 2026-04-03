import React, { useState, useEffect } from 'react';

// ==========================================
// --- CONFIGURATION GLOBALE (STRIPE & WA) ---
// ==========================================
const CONFIG = {
  stripe: {
    basic: "https://buy.stripe.com/7sY14oflJ2ZM8Kgf5z4ko03",
    standard: "https://buy.stripe.com/aFa9AUddB0RE6C8g9D4ko04",
    elite: "https://buy.stripe.com/bJeeVe7Th57U5y43mR4ko05"
  },
  whatsapp: {
    number: "14380000000", // Ton numéro sans le +
    message: "Bonjour Capella R&D Lab, j'aimerais avoir plus d'informations sur vos protocoles."
  }
};

// ==========================================
// --- STYLES RÉUTILISABLES (DESIGN SYSTEM) ---
// ==========================================
const theme = {
  colors: {
    bg: '#000000',
    bgCard: '#0a0a0a',
    bgInput: '#111111',
    text: '#ffffff',
    textMuted: '#94a3b8',
    textDark: '#555555',
    primary: '#3b82f6', // Bleu Capella
    primaryDark: '#1d4ed8',
    success: '#10b981', // Vert WhatsApp
    border: '#1a1a1a',
    borderLight: '#222222',
  },
  spacing: {
    xs: '10px',
    sm: '20px',
    md: '40px',
    lg: '80px',
    xl: '120px',
    nav: '80px', // Hauteur de la nav
  },
  radius: {
    sm: '8px',
    md: '15px',
    lg: '25px',
    full: '50px',
  },
  shadow: {
    primary: '0 10px 30px rgba(59, 130, 246, 0.25)',
    success: '0 10px 30px rgba(16, 185, 129, 0.25)',
    card: '0 10px 20px rgba(0, 0, 0, 0.5)',
  }
};

// ==========================================
// --- COMPOSANTS UI DE BASE ---
// ==========================================

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={theme.colors.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const IconWhatsApp = ({ color }: { color?: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill={color || "#fff"}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.197 1.597 6.037L0 24l6.105-1.603a11.818 11.818 0 005.94 1.6c6.637 0 12.05-5.414 12.05-12.05a11.815 11.815 0 00-3.37-8.497" /></svg>
);

const LogoSvg = ({ size }: { size?: string }) => (
  <svg width={size || "40"} height={size || "40"} viewBox="0 0 50 50" fill="none">
    <rect width="50" height="50" rx="12" fill="url(#gradLogo)" />
    <path d="M15 25L22 32L35 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="gradLogo" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor={theme.colors.primary} />
        <stop offset="1" stopColor={theme.colors.primaryDark} />
      </linearGradient>
    </defs>
  </svg>
);

const SectionHeader = ({ badge, title, subtitle }: { badge?: string, title: string, subtitle: string }) => (
  <div style={{ textAlign: 'center', marginBottom: theme.spacing.lg, padding: '0 20px' }}>
    {badge && <div style={{ display: 'inline-block', backgroundColor: theme.colors.bgInput, border: `1px solid ${theme.colors.borderLight}`, color: theme.colors.primary, fontSize: '0.8rem', padding: '8px 18px', borderRadius: theme.radius.full, marginBottom: '25px', fontWeight: '600', letterSpacing: '0.5px' }}>{badge}</div>}
    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-2px', marginBottom: '15px' }}>{title}</h2>
    <p style={{ color: theme.colors.textDark, fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>{subtitle}</p>
  </div>
);

const FloatingWhatsAppButton = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { setShow(true); } else { setShow(false); }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
    window.open(url, '_blank');
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 3000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '15px' }}>
      <button 
        onClick={openWhatsApp}
        style={{ 
          backgroundColor: theme.colors.success, 
          color: theme.colors.text, 
          border: 'none', 
          width: '60px', 
          height: '60px', 
          borderRadius: theme.radius.full, 
          cursor: 'pointer', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: theme.shadow.success, 
          transition: 'all 0.3s' 
        }}>
        <IconWhatsApp />
      </button>
      <div style={{ backgroundColor: theme.colors.text, color: theme.colors.bg, padding: '5px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold' }}>?</div>
    </div>
  );
};

// ==========================================
// --- COMPOSANTS DE SECTION ---
// ==========================================

const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `0 8%`, height: theme.spacing.nav, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: `1px solid ${theme.colors.border}`, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <LogoSvg />
      <span style={{ fontWeight: '900', fontSize: '1.4rem', letterSpacing: '-1px', color: theme.colors.text }}>CAPELLA <span style={{ color: theme.colors.primary }}>LABS</span></span>
    </div>
    <div style={{ display: 'flex', gap: '35px', alignItems: 'center', color: theme.colors.textMuted, fontSize: '0.9rem', fontWeight: '500' }}>
      <a href="#protocol" style={{ color: 'inherit', textDecoration: 'none' }}>Protocol</a>
      <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
      <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
      <button 
        onClick={() => window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`)}
        style={{ backgroundColor: theme.colors.primary, color: theme.colors.text, border: 'none', padding: '12px 25px', borderRadius: theme.radius.sm, fontWeight: 'bold', cursor: 'pointer', boxShadow: theme.shadow.primary }}>
        Live Support
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="protocol" style={{ paddingTop: '220px', paddingBottom: '120px', textAlign: 'center', background: 'radial-gradient(circle at 50% -20%, #1e3a8a 0%, #000000 70%)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: theme.colors.bgInput, border: `1px solid ${theme.colors.borderLight}`, padding: '10px 25px', borderRadius: theme.radius.full, marginBottom: '40px' }}>
        <span style={{ width: '8px', height: '8px', background: theme.colors.success, borderRadius: theme.radius.full, display: 'inline-block' }}></span>
        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: theme.colors.primary, letterSpacing: '0.5px' }}>PROTOCOL V3.4 IS NOW DEPLOYED</span>
      </div>
      <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '900', color: theme.colors.text, lineHeight: '0.95', marginBottom: '30px', letterSpacing: '-4px' }}>
        The Future of <br /><span style={{ color: theme.colors.primary }}>Media Optimization</span>
      </h1>
      <p style={{ maxWidth: '800px', margin: '0 auto 50px', color: theme.colors.textMuted, fontSize: '1.4rem', lineHeight: '1.6', fontWeight: '400' }}>
        Engineered for high-performance distribution networks with native 4K/8K support. Our core protocol ensures stability and speed at every level.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="#pricing" style={{ padding: '22px 50px', borderRadius: theme.radius.sm, backgroundColor: theme.colors.text, color: theme.colors.bg, textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem', transition: 'all 0.3s' }}>View Pricing Plans</a>
        <button style={{ padding: '22px 50px', borderRadius: theme.radius.sm, backgroundColor: theme.colors.bgCard, color: theme.colors.text, border: `1px solid ${theme.colors.borderLight}`, fontWeight: '700', fontSize: '1.2rem' }}>Protocol Specs</button>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section style={{ padding: `${theme.spacing.lg} 8%`, background: theme.colors.bgCard, borderTop: `1px solid ${theme.colors.border}`, borderBottom: `1px solid ${theme.colors.border}` }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', textAlign: 'center' }}>
      {[
        { label: "Global Network Uptime", val: "99.999%" },
        { label: "PoP Locations Worldwide", val: "240+" },
        { label: "Active Deployments", val: "12.4k" },
        { label: "AVG Edge Latency", val: "14ms" }
      ].map((s, i) => (
        <div key={i} style={{ borderRight: i < 3 ? `1px solid ${theme.colors.border}` : 'none' }}>
          <div style={{ fontSize: '3.5rem', fontWeight: '900', color: theme.colors.text, marginBottom: '5px', letterSpacing: '-1px' }}>{s.val}</div>
          <div style={{ color: theme.colors.primary, fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Features = () => (
  <section id="features" style={{ padding: `${theme.spacing.xl} 8%` }}>
    <SectionHeader badge="ARCHITECTED FOR PERFORMANCE" title="Enterprise Core Technology" subtitle="Proprietary optimization architecture designed to handle massive throughput with uncompromising stability and security." />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
      {[
        { t: "Dynamic Load Balancing", d: "Real-time traffic management ensures peak performance by automatically allocating resources to network demand.", icon: "⚡" },
        { t: "Native 4K/8K Video Support", d: "Engineered to deliver ultra-high-definition video content with zero buffering and minimal latency.", icon: "💎" },
        { t: "Global CDN Core Network", d: "Distribute your media across 200+ edge locations worldwide for lightning-fast delivery to any device.", icon: "🌍" },
        { t: "Zero-Knowledge Security", d: "Your data remains private with military-grade encryption protocols and zero access from unauthorized parties.", icon: "🔒" },
        { t: "AI-Driven Predictive Caching", d: "Advanced machine learning algorithms predict content demand to preload and cache media for faster user access.", icon: "🧠" },
        { t: "Complete R&D Lab Access", d: "Get direct access to our latest experimental features and direct support from our lead engineers.", icon: "🔬" }
      ].map((f, i) => (
        <div key={i} style={{ padding: '45px', borderRadius: theme.radius.lg, backgroundColor: theme.colors.bgCard, border: `1px solid ${theme.colors.border}` }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '25px', display: 'inline-block', padding: '15px', backgroundColor: theme.colors.bgInput, borderRadius: '15px' }}>{f.icon}</div>
          <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '15px' }}>{f.t}</h3>
          <p style={{ color: theme.colors.textMuted, lineHeight: '1.8' }}>{f.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    { 
      name: "Basic Access", subtitle: "Ideal for individual developers", price: "$15", CAD: "CAD", dur: "/ month", link: CONFIG.stripe.basic,
      features: ["1 Month Unlimited", "Native 4K Video", "Email Support", "Single Core Access", "Global Edge Network"] 
    },
    { 
      name: "Standard Pack", subtitle: "Most deployed protocol tier", price: "$60", CAD: "CAD", dur: "/ 6 months", link: CONFIG.stripe.standard, popular: true,
      features: ["6 Months Unlimited", "Native 8K ready", "24/7 VIP Concierge", "Multi-Core Priority", "Max Reliability", "Ad-Free Experience"] 
    },
    { 
      name: "Elite Laboratory", subtitle: "Total lab access for enterprise", price: "$89", CAD: "CAD", dur: "/ year", link: CONFIG.stripe.elite,
      features: ["12 Months + 1 Bonus", "All Standard Features", "Dedicated Engineer Lead", "Beta Feature Access", "Priority R&D Priority"] 
    }
  ];

  return (
    <section id="pricing" style={{ padding: `${theme.spacing.xl} 8%`, background: 'linear-gradient(to bottom, #000000, #050505)' }}>
      <SectionHeader badge="TRANSPARENT TIERING SYSTEM" title="Choose Your Protocol" subtitle="Select the tier that matches your deployment scale. Instant activation, guaranteed performance." />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        {plans.map((p, i) => (
          <div key={i} style={{ 
            backgroundColor: p.popular ? '#0c0c0c' : theme.colors.bgCard, 
            padding: '60px 50px', 
            borderRadius: p.popular ? '32px' : theme.radius.lg, 
            border: p.popular ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.border}`, 
            width: '380px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {p.popular && <div style={{ position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', backgroundColor: theme.colors.primary, color: theme.colors.text, padding: '7px 20px', borderRadius: theme.radius.full, fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.5px' }}>MOST DEPLOYED PROTOCOL</div>}
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '8px' }}>{p.name}</h3>
            <p style={{ color: theme.colors.textDark, marginBottom: '30px', fontSize: '0.95rem' }}>{p.subtitle}</p>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '15px' }}>
              <span style={{ fontSize: '4.5rem', fontWeight: '900', letterSpacing: '-2px' }}>{p.price}</span>
              <div style={{ display: 'flex', flexDirection: 'column', color: theme.colors.textDark, fontWeight: 'bold' }}>
                <span>{p.CAD}</span>
                <span>{p.dur}</span>
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: theme.colors.border, margin: '40px 0' }}></div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '50px', flexGrow: 1 }}>
              {p.features.map((f, idx) => (
                <li key={idx} style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px', color: theme.colors.textMuted, fontSize: '1rem' }}>
                  <IconCheck /> {f}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open(p.link, '_blank')}
              style={{ 
                width: '100%', 
                padding: '20px', 
                borderRadius: p.popular ? '16px' : theme.radius.sm, 
                border: 'none', 
                backgroundColor: p.popular ? theme.colors.primary : theme.colors.text, 
                color: p.popular ? theme.colors.text : theme.colors.bg, 
                fontWeight: '900', 
                fontSize: '1.1rem', 
                cursor: 'pointer',
                boxShadow: p.popular ? theme.shadow.primary : 'none'
              }}>
              Activate Protocol →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => (
  <section style={{ padding: `${theme.spacing.lg} 8%`, backgroundColor: theme.colors.bgCard }}>
    <SectionHeader title="Protocol Common Inquiries" subtitle="Find detailed answers to frequently asked questions about deploying Capella Core Protocol." />
    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
      {[
        { q: "Is protocol activation truly instant?", a: "Yes. Once Stripe confirms your CAD payment, our Global Edge Network activates your tier across all 200+ nodes in real-time." },
        { q: "Can I upgrade my tier mid-subscription?", a: "Absolutely. Contact our Support VIP on WhatsApp for a custom invoice and instant tier upgrade." },
        { q: "Do you offer enterprise-level custom solutions?", a: "Yes. For needs exceeding 50TB/month or 15k Channels, please contact our R&D lead directly." },
        { q: "What security measures are implemented?", a: "We utilize end-to-end ZK encryption with multi-region Core Architecture to ensure total data privacy." }
      ].map((item, i) => (
        <div key={i}>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: theme.colors.text }}>{item.q}</h4>
          <p style={{ color: theme.colors.textMuted, lineHeight: '1.7', fontSize: '0.95rem' }}>{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '100px 8% 50px', background: theme.colors.bg, borderTop: `1px solid ${theme.colors.border}` }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '60px', marginBottom: '80px' }}>
      <div style={{ maxWidth: '400px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <LogoSvg size="50" />
          <span style={{ fontWeight: '900', fontSize: '1.8rem' }}>CAPELLA Labs</span>
        </div>
        <p style={{ color: theme.colors.textDark, fontSize: '1.1rem', lineHeight: '1.8' }}>
          The world's leading media optimization laboratory. Building stable, secure, and lightning-fast media distribution protocols for the enterprise.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '100px' }}>
        <div>
          <h5 style={{ color: theme.colors.primary, marginBottom: '25px', fontWeight: 'bold' }}>NETWORK STATUS</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: theme.colors.textDark, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Edge Status</li>
            <li>Core Architecture</li>
            <li>Security Advisories</li>
            <li>PoP Regions</li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: theme.colors.primary, marginBottom: '25px', fontWeight: 'bold' }}>COMPANY CORE</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: theme.colors.textDark, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>R&D Pipeline</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li onClick={() => window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`)} style={{ cursor: 'pointer' }}>WhatsApp Concierge</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ borderTop: `1px solid ${theme.colors.border}`, paddingTop: '40px', display: 'flex', justifyContent: 'space-between', color: theme.colors.textDark, fontSize: '0.9rem', fontWeight: '600' }}>
      <span>© 2026 CAPELLA Labs Inc. All rights reserved.</span>
      <span>Engineered in Canada</span>
    </div>
  </footer>
);

// ==========================================
// --- COMPOSANT PRINCIPAL (APP) ---
// ==========================================

export default function App() {
  return (
    // Importation de la police "Inter" et styles de base
    <div style={{ backgroundColor: theme.colors.bg, color: theme.colors.text, minHeight: '100vh', scrollBehavior: 'smooth', margin: 0, padding: 0, fontFamily: '"Inter", "Helvetica Neue", system-ui, -apple-system, sans-serif' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
