import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '80px 20px', 
      backgroundColor: '#000', 
      borderTop: '1px solid #111',
      marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '15px', letterSpacing: '1px' }}>CAPELLA</h3>
          <p style={{ color: '#52525b', fontSize: '14px', lineHeight: '1.6' }}>
            Elite Media Optimization. Global Edge Network protocols for 4K performance without buffering.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '60px' }}>
          <div>
            <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '15px' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#52525b', fontSize: '14px', lineHeight: '2.5' }}>
              <li>Status Page</li>
              <li>Documentation</li>
              <li>Reddit Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px', color: '#27272a', fontSize: '12px', borderTop: '1px solid #09090b', paddingTop: '30px' }}>
        © 2026 CAPELLA HOME MEDIA OPTIMIZER. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
