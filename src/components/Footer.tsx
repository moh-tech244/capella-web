import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      borderTop: '1px solid #111', 
      padding: '120px 5vw 60px',
      marginTop: '100px',
      fontFamily: '"Inter", sans-serif',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideRight {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-reveal { 
          opacity: 0; 
          animation: revealUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; 
        }
        .footer-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          animation: slideRight 2s ease-out forwards;
        }
        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px;
          margin-bottom: 120px;
        }
        .hover-card {
          transition: transform 0.4s ease, border-color 0.4s ease;
          border-left: 2px solid transparent;
          padding-left: 20px;
        }
        .hover-card:hover {
          transform: translateX(10px);
          border-left-color: #2563eb;
        }
        @media (max-width: 900px) {
          .explanation-grid { grid-template-columns: 1fr; gap: 50px; }
        }
      `}</style>

      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* LIGNE ANIMÉE DE SÉPARATION */}
        <div className="footer-line" style={{ marginBottom: '80px' }}></div>

        {/* GRILLE D'EXPLICATION 2 PAR 2 AVEC ANIMATIONS DÉCALÉES */}
        <div className="explanation-grid">
          {/* Bloc 1: Performance */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.2s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '20px' }}>
              ZERO LATENCY PROTOCOL
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '20px', lineHeight: '1.8' }}>
              Engineered specifically for **4K live sports**. Our private global network eliminates buffering and lag, ensuring a seamless elite viewing experience even during peak traffic.
            </p>
          </div>

          {/* Bloc 2: Livraison */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.4s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '20px' }}>
              INSTANT ACTIVATION
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '20px', lineHeight: '1.8' }}>
              Our proprietary automated system generates your **access credentials** and delivers them to your dashboard the exact millisecond your transaction is verified.
            </p>
          </div>

          {/* Bloc 3: Sécurité Stripe */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.6s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '20px' }}>
              SECURE STRIPE PAYMENTS
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '20px', lineHeight: '1.8' }}>
              All transactions are processed through **Stripe** with military-grade AES-256 encryption. Your sensitive financial data never touches our servers, ensuring 100% payment safety.
            </p>
          </div>

          {/* Bloc 4: Avantages Abonnés */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.8s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '20px' }}>
              EXCLUSIVE MEMBER BENEFITS
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '20px', lineHeight: '1.8' }}>
              Elite subscribers receive **priority bandwidth** allocation, exclusive access to global PPV events, and 24/7 dedicated technical assistance for all devices.
            </p>
          </div>
        </div>

        {/* SECTION MARQUE - TYPOGRAPHIE MASSIVE ET ANIMÉE */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '80px',
          borderTop: '1px solid #111',
          paddingTop: '100px'
        }}>
          <div className="animate-reveal" style={{ flex: '1 1 600px', animationDelay: '1s' }}>
            <h3 style={{ 
              fontSize: 'clamp(50px, 10vw, 150px)', // Couvre encore plus d'espace sur TV
              fontWeight: '900', 
              color: '#fff', 
              marginBottom: '40px', 
              letterSpacing: '-6px',
              lineHeight: '0.8'
            }}>
              CAPELLA<span style={{ color: '#2563eb' }}>.</span>
            </h3>
            <p style={{ color: '#71717a', fontSize: '22px', lineHeight: '1.8', maxWidth: '800px' }}>
              The gold standard in media optimization. Empowering elite users with **15,000+ premium channels** and a 99.9% uptime guarantee.
            </p>
          </div>

          <div className="animate-reveal" style={{ display: 'flex', gap: '100px', flexWrap: 'wrap', alignItems: 'flex-end', animationDelay: '1.2s' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>Security & Trust</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '18px', lineHeight: '2.8' }}>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>Privacy Policy</li>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>Terms of Service</li>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>Stripe Verified</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>Global Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '18px', lineHeight: '2.8' }}>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>24/7 Priority Desk</li>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>Edge Status</li>
                <li style={{ cursor: 'pointer', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#52525b'}>Direct Inquiry</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & STRIPE TAG */}
        <div style={{ 
          marginTop: '150px', 
          textAlign: 'center',
          color: '#27272a',
          fontSize: '12px',
          letterSpacing: '5px',
          textTransform: 'uppercase'
        }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER | SECURE PAYMENTS BY STRIPE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
