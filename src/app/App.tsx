import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer'; 
import '../styles/index.css'; 

export default function App() {
  return (
    <div className="app-container" style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
      <Header />

      <main>
        <Hero />
        <Pricing />
      </main>

      <Footer />

      {/* Icône de support flottante stylée - Direction Email */}
      <div 
        onClick={() => window.location.href = "mailto:capellaofficiel@gmail.com?subject=Demande de Support Protocol - Capella R&D"}
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          right: '30px', 
          backgroundColor: '#2563eb', 
          padding: '15px', 
          borderRadius: '50%', 
          display: 'flex', 
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)', 
          cursor: 'pointer', 
          zIndex: 1000,
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
      >
        {/* Icône de casque (Support technique) */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      </div>
    </div>
  );
}
