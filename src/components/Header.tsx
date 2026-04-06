import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinkStyle = {
    color: '#a1a1aa',
    fontSize: isMobile ? '18px' : '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: '"Inter", sans-serif',
    letterSpacing: '0.5px'
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: isMobile ? '15px 20px' : scrolled ? '12px 60px' : '20px 60px',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.5)', 
      backdropFilter: 'blur(15px)',
      borderBottom: scrolled ? '1px solid #111' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-item:hover { color: #fff !important; transform: translateY(-1px); }
        .burger-line {
          width: 24px; height: 2px; background-color: white;
          margin: 5px 0; transition: 0.4s;
        }
      `}</style>

      {/* Logo Section */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
      >
        <div style={{ 
          backgroundColor: '#2563eb', 
          padding: '10px', 
          borderRadius: '12px', 
          display: 'flex',
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)' 
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '19px', color: 'white', letterSpacing: '-0.5px' }}>
          Capella <span style={{ color: '#2563eb' }}>R&D</span>
        </span>
      </div>

      {/* Navigation PC */}
      {!isMobile && (
        <>
          <div style={{ display: 'flex', gap: '40px' }}>
            {['Features', 'Pricing', 'Contact'].map((item) => (
              <span 
                key={item} 
                className="nav-item"
                onClick={() => scrollTo(item.toLowerCase())}
                style={navLinkStyle}
              >
                {item}
              </span>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('pricing')}
            style={{ 
              backgroundColor: '#2563eb', color: 'white', padding: '12px 24px', 
              borderRadius: '99px', border: 'none', fontWeight: '800', 
              fontSize: '13px', display: 'flex', alignItems: 'center', 
              gap: '8px', cursor: 'pointer', transition: '0.3s',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Contact Support
          </button>
        </>
      )}

      {/* Menu Mobile */}
      {isMobile && (
        <div>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: '10px' }}
          >
            <div className="burger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : '' }}></div>
            <div className="burger-line" style={{ opacity: menuOpen ? 0 : 1 }}></div>
            <div className="burger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(-5px, -6px)' : '' }}></div>
          </button>
          
          {menuOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, width: '100%',
              backgroundColor: 'rgba(5, 5, 5, 0.98)', padding: '40px 20px',
              display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center',
              borderBottom: '1px solid #111', animation: 'slideIn 0.3s ease-out forwards',
              backdropFilter: 'blur(20px)'
            }}>
              <span style={navLinkStyle} className="nav-item" onClick={() => scrollTo('features')}>Features</span>
              <span style={navLinkStyle} className="nav-item" onClick={() => scrollTo('pricing')}>Pricing</span>
              <span style={navLinkStyle} className="nav-item" onClick={() => scrollTo('footer')}>Contact</span>
              <button 
                onClick={() => scrollTo('pricing')}
                style={{ 
                  backgroundColor: '#2563eb', color: 'white', width: '100%', maxWidth: '250px',
                  padding: '16px', borderRadius: '14px', border: 'none', fontWeight: '800' 
                }}
              >
                Get Started Now
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
