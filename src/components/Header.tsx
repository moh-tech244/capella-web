import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
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
      <style>{`
        @keyframes borderGlow {
          0% { box-shadow: 0 0 5px rgba(37, 99, 235, 0.2); }
          50% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.6); }
          100% { box-shadow: 0 0 5px rgba(37, 99, 235, 0.2); }
        }
        .btn-support {
          background: #000;
          color: #fff;
          border: 1px solid #2563eb;
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: borderGlow 3s infinite;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-support:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.4);
        }
      `}</style>

      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <div style={{ backgroundColor: '#2563eb', padding: '10px', borderRadius: '12px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z"/></svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '19px', color: 'white', letterSpacing: '-0.5px' }}>CAPELLA <span style={{ color: '#2563eb' }}>R&D</span></span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        {!isMobile && (
          <>
            <span onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Features</span>
            <span onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>Pricing</span>
          </>
        )}
        
        <button 
          className="btn-support"
          onClick={() => window.open('https://wa.me/14389693772', '_blank')}
        >
          <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
          Support Protocol
        </button>
      </div>
    </nav>
  );
}
