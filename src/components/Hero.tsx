import React from 'react';

export default function Hero() {
  return (
    <section id="features" style={{ 
      padding: '80px 20px', // Réduit de 160px à 80px
      textAlign: 'center', 
      backgroundColor: '#000', 
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      backgroundImage: `
        radial-gradient(circle at center, rgba(16, 24, 40, 0.8) 0%, rgba(0, 0, 0, 1) 70%),
        linear-gradient(rgba(26, 32, 44, 0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(26, 32, 44, 0.15) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 35px 35px, 35px 35px',
      minHeight: '60vh' // Hauteur réduite
    }}>
      {/* Badge plus compact */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: 'rgba(37, 99, 235, 0.08)',
        border: '1px solid rgba(37, 99, 235, 0.2)',
        color: '#2563eb',
        padding: '5px 14px',
        borderRadius: '99px',
        fontSize: '11px',
        fontWeight: '700',
        marginBottom: '25px',
        textTransform: 'uppercase'
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="#2563eb">
          <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
        </svg>
        Enterprise-Grade Performance
      </div>

      {/* Titre réduit */}
      <h1 style={{ 
        fontSize: '52px', 
        fontWeight: '900', 
        marginBottom: '15px', 
        letterSpacing: '-2px',
        lineHeight: '1.1'
      }}>
        Next-Gen Media <br/>
        <span style={{ color: '#2563eb' }}>Optimization Protocol</span>
      </h1>

      {/* Description plus courte */}
      <p style={{ 
        fontSize: '17px', 
        color: '#a1a1aa', 
        maxWidth: '550px', 
        lineHeight: '1.5',
        marginBottom: '35px'
      }}>
        Experience Ultra-HD stability and 4K performance. Optimized for global networks.
      </p>

      {/* Badges horizontaux resserrés */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a',
          padding: '10px 18px', borderRadius: '10px', color: '#fff', fontSize: '13px'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#facc15"><path d="M13 2L3 14h9l-1 8 10-12h-9z"/></svg>
          Ultra-HD Stability
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a',
          padding: '10px 18px', borderRadius: '10px', color: '#fff', fontSize: '13px'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#22c55e"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          Global Network
        </div>
      </div>

      {/* Bouton d'action */}
      <button 
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ 
          backgroundColor: '#2563eb', color: 'white', padding: '14px 32px', 
          borderRadius: '10px', border: 'none', fontSize: '15px', fontWeight: '800', 
          cursor: 'pointer', boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)'
        }}
      >
        View Pricing Plans
      </button>
    </section>
  );
}
