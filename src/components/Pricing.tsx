import React from 'react';

export default function Pricing() {
  return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px' }}>
        Choose Your Protocol
      </h2>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Carte Basic Access */}
        <div style={{ 
          backgroundColor: '#111', 
          border: '1px solid #222', 
          borderRadius: '24px', 
          padding: '40px', 
          width: '320px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#a1a1aa', fontWeight: '600', marginBottom: '10px' }}>Basic Access</p>
          <h3 style={{ fontSize: '48px', fontWeight: '800', margin: '20px 0' }}>$15 CAD</h3>
          <p style={{ color: '#a1a1aa', marginBottom: '30px' }}>/month</p>
          <button style={{ 
            width: '100%', 
            padding: '14px', 
            borderRadius: '12px', 
            border: 'none', 
            fontWeight: '700', 
            cursor: 'pointer',
            backgroundColor: 'white',
            color: 'black'
          }}>
            Get Started
          </button>
        </div>

        {/* Carte Elite Protocol (Mise en avant) */}
        <div style={{ 
          backgroundColor: '#111', 
          border: '2px solid #2563eb', 
          borderRadius: '24px', 
          padding: '40px', 
          width: '320px',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-15px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '4px 15px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '700'
          }}>
            MOST POPULAR
          </div>
          <p style={{ color: '#a1a1aa', fontWeight: '600', marginBottom: '10px' }}>Elite Protocol</p>
          <h3 style={{ fontSize: '48px', fontWeight: '800', margin: '20px 0' }}>$89 CAD</h3>
          <p style={{ color: '#a1a1aa', marginBottom: '30px' }}>/year</p>
          <button style={{ 
            width: '100%', 
            padding: '14px', 
            borderRadius: '12px', 
            border: 'none', 
            fontWeight: '700', 
            cursor: 'pointer',
            backgroundColor: '#2563eb',
            color: 'white'
          }}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
