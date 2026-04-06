import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '80px 20px', 
      backgroundColor: '#000', 
      borderTop: '1px solid #111',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#fff', marginBottom: '10px', letterSpacing: '1px' }}>CAPELLA</h3>
        <p style={{ color: '#52525b', fontSize: '14px', marginBottom: '30px' }}>
          Elite Media Optimization. Global Edge Network protocols for 4K performance.
        </p>
        <div style={{ color: '#27272a', fontSize: '12px', borderTop: '1px solid #09090b', paddingTop: '20px' }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
