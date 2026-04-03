import React from 'react';

// --- COMPOSANTS INTÉGRÉS POUR ÉVITER LES ERREURS D'IMPORT ---

const Header = () => (
  <header style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '20px 5%', 
    borderBottom: '1px solid #222', 
    backgroundColor: 'rgba(0,0,0,0.8)', 
    position: 'sticky', 
    top: 0, 
    zIndex: 100,
    backdropFilter: 'blur(10px)'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Icône de bouclier bleue */}
      <svg style={{ color: '#3b82f6', width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>Capella R&D Lab</div>
    </div>
    <nav style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#94a3b8' }}>
      <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
      <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
      <a href="#footer" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
    </nav>
    <button style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      Contact Support
    </button>
  </header>
);

const Hero = () => (
  <section style={{ 
    padding: '100px 20px', 
    textAlign: 'center', 
    position: 'relative', 
    background: 'radial-gradient(circle at center, #111 0%, #000 100%)' 
  }}>
    {/* Grille de fond */}
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1, zIndex: 0 }}></div>
    
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ 
        backgroundColor: '#111', 
        border: '1px solid #222', 
        color: '#3b82f6', 
        fontSize: '0.8rem', 
        padding: '8px 16px', 
        borderRadius: '20px', 
        marginBottom: '40px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px' 
      }}>
        <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364 6.364l-.707-.707M6.364 6.364l-.707-.707M15.364 6.364l-.707.707M6.364 15.364l-.707.707M12 9a3 3 0 100 6 3 3 0 000-6z" /></svg>
        Enterprise-Grade Performance
      </div>
      
      <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '800', marginBottom: '20px', lineHeight: '1.1' }}>
        Next-Gen Media<br />
        <span style={{ color: '#3b82f6' }}>Optimization Protocol</span>
      </h1>
      
      <p style={{ color: '#94a3b8', fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6' }}>
        Experience Ultra-HD stability and 4K performance. Optimized for global networks.
      </p>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={{ border: '1px solid #222', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg style={{ color: '#f59e0b', width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Ultra-HD Stability
        </div>
        <div style={{ border: '1px solid #222', padding: '10px 20px', borderRadius: '10px', color: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg style={{ color: '#10b981', width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          Global Network
        </div>
      </div>
      
      <a href="#pricing" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '18px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'inline-block', transition: '0.3s', boxShadow: '0 15px 30px rgba(59, 130, 246, 0.2)' }}>
        View Pricing Plans
      </a>
    </div>
  </section>
);

const Features = () => {
  const serviceCards = [
    { title: "4K Performance", desc: "Experience ultra-high definition streaming with zero buffering and maximum clarity.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Enterprise Security", desc: "Military-grade encryption and security protocols to protect your media streams.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { title: "Instant Activation", desc: "Get up and running in seconds with our automated deployment system.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: "Global Network", desc: "Optimized delivery across 200+ global edge locations for minimal latency.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
    { title: "Maximum Uptime", desc: "99.9% SLA guarantee with intelligent failover and redundancy systems.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "24/7 Support", desc: "Round-the-clock expert assistance for all your technical needs.", icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> }
  ];
  return (
    <section id="features" style={{ padding: '80px 5%', backgroundColor: '#000' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '10px' }}>
        Enterprise-Grade <span style={{ color: '#3b82f6' }}>Features</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', marginBottom: '50px' }}>
        Built for performance, reliability, and scalability at every level
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {serviceCards.map((s, i) => (
          <div key={i} style={{ backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '20px', border: '1px solid #222' }}>
            <div style={{ backgroundColor: '#111', border: '1px solid #222', color: '#3b82f6', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justify-content: 'center', marginBottom: '20px' }}>
              {React.cloneElement(s.icon, { style: { width: '28px', height: '28px' } })}
            </div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px' }}>{s.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Basic Access", subtitle: "Perfect for getting started", price: "$15 CAD", duration: "/month", features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"], link: "https://buy.stripe.com/test_starter" },
    { name: "Standard Pack", subtitle: "Most popular choice", price: "$60 CAD", duration: "/6 months", features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"], popular: true, link: "https://buy.stripe.com/test_business" },
    { name: "Elite Protocol", subtitle: "Maximum performance", price: "$89 CAD", duration: "/year", features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"], link: "https://buy.stripe.com/test_premium" }
  ];
  return (
    <section id="pricing" style={{ padding: '80px 5%', backgroundColor: '#050505' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '10px' }}>
        Choose Your <span style={{ color: '#3b82f6' }}>Protocol</span>
      </h2>
      <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', marginBottom: '50px' }}>
        Select the plan that fits your needs
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {plans.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#111', padding: '50px 40px', borderRadius: '25px', border: p.popular ? '2px solid #3b82f6' : '1px solid #222', width: p.popular ? '360px' : '340px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {p.popular && <span style={{ backgroundColor: '#3b82f6', color: '#fff', fontSize: '0.8rem', padding: '6px 16px', borderRadius: '20px', position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>Most Popular</span>}
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', color: '#fff' }}>{p.name}</h3>
            <p style={{ color: '#94a3b8', marginBottom: '25px', fontSize: '0.9rem' }}>{p.subtitle}</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', marginBottom: '15px' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#fff', lineHeight: '1' }}>{p.price}</div>
              <div style={{ fontSize: '1rem', color: '#94a3b8' }}>{p.duration}</div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '50px', flexGrow: 1 }}>
              {p.features.map((f, idx) => <li key={idx} style={{ marginBottom: '12px', color: '#94a3b8', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg style={{ color: '#3b82f6', width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {f}
              </li>)}
            </ul>
            <button 
              onClick={() => window.location.href = p.link}
              style={{ width: '100%', padding: '18px', borderRadius: '12px', border: 'none', backgroundColor: p.popular ? '#3b82f6' : '#222', color: '#fff', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s', fontSize: '1.1rem' }}
            >
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="footer" style={{ padding: '80px 5%', borderTop: '1px solid #222', backgroundColor: '#000', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
    <div style={{ width: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <svg style={{ color: '#3b82f6', width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>Capella R&D Lab</div>
      </div>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>
        Next-generation media optimization protocol for enterprise performance.
      </p>
    </div>
    
    <div style={{ display: 'flex', gap: '60px' }}>
      <div>
        <h4 style={{ color: '#fff', marginBottom: '15px' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 style={{ color: '#fff', marginBottom: '15px' }}>Support</h4>
        <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.13a11.042 11.042 0 00-5.516-5.516l-1.13 2.257a1 1 0 01-1.21.502l-4.493-1.498a1 1 0 01-.684-.949V5z" /></svg>
          +1 (438) ••• ••••
        </div>
        <button style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem' }}>
          <svg style={{ width: '22px', height: '22px' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.197 1.597 6.037L0 24l6.105-1.603a11.818 11.818 0 005.94 1.6c6.637 0 12.05-5.414 12.05-12.05a11.815 11.815 0 00-3.37-8.497" /></svg>
          WhatsApp Support
        </button>
      </div>
    </div>
    
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '60px', color: '#444', fontSize: '0.8rem' }}>
      <p>© 2026 Capella R&D Lab. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

const FloatingSupport = () => (
  <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', zIndex: 1000 }}>
    <button style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '15px', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}>
      <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    </button>
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '8px', borderRadius: '50%', width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>?</div>
  </div>
);

// --- COMPOSANT PRINCIPAL ---

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: "'Inter', 'Helvetica Neue', sans-serif", scrollBehavior: 'smooth', margin: 0, padding: 0 }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  );
}
