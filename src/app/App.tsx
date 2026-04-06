import React from 'react';
// On utilise "./" car le dossier components est DANS le dossier app
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', margin: 0, padding: 0, overflowX: 'hidden', fontFamily: 'sans-serif' }}>
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Pricing />

        {/* Section FAQ Intégrée pour la confiance (Optimisée pour Reddit) */}
        <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', borderTop: '1px solid #111' }}>
          <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '40px', fontWeight: 'bold' }}>Technical FAQ</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              { q: "Zero buffering on 4K?", a: "Yes. Our Elite Protocol uses a Global Edge Network to eliminate latency during live sports." },
              { q: "Which devices work?", a: "Fully compatible with FireStick, Apple TV, Android, iOS, and Smart TVs. Instant setup." },
              { q: "Is activation instant?", a: "Immediately. Your access credentials are sent the second your payment is confirmed." }
            ].map((faq, i) => (
              <div key={i} style={{ padding: '20px', backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #18181b' }}>
                <h3 style={{ fontSize: '16px', color: '#3b82f6', marginBottom: '8px', fontWeight: '600' }}>{faq.q}</h3>
                <p style={{ color: '#71717a', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Final Capella */}
      <footer style={{ 
        padding: '60px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid #111', 
        backgroundColor: '#000' 
      }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '10px', letterSpacing: '1px' }}>CAPELLA</h3>
        <p style={{ color: '#52525b', fontSize: '14px', marginBottom: '20px' }}>Elite Media Optimization. Private Protocols. 24/7 Support.</p>
        <div style={{ color: '#27272a', fontSize: '12px', marginTop: '20px' }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
