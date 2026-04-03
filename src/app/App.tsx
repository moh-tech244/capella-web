import React, { useState } from 'react';

// --- COMPOSANTS INTÉGRÉS POUR ÉVITER LES ERREURS D'IMPORT ---

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', borderBottom: '1px solid #222', backgroundColor: '#000', position: 'sticky', top: 0, zIndex: 100 }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#3b82f6', letterSpacing: '1px' }}>CAPELLA</div>
    <nav style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#94a3b8' }}>
      <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
      <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Tarifs</a>
      <button style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' }}>Contact</button>
    </nav>
  </header>
);

const Hero = () => (
  <section style={{ padding: '100px 20px', textAlign: 'center', background: 'radial-gradient(circle at center, #111 0%, #000 100%)' }}>
    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '800', marginBottom: '20px', lineHeight: '1.1' }}>
      Bienvenue chez <span style={{ color: '#3b82f6' }}>Capella</span>
    </h1>
    <p style={{ color: '#94a3b8', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
      Votre expert en optimisation digitale. Nous propulsons les entreprises locales au sommet de Google Maps.
    </p>
    <a href="#pricing" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '18px 35px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block', transition: '0.3s', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' }}>
      Démarrer maintenant
    </a>
  </section>
);

const Features = () => {
  const services = [
    { title: "SEO Local", desc: "Dominez les recherches dans votre ville et attirez des clients qualifiés." },
    { title: "Google Maps", desc: "Optimisation de fiche pour apparaître dans le Top 3 pack local." },
    { title: "Gestion d'Avis", desc: "Améliorez votre e-réputation et convertissez vos prospects." }
  ];
  return (
    <section id="services" style={{ padding: '80px 5%' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Nos Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {services.map((s, i) => (
          <div key={i} style={{ backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '20px', border: '1px solid #222', transition: '0.3s' }}>
            <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>{s.title}</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.5' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "199€", features: ["Optimisation Google Maps", "Audit SEO Local", "Rapport Mensuel"], link: "https://buy.stripe.com/test_starter" },
    { name: "Business", price: "399€", features: ["Tout du pack Starter", "Gestion des Avis", "5 Mots-clés ciblés"], popular: true, link: "https://buy.stripe.com/test_business" },
    { name: "Premium", price: "699€", features: ["Tout du pack Business", "Campagne Ads Local", "Support 24/7"], link: "https://buy.stripe.com/test_premium" }
  ];
  return (
    <section id="pricing" style={{ padding: '80px 5%', backgroundColor: '#050505' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>Nos Offres</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {plans.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#111', padding: '40px', borderRadius: '25px', border: p.popular ? '2px solid #3b82f6' : '1px solid #222', width: '320px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {p.popular && <span style={{ backgroundColor: '#3b82f6', color: '#fff', fontSize: '0.7rem', padding: '5px 15px', borderRadius: '20px', position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>POPULAIRE</span>}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{p.name}</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '25px' }}>{p.price}</div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px', flexGrow: 1 }}>
              {p.features.map((f, idx) => <li key={idx} style={{ marginBottom: '12px', color: '#94a3b8', fontSize: '0.9rem' }}>✅ {f}</li>)}
            </ul>
            <button 
              onClick={() => window.location.href = p.link}
              style={{ width: '100%', padding: '15px', borderRadius: '12px', border: 'none', backgroundColor: p.popular ? '#3b82f6' : '#fff', color: p.popular ? '#fff' : '#000', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}
            >
              Choisir ce pack
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ padding: '60px 20px', borderTop: '1px solid #222', textAlign: 'center', color: '#444' }}>
    <div style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '20px' }}>CAPELLA</div>
    <p>© 2026 Capella Home. Tous droits réservés.</p>
  </footer>
);

// --- COMPOSANT PRINCIPAL ---

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', scrollBehavior: 'smooth' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
