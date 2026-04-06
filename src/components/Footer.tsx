import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#000', 
      borderTop: '1px solid #111', 
      padding: '100px 5vw 50px', // Utilise 5% de la largeur pour couvrir l'espace
      marginTop: '100px',
      fontFamily: '"Inter", sans-serif'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-animate { animation: fadeInUp 0.8s ease-out forwards; }
        .hover-blue:hover { color: #2563eb !important; transition: 0.3s; }
      `}</style>

      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* GRILLE DE CONFIANCE - COUVRE TOUT L'ESPACE */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '50px', 
          marginBottom: '100px' 
        }}>
          {[
            { title: "ZERO LATENCY PROTOCOL", desc: "Engineered for 4K live sports. Our private network eliminates buffering even during peak global events.", icon: "⚡" },
            { title: "INSTANT ACTIVATION", desc: "Automated delivery. Credentials sent the millisecond your Stripe payment is confirmed.", icon: "🚀" },
            { title: "SECURE PAYMENTS", desc: "Transactions secured by Stripe. AES-256 encryption ensures your data stays private.", icon: "💳" },
            { title: "ELITE BENEFITS", desc: "Exclusive access to PPV events, priority bandwidth, and 24/7 dedicated support.", icon: "💎" }
          ].map((item, i) => (
            <div key={i} className="footer-animate" style={{ animationDelay: `${i * 0.2}s` }}>
              <div style={{ fontSize: '24px', marginBottom: '15px' }}>{item.icon}</div>
              <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '15px' }}>{item.title}</h4>
              <p style={{ color: '#a1a1aa', fontSize: '16px', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SECTION PRINCIPALE - TYPOGRAPHIE LARGE */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          flexWrap: 'wrap', 
          gap: '80px',
          borderTop: '1px solid #09090b',
          paddingTop: '80px'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ 
              fontSize: 'clamp(32px, 5vw, 64px)', // Police fluide qui couvre l'espace
              fontWeight: '900', 
              color: '#fff', 
              marginBottom: '30px', 
              letterSpacing: '-2px',
              lineHeight: '1'
            }}>
              CAPELLA<span style={{ color: '#2563eb' }}>.</span>
            </h3>
            <p style={{ color: '#71717a', fontSize: '18px', lineHeight: '1.8', maxWidth: '600px' }}>
              The gold standard in media optimization. High-performance streaming powered by private protocols for the elite.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px' }}>Infrastructure</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '16px', lineHeight: '2.5' }}>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>Edge Network Status</li>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>4K Optimization Lab</li>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>Technical Specs</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#52525b', fontSize: '16px', lineHeight: '2.5' }}>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>24/7 Priority Help</li>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>Reddit Community</li>
                <li className="hover-blue" style={{ cursor: 'pointer' }}>Documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT FINAL */}
        <div style={{ 
          marginTop: '120px', 
          textAlign: 'center',
          color: '#27272a',
          fontSize: '12px',
          letterSpacing: '3px'
        }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER. BUILT FOR THE ELITE | POWERED BY STRIPE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
