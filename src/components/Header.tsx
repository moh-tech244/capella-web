import React from 'react';

export default function Header() {
  // Fonction pour faire défiler la page doucement
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#a1a1aa',
    fontSize: '14px',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 50px',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: 'rgba(0, 0, 0, 0.9)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #111'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#2563eb', padding: '10px', borderRadius: '14px', display: 'flex' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/></svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '18px', color: 'white', letterSpacing: '-0.5px' }}>
          Capella R&D Lab
        </span>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Les boutons utilisent maintenant la fonction scrollToSection */}
        <button 
          style={navButtonStyle}
          onClick={() => scrollToSection('features')}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#a1a1aa'; }}
        >
          Features
        </button>
        <button 
          style={navButtonStyle}
          onClick={() => scrollToSection('pricing')}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#a1a1aa'; }}
        >
          Pricing
        </button>
        <button 
          style={navButtonStyle}
          onClick={() => scrollToSection('contact')}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#111'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#a1a1aa'; }}
        >
          Contact
        </button>
      </div>

      <button style={{ 
        backgroundColor: '#2563eb', color: 'white', padding: '10px 22px', borderRadius: '99px', border: 'none', 
        fontWeight: '800', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Contact Support
      </button>
    </nav>
  );
}
