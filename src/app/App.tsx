import React from 'react';
// On importe uniquement ce qui fonctionne pour débloquer Vercel
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// On crée un Header simple ici pour éviter l'erreur de fichier manquant
const Header = () => (
  <header style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #111' }}>
    <h1 style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>CAPELLA</h1>
  </header>
);

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', margin: 0, padding: 0, overflowX: 'hidden', fontFamily: 'sans-serif' }}>
      <Header />
      
      <main>
        {/* On affiche le Pricing qui est ton moteur de vente à 89$ */}
        <Pricing />

        {/* FAQ optimisée pour rassurer tes clients Reddit */}
        <section style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '40px' }}>Technical FAQ</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ padding: '20px', backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #18181b' }}>
              <h3 style={{ fontSize: '16px', color: '#3b82f6', marginBottom: '8px' }}>Zero buffering on 4K?</h3>
              <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>Yes. Our Elite Protocol ensures smooth playback for all live sports events.</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #18181b' }}>
              <h3 style={{ fontSize: '16px', color: '#3b82f6', marginBottom: '8px' }}>Instant activation?</h3>
              <p style={{ color: '#71717a', fontSize: '14px', margin: 0 }}>Immediately. Credentials are delivered to your dashboard after checkout.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
