import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="features" style={{ 
      padding: isMobile ? '80px 15px' : '120px 20px', 
      textAlign: 'center', 
      backgroundColor: '#000', 
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: '"Inter", sans-serif',
      position: 'relative',
      backgroundImage: `
        radial-gradient(circle at 50% -20%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
        linear-gradient(rgba(26, 32, 44, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(26, 32, 44, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '100% 100%, 50px 50px, 50px 50px',
      minHeight: isMobile ? '70vh' : '85vh',
      overflow: 'hidden'
    }}>
      
      {/* ANIMATIONS CSS */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(300px); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .scanner-line {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          animation: scan 4s linear infinite;
          z-index: 1;
        }
        .btn-premium:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
          background-color: #3b82f6 !important;
        }
        .badge-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      <div className="scanner-line"></div>

      {/* BADGE ÉLÉGANT */}
      <div className="badge-float" style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        backgroundColor: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.3)',
        color: '#3b82f6', padding: '6px 16px', borderRadius: '99px', 
        fontSize: '11px', fontWeight: '800', marginBottom: '25px', 
        textTransform: 'uppercase', letterSpacing: '1px', backdropFilter: 'blur(10px)'
      }}>
        <span style={{ width: '6px', height: '6px', backgroundColor: '#3b82f6', borderRadius: '50%', display: 'inline-block' }}></span>
        Enterprise-Grade Performance
      </div>

      {/* TITRE MASSIF */}
      <h1 style={{ 
        fontSize: isMobile ? '42px' : '82px', 
        fontWeight: '900', 
        marginBottom: '20px', 
        letterSpacing: '-3px',
        lineHeight: '1',
        maxWidth: '1000px',
        padding: '0 10px',
        background: 'linear-gradient(to bottom, #fff 60%, #71717a)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Next-Gen Media <br/>
        <span style={{ color: '#2563eb', WebkitTextFillColor: '#2563eb' }}>Optimization Protocol</span>
      </h1>

      <p style={{ 
        fontSize: isMobile ? '16px' : '20px', 
        color: '#a1a1aa', 
        maxWidth: '700px', 
        lineHeight: '1.6',
        marginBottom: '45px',
        padding: '0 20px'
      }}>
        Experience Ultra-HD stability and 4K performance tailored for global networks. 
        Engineered for the elite.
      </p>

      {/* BOUTONS D'ACTION STYLÉS */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        zIndex: 2
      }}>
        <button 
          className="btn-premium"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ 
            backgroundColor: '#2563eb', color: 'white', 
            padding: '18px 45px', borderRadius: '14px', border: 'none', 
            fontSize: '16px', fontWeight: '800', cursor: 'pointer',
            transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '10px'
          }}
        >
          View Protocols
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>

        <button 
          onClick={() => document.getElementById('features-details')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ 
            backgroundColor: 'transparent', color: '#fff', 
            padding: '18px 45px', borderRadius: '14px', 
            border: '1px solid #27272a', fontSize: '16px', fontWeight: '700', 
            cursor: 'pointer', transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#52525b'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#27272a'}
        >
          Explore Specs
        </button>
      </div>

      {/* DÉCORATION BASSE ÉLÉGANTE */}
      <div style={{
        marginTop: '60px',
        display: 'flex',
        gap: '40px',
        opacity: 0.5,
        filter: 'grayscale(1)'
      }}>
        {['4K READY', 'ULTRA STABLE', 'SECURE'].map((tag) => (
          <span key={tag} style={{ fontSize: '12px', fontWeight: '900', letterSpacing: '2px' }}>{tag}</span>
        ))}
      </div>
    </section>
  );
}
