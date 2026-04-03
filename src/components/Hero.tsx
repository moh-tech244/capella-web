import React from 'react';

export default function Hero() {
  return (
    <section id="features" style={{ 
      padding: '160px 20px', 
      textAlign: 'center', 
      backgroundColor: '#000', 
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      // Reproduit le fond sombre dégradé avec la grille
      backgroundImage: `
        radial-gradient(circle at center, rgba(16, 24, 40, 0.8) 0%, rgba(0, 0, 0, 1) 70%),
        linear-gradient(rgba(26, 32, 44, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(26, 32, 44, 0.2) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      minHeight: '80vh'
    }}>
      {/* Badge du haut : "Enterprise-Grade Performance" */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        border: '1px solid rgba(37, 99, 235, 0.3)',
        color: '#2563eb',
        padding: '6px 18px',
        borderRadius: '99px',
        fontSize: '12px',
        fontWeight: '700',
        marginBottom: '40px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {/* Icône étoile simple */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#2563eb">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
        </svg>
        Enterprise-Grade Performance
      </div>

      {/* Titre Principal */}
      <h1 style={{ 
        fontSize: '72px', 
        fontWeight: '900', 
        marginBottom: '20px', 
        letterSpacing: '-3px',
        lineHeight: '1.05',
        maxWidth: '800px'
      }}>
        Welcome to <span style={{ color: '#2563eb' }}>Capella</span>
      </h1>

      {/* Texte descriptif */}
      <p style={{ 
        fontSize: '20px', 
        color: '#a1a1aa', 
        maxWidth: '650px', 
        lineHeight: '1.6',
        marginBottom: '50px'
      }}>
        Your dedicated digital growth partner. We specialize in enhancing 
        local visibility, driving organic traffic, and optimizing business 
        presence across premium platforms.
      </p>

      {/* Conteneur des badges d'icônes */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
        {/* Badge 1 : Ultra-HD Stability */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#0a0a0a',
          border: '1px solid #1a1a1a',
          padding: '12px 24px',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {/* Icône éclair jaune */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
            <path d="M13 2L3 14h9l-1 8 10-12h-9z"/>
          </svg>
          Ultra-HD Stability
        </div>

        {/* Badge 2 : Global Network */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#0a0a0a',
          border: '1px solid #1a1a1a',
          padding: '12px 24px',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          {/* Icône globe verte */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#22c55e">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          Global Network
        </div>
      </div>

      {/* Bouton d'action "View Pricing Plans" */}
      <button 
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '16px 40px', 
          borderRadius: '12px', 
          border: 'none', 
          fontSize: '16px', 
          fontWeight: '800', 
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1d4ed8';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2563eb';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        View Pricing Plans
      </button>

      {/* Icône de support flottante casque (uniquement visible sur le Hero) */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#2563eb',
        padding: '18px',
        borderRadius: '50%',
        display: 'flex',
        boxShadow: '0 15px 35px rgba(37, 99, 235, 0.5)',
        cursor: 'pointer'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      </div>

    </section>
  );
}
