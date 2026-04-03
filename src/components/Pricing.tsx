import React from 'react';

export default function Pricing() {
  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#000', color: 'white', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '50px' }}>Choose Your Protocol</h2>
      
      {/* Container Principal */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        flexWrap: 'wrap' 
      }}>
        
        {/* Carte Basic */}
        <div style={{
          backgroundColor: '#111',
          border: '1px solid #222',
          borderRadius: '40px',
          padding: '60px 40px',
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{ color: '#a1a1aa', fontWeight: '600', fontSize: '14px' }}>Basic Access</span>
          <div style={{ fontSize: '64px', fontWeight: '900', margin: '20px 0' }}>$15 CAD</div>
          <span style={{ color: '#a1a1aa', marginBottom: '40px' }}>/month</span>
          <button style={{
            width: '100%',
            padding: '18px',
            borderRadius: '15px',
            border: 'none',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: '800',
            cursor: 'pointer'
          }}>Get Started</button>
        </div>

        {/* Carte Elite (Celle avec le badge bleu) */}
        <div style={{
          backgroundColor: '#111',
          border: '2px solid #2563eb',
          borderRadius: '40px',
          padding: '60px 40px',
          width: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Badge "Most Popular" */}
          <div style={{
            position: 'absolute',
            top: '-15px',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '99px',
            fontSize: '12px',
            fontWeight: '900'
          }}>MOST POPULAR</div>

          <span style={{ color: '#a1a1aa', fontWeight: '600', fontSize: '14px' }}>Elite Protocol</span>
          <div style={{ fontSize: '64px', fontWeight: '900', margin: '20px 0' }}>$89 CAD</div>
          <span style={{ color: '#a1a1aa', marginBottom: '40px' }}>/year</span>
          <button style={{
            width: '100%',
            padding: '18px',
            borderRadius: '15px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: '800',
            cursor: 'pointer'
          }}>Get Started</button>
        </div>

      </div>
    </div>
  );
}
