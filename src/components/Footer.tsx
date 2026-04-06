import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      borderTop: '1px solid #111', 
      padding: '80px 20px 40px',
      marginTop: '100px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* GRILLE DE CONFIANCE ÉLITE (4 COLONNES) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '30px', 
          marginBottom: '80px' 
        }}>
          {/* Bloc 1: Performance */}
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', marginBottom: '15px' }}>ZERO LATENCY PROTOCOL</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>
              Engineered for 4K live sports. Our private network eliminates buffering even during peak global events.
            </p>
          </div>

          {/* Bloc 2: Livraison */}
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', marginBottom: '15px' }}>INSTANT ACTIVATION</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>
              Our automated system generates your credentials and delivers them the millisecond your payment is confirmed.
            </p>
          </div>

          {/* Bloc 3: Sécurité Stripe (Nouveau) */}
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', marginBottom: '15px' }}>SECURE PAYMENTS</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>
              Transactions secured by <strong>Stripe</strong>. Military-grade encryption (AES-256) ensures your financial data never touches our servers.
            </p>
          </div>

          {/* Bloc 4: Offres Exclusives (Nouveau) */}
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px', marginBottom: '15px' }}>ELITE BENEFITS</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>
              Members get exclusive access to PPV events, early feature betas, and priority bandwidth allocation during major finals.
            </p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #111', marginBottom: '60px' }} />

        {/* CONTENU PRINCIPAL DU FOOTER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px' }}>
          <div style={{ maxWidth: '400px' }}>
            <h3 style={{ fontSize: '26px', fontWeight: 'bold', color: '#fff', marginBottom: '20px', letterSpacing: '2px' }}>CAPELLA</h3>
            <p style={{ color: '#71717a', fontSize: '15px', lineHeight: '1.8' }}>
              The gold standard in media optimization. We provide high-performance streaming solutions with 15,000+ channels for the most demanding users worldwide.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Infrastructure</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#71717a', fontSize: '14px', lineHeight: '2.5' }}>
                <li style={{ cursor: 'pointer' }}>Edge Network Status</li>
                <li style={{ cursor: 'pointer' }}>4K Optimization Lab</li>
                <li style={{ cursor: 'pointer' }}>Technical Specs</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#71717a', fontSize: '14px', lineHeight: '2.5' }}>
                <li style={{ cursor: 'pointer' }}>24/7 Priority Help</li>
                <li style={{ cursor: 'pointer' }}>Reddit Community</li>
                <li style={{ cursor: 'pointer' }}>Documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & TAGLINE */}
        <div style={{ 
          marginTop: '100px', 
          paddingTop: '30px', 
          borderTop: '1px solid #09090b', 
          textAlign: 'center'
        }}>
          <p style={{ color: '#3f3f46', fontSize: '11px', letterSpacing: '1.5px', marginBottom: '10px' }}>
            © 2026 CAPELLA HOME MEDIA OPTIMIZER. ALL RIGHTS RESERVED.
          </p>
          <div style={{ color: '#1e3a8a', fontSize: '10px', fontWeight: '900', letterSpacing: '3px' }}>
            BUILT FOR THE ELITE | POWERED BY STRIPE
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
