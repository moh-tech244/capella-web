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

  return (
    <nav style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: isMobile ? '15px 20px' : scrolled ? '12px 60px' : '25px 60px',
      position: 'sticky', top: 0, zIndex: 1000, 
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent', 
      backdropFilter: 'blur(15px)',
      borderBottom: scrolled ? '1px solid #111' : '1px solid transparent',
      transition: 'all 0.4s ease'
    }}>
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <div style={{ backgroundColor: '#2563eb', padding: '10px', borderRadius: '12px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z"/></svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '19px', color: 'white', letterSpacing: '-0.5px' }}>CAPELLA <span style={{ color: '#2563eb' }}>R&D</span></span>
      </div>

      {!isMobile ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {['Features', 'Pricing'].map(item => (
            <span key={item} onClick={() => scrollTo(item.toLowerCase())} style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: '0.3s' }}>{item}</span>
          ))}
          <button 
            onClick={() => window.open('https://wa.me/14389693772?text=Bonjour,%20je%20souhaite%20commander%20un%20protocole.', '_blank')}
            style={{ backgroundColor: '#25D366', color: 'white', padding: '10px 22px', borderRadius: '99px', border: 'none', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            WhatsApp Support
          </button>
        </div>
      ) : (
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px' }}>{menuOpen ? '✕' : '☰'}</button>
      )}

      {menuOpen && isMobile && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: '#050505', padding: '40px', display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'center', borderBottom: '1px solid #111' }}>
          <span onClick={() => scrollTo('features')} style={{ color: 'white', fontSize: '18px' }}>Features</span>
          <span onClick={() => scrollTo('pricing')} style={{ color: 'white', fontSize: '18px' }}>Pricing</span>
          <button onClick={() => window.open('https://wa.me/14389693772', '_blank')} style={{ backgroundColor: '#25D366', color: 'white', padding: '15px', borderRadius: '12px', border: 'none', fontWeight: '800' }}>Contact WhatsApp</button>
        </div>
      )}
    </nav>
  );
}
