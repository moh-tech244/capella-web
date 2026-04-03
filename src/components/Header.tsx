import React from 'react';

export default function Header() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 60px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#2563eb', padding: '10px', borderRadius: '12px', display: 'flex' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/></svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '20px', color: 'white' }}>Capella R&D Lab</span>
      </div>
      
      {/* Menu */}
      <div style={{ display: 'flex', gap: '35px', color: '#a1a1aa', fontSize: '14px', fontWeight: '500' }}>
        <span>Features</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>
      
      {/* Bouton Support Bleu Arrondi */}
      <button style={{ 
        backgroundColor: '#2563eb', 
        color: 'white', 
        border: 'none', 
        padding: '12px 26px', 
        borderRadius: '99px', 
        fontWeight: '700', 
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        Contact Support
      </button>
    </nav>
  );
}
