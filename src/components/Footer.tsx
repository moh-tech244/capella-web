import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      borderTop: '1px solid #111', 
      padding: '100px 5vw 60px',
      marginTop: '100px',
      fontFamily: '"Inter", sans-serif',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitchText {
          0% { text-shadow: 2px 0 0 rgba(37, 99, 235, 0.5), -2px 0 0 rgba(255, 255, 255, 0.1); }
          50% { text-shadow: -2px 0 0 rgba(37, 99, 235, 0.5), 2px 0 0 rgba(255, 255, 255, 0.1); }
          100% { text-shadow: 2px 0 0 rgba(37, 99, 235, 0.5), -2px 0 0 rgba(255, 255, 255, 0.1); }
        }
        .animate-reveal { 
          opacity: 0; 
          animation: revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; 
        }
        .explanation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
          margin-bottom: 100px;
        }
        .hover-card {
          transition: all 0.4s ease;
          border-left: 1px solid #111;
          padding-left: 25px;
        }
        .hover-card:hover {
          border-left-color: #2563eb;
          background: linear-gradient(90deg, rgba(37, 99, 235, 0.05), transparent);
        }
        .capella-logo {
          font-size: 60px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -3px;
          animation: glitchText 4s infinite linear;
          text-transform: uppercase;
        }
        @media (max-width: 900px) {
          .explanation-grid { grid-template-columns: 1fr; gap: 40px; }
          .capella-logo { font-size: 40px; }
        }
      `}</style>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div className="explanation-grid">
          {/* Bloc 1: Performance */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.1s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              ENCRYPTED DATA FLOW
            </h4>
            <p style={{ color: '#71717a', fontSize: '17px', lineHeight: '1.6' }}>
              Engineered for **high-bitrate stability**. Our private routing eliminates packet loss, ensuring a seamless elite data experience even during peak network traffic.
            </p>
          </div>

          {/* Bloc 2: Livraison */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.2s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              NODE ACTIVATION
            </h4>
            <p style={{ color: '#71717a', fontSize: '17px', lineHeight: '1.6' }}>
              Our automated protocol generates your **unique access keys** and syncs them to your dashboard the exact millisecond your transaction is verified.
            </p>
          </div>

          {/* Bloc 3: Sécurité Stripe */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.3s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              SECURE LEDGER PAYMENTS
            </h4>
            <p style={{ color: '#71717a', fontSize: '17px', lineHeight: '1.6' }}>
              Transactions processed through **Stripe** with military-grade AES-256 encryption. Financial metadata is never stored on our local optimization nodes.
            </p>
          </div>

          {/* Bloc 4: Avantages Abonnés */}
          <div className="animate-reveal hover-card" style={{ animationDelay: '0.4s' }}>
            <h4 style={{ color: '#2563eb', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>
              ELITE BANDWIDTH
            </h4>
            <p style={{ color: '#71717a', fontSize: '17px', lineHeight: '1.6' }}>
              Subscribers receive **priority routing** allocation, exclusive access to high-demand digital assets, and 24/7 dedicated L3 technical liaison.
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '40px',
          borderTop: '1px solid #111',
          paddingTop: '60px',
          alignItems: 'center'
        }}>
          <div className="animate-reveal" style={{ animationDelay: '0.5s' }}>
            <h3 className="capella-logo">
              CAPELLA<span style={{ color: '#2563eb' }}>_</span>RD
            </h3>
            <p style={{ color: '#52525b', fontSize: '16px', marginTop: '10px' }}>
              The gold standard in media infrastructure and node optimization.
            </p>
          </div>

          <div className="animate-reveal" style={{ display: 'flex', gap: '60px', animationDelay: '0.6s' }}>
            <div>
              <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase' }}>Privacy</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '14px', lineHeight: '2' }}>
                <li style={{ cursor: 'pointer' }}>Terms</li>
                <li style={{ cursor: 'pointer' }}>Nodes</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '20px', textTransform: 'uppercase' }}>Liaison</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '14px', lineHeight: '2' }}>
                <li style={{ cursor: 'pointer' }}>Status</li>
                <li style={{ cursor: 'pointer' }}>Support</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '80px', 
          textAlign: 'center',
          color: '#27272a',
          fontSize: '10px',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER | SYSTEM STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
};

export default Footer;
