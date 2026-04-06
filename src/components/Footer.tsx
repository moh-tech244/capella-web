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
        
        {/* Section FAQ Express / Rassurance */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px' }}>ZERO LATENCY</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>Optimized for 4K live sports with no buffering, guaranteed by our private protocol.</p>
          </div>
          <div>
            <h4 style={{ color: '#2563eb', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px' }}>INSTANT DELIVERY</h4>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>Automated system. Credentials sent the second your payment is confirmed.</p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #111', marginBottom: '60px' }} />

        {/* Footer Main */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '50px' }}>
          <div style={{ maxWidth: '350px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '20px', letterSpacing: '2px' }}>CAPELLA</h3>
            <p style={{ color: '#71717a', fontSize: '15px', lineHeight: '1.7' }}>
              The gold standard in media optimization. High-performance streaming powered by private protocols for elite users.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#71717a', fontSize: '14px', lineHeight: '2.5' }}>
                <li style={{ cursor: 'pointer' }}>Status Page</li>
                <li style={{ cursor: 'pointer' }}>Reddit DM</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center', color: '#3f3f46', fontSize: '12px', letterSpacing: '1px' }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER. BUILT FOR THE ELITE.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
