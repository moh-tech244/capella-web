import React from 'react';

export default function Hero() {
  return (
    <section id="features" style={{ 
      padding: '120px 20px', 
      textAlign: 'center', 
      backgroundColor: '#000', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Badge optionnel pour le look "Enterprise" */}
      <div style={{
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
        border: '1px solid rgba(37, 99, 235, 0.2)',
        color: '#2563eb',
        padding: '6px 16px',
        borderRadius: '99px',
        fontSize: '12px',
        fontWeight: '700',
        marginBottom: '24px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        Next-Gen Optimization
      </div>

      {/* Titre Principal */}
      <h1 style={{ 
        fontSize: '64px', 
        fontWeight: '900', 
        marginBottom: '20px', 
        letterSpacing: '-2px',
        lineHeight: '1.1'
      }}>
        Welcome to <span style={{ color: '#2563eb' }}>Capella</span>
      </h1>

      {/* Texte descriptif optimisé en Anglais */}
      <p style={{ 
        fontSize: '18px', 
        color: '#a1a1aa', 
        maxWidth: '600px', 
        lineHeight: '1.6',
        marginBottom: '40px'
      }}>
        Your dedicated digital growth partner. We specialize in enhancing 
        online visibility, driving organic traffic, and optimizing 
        business presence across premium platforms.
      </p>

      {/* Bouton d'action */}
      <button 
        onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          padding: '16px 36px', 
          borderRadius: '12px', 
          border: 'none', 
          fontSize: '16px', 
          fontWeight: '800', 
          cursor: 'pointer',
          transition: 'transform 0.2s ease',
          boxShadow: '0 10px 25px rgba(37, 99, 235, 0.4)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Get Started Now
      </button>
    </section>
  );
}
