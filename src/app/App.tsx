import React from 'react';
// Importation des composants (assure-toi que les noms de fichiers correspondent)
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh',
      color: '#fff',
      margin: 0,
      padding: 0,
      overflowX: 'hidden' // Évite le scroll horizontal sur téléphone
    }}>
      {/* 1. Barre de navigation fixe */}
      <Header />

      <main>
        {/* 2. Section d'accueil (Hero) avec espace réduit en haut */}
        <Hero />

        {/* 3. Section des caractéristiques techniques */}
        <Features />

        {/* 4. Section des tarifs avec Elite Protocol mis en avant */}
        <Pricing />
      </main>

      {/* Footer optionnel pour fermer la page proprement */}
      <footer style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid #111',
        color: '#71717a',
        fontSize: '13px'
      }}>
        © 2026 Capella R&D Lab. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
