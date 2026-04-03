import React from 'react';

export default function Header() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 50px',
      position: 'sticky', 
      top: 0, 
      zIndex: 1000, 
      backgroundColor: 'rgba(0, 0, 0, 0.9)', 
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #111'
    }}>
      {/* Logo Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          backgroundColor: '#2563eb', 
          padding: '10px', 
          borderRadius: '14px', 
          display: 'flex',
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.3)' 
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
          </svg>
        </div>
        <span style={{ fontWeight: '900', fontSize: '18px', color: 'white', letterSpacing: '-0.5px' }}>
          Capella R&D Lab
        </span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '35px' }}>
        {['Features', 'Pricing', 'Contact'].map((item) => (
          <span key={item} style={{ 
            color: '#71717a', 
            fontSize: '13px', 
            fontWeight: '600', 
            cursor: 'pointer',
            transition: '0.2s'
          }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} 
             onMouseLeave={(e) => e.currentTarget.style.color = '#71717a'}>
            {item}
          </span>
        ))}
      </div>

      {/* Button Support */}
      <button style={{ 
        backgroundColor: '#2563eb', 
        color: 'white', 
        padding: '10px 22px', 
        borderRadius: '99px', 
        border: 'none', 
        fontWeight: '800', 
        fontSize: '13px',
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        cursor: 'pointer',
        transition: 'transform 0.2s'
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Contact Support
      </button>
    </nav>
  );
}
