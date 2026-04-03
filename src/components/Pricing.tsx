import React from 'react';

export const Pricing = () => { // <--- Il faut bien le "export" ici
  const plans = [
    { name: "Starter", price: "199€", features: ["Optimisation Google Maps", "Audit SEO Local", "Rapport Mensuel"] },
    { name: "Business", price: "399€", features: ["Tout du pack Starter", "Gestion des Avis", "5 Mots-clés ciblés"], popular: true },
    { name: "Premium", price: "699€", features: ["Tout du pack Business", "Campagne Ads Local", "Support 24/7"] }
  ];

  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', fontWeight: 'bold', color: '#fff' }}>Nos Offres</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {plans.map((p, i) => (
          <div key={i} style={{ 
            backgroundColor: '#111', 
            padding: '40px', 
            borderRadius: '20px', 
            border: p.popular ? '2px solid #3b82f6' : '1px solid #222',
            position: 'relative'
          }}>
            {p.popular && <span style={{ backgroundColor: '#3b82f6', color: '#fff', fontSize: '0.8rem', padding: '5px 12px', borderRadius: '20px', position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>POPULAIRE</span>}
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{p.name}</h3>
            <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>{p.price}</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '30px', color: '#94a3b8' }}>
              {p.features.map((f, idx) => <li key={idx} style={{ marginBottom: '10px' }}>✅ {f}</li>)}
            </ul>
            <button style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '10px', 
              border: 'none', 
              backgroundColor: p.popular ? '#3b82f6' : '#222', 
              color: '#fff', 
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Choisir ce pack</button>
          </div>
        ))}
      </div>
    </section>
  );
};
