import React from 'react';
// Importation du style global (fond noir, grille, polices)
import '../styles/index.css'; 

// Importation des composants (que tu vas régler séparément)
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';

export default function App() {
  return (
    <div className="app-wrapper" style={{ 
      backgroundColor: '#000', 
      minHeight: '100vh',
      color: 'white'
    }}>
      {/* 1. La Navigation */}
      <Header />

      <main>
        {/* 2. La section titre et badge Enterprise */}
        <Hero />

        {/* 3. La grille des tarifs (Basic & Elite) */}
        <Pricing />
      </main>

      {/* 4. Le bouton flottant de support (icône casque) */}
      <div className="support-floating-icon">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      </div>
    </div>
  );
}
    </div>
  );
}
