import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Détection automatique de la taille de l'écran (Mobile vs PC)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Style commun pour les liens de navigation
  const navLinkStyle = {
    color: '#a1a1aa', // Couleur grise d'origine
    fontSize: isMobile ? '16px' : '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'color 0.2s',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: isMobile ? '15px 20px' : '15px 60px', // Padding adaptable
      position: 'sticky', // Reste fixé en haut de la page
      top: 0, 
      zIndex: 1000, // Passe au-dessus de tout le contenu
      backgroundColor: 'rgba(0, 0, 0, 0.9)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #111'
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#2563eb', padding: '10px', borderRadius: '14px', display: 'flex' }}>
          {/* Nouveau Logo Capella : Triangle */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '18px', color: 'white', letterSpacing: '-0.5px' }}>
          Capella R&D Lab
        </span>
      </div>

      {/* Navigation et Boutons (ADAPTABLE) */}
      {isMobile ? (
        // Version MOBILE (Menu Burger)
        <div>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '24px' }}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          {menuOpen && (
            <div style={{
              position: 'absolute', top: '70px', left: 0, width: '100%',
              backgroundColor: '#0a0a0a', padding: '30px',
              display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center',
              borderBottom: '1px solid #1a1a1a'
            }}>
              <span style={navLinkStyle}>Features</span>
              <span style={navLinkStyle}>Pricing</span>
              <span style={navLinkStyle}>Contact</span>
              <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '10px 22px', borderRadius: '99px', border: 'none', fontWeight: '800' }}>
                Contact Support
              </button>
            </div>
          )}
        </div>
      ) : (
        // Version PC (Même structure que sur ton image)
        <>
          <div style={{ display: 'flex', gap: '35px' }}>
            {['Features', 'Pricing', 'Contact'].map((item) => (
              <span key={item} style={navLinkStyle} 
                   onMouseEnter={(e) => e.currentTarget.style.color = 'white'} 
                   onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}>
                {item}
              </span>
            ))}
          </div>
          <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '10px 22px', borderRadius: '99px', border: 'none', fontWeight: '800', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            {/* Icône bulle de chat d'origine */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Contact Support
          </button>
        </>
      )}
    </nav>
  );
}
