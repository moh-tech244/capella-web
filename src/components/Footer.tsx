import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      borderTop: '1px solid #111', 
      padding: '100px 5vw 50px',
      marginTop: '100px',
      fontFamily: '"Inter", sans-serif'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-animate { animation: fadeInUp 0.8s ease-out forwards; }
        .hover-blue:hover { color: #2563eb !important; transition: 0.3s; cursor: pointer; }
        
        /* Grille adaptative : 2 par 2 sur tablette/PC, 1 par 1 sur mobile */
        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
          margin-bottom: 100px;
        }
        @media (max-width: 768px) {
          .explanation-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* GRILLE D'EXPLICATION 2 PAR 2 */}
        <div className="explanation-grid">
          {/* Bloc 1: Performance */}
          <div className="footer-animate" style={{ animationDelay: '0.1s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              ZERO LATENCY PROTOCOL
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.7' }}>
              Engineered specifically for **4K live sports**. Our private global network eliminates buffering and lag, ensuring a seamless elite viewing experience even during peak traffic.
            </p>
          </div>

          {/* Bloc 2: Livraison */}
          <div className="footer-animate" style={{ animationDelay: '0.2s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              INSTANT ACTIVATION
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.7' }}>
              Our proprietary automated system generates your **access credentials** and delivers them to your dashboard the exact millisecond your transaction is verified.
            </p>
          </div>

          {/* Bloc 3: Sécurité Stripe */}
          <div className="footer-animate" style={{ animationDelay: '0.3s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              SECURE STRIPE PAYMENTS
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.7' }}>
              All transactions are processed through **Stripe** with military-grade AES-256 encryption. Your sensitive financial data never touches our servers, ensuring 100% payment safety.
            </p>
          </div>

          {/* Bloc 4: Avantages Abonnés */}
          <div className="footer-animate" style={{ animationDelay: '0.4s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              EXCLUSIVE MEMBER BENEFITS
            </h4>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.7' }}>
              Elite subscribers receive **priority bandwidth** allocation, exclusive access to global PPV events, and 24/7 dedicated technical assistance for all devices.
            </p>
          </div>
        </div>

        {/* SECTION MARQUE - TYPOGRAPHIE MASSIVE */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '80px',
          borderTop: '1px solid #111',
          paddingTop: '80px'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ 
              fontSize: 'clamp(40px, 8vw, 120px)', // Couvre massivement l'espace sur TV
              fontWeight: '900', 
              color: '#fff', 
              marginBottom: '30px', 
              letterSpacing: '-4px',
              lineHeight: '0.9'
            }}>
              CAPELLA<span style={{ color: '#2563eb' }}>.</span>
            </h3>
            <p style={{ color: '#71717a', fontSize: '20px', lineHeight: '1.8', maxWidth: '700px' }}>
              The gold standard in media optimization. Empowering elite users with **15,000+ premium channels** and a 99.9% uptime guarantee.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px' }}>Legal & Trust</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '16px', lineHeight: '2.5' }}>
                <li className="hover-blue">Privacy Policy</li>
                <li className="hover-blue">Terms of Service</li>
                <li className="hover-blue">Security Protocol</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '16px', lineHeight: '2.5' }}>
                <li className="hover-blue">24/7 Priority Desk</li>
                <li className="hover-blue">System Status</li>
                <li className="hover-blue">Contact Engineering</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT DISCRET */}
        <div style={{ 
          marginTop: '120px', 
          textAlign: 'center',
          color: '#27272a',
          fontSize: '11px',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER | POWERED BY STRIPE SECURE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
