import React, { useState, useEffect } from 'react';

// --- CONFIGURATION DYNAMIQUE ---
const STRIPE_LINKS = {
  basic: "https://buy.stripe.com/7sY14oflJ2ZM8Kgf5z4ko03",
  standard: "https://buy.stripe.com/aFa9AUddB0RE6C8g9D4ko04",
  elite: "https://buy.stripe.com/bJeeVe7Th57U5y43mR4ko05"
};
const WHATSAPP = "14380000000";

// --- COMPOSANTS DE DÉCORATION (SVG) ---

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
    <rect width="50" height="50" rx="12" fill="url(#grad1)" />
    <path d="M15 25L22 32L35 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
);

// --- SOUS-COMPOSANTS RÉUTILISABLES ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', letterSpacing: '-1.5px', marginBottom: '15px' }}>{title}</h2>
    <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>
  </div>
);

const Nav = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 8%', position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid #1a1a1a', zIndex: 2000 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <Logo />
      <span style={{ fontWeight: '900', fontSize: '1.4rem', letterSpacing: '-0.5px' }}>CAPELLA <span style={{ color: '#3b82f6' }}>LABS</span></span>
    </div>
    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '25px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: '500' }}>
        <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Protocol</a>
        <a href="#stats" style={{ color: 'inherit', textDecoration: 'none' }}>Network</a>
        <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Enterprise</a>
      </div>
      <button onClick={() => window.open(`https://wa.me/${WHATSAPP}`)} style={{ background: '#3b82f6', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
        Live Support
      </button>
    </div>
  </nav>
);

// --- SECTIONS ---

const Hero = () => (
  <section style={{ paddingTop: '200px', paddingBottom: '120px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    {/* Effet de lumière en arrière-plan */}
    <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: -1 }}></div>
    
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#111', border: '1px solid #222', padding: '8px 20px', borderRadius: '50px', marginBottom: '40px' }}>
        <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#3b82f6' }}>SYSTEM STATUS: OPTIMIZED</span>
      </div>
      <h1 style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-4px', marginBottom: '30px' }}>
        Master the <br /><span style={{ color: '#3b82f6' }}>Digital Flow.</span>
      </h1>
      <p style={{ fontSize: '1.4rem', color: '#888', maxWidth: '850px', margin: '0 auto 50px', lineHeight: '1.5' }}>
        Engineered for extreme performance. Capella R&D Lab provides the most stable media optimization protocol for global distribution.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#pricing" style={{ background: '#fff', color: '#000', padding: '22px 50px', borderRadius: '15px', textDecoration: 'none', fontWeight: '900', fontSize: '1.2rem', transition: 'all 0.3s' }}>Initialize Protocol</a>
        <button style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '22px 50px', borderRadius: '15px', fontWeight: '700', fontSize: '1.2rem' }}>Core Specs</button>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section id="stats" style={{ padding: '100px 8%', background: '#050505', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' }}>
      {[
        { label: "Network Uptime", val: "99.99%" },
        { label: "Global Nodes", val: "240+" },
        { label: "Active Users", val: "12.4k" },
        { label: "Latency AVG", val: "14ms" }
      ].map((s, i) => (
        <div key={i}>
          <div style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '5px' }}>{s.val}</div>
          <div style={{ color: '#555', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const FeatureSection = () => (
  <section id="features" style={{ padding: '120px 8%' }}>
    <SectionTitle title="Advanced Architecture" subtitle="Proprietary technology designed to handle massive throughput without degradation." />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
      {[
        { t: "Dynamic Scaling", d: "Automatic bandwidth allocation based on real-time traffic demand.", icon: "🛰️" },
        { t: "Zero-Knowledge Security", d: "Your data remains private with our state-of-the-art encryption layer.", icon: "🔒" },
        { t: "Native 4K/8K Support", d: "Optimized for ultra-high-resolution streams with zero buffering.", icon: "💎" },
        { t: "Predictive Caching", d: "AI-driven algorithms predict and preload content for instant delivery.", icon: "🧠" },
        { t: "Multi-Region Core", d: "Resilient infrastructure spread across 6 continents for total safety.", icon: "🌍" },
        { t: "Direct API Access", d: "Integrate our power directly into your existing workflow with ease.", icon: "⚙️" }
      ].map((f, i) => (
        <div key={i} style={{ padding: '45px', borderRadius: '25px', background: '#0a0a0a', border: '1px solid #1a1a1a', transition: 'all 0.3s' }}>
          <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{f.icon}</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', marginBottom: '15px' }}>{f.t}</h3>
          <p style={{ color: '#666', lineHeight: '1.7' }}>{f.d}</p>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => {
  const plans = [
    { 
      name: "Lite Protocol", 
      price: "15", 
      desc: "For individual developers and small projects.", 
      link: STRIPE_LINKS.basic,
      features: ["1 Month Unlimited", "4K Video Output", "Email Support", "Single Core Access"]
    },
    { 
      name: "Mainstream Pro", 
      price: "60", 
      desc: "The gold standard for high-traffic environments.", 
      link: STRIPE_LINKS.standard,
      popular: true,
      features: ["6 Months Unlimited", "8K Support Ready", "24/7 VIP Concierge", "Priority Queueing", "Ad-Free Protocol"]
    },
    { 
      name: "Elite Laboratory", 
      price: "89", 
      desc: "Maximum power for enterprise-level operations.", 
      link: STRIPE_LINKS.elite,
      features: ["12 Months + 1 Free", "Unrestricted Bandwidth", "Dedicated Support Lead", "Beta Access to New Tools"]
    }
  ];

  return (
    <section id="pricing" style={{ padding: '120px 8%', background: 'linear-gradient(to bottom, #000, #0a0a0a)' }}>
      <SectionTitle title="Simple Subscription" subtitle="No hidden fees. Choose your power level and deploy in seconds." />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        {plans.map((p, i) => (
          <div key={i} style={{ 
            width: '380px', 
            background: p.popular ? '#0e0e0e' : '#070707', 
            borderRadius: '40px', 
            padding: '60px 45px', 
            border: p.popular ? '3px solid #3b82f6' : '1px solid #222',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {p.popular && <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', padding: '8px 25px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '900' }}>MOST DEPLOYED</div>}
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '10px' }}>{p.name}</h3>
            <p style={{ color: '#555', marginBottom: '35px', minHeight: '40px' }}>{p.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '40px' }}>
              <span style={{ fontSize: '4.5rem', fontWeight: '900' }}>${p.price}</span>
              <span style={{ color: '#444', fontWeight: 'bold' }}>CAD</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '50px', flexGrow: 1 }}>
              {p.features.map((f, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '18px', color: '#94a3b8' }}>
                  <IconCheck /> {f}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => window.open(p.link, '_blank')}
              style={{ 
                width: '100%', 
                padding: '22px', 
                borderRadius: '20px', 
                border: 'none', 
                background: p.popular ? '#3b82f6' : '#fff', 
                color: p.popular ? '#fff' : '#000', 
                fontSize: '1.2rem', 
                fontWeight: '900', 
                cursor: 'pointer',
                boxShadow: p.popular ? '0 15px 30px rgba(59, 130, 246, 0.4)' : 'none'
              }}>
              Activate Tier
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => (
  <section style={{ padding: '100px 8%', backgroundColor: '#000' }}>
    <SectionTitle title="Common Inquiries" subtitle="Everything you need to know about the Capella Protocol." />
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {[
        { q: "Is the activation instant?", a: "Yes. Once the Stripe payment is confirmed, your protocol is activated in real-time across our network." },
        { q: "Can I upgrade my plan later?", a: "Absolutely. You can move to a higher tier at any time via your support agent on WhatsApp." },
        { q: "Do you offer custom enterprise solutions?", a: "For traffic exceeding 50TB/month, please contact our R&D lead directly." }
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1px solid #111' }}>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff' }}>{item.q}</h4>
          <p style={{ color: '#666', lineHeight: '1.6' }}>{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '100px 8% 50px', background: '#000', borderTop: '1px solid #111' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px', marginBottom: '100px' }}>
      <div style={{ maxWidth: '400px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <Logo />
          <span style={{ fontWeight: '900', fontSize: '1.5rem' }}>CAPELLA R&D</span>
        </div>
        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
          Pushing the boundaries of what's possible in digital media distribution. Stability isn't a feature, it's our DNA.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '100px' }}>
        <div>
          <h5 style={{ color: '#3b82f6', marginBottom: '25px', fontWeight: 'bold' }}>NETWORK</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: '#555', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Status</li>
            <li>Regions</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: '#3b82f6', marginBottom: '25px', fontWeight: 'bold' }}>COMPANY</h5>
          <ul style={{ listStyle: 'none', padding: 0, color: '#555', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Terms</li>
            <li>Privacy</li>
            <li onClick={() => window.open(`https://wa.me/${WHATSAPP}`)} style={{ cursor: 'pointer' }}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid #111', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', color: '#333', fontSize: '0.9rem', fontWeight: '600' }}>
      <span>© 2026 CAPELLA LABS INC.</span>
      <span>BUILT IN CANADA</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', scrollBehavior: 'smooth' }}>
      <Nav />
      <Hero />
      <Stats />
      <FeatureSection />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
