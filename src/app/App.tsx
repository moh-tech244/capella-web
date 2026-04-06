import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import '../styles/index.css'; 

export default function App() {
  return (
    <div className="app-container" style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
      {/* Barre de navigation */}
      <Header />

      <main>
        {/* Titre et Badge */}
        <Hero />

        {/* Grille de prix */}
        <Pricing />
      </main>

      {/* Icône de support flottante */}
      <div style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#2563eb', padding: '15px', borderRadius: '50%', display: 'flex', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      </div>
    </div>
  );
}
